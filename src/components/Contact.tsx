import React from 'react'
import { RiMailLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-out-down">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-out-down">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-out-down">
                <RiMailLine size={30} /> asadanum320@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-out-down">
                <BsTelephone size={30} /> 03282944102
                </div>
            </div>
            <div className='space-y-8'>
              <div className='flex flex-col gap-1' data-aos="zoom-out-down">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-yellow-700'
                id='name' />
              </div>
              <div className='flex flex-col gap-1'data-aos="zoom-out-down">
                <label htmlFor="email">E-mail</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-yellow-700'
                id='email' />
              </div>
              <div className='flex flex-col gap-1' data-aos="zoom-out-down">
                <label htmlFor="msg">Message</label>
                <textarea
                className='bg-transparent border border-yellow-700'
                id='msg' rows={8} >
                </textarea>
              </div>
              <button className='bg-amber-600 p-2 px-6' data-aos="zoom-out-down">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact