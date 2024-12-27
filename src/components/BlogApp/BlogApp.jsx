import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function BlogApp() {



    return (
        <Router>
            <div>
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/blogs/:id" element={<BlogDetails/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );

}
export default BlogApp;

