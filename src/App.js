import jwt_decode from "jwt-decode";

// import Inventory from "./Inventory";
import Signin from "./Signin";
import Header1 from "./Header1";
import Signup from "./Signup";
import AddMenu from "./AddMenu";
import Payment from "./Payment";
import BuyerSupplier from "./BuyerSupplier";
import AddOrder from "./AddOrder";
// import HomePage from "./HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import All from "./All";
export default function App() {

//   const headers = {
//     token: localStorage.getItem("token"),
    
//   };

   
// var token = headers.token;
// // var decodedHeader = jwt_decode(token, { header: true });
// // console.log(decodedHeader);

// var decoded = jwt_decode(token);
//  var tokenData=decoded.result
// console.log(decoded.result,"decodeedd");
// console.log(headers.token,"hh")
  return (
    <div className="App">
      <Router>
        
        {/* <HomePage /> */}

        <Header1 />
       

        <Routes>
          
        <Route path="/" element={<AddMenu />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/header" element={<All />} > */}

{/* <Route path="/signup" element={<Signup />} /> */}
{/* <Route path="/header/Order" element={<AddOrder />} />

<Route path="/header/home" element={<HomePage />} />
<Route path="/header/buyerSupplier" element={<BuyerSupplier />} />
<Route path="/header/payment" element={<Payment />} />
</Route> */}

          {/* <Route path="/header" element={<All/>} /> */}
          {/* <Route path="/header/home" element={<HomePage />} />
          <Route path="/header/buyerSupplier" element={<BuyerSupplier />} />
          <Route path="/header/payment" element={<Payment />} /> 
             */}

          
          {/* <Route path="/buyerSupplier" element={<BuyerSupplier />} />*/}
          {/* <Route path="/payment" element={<Payment />} />   */}
        </Routes>
      </Router>
    </div>
  );
}
