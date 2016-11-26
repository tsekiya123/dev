import React, { Component } from 'react';
import Request from 'react-http-request';

export default class RestSample extends Component {
  render() {
    return (
      <Request
        url='http://localhost:8080/greeting'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              return (
                <div>
                  <p>success!</p>
                  { JSON.stringify(result.body) }
                </div>
              )
            }
          }
        }
      </Request>
    );
  }
}
