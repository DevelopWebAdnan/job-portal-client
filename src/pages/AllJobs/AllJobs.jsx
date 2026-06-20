import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';

const AllJobs = () => {

    const [sort, setSort] = useState(false);
    const { jobs, loading } = useJobs(sort);
    // console.log(sort);

    if (loading) {
        return <h2>Jobs are loading...</h2>
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-5">All Jobs</h1>
            <div className="py-5 p-3 bg-base-200 w-11/12 mx-auto">
                <button onClick={() => setSort(!sort)}
                    className={`btn btn-neutral ${sort && "btn-success"}`}
                >{`${sort == true ? "Sorted by salary" : "Sort By Salary"}`}</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;