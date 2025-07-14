import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    const cards = [
        { icon: 'src/assets/app-development_7991055.png', title: 'Web Development', description: 'Building responsive and dynamic websites.' },
        { icon: 'src/assets/smartphone_2393300.png', title: 'Mobile Development', description: 'Creating user-friendly mobile applications.' },
        { icon: 'src/assets/ui.png', title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces.' },
        { icon: 'src/assets/cloud.png', title: 'Cloud Solutions', description: 'Implementing scalable cloud-based architectures.' },
    ];

    const industries = [
        { name: 'Healthcare', image: 'src/assets/healthcare1.png' },
        { name: 'Finance', image: 'src/assets/Finance.png' },
        { name: 'Education', image: 'src/assets/Education.png' },
        { name: 'Logistics', image: 'src/assets/Logistics.png' },
        { name: 'E-commerce', image: 'src/assets/E-commerce.png' },
        { name:'Ai/ML', image: 'src/assets/Ai,Ml.png' },

    ]

    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[80vh]">
                <img
                    src="/src/assets/new Image.png"
                    alt="heroImage"
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-opacity-60 text-white px-6 z-10">
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

            {/* Our Services */}
            
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="text-2xl mt-4">End-to-end development tailored to your business needs</p>
            </div>

            <div className="flex flex-wrap justify-center items-center px-4 py-4 mt-5 gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center p-4 m-2 bg-[#e8bad1] h-[300px] w-[300px] rounded-lg shadow-lg"
                        whileHover={{ y: -10, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src={card.icon} alt={card.title} className="w-16 h-16 mb-2 mt-2" />
                        <h2 className="text-xl font-semibold px-4 py-4">{card.title}</h2>
                        <p className="text-gray-600 px-4 py-4 text-center font-medium">{card.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Technology Section */}
            <div className="bg-[#FDF1EB]">
                <div className="text-center text-4xl font-bold px-5 py-5 mt-10">Technology</div>
                <div className="flex flex-wrap gap-4 items-center mt-10 px-30 py-20">

                    {/* Backend */}
                    <div className="border border-black h-[400px] w-[400px] rounded-2xl hover:shadow-lg bg-white transition-shadow duration-300 hover:bg-black hover:text-white">
                        <h1 className="text-center text-2xl font-bold mt-6">Backend</h1>
                        <div className="flex flex-wrap gap-6 px-8 py-8">
                            {Array(9).fill(0).map((_, i) => (
                                <div key={i}>
                                    <img src="src/assets/node-js.png" alt="node js" className="h-[60px]" />
                                    <h1>Node.js</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="border border-black h-[500px] w-[400px] rounded-2xl hover:shadow-lg transition-shadow duration-300 hover:bg-black hover:text-white bg-white">
                        <h1 className="text-center text-2xl font-bold mt-6">Frontend Development</h1>
                        <div className="flex flex-wrap gap-2 px-8 py-8">
                            {Array(4).fill(0).map((_, i) => (
                                <div key={i}>
                                    <img src="src/assets/node-js.png" alt="node js" className="h-[60px]" />
                                    <h1>Node.js</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DevOps */}
                    <div className="border border-black h-[400px] w-[400px] rounded-2xl hover:shadow-lg transition-shadow duration-300 hover:bg-gray-700 hover:text-white bg-white">
                        <h1 className="text-center text-2xl font-bold mt-6">DevOps Development</h1>
                        <div className="flex flex-wrap gap-2 px-8 py-8">
                            {Array(4).fill(0).map((_, i) => (
                                <div key={i}>
                                    <img src="src/assets/node-js.png" alt="node js" className="h-[60px]" />
                                    <h1>Node.js</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

{/* Industries Section */}

<div className="bg-[#f7f7f7] py-16 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
    <p className="text-gray-600 mb-10 text-lg">
      Transforming businesses across a wide range of sectors with tailored digital solutions.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.map((industry, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
          whileHover={{ y: -10, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <img
            src={industry.image}
            alt={industry.name}
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">{industry.name}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</div>

<div>
    <div>
        Our Portfolio
    </div>
    
</div>
        </>
    );
}

export default Home;
