/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import {  Grid, LineChart, XAxis, YAxis  } from 'react-native-svg-charts'

/*var approximation_type_radiobatton = [
  {label: 'Линейная через 0', value: 0 },
  {label: 'Линейная', value: 1 },
  {label: 'Квадратичная', value: 0 }
];
*/
/*var dependency_type_radiobatton = [
  {label: 'А(С) - стандарт', value: 0 },
  {label: 'С(А) - в приборе', value: 1 },
];

*/
const data_ = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];
const axesSvg = { fontSize: 13, fill: 'black' };
const verticalContentInset = { top: 10, bottom: 10 };
const xAxisHeight = 20;

export default class CoefficientCalculationScreen extends Component {

	

	constructor(props) {
    	super(props)
   		this.state = { k0: 0, k1: 0, k2: 0, approximation_type: '', dependency_type: '', value: 0,

   		approximation_type_radiobatton: [{label: 'Линейная через 0', value: 0}, {label: 'Линейная', value: 1}, {label: 'Квадратичная', value: 2},],
     	value1: 0,
      value1Index: 0,


      data: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      equation: 'С(А) = '
   		}
  	}


	Chart = () => {

    type_approximation = '';

    if (this.state.approximation_type_radiobatton[this.state.value1Index].label == 'Линейная через 0'){
      type_approximation = 'Линейная через 0';
    }
    if (this.state.approximation_type_radiobatton[this.state.value1Index].label == 'Линейная'){
      type_approximation = 'Линейная';
    }
    if (this.state.approximation_type_radiobatton[this.state.value1Index].label == 'Квадратичная'){
      type_approximation = 'Квадратичная';
    }
		
	

    this.setState({k1: this.state.k1});

    ///alert(this.state.k1);
    k0 = parseFloat(this.state.k0);
    k1 = parseFloat(this.state.k1);    
    k2 = parseFloat(this.state.k2);
   ///alert(data_[1]);

    if(this.state.data.length > 11){
      this.state.data.shift();
    }
    theArray = this.state.data;
    equation = '';


    //alert(theArray[1]);

   // alert(type_approximation);
    data_.forEach(function(element, index){

      if (type_approximation == 'Линейная через 0'){
        theArray[index] = parseFloat((data_[index] * k1).toFixed(2));
        equation_ = 'С(А) = ' + k1 + ' * A';
      }
      if (type_approximation == 'Линейная'){
        theArray[index] = parseFloat((k0 + data_[index] * k1).toFixed(2));
        equation_ = 'С(А) = ' + k0 + ' + ' + k1 + ' * A';
      }
      if (type_approximation == 'Квадратичная'){
        
        theArray[index] = parseFloat((k0 + data_[index] * k1 + k2 * data_[index] * data_[index]).toFixed(1));
        equation_ = 'С(А) = ' + k0 + ' + ' + k1 + ' * A  + ' + k2 + ' * A^2';
        
        
      }


    });

    this.setState({data: this.state.data = theArray});
    this.setState({equation: this.state.equation = equation_});

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
          				<Title>Расчет по коэффициентам</Title>
        			</Body>
        			<Right />
      			</Header>
				<Content padder >	
				
					<View>

						<Text style={styles.welcome}>Выберети тип Аппроксимации:</Text>
         				<View style={styles.component}>
            				<RadioForm formHorizontal={false} animation={true} >
              					{this.state.approximation_type_radiobatton.map((obj, i) => {
                					var onPress = (value, index) => {
                    					this.setState({
                      						value1: value,
                      						value1Index: index
                    					})
                  					}
                					return (
                  						<RadioButton labelHorizontal={true} key={i} >
                    						{/*  You can set RadioButtonLabel before RadioButtonInput */}
                    						<RadioButtonInput
                     							obj={obj}
                     						  	index={i}
                     						  	isSelected={this.state.value1Index === i}
                     						  	onPress={onPress}
                      						 	buttonInnerColor={'#2196f3'}
                     						 	buttonOuterColor={this.state.value1Index === i ? '#2196f3' : '#000'}
                      						 	buttonSize={10}
                      						 	buttonStyle={{}}
                      						 	buttonWrapStyle={{marginLeft: 20}}/>

                    						<RadioButtonLabel
                      						 	obj={obj}
                      						 	index={i}
                      						 	onPress={onPress}
                      							labelStyle={{color: '#000', fontSize: 16,}}
                      						 	labelWrapStyle={{marginLeft: 10}} />
                 						</RadioButton>
                					)
              					})}
            				</RadioForm>
            				
          				</View>


										

        			
          			<Text style={styles.welcome}>Введите коэффициенты:</Text>

          			<View >
						<Text>k0: </Text>		
						
						<TextInput
							style={styles.textAreaContainer}
							maxLength = {40}
							onChangeText={(value) => this.setState({k0: value})}
							value={String(this.state.k0)}/>
						<Text>k1: </Text>
						<TextInput
							style={styles.textAreaContainer}
							maxLength = {40}
							onChangeText={(value) => this.setState({k1: value})}
							value={String(this.state.k1)}/>
						<Text>k2: </Text>
						<TextInput
							style={styles.textAreaContainer}
							maxLength = {40}
							onChangeText={(value) => this.setState({k2: value})}
							value={String(this.state.k2)}/>
      				</View>
      				<View>
                		<TouchableOpacity
                  			style={styles.button} onPress={this.Chart}>
         					<Text> Построить </Text>
       					</TouchableOpacity>
                			<Text>Уравнение: {this.state.equation}</Text>
              </View>

             

                <View style={{ height: 350, marginBottom:20, marginTop:20, flexDirection: 'row' , marginLeft: -5}}>
                  <YAxis
                    data={this.state.data}

                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    formatLabel={(value, index) => data_[index]
                       
                     
                  }
                    svg={axesSvg}/>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                      style={{ flex: 1 }}
                      data={this.state.data}
                      dashArray={[5,5]}
                      contentInset={verticalContentInset}
                      svg={{ stroke: 'rgb(134, 65, 244)' }}

                    >
                      <Grid showGrid={true}/>
                    </LineChart>
                    <XAxis
                      style={{ marginHorizontal: -10, height: xAxisHeight }}
                      data={data_}
                      formatLabel={(value, index) => this.state.data[index]}
                      contentInset={{ left: 10, right: 10 }}
                      svg={axesSvg}/>
                  </View>
                </View>

                

                

                  


				  </View>			
				
					
				</Content>
				<Footer />
				
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
  	button: {
   	 	alignItems: 'center',
   	 	backgroundColor: '#DDDDDD',
    	padding: 5
  	},
	
});