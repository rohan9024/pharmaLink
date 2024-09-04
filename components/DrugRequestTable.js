"use client";
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Papa from 'papaparse';

const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

const initialRequestData = [
  {
    drugName: "Paracetamol 500mg",
    quantity: "10000 tablets",
    status: "Approved",
    duration: "30 days",
  },
  {
    drugName: "Amoxicillin 250mg",
    quantity: "5000 capsules",
    status: "Pending",
    duration: "15 days",
  },
  {
    drugName: "Insulin 100IU",
    quantity: "500 vials",
    status: "Approved",
    duration: "20 days",
  },
  {
    drugName: "Aspirin 75mg",
    quantity: "8000 tablets",
    status: "Rejected",
    duration: "10 days",
  }
];

function DrugRequestTable() {
  const [requests, setRequests] = useState(initialRequestData);

  const handleDownload = () => {
    const csv = Papa.unparse(requests);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'drug_requests.csv');
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
        setRequests(results.data);
      },
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-yellow-500';
      case 'Rejected':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={`${poppins.className} relative overflow-x-auto mt-10 mx-20 `}>
      <h1 className="text-3xl font-semibold pb-12">Drug Requests</h1>
      <div className="mb-4">
        <button className="relative flex justify-center items-center bg-blue-700 text-white border-none py-3 px-8 rounded-md overflow-hidden shadow-lg transition-all duration-250">
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            className="mr-4"
          >
            <path
              d="M28.8125 .03125L.8125 5.34375C.339844 
              5.433594 0 5.863281 0 6.34375L0 43.65625C0 
              44.136719 .339844 44.566406 .8125 44.65625L28.8125 
              49.96875C28.875 49.980469 28.9375 50 29 50C29.230469 
              50 29.445313 49.929688 29.625 49.78125C29.855469 49.589844 
              30 49.296875 30 49L30 1C30 .703125 29.855469 .410156 29.625 
              .21875C29.394531 .0273438 29.105469 -.0234375 28.8125 .03125ZM32 
              6L32 13L34 13L34 15L32 15L32 20L34 20L34 22L32 22L32 27L34 27L34 
              29L32 29L32 35L34 35L34 37L32 37L32 44L47 44C48.101563 44 49 
              43.101563 49 42L49 8C49 6.898438 48.101563 6 47 6ZM36 13L44 
              13L44 15L36 15ZM6.6875 15.6875L11.8125 15.6875L14.5 21.28125C14.710938 
              21.722656 14.898438 22.265625 15.0625 22.875L15.09375 22.875C15.199219 
              22.511719 15.402344 21.941406 15.6875 21.21875L18.65625 15.6875L23.34375 
              15.6875L17.75 24.9375L23.5 34.375L18.53125 34.375L15.28125 
              28.28125C15.160156 28.054688 15.035156 27.636719 14.90625 
              27.03125L14.875 27.03125C14.8125 27.316406 14.664063 27.761719 
              14.4375 28.34375L11.1875 34.375L6.1875 34.375L12.15625 25.03125ZM36 
              20L44 20L44 22L36 22ZM36 27L44 27L44 29L36 29ZM36 35L44 35L44 37L36 37Z"
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
          <span className="absolute inset-0 bg-blue-600 rounded-md transition-all duration-350 z-[-1] w-0 hover:w-full"></span>
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-md text-gray-700 bg-gray-50 border-b">
          <tr>
            <th scope="col" className="px-2 py-3">Sr. No.</th>
            <th scope="col" className="px-2 py-3">Drug Name</th>
            <th scope="col" className="px-2 py-3">Quantity</th>
            <th scope="col" className="px-2 py-3">Status</th>
            <th scope="col" className="px-2 py-3">Duration</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index} className="bg-white border-b">
              <th scope="row" className="w-24 px-2 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
              </th>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{request.drugName}</h1>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{request.quantity}</h1>
              </td>
              <td className="px-2 py-4">
                <span className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${getStatusBadge(request.status)}`}>
                  {request.status}
                </span>
              </td>
              <td className="px-2 py-4">
                <h1 className="truncate w-56">{request.duration}</h1>
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

export default DrugRequestTable;
