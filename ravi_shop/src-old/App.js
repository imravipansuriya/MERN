import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Data from './Data';
import DataFunc from './DataFunc';
import React from 'react';
import Forms from './Forms';
import Maps from './Maps';

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import NotFound from './NotFound';

function App() {

  const [num, setNum] = React.useState(5); // state hook
  const [name, setName] = React.useState("Ravi"); // state hook

  const addNum = () => {
    setNum(num + 1);
    console.log("Add num called in App.js")
  }

  const minusNum = () => {
    setNum(num - 1);
    console.log("Minus num called in App.js")
  }

  const handleName = (newName) => {
    setName(newName);
    console.log("Handle name called in App.js")
  }


  return (
    <div>
      {/* <Header />
      App.js file
      <Footer /> */}
      {/* <Data /> */}
      {/* <p>Data to be passed from child: {name}</p>
      <DataFunc num={num} addNum={addNum} minusNum={minusNum} handleName={handleName} /> */}
      {/* <Forms /> */}
      {/* <Maps /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/data" element={<Data />} />
          <Route path="/data/func" element={<DataFunc />} />
          <Route path="/data/new" element={<Data />} />
          
          {/* Static Redirect Page */}
          <Route path="/test" element={<Navigate to={"/maps"} />   } />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
