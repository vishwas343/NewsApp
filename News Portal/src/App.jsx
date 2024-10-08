import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Abovenav from './components/Abovenav'
import News from './components/News'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Foot from './components/Foot'
// import Signup from './components/signup'

export default class App extends Component {
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <div className="fixed-top">
        <Abovenav/>
        <Navbar/>
        </div>
        <div style={{paddingTop: '150px'}}>

        </div>
        <LoadingBar color='#fc1504' progress={this.state.progress} onLoaderFinished={()=>this.setProgress(0)}  height={4} />
        <Routes>
        <Route path="/" element={<News key="general" setProgress={this.setProgress} category="general"/>}></Route>
        <Route path="/home" element={<News key="general"setProgress={this.setProgress} category="general"/>}></Route>
        <Route path="/business" element={<News key="business"setProgress={this.setProgress} category="business"/>}></Route>
        <Route path="/politics" element={<News key="politics"setProgress={this.setProgress} category="politics"/>}></Route>
        <Route path="/health" element={<News key="health"setProgress={this.setProgress} category="health"/>}></Route> 
        <Route path="/entertainment" element={<News key="entertainment"setProgress={this.setProgress} category="entertainment"/>}></Route>
        <Route path="/sports" element={<News key="sports"setProgress={this.setProgress} category="sports"/>}></Route>
        <Route path="/technology" element={<News key="technology"setProgress={this.setProgress} category="technology"/>}></Route>
        <Route path="/science" element={<News key="science"setProgress={this.setProgress} category="science"/>}></Route>
        {/* <Route path="/signup" element={<Signup />}></Route> */}
        </Routes>
        <Foot/>
      </div>
    )
  }
}




