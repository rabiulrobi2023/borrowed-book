import Swal from "sweetalert2";
import useAxiosGeneral from "../../CustomHooks/useAxiosGeneral";

const AddBook = () => {
  const axiosGeneral = useAxiosGeneral();
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const quantity = form.quantity.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const bookImage = form.bookImage.value;

    const addBook = {
      bookName,
      quantity,
      authorName,
      description,
      category,
      rating,
      bookImage,
    };
    const url = "/books";

    axiosGeneral.post(url, addBook).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Book Added Successful", "Thanks to Add The Book", "success");
      }
    });
    form.bookName.value = ''
    form.quantity.value = ''
    form.authorName.value = ''
    form.category.value = ''
    form.description.value = ''
    form.rating.value = ''
    form.bookImage.value = ''
  };



  return (
    <div className="mt-[15vh]">
      <div className="md:w-1/3 mx-auto border-2 rounded-md p-5">
        <img
          className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] flex mx-auto rounded-full"
          src="https://i.ibb.co/jJV1Mtt/logo.jpg"
          alt=""
        />
        <p className="text-2xl font-bold text-center underline">Add Book</p>
        <div className="flex mt-6 justify-center">
          <form onSubmit={handleAddBook} className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
              <label htmlFor="">Book Name:</label>
              <input
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
                type="number"
                name="quantity"
                min={1}
                required
                className="border rounded-sm px-2 w-[220px]"
                placeholder="Quantity"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
              <label htmlFor="">Author Name:</label>
              <input
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
                type="text"
                required
                name="bookImage"
                className="border rounded-sm px-2 w-[220px]"
                placeholder="Image URL"
              />
            </div>

            <div className="flex flex-col  gap-4 text-lg justify-between">
              <label htmlFor="">Description:</label>
              <input
                type="text"
                required
                name="description"
                className="border rounded-sm px-2 h-[100px] text-start "
                placeholder="Write Product Description here.."
              />
            </div>

            <input
              type="submit"
              value="Add Book"
              className="btn bg-[#F3A847]  text-black w-full hover:bg-[#F3A847] hover:opacity-70"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
