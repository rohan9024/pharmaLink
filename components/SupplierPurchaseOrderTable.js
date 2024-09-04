"use client"

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Papa from 'papaparse';

const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

const purchaseOrderObj = [
    {
      orderId: "PO123456",
      item: "Paracetamol 500mg",
      supplier: "ABC Pharmaceuticals",
      quantity: "10000 tablets",
      orderDate: "2024-08-01",
      expectedDelivery: "2024-08-10",
      status: "Delivered",
      hospital: "Max Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "10:00 AM"
    },
    {
      orderId: "PO123457",
      item: "Amoxicillin 250mg",
      supplier: "XYZ Pharma",
      quantity: "5000 capsules",
      orderDate: "2024-08-03",
      expectedDelivery: "2024-08-12",
      status: "Shipped",
      hospital: "Fortis Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "11:30 AM"
    },
    {
      orderId: "PO123458",
      item: "Insulin 100IU",
      supplier: "HealthCare Ltd.",
      quantity: "500 vials",
      orderDate: "2024-08-05",
      expectedDelivery: "2024-08-15",
      status: "Pending",
      hospital: "Apollo Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "02:00 PM"
    },
    {
      orderId: "PO123459",
      item: "Aspirin 75mg",
      supplier: "MedSupply Co.",
      quantity: "8000 tablets",
      orderDate: "2024-08-07",
      expectedDelivery: "2024-08-17",
      status: "Delivered",
      hospital: "BLK Super Speciality Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "09:00 AM"
    },
    {
      orderId: "PO123460",
      item: "IV Fluid 500ml",
      supplier: "LifeCare Ltd.",
      quantity: "2000 bags",
      orderDate: "2024-08-09",
      expectedDelivery: "2024-08-19",
      status: "Pending",
      hospital: "SPS Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "03:00 PM"
    },
    {
      orderId: "PO123461",
      item: "Ceftriaxone 1g",
      supplier: "PharmaLink",
      quantity: "1000 vials",
      orderDate: "2024-08-11",
      expectedDelivery: "2024-08-21",
      status: "Shipped",
      hospital: "Primus Super Speciality Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "01:00 PM"
    },
    {
      orderId: "PO123462",
      item: "Metformin 500mg",
      supplier: "Global Pharma",
      quantity: "6000 tablets",
      orderDate: "2024-08-13",
      expectedDelivery: "2024-08-23",
      status: "Delivered",
      hospital: "Columbia Asia Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "12:00 PM"
    },
    {
      orderId: "PO123463",
      item: "Lisinopril 10mg",
      supplier: "SafeMeds",
      quantity: "4000 tablets",
      orderDate: "2024-08-15",
      expectedDelivery: "2024-08-25",
      status: "Shipped",
      hospital: "Max Super Speciality Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "04:00 PM"
    },
    {
      orderId: "PO123464",
      item: "Atorvastatin 20mg",
      supplier: "Wellness Pharma",
      quantity: "7000 tablets",
      orderDate: "2024-08-17",
      expectedDelivery: "2024-08-27",
      status: "Pending",
      hospital: "Medanta – The Medicity, Delhi",
      location: "Delhi",
      arrivalTime: "05:00 PM"
    },
    {
      orderId: "PO123465",
      item: "Salbutamol Inhaler",
      supplier: "BreatheEasy Corp.",
      quantity: "300 inhalers",
      orderDate: "2024-08-19",
      expectedDelivery: "2024-08-29",
      status: "Shipped",
      hospital: "Holy Family Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "06:00 AM"
    },
    {
      orderId: "PO123466",
      item: "Omeprazole 20mg",
      supplier: "PharmaPlus",
      quantity: "2500 capsules",
      orderDate: "2024-08-21",
      expectedDelivery: "2024-08-31",
      status: "Delivered",
      hospital: "Sir Ganga Ram Hospital, Delhi",
      location: "Delhi",
      arrivalTime: "07:30 AM"
    },
    {
      orderId: "PO123467",
      item: "Hydrochlorothiazide 25mg",
      supplier: "MedGlobal",
      quantity: "3000 tablets",
      orderDate: "2024-08-23",
      expectedDelivery: "2024-09-02",
      status: "Pending",
      hospital: "Max HealthCare, Delhi",
      location: "Delhi",
      arrivalTime: "08:45 AM"
    },
    {
      orderId: "PO123468",
      item: "Warfarin 5mg",
      supplier: "Medicure",
      quantity: "1500 tablets",
      orderDate: "2024-08-25",
      expectedDelivery: "2024-09-05",
      status: "Shipped",
      hospital: "Rajiv Gandhi Cancer Institute & Research Centre, Delhi",
      location: "Delhi",
      arrivalTime: "09:30 AM"
    },
    {
      orderId: "PO123469",
      item: "Vitamin C 500mg",
      supplier: "NutriPharma",
      quantity: "8000 tablets",
      orderDate: "2024-08-27",
      expectedDelivery: "2024-09-07",
      status: "Delivered",
      hospital: "Delhi State Cancer Institute, Delhi",
      location: "Delhi",
      arrivalTime: "10:30 AM"
    }
  ];

function SupplierPurchaseOrderTable() {
  const [purchaseOrders, setPurchaseOrders] = useState(purchaseOrderObj);

  const handleDownload = () => {
    const csv = Papa.unparse(purchaseOrders);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'purchase_orders.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const filteredData = results.data.filter(item => 
          item.hospital.includes("Delhi") || item.location.includes("Delhi")
        );
        setPurchaseOrders(filteredData);
      },
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return 'border border-black !text-gray-700';
      case 'Shipped':
        return 'border border-black !text-gray-700';
      case 'Pending':
        return 'border border-black !text-gray-700';
      default:
        return 'border border-black !text-gray-700';
    }
  };

  return (
    <div className={`${poppins.className} relative overflow-x-auto mt-10 mx-20`}>
      <h1 className="text-3xl font-semibold pb-12">Purchase Agreements</h1>
      <div className="mb-4">
        <button className="relative flex justify-center items-center bg-green-700 text-white border-none py-3 px-8 rounded-md overflow-hidden shadow-lg transition-all duration-250">
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            className="mr-4"
          >
            <path
              d="M28.8125 .03125L.8125 5.34375C.339844 5.433594 0 5.863281 0 6.34375L0 43.65625C0 44.136719 .339844 44.566406 .8125 44.65625L28.8125 49.96875C28.875 49.980469 28.9375 50 29 50C29.230469 50 29.445313 49.929688 29.625 49.78125C29.855469 49.589844 30 49.296875 30 49L30 1C30 .703125 29.855469 .410156 29.625 .21875C29.394531 .0273438 29.105469 -.0234375 28.8125 .03125ZM32 6L32 13L34 13L34 15L32 15L32 20L34 20L34 22L32 22L32 27L34 27L34 29L32 29L32 35L34 35L34 37L32 37L32 44L47 44C48.101563 44 49 43.101563 49 42L49 8C49 6.898438 48.101563 6 47 6ZM36 13L44 13L44 15L36 15ZM6.6875 15.6875L11.8125 15.6875L14.5 21.28125C14.710938 21.722656 14.898438 22.265625 15.0625 22.875L15.09375 22.875C15.199219 22.511719 15.402344 21.941406 15.6875 21.21875L18.65625 15.6875L23.34375 15.6875L17.75 24.9375L23.5 34.375L18.53125 34.375L15.28125 28.28125C15.160156 28.054688 15.035156 27.636719 14.90625 27.03125L14.875 27.03125C14.8125 27.316406 14.664063 27.761719 14.4375 28.34375L11.1875 34.375L6.1875 34.375L12.15625 25.03125ZM36 20L44 20L44 22L36 22ZM36 27L44 27L44 29L36 29ZM36 35L44 35L44 37L36 37Z"
            ></path>
          </svg>
          Upload CSV
          <input
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            name="text"
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
          />
          <span className="absolute inset-0 bg-green-600 rounded-md transition-all duration-350 z-[-1] w-0 hover:w-full"></span>
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-md text-gray-700 bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-2 py-3">Sr. No.</th>
            <th scope="col" className="px-2 py-3">Purchase Order ID</th>
            <th scope="col" className="px-2 py-3">Drug Name</th>
            <th scope="col" className="px-2 py-3">Supplier Name</th>
            <th scope="col" className="px-2 py-3">Quantity Ordered</th>
            <th scope="col" className="px-2 py-3">Order Date</th>
            <th scope="col" className="px-2 py-3">Expected Delivery Date</th>
            <th scope="col" className="px-2 py-3">Order Status</th>
            <th scope="col" className="px-2 py-3">Hospital</th>
            <th scope="col" className="px-2 py-3">Location</th>
            <th scope="col" className="px-2 py-3">Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {purchaseOrders.map((order, index) => (
            <tr key={index} className="bg-white border-b">
              <th scope="row" className="w-24 px-2 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
              </th>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.orderId}</h1>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.item}</h1>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.supplier}</h1>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.quantity}</h1>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.orderDate}</h1>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.expectedDelivery}</h1>
              </td>
              <td className="px-2 py-4">
                <span className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${getStatusBadge(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.hospital}</h1>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.location}</h1>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{order.arrivalTime}</h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <button
          className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
          onClick={handleDownload}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
            <g stroke-linejoin="round" stroke-linecap="round">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"></path>
            </g>
          </svg>
          Download
        </button>
      </div>
    </div>
  );
}

export default SupplierPurchaseOrderTable;
