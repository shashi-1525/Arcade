import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {FaEdit} from "react-icons/fa";
import Heading from "../components/Heading";
import EditUser from "./EditUser";
// import {IoMdEye} from "react-icons/io";

const ViewDevices = () => {
    const [users, setUsers] = useState([
        {name: "Amit Sharma", email: "amit.sharma@gmail.com", phone: "9123456789", password: "Password@2123", role: "Admin"},
        {name: "Ravi Patel", email: "ravi.patel@yahoo.com", phone: "9876123456", password: "Password@2123", role: "Guest Admin"},
        {name: "Priya Yadav", email: "priya.yadav@outlook.com", phone: "9765432111", password: "Password@2123", role: "User"},
        {name: "Rohit Singh", email: "rohit.singh@aol.com", phone: "9345678910", password: "Password@2123", role: "User"},
        {name: "Nisha Gupta", email: "nisha.gupta@gmail.com", phone: "9845123456", password: "Password@2123", role: "Admin"},
        {name: "Vikram Reddy", email: "vikram.reddy@icloud.com", phone: "9356123412", password: "Password@2123", role: "User"},
        {name: "Anjali Mehta", email: "anjali.mehta@live.com", phone: "9098765432", password: "Password@2123", role: "User"},
        {name: "Kunal Verma", email: "kunal.verma@gmail.com", phone: "8765432109", password: "Password@2123", role: "Guest Admin"},

    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const handleDelete = (userData) => {
        console.log('Deleted data: ', userData);
    };

    const handleEdit = (userData) => {
        console.log('Clicked Edit device on View Device Page with data: ', userData);
        setSelectedUser(userData);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser({});
    };

    return (
        <div className="w-full p-6 bg-white rounded-lg flex flex-col">
            <Heading title="View Users List" />
            {/*Table*/}
            <div className="flex items-center justify-center mx-auto">
                <table className="border border-collapse w-full">
                    <thead>
                    <tr className="font-bold text-lg bg-gray-200 text-center">
                        <td className="px-8 py-3 w-fit">Name</td>
                        <td className="px-8 py-3 w-fit">Email</td>
                        <td className="px-8 py-3 w-fit">Phone</td>
                        <td className="px-8 py-3 w-fit">Password</td>
                        <td className="px-8 py-3 w-fit">Role</td>
                        <td className="px-5 py-3 w-fit">Edit</td>
                        <td className="px-5 py-3 w-fit">Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.email} className="border text-center hover:bg-green-100">
                            <td className="px-8 py-3 w-fit">{user.name}</td>
                            <td className="px-8 py-3 w-fit">{user.email}</td>
                            <td className="px-8 py-3 w-fit">{user.phone}</td>
                            <td className="px-8 py-3 w-fit flex items-center justify-evenly space-x-4"><span>{"***************" || user.password}</span></td>
                            <td className="px-8 py-3 w-fit">{user.role}</td>
                            <td className="px-5 py-3">
                                <button className="text-blue-500 hover:scale-125 text-xl" onClick={() => handleEdit(user)}><FaEdit /></button>
                            </td>
                            <td className="px-5 py-3">
                                <button className="text-red-500 hover:scale-125 text-xl" onClick={() => handleDelete(user)}><RiDeleteBin5Fill /></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && selectedUser && (
                <>
                    {/* Overlay background to disable background interaction */}
                    <div className="fixed inset-0 bg-gray-800 opacity-50 z-50"></div>
                    <EditUser data={selectedUser} onClose={handleCloseModal} />

                </>
            )}

        </div>
    );
};

export default ViewDevices;
