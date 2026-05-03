import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const useAxiosSecure = () => {

    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error caught in the interceptor', error.response);

            if (error.response.status === 401 || error.response.status === 403) {
                console.log('need to logout the user');
                signOutUser()
                    .then(() => {
                        console.log('logged out user');
                        navigate('/signIn')
                    })
                    .catch(error => console.log(error));
            }
            return Promise.reject(error);
        })
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;