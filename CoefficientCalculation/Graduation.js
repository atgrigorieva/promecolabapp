import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Accordion, Icon, Form, Picker } from 'native-base';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Modal, TouchableHighlight, Alert } from 'react-native';
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
   		this.state = {
    	    approximation_type: "LIN",
            unit_type: '',
            calibration_type: 'Coe K',
            COValue: '',
            number: '0',
            k0: '------------',
            k1: '------------',
            k2: '------------',
            modalVisibleApproxim: false,
            modalVisibleUnit: false,
            modalVisibleCalibration: false,
            modalVisibleNumber: false,
            modalVisibleEnterCoefficient: false,

            coefficientK: '',

   		}
  	}

  	componentDidMount(){
        Orientation.lockToLandscape();
    }


    setmodalVisibleApproxim(visible) {
        this.setState({modalVisibleApproxim: visible});
    }

    setmodalVisibleUnit(visible) {
        this.setState({modalVisibleUnit: visible});
    }

    setmodalVisibleCalibration(visible) {
        this.setState({modalVisibleCalibration: visible});
    }

    setmodalVisibleNumber(visible, coefficientK_ = '') {
        if(coefficientK_ != ''){
            this.setState({coefficientK: coefficientK_});
        }
       this.setState({modalVisibleNumber: visible});

    }
    setmodalVisibleEnterCoefficient(visible) {
        this.setState({modalVisibleEnterCoefficient: visible});

    }

    TypeApproxim(approx){
        this.setState({approximation_type: approx});

        this.setmodalVisibleApproxim(!this.state.modalVisibleApproxim);
    }

    UnitType(unit_){
        ///alert("Hello");
        this.setState({unit_type: unit_});

        this.setmodalVisibleUnit(!this.state.modalVisibleUnit);
    }

    TypeCalibration(calibration){
        this.setState({calibration_type: calibration});
        this.setmodalVisibleCalibration(!this.state.modalVisibleCalibration);
    }

    Number(NumberValue) {
        if (this.state.calibration_type == 'Std I') {

            if (NumberValue.indexOf('.') != -1) {
                NumberValue = NumberValue.substr(0, NumberValue.indexOf('.'));
            }

            if (NumberValue > 10 || NumberValue < 2) {
                NumberValue = 2;
            }
        }

        if (this.state.calibration_type == 'Std I'){
            this.setState({COValue: NumberValue});
        }
        else{

            if (this.state.coefficientK == 'k2'){
                this.setState({k2: NumberValue});
            }

            if (this.state.coefficientK == 'k1'){
                this.setState({k1: NumberValue});
            }

            if (this.state.coefficientK == 'k0'){
                this.setState({k0: NumberValue});
            }


        }

        this.setmodalVisibleNumber(!this.state.modalVisibleNumber);
        this.state.number = '0';


    }

    NumberPress(numberT){



        if (this.state.number == '0'){

            this.state.number = this.state.number.substring(0, this.state.number.length - 1);
        }

        if (numberT != '-'){
            this.setState({number: this.state.number + numberT});
        }
        else{
            this.setState({number: numberT + this.state.number});
        }



    }

    CPress(){
        this.setState({number: this.state.number.substring(0, this.state.number.length - 1)});
    }



    NextScreen(){

        if (this.state.calibration_type == 'Coe K'){

            this.setmodalVisibleEnterCoefficient(true);
        }
        else{

        }
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
                    {/*Тип аппроксимации*/}
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisibleApproxim}
                        onRequestClose={() => {

                            this.setmodalVisibleApproxim(!this.state.modalVisibleApproxim);
                        }}>
                        <Header>

                            <Body>
                            <Title>Тип апроксимации</Title>
                            </Body>
                            <Right />
                        </Header>
                        <Content padder >
                            <View>
                                <Button block style={styles.buttonModalApproxim} onPress={() => {this.TypeApproxim("LIN-0")}}>
                                    <Text>Линейная через 0 (LIN-0)</Text>
                                </Button>
                                <Button block style={styles.buttonModalApproxim} onPress={() => {this.TypeApproxim("LIN")}}>
                                    <Text>Линейная (LIN)</Text>
                                </Button>
                                <Button block style={styles.buttonModalApproxim} onPress={() => {this.TypeApproxim("SQU")}}>
                                    <Text>Квадратичная (SQU)</Text>
                                </Button>

                            </View>
                        </Content>
                        <Footer>

                            <Right>
                                <Button info onPress={() => {this.setmodalVisibleApproxim(!this.state.modalVisibleApproxim)}}>
                                    <Text>Отмена</Text>

                                </Button>
                            </Right>
                        </Footer>
                    </Modal>

                    {/*Ед измерений*/}


                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisibleUnit}
                        onRequestClose={() => {

                            this.setmodalVisibleUnit(!this.state.modalVisibleUnit);
                        }}>
                        <Header>

                            <Body>
                            <Title>Единица измерения</Title>
                            </Body>
                            <Right />
                        </Header>
                        <Content padder >

                            <View style={{flex: 1, flexDirection: 'row', borderRightWidth: 0.5,
                                borderRightColor: 'black',}}>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("")}}><Text>-</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("%")}}><Text>%</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("ppm")}}><Text>ppm</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("ppb")}}><Text>ppb</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("г/л")}}><Text>г/л</Text></TouchableHighlight>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', borderRightWidth: 0.5,
                                borderRightColor: 'black',}}>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("мг/л")}}><Text>мг/л</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("мкг/л")}}><Text>мкг/л</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("нг/л")}}><Text>нг/л</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("г/дл")}}><Text>г/дл</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("мг/дл")}}><Text>мг/дл</Text></TouchableHighlight>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', borderRightWidth: 0.5,
                                borderRightColor: 'black',}}>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("мкг/дл")}}><Text>мкг/дл</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("мг/мд")}}><Text>мг/мд</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("мкг/мл")}}><Text>мкг/мл</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("нг/мл")}}><Text>нг/мл</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("мкг/мкл")}}><Text>мкг/мкл</Text></TouchableHighlight>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', borderRightWidth: 0.5,
                                borderRightColor: 'black',}}>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("нг/мкл")}}><Text>нг/мкл</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("мол/л")}}><Text>мол/л</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("ммоль/л")}}><Text>ммоль/л</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("МЕ")}}><Text>МЕ</Text></TouchableHighlight>
                                <TouchableHighlight style={styles.ViewUnit} onPress={() => {this.UnitType("Свое")}}><Text>Свое</Text></TouchableHighlight>
                            </View>
                        </Content>
                        <Footer>

                            <Right>
                                <Button info onPress={() => {this.setmodalVisibleUnit(!this.state.modalVisibleUnit)}}>
                                    <Text>Отмена</Text>

                                </Button>
                            </Right>



                        </Footer>
                    </Modal>


                    {/*Калибровка*/}
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisibleCalibration}
                        onRequestClose={() => {

                            this.setmodalVisibleCalibration(!this.state.modalVisibleCalibration);
                        }}>
                        <Header>

                            <Body>
                            <Title>Тип апроксимации</Title>
                            </Body>
                            <Right />
                        </Header>
                        <Content padder >
                            <View>
                                <Button block style={styles.buttonModalCalibration} onPress={() => {this.TypeCalibration("Coe K")}}>
                                    <Text>Коэффициент (Coe K)</Text>
                                </Button>
                                <Button block style={styles.buttonModalCalibration} onPress={() => {this.TypeCalibration("Std I")}}>
                                    <Text>Ввод стандартный образец (Std I)</Text>
                                </Button>
                            </View>
                        </Content>
                        <Footer>

                            <Right>
                                <Button info onPress={() => {this.setmodalVisibleCalibration(!this.state.modalVisibleCalibration)}}>
                                    <Text>Отмена</Text>

                                </Button>
                            </Right>



                        </Footer>
                    </Modal>


                    {/*Количество CO*/}

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisibleNumber}
                        onRequestClose={() => {

                            this.setmodalVisibleNumber(!this.state.modalVisibleNumber);
                        }}>

                        <Content padder style={{backgroundColor:'#31418f'}}>
                            <View style={{paddingTop:20}}>
                                <View style={{
                                    flex:1,
                                    flexDirection: 'row',
                                    height: 70,
                                    borderBottomWidth: 0.5,
                                    borderLeftWidth: 0.5,
                                    borderTopWidth: 0.5,
                                    borderRightWidth: 0.5,
                                    borderColor: 'black',
                                    backgroundColor:'white'}}
                                >
                                    <Text style={styles.titleText}>{this.state.number}</Text>

                                </View>

                                <View style={{flex:1,
                                    flexDirection: 'row', paddingTop:20}}>
                                    <Button light style={styles.ButtonCO} onPress={() => this.NumberPress("7")}>
                                        <Text style={styles.NumberText}>7</Text>
                                    </Button>
                                    <Button light style={styles.ButtonCO} onPress={() => this.NumberPress("8")}>
                                        <Text style={styles.NumberText}>8</Text>
                                    </Button>
                                    <Button light style={styles.ButtonCO} onPress={() => this.NumberPress("9")}>
                                        <Text style={styles.NumberText}>9</Text>
                                    </Button>
                                    <Button
                                        light
                                        style={styles.ButtonCOLast}
                                        onPress={() => this.CPress()}>
                                        <Text style={styles.NumberText}>C</Text>
                                    </Button>
                                </View>
                                <View style={{flex:1,
                                    flexDirection: 'row',}}>
                                    <Button light style={styles.ButtonCO} onPress={() => this.NumberPress("4")}>
                                        <Text style={styles.NumberText}>4</Text>
                                    </Button>
                                    <Button light style={styles.ButtonCO}  onPress={() => this.NumberPress("5")}>
                                        <Text style={styles.NumberText}>5</Text>
                                    </Button>
                                    <Button light style={styles.ButtonCO} onPress={() => this.NumberPress("6")}>
                                        <Text style={styles.NumberText}>6</Text>
                                    </Button>
                                    <Button light style={styles.ButtonCOLast} onPress={() => this.NumberPress("-")}>
                                        <Text style={styles.NumberText}>-</Text>
                                    </Button>

                                </View>
                                <View style={{flex:1,
                                    flexDirection: 'row', width: '100%'}}>
                                    <View style={{ marginBottom: 20, width:'76%'}}>
                                        <View style={{flex:1,
                                            flexDirection: 'row', height:25}}>
                                            <Button light style={styles.ButtonCO1} onPress={() => this.NumberPress("1")}>
                                                <Text style={styles.NumberText}>1</Text>
                                            </Button>
                                            <Button light style={styles.ButtonCO1} onPress={() => this.NumberPress("2")}>
                                                <Text style={styles.NumberText}>2</Text>
                                            </Button>
                                            <Button light style={styles.ButtonCO1} onPress={() => this.NumberPress("3")}>
                                                <Text style={styles.NumberText}>3</Text>
                                            </Button>

                                        </View>
                                        <View style={{flex:1,
                                            flexDirection: 'row', height:25, marginTop: 20,}}>
                                            <Button
                                                light
                                                style={styles.ButtonCO1}
                                                onPress={() => {this.setmodalVisibleNumber(!this.state.modalVisibleNumber)}}>
                                                <Text style={styles.NumberText}>ESC</Text>
                                            </Button>
                                            <Button light style={styles.ButtonCO1} onPress={() => this.NumberPress("0")}>
                                                <Text style={styles.NumberText}>0</Text>
                                            </Button>
                                            <Button light style={styles.ButtonCO1} onPress={() => this.NumberPress(".")}>
                                                <Text style={styles.NumberText}>.</Text>
                                            </Button>

                                        </View>
                                    </View>

                                        <Button light style={{
                                            marginTop: 10,
                                            height: 100,marginRight:20, width:'24%'}} onPress={() => this.Number(this.state.number)}>
                                            <Text style={styles.EnterText}>ENTER</Text>
                                        </Button>

                                </View>
                            </View>
                        </Content>

                    </Modal>


                    {/*Экран настройки коэффициентов*/}

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisibleEnterCoefficient}
                        onRequestClose={() => {

                            this.setmodalVisibleEnterCoefficient(!this.state.modalVisibleEnterCoefficient);
                        }}
                    >

                        <Header>
                            <Body>
                            <Title>Ввод коэффициента</Title>
                            </Body>
                        </Header>

                        <Content>
                            <TouchableHighlight
                                onPress={() => {
                                    if (this.state.approximation_type == 'SQU') {
                                        this.setmodalVisibleNumber(true, 'k2');
                                    }
                                }}>
                                <View style={{flex:1, flexDirection: 'row', borderBottomWidth:0.5, borderBottomColor: 'black', paddingTop: 30}}>
                                    <View style={{width: '80%', paddingBottom: 30}}><Text style={{paddingLeft: 50}}>Коффициент К2</Text></View>
                                    <View><Text>{this.state.k2}</Text></View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setmodalVisibleNumber(true, 'k1');
                                }}>
                                <View style={{flex:1, flexDirection: 'row', borderBottomWidth:0.5, borderBottomColor: 'black', paddingTop: 30}}>
                                    <View style={{width: '80%', paddingBottom: 30}}><Text style={{paddingLeft: 50}}>Коффициент К1</Text></View>
                                    <View><Text>{this.state.k1}</Text></View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {
                                    if (this.state.approximation_type == 'LIN') {
                                        this.setmodalVisibleNumber(true, 'k0');
                                    }
                                }}>
                                <View style={{flex:1, flexDirection: 'row', borderBottomWidth:0.5, borderBottomColor: 'black', paddingTop: 30}}>
                                    <View style={{width: '80%', paddingBottom: 30}}><Text style={{paddingLeft: 50}}>Коффициент К0</Text></View>
                                    <View><Text>{this.state.k0}</Text></View>
                                </View>
                            </TouchableHighlight>
                        </Content>

                        <Footer>
                            <Left>
                                <Button primary onPress={() => {this.setmodalVisibleEnterCoefficient(!this.state.modalVisibleEnterCoefficient)}}>
                                    <Text>Назад</Text>



                                </Button>
                            </Left>
                            <Body>
                                <Button active primary>

                                    <Text>Далее</Text>


                                </Button>
                            </Body>
                            <Right>
                                <Button info onPress={() => {this.props.navigation.goBack(null)}}>

                                    <Text>Отмена</Text>

                                </Button>
                            </Right>
                        </Footer>

                    </Modal>





                    {/*Основной код страницы*/}


                    <View style={{flex: 1, flexDirection: 'row'}} >
                        <View style={styles.ViewLeft}>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setmodalVisibleApproxim(true);
                                }}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={styles.ViewLeft1}>
                                    <Text>
                                        Аппроксимация
                                    </Text>
                                </View>
                                <View style={styles.ViewLeft1}>



                                    <Text>{this.state.approximation_type}</Text>


                                </View>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setmodalVisibleUnit(true);
                                }}>
                                <View style={{flex: 1, flexDirection: 'row', borderTopWidth: 0.5,
                                    borderTopColor: 'black',}}>
                                    <View style={styles.ViewLeft1}>
                                        <Text>
                                            Ед. измерения
                                        </Text>
                                    </View>
                                    <View style={styles.ViewLeft1}>
                                       <Text>
                                           {this.state.unit_type}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.ViewRight}>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setmodalVisibleCalibration(true);
                                }}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={styles.ViewLeft1}>
                                       <Text>
                                            Калибровка
                                        </Text>
                                    </View>
                                    <View style={styles.ViewLeft1}>
                                        <Text>
                                            {this.state.calibration_type}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setmodalVisibleNumber(true);
                                }}>
                            <View style={{flex: 1, flexDirection: 'row', borderTopWidth: 0.5,
                                borderTopColor: 'black',}}>

                                    <View style={styles.ViewLeft1}>
                                        <Text>
                                            Количество CO
                                        </Text>
                                    </View>
                                    <View style={styles.ViewLeft1}>
                                        <Text>
                                            {this.state.COValue}
                                        </Text>
                                    </View>

                            </View>
                            </TouchableHighlight>
                        </View>
                    </View>

				</Content>
				<Footer>
					<Left>
						<Button active primary onPress={() => {this.NextScreen();}}>

							<Text>Далее</Text>


						</Button>
					</Left>
						<Right>
						<Button info onPress={() => {this.props.navigation.goBack(null)}}>


							<Text>Отмена</Text>

						</Button>
						</Right>



				</Footer>

			</Container>
    );

	}

}

var styles = StyleSheet.create({

    buttonModalApproxim: {
        marginTop: 10,
        backgroundColor: '#2079BD',
        fontFamily: 'Arial',

    },

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
        borderLeftWidth: 0.5,
        borderLeftColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        borderTopWidth: 0.5,
        borderTopColor: 'black',
	},
    ViewRight:{
        //backgroundColor:'#ef553a',

        width:"50%",
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
        borderLeftWidth: 0.5,
        borderLeftColor: 'black',
        borderRightWidth: 0.5,
        borderRightColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        borderTopWidth: 0.5,
        borderTopColor: 'black',
    },
    ViewLeft1:{
        //backgroundColor:'#ef553a',

        width:"50%",
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,

    },

    ViewUnit:{
       /// backgroundColor:'#ef553a',

        width:"20%",
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
        borderLeftWidth: 0.5,
        borderLeftColor: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        borderTopWidth: 0.5,
        borderTopColor: 'black',
    },
    buttonModalCalibration: {
        marginTop: 10,
        backgroundColor: '#2079BD',
        fontFamily: 'Arial',

    },

    titleText: {
        fontSize: 50,
        textAlign: 'right',
        width: '100%',
        paddingRight: 10,
    },

    ButtonCO: {
        marginTop: 10,
        width: '24%',
        marginRight:10,
        paddingBottom:20,
    },

    ButtonCO1: {
        marginTop: 10,
        width: '31.5%',
        marginRight:10,
        paddingBottom:20,
    },
    ButtonCOLast:{
        marginTop: 10,
        width: '24%',
        marginRight:0,
        paddingBottom:20,

    },
    NumberText: {
        fontSize: 30,
        textAlign: 'center',
        width: '100%',
        paddingTop: 10,
        fontFamily: 'Arial'
    },

    EnterText:{
        fontSize: 30,
        textAlign: 'center',
        width: '100%',
        fontFamily: 'Arial'
    }
});