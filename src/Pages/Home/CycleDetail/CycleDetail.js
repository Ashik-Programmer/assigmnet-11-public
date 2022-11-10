import React from 'react';
import './CycleDetail.css';

const CycleDetail = ({ cycleDetail }) => {
    const { name, price, description, supplierName, brand, img } = cycleDetail;
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4 detail-img">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Cycle: {name}</h5>
                        <p><b>Brand: {brand}</b></p>
                        <p className="card-text">{description}</p>
                        <div className='d-flex justify-content-between py-3'>
                            <button className='btn btn-outline-success w-25'>Buy now <span>${price}</span> Only</button>
                            <span>Supplier: <span className='fw-bolder'>{supplierName}</span> </span>
                        </div>
                        <p className="card-text text-center update-detail"><small className="text-muted">Last updated ... mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CycleDetail;