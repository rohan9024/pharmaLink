"use client";
import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
  });
  const allocationObj = [
    {
      item: "Paracetamol 500mg",
      date: "2024-08-28",
      quantity: "5000 tablets",
      dept: "Pediatrics",
      expectedDelivery: "2024-08-30",
      delayReason: "Transport strike",
    },
    {
      item: "Amoxicillin 250mg",
      date: "2024-08-25",
      quantity: "2000 capsules",
      dept: "General Medicine",
      expectedDelivery: "2024-08-27",
      delayReason: "Supplier issue",
    },
    {
      item: "Insulin 100IU",
      date: "2024-08-29",
      quantity: "300 vials",
      dept: "Endocrinology",
      expectedDelivery: "2024-09-01",
      delayReason: "Customs delay",
    },
    {
      item: "Aspirin 75mg",
      date: "2024-08-22",
      quantity: "1000 tablets",
      dept: "Cardiology",
      expectedDelivery: "2024-08-24",
      delayReason: "Weather conditions",
    },
    {
      item: "IV Fluid 500ml",
      date: "2024-08-27",
      quantity: "1500 bags",
      dept: "Emergency",
      expectedDelivery: "2024-08-29",
      delayReason: "Logistics error",
    },
    {
      item: "Ceftriaxone 1g",
      date: "2024-08-26",
      quantity: "1000 vials",
      dept: "Infectious Diseases",
      expectedDelivery: "2024-08-28",
      delayReason: "Shortage of raw materials",
    },
    {
      item: "Metformin 500mg",
      date: "2024-08-23",
      quantity: "4000 tablets",
      dept: "Diabetes Care",
      expectedDelivery: "2024-08-25",
      delayReason: "Warehouse fire",
    },
    {
      item: "Lisinopril 10mg",
      date: "2024-08-24",
      quantity: "2500 tablets",
      dept: "Hypertension",
      expectedDelivery: "2024-08-26",
      delayReason: "Supplier bankruptcy",
    },
    {
      item: "Atorvastatin 20mg",
      date: "2024-08-20",
      quantity: "3500 tablets",
      dept: "Cardiology",
      expectedDelivery: "2024-08-22",
      delayReason: "Production delay",
    },
    {
      item: "Salbutamol Inhaler",
      date: "2024-08-21",
      quantity: "500 inhalers",
      dept: "Pulmonology",
      expectedDelivery: "2024-08-23",
      delayReason: "Customs inspection",
    },
    {
      item: "Warfarin 5mg",
      date: "2024-08-19",
      quantity: "1500 tablets",
      dept: "Cardiology",
      expectedDelivery: "2024-08-21",
      delayReason: "Incorrect documentation",
    },
    {
      item: "Omeprazole 20mg",
      date: "2024-08-30",
      quantity: "3000 capsules",
      dept: "Gastroenterology",
      expectedDelivery: "2024-09-02",
      delayReason: "Labor strike",
    },
    {
      item: "Ibuprofen 400mg",
      date: "2024-08-31",
      quantity: "4000 tablets",
      dept: "Pain Management",
      expectedDelivery: "2024-09-03",
      delayReason: "Delayed shipping",
    },
    {
      item: "Dexamethasone 4mg",
      date: "2024-08-15",
      quantity: "2000 tablets",
      dept: "Rheumatology",
      expectedDelivery: "2024-08-17",
      delayReason: "Mechanical failure",
    },
    {
      item: "Levofloxacin 500mg",
      date: "2024-08-18",
      quantity: "1500 tablets",
      dept: "Infectious Diseases",
      expectedDelivery: "2024-08-20",
      delayReason: "Supplier shortage",
    }
  ];
  

  function ShipmentDelayTable() {
    const selectedDept = "General Medicine"; // Example: you can change it to whatever department you want to filter by
  
    return (
      <div className={`${poppins.className} relative overflow-x-auto mt-10 mx-24`}>
        <h1 className='text-center mb-16 font-semibold text-2xl'>Shipment Delay</h1>
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-md text-gray-700 bg-gray-50 border-b">
            <tr>
              <th scope="col" className="px-6 py-3">Sr. No.</th>
              <th scope="col" className="px-6 py-3">Drug Name</th>
              <th scope="col" className="px-6 py-3">Last Shipment Date</th>
              <th scope="col" className="px-6 py-3">Total Quantity Shipped</th>
              <th scope="col" className="px-6 py-3">Department</th>
              <th scope="col" className="px-6 py-3">Expected Delivery Date</th>
              <th scope="col" className="px-6 py-3">Delay Reason</th>
            </tr>
          </thead>
          <tbody>
            {allocationObj.map((stock, index) => (
                <tr key={index} className="bg-white border-b">
                  <th scope="row" className="w-24 px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                    <h1>{index + 1}</h1>
                  </th>
                  <td className="px-6 py-4">
                    <h1 className="truncate w-56">{stock.item}</h1>
                  </td>
                  <td className="px-6 py-4">
                    <h1 className="truncate w-56">{stock.date}</h1>
                  </td>
                  <td className="px-6 py-4">
                    <h1 className="truncate w-56">{stock.quantity}</h1>
                  </td>
                  <td className="px-6 py-4">
                    <h1 className="truncate w-56">{stock.dept}</h1>
                  </td>
                  <td className="px-6 py-4">
                    <h1 className="truncate w-56">{stock.expectedDelivery}</h1>
                  </td>
                  <td className="px-6 py-4">
                    <h1 className="truncate w-56">{stock.delayReason}</h1>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
  
export default ShipmentDelayTable;
  
