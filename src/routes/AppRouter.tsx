import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/customer/Login";
import Register from "../pages/customer/Register";
import Booking from "../pages/customer/Booking";
import BookingConfirmation from "../pages/customer/BookingConfirmation";
import BookingDetails from "../pages/customer/BookingDetails";
import MyBookings from "../pages/customer/MyBookings";
import NotFound from "../pages/customer/NotFound";
import Profile from "../pages/customer/Profile";
import ServiceDetails from "../pages/customer/ServiceDetails";
import Services from "../pages/customer/Services";
import Home from "../pages/customer/Home";

import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import BookingsManagement from "../pages/admin/BookingsManagement";
import BookingDetailsAdmin from "../pages/admin/BookingDetailsAdmin";
import CategoriesManagement from "../pages/admin/CategoriesManagement";
import Customers from "../pages/admin/Customers";
import ServiceForm from "../pages/admin/ServiceForm";
import ServicesManagement from "../pages/admin/ServicesManagement";
import Settings from "../pages/admin/Settings";
import SlotsManagement from "../pages/admin/SlotsManagement";

const router = createBrowserRouter([
  // Global routes without layouts
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  //   Customer (main) layout routes
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:serviceId", element: <ServiceDetails /> },
      { path: "/booking/:serviceId", element: <Booking /> },
      { path: "/booking/confirmation", element: <BookingConfirmation /> },
      { path: "/bookings", element: <MyBookings /> },
      { path: "/bookings/:bookingId", element: <BookingDetails /> },
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  // Admin layout Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "services", element: <ServicesManagement /> },
      { path: "services/new", element: <ServiceForm /> },
      { path: "services/:serviceId/edit", element: <ServiceForm /> },
      { path: "categories", element: <CategoriesManagement /> },
      { path: "slots", element: <SlotsManagement /> },
      { path: "bookings", element: <BookingsManagement /> },
      { path: "bookings/:bookingId", element: <BookingDetailsAdmin /> },
      { path: "customers", element: <Customers /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
