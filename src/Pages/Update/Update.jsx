import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosGeneral from "../../CustomHooks/useAxiosGeneral";
import Swal from "sweetalert2";
import Footer from "../../Shared/Footer/Footer";


const Update = () => {
    const axiosGeneral = useAxiosGeneral()
    const loadedData = useLoaderData()
    console.log(loadedData)
    const { _id,bookName, quantity, authorName, category, rating, bookImage } = loadedData;
    const updateUrl = `/update-some?_id=${_id}`
    const navigate=useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const bookName = form.bookName.value;
        const quantity = form.quantity.value;
        const authorName = form.authorName.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const bookImage = form.bookImage.value;

        const updateData = {
            bookName,
            quantity,
            authorName,
            category,
            rating,
            bookImage,
        };


        axiosGeneral.put(updateUrl, updateData)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire("Book Added Successful", "Thanks to Add The Book", "success");
                }
            })
            navigate(-1)
        }


        return (
            <div className="mt-[15vh]">
                <div className="md:w-1/3 mx-auto border-2 rounded-md p-5">
                    <img
                        className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] flex mx-auto rounded-full"
                        src="https://i.ibb.co/jJV1Mtt/logo.jpg"
                        alt=""
                    />
                    <p className="text-3xl font-bold text-center underline text-[#F3A847] ">Update Book</p>
                    <div className="flex mt-6 justify-center">
                        <form onSubmit={handleUpdate} className="space-y-5">
                            <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                                <label htmlFor="">Book Name:</label>
                                <input
                                    defaultValue={bookName}
                                    type="text"
                                    name="bookName"
                                    required
                                    className="border rounded-sm px-2 w-[220px]"
                                    placeholder="Book Name"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                                <label htmlFor="">Quantity of the Book:</label>
                                <input
                                    defaultValue={quantity}
                                    type="number"
                                    name="quantity"
                                    min={0}
                                    required
                                    className="border rounded-sm px-2 w-[220px]"
                                    placeholder="Quantity"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                                <label htmlFor="">Author Name:</label>
                                <input
                                    defaultValue={authorName}
                                    type="text"
                                    name="authorName"
                                    required
                                    className="border rounded-sm px-2 w-[220px]"
                                    placeholder="Author Name"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                                <label htmlFor="">Category:</label>
                                <div className="flex items-start">
                                    <select
                                        defaultValue={category}
                                        name="category"
                                        required
                                        className="border px-2 w-[220px]"
                                    >
                                        <option disabled selected>
                                            Select Category
                                        </option>
                                        <option>Islamic</option>
                                        <option>Engineering</option>
                                        <option>Medical</option>
                                        <option>History</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                                <label htmlFor="">Rating:</label>
                                <div className="flex items-start">
                                    <select
                                        defaultValue={rating}
                                        name="rating"
                                        required
                                        className="border px-2 w-[220px]"
                                    >
                                        <option disabled selected>
                                            Give a Rating
                                        </option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                                <label htmlFor="">Image URL:</label>
                                <input
                                    defaultValue={bookImage}
                                    type="text"
                                    required
                                    name="bookImage"
                                    className="border rounded-sm px-2 w-[220px]"
                                    placeholder="Image URL"
                                />
                            </div>


                            <input
                                type="submit"
                                value="Update "
                                className="btn bg-[#F3A847]  text-stone-900 w-full font-bold hover:bg-[#F3A847] hover:opacity-70"
                            ></input>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    
};

export default Update;