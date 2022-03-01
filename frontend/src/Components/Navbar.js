import Reactx, {useEffect, useState, useRef} from 'react';
import { Badge } from '@material-ui/core';
import { FavoriteBorder, AddShoppingCart, AccountBox, Menu, Clear} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authAction';

const Navbar = () => {
const [openNavbar, setOpenNavbar] = useState("bg-gray-100 hidden");
const [openValue, setOpenValue] = useState(0);
const [openDrop, setOpenDrop] = useState(false);
const ref = useRef(null);
const dispatch = useDispatch();
    const handleMenuBtn = () => {
        setOpenNavbar("bg-gray-100 block md:hidden");
        setOpenValue(1)
    }
    const handleClearBtn = () => {
        setOpenNavbar(" hidden");
        setOpenValue(0)
    }

    const logoutHandler = () => {
        dispatch(logout());
    }

    const { loading, user } = useSelector(state=>state.auth);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (!ref.current.contains(event.target)) {
                setOpenDrop(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    
  return (
    <div className="container">
    <div className="flex items-center justify-between">
        <div className='w-40'>
            <Link to="/">
            <img src="/assets/logo.png" alt="logo" className='w-full object-cover' />
            </Link>
        </div>
        <div className="hidden md:flex items-center w-full py-2 mx-5">
                <input type="text" className="w-full text-gray-500 text-base px-4 py-2 border border-primary focus:outline-none focus:border-purple-800" placeholder='Search' />
                <button className='text-white text-base font-semibold bg-primary border border-primary hover:bg-transparent hover:text-primary rounded-r px-4 py-2'>Search</button>
        </div>
        <div className="hidden md:flex items-center justify-between gap-4">
            <div className=" cursor-pointer flex items-center justify-center gap-2">
            <Badge badgeContent={4} color="secondary" >
                <FavoriteBorder />
            </Badge>
            <p className="text-violet-600 text-base">Wish</p>
            </div>
            <div className=" cursor-pointer flex items-center justify-center gap-2">
            <Badge badgeContent={3} color="secondary" >
                <AddShoppingCart />
            </Badge>
            <p className="text-violet-600 text-base">Cart</p>
            </div>
            {
               user ? (
                <div className='relative' ref={ref} onClick={() => setOpenDrop(!openDrop)}>
                <div className="bg-indigo-800 text-white flex items-center gap-2 rounded px-2 py-2 cursor-pointer border-2 border-teal-300">
                <img src={user.avatar} className='w-6 h-6 rounded-full ring-2 ring-teal-300' />
                <h1 className='font-semibold pr-6'>{user.name}</h1>
                </div>
                
                {
                        openDrop ? (
                            <div className='absolute top-11 right-0 bg-gray-200 w-36 rounded shadow ring-1 ring-fuchsia-700'>
                        <Link to="/profile">
                            <h1 className='text-base text-gray-900 font-semibold hover:bg-blue-200 px-4 py-2'>Profile</h1>
                        </Link>
                        {
                            user && user.role === "admin" ? (
                                <Link to="/dashboard">
                                    <h1 className='text-base text-gray-900 font-semibold hover:bg-blue-200 px-4 py-2'>Dashboard</h1>
                                </Link>
                            ) : (
                                <Link to="/orders">
                                <h1 className='text-base text-gray-900 font-semibold hover:bg-blue-200 px-4 py-2'>Orders</h1>
                                </Link>
                            )
                        }
                        <Link to="/">
                         <h1 className='text-base text-gray-900 font-semibold hover:bg-blue-200 px-4 py-2' onClick={logoutHandler}>Logout</h1>
                        </Link>
                    </div>
                        ) : null
                    }
                </div>
               ) : !loading && <Link to="/login">
               <div className="cursor-pointer flex items-center gap-2">
               <AccountBox />
               <p className="text-violet-600 text-base text-center">Login</p>
               </div>
               </Link>
            }
        </div>
        <button className="mx-2 px-2 py-1 text-white text-lg font-semibold bg-primary border border-primary hover:bg-transparent hover:text-gray-900 md:hidden">
            { openValue === 0 ? <Menu onClick={handleMenuBtn} /> : <Clear onClick={handleClearBtn} />}
        </button>
    </div>
    <div className={openNavbar}>
            <div className="flex items-center px-3 py-2 cursor-pointer">
            <input type="text" className="w-full text-gray-500 text-base px-4 py-2 border border-primary focus:outline-none focus:border-purple-800" placeholder='Search' />
                <button className='text-white text-base font-semibold bg-primary border border-primary hover:bg-transparent hover:text-primary rounded-r px-4 py-2'>Search</button>
            </div>
            <div className="flex items-center px-3 py-2 cursor-pointer text-gray-800 hover:bg-gray-300">
            <FavoriteBorder />
            <h1 className="text-lg font-semibold pl-3">Wishlist</h1>
            </div>
            <div className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-300">
            <AddShoppingCart />
            <h1 className="text-lg font-semibold pl-3">Cart</h1>
            </div>
            <div className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-300">
            <AccountBox />
            <h1 className="text-lg font-semibold pl-3">Account</h1>
            </div>
            {/* Category Mobile Starts */}
            <div className="px-4">
            <h1 className="text-lg text-primary font-semibold py-2">Category</h1>
            <div className="flex items-center justify-start py-1 hover:bg-gray-300">
            <img src="/assets/category-images/fruitsvegetables.png" alt="fruits" className="w-16 object-contain pr-4" />
            <p className="text-gray-900 text-md font-semibold">Fruits and Veges</p>
            </div>
            <div className="flex items-center justify-start py-1 hover:bg-gray-300">
            <img src="/assets/category-images/meatfish.png" alt="fruits" className="w-16 object-contain pr-4" />
            <p className="text-gray-900 text-md font-semibold">Meat and Fish</p>
            </div>
            <div className="flex items-center justify-start py-1 hover:bg-gray-300">
            <img src="/assets/category-images/beverage.png" alt="fruits" className="w-16 object-contain pr-4" />
            <p className="text-gray-900 text-md font-semibold">Beverage</p>
            </div>
            <div className="flex items-center justify-start py-1 hover:bg-gray-300">
            <img src="/assets/category-images/kitchenappliances.png" alt="fruits" className="w-16 object-contain pr-4" />
            <p className="text-gray-900 text-md font-semibold">Kitchen Appliances</p>
            </div>
            <div className="flex items-center justify-start py-1 hover:bg-gray-300">
            <img src="/assets/category-images/masala.png" alt="fruits" className="w-16 object-contain pr-4" />
            <p className="text-gray-900 text-md font-semibold">Cooking</p>
            </div>
            <div className="flex items-center justify-start py-1 hover:bg-gray-300">
            <img src="/assets/category-images/beauty.png" alt="fruits" className="w-16 object-contain pr-4" />
            <p className="text-gray-900 text-md font-semibold">Beauty Care</p>
            </div>
            <div className="flex items-center justify-start py-1 hover:bg-gray-300">
            <img src="/assets/category-images/health.png" alt="fruits" className="w-16 object-contain pr-4" />
            <p className="text-gray-900 text-md font-semibold">Health Care</p>
            </div>
            <div className="flex items-center justify-start py-1 hover:bg-gray-300">
            <img src="/assets/category-images/package.png" alt="fruits" className="w-16 object-contain pr-4" />
            <p className="text-gray-900 text-md font-semibold">Family Packages</p>
            </div>
        </div>
        {/* Category Mobile Starts */}
    </div>
    </div>
  )
}

export default Navbar;