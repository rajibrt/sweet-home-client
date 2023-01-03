import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import ListingCard from './ListingCard';
import Loading from '../../Components/Loading/Loading';
import { useLoaderData } from 'react-router-dom';

const CityWiseListing = () => {
    const city = useLoaderData();

    const { data: allRooms, isLoading } = useQuery({
        queryKey: ['all_rooms', 'city_name'],
        queryFn: async () => {
            const res = await fetch(`https://sweet-home-server-nahiannahin.vercel.app/all_rooms`)
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="grid h-96 content-center bg-cover bg-center bg-[url(https://i.ibb.co/ChMtvNh/germany.webp)]" >
                <h2 className="text-5xl text-white bg-slate-900/70 w-fit mx-auto py-4 px-10 rounded-md">Sweet Home from <br /><span className="font-bold">{city}</span></h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cools-1 m-4 gap-4">
                {
                    allRooms.map(listing => <ListingCard
                        key={listing._id}
                        listing={listing}
                    >
                    </ListingCard>)
                }
            </div>
        </div>
    );
};

export default CityWiseListing;