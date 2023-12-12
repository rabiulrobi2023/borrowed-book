import Swal from 'sweetalert2'
import useAxiosGeneral from '../../CustomHooks/useAxiosGeneral'


const BorrowedBook = ({ borrowedBook, borrowedBooks, setborrowedBooks }) => {
    const { bookImage, bookName, category, returnDate, bookingDate, mainId, _id } = borrowedBook
    const axiosGeneral = useAxiosGeneral()
    const borrowedUrl = `/borrow?_id=${_id}`
    const booksUpdateUrl = `/booksQuantityIncrease?mainId=${mainId}`



    const handleReturn = _id => {
 
        Swal.fire({
            title: 'Return Book?',
            text: "Are you shure, return this book",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, return it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosGeneral.delete(borrowedUrl)
                    .then(res => {
                        console.log(res.data.deletedCount)
                        if (res.data.deletedCount> 0) {
                            Swal.fire(
                                'Returned',
                                'Your book returned successfull',
                                'success'
                            )
                        }
                        const reamining = borrowedBooks.filter(x => x._id !== _id)
                        setborrowedBooks(reamining);

                        // ==Increase Quantity of this book from bookCollection and Update==
                       

                        axiosGeneral.put(booksUpdateUrl)
                            .then(res => {
                                console.log(res.data)
  
                            })
                    })
            }
        })
    }



    return (
        <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    <tr className=" grid grid-cols-7 items-center justify-center mx-auto">
                        <td><img className="w-[50px]" src={bookImage} alt="" /></td>
                        <td>{bookName}</td>
                        <td>{category}</td>
                        <td>{bookingDate}</td>
                        <td>{returnDate}</td>
                        <td ><p onClick={() => handleReturn(_id)} className="text-white rounded-md font-bold text-center cursor-pointer py-2 bg-green-700 hover:bg-green-900">Return</p></td>

                    </tr>

                </tbody>
            </table>
        </div>
    );

}

export default BorrowedBook;