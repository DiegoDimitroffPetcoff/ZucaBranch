import Header from "./pages/header";
import { Routes, Route } from "react-router-dom";

//PAGES
import ProjectsList from "./pages/projects/projectsList";
import ProjectComponent from "./pages/projects/project/project";
import Login from "./pages/auth/login";
import Form from "./pages/form/form";
import PageNotFound from "./pages/404";

import LoginTest from "./pages/auth/loginTest";
import Dashboard from "./pages/form/dashboard";
import EditeProject from "./pages/form/editeProject";
import Profile from "./pages/profile/profile";

import { useSelector } from "react-redux";


function App() {
  let log = useSelector((state) => state.loggedAction);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route exact path="/projectlist" element={<ProjectsList />}>
          {" "}
        </Route>
        <Route
          path="/projectlist/:project1"
          element={<ProjectComponent />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/test" element={<LoginTest />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        {!log ? "": <Route path="/login/form" element={<Form />}></Route>}
        {!log ? "" : <Route path="/Dashboard" element={<Dashboard />}></Route>}
        {!log ? "" : <Route path="/editeProject" element={<EditeProject />}></Route>}
      </Routes>
    </div>
  );
}

export default App;
