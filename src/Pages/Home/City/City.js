import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CityCard from './CityCard';
import Loading from '../../../Components/Loading/Loading';


const City = () => {

    const { data: allCity, isLoading } = useQuery({
        queryKey: ['allCity'],
        queryFn: async () => {
            const res = await fetch('https://sweet-home-server-nahiannahin.vercel.app/cities')
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-10 lg:w-5/6 mx-auto'>
            <h2 className='lg:text-5xl md:text-3xl text-xl text-black font-bold mb-10'>Find a Sweet Home in your desire city</h2>
            <div className="flex flex-wrap gap-4 justify-around">
                {
                    allCity.map(city => <CityCard
                        key={city._id}
                        city={city}
                    ></CityCard>)
                }
            </div>

        </div>
    );
};

export default City;