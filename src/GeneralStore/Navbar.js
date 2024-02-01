import React from 'react'
import './Card.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap/js/dist/bootstrap.min.js'
export default function Navbar({filter , uniqueList}) {
     return (

      <div className='navbar'>
         <div className='nav'>
         <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item row" href="#">{uniqueList.map((curElem)=>{
            return(<span className='btn' onClick={()=>filter(curElem)}>{curElem}</span>
            )
          })}</a></li>
            {/* <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
         {/* <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" onClick={()=>{ uniqueList.map((curElem)=>{
            return(<span className='btn' onClick={()=>filter(curElem)}>{curElem}</span>
            )
          })}}>category
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
  <li><a href="/">HTML</a></li>
    <li><a href="/">CSS</a></li>
    <li><a href="/">JavaScript</a></li>
  </ul>
</div> */}
  {/* {uniqueList.map((curElem)=>{
            return(<span className='btn' onClick={()=>filter(curElem)}>{curElem}</span>
            )
          })} */}
        
             {/* <span className='btn' onClick={()=>filter("soap")}>soap</span>
            <span className='btn' onClick={()=>filter("Bueaty Creams")}>Bueaty creams</span>
            <span className='btn' onClick={()=>filter("lotions")}>lotions</span>
            <span className='btn' onClick={()=>filter("Shampoo")}>Shampoo</span>
            <span className='btn' onClick={()=>filter("perfums")}>perfums</span> 
             <span className='btn' onClick={()=>setData(store)}>All</span> 
          
         {filter.map((curElem)=>{
            return(
             <div className='nav'>
            <span className='btn' onClick={()=>filter("soap")}>soap</span>
            <span className='btn' onClick={()=>filter("Bueaty creams")}>Bueaty creams</span>
            <span className='btn' onClick={()=>filter("lotions")}>lotions</span>
            <span className='btn' onClick={()=>filter("Shampoo")}>Shampoo</span>
            <span className='btn' onClick={()=>filter("perfums")}>perfums</span> 
             <span className='btn' onClick={()=>setData(store)}>All</span> 
           </div>
            )
            
          })}  */}
         </div>
         </div>
  )}