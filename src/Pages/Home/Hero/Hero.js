import React from 'react';
import bgImage from '../../../assets/hero-home.jpeg'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero h-[560px]" style={{ backgroundImage: `url("${bgImage}")` }}  >
            <div className='grid content-center w-full h-[100%] bg-orange-500/40'>
                <div className='search grid gap-4 md:mx-auto p-10 rounded-lg mx-10'>
                    <div >
                        <h2 className='md:text-5xl text-3xl text-white font-bold'>16,000+ available rentals</h2>

                    </div>
                    <div>
                        <form>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zip code, city or area" required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className='text-black text-xl font-bold'>Popular Search</h2>
                        <p className='text-white text-xl underline'>Berlin, Hamburg, Munich, Frankfurt am main, Cologne, Stuttgart</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;