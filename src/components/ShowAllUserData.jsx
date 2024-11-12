import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddMembers, setShowAddMembers] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const handleMemberSelected = (userId) => {
    setSelectedUserIds((prevSelectedUserIds) => {
      if (prevSelectedUserIds.includes(userId)) {
        // Deselect the user
        return prevSelectedUserIds.filter((id) => id !== userId);
      } else {
        // Select the user
        return [...prevSelectedUserIds, userId];
      }
    });
  };

  const addSelectedUsersToMaster = async () => {
    if (!currentUser || !selectedUser) {
      console.error("currentUser or selectedUser is undefined");
      return;
    }

    try {
      await axios.post(`/api/user/addusertomaster/${currentUser._id}`, {
        subuserIds: selectedUserIds,
        selectedIds: selectedUser._id,
      });
      console.log("Selected users added to master successfully");
      alert("Selected users added to master successfully");
    } catch (error) {
      console.error("Error adding users to master:", error);
      alert("Can not add user to master");
    }
  };

  const flattenJSON = (data) => {
    const result = [];
    data.forEach((item) => {
      const flatItem = {};

      const flatten = (obj, parentKey = "") => {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof obj[key] === "object" && obj[key] !== null) {
              flatten(obj[key], newKey);
            } else {
              flatItem[newKey] = obj[key];
            }
          }
        }
      };

      flatten(item);
      result.push(flatItem);
    });

    return result;
  };

  const excelDataDownload = async (userId, userData) => {
    try {
      const response = await axios.get(
        `/api/excel/${userId}`,

        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const jsondata = response.data.data;

      if (jsondata && Array.isArray(jsondata)) {
        const flattenedData = flattenJSON(jsondata);
        const worksheet = XLSX.utils.json_to_sheet(flattenedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "jsondata");
        XLSX.writeFile(
          workbook,
          userData.filter((user) => user._id === userId) + ".xlsx"
        );
      } else {
        console.error("No jsondata array to export");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";
        let options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };

        if ((currentUser.role || currentUser.rest?.role) === "admin") {
          url = `http://localhost:5000//api/user/getuser`;
        } else if ((currentUser.role || currentUser.rest?.role) === "master") {
          if (!currentUser._id) {
            console.error("currentUser._id is undefined");
            return;
          }
          url = `http://localhost:5000//api/user/getMasterUser/${currentUser._id}`;
        } else {
          console.error("Invalid role");
          return;
        }

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const usersWithStatus = (data.data || []).map((user) => ({
          ...user,
          isSelected: false,
        }));
        setUserData(usersWithStatus);
      } catch (error) {
        console.error("There was an error fetching the user data!", error);
      }
    };

    fetchData();
  }, [currentUser.role]);

  const toggleStatus = (userId) => {
    axios
      .post(`http://localhost:5000//api/user/userStatus/${userId}`, {
        userId,
        adminId: currentUser.rest?._id || currentUser._id,
      })
      .then((response) => {
        setUserData((prevUserData) =>
          prevUserData.map((user) =>
            user._id === userId ? { ...user, isActive: !user.isActive } : user
          )
        );
        console.log("User status updated:", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the user status!", error);
      });
  };

  const selectUser = (index) => {
    setSelectedUser(userData[index]);
  };

  const makeMaster = (userId) => {
    axios
      .post(`http://localhost:5000//api/user/addmaster/${userId}`, {
        adminId: currentUser.rest?._id || currentUser._id,
      })
      .then((response) => {
        setUserData((prevUserData) =>
          prevUserData.map((user) =>
            user._id === userId ? { ...user, role: "master" } : user
          )
        );
        console.log("User promoted to master:", response.data);
        alert("User promoted to master successfully");
      })
      .catch((error) => {
        console.error(
          "There was an error promoting the user to master!",
          error
        );
        alert("Can not promote user to master");
      });
  };

  const toggleAddMembers = () => {
    setShowAddMembers(!showAddMembers);
  };

  console.log(currentUser.role);
  return (
    (currentUser.role === "admin" || currentUser.role === "master") && (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">User Data</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border text-[#9B9B9D] font-semibold">
                Devotees list
              </th>
              <th className="py-2 px-4 border text-[#9B9B9D] font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="border">
            {userData.map((user, index) => (
              <tr
                key={user._id}
                className="border cursor-pointer"
                onClick={() => selectUser(index)}
              >
                <td className="py-2 px-4 border text-[18px] text-[#56565b]">
                  {user.name}
                </td>
                <td className="py-3 px-7 border w-[150px]">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStatus(user._id);
                    }}
                    className={`text-[14px] text-white text-center rounded-xl ${
                      user.isActive ? "bg-[#008080]" : "bg-red-500"
                    }`}
                  >
                    {user.isActive ? "Active" : "Deactive"}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedUser && (
          <div className="mt-4 p-4 border border-gray-300 bg-white rounded-lg">
            <h2 className="text-xl font-semibold mb-2">User Details</h2>
            <p className="mb-2">
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p className="mb-2">
              <strong>Image:</strong>{" "}
              <img
                src={selectedUser.profilePicture}
                alt="Profile"
                className="w-[200px] h-[200px] rounded-full"
              />
            </p>
            <p className="mb-2">
              <strong>Points:</strong> {selectedUser.points}
            </p>
            <div>
              {selectedUser.role === "user" ? (
                <button
                  className="p-2 bg-[#008080] text-white"
                  onClick={() => makeMaster(selectedUser._id)}
                >
                  Make master
                </button>
              ) : (
                <button className="p-2 bg-[#008080] text-white">Master</button>
              )}
              {selectedUser.role === "master" && (
                <button
                  className="p-2 border-2 ml-2 border-[#008080] text-[#008080]"
                  onClick={toggleAddMembers}
                >
                  + Add Members
                </button>
              )}
              <button
                onClick={() => excelDataDownload(selectedUser._id, userData)}
                className="p-2 bg-[#008080] text-white ml-2"
              >
                Download
              </button>
            </div>
            {showAddMembers && (
              <div className="mt-4 p-4 border border-gray-300 bg-white rounded-lg max-h-48 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-2">Add Members</h2>
                {userData
                  .filter((user) => user.role === "user")
                  .map((user) => (
                    <div key={user._id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedUserIds.includes(user._id)}
                        onChange={() => handleMemberSelected(user._id)} // Pass user._id directly
                      />
                      <label className="ml-2">{user.name}</label>
                    </div>
                  ))}
                <button
                  className="p-2 bg-[#008080] text-white mt-2"
                  onClick={addSelectedUsersToMaster}
                >
                  Add Selected Users
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    )
  );
}
