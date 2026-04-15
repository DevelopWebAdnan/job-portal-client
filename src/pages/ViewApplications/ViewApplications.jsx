import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {

    const handleUpdateStatus = (e, id) => {
        console.log(e.target.value, id);

        const data = {
            status: e.target.value
        }

        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status has been updated.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const applications = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl">Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>{app.status}</td>
                                <td>
                                    <select
                                        onChange={(e) => handleUpdateStatus(e, app._id)}
                                        name='status'
                                        defaultValue={app.status || "Change Status"}
                                        className="select select-sm">
                                        <option disabled={true}>Change Status</option>
                                        <option>Under review</option>
                                        <option>Set interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;