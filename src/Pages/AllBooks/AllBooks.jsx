import useAxiosGeneral from "../../CustomHooks/useAxiosGeneral";
import { useEffect, useState } from "react";
import AllBook from "../AllBook/AllBook";
import Footer from "../../Shared/Footer/Footer";



const AllBooks = () => {
    const allBooksUrl = "/all-books"
    const availBookUrl="/avail-book"
    const axiosGeneral = useAxiosGeneral()
    const [allBooks, setAllBooks] = useState([])
   

    useEffect(() => {
        axiosGeneral.get(allBooksUrl)
            .then(res => {
                setAllBooks(res.data)
               
            })

    }, [allBooksUrl, axiosGeneral])
    
    const handleFilter=()=>{
        axiosGeneral.get(availBookUrl)
        .then(res=>{
            setAllBooks(res.data)  

        })
       
        
    }

    return (
        <div className="max-w-[1280px] mx-auto mt-[120px]">
            <div className="flex justify-between items-center">
                <a href="/all-books"><p className="text-2xl font-bold">
                    All{" "}
                    <span className="text-[#F3A847]"> Books</span>
                </p></a>
                
                
                <button onClick={handleFilter} className="btn  bg-[#232F3E] text-white text-base rounded-md hover:bg-[#232F3E] hover:opacity-75 hover:text-[#F3A847]">Available Book</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-10">
                {allBooks.map((allBook) => (
                    <AllBook
                        key={allBook._id}
                        allBook={allBook}
                    ></AllBook>
                ))}
            </div>
            <Footer></Footer>
            

        </div>
    );
};

export default AllBooks;