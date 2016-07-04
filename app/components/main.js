import React, {Component} from 'react';
import {Text, View, StyleSheet, PickerIOS} from 'react-native';

var PickerItemIOS = PickerIOS.Item;

var PERSONALITIES = {
	INFP: {
		name:'INFP',
		type: 'Diplomat',
		nickname: 'Mediator'
	},
	INFJ: {
		name:'INFJ',
		type: 'Diplomat',
		nickname: 'Advocate'
	},
	INTP: {
		name:'INTP',
		type: 'Analyst',
		nickname: 'Logician'
	},
	INTJ: {
		name:'INTJ',
		type: 'Analyst',
		nickname: 'Architect' 
	},
	ENFP: {
		name:'ENFP',
		type: 'Diplomat',
		nickname: 'Campaigner' 
	},
	ENFJ: {
		name:'ENFJ',
		type: 'Diplomat',
		nickname: 'Protagonist'
	},
	ENTP: {
		name:'ENTP',
		type: 'Analyst',
		nickname: 'Debater' 
	},
	ENTJ: {
		name:'ENTJ',
		type: 'Analyst',
		nickname: 'Commander' 
	},
	ISFP: {
		name:'ISFP',
		type: 'Explorer',
		nickname: 'Adventurer' 
	},
	ISFJ: {
		name:'ISFJ',
		type: 'Sentinel',
		nickname: 'Defender'
	},
	ISTP: {
		name:'ISTP',
		type: 'Explorer',
		nickname: 'Virtuoso'
	},
	ISTJ: {
		name:'ISTJ',
		type: 'Sentinel',
		nickname: 'Logistician'
	},
	ESFP: {
		name:'ESFP',
		type: 'Explorer',
		nickname: 'Entertainer'
	},
	ESFJ: {
		name:'ESFJ',
		type: 'Sentinel',
		nickname: 'Consul'
	},
	ESTP: {
		name:'ESTP',
		type: 'Explorer',
		nickname: 'Entrepreneur'
	},
	ESTJ: {
		name:'ESTJ',
		type: 'Sentinel',
		nickname: 'Executive'
	}		
};

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			current: 'ENTP',
			personalities: [PERSONALITIES]
		}
	}
	changePersonality(personality) {
		this.setState({
			current: personality
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Choose your Myers Briggs Type: {PERSONALITIES[this.state.current].nickname}</Text>
				<PickerIOS
					selectedValue={this.state.current}
					onValueChange={(current) => this.changePersonality(current)}
				>
					{Object.keys(PERSONALITIES).map((current) => (
						<PickerItemIOS
							key = {current}
							value = {PERSONALITIES[current].name}
							label = {PERSONALITIES[current].name + ' ' + PERSONALITIES[current].nickname}
						/>
				))}
				</PickerIOS>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		marginTop: 80,
		marginLeft: 20
	}
})
module.exports = Main;