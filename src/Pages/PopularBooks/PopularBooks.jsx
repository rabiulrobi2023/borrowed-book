import { useEffect, useState } from "react";
import PopularBook from "../PopularBook/PopularBook";


const PopularBooks = () => {
    const [popularBooks, setPopularBooks] = useState([])

    useEffect(()=>{
        fetch("https://assignment-11-server-kappa-jade.vercel.app/all-books")
        .then(res => res.json())
        .then(data =>setPopularBooks(data))

    }
    ,[])


    return (
        <div className="mt-10 p-2 md:p-10 mx-auto max-w-[1280px]">
            <p className="text-3xl font-bold"> <span className="text-[#F3A847] font-bold">Popular</span> Books</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5  h-full  content-center grid-flow-row ">
            
            {
                popularBooks.slice(0,13).map(popularBook=><PopularBook key={popularBook._id} popularBook={popularBook}></PopularBook>)
            }
          
        </div>
        </div>
    );
};

export default PopularBooks;
