/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class AnatomyExample extends Component {
	render() {
		
		return(
			
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>Header</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
				
					<Accordion
						dataArray={dataArray} 
						expanded={1} 
						icon="add" 
						expandedIcon="remove" 
						iconStyle={{ color: "green" }} 
						expandedIconStyle={{ color: "red" }}
						headerStyle={{ backgroundColor: "#b7daf8" }}
						contentStyle={{ backgroundColor: "#ddecf8" }}/>
				
					<Text>
						This is Content Section
					</Text>
				</Content>
				<Footer>
					<FooterTab>
						<Button full>
							<Text>Footer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
    );
		
	}
	
}