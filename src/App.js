import './App.css';
import LoginForm from './Components/LoginForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
