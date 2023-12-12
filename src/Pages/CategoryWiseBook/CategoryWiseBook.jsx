import { Link } from "react-router-dom";


const CategoryWiseBook = ({ categoryBook }) => {
   
    const {_id,bookName,quantity,authorName,category,rating,bookImage } = categoryBook

    return (

        <div className=" shadow-lg shadow-[#232F3E] p-4 flex flex-col gap-3 rounded-md justify-between">
            <div className="h-[200px]">
                <img className="max-h-full mx-auto" src={bookImage} alt="Upcomming Your Procuct" />
            </div>
            <div className="flex flex-col gap-2 content-between">
                <h2 className="card-title text-lg font-bold">{bookName}</h2>
                <h2 className=""> <span className="font-bold">Author Name:</span> {authorName.slice(10)}</h2>
                <h2 > <span className="font-bold">Category:</span> <span className="text-[#F3A847]">{category}</span></h2>
                <h2 > <span className="font-bold">In Stoke:</span> <span className="text-[#F3A847]">{quantity}</span></h2>
                <div className="rating">
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="flex justify-center">
                    <Link to={`/book-details/${_id}`}><button className="btn bg-[#F3A847] text-white text-base rounded-md">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryWiseBook;