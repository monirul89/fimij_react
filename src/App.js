import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{

  state ={
    user_name:'',
    user_number:'',
    user_email:'',
    user_address:''
  }
  changeData1=(e)=>{
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]:value
    });
    console.log(value);
  }
  render(){

    return (
      <div className="App">
          
          <form onSubmit={this.changeData1}>
              <div className="form-group" style={{width:'320px', margin:'0 auto', textAlign: 'left'}}>
                {/* <h4>HELLO {this.state.username}</h4> */}
                <div className="show-data">
                    <ul style={{listStyleType:'none'}}>
                      <li>{this.state.user_name}</li>
                      <li>{this.state.user_number}</li>
                      <li>{this.state.user_email}</li>
                      <li>{this.state.user_address}</li>
                    </ul>
                </div>
                <label>User Name:</label><br></br>
                <input className="form-control" onChange={this.changeData} type="email" name="user_email" /><br></br>
                <button className="btn btn-success" type="submit">Submit</button>
              </div>
          </form>
      </div>
    )
  }
}

export default App;
