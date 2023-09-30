import React from 'react';

const Hero = () => {
    return (
        <div>
         <div className="max-w-5xl px-2 py-4 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br /> your <span className="text-cyan-700 ">online coureses</span></h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-cyan-600 rounded-lg lg:w-auto hover:bg-cyan-500 focus:outline-none focus:bg-cyan-500">Shop Now</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src="https://i.ibb.co/Bjwnv7W/pablo-blockchain-courses.png" alt="Catalogue-pana.svg" />
            </div>
        </div>
        </div>   
        </div>
    );
};

export default Hero;