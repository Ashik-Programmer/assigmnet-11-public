import React, { useEffect, useState } from 'react';
import Acessorie from '../Acessorie/Acessorie';

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        fetch('accessories.json')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, []);

    return (
        <div className='container'>
            <div className="bicycle-header ">
                <div className="hr-roll"></div>
                <h2 className="py-5 text-color">Accessories</h2>
                <div className="hr-roll"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 col">
                {
                    accessories.map(acessorie => <Acessorie
                        key={acessorie._id}
                        acessorie={acessorie}
                    ></Acessorie>)
                }
            </div>
        </div>
    );
};

export default Accessories;