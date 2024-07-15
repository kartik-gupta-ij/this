
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MasterDetails = () => {
  const [masterUsers, setMasterUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMasterUsers = async () => {
      try {
        const response = await axios.get('/api/user/master/data');
        setMasterUsers(response.data.data);
        console.log("response.data.data", response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMasterUsers();
  }, []);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-red-500 text-lg">Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Master Users</h2>
      <ul className="space-y-4">
        {masterUsers
          .filter(user => user.subusers && user.subusers.length > 0) // Only include users with subusers
          .map(user => (
            <li key={user._id} className="border rounded-md p-4 shadow-md">
              <h3 className="text-xl font-semibold">{user.userId?.name}</h3>
              <p className="text-gray-700">Email: {user.userId?.email}</p>
              <p className="text-gray-700">Role: {user.userId?.role}</p>
              <div className="mt-2">
                <p className='text-lg font-medium text-gray-800'>Subusers:</p>
                <ul className="space-y-2">
                  {user.subusers.map(data => (
                    <li key={data._id} className="border rounded-md p-2 shadow-sm">
                      <p className="font-semibold">{data?.name}</p>
                      <p className="text-gray-600">Email: {data?.email}</p>
                      <p className="text-gray-600">Role: {data?.role}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MasterDetails;
