// import logo from './logo.svg';
import './App.css';
import Json from './components3/array';
import Card from './components3/card';
// import Header from './components/header';
// import Footer from './components/footer';
// import Info from './components2/info';
// import About from './components2/about';
// import Interest from './components2/interest';
// import Footer from './components2/footer';


function App() {
  const result = Json.map(data=>{
    console.log(data)
    return <Card 
      name={data.name} 
      about={data.about}
    />
  })
  
  return (
    <div>
      {result}
    </div>
  );
}

export default App;
