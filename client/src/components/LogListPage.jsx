import React from 'react';
import axios from 'axios';

import LogListItem from './LogListItem';

class LogListPage extends React.Component {
  state = {
    logs: [],
  };

  componentDidMount() {
    axios.get('http://0.0.0.0:8000/logs').then(response => {
        this.setState({logs: response.data});
    });
    
  }

  render() {
    const { logs } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className='log-list'>
              {logs.map((item, key) => (
                <LogListItem log={item} key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogListPage;
