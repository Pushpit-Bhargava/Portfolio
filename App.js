import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css";
import ProjectSection from "./components/ProjectSection";
import RecommendationSection from "./components/RecommendationSection";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import NotFound from "./components/NotFound";
import AddProject from "./components/AddProject";
import { Provider } from "./Context";



function App() {

  return (

  <Provider>

    <BrowserRouter>

      <Navbar />

      <Routes>

       <Route exact path="/" element={(
          
        <><Header /><RecommendationSection /><SkillsSection /><ProjectSection /></> )} />
         
        <Route exact path="/contact" element={( <Contact />)} />

       <Route exact path="/write-a-recommendation" element={<WriteRecommendation />} />

       <Route exact path="/project/add" element={<AddProject />} />

      <Route exact path="/project/:id" element={<ProjectPage />} />

       <Route path="notfound" element={<NotFound />} />

      <Route path="*" element={<NotFound to="/notfound" replace />} />

    </Routes>

    <Footer />

  </BrowserRouter>
  
  </Provider>
 
  );
}

export default App;
