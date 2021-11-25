import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{

  
  render(){
    const names = ['Monir', 'Jahurul', 'Saddam'];
    const items = names.map((item, idx)=>{
      return <li key={idx}>{item}</li>
    })
    return (
      <div className="App">
          <strong>Employee Name</strong>
          <div>
            {items}
          </div>
      </div>
    )
  }
}

export default App;
