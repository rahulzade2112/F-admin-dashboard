import "./App.css";
import Account from "./Components/Account/Account";
import Header from "./Components/CommonComponents/Header/Header";
import Sidenav from "./Components/CommonComponents/Sidenav/Sidenav";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productslist from "./Components/Products List/Productslist";
import AddProduct from "./Components/Add Product/AddProduct";
import { createContext, useContext, useEffect, useState } from "react";
// import { decodeToken } from "react-jwt";
import { searchContext } from "./Context/searchContext";
// export const searchContext = createContext();
function App() {
  const [token, setToken] = useState();
  // const [data, setData] = useState();
const [search , updateSearch]=useState("")
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    // setData(decodeToken(localStorage.getItem("token")))
  }, []);

  return (
<searchContext.Provider value={{searchVariable: search ,updateSearchVariable:updateSearch }}>
      <BrowserRouter>
        {token == null && <Login state={setToken} />}
        {token != null && (
          <div>
            <div className="app-container">
              <div className="sidenav-container">
                <Sidenav />
              </div>
              <div className="main-container">
                <div className="header-container">
                  <Header />
                </div>
                <div className="content-container">
                  <Routes>
                    <Route index element={<Dashboard />}></Route>
                    <Route path="/account" element={<Account /*state={data} *//>}></Route>
                    <Route path="/products" element={<Productslist /* state={data}*//>}></Route>
                    <Route path="/add" element={<AddProduct />}></Route>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter></searchContext.Provider>
  );
}
export default App;
