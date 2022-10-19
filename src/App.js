
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import MainPage from './componenrs/MainPage';
import HashLoader from "react-spinners/HashLoader";




function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    }, 3000)

  },[])
  return (
   
   <React.Fragment>
    {
      loading ?
      <HashLoader

      color="#36d7b7"
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      className='d-flex justify-content-center'
    />
     
      :
      <MainPage/>
    }
 

   </React.Fragment>
  );
}

export default App;
