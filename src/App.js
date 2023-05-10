import Header from "./pages/header";
import { Routes, Route } from "react-router-dom";
import ProjectsList from "./pages/projects/projectsList";
import Project1 from "./pages/projects/project/project1"
import PageNotFound from "./pages/404";


function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Header />}></Route> 

      <Route exact path="/projectlist" element={<ProjectsList />}>   </Route>
      <Route path="/projectlist/:project1" element={<Project1 />}></Route>
   
      <Route path="*" element={<PageNotFound />}></Route>


   
    </Routes>

    </div>
  );
}

export default App;
