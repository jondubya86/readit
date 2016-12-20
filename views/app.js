import React from 'react';
import ReactDOM from 'react-dom';
import {Router ,browserHistory, IndexRoute, Route, Link} from "react-router";

//components
import Navbar from './components/navbar';
import Postform from './components/post/postform';
import Allposts from './components/post/allposts';
import Singlepost from './components/post/singlepost';
import Allcomments from './components/comment/allcomments';

const App = React.createClass({
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Allposts} />
      <Route path='/post/:id' component={Singlepost} />
    </Route>

  </Router>
  , document.getElementById('root')
)
