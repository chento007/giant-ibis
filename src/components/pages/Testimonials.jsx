"use client";

import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jacob H",
      date: "Jun 2025 • Solo",
      rating: 5,
      text: "I always use Giant Ibis for Cambodia based travel, best company about in terms of service, reliability and ease, they’re the only bus company I use to leave Cambodia by bus for Bangkok, and same for Vietnam. Staff are awesome, especially Sun Seakmeng who always remembers regular customers, and it passionate about his country and making sure that people love it as much as he does!",
    },
    {
      id: 2,
      name: "Asiana E",
      date: "May 2025 • Solo",
      rating: 5,
      text: "Very friendly staff. Thank you Yut Chhaya:) The Beds are comfy and spacious. But wear enough clothes it gets cold, despite the nice blanket.",
    },
    {
      id: 3,
      name: "Sean Roxette G",
      date: "May 2025 • Couples",
      rating: 5,
      text: "Giant Ibis is truly worth it. I’ve used their service a couple of times and they never disappoint. Today, we were the only passengers, yet they still pushed through with the trip without any cancellations, that’s real commitment! Sophanna was incredibly helpful. Everything was awesome; I couldn’t ask for more. Giant Ibis just keeps improving and getting better. I’d definitely book with them again, like right now!",
    },
    {
      id: 4,
      name: "Olivia",
      date: "May 2025 • Friends",
      rating: 5,
      text: "Amazing service. Very clean bus and safe driving. Everything was very well explained for the border crossing and when we would be stopping. We stopped around 3 times in an 8 hour journey which was great. Sun Seakmeng, the attendant, was excellent.",
    },
    {
      id: 5,
      name: "Beth P",
      date: "May 2025 • Friends",
      rating: 5,
      text: "We opted to spend a bit more by choosing Ibis, but so glad we did. Such a seamless process crossing the border from Cambodia to Thailand, bus was comfortable and breakfast and lunch were provided (we didn’t expect this!). Our guide and drivers were all lovely and couldn’t do enough to make this experience as positive as possible! Bus was a bit cold at the start, but this was amended once passengers on board fed-back about this.",
    },
  ];

  return (
    <div className="bg-blue-50 py-16 px-4 relative dark:bg-gray-800">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-Textcolor text-center mb-12 dark:text-white">
          See What Our Clients Say About Us
        </h2>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full  mx-auto relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <div className="p-1">
                    <Card className="dark:bg-[#0D001A] h-[300px]">
                      <CardContent className="flex flex-col justify-between p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-Description dark:text-gray-400">
                              {testimonial.date}
                            </p>
                          </div>
                          <div className="flex text-secondary justify-center items-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}

                            <img src="/assets/logos/trip-advisor.webp" className="h-10" alt="" />
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300 line-clamp-[9]">
                          {testimonial.text}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-0 lg:-left-10 top-1/2 -translate-y-1/2 text-secondary w-10 h-10 flex items-center justify-center rounded-full z-50" />
            <CarouselNext className="absolute -right-0 lg:-right-10 top-1/2 -translate-y-1/2 text-secondary   w-10 h-10 flex items-center justify-center rounded-full z-50" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
