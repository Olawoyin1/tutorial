// import logo from './logo.svg';
import './App.css';
import User from './components4/user';
import data from './components4/data';
// import Json from './components3/array';
// import Card from './components3/card';
// import Header from './components/header';
// import Footer from './components/footer';
// import Info from './components2/info';
// import About from './components2/about';
// import Interest from './components2/interest';
// import Footer from './components2/footer';


function App() {
  const Users = data.map(use=>{
    return <User  
      name={use.name}
      image={use.image}
      stack={use.stack}
      course={use.course}
      mail={use.mail}
      age={use.age}
      phone={use.phone}
      
    />
  }) 
  // console.log(data)
 
  return (
    <div className='flex' >
      {Users}
    </div>
  );
}

export default App;
