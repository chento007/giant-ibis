import { cn } from '@/lib/utils'
import { getStatusColor } from '@/utils/color-util'
import { renderBusLayout } from '@/utils/seat-status'
import React from 'react'
import BunkComponent from '../seat/BunkComponent';

export default function ParentSeatLayout({
    busType,
    onClick,
    seatData,
}) {

    const colMapping = {
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
    };

    const Colspan = {
        4: 'col-span-4',
        5: 'col-span-5',
        6: 'col-span-6',
    };


    const rowSpan = {
        2: 'row-span-2',
        4: 'row-span-4',
        5: 'row-span-5',
        6: 'row-span-6',
    };
    const onDisabled = () => {
        return item?.status != 'Available';
    }

    return (
        <>
            {
                seatData ? (
                    <div className='w-full'>
                        <div className="text-black text-center mb-5 text-sm dark:text-white">Vechicle Type: {busType}</div>
                        <div className={cn(`grid max-sm:ml-0 ml-8 gap-2`, colMapping[seatData?.col] || 'grid-cols-2')}>
                            {
                                busType === "Sleeper Bus" ? <BunkComponent colSpan={Colspan[seatData.col]} title={"Bottom Bunk"} /> : <></>
                            }
                            <div className={cn('', Colspan[seatData.col])}>

                                <button
                                    className={cn(
                                        `w-12 h-12 flex items-center justify-center rounded-lg `,
                                    )}
                                >
                                    <img src="/assets/icons/driver-seat.png" className='w-[45px] h-[50px]' alt="" />
                                </button>
                            </div>
                            {seatData?.seats?.map((item, index) => {

                                if (item?.showTextColSpanRow) {
                                    return (
                                        <div className={cn(Colspan[seatData.col])} key={index}>
                                            <BunkComponent colSpan={Colspan[seatData.col]} title={"Top Bunk"} />
                                            <div className={cn('', Colspan[seatData.col])}>
                                                <button
                                                    className={cn(
                                                        `w-12 h-[60px] flex items-center justify-center rounded-lg `,
                                                    )}
                                                >
                                                    <img src="/assets/icons/driver-seat.png" className='w-[45px] h-[50px]' alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }

                                if (item?.rowSpan) {

                                    return (
                                        <button
                                            key={index}
                                            disabled={item?.status == 'Booked' || item?.status == 'Reserved' || item?.status == 'wc' || item?.status == 'hide'}
                                            onClick={() => onClick(item)}
                                            className={cn(
                                                `w-12 h-[60px] flex items-center justify-center rounded-lg ${getStatusColor(item?.status)} ${rowSpan[item?.rowSpan]}`,
                                                item?.status == 'Available' ? 'cursor-pointer' : '',
                                                item?.status == 'Booked' ? 'cursor-not-allowed' : '',
                                                item?.status == 'Reserved' ? 'cursor-not-allowed' : '',
                                                item?.status == 'hide' ? 'cursor-auto' : '',
                                                item?.status == 'wc' ? 'cursor-auto' : ''
                                            )}
                                        >
                                            {renderBusLayout(item?.status, item?.seat)}
                                        </button>
                                    )
                                }

                                return (
                                    <button
                                        key={index}
                                        disabled={item?.status == 'Booked' || item?.status == 'Reserved' || item?.status == 'wc' || item?.status == 'hide'}
                                        onClick={() => onClick(item)}
                                        className={cn(
                                            `w-12 h-[60px] flex items-center justify-center rounded-lg ${getStatusColor(item?.status)} text-black`,
                                            item?.status == 'Available' ? 'cursor-pointer' : '',
                                            item?.status == 'Booked' ? 'cursor-not-allowed' : '',
                                            item?.status == 'Reserved' ? 'cursor-not-allowed' : '',
                                            item?.status == 'hide' ? 'cursor-auto' : '',
                                            item?.status == 'wc' ? 'cursor-auto' : ''
                                        )}
                                    >
                                        {renderBusLayout(item?.status, item?.seat)}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                ) : <>Bus not Available</>
            }

        </>
    )
}
