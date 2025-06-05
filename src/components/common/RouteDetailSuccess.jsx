import React from 'react'
import FacilityAvailable from './FacilityAvalable'
import { Bus, MapPin } from 'lucide-react'
import RouteInfor from '../ui/RouteInfor'
import AddressGoogleMap from './AddressGoogleMap'

export default function RouteDetailSuccessComponent({ route, selectedSeat }) {
    return (
        <div className="space-y-6 w-full">

            <div className="">
                <div className="flex items-center justify-between">
                    <div>
                        <RouteInfor
                            city={route?.originDetail?.city?.city_name}
                            departure_date={route?.originDetail?.leaveAt}
                            isStart={true}
                            time={route?.originDetail?.time}
                            routeId={route?.id}
                            address={route?.originDetail?.address?.url}
                        />
                    </div>
                    <Bus className="w-5 h-5 text-secondary ml-2" />
                    <div className="flex-1 px-4 relative">
                        <div className="text-center mt-6 text-sm max-sm:text-[10px] text-gray-500">
                            {route?.duration}
                        </div>
                        <div className="relative w-full flex items-center justify-between top-0">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <div className="flex-1 border-t border-secondary"></div>
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        </div>

                        <div className="text-center text-sm max-sm:text-[10px] text-gray-500">
                            {route?.kilo_meters} KM
                        </div>
                    </div>
                    <div className="flex   items-center text-right">
                        <MapPin className="w-5 h-5 text-secondary mr-2" />

                        <div className='relative'>
                            <RouteInfor
                                city={route?.destinationDetail?.city?.city_name}
                                routeId={route?.id}
                                departure_date={route?.destinationDetail?.arriveAt}
                                isStart={false}
                                time={route?.destinationDetail?.time}
                                address={route?.destinationDetail?.address?.url}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between'>
                    <AddressGoogleMap address={route?.originDetail?.address?.url} />
                    <AddressGoogleMap address={route?.destinationDetail?.address?.url} />
                </div>
            </div>
        </div>
    )
}
