'use client'

import React, { useState } from 'react';
import { Dropdown, InputNumber, Button } from 'antd';
import { User } from 'lucide-react';
import { Label } from '@radix-ui/react-label';

export default function SelectPassengerCount({ onChange, defaultPassenger = 1, isError }) {
    const [passengerCount, setPassengerCount] = useState(defaultPassenger);

    const updateCount = (newCount) => {
        setPassengerCount(newCount);
        if (typeof onChange === 'function') {
            onChange(newCount);
        }
    };

    const handleIncrease = () => {
        updateCount(passengerCount + 1);
    };

    const handleDecrease = () => {
        updateCount(Math.max(0, passengerCount - 1));
    };

    const handleInputChange = (value) => {
        updateCount(value ?? 0);
    };

    const dropdownContent = (
        <div className="p-4 w-52 bg-white  border border-gray-200 rounded-md">
            <div className="mb-2 text-center font-medium text-sm ">{ passengerCount > 1 ? 'Passengers': 'Passenger' }</div>
            <div className="flex items-center justify-between mb-3">
                <Button onClick={handleDecrease}>-</Button>
                <InputNumber
                    min={0}
                    value={passengerCount}
                    onChange={handleInputChange}
                    className="text-center"
                />
                <Button onClick={handleIncrease}>+</Button>
            </div>
        </div>
    );

    return (
        <div>
            <Label
                htmlFor="departureDate"
                className="block text-sm font-normal pb-1 text-label mb-2 dark:text-white"
            >
                { passengerCount > 1 ? 'Passengers': 'Passenger' }
            </Label>
            <Dropdown
                dropdownRender={() => dropdownContent}
                trigger={['click']}
                className="bg-white dark:text-black"
            >
                <div className="cursor-pointer h-10 w-44 border border-gray-200 rounded-md dark:bg-[#2A2A2A] dark:text-white text-center flex justify-center items-center space-x-2 hover:shadow-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300">
                    <span className='text-sm dark:text-white'>{passengerCount} { passengerCount > 1 ? 'Passengers': 'Passenger' }</span>
                    <User size={16} className='dark:text-white' />
                </div>
            </Dropdown>
            {
                isError ? (<span className="text-red-500 mt-3 text-[14px]">Passengers is required.</span>) : ''
            }
        </div>
    );
}
