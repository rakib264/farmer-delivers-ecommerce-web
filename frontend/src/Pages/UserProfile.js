import React from 'react';
import Navbar from '../Components/Navbar';
import TopBar from '../Components/TopBar';
import Category from '../Components/Category';
import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const UserProfile = () => {
    const { user } = useSelector(state => state.auth);
  return (
    <div>
        <TopBar />
        <Navbar />
        <Category />
        <div>
           <div className='container py-8'>
               <div className='grid grid-cols-4'>
                   <div className='col-span-1 px-4 py-4'>
                       <div className='bg-fuchsia-700 rounded shadow-lg px-4 py-2 ring-1 ring-blue-700 flex items-center gap-3'>
                           <img src={user && user.avatar} alt="profile" className='w-10 h-10 ring-1 ring-teal-500 rounded-full' />
                           <div>
                            <p className='text-sm text-white font-semibold'>Hello,</p>
                           <h1 className='text-lg text-white font-semibold'>{user && user.name}</h1>
                           </div>
                       </div>
                       <div className='bg-gray-100'>
                           <div className='px-6 py-3 font-semibold cursor-pointer'>
                               <h1 className='py-1 rounde text-lg text-indigo-900'>Manage Account</h1>
                               <p className='hover:bg-rose-300 px-2 py-1 rounded text-base text-gray-900'>Profile Info</p>
                               <p className='hover:bg-rose-300 px-2 py-1 rounded text-base text-gray-900'>Profile Update</p>
                               <p className='hover:bg-rose-300 px-2 py-1 rounded text-base text-gray-900'>Change Password</p>
                           </div>
                           <hr style={{fontSize: '20px'}} />
                           <div className='px-6 py-3 font-semibold cursor-pointer'>
                               <h1 className='py-1 rounde text-lg text-indigo-900'>Manage Orders</h1>
                               <p className='hover:bg-rose-300 px-2 py-1 rounded text-base text-gray-900'>My Returns</p>
                               <p className='hover:bg-rose-300 px-2 py-1 rounded text-base text-gray-900'>My Cancellations</p>
                               <p className='hover:bg-rose-300 px-2 py-1 rounded text-base text-gray-900'>My Reviews</p>
                           </div>
                           <hr style={{fontSize: '20px'}} />
                           <div className='px-6 py-3 font-semibold cursor-pointer'>
                               <h1 className='py-1 rounde text-lg text-indigo-900'>Manage Payments</h1>
                               <p className='hover:bg-rose-300 px-2 py-1 rounded text-base text-gray-900'>Payment Info</p>
                           </div>
                           <hr />
                           <div className='px-6 py-3 font-semibold cursor-pointer'>
                               <h1 className='py-1 rounde text-lg text-indigo-900'>Manage Wishlist</h1>
                               <p className='hover:bg-rose-300 px-2 py-1 rounded text-base text-gray-900'>Wish Info</p>
                           </div>
                           <div className='px-6 py-3 font-semibold cursor-pointer'>
                           <Link to="/"><button className='px-6 py-2 rounded text-lg text-white bg-indigo-700 hover:bg-indigo-900'>Logout</button></Link>
                           </div>
                           
                       </div>
                   </div>
               </div>
           </div>
        </div>
        <Footer />
    </div>
  )
}

export default UserProfile