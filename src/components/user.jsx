import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeData, updateData } from "../utils/todoSlice";
import { Link } from "react-router-dom";

const User = () => {
  const [editUserId, setEditUserId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const dispatch = useDispatch();

  const userData = useSelector((state) => state?.userDetails?.userData);

  const handleDelete = (id) => {
    dispatch(removeData(id));
  };

  const handleEdit = (id) => {
    setEditUserId(id);
    const userToEdit = userData.find((user) => user.id === id);
    if (userToEdit) {
      setEditedData(userToEdit);
    }
  };
  

  const handleSave = () => {
    dispatch(updateData({ id: editUserId, updatedData: editedData }));
    setEditUserId(null); // Clear the edit mode
  };
  

  const handleInputChange = (e, field) => {
    setEditedData({
      ...editedData,
      [field]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col tab bg-gradient-to-r from-sky-500 to-indigo-500 h-[100vh]">
    <div ><Link to='/'><button className="border border-black p-1 rounded-lg bg-violet-300 ml-[80%]">Add User</button></Link></div>
    <div>
      <h2 className="font-sans font-bold text-center">User Details</h2>
      <table className="overflow-x-auto" >
        <thead >
          <tr >
            <th >Name</th>
            <th>Surname</th>
            <th>Email-Id</th>
            <th>Phone-num</th>
            <th>Country</th>
            <th>State</th>
            <th>Address</th>
            <th>Zip</th>
            <th>Modify Data</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{editUserId === user.id ? <input className="w-24 outline-none" type="text" value={editedData.firstName} onChange={(e) => handleInputChange(e, "firstName")} /> : user.firstName}</td>
              <td>{editUserId === user.id ? <input className="w-24 outline-none" type="text" value={editedData.lastName} onChange={(e) => handleInputChange(e, "lastName")} /> : user.lastName}</td>
              <td>{editUserId === user.id ? <input className="w-24 outline-none" type="text" value={editedData.emailId} onChange={(e) => handleInputChange(e, "emailId")} /> : user.emailId}</td>
              <td>{editUserId === user.id ? <input className="w-24 outline-none" type="text" value={editedData.phoneNum} onChange={(e) => handleInputChange(e, "phoneNum")} /> : user.phoneNum}</td>
              <td>{editUserId === user.id ? <input className="w-24 outline-none" type="text" value={editedData.country} onChange={(e) => handleInputChange(e, "country")} /> : user.country}</td>
              <td>{editUserId === user.id ? <input className="w-24 outline-none" type="text" value={editedData.state} onChange={(e) => handleInputChange(e, "state")} /> : user.state}</td>
              <td>{editUserId === user.id ? <input className="w-24 outline-none" type="text" value={editedData.address} onChange={(e) => handleInputChange(e, "address")} /> : user.address}</td>
              <td>{editUserId === user.id ? <input className="w-24 outline-none" type="text" value={editedData.pin} onChange={(e) => handleInputChange(e, "pin")} /> : user.pin}</td>
              <td>
                {editUserId === user.id ? (
                  <button onClick={handleSave} className="border border-black p-1 rounded-2xl bg-lime-600">Save</button>
                ) : (
                  <div className="flex gap-3 items-center justify-center"> 
                    <button className="border border-black p-1 rounded-2xl bg-red-300 font-semibold" onClick={() => handleDelete(user.id)}>Delete</button>
                    <button  className="border border-black p-1 rounded-2xl bg-lime-100" onClick={() => handleEdit(user.id)}>Edit</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default User;
