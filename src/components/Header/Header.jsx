import React from 'react'
import { Link } from 'react-router-dom'
import { CreoNetworkLogo } from '../../assets/images'
import Button from '../Button'
import HeaderLinks from './components/HeaderLinks'
import { useDispatch } from 'react-redux'
import { setPublic } from '../../redux/reducers/userStateReducer'

const Header = () => {

    const dispatch = useDispatch()

    return (
        <header className='py-4'>
            <nav className='container flex items-center gap-16'>
                <Link to={`/`}>
                    <img 
                        src={CreoNetworkLogo} 
                        alt="img"
                        className='w-28'
                    />
                </Link>
                <div className='flex-grow flex items-center justify-between'>
                    <HeaderLinks />
                    <div className='flex items-center gap-4'>
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
                {/* <button onClick={() => dispatch(setPublic())}>Log Out</button> */}
            </nav>
        </header>
    )
}

export default Header