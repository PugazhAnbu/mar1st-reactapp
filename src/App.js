//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Tabs from './components/tabs';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tabNames: ['Home', 'About', 'User']
    }
  }
  render(){
  return (
    <div className="app">
      <div className="browser">
       
          
        <Tabs tabNames = {this.state.tabNames}/>
        <div className='viewport'>Pages Go Here</div>
      </div>
    </div>
  )
}
}

export default App;
