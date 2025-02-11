import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./Components/Uitlty/NavBarLogin";
import Loginpage from "./Pages/Auth/Loginpage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import Footer from "./Components/Uitlty/Footer";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrands from "./Pages/Brand/AllBrandsPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePayMethoudPage from "./Pages/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrders from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./Pages/Users/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Pages/Users/UserFavoriteProductsPage";
import UserAllAddresPage from "./Pages/Users/UserAllAddresPage";
import UserAddAddressPage from "./Pages/Users/UserAddAddressPage";
import UserEditAddressPage from "./Pages/Users/UserEditAddressPage";
import UserProfilePage from "./Pages/Users/UserProfilePage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrands />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrders />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />}/>
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />}/>
          <Route path="/admin/addproduct" element={<AdminAddProductPage />}/>
          <Route path="/user/allorders" element={<UserAllOrdersPage />}/>
          <Route path="/user/favoriteProducts" element={<UserFavoriteProductsPage />}/>
          <Route path="/user/address" element={<UserAllAddresPage />}/>
          <Route path="/user/add-address" element={<UserAddAddressPage />}/>
          <Route path="user/edit-address" element={<UserEditAddressPage />}/>
          <Route path="user/profile" element={<UserProfilePage />}/>

         
          
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
