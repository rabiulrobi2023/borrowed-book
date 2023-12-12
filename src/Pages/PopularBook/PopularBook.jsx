import { Link } from "react-router-dom";


const PopularBook = ({ popularBook }) => {
    const { _id, bookImage, bookName, authorName, category } = popularBook

    return (
        <Link to={`/book-details/${_id}`}>

            <div className="card flex flex-col bg-white p-4 h-full shadow-lg gap-3 shadow-[#6e8196] rounded-md hover:opacity-70">
                <figure><img className="max-h-[100px]" src={bookImage} alt="Upcomming Your Procuct" /></figure>
                <div className="flex flex-col justify-between gap-1">
                    <h2 className="card-title text-sm flex ">{bookName}</h2>
                    <p >Category:  <span className="text-base text-[#F3A847]">{category}</span> </p>
                    <p >Author Name:  <span className="text-base text-[#F3A847]">{authorName.slice(0,10)}</span> </p>
                </div>


            </div>



        </Link>

    );
};

export default PopularBook;