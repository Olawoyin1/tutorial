// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Main from './birthdays/main';
import lists from './components10/lists';
import Messages from './components10/message';
import New from './components10/new';
import Form from './components11/form';
import Header from './components7/header';
import Body from './components8/body';
import Show from './components9/display';
// import List from './components6/list';
// import Test from './components6/test';
// import Counter from './components5/counter';
// import User from './components4/user';
// import data from './components4/data';
// import Json from './components3/array';
// import Card from './components3/card';
// import Header from './components/header';
// import Footer from './components/footer';
// import Info from './components2/info';
// import About from './components2/about';
// import Interest from './components2/interest';
// import Footer from './components2/footer';


function App() {
  // const Users = data.map(use=>{
  //   return <User  
  //     name={use.name}
  //     image={use.image}
  //     stack={use.stack}
  //     course={use.course}
  //     mail={use.mail}
  //     age={use.age}
  //     phone={use.phone}
      
  //   />
  // }) 

  // const [user,setUser] = React.useState("Olawoyin")

  // const list = lists.map(item => {
  //   return(
  //     <New 
  //       name={item.name}
  //       about={item.about}
  //     />
  //   )
  // })
  // console.log(list)
 
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
