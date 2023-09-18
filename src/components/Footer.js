import React from 'react'
import {  logoLight, paymentLogo } from '../assets'
import { ImGithub } from 'react-icons/im'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md';
import {BsPersonFill, BsPaypal} from 'react-icons/bs';


const Footer = () => {
    return (
        <div className='bg-black text-[#949494] py-20 font-titleFont'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
                <div className='flex flex-col gap-7'>
                    <img className='w-32' src={logoLight} alt='logoLight' />
                    <p className='text-white text-sm tracking-wide'>@ ReactBD.com</p>
                    <img className='w-56' src={paymentLogo} alt='paymentlogo' />
                    <div className='flex gap-5 text-lg text-gray-400'>
                        <ImGithub className='hover:text-white duration-300 cursor-pointer' />
                        <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                        <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
                        <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                    </div>
                </div>
                {/* ================= LogoIcon End Here ================= */}
                {/* ================= LocateUs Start here =============== */}
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p>MBD,Evan, Muscut</p>
                        <p>Mob. 23258474389</p>
                        <p>Phone- 88485-78675</p>
                        <p>e-mail- ashhf@gmail.com</p>
                    </div>
                    </div>
                  {/* ================== LocateUs end here ============= */}
                  {/* ================== Profile start here ============= */}
                  <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                   <div className='flex flex-col gap-2 text-base'>
                   <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span><BsPersonFill/></span> my account</p>

                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span><BsPaypal/></span>checkout</p>

                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span><FaHome/></span>order tracking</p>

                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                    <span><MdLocationOn/></span>help & support</p>
                   </div>
                  </div>
                  {/* ========== Profile ends here ============ */}
                  {/* ============ subscribe start here =========== */}
                  <div className='flex flex-col justify-center'>
                    <input className='bg-transparent border px-4 py-2 text-sm'
                    placeholder='e-mail' type='text'/>
                    <button className='text-sm border text-white border-t-0 hover:bg-gray-900
                    active:text-black'>Subscribe</button>
                  </div>
                  {/* ============== ubscribe ends here ============= */}
            </div>
        </div>
    )
}

export default Footer;