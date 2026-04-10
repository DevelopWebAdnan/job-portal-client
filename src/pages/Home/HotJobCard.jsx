import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {

    const { _id, title, location, company, company_logo, requirements, description, salaryRange } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex items-center gap-2 m-2'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16'
                        alt="company-logo" />
                </figure>
                <div>
                    <h4 className='text-2xl'>{company}</h4>
                    <p className='flex items-center gap-1'> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                {/* <p>{jobType}</p>
                <p>{category}</p> */}
                <div className='flex flex-wrap text-center gap-2'>
                    {
                        requirements.map((skill, index) => <p
                            className='border rounded-lg hover:text-purple-600 hover:bg-gray-300 px-2'
                            key={index}>{skill}</p>)
                    }
                </div>
                {/* <div className='flex flex-wrap text-center gap-2'>
                    {
                        responsibilities.map(responsibility => <p className='border rounded-lg hover:text-purple-600 hover:bg-gray-200' key={responsibility}>{responsibility}</p>)
                    }
                </div> */}
                <div className="card-actions justify-end items-center mt-4">
                    <p className='flex items-center'>Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;