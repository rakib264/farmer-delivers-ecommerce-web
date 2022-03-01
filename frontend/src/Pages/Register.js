import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import TopBar from '../Components/TopBar';
import Category from '../Components/Category';
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom';
import { Home, ChevronRight
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';  
import { Register, clearErrors } from '../redux/actions/authAction' 
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const RegisterPage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
    });
    const { name, email, password } = user;
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector(state=>state.auth);
    useEffect(() => {
        if(isAuthenticated){
            navigate('/');
        }
        if(error){
            console.log(`Error: ${error}`);
            clearErrors();
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, avatar } = user;
         dispatch(Register(name, email, password, avatar));
    }

    const onChangeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div>
        <TopBar />
        <Navbar />
        <Category />
        <div className='container'>
        <BreadCumb />
        <div className='py-10'>
        <form className='mx-auto rounded shadow-md shadow-fuchsia-900 sm:10/12 md:w-8/12 lg:w-2/5 h-auto bg-fuchsia-900 text-white py-4' onSubmit={handleSubmit} encType="multipart/form-data">
            <div className='px-5 py-3'>
              <h1 className='text-2xl'>Register Now</h1>
              <p className='text-base'>Register here if you are a new customer.</p>
            </div>
            <div className='px-5 py-3 space-y-2'>
                <h1 className='text-lg font-semibold'>FullName :</h1>
                <input type="text" className='w-full block rounded shadow-sm shadow-white px-2 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900' 
                placeholder='FullName'
                name='name'
                value={name}
                onChange={onChangeHandler}
                />
            </div>
            <div className='px-5 py-3 space-y-2'>
                <h1 className='text-lg font-semibold'>Email :</h1>
                <input type="email" className='w-full block rounded shadow-sm shadow-white px-2 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900' 
                placeholder='someone@mail.com'
                name='email'
                value={email}
                onChange={onChangeHandler}
                />
            </div>
            <div className='px-5 py-3 space-y-2'>
                <h1 className='text-lg font-semibold'>Password :</h1>
                <input type="password" className='w-full block rounded shadow-sm shadow-white px-2 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900' 
                placeholder='********'
                name='password'
                value={password}
                onChange={onChangeHandler}
                />
            </div>
            <div className='px-5 py-3 cursor-pointer w-full'>
                <div className='flex items-center'>
                <input type="checkbox" id="checktext" className='text-primary focus:ring-0 focus:outline-none rounded-sm' />
                <label for="checktext" className="text-base text-white pl-3">I have read and agree to the <span className="text-pink-600">terms & conditions</span></label>
                </div>
            </div>
            <div className='px-5 py-3 cursor-pointer w-full flex items-center space-x-4'>
                <input type="text" className='w-full block rounded shadow-sm shadow-white px-2 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900'
                name='avatar'
                onChange={onChangeHandler}
                placeholder="Put your avatar link"
               />
            </div>
            <div className='px-5 py-3 space-y-2 cursor-pointer'>
                <button 
                className='w-full px-2 py-2 mb-4 bg-pink-700 text-white hover:bg-pink-600 hover:text-white rounded'
                disabled={loading ? true : false}
                >
                Register Now
                </button>
                <Link to="/login" 
                className='text-center'>Have an account? <a className='text-lg text-pink-600 font-semiold'>
                Login Now</a></Link>
            </div>
        </form>
    </div>
    </div>
        <Footer />
    </div>
  )
}

const BreadCumb = () => {
    return(
        <div className='py-2'>
            <div className='flex items-center space-x-3'>
                <Home className='text-primary' />
                <ChevronRight className='text-primary' />
                <h1 className='text-md text-gray-800'>Register</h1>
            </div>
        </div>
    )
}

export default RegisterPage