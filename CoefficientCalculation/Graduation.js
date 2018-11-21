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
            unit_type: '------------',
            calibration_type: 'Std I',
            COValue: '------------',
            number: '0',
            k0: '------------',
            k1: '------------',
            k2: '------------',
            modalVisibleApproxim: false,
            modalVisibleUnit: false,
            modalVisibleCalibration: false,
            modalVisibleNumber: false,
            modalVisibleEnterCoefficient: false,
            modalVisiblePlotCoefficients: false,
            modalVisibleEnterStandartSample: false,

            coefficientK: '',

            data: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
            equation: 'С(А) = ',

            concentration: {'1': 0.01, '2': 0.02, '3': 0.000, '4': 0.000, '5': 0.000, '6': 0.000,
                '7': 0.000, '8': 0.000, '9': 0.000, '10': 0.000},
            abs: {'1': 0.045, '2': 0.096, '3': 0, '4': 0.000, '5': 0.000, '6': 0.000,
                '7': 0.000, '8': 0.000, '9': 0.000, '10': 0.000},
            variableABS: '',
            indexABS: '0',

           /// TableViewEnterStandartSimple: '<View><Text>Hello</Text></View>'

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

    setModalVisibleNumberForABS(visible, indexElm = ''){
        this.state.variableABS = 'abs';
        //alert(indexElm);
        this.state.indexABS = indexElm;
        this.setState({modalVisibleNumber: visible});
    }

    setModalVisibleNumberForConcentration(visible, indexElm = ''){
        this.state.variableABS = 'concentration';
        this.state.indexABS = indexElm;
        ///alert(indexElm);
        this.setState({modalVisibleNumber: visible});
    }

    setmodalVisibleEnterCoefficient(visible) {
        this.setState({modalVisibleEnterCoefficient: visible});

    }

    setmodalVisiblePlotCoefficients(visible){
        this.setState({modalVisiblePlotCoefficients: visible});

    }

    setmodalVisibleEnterStandartSample(visible){
        this.setState({modalVisibleEnterStandartSample: visible});
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

            if (this.state.variableABS == '') {

                if (NumberValue.indexOf('.') != -1) {
                    NumberValue = NumberValue.substr(0, NumberValue.indexOf('.'));
                }

                if (NumberValue > 10 || NumberValue < 2) {
                    NumberValue = 2;
                }
            }
        }


        if (this.state.calibration_type == 'Std I'){
            //alert(this.state.variableABS);
            if (this.state.variableABS == '') {
                this.setState({COValue: NumberValue});
            }
            else{
                if(this.state.variableABS == 'abs'){
                    abs_ = this.state.abs;
                    ///alert(this.state.indexABS);
                    abs_[this.state.indexABS] = NumberValue;
                   // alert(abs_[this.state.indexABS]);
                    this.setState({abs: abs_});
                }
                if(this.state.variableABS == 'concentration'){
                    concentration_ = this.state.concentration;
                    concentration_[this.state.indexABS] = NumberValue;
                    this.setState({concentration: concentration_});
                }
            }
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


        if (this.state.calibration_type == 'Std I') {
            if (this.state.number == '0' && this.state.variableABS == '') {

                this.state.number = this.state.number.substring(0, this.state.number.length - 1);
            }
            else{
                if (this.state.number == '0' && numberT != '.' &&  this.state.variableABS != ''){
                    this.state.number = this.state.number.substring(0, this.state.number.length - 1);
                }
            }
        }
        if (this.state.calibration_type == 'Coe K') {

            if (this.state.number == '0' && numberT != '.'){
                this.state.number = this.state.number.substring(0, this.state.number.length - 1);
            }

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

            this.setmodalVisibleEnterStandartSample(true);
        }
    }


    ChartCoefficients() {

        this.setmodalVisiblePlotCoefficients(true);


        if(this.state.data.length > 11){
            this.state.data.shift();
        }
        theArray = this.state.data;
        equation = '';

        if(this.state.approximation_type == "LIN-0"){

            if(this.state.k1 == '------------'){
                this.state.k1 = 0;
            }

            k1 = parseFloat(this.state.k1);

            data_.forEach(function(element, index){

               theArray[index] = parseFloat((data_[index] * k1).toFixed(2));
                equation_ = 'С(А) = ' + k1 + ' * A';



            });


        }
        if(this.state.approximation_type == "LIN"){
            if(this.state.k1 == '------------'){
                this.state.k1 = 0;
            }
            if(this.state.k0 == '------------'){
                this.state.k0 = 0;
            }
            k0 = parseFloat(this.state.k0);
            k1 = parseFloat(this.state.k1);

            data_.forEach(function(element, index){

                theArray[index] = parseFloat((k0 + data_[index] * k1).toFixed(2));
                equation_ = 'С(А) = ' + k0 + ' + ' + k1 + ' * A';

            });

        }
        if(this.state.approximation_type == "SQU"){
            if(this.state.k1 == '------------'){
                this.state.k1 = 0;
            }
            if(this.state.k0 == '------------'){
                this.state.k0 = 0;
            }
            if(this.state.k2 == '------------'){
                this.state.k2 = 0;
            }
            k0 = parseFloat(this.state.k0);
            k1 = parseFloat(this.state.k1);
            k2 = parseFloat(this.state.k2);

            data_.forEach(function(element, index){

                theArray[index] = parseFloat((k0 + data_[index] * k1 + k2 * data_[index] * data_[index]).toFixed(1));
                equation_ = 'С(А) = ' + k0 + ' + ' + k1 + ' * A  + ' + k2 + ' * A^2';

            });
        }

        this.setState({data: this.state.data = theArray});
        this.setState({equation: this.state.equation = equation_});
    }
    LinearThroughZero(){
        XY = parseFloat(0); SUMMY2 = parseFloat(0);
        for(var index = 0; index < parseInt(this.state.COValue, 10); index++){

            XY += parseFloat(this.state.abs[(index+1).toString()]) * parseFloat(this.state.concentration[(index+1).toString()]);
            SUMMY2 += parseFloat(this.state.concentration[(index+1).toString()]) * parseFloat(this.state.concentration[(index+1).toString()]);
        }
        this.state.k1 = XY / SUMMY2;

        alert(this.state.k1);
    }

    Linear(){
        XY = parseFloat(0); SUMMY2 = parseFloat(0); SUMMY = parseFloat(0); SUMMX = parseFloat(0);
        x = 0, y = 0;
        for(var index = 0; index < parseInt(this.state.COValue, 10); index++){

            SUMMX += parseFloat(this.state.abs[(index+1).toString()]);
            SUMMY += parseFloat(this.state.concentration[(index+1).toString()]);
            SUMMY2 += parseFloat(this.state.concentration[(index+1).toString()]) * parseFloat(this.state.concentration[(index+1).toString()]);
            XY += parseFloat(this.state.abs[(index+1).toString()]) * parseFloat(this.state.concentration[(index+1).toString()]);
        }

        this.state.k0 = (SUMMY2 * SUMMX - SUMMY * XY) / (SUMMY2 - SUMMY * SUMMY);
        this.state.k1 = (XY - SUMMY * SUMMX) / (SUMMY2 - SUMMY * SUMMY);

        alert('k1 = ' + this.state.k1 +  ' k0 = '+ this.state.k0);
    }

    ChartABSConcentration() {

        alert(this.state.approximation_type);

        if(this.state.approximation_type == "LIN-0") {

            this.LinearThroughZero();
        }
        if(this.state.approximation_type == "LIN") {

            this.Linear();
        }
    }


    TableViewEnterStandartSimple(startIndex) {

        if(this.state.COValue == '------------') {
            this.state.COValue = '2';
        }

        COValue = parseInt(this.state.COValue, 10);

        component = [];

        for(var index = startIndex; index < startIndex + 5; index++){

            if(index < COValue) {

                let IndexSTD = index+1;
                component.push(<View
                    style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: 'black',alignItems:'center',
                        justifyContent:'center', height: 50}} key={IndexSTD.toString()}>
                        <Text style={{
                            width: '30%', borderRightWidth: 0.5,
                            borderRightColor: 'black', marginLeft: 10, marginRight: 5
                        }}>STD-{IndexSTD}</Text>
                        <Text style={{
                            width: '30%', borderRightWidth: 0.5,
                            borderRightColor: 'black', marginLeft: 10, marginRight: 5
                        }} onPress={() => this.setModalVisibleNumberForABS(true, IndexSTD.toString())}>{this.state.abs[IndexSTD]}</Text>
                        <Text style={{
                            width: '30%', borderRightWidth: 0.5,
                            borderRightColor: 'black', marginLeft: 10, marginRight: 5
                        }} onPress={() => this.setModalVisibleNumberForConcentration(true, IndexSTD.toString())}>{this.state.concentration[IndexSTD]}</Text>
                </View>
                );


            }
            else{
                component.push(<View
                        style={{flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: 'black',alignItems:'center',
                            justifyContent:'center', height: 50}}  key={(index).toString()}>
                    <Text style={{
                        width: '30%', borderRightWidth: 0.5,
                        borderRightColor: 'black', marginLeft: 10, marginRight: 5
                    }}>STD-{index+1}</Text>
                    <Text style={{
                        width: '30%', borderRightWidth: 0.5,
                        borderRightColor: 'black', marginLeft: 10, marginRight: 5
                    }}></Text>
                    <Text style={{
                        width: '30%', borderRightWidth: 0.5,
                        borderRightColor: 'black', marginLeft: 10, marginRight: 5
                    }}></Text>
                    </View>
                );
            }
        }

        return component;

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

                    {/*Экран завршения работы в режиме коэффициенты (Построение графика и вывод итоговой информации*/}

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisiblePlotCoefficients}
                        onRequestClose={() => {

                            this.setmodalVisiblePlotCoefficients(!this.state.modalVisiblePlotCoefficients);
                        }}>

                        <Header><Body><Title>Завершение</Title></Body></Header>
                        <Content>
                            <View style={{flex:1, flexDirection: 'row'}}>

                                <View style={{ height: 250, width: '70%', marginBottom:20, marginTop:20, flexDirection: 'row' , marginLeft: 5}}>
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
                                <View style={{borderLeftWidth: 0.5,
                                    borderTopColor: 'black', marginLeft:20}}>

                                    <View style={{flex:1, flexDirection: 'row', height:5, marginLeft:10}}>
                                        <View style={{width:'30%'}}>
                                            <Text>
                                                Ед.и:
                                            </Text>
                                        </View>
                                        <View>
                                            <Text>
                                                {this.state.unit_type}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{flex:1, flexDirection: 'row', borderTopWidth: 0.5,
                                        borderTopColor: 'black', height:5, marginLeft:10}}>
                                        <View style={{width:'30%'}}>
                                            <Text>
                                                Кали:
                                            </Text>
                                        </View>
                                        <View>
                                            <Text>
                                                {this.state.approximation_type}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{flex:1, flexDirection: 'row', borderTopWidth: 0.5,
                                        borderTopColor: 'black', height:5, marginLeft:10}}>
                                        <View style={{width:'30%'}}>
                                            <Text>
                                                Кол СО:
                                            </Text>
                                        </View>
                                        <View>
                                            <Text>
                                                {this.state.COValue}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{flex:1, flexDirection: 'row', borderTopWidth: 0.5,
                                        borderTopColor: 'black', height:5, marginLeft:10}}>

                                        <View>
                                            <Text>
                                                {this.state.equation}
                                            </Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </Content>
                        <Footer>
                            <Right>
                                <Button info onPress={() => {this.props.navigation.goBack(null)}}><Text>Завершение</Text></Button>
                            </Right>
                        </Footer>
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
                                <Button active primary onPress={() => {this.ChartCoefficients()}}>

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

                    {/*Экран ввода стандартныз образцов*/}

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisibleEnterStandartSample}
                        onRequestClose={() => {

                            this.setmodalVisibleEnterStandartSample(!this.state.modalVisibleEnterStandartSample);
                        }}>

                        <Header>
                            <Body><Title>Ввод стандартных образцов</Title></Body>
                        </Header>
                        <Content>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{marginTop:5, marginLeft:5, marginRight:5, borderTopWidth: 0.5, borderTopColor: 'black',
                                    borderBottomWidth:0.5, borderBottomColor: 'black',
                                    borderLeftWidth:0.5, borderLeftColor: 'black', width:'50%'
                                }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        borderBottomWidth: 0.5, borderBottomColor: 'black', height: 30}}>
                                        <Text style={{width:'30%',
                                            borderRightWidth: 0.5,
                                            borderRightColor: 'black',
                                            marginLeft:10,
                                            marginRight:5}}>
                                            Назв
                                        </Text>
                                        <Text style={{
                                            width:'30%',
                                            borderRightWidth: 0.5,
                                            borderRightColor: 'black',
                                            marginLeft:10,
                                            marginRight:5}}>
                                            ABS
                                        </Text>
                                        <Text style={{width:'30%',
                                            borderRightWidth: 0.5,
                                            borderRightColor: 'black',
                                            marginLeft:10,
                                            marginRight:5}}>
                                            Конц
                                        </Text>
                                    </View>
                                    {this.TableViewEnterStandartSimple(0)}
                                </View>
                                <View style={{marginTop:5, marginLeft:5, marginRight:5, borderTopWidth: 0.5, borderTopColor: 'black',
                                    borderBottomWidth:0.5, borderBottomColor: 'black',
                                    borderLeftWidth:0.5, borderLeftColor: 'black', width:'50%'
                                }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        borderBottomWidth: 0.5, borderBottomColor: 'black', height: 30}}>
                                        <Text style={{width:'30%',
                                            borderRightWidth: 0.5,
                                            borderRightColor: 'black',
                                            marginLeft:10,
                                            marginRight:5}}>
                                            Назв
                                        </Text>
                                        <Text style={{
                                            width:'30%',
                                            borderRightWidth: 0.5,
                                            borderRightColor: 'black',
                                            marginLeft:10,
                                            marginRight:5}}>
                                            ABS
                                        </Text>
                                        <Text style={{width:'30%',
                                            borderRightWidth: 0.5,
                                            borderRightColor: 'black',
                                            marginLeft:10,
                                            marginRight:5}}>
                                            Конц
                                        </Text>
                                    </View>
                                    {this.TableViewEnterStandartSimple(5)}
                                </View>
                            </View>

                        </Content>

                        <Footer>
                            <Left>
                                <Button primary onPress={() => {this.setmodalVisibleEnterStandartSample(!this.state.modalVisibleEnterStandartSample)}}>
                                    <Text>Назад</Text>



                                </Button>
                            </Left>
                            <Body>
                            <Button active primary onPress={() => {this.ChartABSConcentration()}}>

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