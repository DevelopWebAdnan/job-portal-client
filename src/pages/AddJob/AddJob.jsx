import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2 className="text-3xl">Post a New Job</h2>
            <div className="card bg-base-100 w-full shadow-2xl">
                <div className="card-body">
                    <form action="">
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
                            <select defaultValue="Pick a job type" className="select">
                                <option disabled={true}>Pick a job type</option>
                                <option>Full-time</option>
                                <option>Intern</option>
                                <option>Part-time</option>
                            </select>
                            {/* <span className="label">Optional</span> */}
                            {/* </fieldset> */}
                            {/* Job category */}
                            <label className="label">Job Field</label>
                            <select defaultValue="Pick a job field" className="select">
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
                                <select defaultValue="Pick a currency" className="select">
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
                            <select defaultValue="Pick a job status" className="select">
                                <option disabled={true}>Pick a job status</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                                <option>Teaching</option>
                            </select>
                            {/* HR email */}
                            <label className="label">HR Email</label>
                            <input type="email" name='email' className="input" placeholder="HR Email" required />
                            {/* HR name */}
                            <label className="label">HR Name</label>
                            <input type="text" name='name' className="input" placeholder="HR Name" required />
                            {/* Company logo */}
                            <label className="label">Company Logo URL</label>
                            <input type='url' name='logo' className="input" placeholder="Company Logo URL" />
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