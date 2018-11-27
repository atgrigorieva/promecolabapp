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
import Orientation from 'react-native-orientation-locker';
//import { Navigation } from 'react-native-navigation'

///import AboutSpectrScreen from "../AboutSpectrScreen/index.js";





export default class HomePage extends Component {
	componentDidMount(){
    Orientation.lockToPortrait();
  }
	
	render() {
		//const { navigate } = this.props.navigation.navigate;
		const { navigate } = this.props.navigation;
		
		return(

			
			<Container>
				<Header style={styles.header}>
         			
          			<Body>
          				<Image
                         	style={styles.image}
                         	source={require('../logo/LOGO_360.png')} />		
                    </Body>
          			
         		
        		</Header>
				
				<Content padder >	
				
				
			
					
					<View style={styles.buttonMenu}>
											
						<Button block style={styles.button}
							onPress={() => this.props.navigation.navigate('О спректрофотометрах')} >
							<Text>О спректрофотометрах</Text>									
						</Button>
						<Button block style={styles.button}
							onPress={() => this.props.navigation.navigate('Отправить отзыв')} >
							<Text>Отправить отзыв</Text>					
						</Button>
						<Button block style={styles.button} onPress={() => this.props.navigation.navigate('Замечания и пожелания')} >
							<Text>Замечания и пожелания</Text>					
						</Button>
						<Button block style={styles.button}>
							<Text>Инструкции по эксплуатации</Text>					
						</Button>
						<Button block style={styles.button} onPress={() => this.props.navigation.navigate('Расчет по коэффициентам')}>
							<Text>Рассчет по коэффициентам</Text>							
						</Button>
                        <Button block style={styles.button} onPress={() => this.props.navigation.navigate('Обучающие презентации')}>
                            <Text>Обучающие презентации</Text>
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
		marginLeft:'auto',
		marginRight:'auto',
  },
  
    buttonMenu: {
		flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start', //replace with flex-end or center
		marginBottom: 10,

		
	},
	
	button: {
		marginTop: 10,
		backgroundColor: '#2079BD',
		fontFamily: 'Arial',
		
	},

	header: {
		height:'40%',
		backgroundColor: '#fff',
        borderBottomWidth: 0,

	},
	
});

