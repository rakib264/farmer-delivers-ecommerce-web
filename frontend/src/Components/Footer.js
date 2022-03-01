import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
        <div className="bg-rose-50">
        <div className='container py-8'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='col-span-1 space-y-2'>
            <div className='w-52 h-20'>
            <img src="/assets/logo.png" alt="logo" className='w-full h-full object-cover' />
            </div>
                <p className='text-base text-justify text-gray-800'>
                FarmEx Shop is an agronomic startup. Our main purpose to create a green and healthy market place from where people can buy organic foods.
                </p>
                <h1 className='text-2xl text-gray-900 pt-2'>NewsLetter</h1>
                <div className='flex items-center pt-1'>
                    <input type="email" className='w-full block rounded-l focus:outline-none  px-2 py-2 border border-gray-400 focus:border-primary ' placeholder='someone@mail.com'/>
                    <button className='bg-primary text-white rounded-r border border-primary px-3 py-2  font-medium hover:bg-transparent hover:text-primary'>Subsribe</button>
                </div>
            </div>
            <div className="col-span-1 pt-8">
                <div className='grid grid-cols-2 gap-2'>
                    <div className='col-span-1'>
                        <h1 className='text-xl text-gray-900 uppercase font-semibold pb-6'>My Account</h1>
                        <div className='space-y-4'>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>Order</p>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>WishList</p>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>Track Order</p>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>Manage Account</p>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>Return Order</p>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h1 className='text-xl text-gray-900 uppercase font-semibold pb-6'>Information</h1>
                        <div className='space-y-4'>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>About Us</p>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>Return Policy</p>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>Terms & Conditions</p>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>Privacy Policy</p>
                        <p className='text-base text-gray-600 font-semibold hover:text-primary'>FAQs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-1 pt-8'>
            <h1 className='text-xl text-gray-900 uppercase font-semibold pb-6'>Contact</h1>
            <div className='space-y-4'>
                <div className="flex items-center gap-4">
                    <LocationOnIcon className='text-gray-600' />
                    <p className='text-base text-gray-600 font-semibold hover:text-primary'>12th Floor, Medona Tower, Mohakhali, Dhaka-1205</p>
                </div>
                <div className="flex items-center gap-4">
                    <PermPhoneMsgIcon  className='text-gray-600' />
                    <p className='text-base text-gray-600 font-semibold hover:text-primary'>+88 - 01828123264, +88 - 01722109770</p>
                </div>
                <div className="flex items-center gap-4">
                    <LocalPostOfficeIcon  className='text-gray-600' />
                    <p className='text-base text-gray-600 font-semibold hover:text-primary'>info@farmexshop.com</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className='bg-blue-900 text-white px-1 py-1 rounded-full flex item-center justify-center'><FacebookIcon /></button>
                    <button className='bg-pink-500	 text-white px-1 py-1 rounded-full flex item-center justify-center'><InstagramIcon /></button>
                    <button className='bg-rose-600	 text-white px-1 py-1 rounded-full flex item-center justify-center'><YouTubeIcon /></button>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    <div className="bg-gray-900">
        <div className='container py-4'>
            <div className='md:flex items-center justify-between'>
            <p className='text-lg text-white'>© RAFCART - All Rights Reserved</p>
            <img src="/assets/payment.png" className='h-5' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;