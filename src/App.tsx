import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AddPost } from "./addPost";
import { DeletePost } from "./deletepost";
import { GetData } from "./getComponent";
import { NotFound } from "./notFound";
import { Home } from "./homePage";
import { FilterTest } from "./filterTest";
import { Post } from "./postText";

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
        <Link to="/add" style={{ padding: 5 }}>
          Create
        </Link>
        <Link to="/remove" style={{ padding: 5 }}>
          Remove
        </Link>
        <Link to="/test" style={{ padding: 5 }}>
          Filter test
        </Link>
        <Link to="/test_post" style={{ padding: 5 }}>
          See some posts
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<GetData />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/remove" element={<DeletePost />} />
        <Route path="/test" element={<FilterTest />} />
        <Route path="/test_post" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
