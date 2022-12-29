import React from 'react';
import City from './City/City';
import Hero from './Hero/Hero';
import PropertyInfo from './PropertyInfo';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PropertyInfo></PropertyInfo>
            <City></City>
        </div>
    );
};

export default Home;