import './App.css'
import React from "react";
import MainLayouts from './components/Layouts/main.layouts';
import Albums from './components/Albums/main.albums';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLayouts from "./components/Layouts/home.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import Posts from './components/Posts/main.posts';
import Footer from './components/Layouts/footer.layouts';

const App = () => {
  return (
    <>
      <MainLayouts className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomeLayouts />} />
            <Route path="/albums" element={<Albums title="Albums API" description="Fetching images API, default is 3" />} />
            <Route path="/posts" element={<Posts title="Posts API" description="Posts API GET title only, default is 3" />} />
            <Route path="*" element={<h1 className='text-center text-danger'>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </Router>
      </MainLayouts>
    </>
  )
}

export default App;
