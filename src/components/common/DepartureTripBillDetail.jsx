import React from 'react'

export default function DepartureTripBillDetail({
    price,
    selectedSeat,
    totalCharge,
    paymentMethod = 'khqr'
}) {
    return (
        <div className="bg-white rounded-md p-6 shadow-custom2 dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4">Bill details</h2>
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-gray-600"> Base Ticket Fare </span>
                    <span>${price}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Total Travellers</span>
                    <span>{selectedSeat}</span>
                </div>
                {
                    paymentMethod != "khqr" ? <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Service Charge</span>
                        <span>$ {selectedSeat}</span>
                    </div> : <></>
                }
                <div className="flex justify-between font-medium pt-3 border-t">
                    <span>Total Charge</span>
                    {
                        paymentMethod != "khqr" ? <span>${totalCharge + selectedSeat}</span> : <span>${totalCharge}</span>
                    }
                </div>
            </div>
        </div>
    )
}

