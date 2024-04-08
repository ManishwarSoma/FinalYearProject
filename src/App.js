<<<<<<< HEAD
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <Toaster 
           position='top-right'
           toastOptions={{
            success:{
              theme: {
                primary: '#4aed88',
              },
            },
           }}></Toaster>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/editor/:roomId" element= {<EditorPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 7fc041e (Initialize project using Create React App)
  );
}

export default App;
