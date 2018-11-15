import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Body, Text, Form, Item, Input, Icon, Right, Label, Textarea } from 'native-base';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';




export default class CommentsSuggestions extends Component{

  constructor(props) {
    super(props)
    this.state = { UserName: '', Comment: '', YouWish: ''}
  }

	/*state = {
        Username: 'demo',
        Comment: 'demo',
        body: 'demo'
    };*/

    onPress = () => {
    	
      {
      	Linking.openURL('mailto: flora992@mail.ru?subject=Замечания и пожелания к программе Ecoview&body=Имя пользователя:' + 
      		this.state.UserName + "\n Замечания: " + this.state.Comment + "\n Пожелания: " + this.state.YouWish)

    }
  }

	render(){

		return (

			<Container>
				<Header>
        			<Left>
         				<Button transparent onPress={() => this.props.navigation.goBack(null)}>
            				<Icon name="arrow-back" />
          				</Button>
        			</Left>
        			<Body>
          				<Title>Отправить отзыв</Title>
        			</Body>
        			<Right />
      			</Header>
				<Content padder >
					<View >
						<Text>Ваше имя: </Text>		
						
						<TextInput
							style={styles.textAreaContainer}
							maxLength = {40}
							onChangeText={(value) => this.setState({UserName: value})}
							value={this.state.UserName}/>
						<Text>Замечания: </Text>
						<View style={styles.textAreaContainer}>
							<TextInput
								onChangeText={(value) => this.setState({Comment: value})}
								value={this.state.Comment}
      							style={styles.textArea}
      							placeholderTextColor="grey"
      							numberOfLines={10}
      							multiline={true} />
      					</View>
      					<Text>Пожелания: </Text>
						<View style={styles.textAreaContainer}>
							<TextInput
								onChangeText={(value) => this.setState({YouWish: value})}
								value={this.state.YouWish}
      							style={styles.textArea}
      							placeholderTextColor="grey"
      							numberOfLines={10}
      							multiline={true} />
      					</View>
      					
                		<View>
                			<TouchableOpacity
                  				style={styles.button}
                  				onPress={this.onPress }>
         				 		<Text> Отправить </Text>
       						</TouchableOpacity>
                			
                		 </View>
                 
               
				
					</View>
				</Content>
				<Footer />
				
			</Container>


			);
	}
}


var styles = StyleSheet.create({	

  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5
  },
});