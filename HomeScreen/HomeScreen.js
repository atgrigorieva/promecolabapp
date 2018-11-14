/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet,} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
//import { Navigation } from 'react-native-navigation'

///import AboutSpectrScreen from "../AboutSpectrScreen/index.js";





export default class HomePage extends Component {
	
	render() {
		//const { navigate } = this.props.navigation.navigate;
		const { navigate } = this.props.navigation;
		
		return(

			
			<Container>
				<Header>
         			<Left>
            			<Title>Главная</Title>
          			</Left>
          			<Body/>
          			
         			<Right />
        		</Header>
				
				<Content padder >	
				
				
				    <View style={styles.logo}>								
						<Image
                         style={styles.image}
                         source={require('../logo/LOGO_360.png')}
						 
                        />					
						
				    </View>
					
					<View style={styles.buttonMenu}>
											
						<Button block light style={styles.button}
							onPress={() => this.props.navigation.navigate('О спректрофотометрах')} >
							<Text>О спректрофотометрах</Text>									
						</Button>
						<Button block light style={styles.button}
							onPress={() => this.props.navigation.navigate('Отправить отзыв')} >
							<Text>Отправить отзыв</Text>					
						</Button>
						<Button block light style={styles.button} onPress={() => this.props.navigation.navigate('Замечания и пожелания')} >
							<Text>Замечания и пожелания</Text>					
						</Button>
						<Button block light style={styles.button}>
							<Text>Инструкции по эксплуатации</Text>					
						</Button>
						<Button block light style={styles.button} onPress={() => this.props.navigation.navigate('Расчет по коэффициентам')}>
							<Text>Рассчет по коэффициентам</Text>							
						</Button>
					</View>
					
				
					
				</Content>
			
				
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

