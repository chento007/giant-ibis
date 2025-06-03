'use client'
import { use, useState } from "react";
import SuccessTitleSecsion from "@/components/pages/SuccessTitleSecsion";
import TicketConfirmation from "@/components/pages/BookSuccess";
import { useSearchParams } from "next/navigation";
import LoadingComponent from "@/components/layout/Loading";
import { useCheckStatusQuery, useCheckStatusRoundTripQuery } from "@/store/features/check-status";
import QrcodeInvoice from "@/components/common/QrcodeInvoice";
import download from "downloadjs";
import { CLIENT_URL } from "@/constant/constant";

export default function SuccessPage({ params }) {
  const unwrappedParams = use(params);
  const { id, two } = unwrappedParams;
  const searchParams = useSearchParams();
  const _paymenttokenid = searchParams.get('_paymenttokenid');

  const [isLoadingDownload, setIsloadingDownload] = useState(false);

  const { data: book, isLoading: isLoading } = useCheckStatusRoundTripQuery({ tranId: _paymenttokenid, refCode: id, refCodeRoundTrip: two });

  if (isLoading) {
    return (<LoadingComponent />)
  }

  const handleDownload = async () => {
    try {
      setIsloadingDownload(true);

      const response = await fetch(
        `${CLIENT_URL}/api/tickets/round-trip?refCode=${id}&&refCodeRoundTrip=${two}&invoiceId=${_paymenttokenid}&preview=false`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch the file.');
      }

      const blob = await response.blob();

      const contentType = response.headers.get('content-type') || 'application/pdf';
      const filename = `ticket-${id}.pdf`;

      // Use downloadjs
      download(blob, filename, contentType);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsloadingDownload(false);
    }
  };
  const fullUrl = `${CLIENT_URL}/api/tickets/round-trip?refCode=${id}&&refCodeRoundTrip=${two}&invoiceId=${_paymenttokenid}&preview=true`;

  return (
    <div className="bg-mainbg container mx-auto max-w-7xl p-4 sm:p-6">
      <SuccessTitleSecsion />
      <div className="grid lg:grid-cols-[1fr,auto] gap-2">
        <div className="w-full">
          <TicketConfirmation book={book?.data?.oneWay} />
          <TicketConfirmation book={book?.data?.roundTrip} />
        </div>
        <QrcodeInvoice scanUrl={fullUrl} isLoading={isLoadingDownload} onDownload={() => handleDownload()} />
      </div>

    </div>
  );
}