import React from 'react'
import SectionHeader from './SectionHeader'
import { IoChevronDown } from 'react-icons/io5'

const FAQ = () => {

    const faqs = [
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
    ]

    return (
        <section className='space-y-8'>
            <SectionHeader 
                title={`Frequently Asked Qustions`}
                className={`justify-items-center`}
            />
            <div className='grid lg:grid-cols-2 gap-4'>
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-accentColor p-6 flex items-center justify-between text-lg rounded-customSmall`}
                    >
                        {item.qus} <IoChevronDown />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ