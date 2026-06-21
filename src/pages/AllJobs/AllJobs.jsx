import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';
import { BiSearch } from 'react-icons/bi';

const AllJobs = () => {

    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    
    const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);
    // console.log(sort);

    if (loading) {
        return <h2>Jobs are loading...</h2>
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-5">All Jobs</h1>
            <div className="py-5 p-3 bg-base-200 w-11/12 mx-auto flex items-center gap-4">
                <button onClick={() => setSort(!sort)}
                    className={`btn btn-neutral ${sort && "btn-success"}`}
                >{`${sort == true ? "Sorted by salary" : "Sort By Salary"}`}</button>
                <BiSearch></BiSearch>
                <input
                    onKeyUp={(e) => setSearch(e.target.value)}
                    type="text" placeholder="Search Jobs by Location" className="input w-full max-w-2xl" />
                <div className='space-y-3'>
                    <input
                        onKeyUp={(e) => setMinSalary(e.target.value)}
                        type="text" placeholder="Search Jobs by min salary" className="input w-full max-w-xs" />
                    <input
                        onKeyUp={(e) => setMaxSalary(e.target.value)}
                        type="text" placeholder="Search Jobs by max salary" className="input w-full max-w-xs" />
                </div>
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