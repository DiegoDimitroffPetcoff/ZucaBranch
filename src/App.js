import Header from "./pages/header";
import { Routes, Route } from "react-router-dom";



//PAGES
import ProjectsList from "./pages/projects/projectsList";
import ProjectComponent from "./pages/projects/project/project";
import Login from "./pages/auth/login";
import Form from "./pages/form/form";
import PageNotFound from "./pages/404";

import LoginTest from "./pages/auth/loginTest";



function App() {
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
        <Route path="/login/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
