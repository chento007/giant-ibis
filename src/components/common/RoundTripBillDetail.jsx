import React from 'react'

export default function RoundTripBillDetail({
    departurePrice,
    returnPrice,
    totalTraveller,
    totalCharge,
    paymentMethod = 'khqr'
}) {
    return (
        <div className="bg-white rounded-md p-6 shadow-custom2 dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4">Bill details</h2>
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Departure Base Ticket Fare</span>
                    <span>${departurePrice}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Return Base Ticket Fare</span>
                    <span>${returnPrice}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Travellers</span>
                    <span>{totalTraveller}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Service Charge</span>
                    <span>$ {totalTraveller}</span>
                </div>
                <div className="flex justify-between font-medium pt-3 border-t">
                    <span>Total Charge</span>
                    <span>${totalCharge + totalTraveller}</span>
                </div>
            </div>
        </div>
    )
}
