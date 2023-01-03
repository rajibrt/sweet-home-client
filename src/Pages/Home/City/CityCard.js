import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {

    return (
        <div>

            <Link to={`/citywiselisting/${city.city_name}`} className=""  >
                <div className="hero w-72 h-48 bg-base-100 shadow-xl image-full  relative rounded-lg" style={{ backgroundImage: `url("${city.city_img}")` }} >
                    <div className='absolute left-0 bottom-0 rounded-b-lg rounded-rlg bg-zinc-900/70 w-full pt-2'>
                        <p className="text-white text-left ml-2">Find your sweet home in</p>
                        <h2 className="card-title text-white ml-2 mb-2">{city.city_name}</h2>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default CityCard;