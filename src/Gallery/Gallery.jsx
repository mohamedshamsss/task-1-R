import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import poer1 from "../image/poert1.png"
import poer2 from "../image/port2.png"
import poer3 from "../image/port3.png"

export default class Gallery extends Component {
  render() {
    return <>
    <div className='container'>
      <h1 className='text-center'>PORTFOLIO COMPONENT</h1>
      <div className='row g-4 mt-3 mb-3'>
<div className='col-md-4 im  overflow-hidden position-relative'>
  <div> 
    <img  className='w-100'  src={poer1}/>
 <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
  <i _ngcontent-spf-c19="" class="text-white fa-solid fa-plus fa-6x"></i></div>
  </div>
</div>
<div className='col-md-4 im'>
  <div>   <img  className='w-100' src={poer2}/>


  </div>
</div>
<div className='col-md-4 im'>
  <div>   <img className='w-100' src={poer3}/>


  </div>
</div>
<div className='col-md-4 im'>
  <div>   <img className='w-100' src={poer1}/>


  </div>
</div>
<div className='col-md-4 im'>
  <div>   <img className='w-100' src={poer2}/>


  </div>
</div>
<div className='col-md-4 im'>
  <div>   <img className='w-100' src={poer3}/>


  </div>
</div>
      </div>

      
    </div>
 

      
    </>
  }
}
