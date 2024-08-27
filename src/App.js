import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';
import style from './App.css';



function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect( () => {
    const loadingTimer = setTimeout(() => {
      setIsLoaded(false);

    }, 5000);
    return () => clearTimeout(loadingTimer);
  })

  return (
    <div>
      {isLoaded ? (
        <div >
       
        <div className='loading'>
        <h3>Loading</h3>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
         
          </div>
        
       

         
      ) : (
        <>
          <Header/>
          <Content/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
