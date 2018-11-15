import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Accordion, Icon, Form, Picker } from 'native-base';
import { View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
///import Icon from 'react-native-vector-icons/FontAwesome';
import {  Grid, LineChart, XAxis, YAxis  } from 'react-native-svg-charts'
import Orientation from 'react-native-orientation-locker';


const data_ = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];
const axesSvg = { fontSize: 13, fill: 'black' };
const verticalContentInset = { top: 10, bottom: 10 };
const xAxisHeight = 20;




export default class Graduation extends Component {

    constructor(props) {
    	super(props)
   		this.state = { k0: 0, k1: 0, k2: 0, approximation_type: '', dependency_type: '', value: 0,
            approximation_type_radiobatton: [{label: 'Линейная через 0', value: 0}, {label: 'Линейная', value: 1}, {label: 'Квадратичная', value: 2},],
     	    value1: 0,
            value1Index: 0,


            data: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
            equation: 'С(А) = ',
            selected: "key1",

   		}
  	}

  	componentDidMount(){
        Orientation.lockToLandscape();
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }


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
          				<Title>Настройки</Title>
        			</Body>
        			<Right />
      			</Header>
				<Content padder >


					<View style={{flex: 1, flexDirection: 'row'}} >

						<View style={styles.ViewLeft}>

				  			<View style={{flex: 1, flexDirection: 'row'}} onPress={this.ButtonOne}>
								<View style={styles.ViewLeft}>
									<Text>
										Аппроксимация
									</Text>
								</View>
								<View style={styles.ViewLeft}>
									<Text>
										LIN
									</Text>
								</View>
				  			</View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={styles.ViewLeft}>
                                    <Text>
                                        Ед. измерения
                                    </Text>
                                </View>
                                <View style={styles.ViewLeft}>
                                    <Text>
                                        %
                                    </Text>
                                </View>
                            </View>
				  		</View>
				  		<View style={styles.ViewLeft}>

                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={styles.ViewLeft}>
                                    <Text>
                                        Калибровка
                                    </Text>
                                </View>
                                <View style={styles.ViewLeft}>
                                    <Text>
                                        Coe K
                                    </Text>
                                </View>
                            </View>

				  			<View style={{flex: 1, flexDirection: 'row'}}>
								<View style={styles.ViewLeft}>
									<Text>
										Количество CO
									</Text>
								</View>
								<View style={styles.ViewLeft}>
									<Text>
										LIN
									</Text>
								</View>
				  			</View>
				  		</View>
				  	</View>
				
					
				</Content>
				<Footer>
					<Left>
						<Button active primary>						
							
							<Text>Далее</Text>
							

						</Button>
					</Left>
						<Right>
						<Button info>


							<Text>Отмена</Text>

						</Button>
						</Right>



				</Footer>
				
			</Container>
    );
		
	}
	
}

var styles = StyleSheet.create({

	container: {
    	flex: 1,
    	
   		backgroundColor: '#F5FCFF',
  	},
  	welcome: {
  	  	fontSize: 20,
   	 	fontWeight: 'bold',
   	 	marginTop: 10,
    	marginBottom: 10,
  	},
  	instructions: {
    	
    	color: '#333333',
    	marginBottom: 5,
  	},
  	component: {    	
    	
  	},
  	radioStyle: {
    	borderRightWidth: 1,
    	borderColor: '#2196f3',
    	paddingRight: 10
 	 },
  	radioButtonWrap: {
    	marginRight: 5
  	},

  
  	textAreaContainer: {
    	borderColor: 'grey',
    	borderWidth: 1,
    	marginBottom: 10
  	},
  	textArea: {
    	height: 150,
    	justifyContent: "flex-start"
  	},


	button:{
		height:40,
		marginLeft:50
	},
	ViewLeft:{
		//backgroundColor:'#ef553a',

        width:"50%",
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10
	},
});