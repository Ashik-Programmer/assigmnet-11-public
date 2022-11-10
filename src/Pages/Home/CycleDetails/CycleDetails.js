import React, { useEffect, useState } from 'react';
import CycleDetail from '../CycleDetail/CycleDetail';

const CycleDetails = () => {
    const [cycleDetails, setCycleDetails] = useState([]);

    useEffect(() => {
        fetch('cycleDetails.json')
            .then(res => res.json())
            .then(data => setCycleDetails(data))
    }, [])

    return (
        <div className='container'>
            <div className="bicycle-header ">
                <div className="hr-roll"></div>
                <h2 className="py-5 text-color">Features</h2>
                <div className="hr-roll"></div>
            </div>
            {
                cycleDetails.map(cycleDetail => <CycleDetail
                    key={cycleDetail._id}
                    cycleDetail={cycleDetail}
                ></CycleDetail>)
            }
        </div>
    );
};

export default CycleDetails;