"use client"
import { Button } from "@/components/ui/button";
import RouteInfor from "../ui/RouteInfor";
import moment from "moment";
import FacilityAvailable from "../common/FacilityAvalable";
import { usePathname, useSearchParams } from "next/navigation";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import RouteDetailSuccessComponent from "../common/RouteDetailSuccess";
import { CLIENT_URL } from "@/constant/constant";

export default function TicketConfirmation({
  book
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [fullUrl, setUrl] = useState(null);

  useEffect(() => {
    const fullUrl = window.location.href;
    console.log(fullUrl);
    setUrl(fullUrl);
  }, [pathname, searchParams]);

  return (
    <div className="bg-mainbg container mx-auto max-w-7xl p-4 sm:p-6">

      <div className="grid lg:grid-cols-[1fr,auto] gap-4 sm:gap-8">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-between gap-4 w-full ">
                <h2 className="text-lg font-semibold">
                  {book?.routeBus?.meta_key}
                </h2>
                <span className="text-rose-500 font-bold  text-left">
                  Seat Number {book?.seat_no}
                </span>
              </div>
              <FacilityAvailable facilities={book?.facilities} />
            </div>
          </div>

          {/* route infor */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-4 mb-8 w-full">
            <RouteDetailSuccessComponent route={book} />
          </div>

          {/*  */}
          <div className="space-y-6">
            {
              book?.pickup ? (<>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="text-gray-600">Pick Up At:</div>
                  <div className="font-medium sm:text-end">
                    <div>{book?.pickup?.title}</div>
                  </div>
                </div></>) : (<></>)
            }

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="text-gray-600">E-Tickets has been sent to:</div>
              <div className="font-medium sm:text-end">
                <div>{book?.ticket?.first_name} {book?.ticket?.last_name}</div>
                <div>{book?.ticket?.email}</div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div>
                <h3 className="font-medium mb-3">Traveller Details</h3>
                <div className="space-y-1">
                  <div className=""><span className="text-gray-500 pr-5">Phone Number: </span>{book?.ticket?.mobile}</div>
                  <div><span className="text-gray-500 pr-5">Booking Status: </span> {book?.seat_status}</div>
                  <div><span className="text-gray-500 pr-5">Price: </span> {book?.price}</div>
                  <div><span className="text-gray-500 pr-5">Ticket: </span> {book?.ticketCount}</div>
                  {
                    book?.paymentMethod != 'khqr' ? <div><span className="text-gray-500 pr-5">Service Charge: </span>$ {book?.ticketCount}</div> : <></>
                  }
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end pt-4 border-t">
              <div className="text-gray-600">Total Fare</div>
              {
                book?.paymentMethod != 'khqr' ? <div className="text-xl font-medium">${(Number(book?.price) * book?.ticketCount) + book?.ticketCount}</div> : <div className="text-xl font-medium">${Number(book?.price) * book?.ticketCount}</div>
              }

            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
}
