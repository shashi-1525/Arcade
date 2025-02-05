import Heading from "../components/Heading";
import EditModal from "../components/EditModal";
import ResetButton from "../components/ResetButton";
import React from "react";
import AddUserForm from "../components/AddUserForm";

const EditUser = ({ data, onClose }) => {

    const handleEditUser = () => {
        console.log("Code to edit device with data: ", data);
    };

    return (
        <EditModal onClose={onClose}>
            <Heading title="Update User Details" />
            <AddUserForm initialData={data} onSubmit={handleEditUser} onReset={false} disabledInput={["role"]} >
                <ResetButton text="Cancel" onReset={onClose} />
            </AddUserForm>
        </EditModal>
    );
};

export default EditUser;
