import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Dashboard from "./admin/Dashboard"
import Products from "./admin/Products"
import Orders from "./admin/Orders"
import Users from "./admin/Users"
import Reports from "./admin/Reports"
import NotFound from "./pages/NotFound"
import Wishlist from "./pages/Wishlist"
import Register from "./pages/Register"


const AppRoutes = () => 
{
    return (
        <Routes>
            {/* Public */}
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {/* User Account */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            {/* Admin */}

            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products/>} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/reports" element={<Reports />} />


            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}

export default AppRoutes