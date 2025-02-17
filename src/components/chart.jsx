"use client";
import { FaRegCheckCircle, FaRegTimesCircle, FaLink, FaEllipsisV, FaMapMarkerAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiClock1, CiUser } from "react-icons/ci";

const dummyData = [
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300", // Add this line
        errors: [
            { type: 'location', message: 'Location not verified' },
            { type: 'time', message: 'Late arrival by 1 minute' }
        ],
        calAtt: "P",
        finalAtt: "P",
    },
    {
        date: "M 17-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300", // Add this line
        errors: [
            { type: 'time', message: 'Late arrival by 90 minutes' },
            { type: 'user', message: 'Biometric verification failed' }
        ],
        calAtt: "P",
        finalAtt: "P",
    },
    {
        date: "T 16-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        lastAmount: "+₹300", // Add this line
        error: false,
        calAtt: "P",
        finalAtt: "P",
    },
    {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    }, {
        date: "W 15-Feb-2025",
        plannedTime: "09:00 AM - 06:30 PM",
        actualTime: "09:01 AM - 06:32 PM",
        fineBonus: "+₹500",
        error: true,
        calAtt: "HD",
        finalAtt: "HD",
    },
    // Add more dummy data as needed...
];

export default function AttendanceTable() {
    return (
        <div className="p-4 justify-center items-center">
            <div className="overflow-x-auto overflow-y-auto border border-gray-300 rounded-lg shadow-sm" style={{ maxHeight: '600px', scrollbarWidth: 'thin', scrollBehavior: 'smooth' }}>
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-gray-200">
                        <tr className="text-gray-700">
                            <th className="border border-gray-300 p-2">Date</th>
                            <th className="border border-gray-300 p-2">Time planned + WH</th>
                            <th className="border border-gray-300 p-2">Actual Time</th>
                            <th className="border border-gray-300 p-2">Fine/Bonus</th>
                            <th className="border border-gray-300 p-2">Error</th>
                            <th className="border border-gray-300 p-2">Calc. Atte.</th>
                            <th className="border border-gray-300 p-2">Final Attendance</th>
                            <th className="border border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((row, index) => (
                            <tr key={index} className="text-center border border-gray-300 text-black">
                                <td className="border border-gray-300 p-2">{row.date}</td>
                                <td className="border border-gray-300 p-2">{row.plannedTime}</td>
                                <td className="border border-gray-300 p-2">{row.actualTime}</td>
                                <td className={`border border-gray-300 p-2 ${row.fineBonus.includes("+") ? "text-green-600" : "text-red-600"}`}>
                                    {row.fineBonus}
                                    {row.lastAmount && <span className="line-through mr-2 text-gray-500">{row.lastAmount}</span>}
                                    <BsThreeDotsVertical className="text-gray-500 cursor-pointer inline" />
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <div className="flex items-center justify-center space-x-2">
                                        {row.errors?.map((error, index) => {
                                            const icon = error.type === 'location' ? <FaMapMarkerAlt className="text-red-500 text-lg" /> :
                                                error.type === 'time' ? <CiClock1 className="text-red-500 text-lg" /> :
                                                    error.type === 'user' ? <CiUser className="text-red-500 text-lg" /> : null;
                                            return icon && <span key={index} title={error.message}>{icon}</span>;
                                        })}
                                    </div>
                                </td>
                                <td className="border border-gray-300 p-2">{row.calAtt}</td>
                                <td className="border border-gray-300 p-2">{row.finalAtt}</td>
                                <td className="border border-gray-300 p-2 flex justify-center space-x-2">
                                    <FaLink className="text-gray-500 cursor-pointer" />
                                    <FaEllipsisV className="text-gray-500 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}