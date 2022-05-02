import { BrowserRouter,Routes,Route } from "react-router-dom";
import BlogDetails from "./component/BlogDetails";
import Create from "./component/Create";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navbar />
          <div className="content">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/blogs/:id" element={<BlogDetails />} />
               <Route path="/create" element={<Create />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
