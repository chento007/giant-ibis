import { getAllBookDetail } from "@/services/giantIbisServiceCall";
import { NextResponse } from "next/server";
import { ticketsService } from "../../service/ticket.service";
import { paymentService } from "../../service/payment.service";

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const refCode = searchParams.get('refCode');
    const invoiceId = searchParams.get('invoiceId');
    const isPreview = searchParams.get('preview') === 'true';

    const paymentStatus = await paymentService.checkPaymentStatus(invoiceId);
    console.log("paymentStatus: ", paymentStatus?.result?.paymentMethod);

    if (paymentStatus?.result.errorDetails != 'SUCCESS') {
        return NextResponse.json({
            status: false,
            message: "Your payment was not successful. Please try again."
        }, { status: 400 });
    }

    let paymentMethod = paymentStatus?.result?.paymentMethod;

    let booklist = await getAllBookDetail();
    let bookOneWay = booklist?.data?.filter((item, index) => item.ref_code === refCode);

    if (bookOneWay?.length <= 0) {
        return NextResponse.json({
            status: false,
            message: "Ref code not found."
        }, { status: 400 });
    }

    const data = await ticketsService.confirmOneWay(bookOneWay, refCode, paymentMethod)
    return new NextResponse(data, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': isPreview ? 'inline' : 'attachment; filename=invoice.pdf',
        },
    });
}

