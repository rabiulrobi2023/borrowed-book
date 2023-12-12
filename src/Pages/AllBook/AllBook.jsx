import { Link } from "react-router-dom";

const AllBook = ({allBook}) => {
    const {_id,bookName,quantity,authorName,category,rating,bookImage}=allBook
    return (
        <div className=" shadow-lg shadow-[#232F3E] p-4 flex flex-col gap-3 rounded-md justify-between">
            <div className="h-[200px]">
                <img className="max-h-full mx-auto" src={bookImage} alt="Upcomming Your Procuct" />
            </div>
            <div className="flex flex-col gap-2 content-between">
                <h2 className="card-title text-lg font-bold">{bookName}</h2>
                <h2 className=""> <span className="font-bold">Author Name:</span> {authorName.slice(10)}</h2>
                <h2 > <span className="font-bold">Category:</span> <span className="text-[#f39a47]">{category}</span></h2>
                <h2 > <span className="font-bold">In Stoke:</span> <span className="text-[#f39a47]">{quantity} Nos</span></h2>

                <div className="rating">
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                </div>


                <div className="flex justify-center">
                    <Link to={`/update/${_id}`}><button className="btn bg-[#F3A847] text-white text-base rounded-md hover:bg-[#F3A847] hover:opacity-75">Update</button></Link>

                </div>
            </div>
        </div>
    );
};

export default AllBook;