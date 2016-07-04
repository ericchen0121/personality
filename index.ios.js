var Main = require('./app/components/main');

import React, {Component} from 'react';

import {  
  AppRegistry,
  NavigatorIOS, 
  StyleSheet,
  Text, 
  View
} from 'react-native';


var styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#111111'
  }
})

class Personality extends Component {  
  render() {
    return (
    	<NavigatorIOS
	    	style={styles.container}
	    	initialRoute = {{
	    		title: "Personality",
	    		component: Main
    	}} />
    );
  }
}

AppRegistry.registerComponent('Personality', () => Personality);  