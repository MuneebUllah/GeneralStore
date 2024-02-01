// import logo from './logo.svg';
import './App.css';
// import Add from './component/Add';
import Card from './GeneralStore/Card';
import { useState } from 'react';
import store from './GeneralStore/MenuApi';
import Navbar from './GeneralStore/Navbar';

const unique =[...new Set (store.map((curElem)=>{
  return curElem.category;
})),
"All"]
function App() {
  // console.log(unique)
    const [data,setData] = useState(store)
    const[uniqueList,setUniqueList] = useState(unique)
    const filter =(category)=>{
      if(category==="All"){
        setData(store);
        return
      }
      const updatedList= store.filter((curElem)=>{
        return curElem.category===category;
      })
      setData( updatedList)


    }
      
      return (
        <div className="App">
          {/* <Add num1={10} num2={5}/> */}
          {/* <ManuApi/> */}
         
          <Navbar filter = {filter} uniqueList={uniqueList}/>
          <Card data={data}/>

    </div>
  );
}

export default App;
