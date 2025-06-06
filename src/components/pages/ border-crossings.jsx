
"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import { borderCrossingItem } from "@/constant/schedule/border-crossing"
import { cn } from "@/lib/utils"

export default function BorderCrossings() {
  const [openRouteIndex, setOpenRouteIndex] = useState(null)



  function RouteCollapse({ title, content, isOpen, onClick, dataDetails, isEndRoute }) {
    return (
      <Card className={cn('p-4 shadow-custom2 cursor-pointer transition-colors hover:bg-gray-50 dark:bg-gray-800',
        isEndRoute ? 'mb-10' : ''
      )} onClick={onClick}>
        <div className="grid grid-cols-4 items-center">
          <div />
          <h3 className="text-center font-medium w-full col-span-2">{title}</h3>
          <div className="flex justify-end">
            <Button variant="outline" className="w-8 h-8 flex items-center justify-center">
              {isOpen ? "-" : "+"}
            </Button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="mt-2 text-sm text-gray-500">{content}</div>
            <div className="mt-8 lg:mt-12  p-4 lg:p-10 rounded-md">
              <h2 className="text-2xl font-semibold text-center mb-6 lg:mb-8">Journey Details</h2>
              <div className="relative">
                <div className="absolute left-6 md:left-1/2 top-0 h-full w-px bg-gray-200 md:transform md:-translate-x-1/2" />
                <div className="space-y-24">
                  {dataDetails.map((item, index) => {
                    const contentBlock = (
                      <div className="shadow-custom p-8 rounded-md bg-white">
                        <h3 className="font-semibold mb-2 dark:text-black">{item.title}</h3>
                        <p className="text-sm text-gray-600 break-all w-full">{item.content}</p>
                      </div>
                    )

                    return (
                      <div key={index} className={cn(
                        'flex items-center gap-8',
                      )}>
                        <div className={`hidden md:block w-1/2 ${item.position === "left" ? "pr-8" : "pl-8"}`}>
                          {item.position === "left" && contentBlock}
                        </div>
                        <div className="w-14 h-12 rounded-full flex-shrink-0 z-10">
                          <div className={`w-14 h-14 rounded-full ${item.iconBg} flex items-center justify-center`}>
                            {item.icon}
                          </div>
                        </div>
                        <div className={`hidden md:block w-1/2 ${item.position === "right" ? "pl-8" : "pr-8"}`}>
                          {item.position === "right" && contentBlock}
                        </div>
                        <div className="md:hidden w-full pl-4 break-words">{contentBlock}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    )
  }


  return (
    <div className="bg-mainbg min-h-screen dark:bg-[#0D001A]">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:pt-12">
        <h1 className="text-2xl lg:text-3xl font-bold text-Textcolor text-center mb-4 dark:text-white">Border Crossings</h1>
        <p className="text-center text-Description mb-8 lg:mb-12 max-w-2xl mx-auto px-4 dark:text-gray-300">
          Crossing borders and getting visas can be tricky, but Giant Ibis makes it easy and stress-free. Our team takes
          care of the details so passengers can relax and have fewer problems at the border.
        </p>

        <div className="grid gap-3 px-4">
          {borderCrossingItem.map((route, index) => (
            <RouteCollapse
              key={index}
              title={route.header}
              isOpen={openRouteIndex === index}
              dataDetails={route.data}
              isEndRoute={route?.isEndRoute}
              onClick={() => setOpenRouteIndex(openRouteIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

