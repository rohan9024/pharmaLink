"use client";
import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});
const drugsUsageObj = [
    {
      item: "Paracetamol 500mg",
      batchNumber: "B1234",
      quantity: "1000 tablets",
      dept: "Pediatrics",
      date: "2024-08-28",
      usagePurpose: "Fever management",
    },
    {
      item: "Amoxicillin 250mg",
      batchNumber: "A5678",
      quantity: "500 capsules",
      dept: "General Medicine",
      date: "2024-08-25",
      usagePurpose: "Bacterial infection treatment",
    },
    {
      item: "Insulin 100IU",
      batchNumber: "I9012",
      quantity: "100 vials",
      dept: "Endocrinology",
      date: "2024-08-29",
      usagePurpose: "Blood sugar regulation",
    },
    {
      item: "Aspirin 75mg",
      batchNumber: "C3456",
      quantity: "800 tablets",
      dept: "Cardiology",
      date: "2024-08-22",
      usagePurpose: "Blood thinning",
    },
    {
      item: "IV Fluid 500ml",
      batchNumber: "D7890",
      quantity: "300 bags",
      dept: "Emergency",
      date: "2024-08-27",
      usagePurpose: "Rehydration therapy",
    },
    {
      item: "Ceftriaxone 1g",
      batchNumber: "E2345",
      quantity: "150 vials",
      dept: "Infectious Diseases",
      date: "2024-08-26",
      usagePurpose: "Severe infection treatment",
    },
    {
      item: "Metformin 500mg",
      batchNumber: "F6789",
      quantity: "600 tablets",
      dept: "Diabetes Care",
      date: "2024-08-23",
      usagePurpose: "Type 2 diabetes management",
    },
    {
      item: "Lisinopril 10mg",
      batchNumber: "G0123",
      quantity: "500 tablets",
      dept: "Hypertension",
      date: "2024-08-24",
      usagePurpose: "Blood pressure control",
    },
    {
      item: "Atorvastatin 20mg",
      batchNumber: "H4567",
      quantity: "700 tablets",
      dept: "Cardiology",
      date: "2024-08-20",
      usagePurpose: "Cholesterol reduction",
    },
    {
      item: "Salbutamol Inhaler",
      batchNumber: "I8910",
      quantity: "30 inhalers",
      dept: "Pulmonology",
      date: "2024-08-21",
      usagePurpose: "Asthma management",
    }
  ];
  
function DrugsUsageTable() {
  return (
    <div className={`${poppins.className} relative overflow-x-auto mt-10 mx-24`}>
    <h1 className='text-center mb-16 font-semibold text-2xl'>Drugs Usage</h1>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-md text-gray-700 bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-6 py-3">Sr. No.</th>
            <th scope="col" className="px-6 py-3">Drug Name</th>
            <th scope="col" className="px-6 py-3">Batch Number</th>
            <th scope="col" className="px-6 py-3">Quantity Used</th>
            <th scope="col" className="px-6 py-3">Department</th>
            <th scope="col" className="px-6 py-3">Date of Usage</th>
            <th scope="col" className="px-6 py-3">Usage Purpose</th>
          </tr>
        </thead>
        <tbody>
          {drugsUsageObj.map((drug, index) => (
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
                <h1 className="truncate w-56">{drug.usagePurpose}</h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DrugsUsageTable;
