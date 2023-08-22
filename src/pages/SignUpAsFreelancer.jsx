import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BlankAvatarImg } from '../assets/images'
import { HiPlus } from 'react-icons/hi'
import { Button } from '../components'
import { useDispatch } from 'react-redux'
import { setUserType } from '../redux/reducers/userSlice'

const SignUpAsFreelancer = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const UserSvg = () => (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M15 2.5C11.725 2.5 9.0625 5.1625 9.0625 8.4375C9.0625 11.65 11.575 14.25 14.85 14.3625C14.95 14.35 15.05 14.35 15.125 14.3625C15.15 14.3625 15.1625 14.3625 15.1875 14.3625C15.2 14.3625 15.2 14.3625 15.2125 14.3625C18.4125 14.25 20.925 11.65 20.9375 8.4375C20.9375 5.1625 18.275 2.5 15 2.5Z" fill="white" />
            <path d="M21.3502 17.6876C17.8627 15.3626 12.1752 15.3626 8.66269 17.6876C7.0752 18.7501 6.2002 20.1876 6.2002 21.7251C6.2002 23.2626 7.0752 24.6876 8.6502 25.7376C10.4002 26.9126 12.7002 27.5001 15.0002 27.5001C17.3002 27.5001 19.6002 26.9126 21.3502 25.7376C22.9252 24.6751 23.8002 23.2501 23.8002 21.7001C23.7877 20.1626 22.9252 18.7376 21.3502 17.6876Z" fill="white" />
        </svg>
    )

    const BookSvg = () => (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M25.625 8.75V18.75H7.9375C5.975 18.75 4.375 20.35 4.375 22.3125V8.75C4.375 3.75 5.625 2.5 10.625 2.5H19.375C24.375 2.5 25.625 3.75 25.625 8.75Z" fill="white" />
            <path d="M25.625 18.75V23.125C25.625 25.5375 23.6625 27.5 21.25 27.5H8.75C6.3375 27.5 4.375 25.5375 4.375 23.125V22.3125C4.375 20.35 5.975 18.75 7.9375 18.75H25.625Z" fill="white" />
            <path d="M20 9.6875H10C9.4875 9.6875 9.0625 9.2625 9.0625 8.75C9.0625 8.2375 9.4875 7.8125 10 7.8125H20C20.5125 7.8125 20.9375 8.2375 20.9375 8.75C20.9375 9.2625 20.5125 9.6875 20 9.6875Z" fill="white" />
            <path d="M16.25 14.0625H10C9.4875 14.0625 9.0625 13.6375 9.0625 13.125C9.0625 12.6125 9.4875 12.1875 10 12.1875H16.25C16.7625 12.1875 17.1875 12.6125 17.1875 13.125C17.1875 13.6375 16.7625 14.0625 16.25 14.0625Z" fill="white" />
        </svg>
    )

    const countries = ['USA', 'UK', 'Australia']
    const cities = ['ABC', 'ABC', 'ABC']
    const language = ['English', 'Dutch', 'Spanish']
    const proficiency = ['Beginner', 'Intermediate', 'Advanced']

    const handleSubmit = () => {
        dispatch(setUserType('freelancer'))
        navigate('/userID/findwork')
    }

    return (
        <section>
            <form
                className='lg:w-[55%] mx-auto bg-accentColor p-4 md:p-12 rounded-customLarge space-y-6'
            >
                <div className='space-y-3'>
                    <h3 className='text-3xl font-customBold'>Sign Up to find <span className='bg-primaryGradient text-transparent bg-clip-text'>Work</span> you love</h3>
                    <p className='text-lg'>Lets get started by adding few important details and information.</p>
                </div>
                <div className='bg-primaryGradient p-[1.6px] xl:p-[1px] rounded-customLarge'>
                    <div className='bg-accentColor p-4 rounded-customLarge space-y-8'>
                        <div className='flex items-end gap-1'>
                            <UserSvg />
                            <h4 className='text-xl font-customBold pl-2'>Personal Details</h4>
                            <p className='text-textGrayColor italic font-customMedium'>Required</p>
                        </div>
                        {/* Avatar */}
                        <div className='grid justify-items-center space-y-4'>
                            <img
                                src={BlankAvatarImg}
                                alt="img"
                                className='w-32 rounded-full object-cover'
                            />
                            <Button
                                content={
                                    <><HiPlus className='text-xl' />Upload Photo</>
                                }
                                className={`flex items-center gap-2 px-6 py-2 text-lg`}
                            />
                        </div>

                        <div className='grid gap-2'>

                            {/* Username */}
                            <div className='grid gap-1'>
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' placeholder='Enter your username' />
                            </div>

                            {/* Profile Title */}
                            <div className='grid gap-1'>
                                <label htmlFor="title">Profile Title</label>
                                <input type="text" id='title' placeholder='Enter your profile title' />
                            </div>

                            <div className='grid md:grid-cols-2 gap-2'>

                                {/* Country */}
                                <div className='grid gap-1'>
                                    <label htmlFor="country">Country</label>
                                    <select name="country" id="country">
                                        <option value="" disabled selected hidden>Select your country</option>
                                        {countries.map((item, index) => {
                                            return (
                                                <option key={index} value="">{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                {/* City */}
                                <div className='grid gap-1'>
                                    <label htmlFor="city">City</label>
                                    <select name="city" id="city">
                                        <option value="" disabled selected hidden>Select your city</option>
                                        {cities.map((item, index) => {
                                            return (
                                                <option key={index} value="">{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                            </div>

                            <div className='grid md:grid-cols-2 gap-2'>

                                {/* Add Language */}
                                <div className='grid gap-1'>
                                    <label htmlFor="language">Add Language</label>
                                    <select name="language" id="language">
                                        <option value="" disabled selected hidden>Select a language</option>
                                        {language.map((item, index) => {
                                            return (
                                                <option key={index} value="">{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                {/* Proficiency */}
                                <div className='grid gap-1'>
                                    <label htmlFor="proficiency">Proficiency</label>
                                    <select name="proficiency" id="proficiency">
                                        <option value="" disabled selected hidden>Select your proficiency</option>
                                        {proficiency.map((item, index) => {
                                            return (
                                                <option key={index} value="">{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* Professional Summery */}
                <div className='bg-primaryGradient p-[1.6px] xl:p-[1px] rounded-customLarge'>
                    <div className='bg-accentColor p-4 rounded-customLarge space-y-4'>
                        <div className='flex items-end gap-1'>
                            <BookSvg />
                            <h4 className='text-xl font-customBold pl-2'>Professional Summery</h4>
                            <span className='text-textGrayColor italic font-customMedium'>Required</span>
                        </div>

                        <div className='grid gap-4'>
                            <label htmlFor="summery">Write a short professional summery (3-5 sentences) about yourself and the work you do</label>
                            <textarea name="summery" id="summery" rows="4" placeholder='Add your summery'></textarea>
                        </div>
                    </div>
                </div>
                <Button
                    type={`submit`}
                    content={`Sign Up`}
                    task={handleSubmit}
                />
            </form>
        </section>
    )
}

export default SignUpAsFreelancer