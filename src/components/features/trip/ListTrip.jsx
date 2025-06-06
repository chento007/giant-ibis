"use client";
import React from 'react'


import { cn } from '@/lib/utils';
import RouteDetailComponent from '@/components/common/RouteDetailComponent';
export default function TripListComponent({
    handleTripSelect,
    trip,
    index,
    isLoadingFetching,
    departure_date
}) {
    return (
        <div
            key={index}
            className={cn('p-6 max-sm:p-2 flex w-full justify-between items-start cursor-pointer hover:shadow-lg transition-shadow border rounded-lg relative dark:bg-gray-800',)}
            onClick={() => handleTripSelect(trip)}
            role="button" // Makes it behave like a button for accessibility
            tabIndex={0} // Makes it focusable
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleTripSelect(trip);
                }
            }}
        >
            <RouteDetailComponent route={trip} isListTrip />
        </div>
    )
}
