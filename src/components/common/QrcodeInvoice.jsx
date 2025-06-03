import { CLIENT_URL } from '@/constant/constant'
import React from 'react'
import QRCode from 'react-qr-code'
import { Button } from '../ui/button'
import { FaTruckLoading } from 'react-icons/fa'
import { CloudDownloadOutlined, LoadingOutlined } from '@ant-design/icons'

export default function QrcodeInvoice({
    scanUrl,
    onDownload,
    isLoading = false
}) {
    return (
        <div className='bg-mainbg container mx-auto w-full'>
            <div className='bg-white w-full rounded-xl p-4 sm:p-6 shadow'>
                <div className=" p-4 sm:p-6 justify-center flex flex-col items-center">
                    <div className="relative mb-6">

                        <div className="w-36 h-36 sm:w-48 sm:h-48 object-contain">
                            {
                                scanUrl ? <QRCode
                                    size={256}
                                    style={{ height: "100%", maxWidth: "100%", width: "100%" }}
                                    value={scanUrl}
                                    viewBox={`0 0 256 256`}
                                /> : <></>
                            }
                        </div>


                    </div>

                    <p className="text-gray-500 text-sm text-center mb-6">
                        Scan the code to view in any device
                    </p>

                    <div className="w-full space-y-3">
                        <Button
                            variant="outline"
                            className="w-full h-11  bg-primary text-white hover:bg-primary"
                            onClick={onDownload}
                        >
                            {
                                isLoading ? <div className='flex justify-center items-center gap-2'><span>Downloading Ticket</span> <LoadingOutlined /></div> : <div>Download Ticket <CloudDownloadOutlined className='ml-2' /></div>
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
