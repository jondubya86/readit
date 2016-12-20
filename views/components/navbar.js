import React from 'react';
import {Link} from 'react-router'

const Navbar = React.createClass({
  render() {
    return (
      <ul className='navbar'>
        <li><Link to="/">reddit</Link></li>
        <li>hot</li>
        <li>new</li>
        <li>rising</li>
        <li>controversial</li>
        <li>top</li>
        <li>gilded</li>
        <li>wiki</li>
        <li>promoted</li>
        <li>Log in</li>
        <li>sign up</li>
        <li><Link to="/form">Create Post</Link></li>
      </ul>
    )
  }
})

export default Navbar;
