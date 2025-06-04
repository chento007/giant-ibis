import React from 'react'
import FacilityAvailable from './FacilityAvalable'
import { Bus, MapPin } from 'lucide-react'
import RouteInfor from '../ui/RouteInfor'
import AddressGoogleMap from './AddressGoogleMap'
import { Button } from '../ui/button'

export default function RouteDetailComponent({ route, selectedSeat = [], isListTrip = false, tripTypeTitle = "Departure Trip Details" }) {
    return (
        <div className="space-y-6 w-full">
            {
                !isListTrip ? <div>
                    <h2 className="text-xl font-semibold max-sm:text-[14px]">{tripTypeTitle}</h2>
                    <div className="flex justify-between items-start mt-2">
                        <span className="font-bold max-sm:text-[12px]">{route?.bus_type}</span>
                        <span className="text-pink-600 font-bold max-sm:text-[12px] text-right">
                            Seat Number: [ {selectedSeat?.map((item, index) => (<span key={index}>{item?.seat} , </span>)) || "-"} ]
                        </span>
                    </div>
                    <FacilityAvailable facilities={route?.facilities} />
                </div> : <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium flex ">
                            <div className='max-sm:text-[15px]'>{route?.bus_type}</div>
                            <Button
                                size="sm"
                                variant="secondary"
                                className="bg-primary ml-2 text-white hover:bg-blue-700"
                            >
                                ${route?.price}
                            </Button>
                        </h3>

                        <div className="text-right">
                            <span className="text-seatColor text-sm font-semibold">
                                {route?.seat_status?.seats?.filter(
                                    seat => seat.status === "Available"
                                ).length} Seats Left
                            </span>
                        </div>
                    </div>
                    <FacilityAvailable facilities={route?.facilities} />

                </div>
            }

            <div className="">
                <div className="flex items-center justify-between">
                    <div>
                        <RouteInfor
                            city={route?.originDetail?.city?.city_name}
                            departure_date={route?.originDetail?.leaveAt}
                            isStart={true}
                            time={route?.timing?.meta_value}
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
                    <div className="flex items-center text-right">
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
                {
                    !isListTrip ? <div className='w-full flex justify-between'>
                        <AddressGoogleMap address={route?.originDetail?.address?.url} />
                        <AddressGoogleMap address={route?.destinationDetail?.address?.url} />
                    </div> : <div></div>
                }
            </div>
        </div>
    )
}
