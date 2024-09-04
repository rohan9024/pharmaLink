"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../contexts/AuthContext';

const poppins = Poppins({
    weight: ['100', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
});


function SupplierNavbar() {

    const router = useRouter();


    return (
        <>
            <div class="w-screen py-6 px-10 flex justify-between items-center">
            <Link href="/" className="flex items-center">
                    <img src="./logo3.jpeg" alt="PharmaLink Logo" className="h-12" /> 
                    <img src="./logoName.png" alt="PharmaLink Logo" className="h-8" />
                </Link>                <div class="flex justify-center items-center space-x-10">
                    <Link href="/supplier-panel" class={`${poppins.className} text-sm font-medium cursor-pointer hover:ease-in transition  hover:text-gray-400`}>Supplier Panel</Link>
                    <Link href="/supplier-purchase-agreement" class={`${poppins.className} text-sm font-medium cursor-pointer hover:ease-in transition  hover:text-gray-400`}>Purchase Agreement</Link>
                    <Link href="/supplier-shipment-delay" class={`${poppins.className} text-sm font-medium cursor-pointer hover:ease-in transition  hover:text-gray-400`}>Shipment Delay</Link>
                    <Link href="/supply-requests" class={`${poppins.className} text-sm font-medium cursor-pointer hover:ease-in transition  hover:text-gray-400`}>View Supply Requests</Link>
                    <Link href="/supplier-alerts" class={`${poppins.className} text-sm font-medium cursor-pointer hover:ease-in transition  hover:text-gray-400`}>Alerts</Link>

                    <div onClick={() => {
                        router.push('/supplier-login');
                        if (typeof window !== 'undefined') {
                            localStorage.setItem("isLab", "false") || ''
                            localStorage.removeItem("department")
                        }
                    }}>
                        <div class={`${poppins.className} text-sm font-medium cursor-pointer hover:ease-in transition  hover:text-gray-400`}>
                            <h1>Logout</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-gray-300 h-[1px] ' />


        </>

    )
}

export default SupplierNavbar