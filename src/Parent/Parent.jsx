import React, { Component } from 'react'
import Child from '../Child/Child'
export default class Parent extends Component {
 
  render() {
    
    return (
      <div className='w-50 mb-5 bb'>

        <div>
          <h1 className='text-center'>CONATCT SECTION</h1>
        </div>
        <form>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Your Name</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Your Email</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>


                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Your Message</label>
                        <textarea class="form-control " rows="6" cols="30" name="massage"></textarea>
                    </div>


                    <button type="button" class="btn btn-primary btn-lg">send massage</button>
                </form>

      </div>
    )
  }
}
 



