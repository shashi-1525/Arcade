import { useState } from "react";
import Heading from "../components/Heading";
import AddUserForm from "../components/AddUserForm";

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
    });

    const handleSubmit = (submittedData) => {
        // Handle form submission logic
        console.log("Form submitted with data:", submittedData);
    };

    return (
        <div className="w-[80vw] p-6 bg-white rounded-lg flex flex-col">
            <Heading title="Add User"/>
            <AddUserForm initialData={formData} onSubmit={handleSubmit} onReset={true} disabledInput={[]} />
        </div>
    );
};

export default AddUser;
