import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-three-mu.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {

    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error status', error.response.status);

            if (error.response.status === 401 || error.response.status === 403) {
                signOutUser()
                    .then(() => {
                        // redirect to the login page
                        navigate('/signIn')
                    })
                    .catch(err => console.log(err));
            }
            return Promise.reject(error);
        })
    }, [navigate, signOutUser])

    return axiosInstance;
};

export default useAxiosSecure;