import React from 'react';
import ReactDOM from 'react-dom';

//components
import Navbar from './components/navbar'
import Postform from './components/postform'

const App = React.createClass({
  render() {
    return (
      <div className="container">
        <Navbar />
        <Postform />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
