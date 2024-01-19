import { Component } from 'react';
import Navbar from './NavBar';
import ContactUs from './ContactUs';
import About from './About';
import Service from './Service';
import Story from './Story';
import Gallery from './Gallery';

// function App() {
//   return (
//     <div>
//       <h1>hello from app</h1>
//       <ChildComp></ChildComp>
//     </div>
//   );
// }
class App extends Component {
  render(){
    return(
      <div>
      <Navbar></Navbar>
      <About></About>
      <Service></Service>
      <Story></Story>
      <Gallery></Gallery>
      <ContactUs></ContactUs>

      
      </div>
      
    )
  }}

export default App;
