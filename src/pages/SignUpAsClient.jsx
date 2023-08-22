import React from 'react'
import { BlankAvatarImg } from '../assets/images'
import { Button } from '../components'
import { RiAddFill } from 'react-icons/ri'

const SignUpAsClient = () => {
    return (
        <section>
            <form
                className='lg:w-3/5 mx-auto bg-accentColor p-8 space-y-4 rounded-customLarge'
            >
                <div className='grid justify-items-center gap-2'>
                    <h2 className='text-3xl font-customBold'>Sign Up to <span className='bg-primaryGradient text-transparent bg-clip-text'>Hire Talent</span></h2>
                    <p className='text-lg'>To keep things safe & simple we need your personal information</p>
                </div>
                <div className='grid justify-items-center gap-2'>
                    <img
                        src={BlankAvatarImg}
                        alt="img"
                        className='w-28 h-28 rounded-full object-cover'
                    />
                    <Button
                        content={<><RiAddFill className='text-xl' /> Upload Photo</>}
                        className={`flex items-center gap-2 px-6 py-2.5`}
                    />
                </div>

                <div className='grid gap-1'>
                    <label
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        name='username'
                        id='username'
                        placeholder='Enter your username'
                    />
                </div>
                <div className='grid gap-1'>
                    <label
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='Enter your email address'
                    />
                </div>
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div className='grid gap-1'>
                        <label
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            placeholder='Enter your password'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label
                            htmlFor="cnfpassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name='cnfpassword'
                            id='cnfpassword'
                            placeholder='Confirm your password'
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div className='grid gap-1'>
                        <label
                            htmlFor="cName"
                        >
                            Company Name
                        </label>
                        <input
                            type="text"
                            name='cName'
                            id='cName'
                            placeholder='Enter your company name'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label
                            htmlFor="dob"
                        >
                            DOB
                        </label>
                        <input
                            type="date"
                            name='dob'
                            id='dob'
                        />
                    </div>
                </div>
                <div className='space-x-2'>
                    <input 
                        type="checkbox"
                        className='w-4 h-4'
                    />
                    <label 
                        htmlFor=""
                    >
                        Send me emails and announcements made on Creo Network
                    </label>
                </div>
                <div className='space-x-2'>
                    <input
                        type="checkbox"
                        className='w-4 h-4'
                    />
                    <label
                        htmlFor=""
                    >
                        Yes, I understand and agree to the Creo Network Terms of Service ,
                        including the User Agreement and Privacy Policy.
                    </label>
                </div>
                <div className='flex justify-center'>
                    <Button
                        type={`submit`}
                        content={`Sign Up`}
                        className={`px-6 py-2.5`}
                    />
                </div>
            </form>
        </section>
    )
}

export default SignUpAsClient