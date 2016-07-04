import React, {Component} from 'react';

import {  
  AppRegistry
} from 'react-native';


import App from './app';

class Personality extends Component {  
  render() {
    return <App />;
  }
}
AppRegistry.registerComponent('personality', () => personality);  