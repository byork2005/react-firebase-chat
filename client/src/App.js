import React, { Component } from 'react';
import ChatRoom from './components/ChatRoom';
import fire from './fire';


class App extends Component {
  render() {
    return (
      <div>
        This is the REACT App!
        <ChatRoom />
      </div>
    );
  }
}

export default App;
