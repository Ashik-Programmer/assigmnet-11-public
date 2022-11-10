import React from 'react';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';
import Bicycles from '../Bicycles/Bicycles';
import CycleDetails from '../CycleDetails/CycleDetails';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bicycles></Bicycles>
            <CycleDetails></CycleDetails>
            <Accessories></Accessories>
        </div>
    );
};

export default Home;