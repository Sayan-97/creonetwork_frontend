import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FindWork } from '../pages'

const FreelancerRoutes = () => {
    return (
        <Routes>
            {/* Find Work Page */}
            <Route path='/userID/findwork' element={<FindWork />}/>
        </Routes>
    )
}

export default FreelancerRoutes