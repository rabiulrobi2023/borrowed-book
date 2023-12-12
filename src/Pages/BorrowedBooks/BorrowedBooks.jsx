import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthContext";
import BorrowedBook from "../BorrowedBook/BorrowedBook";
import useAxiosGeneral from "../../CustomHooks/useAxiosGeneral";
import { CgUnavailable } from 'react-icons/cg';


const BorrwoedBooks = () => {
    const { user } = useContext(authContext)
    const email = user?.email;
    const url = `/borrow?email=${email}`
    const axiosGeneral = useAxiosGeneral()
    const [borrowedBooks, setborrowedBooks] = useState([])

    useEffect(() => {
        axiosGeneral.get(url)
            .then(res => {
                setborrowedBooks(res.data)
            })
    }, [url, axiosGeneral])

    return (
        <div className="max-w-[1280px] mx-auto mt-[100px]">
            
            {
                
                borrowedBooks.length < 1 ?
                    <div className="flex mx-auto flex-col gap-5">
                        <p className="text-9xl flex text-center mx-auto text-red-600"><CgUnavailable></CgUnavailable></p>
                        <p className="text-center text-5xl text-[]">You have no any borrowed book!</p>
                    </div>
                    :
                    <div >
                        <table className="table ">
                            <thead className="grid grid-cols-7 text-lg justify-center items-center ">

                                <th className="font-bold">Book Image</th>
                                <th className="font-bold">Book Name</th>
                                <th className="font-bold">Category</th>
                                <th className="font-bold">Borrowed Date</th>
                                <th className="font-bold">Return Date</th>
                                <th className="font-bold">Action</th>

                            </thead>
                        </table>
                        {
                            borrowedBooks.map(borrowedBook => <BorrowedBook key={borrowedBook._id} borrowedBook={borrowedBook} borrowedBooks={borrowedBooks} setborrowedBooks={setborrowedBooks}></BorrowedBook>)
                        }

                    </div>
            }
        </div>

    );
};

export default BorrwoedBooks;