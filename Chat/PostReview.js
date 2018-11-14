import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Body, Text, Form, Item, Input, Icon, Right, Label, Textarea } from 'native-base';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';


export default class PostReview extends Component{

  constructor(props) {
    super(props)
    this.state = { UserName: '', Comment: ''}
  }

	/*state = {
        Username: 'demo',
        Comment: 'demo',
        body: 'demo'
    };*/

    onPress = () => {
    	
      {
      	Linking.openURL('mailto: flora992@mail.ru?subject=Комментарий к программе Ecoview&body=Имя пользователя:' + this.state.UserName + "\n Комментарий: " + this.state.Comment)

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
						<Text>Комментарий: </Text>
						<View style={styles.textAreaContainer}>
							<TextInput
								onChangeText={(value) => this.setState({Comment: value})}
								value={this.state.Comment}
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