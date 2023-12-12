import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Footer from "../../Shared/Footer/Footer";

const UpdateProduct = () => {
    const loadedProduct = useLoaderData()
    const {_id, name, image, brand, price, description, category, rating } = loadedProduct;
    const navigate=useNavigate()

    const handleUpdateProduct=e=>{
        e.preventDefault();
        const form= e.target;
        const name= form.name.value;
        const brand =form.brand.value;
        const category = form.category.value;
        const price=form.price.value;
        const rating =form.rating.value;
        const image= form.image.value;
        const description = form.description.value;

        const updateProduct={name,brand,category,price,rating,image,description}
        
        
        fetch(`https://assignment-11-server-kappa-jade.vercel.app/products/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateProduct)

        })
        .then(res=>res.json())
        .then (data=>{
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Successfull',
                    text: 'Coffee Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  navigate(`/unique-brnad-products/${brand}`)   
            }
            
        })
        
        
    }

    
    
    return (
        <div className="mt-10">
            <div className="md:w-1/3 mx-auto border-2 rounded-md p-5">
                <p className="text-2xl font-bold text-center underline">Update Product</p>
                <div className="flex mt-6 justify-center">
                    <form onSubmit={handleUpdateProduct} className="space-y-5">
                        <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                            <label htmlFor="">Product Name:</label>
                            <input type="text" name="name" defaultValue={name} required className="border rounded-sm px-2 w-[220px]" placeholder="Product Name" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                            <label htmlFor="">Brnad Name:</label>
                            <div className="flex items-start">
                                <select name="brand" defaultValue={brand} required className="border px-2 w-[220px]">
                                    <option disabled selected>Select a Brand</option>
                                    <option>HP</option>
                                    <option>DELL</option>
                                    <option>SAMSUNG</option>
                                    <option>OPPO</option>
                                    <option>XAIOMI</option>
                                    <option>LG</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                            <label htmlFor="">Type:</label>
                            <div className="flex items-start">
                                <select name="category" defaultValue={category} required className="border px-2 w-[220px]">
                                    <option disabled selected>Select Type</option>
                                    <option>Laptop</option>
                                    <option>Mobile</option>
                                    <option>Television</option>
                                    <option>Monitor</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                            <label htmlFor="">Price:</label>
                            <input type="number" required name="price" defaultValue={price} className="border rounded-sm px-2 text-center w-[220px]" placeholder="Price" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                            <label htmlFor="">Rating (1-5):</label>
                            <input type="number" required min={1} max={5} name="rating" defaultValue={rating} className="border rounded-sm px-2 text-center w-[220px]" placeholder="Rating" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 text-lg justify-between">
                            <label htmlFor="">Image URL:</label>
                            <input type="text" required name="image" defaultValue={image} className="border rounded-sm px-2 w-[220px]" placeholder="Image URL" />
                        </div>


                        <div className="flex flex-col  gap-4 text-lg justify-between">
                            <label htmlFor="">Description:</label>
                            <input type="text" required name="description" defaultValue={description} className="border rounded-sm px-2 h-[100px] text-start " placeholder="Write Product Description here.." />
                        </div>

                        <input type="submit" value="Update Product" className="btn bg-[#F3A847] text-white w-full hover:bg-[#F3A847] hover:opacity-30"></input>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProduct;