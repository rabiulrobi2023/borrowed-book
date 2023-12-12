import Footer from "../../Shared/Footer/Footer";
import useAxiosGeneral from "../../CustomHooks/useAxiosGeneral";
import { useEffect, useState } from "react";
import CategoryWiseBook from "../CategoryWiseBook/CategoryWiseBook";
import { useParams } from "react-router-dom";

const CategoryWiseBooks = () => {
  const { categoryName } = useParams()

  const axiosGeneral = useAxiosGeneral();
  const [categoryBooks, setCategoryBooks] = useState([]);
  const url = `/books?category=${categoryName}`;
  useEffect(() => {
    axiosGeneral.get(url).then((res) => {
      setCategoryBooks(res.data);
    });
  }, [url, axiosGeneral]);
 
  return (
    <div className="max-w-[1280px] mx-auto mt-[120px]">
      <p className="text-2xl font-bold mt-10">
        Your Chossen Category{" "}
        <span className="text-[#F3A847]">{categoryName} Books</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5   mt-10">
        {categoryBooks.map((categoryBook) => (
          <CategoryWiseBook
            key={categoryBook._id}
            categoryBook={categoryBook}
          ></CategoryWiseBook>
        ))}
      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default CategoryWiseBooks;
