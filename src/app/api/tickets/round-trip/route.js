import { getAllBookDetail } from "@/services/giantIbisServiceCall";
import { ticketsService } from "../../service/ticket.service";
import { paymentService } from "../../service/payment.service";
import { NextResponse } from "next/server";

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const refCode = searchParams.get('refCode');
    const refCodeRoundTrip = searchParams.get('refCodeRoundTrip');
    const invoiceId = searchParams.get('invoiceId');
    const isPreview = searchParams.get('preview') === 'true';

    const paymentStatus = await paymentService.checkPaymentStatus(invoiceId);
    if (paymentStatus?.result.errorDetails != 'SUCCESS') {
        return NextResponse.json({
            status: false,
            message: "Your payment was not successful. Please try again."
        }, { status: 400 });
    }

    let paymentMethod = paymentStatus?.result?.paymentMethod;


    let booklist = await getAllBookDetail();

    let bookOneWay = booklist?.data?.filter((item, index) => item.ref_code === refCode);
    let bookRoundTrip = booklist?.data?.filter((item, index) => item.ref_code === refCodeRoundTrip);

    if (bookOneWay?.length <= 0 || bookRoundTrip?.length <= 0) {
        return NextResponse.json({
            status: false,
            message: "Ref code not found."
        }, { status: 400 });
    }


    booklist = await getAllBookDetail();
    bookOneWay = booklist?.data?.filter((item, index) => item.ref_code === refCode);
    bookRoundTrip = booklist?.data?.filter((item, index) => item.ref_code === refCodeRoundTrip);


    const data = await ticketsService.confirmRoundTrip(bookOneWay, bookRoundTrip, refCode, refCodeRoundTrip, true, paymentMethod);

    return new NextResponse(data, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': isPreview ? 'inline' : 'attachment; filename=invoice.pdf',
        },
    });
}