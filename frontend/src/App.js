import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import MisMatch from "./Pages/MisMatch";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import UserProfile from "./Pages/UserProfile";
import store from './store';
import { loadUser } from './redux/actions/authAction';
import { useEffect } from "react";
// import LoggedinUser from './Pages/LoggedinUser'
// import ProductDetailsPage from './Pages/ProductDetailsPage';


function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<ProductPage />} />
        <Route path="/profile" exact element={<UserProfile />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        {/* <Route path="/farmex/loggedinuser" exact element={<LoggedinUser />} /> */}
        <Route path="*" element={<MisMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
