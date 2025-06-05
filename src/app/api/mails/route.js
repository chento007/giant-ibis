import { NextResponse } from "next/server";
import moment from "moment";
import nodemailer from 'nodemailer';
import { sampleTemplate } from "./sample";

export async function GET(request) {

    const transporter = nodemailer.createTransport({
        host: '4156.smtp.antispamcloud.com',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const sampleHtml = sampleTemplate

    transporter.sendMail({
        from: 'Giant Ibis Transport <info@giantibis.com>',
        to: `CHENTO-CHEA@mptc.gov.kh`,
        subject: 'Giant Ibis Transport E-Ticket',
        text: 'Please find your e-ticket attached.',
        html: sampleTemplate,
    });


    return NextResponse.json({
        messate: "mail"
    })
}