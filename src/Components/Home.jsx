import React from 'react'

function Home() {
    const cards = [
        { icon: 'src/assets/app-development_7991055.png', title: 'Web Development', description: 'Building responsive and dynamic websites.' },
        { icon: 'src/assets/smartphone_2393300.png', title: 'Mobile Development', description: 'Creating user-friendly mobile applications.' },
        { icon: 'src/assets/ui.png', title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces.' },
        { icon: 'src/assets/cloud.png', title: 'Cloud Solutions', description: 'Implementing scalable cloud-based architectures.' },
    ]
    return (
        <>
            <div className="relative w-full h-[80vh]">

                <img
                    src="/src/assets/new Image.png"
                    alt="heroImage"
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                />


                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center  bg-opacity-60 text-white px-6 z-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Building Intelligent Digital Solutions — End-to-End
                    </h1>
                    <p className="max-w-2xl text-base md:text-lg">
                        We are a team of experienced software engineers, product managers,
                        and designers who are passionate about building innovative digital
                        solutions. From ideation to deployment, we’ve got you covered.
                    </p>
                </div>
            </div>
            {/* our service */}
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-4xl font-bold '>Our Services</h1>
                <p className='text-2xl mt-4'> End-to-end development tailored to your business needs</p>
            </div>

            <div className='flex flex-wrap justify-center items-center px-4 py-4  mt-5 gap-4'>
                {cards.map((card, index) => (

                    <div key={index} className="flex flex-col items-center p-4 m-2 bg-[#e8bad1] h-[300px] w-[300px] rounded-lg shadow-lg ">
                        <img src={card.icon} alt={card.title} className="w-16 h-16 mb-2 mt-2" />
                        <h2 className="text-xl font-semibold px-4 py-4">{card.title}</h2>
                        <p className="text-gray-600 px-4 py-4 text-center font-medium">{card.description}</p>

                    </div>
                ))}
            </div>
            {/* Technology Section */}
            <div className='bg-[#FDF1EB]'>

                <div className='text-center text-4xl font-bold px-5 py-5 mt-10'>Technology</div>
                <div className='flex flex-wrap gap-4 items-center mt-10  px-30 py-20'>

                    <div className=' border border-black h-[400px] w-[400px] rounded-2xl hover:shadow-lg bg-white transition-shadow duration-300 hover:bg-black hover:text-white'>
                        <h1 className='text-center text-2xl font-bold mt-6 '>backend</h1>

                        <div className='flex flex-wrap gap-6 px-8 py-8'>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>

                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>

                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>

                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>

                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>

                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                        </div>
                    </div>


                    <div className='border border-black h-[500px] w-[400px] rounded-2xl hover:shadow-lg transition-shadow duration-300 hover:bg-black hover:text-white bg-white'>
                        <h1 className='text-center text-2xl font-bold mt-6 '>Frontend devlopment</h1>

                        <div className='flex flex-wrap gap-2 px-8 py-8 '>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>

                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>

                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>

                            </div>
                        </div>
                    </div>

                    <div className='border border-black h-[400px] w-[400px] rounded-2xl hover:shadow-lg transition-shadow duration-300 hover:bg-black hover:text-white bg-white'>
                        <h1 className='text-center text-2xl font-bold mt-6'>Dveops Devlopment</h1>

                        <div className='flex flex-wrap gap-2 px-8 py-8'>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                            <div>
                                <img src='src/assets/node-js.png' alt='node js' className='h-[60px]' />
                                <h1>Node.js</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
