import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Favorites from "./pages/favorites/Favorites";
import Details from "./pages/details/Details";
import AppProvider from "./components/context/ContextApi";
import Search from "./components/Search";

function App() {
  // const url = "https:/forkify-api.herokuapp.com/api/v2/recipes?search=banana"
  // const find = "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc9ca"
  return (
    <div  className="bg-bgColor">
<BrowserRouter>
<AppProvider>
  <Navbar/>
  <Search/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/favorites" element={<Favorites/>} />
  <Route path="/recipe-detail/:id" element={<Details/>} />
</Routes>
</AppProvider>
</BrowserRouter>
    </div>
  );
}

export default App;
