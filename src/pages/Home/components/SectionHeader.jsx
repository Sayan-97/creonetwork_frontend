import React from 'react'

const SectionHeader = ({ head, title, className }) => {
    return (
        <div className={`grid gap-4 ${className}`}>
            <h4 className='text-2xl leading-none uppercase font-customMedium bg-primaryGradient text-transparent bg-clip-text'>{head}</h4>
            <h2 className='text-4xl font-customBold leading-tight'>{title}</h2>
            <div className='w-20 h-1.5 bg-primaryGradient'></div>
        </div>
    )
}

export default SectionHeader