import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthContext";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosGeneral from "../../CustomHooks/useAxiosGeneral";
import Swal from "sweetalert2";
import moment from "moment/moment";
import axios from "axios";



const Details = () => {
    const { _id } = useParams()
    const axiosGeneral = useAxiosGeneral()
    const singleBookUrl = `/singleBook?_id=${_id}`
    const borrowFindUrl = `/borrowBookBymainId?mainId=${_id}`
    const borrowUrl = "/borrow"
    const booksUrl = `/booksQuantityUpdate?_id=${_id}`
    const [singleBook, setSingleBook] = useState({})
    const navigate = useNavigate()

    // ====Getting Data By Specific ID From BookCollection=====
    useEffect(() => {
        axios.get(`https://assignment-11-server-kappa-jade.vercel.app/single-book/${_id}`)
            .then(res => {
                setSingleBook(res.data)
            })

    }, [])

    const {
        bookName,
        quantity,  
        authorName,
        description,
        category,
        rating,
        bookImage, } = singleBook


    // ======User Information==============
    const { user } = useContext(authContext)
    const email = user.email;
    const userName = user.displayName;

    const mainId = _id


    const handleBorrow = async () => {
        // ======Return Date Entry Table In SweetAlart====
        const borrowFindRes = await axiosGeneral.get(borrowFindUrl)
        const borrowFindData = borrowFindRes.data


        if (mainId === borrowFindData.mainId) {
            Swal.fire({
                icon: "error",
                title: "The Book Alreay Borrowed By You",
                text: "Please Borrow Another Book",
            });
            navigate(-1)


        }
        else {

            const { value: returnDate } = await Swal.fire({
                title: "Enter Return Date",
                input: "text",
                inputPlaceholder: "mm/dd/yyyy",
                showCancelButton: true,
            });
            if (returnDate) {
                // ====Post Data to BorrowedBook Collection===
                const bookingDate = moment().format('L');
                const borrowQuantity = 1
                const borrowBook = {
                    mainId,
                    email,
                    userName,
                    bookName,
                    category,
                    bookImage,
                    borrowQuantity,
                    bookingDate,
                    returnDate,
                    authorName
                }
                axiosGeneral.post(borrowUrl, borrowBook)
                    .then(res => {
                        // ==Decrease Quantity of this book from bookCollection and Update==
                        const decreaseQuantity = quantity - 1
                        const updateBookInfo = {
                            mainId,
                            bookName,
                            decreaseQuantity,
                            authorName,
                            description,
                            category,
                            rating,
                            bookImage
                        }

                        axiosGeneral.put(booksUrl, updateBookInfo)
                            .then(res => {
                                // =====If All Step Successfull show following sweetalart====
                                if (res.data.modifiedCount) {
                                    Swal.fire(`${bookName} is borrowed by you successfully`);
                                    navigate("/")
                                }
                            })
                    })

            }

        }
    }



    return (
        <div className="max-w-[1280px] mx-auto mt-28">
            <div className="card card-side rounded-none bg-base-100 shadow-xl flex flex-col p-10">
                <p className="text-3xl font-bold pb-8">Details of <span className="text-orange-500">{bookName}:</span></p>
                <div className="flex gap-10 flex-col md:flex-row items-center">
                    <div className="w-[50%]"><img className="max-w-[320px] justify-center mx-auto" src={bookImage} alt="Movie" /></div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-bold">{bookName}</h2>
                        <h2 className="text-3xl ">Category: {category}</h2>
                        <p className="text-2xl ">Name of Author: {authorName}</p>
                        <p className="text-2xl  ">Abailable Quantity: <span className="text-[#F3A847]" >{quantity} Nos</span></p>
                        <div className="rating">
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name={`raitng-${rating}`} className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex gap-4 ">
                            {
                                quantity < 1 ?
                                    <button disabled className="btn bg-[#F3A847] text-white text-base rounded-md hover:bg-[#F3A847] hover:opacity-75 w-24 disabled:text-gray-600">Borrow</button>
                                    :
                                    <button onClick={handleBorrow} className="btn bg-[#F3A847] text-white text-base rounded-md hover:bg-[#F3A847] hover:opacity-75 w-24 ">Borrow</button>

                            }

                            <Link to={"#"}><button className="btn bg-[#232F3E] text-white text-base hover:bg-[#232F3E] rounded-md flex-grow hover:opacity-75 w-24">Read</button></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-2xl font-bold">Description:</p>
                    <p className="text-xl text-gray-800 text-justify">{description}</p>
                </div>

            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Footer></Footer>
        </div>
    );
};

export default Details;