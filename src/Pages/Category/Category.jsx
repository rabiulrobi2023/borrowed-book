import { Link } from "react-router-dom";
import useAxiosGeneral from "../../CustomHooks/useAxiosGeneral";
import { useEffect } from "react";

const Category = ({ category }) => {
  const { categoryName, categoryImage } = category;

  return (
    <div className="flex m-auto">
     
      <div className="card card-compact w-[300px] max-h-[380px] bg-gray  text-center space-x-0 shadow-2xl shadow-[#232F3E] pb-4 rounded-lg" >
        <div className="h-[270px] flex justify-center">
          
            <img
              className="max-w-[300px] max-h-[260px] rounded-md"
              src={categoryImage}
              alt="Brand is Upcomming"
            />
        </div>
        <div className="flex-grow"></div>
        <div className="card-body flex">
          <h2 className="text-base font-bold flex-grow ">{categoryName} Books</h2>
        </div>
        <Link to={`/category-books/${categoryName}`}><button   className="btn bg-[#F3A847] text-white text-base rounded-lg hover:opacity-50 hover:bg-[#F3A847] ">Show All</button></Link>
        

      </div>
    </div>
  );
};
export default Category;
