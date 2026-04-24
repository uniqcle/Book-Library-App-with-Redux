import { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch, useSelector} from 'react-redux';
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice';  

const Error = () => {

	const errMessage = useSelector(selectErrorMessage);
	const dispatch = useDispatch(); 


	useEffect(() => {
		console.log(errMessage);
		if (errMessage) {
			toast.warn(errMessage);
			dispatch(clearError())
		}
	}, [errMessage]); 

	

	return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
