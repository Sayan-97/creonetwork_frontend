import React from 'react'

const Button = ({ className, task, content, type }) => {
    return (
        <button
            type={type}
            onClick={task}
            className={`bg-primaryGradient p-[1.6px] xl:p-[1px] rounded-customSmall font-bold hover:scale-105 capitalize`}
        >
            <p className={`${className} rounded-customSmall`}>
                {content}
            </p>
        </button>
    )
}

export default Button