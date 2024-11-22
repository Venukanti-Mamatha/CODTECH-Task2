/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';

const AStatus = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/complaints');
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const handleSendClick = async (complaintId) => {
    try {
      // Update the status to 'InProgress' in local state immediately
      await updateStatus(complaintId, 'InProgress');

      // Construct the mailto URL
      const mailtoURL = `mailto:?subject=Regarding Complaint ${complaintId}&body=Compose your email here`;

      // Open the default email client
      window.location.href = mailtoURL;
    } catch (error) {
      console.error('Error updating complaint status:', error);
    }
  };

  const handleCompletedClick = async (complaintId) => {
    try {
      // Update the status to 'Completed' in local state immediately
      await updateStatus(complaintId, 'Completed');

      // Refetch data to update the entire list
      fetchData();
    } catch (error) {
      console.error('Error updating complaint status:', error);
    }
  };

  const updateStatus = async (complaintId, newStatus) => {
    try {
      await axios.put(`http://localhost:8000/api/complaints/${complaintId}`, { status: newStatus });
      console.log(`Status updated to ${newStatus} for complaint ID ${complaintId}`);
      fetchData(); // Optional: Refetch data immediately after updating
    } catch (error) {
      console.error('Error updating complaint status:', error);
    }
  };

  return (
    <div className="a-status-container">
      <h2>Complaints Status:</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Lab Number</th>
            <th scope="col">Department</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.LabNumber}</td>
              <td>{complaint.DepartmentName}</td>
              <td>{complaint.status}</td>
              <td>
                {complaint.status === 'Pending' && (
                  <>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => handleSendClick(complaint._id)}
                    >
                      Send
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleCompletedClick(complaint._id)}
                    >
                      Completed
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AStatus;
*/

// src/components/AStatus.js

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AStatus = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('/complaints'); // Assuming your server is serving complaints at this endpoint
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="complaints-container">
      <h1>All Complaints</h1>
      {complaints.map(complaint => (
        <div key={complaint._id} className="complaint-box" style={{ backgroundColor: 'lightgreen', padding: '10px', margin: '10px' }}>
          <h3>{complaint.selectedLab}</h3>
          <p>{complaint.complaintText}</p>
          <p>{complaint.supervisorView}</p>
          <p>{complaint.LabNumber}</p>
          <p>{complaint.DepartmentName}</p>
        </div>
      ))}
    </div>
  );
};

export default AStatus;
*/
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AStatus = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('/complaints'); // Assuming your server is serving complaints at this endpoint
        console.log(response.data); // Add this line
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="complaints-container">
      <h1>All Complaints</h1>
      {complaints.map(complaint => (
        <div key={complaint._id} className="complaint-box" style={{ backgroundColor: 'lightgreen', padding: '10px', margin: '10px' }}>
          <h3>{complaint.selectedLab}</h3>
          <p>{complaint.complaintText}</p>
          <p>{complaint.supervisorView}</p>
          <p>{complaint.LabNumber}</p>
          <p>{complaint.DepartmentName}</p>
        </div>
      ))}
    </div>
  );
};

export default AStatus;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AStatus = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('/complaints');
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">All Complaints</h1>
      <div className="row">
        {complaints.map(complaint => (
          <div key={complaint._id} className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h3 className="card-title">{complaint.selectedLab}</h3>
                <p className="card-text"><strong>Complaint Text:</strong> {complaint.complaintText}</p>
                <p className="card-text"><strong>Supervisor View:</strong> {complaint.supervisorView}</p>
                <p className="card-text"><strong>Lab Number:</strong> {complaint.LabNumber}</p>
                <p className="card-text"><strong>Department Name:</strong> {complaint.DepartmentName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AStatus;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AStatus = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:5000/complaints'); // Assuming your server is running on port 5000
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="complaints-container">
      <h1>All Complaints</h1>
      {complaints.map(complaint => (
        <div key={complaint._id} className="complaint-box" style={{ backgroundColor: 'lightgreen', padding: '10px', margin: '10px' }}>
          {/* <h3>{complaint.selectedLab}</h3> */}
          <p>{complaint.complaintText}</p>
          <p>{complaint.supervisorView}</p>
          <p>{complaint.LabNumber}</p>
          <p>{complaint.DepartmentName}</p>
        </div>
      ))}
    </div>
  );
};

export default AStatus;


