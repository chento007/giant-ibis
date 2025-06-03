'use client'
import { cn } from '@/lib/utils'
import { Map, MapIcon, MapPinCheck, Pin } from 'lucide-react'
import React, { } from 'react'
import AddressGoogleMap from '../common/AddressGoogleMap'

export default function RouteInfor({
    departure_date,
    time,
    city,
    isStart,
    address,
    isShowAddress = true,
}) {

    return (
        <div className={cn('flex flex-col ',
            !isStart ? 'justify-end items-end' : 'justify-start items-start',
        )}>
            <div>
                <div className={cn('text-lg font-semibold max-sm:text-[14px] text-gray-900', isStart ? 'text-start' : 'text-right')}>
                    {departure_date}
                </div>
                <div className={cn('text-lg font-semibold max-sm:text-[15px] text-gray-900 text-start', isStart ? 'text-start' : 'text-right')}>
                    {time}
                </div>
                <div className={cn('text-sm text-gray-500 text-start max-sm:text-[13px]', isStart ? 'text-start' : 'text-right')}>
                    {city}
                </div>
            </div>

        </div>
    )
}
