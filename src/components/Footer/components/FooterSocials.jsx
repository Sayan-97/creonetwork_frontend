import React from 'react'
import { FaFacebook, FaLinkedin, FaDiscord, FaTwitter } from 'react-icons/fa'

const FooterSocials = () => {
    const socials = [
        { icon: <FaFacebook />, link: '#' },
        { icon: <FaLinkedin />, link: '#' },
        { icon: <FaDiscord />, link: '#' },
        { icon: <FaTwitter />, link: '#' },
    ]

    return (
        <div className='flex items-center gap-8'>
            {socials.map((item, index) => (
                <div
                    key={index}
                    className='bg-primaryGradient inline-flex rounded-full p-[1.6px] xl:p-[1px]'
                >
                    <a
                        href={item.link}
                        className={`bg-primaryBg rounded-full p-2.5 text-xl`}
                    >
                        {item.icon}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default FooterSocials