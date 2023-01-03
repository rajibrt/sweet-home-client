import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
    const { _id, city_name, rental, img } = listing;

    return (
        <Link to={`/singleview/${_id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="p-4">
                    <div className="flex justify-between">
                        <h2 className="">{city_name}</h2>
                        <p>$ {rental}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full">Details</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ListingCard;