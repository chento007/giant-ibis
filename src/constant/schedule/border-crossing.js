import { Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Hotel } from "lucide-react"

export const borderCrossingItem = [
    {
        header: "Phnom Penh to Bangkok",
        data: [
            {
                title: "Departure Point",
                content: <div>
                    <p>
                        The bus departs from the Giant Ibis Bus Terminal on Street 106, Sangkat Doun Penh, Khan Doun Penh (Night Market).
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/usMAEbJP2Ny35pcd6`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/usMAEbJP2Ny35pcd6</Link>
                    </p>
                    <Button variant="secondary" className="mt-4 bg-primary text-white hover:bg-primary">
                        <Hotel className="w-4 h-4 mr-2" /> Map
                    </Button>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-primary",
                hasMap: true,
                position: "left",
            },
            {
                title: "Pickup Service – Important!",
                content:
                    "Complimentary pickup service is currently not available for night bus departures. Please arrange your own transportation to the departure point.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "right",
                hasHotel: true,
            },
            {
                title: "On the Road",
                content:
                    "Once the bus departs, the Crew Attendant will distribute a bottle of water and cold towel. Please contact the Crew Attendant for anything you need during the journey.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Onboard Toilet",
                content:
                    "Giant Ibis night buses are the only vehicles in our fleet with an onboard toilet. The bus will not make any bathroom stops during the journey.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
            },
            {
                title: "Driver Swap",
                content:
                    "We place passenger safety at the core of our operations, so the bus will stop briefly midway through the journey,so the drivers can swop. The 15-minute stop allows the two drivers to get out and stretch their legs, have a cup of coffee and a bowl of porridge. If you're awake and have the munchies, feel free to grab a quick bite for some authentic rural roadside cuisine.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Duration",
                content:
                    "National Road 5 – the highway between Phnom Penh and Bangkok – has been widened from two to four lanes, making the journey much quicker and smoother. You can expect the 655km journey to take about 11 hours and 30 minutes, arriving in Bangkok at about 11am.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Get some sleep…",
                content:
                    "Our recliner seat can make your trip more comforatbale during the journey. You can make it recline and get some sleep . Don't forget to charge your phone in our power points while you sleep.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Cambodian Customs and Immigration",
                content:
                    "When the bus arrives as the border, passengersmust disembark to receive an exit stamp in their passports. The Crew Attendant will return passports to passengers as they get off the bus and collect them again when you get back on to process them with Thai immigration.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Thai Customs and Immigration",
                content:
                    "After all Thai visas have been processed, passengers can board the bus without having their luggage scanned. The Crew Attendant is on hand to guide passengers through the process and back to the bus, where a snack is served.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Want to get off at Pratunam?",
                content:
                    "If you’re heading to Bangkok’s shopping hotspot, Pratunam is the place to be! Before we reach our main terminal, you can choose to get off here and explore Bangkok’s lively markets, vibrant street food, and fantastic shopping. Just let our staff know, and we’ll be happy to drop you off at Pratunam, giving you the perfect start to your Bangkok adventure before we head to the final stop!",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Arrival in Bangkok",
                content: <div>
                    <p>
                        The bus stops at Phra Sumen Rd, Talat Yot, Phra Nakhon, Bangkok. Once you've received your baggage, there will be plenty of tuktuks/taxis waiting to take you to your next destination.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/WuWCLfmgeijLc9c47`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/WuWCLfmgeijLc9c47</Link>
                    </p>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
                hasMap: true,
            },
        ]

    },
    {
        header: "Bangkok to Phnom Penh",
        data: [
            {
                title: "Cambodia Visa",
                content:
                    "If you’re excited about your upcoming trip to Cambodia, we have some helpful tips to ensure a smooth arrival! First, check whether you need a visa on arrival—our friendly crew attendants will be available to assist you at the border. A tourist visa costs $35, while a business visa is $45. Although these fees might seem a bit high, they are certainly worth it! Additionally, we will charge a $5 service fee for batch processing at the border. If you prefer to handle your visa yourself, that’s perfectly fine! Just keep in mind that it may take longer, and our bus can only wait for a limited time. Don’t forget to print your e-visa before you board! If you don’t have access to a printer, don’t worry—our bus terminals and offices offer free printing services. Here’s to amazing adventures and unforgettable experiences in Cambodia! Safe travels!",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "left",
                hasHotel: true,
            },
            {
                title: "Departure Point",
                content: <div>
                    <p>
                        The bus departs from the Giant Ibis stop at Phra Sumen Rd, Talat Yot, Phra Nakhon, Bangkok. If you are not using our pickup service, please arrive 30 minutes before the scheduled departure.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/WuWCLfmgeijLc9c47`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/WuWCLfmgeijLc9c47</Link>
                    </p>
                    <Button variant="secondary" className="mt-4 bg-primary text-white hover:bg-primary">
                        <Hotel className="w-4 h-4 mr-2" /> Map
                    </Button>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-primary",
                hasMap: true,
                position: "left",
            },
            {
                title: "Picking up at Pratunam?",
                content:
                    "As we travel from Bangkok to Phnom Penh, we can pick you up at Pratunam after leaving the main terminal. If you're in the area, just let our staff know, and we’ll make sure to pick you up along the route. It’s a great option if you’re heading to Phnom Penh and want to join the journey from the heart of Bangkok’s shopping district!",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "right",
                hasHotel: true,
            },
            {
                title: "Pickup Service – Important!",
                content:
                    "Complimentary pickup service is currently not available for night bus departures. Please arrange your own transportation to the departure point.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "right",
                hasHotel: true,
            },
            {
                title: "On the Road",
                content:
                    "Once the bus departs, the Crew Attendant will distribute a bottle of water and cold towel. Please contact the Crew Attendant for anything you need during the journey.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Onboard Toilet",
                content:
                    "Giant Ibis night buses are the only vehicles in our fleet with an onboard toilet. The bus will not make any bathroom stops during the journey.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
            },
            {
                title: "Driver Swap",
                content:
                    "We place passenger safety at the core of our operations, so the bus will stop briefly midway through the journey,so the drivers can swop. The 15-minute stop allows the two drivers to get out and stretch their legs, have a cup of coffee and a bowl of porridge. If you're awake and have the munchies, feel free to grab a quick bite for some authentic rural roadside cuisine.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Duration",
                content:
                    "National Road 5 – the highway between Bangkok and Phnom Penh – has been widened from two to four lanes, making the journey much quicker and smoother. You can expect the 655km journey to take about 13 hours, arriving in Phnom Penh at about 3pm.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Get some sleep…",
                content:
                    "Our recliner seat can make your trip more comforatbale during the journey. You can make it recline and get some sleep . Don't forget to charge your phone in our power points while you sleep.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Thai Customs and Immigration",
                content:
                    "When the bus arrives as the border, passengers must disembark to receive an exit stamp in their passports. The Crew Attendant will return passports to passengers as they get off the bus and collect them again when you get back on to process them with Cambodian immigration.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Cambodian Customs and Immigration",
                content:
                    "After all Cambodian visas have been processed, the bus continues to the immigration check point. Passengers are not required to have their luggage scanned.The Crew Attendant will guide passengers to the passport collection point and back to the bus, where a snack is served.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Arrival in Phnom Penh",
                content: <div>
                    <p>
                        The bus arrives at the Giant Ibis Bus Station on Street 106, Sangkat Doun Penh, Khan Doun (Night Market). Once you've received your baggage, there will be plenty of tuktuks waiting to take you to your next destination. If you're connecting with another Giant Ibis bus, then you're in the right place for your next departure. Leave your bags with us and tour the city if you have time.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/usMAEbJP2Ny35pcd6`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/usMAEbJP2Ny35pcd6</Link>
                    </p>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
                hasMap: true,
            },
        ]
    },
    {
        header: "Phnom Penh to Ho Chi Minh",
        data: [
            {
                title: "Vietnam Visa",
                content:
                    "Vietnam does not offer a visa on arrival for all countries. Passengers must pre-arrange their visa otherwise they will not be able to board the bus. Vietnam offers a 14-day visa waiver for several European and Asian countries so check before arranging your trip. While an e-visa may seem an attractive and speedier option, Passengers will be required to print e-visa before boarding the bus. If you don't have access to a printer, no worries, we have one in each of our bus terminal/office, you can print your e-visa for free.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "right",
                hasHotel: true,
            },
            {
                title: "Departure Point",
                content: <div>
                    <p>
                        The bus depart from the Giant Ibis Bus Terminal on Street 106, Sangkat Doun Penh, Khan Doun Penh (Night Market. If you are not using our pickup service, please arrive 30 minutes before scheduled departure.)
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/usMAEbJP2Ny35pcd6`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/usMAEbJP2Ny35pcd6</Link>
                    </p>
                    <Button variant="secondary" className="mt-4 bg-primary text-white hover:bg-primary">
                        <Hotel className="w-4 h-4 mr-2" /> Map
                    </Button>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-primary",
                hasMap: true,
                position: "left",
            },
            {
                title: "Pickup Service – Important!",
                content:
                    "Complimentary pickup service is offered to passengers staying at any of our partner hotels.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "right",
                hasHotel: true,
            },
            {
                title: "On the Road",
                content:
                    "Once the bus departs, the Crew Attendant will hand out a pastry from Blue Pumpkin, a bottle of water and cold towel. The Crew Attendant is on hand throughout the journey to respond to passengers' needs.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Cambodian Customs and Immigration",
                content:
                    "When the bus arrives as the border, passengersmust disembark to receive an exit stamp in their passports. The Crew Attendant will return passports to passengers as they get off the bus and collect them again when you get back on to process them with Vietnamese immigration.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
            },
            {
                title: "Lunch Stop",
                content:
                    "After all passengers have cleared Cambodian immigration, the bus will stop at a restaurant in the duty-free zone. Here, passengers can enjoy lunch while the Crew Attendant takes all passports to the Vietnamese immigration check point to start the process while you eat, saving time crossing the border.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Vietnamese Customs and Immigration",
                content:
                    "After all of Vietnamese visas have been processed, the bus carries on to the immigration check point. Here, passengersare required to have their luggage scanned by Vietnamese customs. Note, if locals ask to help you carry your luggage, they will expect US$1 per bag. The Crew Attendant will guide passengers to the passport collection point, where the luggage is scanned and back to the bus.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Duration",
                content:
                    "The duration of the trip is about 7 hours on average +/- 30 minutes. The distance between Phnom Penh and HoChi Minh City is 240 km.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Relax…",
                content:
                    "Sit back, relax and enjoy the scenery. This journey passes through the provinces of Kandal, Prey Veng and SvayRieng, before crossing into Taininhprovince in Vietnam. You'll get to see Cambodian and Vietnamese rural life first-hand as you drive through small towns and villages. Free wifi is available onboard, but please note connection is temperamental when driving through rural areas. Our buses are also equipped with power points.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Arrival in Ho Chi Minh",
                content: <div>
                    <p>
                        The bus stops in Ho Chi Minh City at the Giant Ibis ticket office on Pham Ngu Lao Street in District 1. Once you've received your baggage there are plenty of metre taxis available to take you to your next destination.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/QksUjaJSeotBtw2f8`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/QksUjaJSeotBtw2f8</Link>
                    </p>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
                hasMap: true,
            },
        ]
    },
    {
        header: "Bangkok to Phnom Penh",
        data: [
            {
                title: "Cambodia Visa",
                content:
                    "If you’re excited about your upcoming trip to Cambodia, we have some helpful tips to ensure a smooth arrival! First, check whether you need a visa on arrival—our friendly crew attendants will be available to assist you at the border. A tourist visa costs $35, while a business visa is $45. Although these fees might seem a bit high, they are certainly worth it! Additionally, we will charge a $5 service fee for batch processing at the border. If you prefer to handle your visa yourself, that’s perfectly fine! Just keep in mind that it may take longer, and our bus can only wait for a limited time. Don’t forget to print your e-visa before you board! If you don’t have access to a printer, don’t worry—our bus terminals and offices offer free printing services. Here’s to amazing adventures and unforgettable experiences in Cambodia! Safe travels!",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "left",
                hasHotel: true,
            },
            {
                title: "Departure Point",
                content: <div>
                    <p>
                        The bus departs from the Giant Ibis ticket office in Ho Chi Minh City at Pham Ngu Lao Street in District 1. If you are not using our pickup service, please arrive 30 minutes before the scheduled departure.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/QksUjaJSeotBtw2f8`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/QksUjaJSeotBtw2f8</Link>
                    </p>
                    <Button variant="secondary" className="mt-4 bg-primary text-white hover:bg-primary">
                        <Hotel className="w-4 h-4 mr-2" /> Map
                    </Button>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-primary",
                hasMap: true,
                position: "left",
            },
            {
                title: "Pickup Service – Important!",
                content:
                    "Complimentary pickup service is offered to passengers staying at any of our partner hotels.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "right",
                hasHotel: true,
            },
            {
                title: "On the Road",
                content:
                    "Once the bus departs, the Crew Attendant will hand out a pastry from Blue Pumpkin, a bottle of water and cold towel. The Crew Attendant is on hand throughout the journey to respond to passengers' needs.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Lunch Stop",
                content:
                    "After clearing Vietnamese immigration, the bus will make a 30-minute stop at a restaurant in the duty-free zone. Here, passengers can enjoy lunch while the Crew Attendant takes all passports to the Cambodian immigration check point to start the process while you eat, saving time crossing the border.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
            },
            {
                title: "Cambodian Customs and Immigration",
                content:
                    "After all Cambodian visas have been processed, the bus continues to the immigration check point, where all luggage needs to be scanned. Note, if locals ask to help you carry your luggage, they will expect US$1 per bag. The Crew Attendant will guide passengers to the passport collection point, where the luggage is scanned and back to the bus.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Relax",
                content:
                    "Sit back, relax and enjoy the scenery. This journey passes through Taininhprovince in Vietnambefore passing through the Cambodian provinces ofSvayRieng, Prey Veng andKandal, and finally Phnom Penh. You'll get to see Vietnameseand Cambodian rural life first-hand as you drive through small towns and villages. Free wifi is available onboard, but please note connection is temperamental when driving through rural areas. Our buses are also equipped with power points.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Duration",
                content:
                    "The duration of the trip is 7 hours on average +/- 30 minutes. The distance between Ho Chi Minh City and Phnom Penh is 240 km.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Arrival in Phnom Penh",
                content: <div>
                    <p>
                        The bus arrives at the Giant Ibis Bus Station on Street 106, Sangkat Doun Penh, Khan Doun Penh (Night Market). Once you've received your baggage, there will be plenty of tuktuks waiting to take you to your next destination. If you're connecting with another Giant Ibis bus, then you're in the right place for your next departure. Leave your bags with us and tour the city if you have time.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/usMAEbJP2Ny35pcd6`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/usMAEbJP2Ny35pcd6</Link>
                    </p>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
                hasMap: true,
            },
        ]
    },
    {
        header: "Thai Visa",
        data: [
            {
                title: "Cambodia Visa",
                content:
                    "Thailand offers a free visa on arrival for many countries. Please check on your nationalities' status before boarding the bus. Passengers will be required to print e-visa before boarding the bus. If you don't have access to a printer, no worries, we have one in each of our bus terminal/office, you can print your e-visa for free.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "left",
                hasHotel: true,
            },
            {
                title: "Departure Point",
                content: <div>
                    <p>
                        The bus departs from the Giant Ibis bus terminal is located Behind Old Stadium, Khmer Pub Street.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/vQv7yF3nEoU3VTay5`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/vQv7yF3nEoU3VTay5</Link>
                    </p>
                    <Button variant="secondary" className="mt-4 bg-primary text-white hover:bg-primary">
                        <Hotel className="w-4 h-4 mr-2" /> Map
                    </Button>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-primary",
                hasMap: true,
                position: "left",
            },
            {
                title: "Pickup Service – Important!",
                content:
                    "Complimentary pickup service is offered to passengers staying at any of our partner hotels.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "right",
                hasHotel: true,
            },
            {
                title: "On the Road",
                content:
                    "Once the bus departs, the Crew Attendant will hand out a pastry from Blue Pumpkin, a bottle of water, a can of iced coffee and a cold towel. The Crew Attendant is on hand throughout the journey to respond to passengers' needs. The bus will make a stop in Cambodia and Thailand. Passengers will be required to fill out entry and exit forms before arriving at the border.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Cambodian Customs and Immigration",
                content:
                    "When the bus arrives as the border, passengersmust disembark to receive an exit stamp in their passports. The Crew Attendant will return passports to passengers as they get off the bus and collect them again when you get back on to process them with Thai immigration.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
            },
            {
                title: "Thai Customs and Immigration",
                content:
                    "After all Thai visas have been processed, passengers can board the bus without having their luggage scanned. The Crew Attendant is on hand to guide passengers through the process and back to the bus, where a packed lunch is served.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Duration",
                content:
                    "The duration of the trip is 8.5 hours on average +/- 30 minutes. The distance between Siem Reap and Bangkok is 410km.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Relax",
                content:
                    "Sit back, relax and enjoy the scenery. You'll get to see Thai and Cambodian rural life first-hand as you drive through small towns and villages. Free wifi is available onboard, but please note connection is temperamental when driving through rural areas. Our buses are also equipped with power points.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Duration",
                content:
                    "The duration of the trip is 7 hours on average +/- 30 minutes. The distance between Ho Chi Minh City and Phnom Penh is 240 km.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Arrival in Bangkok",
                content: <div>
                    <p>
                        The bus stops at Phra Sumen Rd, Talat Yot, Phra Nakhon, Bangkok. Once you've received your baggage, there will be plenty of tuktuks/taxis waiting to take you to your next destination.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/WuWCLfmgeijLc9c47`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/WuWCLfmgeijLc9c47</Link>
                    </p>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
                hasMap: true,
            },
        ]
    },
     {
        header: "Bangkok to Siem Reap",
        data: [
            {
                title: "Cambodia Visa",
                content:
                    "If you’re excited about your upcoming trip to Cambodia, we have some helpful tips to ensure a smooth arrival! First, check whether you need a visa on arrival—our friendly crew attendants will be available to assist you at the border. A tourist visa costs $35, while a business visa is $45. Although these fees might seem a bit high, they are certainly worth it! Additionally, we will charge a $5 service fee for batch processing at the border. If you prefer to handle your visa yourself, that’s perfectly fine! Just keep in mind that it may take longer, and our bus can only wait for a limited time. Don’t forget to print your e-visa before you board! If you don’t have access to a printer, don’t worry—our bus terminals and offices offer free printing services. Here’s to amazing adventures and unforgettable experiences in Cambodia! Safe travels!",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "left",
                hasHotel: true,
            },
            {
                title: "Departure Point",
                content: <div>
                    <p>
                        The bus departs from the Giant Ibis stop at Phra Sumen Rd, Talat Yot, Phra Nakhon, Bangkok. If you are not using our pickup service, please arrive 30 minutes before the scheduled departure.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/WuWCLfmgeijLc9c47`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/WuWCLfmgeijLc9c47</Link>
                    </p>
                    <Button variant="secondary" className="mt-4 bg-primary text-white hover:bg-primary">
                        <Hotel className="w-4 h-4 mr-2" /> Map
                    </Button>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-primary",
                hasMap: true,
                position: "left",
            },
            {
                title: "Pickup Service – Important!",
                content:
                    "Complimentary pickup service is offered to passengers staying at any of our partner hotels.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-secondary",
                position: "right",
                hasHotel: true,
            },
            {
                title: "On the Road",
                content:
                    "Once the bus departs, the Crew Attendant will hand out a pastry from Blue Pumpkin, a bottle of water, a can of iced coffee and a cold towel. The Crew Attendant is on hand throughout the journey to respond to passengers' needs.Passengers will be required to fill out entry and exit forms before arriving at the border. The bus will make a stop in Thailand and Cambodia.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },
            {
                title: "Thai Customs and Immigration",
                content:
                    "When the bus arrives as the border, passengers must disembark to receive an exit stamp in their passports. The Crew Attendant will return passports to passengers as they get off the bus and collect them again when you get back on to process them with Cambodian immigration.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
            },
            {
                title: "Cambodian Customs and Immigration",
                content:
                    "After all Cambodian visas have been processed, the bus continues to the immigration check point. Passengers are not required to have their luggage scanned.The Crew Attendant will guide passengers to the passport collection point and back to the bus, where a packed lunch is served.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Duration",
                content:
                    "The duration of the trip is 8.5 hours on average +/- 30 minutes. The distance between Bangkok and Siem Reap is 410km.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "right",
            },
            {
                title: "Relax",
                content:
                    "Sit back, relax and enjoy the scenery. You'll get to see Thai and Cambodian rural life first-hand as you drive through small towns and villages. Free wifi is available onboard, but please note connection is temperamental when driving through rural areas. Our buses are also equipped with power points.",
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-green-500",
                position: "left",
            },

            {
                title: "Arrival in Siem Reap",
                content: <div>
                    <p>
                        The bus stops at the Giant Ibis bus terminal is located Behind Old Stadium, Khmer Pub Street. Once you've received your baggage, there will be plenty of tuktuks waiting to take you to your next destination.
                    </p>
                    <p>
                        Google Map: <Link href={`https://maps.app.goo.gl/vQv7yF3nEoU3VTay5`} target="_blank" className="underline text-primary">https://maps.app.goo.gl/vQv7yF3nEoU3VTay5</Link>
                    </p>
                </div>,
                icon: <Rocket className="w-6 h-6 text-white" />,
                iconBg: "bg-red-500",
                position: "right",
                hasMap: true,
            },
        ]
    },
]