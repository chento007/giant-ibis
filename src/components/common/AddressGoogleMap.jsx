import { cn } from '@/lib/utils'
import { MapPinCheck } from 'lucide-react'
import React from 'react'

export default function AddressGoogleMap({
    address
}) {
    return (
        <div className={cn("cursor-pointer text-center",)}>
            {address && (
                <a
                    href={address}
                    target='_blank'
                    rel="noopener noreferrer"
                    className={cn(
                        ' border-2 rounded-md p-1 max-sm:p-[1px] mt-2 px-2 max-sm:px-1 border-primary flex items-center gap-1 max-sm:gap-[1px] text-sm hover:text-blue-800 transition-colors',
                    )}
                    aria-label="View location on map"
                >
                    <div className='text-black max-sm:text-[12px] text-[16px]'>Get Direction</div><MapPinCheck className='tex-[12px] max-sm:text-[12px] max-sm:w-[30px] text-secondary' />
                </a>
            )}
        </div>
    )
}
