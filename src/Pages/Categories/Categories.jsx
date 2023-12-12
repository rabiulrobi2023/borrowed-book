
import { useEffect, useState } from "react";
import useAxiosGeneral from "../../CustomHooks/useAxiosGeneral";
import Category from "../Category/Category";



const Categories = () => {
    const [categories,setCategories]=useState([])
    const axiosGeneral=useAxiosGeneral()
    const url="/category"

    useEffect(()=>{
        axiosGeneral.get(url)
        .then(res=>setCategories(res.data))
    },[url,axiosGeneral])
   

    return (
        <div className="mt-14 flex flex-col mx-auto  max-w-[1280px]">
            <p className="text-3xl font-bold"><span className="text-[#F3A847] font-bold"> Categories</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6 mx-auto  ">
            {
                categories.map(category=><Category key={category.id} category={category}></Category>)
            }
        </div>
        </div>
    );
};

export default Categories;