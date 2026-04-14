import React from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        console.log(min, max, currency, newJob);
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl">Post a New Job</h2>
            <div className="card bg-base-100 w-full shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleAddJob}>
                        <fieldset className="fieldset">
                            {/* Job title */}
                            <label className="label">Job Title</label>
                            <input type="text" name='title' className="input" placeholder="Job Title" required />
                            {/* Job location */}
                            <label className="label">Job Location</label>
                            <input type="text" name='location' className="input" placeholder="Job Location" required />
                            {/* Job type */}
                            {/* <fieldset className="fieldset"> */}
                            {/* <legend className="fieldset-legend">Job Type</legend> */}
                            <label className="label">Job Type</label>
                            <select name='type' defaultValue="Pick a job type" className="select">
                                <option disabled={true}>Pick a job type</option>
                                <option>Full-time</option>
                                <option>Intern</option>
                                <option>Part-time</option>
                            </select>
                            {/* <span className="label">Optional</span> */}
                            {/* </fieldset> */}
                            {/* Job category */}
                            <label className="label">Job Field</label>
                            <select name='field' defaultValue="Pick a job field" className="select">
                                <option disabled={true}>Pick a job field</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                                <option>Teaching</option>
                            </select>
                            {/* Salary range */}
                            <label className="label">Salary Range</label>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                                <input type="text" name='min' className="input" placeholder="Min" />
                                <input type="text" name='max' className="input" placeholder="Max" />
                                <select name='currency' defaultValue="Pick a currency" className="select">
                                    <option disabled={true}>Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                </select>
                            </div>
                            {/* Description */}
                            {/* <fieldset className="fieldset"> */}
                            {/* <legend className="fieldset-legend">Job description</legend> */}
                            <label className="label">Job Description</label>
                            <textarea name='description' className="textarea h-24" placeholder="Job Description" required></textarea>
                            {/* <div className="label">Optional</div> */}
                            {/* </fieldset> */}
                            {/* Company Name */}
                            <label className="label">Company Name</label>
                            <input type="text" name='company' className="input" placeholder="Company Name" required />
                            {/* Requirements */}
                            <label className="label">Job Requirements</label>
                            <textarea name='requirements' className="textarea h-24" placeholder="Add each requirement in a new line" required></textarea>
                            {/* Responsibilities */}
                            <label className="label">Job Responsibilities</label>
                            <textarea name='responsibilities' className="textarea h-24" placeholder="Add each responsibility in a new line" required></textarea>
                            {/* Job status */}
                            <label className="label">Job Status</label>
                            {/* <input type="text" name='status' className="input" placeholder="Job Status" required /> */}
                            <select name='status' defaultValue="Pick a status" className="select">
                                <option disabled={true}>Status</option>
                                <option>active</option>
                                <option>inactive</option>
                            </select>
                            {/* HR email */}
                            <label className="label">HR Email</label>
                            <input type="email" name='hr_email' defaultValue={user?.email} className="input" placeholder="HR Email" required />
                            {/* HR name */}
                            <label className="label">HR Name</label>
                            <input type="text" name='hr_name' className="input" placeholder="HR Name" required />
                            {/* Company logo */}
                            <label className="label">Company Logo URL</label>
                            <input type='url' name='company_logo' className="input" placeholder="Company Logo URL" />
                            {/* submit button */}
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;