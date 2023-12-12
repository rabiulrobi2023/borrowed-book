import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import AddBook from "../../Pages/AddBook/AddBook";
import Login from "../../Shared/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import Details from "../../Pages/Details/Details";
import Register from "../../Shared/Register/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import BorrwoedBooks from "../../Pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import Update from "../../Pages/Update/Update";
import CategoryWiseBooks from "../../Pages/CategoryWiseBooks/CategoryWiseBooks";
import Unavailable from "../../Shared/Unavailable/Unavailable";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path:"/category-books/:categoryName",
        element:<CategoryWiseBooks></CategoryWiseBooks>
        
      },
      {
        path: "/add-book",
        element: <PrivetRouter>
          <AddBook></AddBook>
        </PrivetRouter>
      },
      {
        path: "/all-books",
        element: <PrivetRouter>
          <AllBooks></AllBooks>
        </PrivetRouter>
      },
     
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>

      },
     
      {
        path: "/book-details/:_id",
        element: <PrivetRouter>
          <Details></Details>
        </PrivetRouter>,

      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`https://assignment-11-server-kappa-jade.vercel.app/books/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>

      },
      {
        path: "/borrowed-books",
        element: <PrivetRouter>
          <BorrwoedBooks></BorrwoedBooks>
        </PrivetRouter>,

      },
      {
        path:"/*",
        element:<Unavailable></Unavailable>
      }

    ]

  },
]);

export default router;