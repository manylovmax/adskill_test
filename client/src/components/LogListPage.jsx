import React from 'react';
import axios from 'axios';

import LogListItem from './LogListItem';

class LogListPage extends React.Component {
  state = {
    logs: [],
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/logs').then(response => {
        this.setState({logs: response.data});
    });
    
  }

  render() {
    const { logs } = this.state;
    return (
      <div>
        {logs.map((item, key) => (
          <LogListItem log={item} key={key} />
        ))}
      </div>
    );
  }
}

export default LogListPage;
