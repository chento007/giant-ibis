import { getAddressDetail, getCity, getPickUpList, getRouteBus, getRouteList, printTicket } from "@/services/giantIbisServiceCall";
import { calculateArrival, calculateArrivalTime } from "@/utils/time-util";
import moment from "moment";
import { generateInvoicePdf } from "./utils/generate-invoice";
import { generateInvoiceRoundTripPdf } from "./utils/generate-invoice-round-trip";

export class TicketsService {
    confirmOneWay = async (bookList, refCode, isConfirm, paymentMethod) => {
        const seatNumbers = bookList?.map(item => item?.seat_id).join(",");
        const routeList = await getRouteList();
        const cities = await getCity();

        const routeFilter = routeList?.data?.filter((route, index) => route?.id == bookList[0].route_id);
        let route;
        if (routeFilter?.length > 0) {
            route = routeFilter[0];
        }

        const originCity = cities?.data?.filter((city, index) => city?.city_id == route?.origin)
        const destinationCity = cities?.data?.filter((city, index) => city?.city_id == route?.destination)

        const destinationTime = calculateArrivalTime({
            departureTime: bookList[0].travel_date,
            durationHours: route?.duration,
            metaTime: bookList[0].travel_time
        });;

        const arrivalDate = calculateArrival({
            departureTime: bookList[0].travel_date,
            durationHours: route?.duration,
            metaTime: bookList[0].travel_time
        });


        // address
        const addressOriginAddress = await this.findAddress(route?.id, bookList[0].travel_time);
        let destinationAddress = null;
        if (addressOriginAddress?.data?.length > 0) {
            destinationAddress = {
                address: addressOriginAddress?.data[0]?.dropaddress,
                descripition: addressOriginAddress?.data[0]?.dropaddress,
                url: addressOriginAddress?.data[0]?.dropurl
            }
        }

        const busDetail = await this.findRouteBus(
            bookList[0].route_id,
            bookList[0].travel_time
        );

        const facility = this.getFacilities(busDetail?.data?.length > 0 ? busDetail?.data[0].facilities : null)
        const printTicket = await this.printTicketDetail(bookList[0].ref_code);
        let ticketInfor = null;
        let pickup = bookList[0].pickup;
        let pickupObj = null;

        if (pickup) {
            const getPickUpListData = await getPickUpList({ city_id: route?.origin });
            if (getPickUpListData?.data != 'NULL') {
                pickupObj = getPickUpListData?.data?.filter((item) => item?.id == pickup);
                pickupObj = pickupObj?.length > 0 ? pickupObj[0] : null;
            }
        }

        if (printTicket?.data?.length > 0) {
            ticketInfor = printTicket?.data?.filter((item) => item?.first_name != "guest_name0")?.map((item) => {

                const email = item?.email?.split(",");
                const first_name = item?.first_name.split(",");
                const last_name = item?.last_name.split(",");
                const mobile = item?.mobile.split(",");

                return {
                    ...item,
                    email: email?.length > 0 ? email[0] : null,
                    first_name: first_name?.length > 0 ? first_name[0] : null,
                    last_name: last_name?.length > 0 ? last_name[0] : null,
                    mobile: mobile?.length > 0 ? mobile[0] : null,
                }
            })
        }

        let passengers = ticketInfor?.map((item) => {
            return {
                username: `${item?.first_name || ""} ${item?.last_name || ""}`,
                mobile: item?.mobile || "",
                email: item?.email || "",
                pickup: pickupObj?.title || "",
            }
        });


        const pdfBuffer = await generateInvoicePdf({
            ticketCount: ticketInfor?.length || 0,
            price: ticketInfor[0].price,
            busType: route?.bus_type || "",
            kilometer: route?.kilo_meters || "",
            duration: route?.duration || "",
            seatNo: seatNumbers || "",
            toEmail: ticketInfor?.length > 0 ? ticketInfor[0]?.email : "",
            ticketId: refCode,
            dateSend: ticketInfor?.length > 0 ? ticketInfor[0]?.issued_date : "",
            originCity: originCity[0]?.city_name || "",
            originDate: moment(bookList[0]?.travel_date)?.format('MMMM-DD') || "",
            originTime: bookList[0]?.travel_time || "",
            originAddress: addressOriginAddress?.data?.length > 0 ? addressOriginAddress?.data[0]?.url : null,
            destinationCity: destinationCity[0]?.city_name || "",
            destinationDate: arrivalDate || "",
            destinationTime: destinationTime || "",
            passengers: passengers,
            facibilities: facility,
            paymentMethod,
            pickup: pickupObj?.title ? pickupObj?.title : null,
            destinationAddress: destinationAddress?.url || null,
        });


        return pdfBuffer
    }

    confirmBookingWithoutSendMail = async (bookList, refCode) => {

        const seatNumbers = bookList?.map(item => item?.seat_id).join(",");
        const routeList = await getRouteList();
        const cities = await getCity();

        const routeFilter = routeList?.data?.filter((route, index) => route?.id == bookList[0].route_id);
        let route;
        if (routeFilter?.length > 0) {
            route = routeFilter[0];
        }

        const originCity = cities?.data?.filter((city, index) => city?.city_id == route?.origin)
        const destinationCity = cities?.data?.filter((city, index) => city?.city_id == route?.destination)

        const destinationTime = calculateArrivalTime({
            departureTime: bookList[0].travel_date,
            durationHours: route?.duration,
            metaTime: bookList[0].travel_time
        });
        const arrivalDate = calculateArrival({
            departureTime: bookList[0].travel_date,
            durationHours: route?.duration,
            metaTime: bookList[0].travel_time
        });


        // address
        const addressOriginAddress = await this.findAddress(route?.id, bookList[0].travel_time);
        let destinationAddress = null;
        if (addressOriginAddress?.data?.length > 0) {
            destinationAddress = {
                address: addressOriginAddress?.data[0]?.dropaddress,
                descripition: addressOriginAddress?.data[0]?.dropaddress,
                url: addressOriginAddress?.data[0]?.dropurl
            }
        }

        const busDetail = await this.findRouteBus(
            bookList[0].route_id,
            bookList[0].travel_time
        );

        const facility = this.getFacilities(busDetail?.data?.length > 0 ? busDetail?.data[0].facilities : null)
        const printTicket = await this.printTicketDetail(bookList[0].ref_code);
        let ticketInfor = null;
        let pickup = bookList[0].pickup;
        let pickupObj = null;

        if (pickup) {
            const getPickUpListData = await getPickUpList({ city_id: route?.origin });
            pickupObj = getPickUpListData?.data?.filter((item) => item?.id == pickup);
            pickupObj = pickupObj?.length > 0 ? pickupObj[0] : null;
        }

        if (printTicket?.data?.length > 0) {
            ticketInfor = printTicket?.data?.filter((item) => item?.first_name != "guest_name0")?.map((item) => {

                const email = item?.email?.split(",");
                const first_name = item?.first_name.split(",");
                const last_name = item?.last_name.split(",");
                const mobile = item?.mobile.split(",");

                return {
                    ...item,
                    email: email?.length > 0 ? email[0] : null,
                    first_name: first_name?.length > 0 ? first_name[0] : null,
                    last_name: last_name?.length > 0 ? last_name[0] : null,
                    mobile: mobile?.length > 0 ? mobile[0] : null,
                }
            })
        }

        let passengers = ticketInfor?.map((item) => {
            return {
                username: `${item?.first_name || ""} ${item?.last_name || ""}`,
                mobile: item?.mobile || "",
                email: item?.email || "",
                pickup: pickupObj?.title || "",
            }
        })

        return {
            notification: {
                pickup: pickupObj?.title ? pickupObj?.title : null,
                ticketCount: ticketInfor?.length || 0,
                price: ticketInfor[0].price,
                busType: route?.bus_type || "",
                kilometer: route?.kilo_meters || "",
                duration: route?.duration || "",
                seatNo: seatNumbers || "",
                toEmail: ticketInfor?.length > 0 ? ticketInfor[0]?.email : "",
                ticketId: refCode,
                dateSend: ticketInfor?.length > 0 ? ticketInfor[0]?.issued_date : "",
                originCity: originCity[0]?.city_name || "",
                originDate: moment(bookList[0]?.travel_date)?.format('MMMM-DD-YYYY') || "",
                originTime: bookList[0]?.travel_time || "",
                originAddress: addressOriginAddress?.data?.length > 0 ? addressOriginAddress?.data[0]?.url : null,
                destinationCity: destinationCity[0]?.city_name || "",
                destinationDate: arrivalDate || "",
                destinationTime: destinationTime || "",
                passengers: passengers,
                facibilities: facility,
            },
            ticketCount: ticketInfor?.length || 0,
            price: ticketInfor[0].price,
            ticket: ticketInfor?.length > 0 ? ticketInfor[0] : null,
            pickup: pickupObj || null,
            facilities: facility,
            kilo_meters: route?.kilo_meters,
            bus_type: route?.bus_type,
            duration: route?.duration,
            ref_code: bookList[0].ref_code,
            passenger_id: bookList[0].passenger_id,
            route_id: bookList[0].route_id,
            bus_id: bookList[0].bus_id,
            travel_date: bookList[0].travel_date,
            travel_time: bookList[0].travel_time,
            seat_status: bookList[0].seat_status,
            price: bookList[0].price,
            meta_id: bookList[0].meta_id,
            ref_id_ticket: bookList[0].ref_id_ticket,
            seat_no: seatNumbers,
            routeBus: busDetail?.data?.length > 0 ? busDetail?.data[0] : null,
            originDetail: {
                city: originCity[0],
                time: bookList[0].travel_time,
                leaveAt: moment(bookList[0].travel_date).format('MMMM-DD-YYYY'),
                address: addressOriginAddress?.data?.length > 0 ? addressOriginAddress?.data[0] : null
            },
            destinationDetail: {
                city: destinationCity[0],
                time: destinationTime,
                arriveAt: arrivalDate,
                address: destinationAddress,
            },
            route: route,
        };
    }

    confirmRoundTrip = async (bookListOneWay, bookListRoundTrip, refCode, refCodeRoundTrip, isConfirm, paymentMethod) => {

        const confirmOneWay = await this.confirmBookingWithoutSendMail(bookListOneWay, refCode);
        const confirmRoundTrip = await this.confirmBookingWithoutSendMail(bookListRoundTrip, refCodeRoundTrip);

        const oneWayNotification = confirmOneWay?.notification;
        const roundTripNotification = confirmRoundTrip?.notification;

        const pdfBuffer = await generateInvoiceRoundTripPdf({
            ...oneWayNotification,
            paymentMethod,
            pickupReturn: roundTripNotification?.pickup,
            ticketCountReturn: roundTripNotification?.ticketCount,
            priceReturn: roundTripNotification?.price,
            ticketIdReturn: roundTripNotification?.ticketId,
            busTypeReturn: roundTripNotification?.busType,
            seatNoReturn: roundTripNotification?.seatNo,
            originDateReturn: roundTripNotification?.originDate,
            originTimeReturn: roundTripNotification?.originTime,
            originCityReturn: roundTripNotification?.originCity,
            originAddressReturn: roundTripNotification?.originAddress,
            durationReturn: roundTripNotification?.duration,
            kilometerReturn: roundTripNotification?.kilometer,
            destinationDateReturn: roundTripNotification?.destinationDate,
            destinationTimeReturn: roundTripNotification?.destinationTime,
            destinationCityReturn: roundTripNotification?.destinationCity,
            dateSendReturn: roundTripNotification?.dateSend,
            passengersReturn: roundTripNotification?.passengers,
            facibilitiesReturn: roundTripNotification?.facibilities,
            destinationAddress: confirmOneWay?.destinationDetail?.address?.url,
            destinationReturnAddress: confirmRoundTrip?.destinationDetail?.address?.url,
        });

        return pdfBuffer
    }

    async findAddress(routeId, travelTime) {
        return await getAddressDetail(routeId, travelTime);
    }

    async findRouteBus(routeId, travelTime) {
        return await getRouteBus(routeId, travelTime);
    }

    getFacilities(facilities) {
        const str = facilities.split(',');
        return this.isFacilitiesAvailable(str);
    }

    isFacilitiesAvailable(facilityArray) {

        const facilities = [
            "Air Conditioning", "WiFi", "Snack", "Water Bottle", "Wet Towel", "Power Outlet", "GPS",
            "Leg Room", "Seat Belt", "Toilet", "TV", "USB Charger", "Sleeping Bed"
        ];

        return {
            airConditioning: facilityArray.includes("Air Conditioning"),
            wifi: facilityArray.includes("WiFi"),
            snack: facilityArray.includes("Snack"),
            waterBottle: facilityArray.includes("Water Bottle"),
            wetTowel: facilityArray.includes("Wet Towel"),
            powerOutlet: facilityArray.includes("Power Outlet"),
            gps: facilityArray.includes("GPS"),
            legRoom: facilityArray.includes("Leg Room"),
            seatBelt: facilityArray.includes("Seat Belt"),
            toilet: facilityArray.includes("Toilet"),
            tv: facilityArray.includes("TV"),
            usbCharger: facilityArray.includes("USB Charger"),
            sleepingBed: facilityArray.includes("Sleeping Bed")
        };
    }

    async printTicketDetail(bookId) {
        return await printTicket(bookId);
    }

}

export const ticketsService = new TicketsService();