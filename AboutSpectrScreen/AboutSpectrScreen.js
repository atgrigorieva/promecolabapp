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
				<Header>
        			<Left>
         				<Button transparent onPress={() => this.props.navigation.goBack(null)}>
            				<Icon name="arrow-back" />
          				</Button>
        			</Left>
        			<Body>
          				<Title>О спектрофотометрах</Title>
        			</Body>
        			<Right />
      			</Header>
				<Content padder >	
				
					<Button block light style={styles.button}
						onPress={() => this.props.navigation.navigate('B1100')}>
						<Text>В-1100</Text>
					</Button>
					<Button block light style={styles.button}
                            block light style={styles.button}
                            onPress={() => this.props.navigation.navigate('YF1100')}><Text>УФ-1100</Text></Button>
					<Button block light style={styles.button}
                            onPress={() => this.props.navigation.navigate('1200')}><Text>В-1200</Text></Button>
					<Button block light style={styles.button}
                            onPress={() => this.props.navigation.navigate('YF1200')}><Text>Уф-1200</Text></Button>
					<Button block light style={styles.button}
                            onPress={() => this.props.navigation.navigate('YF1800')}><Text>УФ-1800</Text></Button>
					<Button block light style={styles.button}
                            onPress={() => this.props.navigation.navigate('YF3000')}><Text>УФ-3000</Text></Button>
					<Button block light style={styles.button}
                            onPress={() => this.props.navigation.navigate('YF3100')}><Text>УФ-3100</Text></Button>
					<Button block light style={styles.button}
                            onPress={() => this.props.navigation.navigate('YF3200')}><Text>УФ-3200</Text></Button>
					<Button block light style={styles.button}
                            onPress={() => this.props.navigation.navigate('YF6100')}><Text>УФ-6100</Text></Button>
								
				
					
				</Content>
				<Footer />
				
			</Container>
   		);
		
	}
	
}

var styles = StyleSheet.create({	
	
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