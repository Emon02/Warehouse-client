import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ThemeButton from './ThemeButton';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <div className='bgNav'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 textHeading" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bgNav rounded-box ${menuOpen ? 'w-72' : 'hidden'}`}>
                            <li><Link to='/blog' className='textHeading text-base font-semibold'>Blog</Link></li>
                            <li><Link className='textHeading text-base font-semibold'>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link className="font-semibold normal-case text-2xl textHeading" to='/'>WareHouse</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 hover:bg">
                        <li><Link className='textHeading text-lg font-semibold' to='/blog'>Blog</Link></li>
                        <li><Link className='textHeading text-lg font-semibold'>Item 3</Link></li>
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-green-500  hover:border-green-700" >
                                    <div className="w-10 rounded-full" onClick={() => setProfileOpen(!profileOpen)}>
                                        <img src="https://placeimg.com/80/80/people" alt='' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className={`mt-3 p-2 shadow menu menu-compact dropdown-content bgNav rounded-box ${profileOpen ? 'w-72' : 'hidden'}`}>
                                    <li>
                                        <Link className="justify-between textHeading text-base font-semibold">
                                            Profile
                                        </Link>
                                    </li>
                                    <li><Link className='textHeading text-base font-semibold'>Settings</Link></li>
                                    <li><ThemeButton></ThemeButton></li>
                                    <li><Link className='textHeading text-base font-semibold'>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <>
                            <div className="navbar-end">
                                <ul className="menu menu-horizontal p-0 hover:bg">
                                    <li><Link className='textHeading text-lg font-semibold' to='/login'><button className=' btn btn-primary capitalize'>Login</button></Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;