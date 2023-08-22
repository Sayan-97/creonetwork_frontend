import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreoNetworkLogo } from '../../assets/images'
import Button from '../Button'
import { HeaderLinks, SearchBar } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { setUserType } from '../../redux/reducers/userSlice'
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

const Header = () => {

    const [navOpen, setNavOpen] = useState(false)
    const handleNavOpen = () => {
        setNavOpen(!navOpen)
    }

    const userType = useSelector((state) => state.user.userType);
    const dispatch = useDispatch()

    return (
        <header className='py-4 relative z-40'>
            <nav className='container flex items-center max-lg:justify-between gap-16'>
                <Link to={`/`}>
                    <img
                        src={CreoNetworkLogo}
                        alt="img"
                        className='w-28'
                    />
                </Link>
                <div className='max-lg:hidden flex-grow flex items-center justify-between'>
                    <HeaderLinks
                        userType={userType}
                    />
                    {userType === 'freelancer' ? (
                        <div>
                            <SearchBar />
                        </div>
                    ) : (
                        <div className='flex items-center gap-4'>
                            {/* <Link to={`/onboarding`}>
                                <Button
                                    content={`Sign Up`}
                                    className={`w-36 py-2`}
                                />
                            </Link>
                            <Link to={`/login`}>
                                <Button
                                    content={`Log In`}
                                    className={`bg-primaryBg w-36 py-2`}
                                />
                            </Link> */}
                            <Button
                                content={`Join Waitlist`}
                                className={`w-36 py-2`}
                            />
                        </div>
                    )}
                </div>

                {/* Responsive Header */}
                <div className='lg:hidden'>
                    <FiMenu
                        onClick={handleNavOpen}
                        className='text-4xl'
                    />
                    <div
                        className={`absolute top-0 ${navOpen === true ? 'right-0' : 'right-[-100%]'} w-4/6 h-[100vh] z-50`}
                        style={{
                            backgroundColor: 'rgba(165, 20, 252, 0.2)', backdropFilter: 'blur(18px)'
                        }}
                    >
                        <div className='container py-10 flex flex-col items-end gap-8'>
                            <CgClose
                                onClick={handleNavOpen}
                                className='text-4xl'
                            />
                            <HeaderLinks />
                            <div className='flex flex-col gap-4'>
                                <Link to={`/onboarding`}>
                                    <Button
                                        content={`Sign Up`}
                                        className={`w-36 py-2`}
                                    />
                                </Link>
                                <Link to={`/login`}>
                                    <Button
                                        content={`Log In`}
                                        className={`bg-primaryBg w-36 py-2`}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={() => dispatch(setUserType('public'))}>Log Out</button> */}
            </nav>
        </header>
    )
}

export default Header