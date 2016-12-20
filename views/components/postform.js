import React from 'react';

const Postform = React.createClass({
  getInitialState() {
    return {title: null, body: null}
  },
  render() {
    return (
      <form>
        <label htmlFor="title"></label>
        <input type="text" name="title" id="title" placeholder="Title"></input><br />
        <label htmlFor="body"></label>
        <input type="text" name="body" id="body" placeholder="Enter body of post here..."></input><br />
        <input type="reset" value="Reset"></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
})

export default Postform;
