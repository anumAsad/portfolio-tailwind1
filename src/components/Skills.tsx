import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='cotainer pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-out-down">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                As a versatile web designer and developer, I create seamless digital experiences that bridge aesthetics with functionality. My approach combines creative vision with technical expertise, ensuring each project reflects both the client’s brand identity and the needs of their audience. With a strong foundation in HTML, CSS, JavaScript, and responsive design principles, I craft websites that are visually compelling, intuitive to navigate, and optimized for performance.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-yellow-700 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-out-down">Typescript</h2>
                        <h2 data-aos="zoom-out-down">React.js</h2>
                        <h2 data-aos="zoom-out-down">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-out-down">Tailwind</h2>
                        <h2 data-aos="zoom-out-down">CSS</h2>
                        <h2 data-aos="zoom-out-down">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills