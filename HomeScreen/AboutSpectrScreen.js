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


export default class AboutSpectrScreen extends Component {
	render() {
		
		return(
			
			<Container>
				<Header/>
				<Content padder >	
				
					<Text>Я тут</Text>					
				
					
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