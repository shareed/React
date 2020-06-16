import React, { useState }  from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import data from "./data"; // PULL IN DATA
import Store from './Components/Store'

function Home(props) {
  debugger
  return <h1>Home</h1>;
}

function Contact(props) {
  return <h1>Contact</h1>;
}
function About(props) {
  return <h1>About</h1>;
}
function Ideas(props) {
  return <h1>Ideas</h1>;
}



function App() {
   // we use data in a couple of components, so instead of pulling it into state inside of child components,
  // we manage state in the parent component (App), and pass into our children so that all data is kept in sync across app
  // this also limits calls to an API if data were from API instead of static file
  const [products, setProducts] = useState(data);
  return (
    <div className="App">
      <header className="App-header">
        <Link to= '/'>Home</Link>
        <Link to= '/contact'>Contact</Link>
        <Link to= '/about'>About</Link>
        <Link to= '/ideas'>Ideas</Link>
        <Link to= '/store'>STORE</Link>
        <Route exact path = '/' component = {Home} />
        <Route path = '/contact' component = {Contact} />
        <Route path = '/about' component = {About} />
        <Route path = '/ideas' component = {Ideas} />
        <Route path = '/store' products={products} component = {Store} />

        {/* <Switch>
        <Route path = '/' component = {Home} />
        <Route path = '/contact' component = {Contact} />
        <Route path = '/about' component = {About} />
        <Route path = '/ideas' component = {Ideas} />
        <Route path = '/store' component = {Store} />
        
        </Switch> */}
       
      </header>
    </div>
  );
}

export default App;
