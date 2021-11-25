import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{

  state ={
    user_email:'',
    user_details:'',
    age:''
  }
  // validate(){
  //   if(!this.state.user_email>0 && !this.state.user_password>0){
  //     this.setState({
  //       user_emailError:'Email and password required'
  //     })
  //   }else if(!this.state.user_email>0){
  //     this.setState({
  //       user_emailError:'Email required'
  //     })
  //   }else if(!this.state.user_password>0){
  //     this.setState({
  //       user_passwordError:'Password required'
  //     })
  //   }else{
  //     return true;
  //   }
  // }
  formSubmit = (e)=>{
    e.preventDefault();
    // if(this.validate()){
    //     alert("Form submit done");
    // }


  }
  onSelect = (e)=>{
    let value = e.target.value;
    this.setState({
      age:value
    });
  }
  
  render(){

    return (
      <div className="App">
          
          {/* <form onSubmit={this.formSubmit}>
              <div className="form-group" style={{width:'320px', margin:'0 auto', textAlign: 'left'}}>
                <label>User email</label><br></br>
                <input className="form-control" onChange={(e)=>{this.setState({user_email:e.target.value})}} type="email" name="user_email" /><br/>
                <p style={{color:'red'}}>{this.state.user_emailError}</p><br/>
                <label>Password</label><br></br>
                <input className="form-control" onChange={(e)=>{this.setState({user_password:e.target.value})}} type="password" name="user_password" /><br/>
                <p style={{color:'red'}}>{this.state.user_passwordError}</p><br/>
                <button className="btn btn-success" type="submit">Submit</button>
              </div>
          </form> */}
          <form onSubmit={this.formSubmit}>
              <div className="form-group" style={{width:'320px', margin:'0 auto', textAlign: 'left'}}>
                <label>Your age:</label><br/>
                <select onChange={this.onSelect}>
                  <option value='' selected desabled >Select Your Age</option>
                  <option value='21-25'>21-25</option>
                  <option value='26-30'>26-30</option>
                  <option value='31-35'>31-35</option>
                  <option value='35-Above'>35-Above</option>
                </select>
                <h5>My Age:{this.state.age}</h5>
                {/* <button className="btn btn-success" type="submit">Submit</button> */}
              </div>
          </form>
      </div>
    )
  }
}

export default App;
