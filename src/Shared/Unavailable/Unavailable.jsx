
import { Link } from 'react-router-dom';

const Unavailable = () => {
    return (
        <div className='max-w-[1280px] mx-auto mt-[120px] text-center'>
            <img className='max-w-[500px] flex justify-center mx-auto' src="https://i.ibb.co/tbqX0cj/Unavailable.jpg" alt="" />
            <p className='text-4xl text-red-700 font-bold'>Unabailabe</p>
            <Link to={"/"}><p className='text-blue-800 font-bold text-xl underline'>Go Home</p></Link>
            
        </div>
    );
};

export default Unavailable;