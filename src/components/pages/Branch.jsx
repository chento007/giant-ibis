import { MapPin, Phone, Search, Filter } from "lucide-react";
import Link from "next/link";
import SearchBookForm from "./SearchBox";

export default function Branch() {
  // Define the locations array
  const locations = [
    {
      name: " Phnom Penh",
      address:
        "Address: Road 106, Sangkat Doun Penh, Khan Doun Penh (Night Market)",
      phone: "012 345 678",
      link: "https://goo.gl/maps/4wBRrd6MYrPf1QDf6"
    },
    {
      name: "Siem Reap Bus Terminal",
      address: "Behind Old Stadium, Khmer Pub Street",
      phone: "012 345 678",
      link: "https://maps.app.goo.gl/WLPBmA9X4N8uvcBa6"
    },
    {
      name: "Siem Reap Ticket Office",
      address:
        "Sivutha Blvd, Sangkat Svay Dangkom, Siem Reap",
      phone: "012 345 678",
      link: "https://maps.app.goo.gl/vhKqgabjKhqxFjQ98"
    },
    {
      name: "Kampot",
      address:
        "Street 724 , Krong Kampot (Opposite Kampot Park, near ABA Bank)",
      phone: "012 345 678",
      link: "https://maps.app.goo.gl/1GBxbypCPhS8tnY87"
    },
    {
      name: "Sihanoukville",
      address:
        "Phe Street, Sangkat 3, Sihanoukville (Next to Sihanoukville Autonomous Port)",
      phone: "012 345 678",
      link: "https://maps.app.goo.gl/JS1jqKFZBsdb93n66"
    },
    {
      name: "Battambang",
      address:
        "National Road 5, Phum Anh Chanh, Songkat Ou Char, Krong Battambang (In front of Phou Puy Market Entrance)",
      phone: "012 345 678",
      link: "https://maps.app.goo.gl/mZ333mu6bS5YNGDn6"
    },
    {
      name: "Bangkok",
      address:
        "229 Phra Sumen Rd, Talat Yot, Phra Nakhon, Bangkok 10200 ",
      phone: "012 345 678",
      link: "https://goo.gl/maps/zdEaf2QjtXuYMAB76"
    },
    ,
    {
      name: "Ho Chi Minh",
      address:
        "303, Pham Ngu Lao, District 1, Ho Chi Minh City",
      phone: "012 345 678",
      link: "https://maps.app.goo.gl/rqTnmhPyFwc35yku8"
    },
  ];

  return (
    <>
      <div clakForm />
      <div className="bg-mainbg max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-custom rounded-lg p-7">
            {/* <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-3 pl-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <Search className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
            </div> */}

            <div className="space-y-6 ">
              {locations.map((location, index) => (
                <div key={index} className="border-b pb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {location.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {location.address}
                  </p>
                  <div className="flex justify-end items-end text-sm text-Description space-x-3">
                    {/* <div className="flex items-center">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span className="ml-2">{location.phone}</span>
                    </div> */}
                    <Link
                      href={location.link}
                      target="_blank"
                      className="flex items-center hover:underline"
                    >
                      <MapPin className="w-4 h-4 text-secondary mr-1" />
                      Get Directions
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[600px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6842955574252!2d104.9271785!3d11.5744749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951456203f091%3A0x76e0bff0010d88d6!2sGiant%20Ibis%20Bus%20Terminal!5e0!3m2!1sen!2skh!4v1749046746614!5m2!1sen!2skh"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
