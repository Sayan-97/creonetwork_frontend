import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components'

const LogInPage = () => {
    return (
        <section>
            <form
                className='bg-accentColor p-12 w-[40%] mx-auto rounded-customLarge grid gap-12 justify-items-center'
            >
                <h2 className='text-3xl font-customBold text-center'>Log In to <span className='bg-primaryGradient text-transparent bg-clip-text'>Creo Network</span></h2>
                <div className='w-full grid gap-2'>
                    {/* Username */}
                    <div className='grid gap-1'>
                        <label 
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input 
                            type="text"
                            id='username'
                            name='username'
                            placeholder='Enter your username'
                        />
                    </div>
                    {/* Password */}
                    <div className='grid gap-1'>
                        <label 
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            placeholder='Enter your password'
                        />
                    </div>
                    {/* Forgot Password */}
                    <Link>Forgot Password?</Link>
                </div>
                <Button 
                    type={`submit`}
                    content={`Log In`}
                    className={`px-9 py-3`}
                />
                <Link className='text-lg hover:text-secondaryColor'>Want to become a part of Creo Network?</Link>
            </form>
        </section>
    )
}

export default LogInPage