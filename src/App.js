import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 10;
  const [progress, setProgress] = useState(0)

  const [mode, setMode] = useState('light')
  console.log(mode);
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#F87D51';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#7db0de';
    }
  }


    return (
      <div>
        <Router>
          <Navbar toggleMode={toggleMode} mode={mode} />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="Technology" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="Business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
            {/* <Route exact path="/general" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="General" />} /> */}
            <Route exact path="/health" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="Health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="Science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="Sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="Technology" />} />

          </Routes>
        </Router>
      </div>
    )
}

export default App