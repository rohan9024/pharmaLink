import React, { useState } from 'react';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const poppins = Poppins({
    weight: ['100', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

function SupplierViewRequests() {
    // Sample data for illustration
    const sampleRequests = [
        { id: '1', hospital: 'City Hospital', department: 'Cardiology', item: 'Aspirin', quantity: 100, distance: '5 km' },
        { id: '2', hospital: 'Green Clinic', department: 'Pediatrics', item: 'Antibiotic Syrup', quantity: 50, distance: '10 km' },
        { id: '3', hospital: 'Westside Health', department: 'Orthopedics', item: 'Pain Reliever', quantity: 30, distance: '8 km' },
        { id: '4', hospital: 'Central Medical Center', department: 'Neurology', item: 'Anti-Seizure Medication', quantity: 70, distance: '15 km' },
    ];

    const [requestsObj, setRequestsObj] = useState(sampleRequests);

    async function accept(request) {
        // Placeholder for accepting logic
        console.log('Accept request', request);
    }

    async function reject(request) {
        // Placeholder for rejecting logic
        console.log('Reject request', request);
    }

    return (
        <div className='my-28 flex justify-center items-center'>
            <div className='w-screen px-44 py-10 flex flex-col'>
                <div className='flex justify-between items-center my-10'>
                    <h1 className={`${poppins.className} text-3xl font-semibold`}>Pending Requests</h1>
                </div>

                {/* Table of requests */}
                <div className='overflow-x-auto'>
                    <table className='min-w-full bg-white'>
                        <thead>
                            <tr className='w-full bg-gray-200'>
                                <th className='py-2 px-4 border-b text-left'>Hospital</th>
                                <th className='py-2 px-4 border-b text-left'>Department</th>
                                <th className='py-2 px-4 border-b text-left'>Item</th>
                                <th className='py-2 px-4 border-b text-left'>Quantity</th>
                                <th className='py-2 px-4 border-b text-left'>Distance</th>
                                <th className='py-2 px-4 border-b text-left'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestsObj.map((request) => (
                                <tr key={request.id}>
                                    <td className='py-2 px-4 border-b'>{request.hospital}</td>
                                    <td className='py-2 px-4 border-b'>{request.department}</td>
                                    <td className='py-2 px-4 border-b'>{request.item}</td>
                                    <td className='py-2 px-4 border-b'>{request.quantity}</td>
                                    <td className='py-2 px-4 border-b'>{request.distance}</td>
                                    <td className='py-2 px-4 border-b'>
                                        <button
                                            className='bg-green-500 text-white px-4 py-2 rounded mr-2'
                                            onClick={() => accept(request)}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className='bg-red-500 text-white px-4 py-2 rounded'
                                            onClick={() => reject(request)}
                                        >
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SupplierViewRequests;
