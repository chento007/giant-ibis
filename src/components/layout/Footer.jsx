"use client";

import {
  BookOpen,
  Globe,
  Hotel,
  User,
  Layout,
  FileText,
  Info,
  Shield,
  BusFront,
  Split,
  Bird,
  ShieldQuestion,
  Handshake,
  Cookie,
  ReceiptText,
  Bus,
  Newspaper,
  Earth,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import TripAdvisorWidget from "./TripAdvisorWidget";

const Footer = () => {



  return (
    <footer className="pt-12 bg-white mx-auto w-full dark:bg-[#0D001A]">
      <div className="w-full mx-auto px-4 lg:px-20">
        <div
          className="flex flex-col gap-8  md:grid md:grid-flow-col md:grid-rows-2 md:auto-cols-fr md:gap-[30px] 
             lg:flex lg:flex-row lg:gap-[58px]"
        >
          <div className="w-full md:max-w-[285px]">
            <Image
              src="/assets/logos/logo.png"
              alt="Giant Ibis Logo"
              width={170}
              height={54}
              className="mb-4"
            />
            <p className="text-Description text-sm leading-6 dark:text-white">
              Giant Ibis Transport is a premium bus service in Cambodia,
              offering safe, comfortable, and reliable travel with modern
              amenities. It caters to tourists and locals, connecting major
              cities and destinations with professional drivers and excellent
              customer service.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-auto">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Facebook",
                  src: "/facebook.svg",
                  link: "https://fb.me/giantibis",
                },
                {
                  name: "Messenger",
                  src: "/messenger.png",
                  link: "https://m.me/giantibis ",
                },
                {
                  name: "Instagram",
                  src: "/instagram.svg",
                  link: "https://www.instagram.com/giantibistransport9999",
                },
                {
                  name: "TikTok",
                  src: "/tiktok.svg",
                  link: "https://www.tiktok.com/@giantibis_transport",
                },
                {
                  name: "Telegram",
                  src: "/telegram.svg",
                  link: "https://t.me/GiantIbisTransport",
                },
                {
                  name: "Whatsapp",
                  src: "/whatsapp.svg",
                  link: "https://wa.me/855969993333",
                },
                {
                  name: "info@giantibis.com",
                  src: "/email.png",
                  link: "info@giantibis.com",
                  isEmail: true
                },
                {
                  name: "+855969993333",
                  src: "/phone.png",
                  link: "+855969993333",
                  isTel: true
                },
              ].map((social) => (
                <li key={social.name} className="flex items-center gap-3">
                  <a
                    href={social?.isEmail ? `mailto:${social.link}` : social?.isTel ? `tel:${social.link}` : social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={20}
                      height={22}
                    />
                    <span className="text-Description text-sm dark:text-white">
                      {social.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-[450px]">
            <h3 className="font-semibold mb-4">Quick Access</h3>
            <div className="flex gap-[25px] justify-between">
              <ul className="space-y-3 text-Description text-sm">
                {[
                  {
                    id: 1,
                    icon: <BusFront className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px] text-primary" />,
                    tooltip: "Book",
                    href: "/book",
                  },
                  {
                    id: 2,
                    icon: <Bus className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px] text-primary" />,
                    tooltip: "WHY IBIS",
                    href: "/why-ibis",
                  },
                  {
                    id: 3,
                    icon: <MdOutlineDateRange className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px] text-primary" />,
                    tooltip: "Schedule",
                    href: "/schedule",
                  },
                  {
                    id: 4,
                    icon: <Hotel className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px] text-primary" />,
                    tooltip: "Hotel",
                    href: "/hotel",
                  },
                  {
                    id: 5,
                    icon: <Newspaper className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px] text-primary" />,
                    tooltip: "Blog",
                    href: "/blog",
                  },
                  {
                    id: 6,
                    icon: <Earth className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px] text-primary" />,
                    tooltip: "Border Crossing",
                    href: "/crossing",
                  },
                  {
                    id: 7,
                    icon: <Split className="iconSVG w-5 h-5 lg:w-[25px] lg:h-[25px] text-primary" />,
                    tooltip: "Our Branch",
                    href: "/branch",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 hover:underline"
                    >
                      {item.icon}
                      <span className="dark:text-white">{item.tooltip}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3 text-Description text-sm">
                {[
                  {
                    icon: <Bird size={20} className="text-primary" />,
                    label: "CRS",
                    link: "/crs",
                  },
                  {
                    icon: <ShieldQuestion size={20} className="text-primary" />,
                    label: "FAQ",
                    link: "/faq",
                  },
                  {
                    icon: <Handshake size={20} className="text-primary" />,
                    label: "Partners",
                    link: "/hotel",
                  },
                  {
                    icon: <Cookie size={20} className="text-primary" />,
                    label: "Privacy Policy",
                    link: "/about-us",
                  },
                  {
                    icon: <ReceiptText size={20} className="text-primary" />,
                    label: "Terms & Conditions",
                    link: "/our-branch",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <Link
                      href={item.link}
                      className="flex items-center gap-3 hover:underline"
                    >
                      {item.icon}
                      <span className="dark:text-white">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex flex-col gap-[20px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px]">
                <div>

                  <h3 className="font-semibold mb-4">Trip Advisor</h3>
                  <TripAdvisorWidget/>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Coming Soon</h3>
                  <div className="flex gap-4">
                    <Image
                      src="/assets/images/download-apps.png"
                      alt="App Store"
                      width={120}
                      height={40}
                      className="cursor-pointer object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <h3 className="font-semibold">We Accept</h3>
                <div className="flex gap-3">
                  <Image
                    src="/assets/images/creditcards.png"
                    alt="KHR"
                    width={180}
                    height={20}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 border-t bg-primary py-4 text-center text-sm text-white">
        Powered By Giant Ibis © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
