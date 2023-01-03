import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleView = () => {
    const id = useLoaderData();

    const { data: roomDetails, isLoading } = useQuery({
        queryKey: ['all_rooms',],
        queryFn: async () => {
            const res = await fetch(`https://sweet-home-server-nahiannahin.vercel.app/rooms/${id}`)
            const data = res.json();
            return data;
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }

    const { name, room_size, city_name, address, rental, deposit, img, catergory, details
    } = roomDetails;

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto">
            <div><img className="w-full" src={img} alt="roomImage" /></div>
            <div className="w-full p-4 bg-slate-100 text-left">
                <h2 className="text-2xl font-bold">{name}</h2>
                <h2 className=""><span className="font-bold">City:</span> {city_name}</h2>
                <h2 className=""><span className="font-bold">Address:</span> {address}</h2>
                <div className="border-b-2 border-slate-300"></div>

                <div className="flex justify-between">
                    <h2 className="font-bold">Room Size:</h2>
                    <p>{room_size ? `${room_size} sft` : <span className='text-primary'>Not Mentioned</span>}</p>
                </div>

                <div className="flex justify-between">
                    <h2 className="font-bold">Rent:</h2>
                    <p>${rental}</p>
                </div>

                <div className="flex justify-between">
                    <h2 className="font-bold">Deposit:</h2>
                    <p>${deposit}</p>
                </div>

                <div className="flex justify-between">
                    <h2 className="font-bold">Catergory:</h2>
                    <p>{catergory}</p>
                </div>

                <div className="border-b-2 border-slate-300"></div>

                <div>
                    <h2 className="font-bold">Details:</h2>
                    <p className="text-justify">{details}</p>
                </div>

            </div>
        </div>
    );
};

export default SingleView;