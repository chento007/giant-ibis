'use client'
import { use, useState } from "react";
import SuccessTitleSecsion from "@/components/pages/SuccessTitleSecsion";
import TicketConfirmation from "@/components/pages/BookSuccess";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingComponent from "@/components/layout/Loading";
import { useCheckStatusQuery } from "@/store/features/check-status";
import { CLIENT_URL } from "@/constant/constant";
import download from 'downloadjs';
import QrcodeInvoice from "@/components/common/QrcodeInvoice";

export default function SuccessPage({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoadingDownload, setIsloadingDownload] = useState(false);

  const _paymenttokenid = searchParams.get('_paymenttokenid');

  const { data: book, isLoading } = useCheckStatusQuery({ tranId: _paymenttokenid, refCode: id });

  if (isLoading) {
    return (<LoadingComponent />)
  }
  const fullUrl = `${CLIENT_URL}/api/tickets/one-way?refCode=${id}&invoiceId=${_paymenttokenid}&preview=true`;


  const handleDownload = async () => {
    try {
      setIsloadingDownload(true);

      const response = await fetch(
        `${CLIENT_URL}/api/tickets/one-way?refCode=${id}&invoiceId=${_paymenttokenid}&preview=false`
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

  return (
    <div className="bg-mainbg container mx-auto max-w-7xl p-4 sm:p-6">
      <SuccessTitleSecsion />
      <div className="grid lg:grid-cols-[1fr,auto] gap-4 sm:gap-1">
        <TicketConfirmation book={book?.data} />
        <QrcodeInvoice scanUrl={fullUrl} isLoading={isLoadingDownload} onDownload={() => handleDownload()} />
      </div>
    </div>
  );
}