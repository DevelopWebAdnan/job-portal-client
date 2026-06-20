import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useJobs = (sort) => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs?sort=${sort}`)
            .then(res => {
                // console.log(res.data);
                setLoading(false);
                setJobs(res.data);
            })
    }, [sort])

    return { jobs, loading };
};

export default useJobs;