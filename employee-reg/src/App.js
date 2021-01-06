import './App.css';
import { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        {/* <Content></Content> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
