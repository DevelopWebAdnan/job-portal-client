import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2 className="text-3xl">Post a New Job</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form action="">
                        <fieldset className="fieldset">
                            {/* Job Title */}
                            <label className="label">Job Title</label>
                            <input type="text" name='title' className="input" placeholder="Job Title" />
                            {/* Job location */}
                            <label className="label">Job Location</label>
                            <input type="text" name='location' className="input" placeholder="Job Location" />

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;