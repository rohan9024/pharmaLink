"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../../components/Navbar";
import { Inter, Raleway, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import LabNavbar from "../../../components/LabNavbar";
import Papa from "papaparse";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

function Page() {
  const router = useRouter();
  const [CSVData, setCSVData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    if (!fetch) {
      const fetchOrders = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "procurement"));
          const fetchedOrders = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              OrderID: data.OrderID,
              OrderDate: data.OrderDate,
              VendorID: data.VendorID,
              VendorName: data.VendorName,
              DrugName: data.DrugName,
              DrugID: data.DrugID,
              Quantity: data.Quantity,
              UnitPrice: data.UnitPrice,
              TotalCost: (data.Quantity * data.UnitPrice).toFixed(2),
              OrderStatus: data.OrderStatus,
              DeliveryDate: data.DeliveryDate,
              ContractID: data.ContractID,
              ContractDetails: data.ContractDetails,
              Remarks: data.Remarks,
            };
          });
          setOrders(fetchedOrders);
          setFetch(true);
        } catch (error) {
          console.error("Error fetching orders data: ", error);
        }
      };

      fetchOrders();
    }
  }, [fetch]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const { data } = await parseCsv(file);
      setCSVData(data);
    }
  };

  const parseCsv = (file) => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        complete: (result) => {
          resolve(result);
        },
        error: (error) => {
          reject(error.message);
        },
        header: true,
      });
    });
  };

  const submitToFirebase = async () => {
    try {
      for (const dataItem of CSVData) {
        await addDoc(collection(db, "procurement"), dataItem);
      }
      alert("Data uploaded successfully!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <LabNavbar />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-screen flex flex-col items-center px-4 py-10">
        <h1 className={`${poppins.className} text-4xl font-bold mb-6`}>
          Upload Procurement
        </h1>
        <div className="w-full max-w-6xl mx-auto relative overflow-x-auto mb-10">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="text-sm bg-gray-100 border-b border-gray-300">
              <tr>
                {[
                  "Order ID",
                  "Order Date",
                  "Vendor ID",
                  "Vendor Name",
                  "Drug Name",
                  "Drug ID",
                  "Quantity",
                  "Unit Price",
                  "Total Cost",
                  "Order Status",
                  "Delivery Date",
                  "Contract ID",
                  "Contract Details",
                  "Remarks"
                ].map((header) => (
                  <th key={header} className="px-4 py-2 border-b">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-300">
                  {[
                    order.OrderID,
                    order.OrderDate,
                    order.VendorID,
                    order.VendorName,
                    order.DrugName,
                    order.DrugID,
                    order.Quantity,
                    `$${order.UnitPrice}`,
                    `$${order.TotalCost}`,
                    order.OrderStatus,
                    order.DeliveryDate,
                    order.ContractID,
                    order.ContractDetails,
                    order.Remarks
                  ].map((cell, index) => (
                    <td key={index} className="px-4 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-start space-y-10 w-full max-w-6xl mx-auto">
          <h1 className={`${raleway.className} text-3xl font-bold mb-6`}>
            Upload CSV
          </h1>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="mb-4"
          />
          <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="text-sm bg-gray-100 border-b border-gray-300">
                <tr>
                  {[
                    "Order ID",
                    "Order Date",
                    "Vendor ID",
                    "Vendor Name",
                    "Drug Name",
                    "Drug ID",
                    "Quantity",
                    "Unit Price",
                    "Total Cost",
                    "Order Status",
                    "Delivery Date",
                    "Contract ID",
                    "Contract Details",
                    "Remarks"
                  ].map((header) => (
                    <th key={header} className="px-4 py-2 border-b">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CSVData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {[
                      item.OrderID,
                      item.OrderDate,
                      item.VendorID,
                      item.VendorName,
                      item.DrugName,
                      item.DrugID,
                      item.Quantity,
                      `$${item.UnitPrice}`,
                      `$${item.TotalCost}`,
                      item.OrderStatus,
                      item.DeliveryDate,
                      item.ContractID,
                      item.ContractDetails,
                      item.Remarks
                    ].map((cell, idx) => (
                      <td key={idx} className="px-4 py-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end w-full max-w-6xl mx-auto">
            <div
              onClick={submitToFirebase}
              className="cursor-pointer w-96 inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-black border border-gray-800 rounded-full hover:text-white group hover:bg-gray-600"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Submit</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
