import axios from "axios";

const axiosGeneral=axios.create({
    baseURL:'https://assignment-11-server-kappa-jade.vercel.app'
})

const useAxiosGeneral = () => {
   
    return axiosGeneral
};

export default useAxiosGeneral;
