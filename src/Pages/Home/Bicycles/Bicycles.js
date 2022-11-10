import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBicycle from '../../../hooks/useBicycle';
import Bicycle from '../Bicycle/Bicycle';
import './Bicycles.css';

const Bicycles = () => {
    const [cycles] = useBicycle();
    return (
        <div className="container">
            <div className="bicycle-header ">
                <div className="hr-roll"></div>
                <h2 className="py-5 text-color">Bicycles</h2>
                <div className="hr-roll"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 col">
                {
                    cycles.slice(3, 6).map(cycle => <Bicycle
                        key={cycle._id}
                        cycle={cycle}
                    ></Bicycle>)
                }
            </div>
            <div className="mt-3">
                <NavLink as={Link} to="/cycles" className='btn btn-success w-50 p-2 mx-auto'>All Bicycles</NavLink>
            </div>
        </div>
    );
};

export default Bicycles;