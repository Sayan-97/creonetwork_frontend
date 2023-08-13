import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, OnBoardingPage, SignUpAsClient, SignUpAsFreelancer, LogInPage } from '../pages'

const PublicRoutes = () => {
    return (
        <Routes>
            {/* Landing Page */}
            <Route path='/' element={<Home />}/>
            {/* Onboarding Page */}
            <Route path='/onboarding' element={<OnBoardingPage />}/>
            {/* LogIn Page */}
            <Route path='/login' element={<LogInPage />}/>
            {/* Sign Up Pages */}
            {/* SignUp as Freelancer */}
            <Route path='/onboarding/freelancer' element={<SignUpAsFreelancer />}/>
            {/* SignUp as Client */}
            <Route path='/onboarding/client' element={<SignUpAsClient />}/>
        </Routes>
    )
}

export default PublicRoutes