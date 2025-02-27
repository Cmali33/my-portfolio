import React, { useState ,useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./SocailMedia/Header";
import SideBar from "./SocailMedia/SideBar";
import Footer from "./SocailMedia/Footer";
import CreatePost from "./SocailMedia/CreatePost";
import PostList from "./SocailMedia/PostList";
import PostListProvider from "./SocailMedia/store/PostListStore";
function App() { 
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar
            selectedtab={selectedtab}
            setselectedtab={setselectedtab}
          ></SideBar>
          <div className="content">
            <Header></Header>
          {selectedtab === "Home" ? ( <PostList></PostList>) : (<CreatePost></CreatePost> )}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}
export default App;
