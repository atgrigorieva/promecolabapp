import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';

const dataArray = [
  { title: "Технические характеристики", content: <Image source={require('../img/B1100/specifications.png')} />  },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];



export default class B1100 extends Component{

		render() {
		const state = this.state;
		
		return(
			
			<Container>
				<Header>
        			<Left>
         				<Button transparent onPress={() => this.props.navigation.goBack(null)}>
            				<Icon name="arrow-back" />
          				</Button>
        			</Left>
        			<Body>
          				<Title>В-1100</Title>
        			</Body>
        			<Right />
      			</Header>
				<Content padder >
					<View style={styles.spectr_image}>	
						<Image source={require('../img/B1100/B-1100_201x170.png')} style={styles.image}/>
					</View>
					<Accordion dataArray={dataArray} expandedIcon="remove" />
					
				</Content>
				<Footer />
				
			</Container>
    	);
		
	}
}

var styles = StyleSheet.create({	
	
	spectr_image: {
    justifyContent: 'center',
    alignItems:'center',
		marginBottom: 20,
	},

	image: {
		width: 201, 
		height: 170,
  },
  specifications: {
    width: 201, 
    height: 170,

  },
  	

	
});