import * as React from "react";
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";
import Services from "../services/Servicepage";
import About from "../about/About";
import Blog from "../blog/Blog";
import Contact from "../contact/contactpage";
import Singlepost from "../blog/singlepost";

import Dashboard from "../admin/dashboard/Dashboard";
import DashboardLayout from "../admin/dashboard/DashboardLayout";
import EditCars from "../admin/dashboard/poftfoliocar/EditCars";
import Uplodcar from "../admin/dashboard/poftfoliocar/Uplodcar";
import ManageCars from "../admin/dashboard/poftfoliocar/ManageCars";
import ViewCars from "../admin/dashboard/poftfoliocar/ViewCars";
import Banner from "../admin/dashboard/banner/Banner";
import BannerAdd from "../admin/dashboard/banner/BannerAdd";
import BannerEdit from "../admin/dashboard/banner/BannerEdit";
import WhoWeAre from "../admin/dashboard/who_we_are/WhoWeAew";
import WhoWeAre_Upload from "../admin/dashboard/who_we_are/WhoWeAre_Upload";
import WhoWeAreEdit from "../admin/dashboard/who_we_are/WhoWeAreEdit";
import CompanyOverview from "../admin/dashboard/CompanyOverview/CompanyOverview";
import UploadOverview from "../admin/dashboard/CompanyOverview/UploadOverview";
import EditOverview from "../admin/dashboard/CompanyOverview/EditOverview";
import ServiceManage from "../admin/dashboard/service/ServiceManage";
import UploadService from "../admin/dashboard/service/UploadService";
import SlidCarsGallery from "../admin/dashboard/carGallery/SlidCarsGallery";
import UploadCarsGallery from "../admin/dashboard/carGallery/UploadCarsGallery";
import EditGallery from "../admin/dashboard/carGallery/EditGallery";
import Counters from "../admin/dashboard/counter/Counters";
import UploadConters from "../admin/dashboard/counter/UploadConters";
import EditCounter from "../admin/dashboard/counter/EditCounter";
import Testimoni from "../admin/dashboard/testimoni/Testimoni";
import UploadTestimoni from "../admin/dashboard/testimoni/UploadTestimoni";
import EditTestimoni from "../admin/dashboard/testimoni/EditTestimoni";
import Footers from "../admin/dashboard/footers/Footers";
import UploadFooters from "../admin/dashboard/footers/UploadFooters";
import EditFooters from "../admin/dashboard/footers/EditFooters";
import Ourservice from "../admin/dashboard/ourservice/Ourservice";
import UploadOurservice from "../admin/dashboard/ourservice/UploadOurservice";
import EditOurservice from "../admin/dashboard/ourservice/EditOurservice";
import Product from "../admin/dashboard/products/Product";
import UploadProduct from "../admin/dashboard/products/UploadProduct";
import EditProduct from "../admin/dashboard/products/EditProduct";
import Contacts from "../admin/dashboard/contacts/Contacts";
import Testfoter from "../admin/dashboard/footers/Testfoter";
import Blogs from "../admin/dashboard/blogs/Blogs";
import UploadBlogs from "../admin/dashboard/blogs/UploadBlogs";
import EditBlogs from "../admin/dashboard/blogs/EditBlogs";
import Abouts from "../admin/dashboard/abouts/Abouts";
import UploadAbouts from "../admin/dashboard/abouts/UploadAbouts";
import EditAbouts from "../admin/dashboard/abouts/EditAbouts";
import AboutDepartment from "../admin/dashboard/aboutsDepartment/AboutDepartment";
import UploadAboutDepartment from "../admin/dashboard/aboutsDepartment/UploadAboutDepartment";
import EditAboutDepartment from "../admin/dashboard/aboutsDepartment/EditAboutDepartment";
import EditService from "../admin/dashboard/service/EditService";
import SignUp from "../admin/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Login from "../admin/Login";
import Logout from "../admin/Logout";
import Users from "../admin/dashboard/createUsers/Users";
import Partnership from "../partnership/Partnership";
import Tenders from "../tenders/Tenders";
import TendersPage from "../tenders/TendersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Partnership",
        element: <Partnership />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/blog/singlepost/",
        element: <Singlepost />,
      },
      {
        path: "/blog/singlepost/:id",
        element: <Singlepost />,
      },
      {
        path: "/Tenders",
        element: <Tenders/>,
      },
      {
        path: "/TendersPage",
        element: <TendersPage/>,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/admin/dashboard/managecars",
        element: <ManageCars />,
      },
      {
        path: "/admin/dashboard/managebanner",
        element: <Banner />,
      },
      {
        path: "/admin/dashboard/uploadbanner",
        element: <BannerAdd />,
      },
      {
        path: "/admin/dashboard/edit-banner/:id",
        element: <BannerEdit />,
        loader: ({ params }) =>
          fetch(`https://bazra.onrender.com/updatebanner/${params.id}`), // Use relative path
      },

      {
        path: "/admin/dashboard/uploadcars",
        element: <Uplodcar />,
      },
      {
        path: "/admin/dashboard/edit-cars/:id",
        element: <EditCars />,
        loader: ({ params }) =>
          fetch(`https://bazra.onrender.com/updatecars/${params.id}`),
      },
      {
        path: "/admin/dashboard/viewdetailcars/:id",
        element: <ViewCars />,
        loader: ({ params }) =>
          fetch(`https://bazra.onrender.com/allcars/${params.id}`),
      },

      {
        path: "/admin/dashboard/managewhoweare",
        element: <WhoWeAre />,
      },

      {
        path: "/admin/dashboard/uploawhoweare",
        // eslint-disable-next-line react/jsx-pascal-case
        element: <WhoWeAre_Upload />,
      },
      {
        path: "/admin/dashboard/edit-whoweare/:id",
        element: <WhoWeAreEdit />,
        loader: ({ params }) =>
          fetch(`https://bazra.onrender.com/updatewhoweare/${params.id}`),
      },

      // company overview path
      {
        path: "/admin/dashboard/managecompanyoverview",
        element: <CompanyOverview />,
      },
      {
        path: "/admin/dashboard/uploadoverview",
        element: <UploadOverview />,
      },
      {
        path: "/admin/dashboard/edit-overview/:id",
        element: <EditOverview />,
        loader: ({ params }) =>
          fetch(`https://bazra.onrender.com/bzoverview/${params.id}`),
      },

      //service
      {
        path: "/admin/dashboard/manageservice",
        element: <ServiceManage />,
      },
      {
        path: "/admin/dashboard/uploadservice",
        element: <UploadService />,
      },
      {
        path: "/admin/dashboard/edit-service/:id",
        element: <EditService />,
        // loader: ({params})=>fetch(`https://bazra.onrender.com/bzoverview/${params.id}`)
      },
      //slider cars in gallery

      {
        path: "/admin/dashboard/cargallery_slider",
        element: <SlidCarsGallery />,
      },
      {
        path: "/admin/dashboard/uploadcargallery_slide",
        element: <UploadCarsGallery />,
      },
      {
        path: "/admin/dashboard/edit-cargallery_slide/:id",
        element: <EditGallery />,
        // loader: ({params})=>fetch(`https://bazra.onrender.com/bzoverview/${params.id}`)
      },

      // counter to manage
      //slider cars in gallery

      {
        path: "/admin/dashboard/counters",
        element: <Counters />,
      },
      {
        path: "/admin/dashboard/uploadcounters",
        element: <UploadConters />,
      },
      {
        path: "/admin/dashboard/edit-counters/:id",
        element: <EditCounter />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //testimoni manage

      {
        path: "/admin/dashboard/testimoni",
        element: <Testimoni />,
      },
      {
        path: "/admin/dashboard/uploadtestimoni",
        element: <UploadTestimoni />,
      },
      {
        path: "/admin/dashboard/edit-testimoni/:id",
        element: <EditTestimoni />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //footer manager

      //testimoni manage

      {
        path: "/admin/dashboard/footers",
        element: <Footers />,
      },
      {
        path: "/admin/dashboard/uploadfooters",
        element: <UploadFooters />,
      },
      {
        path: "/admin/dashboard/edit-footers/:id",
        element: <EditFooters />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },
      {
        path: "/admin/dashboard/edit-test/:id",
        element: <Testfoter />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //our service description and video
      {
        path: "/admin/dashboard/ourservice",
        element: <Ourservice />,
      },
      {
        path: "/admin/dashboard/uploadourservice",
        element: <UploadOurservice />,
      },
      {
        path: "/admin/dashboard/edit-ourservice/:id",
        element: <EditOurservice />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //service product

      {
        path: "/admin/dashboard/product",
        element: <Product />,
      },
      {
        path: "/admin/dashboard/uploadproduct",
        element: <UploadProduct />,
      },
      {
        path: "/admin/dashboard/edit-product/:id",
        element: <EditProduct />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //// contacts//////

      //service product

      {
        path: "/admin/dashboard/contacts",
        element: <Contacts />,
      },
      {
        path: "/admin/dashboard/uploadcontacts",
        element: <UploadProduct />,
      },
      {
        path: "/admin/dashboard/edit-contacts/:id",
        element: <EditProduct />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      ////blogs////

      {
        path: "/admin/dashboard/blogs",
        element: <Blogs />,
      },
      {
        path: "/admin/dashboard/uploadblogs",
        element: <UploadBlogs />,
      },
      {
        path: "/admin/dashboard/edit-blogs/:id",
        element: <EditBlogs />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },

      //Abouts

      {
        path: "/admin/dashboard/abouts",
        element: <Abouts />,
      },
      {
        path: "/admin/dashboard/uploadabouts",
        element: <UploadAbouts />,
      },
      {
        path: "/admin/dashboard/edit-abouts/:id",
        element: <EditAbouts />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },
      //aboute department

      {
        path: "/admin/dashboard/aboutsdepartment",
        element: <AboutDepartment />,
      },
      {
        path: "/admin/dashboard/uploadaboutsdeparment",
        element: <UploadAboutDepartment />,
      },
      {
        path: "/admin/dashboard/edit-aboutsdepartment/:id",
        element: <EditAboutDepartment />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },
      //to create users to manage bazra website
      {
        path: "/admin/dashboard/users",
        element: <Users />,
        //  loader: ({params})=>fetch(`../../../data/Data/counter/${params.id}`)
      },
    ],
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/logout",
    element: <Logout />,
  },
]);

export default router;
