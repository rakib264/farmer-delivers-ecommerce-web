import React from 'react';
import Navbar from '../Components/Navbar';
import Category from '../Components/Category';
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom';

const MisMatch = () => {
  return (
    <div>
        <Navbar />
        <Category />
        <MisMatchInfo title="Opps! Page Not Found" code="404" btnTitle="Back to Shopping Page" />
        <Footer />
    </div>
  )
}

const MisMatchInfo = (props) => {
    const {title, code, btnTitle} = props;
    return (
        <div className='container py-8 '>
            <div className='ml-10 space-y-2'>
            <h1 className='text-4xl text-red-500 font-semibold'>{code}</h1>
            <p className='text-2xl text-gray-700 font-semibold'>{title}</p>
            <button className='bg-indigo-700 text-white text-lg px-4 py-2 rounded hover:bg-indigo-600'>
                <Link to="/">{btnTitle}</Link>
            </button>
            </div>
        </div>
    )
}

export default MisMatch