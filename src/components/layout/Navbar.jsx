"use client";
import {
  Split,
  Newspaper,
  Hotel,
  BusFront,
  Earth,
  Sun,
  Moon,
  Menu,
  X,
  Bus,
} from "lucide-react";
import { MdOutlineDateRange } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    if(isDarkMode){
      setTheme('dark')
    }else{
      setTheme('light')
    }
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "kh" : "en");
  };

  const navIcons = [
    {
      id: 2,
      icon: <Bus className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px]" />,
      tooltip: "WHY IBIS",
      href: "/why-ibis",
    },
    {
      id: 3,
      icon: <MdOutlineDateRange className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px]" />,
      tooltip: "Schedule",
      href: "/schedule",
    },
    {
      id: 4,
      icon: <Hotel className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px]" />,
      tooltip: "Hotel",
      href: "/hotel",
    },
    {
      id: 5,
      icon: <Newspaper className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px]" />,
      tooltip: "Blog",
      href: "/blog",
    },
    {
      id: 6,
      icon: <Earth className="iconSVG w-5 h-5 lg:w-[23px] lg:h-[23px]" />,
      tooltip: "Border Crossing",
      href: "/crossing",
    },
  ];

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="w-full absolute z-10">
      <div className="h-[80px] w-full flex justify-between items-center px-4 md:px-10 lg:px-20">
        <Link href="/">
          <Image
            src="/assets/logos/logo.png"
            alt="logo"
            width={150}
            height={50}
            className="h-[50px] w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-12 bg-white dark:bg-gray-800 dark:border-white border backdrop-blur-sm px-4 py-2 rounded-[15px] shadow-custom">
          {navIcons.map(({ id, icon, tooltip, href }) => (
            <Link
              key={id}
              href={href}
              className="relative flex items-center gap-2 text-primary hover:text-primary transition-colors group"
            >
              <span className="dark:text-white">{icon}</span>
              <span className="text-center text-sm dark:text-white">{tooltip}</span>
              <span className="hidden">{tooltip}</span>
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap dark:text-white">
                {tooltip}
              </span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <button
            className="flex items-center justify-center"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <Sun size={24} className="text-secondary" />
            ) : (
              <Moon size={24} className="text-secondary" />
            )}
          </button>
          <button
            className="flex items-center justify-center"
            onClick={toggleLanguage}
          >
            <img
              className="w-[24px] h-[24px] object-contain"
              src={language === "en" ? "/en.svg" : "/kh.svg"}
              alt="Language"
            />
          </button>
          <Link
            href="https://partner.giantibis.com"
            target="_blank"
            className="hidden sm:inline-block bg-primary text-white py-2 px-8 rounded-md transition-colors"
          >
            Login
          </Link>

          <button
            className="md:hidden p-2 text-secondary hover:opacity-80 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navIcons.map(({ id, icon, tooltip, href }) => (
              <Link
                key={id}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-primary hover:text-blue-600 transition-colors "
              >
                {icon}
                <span className="dark:text-white">{tooltip}</span>
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="/login"
                className="bg-primary text-white py-2 px-6 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
