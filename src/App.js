import Header from "./pages/header";
import { Routes, Route } from "react-router-dom";
import ProjectsList from "./pages/projects/projectsList";
import ProjectComponent from "./pages/projects/project/project"
import PageNotFound from "./pages/404";


function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Header />}></Route> 
      <Route exact path="/projectlist" element={<ProjectsList />}>   </Route>
      <Route path="/projectlist/:project1" element={<ProjectComponent />}></Route>   
      <Route path="*" element={<PageNotFound />}></Route>


   
    </Routes>

    </div>
  );
}

export default App;
