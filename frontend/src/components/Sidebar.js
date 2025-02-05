import { FaPlus, FaEye, FaHistory, FaUserPlus, FaUsers, FaTools } from 'react-icons/fa';
import {useLocation} from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className="min-h-screen  flex flex-col bg-gray-800 text-white p-4 w-64">
            <div className="flex items-center mb-6">
                <span className="text-2xl font-bold">Menu</span>
            </div>
            <hr className="border-gray-600 mb-4" />
            <ul className="space-y-4">
                <li>
                    <a href="/device/add" className={`flex items-center space-x-2 text-sm hover:bg-teal-500 py-2 px-4 rounded-md
                        ${location.pathname === '/device/add' && "bg-teal-500"}`}>
                        <FaPlus className="w-5 h-5" />
                        <span>Add Device</span>
                    </a>
                </li>
                <li>
                    <a href="/device/view" className={`flex items-center space-x-2 text-sm hover:bg-teal-500 py-2 px-4 rounded-md
                        ${location.pathname === '/device/view' && "bg-teal-500"}`}>
                        <FaEye className="w-5 h-5" />
                        <span>View Devices</span>
                    </a>
                </li>

                <li>
                    <a href="/user/add" className={`flex items-center space-x-2 text-sm hover:bg-teal-500 py-2 px-4 rounded-md
                        ${location.pathname === '/user/add' && "bg-teal-500"}`}>
                        <FaUserPlus className="w-5 h-5" />
                        <span>Add Users</span>
                    </a>
                </li>
                <li>
                    <a href="/user/view" className={`flex items-center space-x-2 text-sm hover:bg-teal-500 py-2 px-4 rounded-md
                        ${location.pathname === '/user/view' && "bg-teal-500"}`}>
                        <FaUsers className="w-5 h-5" />
                        <span>View Users</span>
                    </a>
                </li>
                <li>
                    <a href="/inventory/booking" className={`flex items-center space-x-2 text-sm hover:bg-teal-500 py-2 px-4 rounded-md
                        ${location.pathname === '/inventory/booking' && "bg-teal-500"}`}>
                        <FaTools className="w-5 h-5" />
                        <span>Issue Device</span>
                    </a>
                </li>
                <li>
                    <a href="/inventory/history" className={`flex items-center space-x-2 text-sm hover:bg-teal-500 py-2 px-4 rounded-md
                        ${location.pathname === '/inventory/history' && "bg-teal-500"}`}>
                        <FaHistory className="w-5 h-5" />
                        <span>History</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
