import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { user } = useAuth();

    const { id } = useParams();
    // console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
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
                }
            })
    }


    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck!</h1>
            <div className="card-body">
                <form onSubmit={submitJobApplication}>
                    <fieldset className="fieldset">
                        <label className="label">LinkedIn URL</label>
                        <input type='url' name='linkedIn' className="input" placeholder="LinkedIn URL" />
                        <label className="label">Github URL</label>
                        <input type="url" name='github' className="input" placeholder="Github URL" />
                        <label className="label">Resume URL</label>
                        <input type="url" name='resume' className="input" placeholder="Resume URL" />

                        <button className="btn btn-neutral mt-4">Apply</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;