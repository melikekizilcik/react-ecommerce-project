import "./App.css";

//import components
import { Routes, Route } from "react-router-dom";

//import screens
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Blog from "./screens/Blog/Blog";
import Contact from "./screens/Contact/Contact";
import Pages from "./screens/Pages/Pages";
import Shop from "./screens/Shop/Shop";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import Cart from "./screens/Cart/Cart";
import Users from "./screens/Users/Users";
import Profile from "./screens/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/product-details/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
