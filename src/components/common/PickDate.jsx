import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DatePicker } from "antd";
import './pick-date.css';
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import dayjs from 'dayjs';
import { Skeleton } from "@heroui/react";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-poppins',
});


export const PickDateFilter = ({
    title,
    onChange,
    isError,
    value,
    colspan = 'lg:col-span-2',
    startFrom,
    loading = false }) => {

    const disabledDate = (current) => {
        if (current && current < dayjs().startOf('day')) {
            return true;
        }

        if (startFrom && current && current <= dayjs(startFrom).endOf('day')) {
            return true;
        }

        return false;
    };

    return (
        <div className={cn('w-full', colspan)}>
            <Label
                htmlFor="departureDate"
                className="block text-sm font-normal pb-1 text-label mb-2 dark:text-white"
            >
                {title}
            </Label>

            {
                loading ? <div className="space-y-2">
                    <Skeleton className="h-10 w-full rounded-md" />
                    {isError && (
                        <span className="text-red-500 mt-3 text-[14px]">
                            {title} is required.
                        </span>
                    )}
                </div> : <>
                    <DatePicker
                        placeholder={`Select ${title} Date`}
                        value={value}
                        format="YYYY-MM-DD"
                        onChange={onChange}
                        disabledDate={disabledDate}
                        className={`${poppins.className} font-normal flex h-[40px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 dark-mode-select `} />

                    {
                        isError ? (<span className="text-red-500 mt-3 text-[14px]">{title} is required.</span>) : ''
                    }
                </>
            }


        </div>
    );
}
