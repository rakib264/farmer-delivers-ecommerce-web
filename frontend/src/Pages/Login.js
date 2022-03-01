import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import TopBar from '../Components/TopBar';
import Category from '../Components/Category';
import Footer from '../Components/Footer';
import { Home, ChevronRight
   } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';  
import { Login, clearErrors } from '../redux/actions/authAction' 
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector(state=>state.auth);
    useEffect(() => {
        if(isAuthenticated){
            navigate('/');
        }
        if(error){
            console.log('error')
            clearErrors();
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Login(email, password));
    }

  return (
    <div>
        <TopBar />
        <Navbar />
        <Category />
        <div className='container'>
        <BreadCumb />
        <div className='py-10'>
        <form className='mx-auto rounded shadow-md shadow-fuchsia-900 sm:10/12 md:w-8/12 lg:w-2/5 h-auto bg-fuchsia-900 text-white py-4' onSubmit={handleSubmit}>
            <div className='px-5 py-3'>
              <h1 className='text-2xl'>LogIn</h1>
              <p className='text-base'>Login if you are a returing customer</p>
            </div>
            <div className='px-5 py-3 space-y-2'>
                <h1 className='text-lg font-semibold'>Email:</h1>
                <input type="email" className='w-full block rounded shadow-sm shadow-white px-2 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900' placeholder='someone@mail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='px-5 py-3 space-y-2'>
                <h1 className='text-lg font-semibold'>Password :</h1>
                <input type="password" className='w-full block rounded shadow-sm shadow-white px-2 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-900' placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='px-5 py-3 flex items-center justify-between cursor-pointer w-full'>
                <div className='flex items-center'>
                <input type="checkbox" id="checktext" className='text-primary focus:ring-0 focus:outline-none rounded-sm' />
                <label for="checktext" className="text-base text-white pl-3">Remember Me</label>
                </div>
                <h1 className='text-primary'>Forgot Password?</h1>
            </div>
            <div className='px-5 py-3 space-y-2 cursor-pointer'>
                <button className='w-full px-2 py-2 mb-4 bg-pink-700 text-white hover:bg-pink-600 hover:text-white rounded'>Login</button>
                <Link to="/register" className='text-center'>Don't have an account? <a className='text-lg text-pink-600 font-semiold'>Register Now</a></Link>
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
                <h1 className='text-md text-gray-800'>Login</h1>
            </div>
        </div>
    )
}

export default LoginPage