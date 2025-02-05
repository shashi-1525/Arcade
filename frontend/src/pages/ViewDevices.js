import {useEffect, useState} from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Heading from "../components/Heading";
import EditDevice from "./EditDevice";

const ViewDevices = () => {
    const [devices, setDevices] = useState([
        { systemId: '004', deviceType: 'Smartphone', pricePerHour: 15, availability: 'Available', description: 'A fast smartphone with great camera quality' },
        { systemId: '005', deviceType: 'Desktop', pricePerHour: 12, availability: 'Not Available', description: 'A powerful desktop ideal for gaming and work' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState({});

    const handleDelete = (deviceData) => {
        console.log('Deleted data: ', deviceData);
    };

    const handleEdit = (deviceData) => {
        console.log('Clicked Edit device on View Device Page with data: ', deviceData);
        setSelectedDevice(deviceData);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDevice({});
    };

    return (
        <div className="w-full p-6 bg-white rounded-lg flex flex-col">
            <Heading title="View Devices" />

            {/* Table */}
            <div className="flex items-center justify-center mx-auto">
                <table className="border border-collapse w-full">
                    <thead>
                    <tr className="font-bold text-lg bg-gray-200">
                        <td className="px-5 py-3 w-fit">SystemId</td>
                        <td className="px-8 py-3 w-fit">Device Type</td>
                        <td className="px-5 py-3 w-fit">Price/hour</td>
                        <td className="px-8 py-3 w-fit">Availability</td>
                        <td className="px-8 py-3">Description</td>
                        <td className="px-4 py-3 w-fit">Edit</td>
                        <td className="px-4 py-3 w-fit">Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {devices.map((device) => (
                        <tr key={device.systemId} className="border text-center hover:bg-green-100">
                            <td className="px-5 py-3">{device.systemId}</td>
                            <td className="px-8 py-3">{device.deviceType}</td>
                            <td className="px-5 py-3">₹ {device.pricePerHour}</td>
                            <td className="px-8 py-3">{device.availability}</td>
                            <td className="px-8 py-3" title={device.description || "No Description"}>
                                {device.description ? (device.description.length > 25 ? device.description.slice(0, 25) + "..." : device.description) : "No Description"}
                            </td>
                            <td className="px-4 py-3">
                                <button className="text-blue-500 hover:scale-125 text-xl" onClick={() => handleEdit(device)}><FaEdit /></button>
                            </td>
                            <td className="px-4 py-3">
                                <button className="text-red-500 hover:scale-125 text-xl" onClick={() => handleDelete(device)}><RiDeleteBin5Fill /></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Popup */}
            {isModalOpen && selectedDevice && (
                <>
                    {/* Overlay background to disable background interaction */}
                    <div className="fixed inset-0 bg-gray-800 opacity-50 z-50"></div>
                    <EditDevice data={selectedDevice} onClose={handleCloseModal} />

                </>
            )}
        </div>
    );
};

export default ViewDevices;
