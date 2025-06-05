"use client";
import dayjs from 'dayjs';
import React from 'react'


import {
    Bus,
    Clock,
    Coffee,
    MapPin,
    Wifi,
    Monitor,
    Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasBusLeft } from "@/utils/time-util";
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import RouteInfor from '@/components/ui/RouteInfor';
import FacilityAvailable from '@/components/common/FacilityAvalable';
import RouteDetailComponent from '@/components/common/RouteDetailComponent';
export default function TripListComponent({
    handleTripSelect,
    trip,
    index,
    isLoadingFetching,
    departure_date
}) {
    return (
        <button
            key={index}
            className={cn('p-6 max-sm:p-2 flex w-full justify-between items-start cursor-pointer hover:shadow-lg transition-shadow border rounded-lg relative dark:bg-gray-800',)}
            onClick={() => {
                handleTripSelect(trip);
            }}
        >
            <RouteDetailComponent route={trip} isListTrip />
        </button>
    )
}
