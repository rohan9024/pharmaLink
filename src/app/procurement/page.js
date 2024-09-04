"use client";

import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../../components/Navbar";
import { Inter, Raleway, Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
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
          const fetchedOrders = querySnapshot.docs.map((doc) => {
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
      <Navbar />
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
                  "Remarks",
                ].map((header) => (
                  <th key={header} className="px-4 py-2 border-b">
                    {header}
                  </th>
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
                    order.Remarks,
                  ].map((cell, index) => (
                    <td key={index} className="px-4 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Page;
