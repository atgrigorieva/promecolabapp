/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const initialState = {};
const store = createStore(reducers, initialState);
//import { emulation } from 'emulation.jpg';

//const logoImg = require('./эмуляция.jpg');

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class AnatomyExample extends Component {
	render() {
		
		return(
			
			<Container>
				<Header />
				<Content padder >
				
				
				
				    <View style={styles.logo}>								
						<Image
                         style={styles.image}
                         source={require('./logo/LOGO_360.png')}
						 
                        />					
						
				    </View>
					
					<View style={styles.buttonMenu}>
					
						<Button block light style={styles.button} >
							<Text>О спректрофотометах</Text>									
						</Button>
						<Button block light style={styles.button}>
							<Text>Отправить отзыв</Text>					
						</Button>
						<Button block light style={styles.button}>
							<Text>Замечания и пожелания</Text>					
						</Button>
						<Button block light style={styles.button}>
							<Text>Инструкции по эксплуатации</Text>					
						</Button>
						<Button block light style={styles.button}>
							<Text>Рассчет по коэффициентам</Text>							
						</Button>
					</View>
					
				
					
				</Content>
				<Footer />
				
			</Container>
    );
		
	}
	
}

var styles = StyleSheet.create({	
	
	
	logo: {
		justifyContent: 'center',
	    alignItems:'center',
		marginBottom: 20,
	},
	
	image: {
		width: 360, 
		height: 76,
  },
  
    buttonMenu: {
		flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start', //replace with flex-end or center
		marginBottom: 10
		
	},
	
	button: {
		marginTop: 10,
		
		
	},
	
});