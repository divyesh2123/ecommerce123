import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link,Route,Routes } from 'react-router-dom';
import Home from './Home';
import HomeRegistration from './HomeRegistration';
import Login from './Login';
import Counter from './Counter';
import CounterCopy from './CounterCopy';

function App() {
 
  return (
    <div className="App">

      <header>This is header of website</header>

      <div>This is the navbar of my page</div>
      

       <BrowserRouter>

       <ul>

<li>
<Link to="/">Home</Link> 

</li>
<li>
<Link to="/registration">Registration</Link> 

</li>

<li>
<Link to="/login">Login</Link> 

</li>


</ul> 
<CounterCopy></CounterCopy>

       <Routes>

       

        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<HomeRegistration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/counter" element={<Counter/>}/>

       </Routes>
       </BrowserRouter>

       <div>Footer</div>
    </div>
  );
}

export default App;
