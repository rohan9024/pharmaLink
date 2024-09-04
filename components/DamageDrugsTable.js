"use client";
import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

const damagedDrugsObj = [
  {
    item: "Paracetamol 500mg",
    batchNumber: "B1234",
    quantity: "500 tablets",
    dept: "Pediatrics",
    date: "2024-08-28",
    damageReason: "Expired",
  },
  {
    item: "Amoxicillin 250mg",
    batchNumber: "A5678",
    quantity: "300 capsules",
    dept: "General Medicine",
    date: "2024-08-25",
    damageReason: "Packaging defect",
  },
  {
    item: "Insulin 100IU",
    batchNumber: "I9012",
    quantity: "50 vials",
    dept: "Endocrinology",
    date: "2024-08-29",
    damageReason: "Temperature excursion",
  },
  {
    item: "Aspirin 75mg",
    batchNumber: "C3456",
    quantity: "200 tablets",
    dept: "Cardiology",
    date: "2024-08-22",
    damageReason: "Contamination",
  },
  {
    item: "IV Fluid 500ml",
    batchNumber: "D7890",
    quantity: "20 bags",
    dept: "Emergency",
    date: "2024-08-27",
    damageReason: "Punctured packaging",
  },
  {
    item: "Ceftriaxone 1g",
    batchNumber: "E2345",
    quantity: "100 vials",
    dept: "Infectious Diseases",
    date: "2024-08-26",
    damageReason: "Cracked vials",
  },
  {
    item: "Metformin 500mg",
    batchNumber: "F6789",
    quantity: "150 tablets",
    dept: "Diabetes Care",
    date: "2024-08-23",
    damageReason: "Mislabeled",
  },
  {
    item: "Lisinopril 10mg",
    batchNumber: "G0123",
    quantity: "250 tablets",
    dept: "Hypertension",
    date: "2024-08-24",
    damageReason: "Broken tablets",
  },
  {
    item: "Atorvastatin 20mg",
    batchNumber: "H4567",
    quantity: "300 tablets",
    dept: "Cardiology",
    date: "2024-08-20",
    damageReason: "Heat exposure",
  },
  {
    item: "Salbutamol Inhaler",
    batchNumber: "I8910",
    quantity: "10 inhalers",
    dept: "Pulmonology",
    date: "2024-08-21",
    damageReason: "Valve malfunction",
  }
];

function DamageDrugsTable() {
  return (
    <div className={`${poppins.className} relative overflow-x-auto mt-10 mx-24`}>
    <h1 className='text-center mb-16 font-semibold text-2xl'>Damage Drugs</h1>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-md text-gray-700 bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-6 py-3">Sr. No.</th>
            <th scope="col" className="px-6 py-3">Drug Name</th>
            <th scope="col" className="px-6 py-3">Batch Number</th>
            <th scope="col" className="px-6 py-3">Quantity Damaged</th>
            <th scope="col" className="px-6 py-3">Department</th>
            <th scope="col" className="px-6 py-3">Date of Incident</th>
            <th scope="col" className="px-6 py-3">Damage Reason</th>
          </tr>
        </thead>
        <tbody>
          {damagedDrugsObj.map((drug, index) => (
            <tr key={index} className="bg-white border-b">
              <th scope="row" className="w-24 px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                <h1>{index + 1}</h1>
              </th>
              <td className="px-6 py-4">
                <h1 className="truncate w-56">{drug.item}</h1>
              </td>
              <td className="px-6 py-4">
                <h1 className="truncate w-56">{drug.batchNumber}</h1>
              </td>
              <td className="px-6 py-4">
                <h1 className="truncate w-56">{drug.quantity}</h1>
              </td>
              <td className="px-6 py-4">
                <h1 className="truncate w-56">{drug.dept}</h1>
              </td>
              <td className="px-6 py-4">
                <h1 className="truncate w-56">{drug.date}</h1>
              </td>
              <td className="px-6 py-4">
                <h1 className="truncate w-56">{drug.damageReason}</h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DamageDrugsTable;
