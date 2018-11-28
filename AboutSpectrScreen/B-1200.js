import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion, Tab, Tabs, TabHeading, Segment } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';


export default class B1100 extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible : false,
    };
  }

callFunc(){
   if(this.isModalVisible){
     this.setState({isModalVisible:false});
   }else{
     this.setState({isModalVisible:true});
   }
}


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
          				<Title>В-1200</Title>
        			</Body>
        			<Right />
      			</Header>
				<Content padder >
					<View style={styles.spectr_image}>	
						<Image source={require('../img/B1200/YF-1800_200.png')} style={styles.image}/>
					</View>

          
					
         

          
            <Tabs>
              <Tab heading={ <TabHeading><Text>Технические характеристики</Text></TabHeading>}>
				  {/*<View style={styles.spectr_image}>
                  <Image source={require('../img/B1100/specifications3.png')} style={styles.specifications}/>
                </View>*/}
                <View style={{marginTop:20}}>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black',
                        borderTopWidth: 1, borderTopColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Спектральный диапазон, нм</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>от 315 до 1050</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Диапазон измерений спектральных коэффициентов направленного пропускания, %</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>от 0, 1 до 99</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Диапазон показаний спектральных коэффициентов направленного пропускания, %</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>от 0 до 200</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Диапазон показаний оптической плотности, Б</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>от -0,3 до 3,0</Text>
                        </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Предел допускаемой абсолютной погрешности спектрофотометра при измерении
                                коэффициентов направленного пропускания, %:</Text>
                            <Text>- в спектральном диапазоне от 400 до 800, нм</Text>
                            <Text>- в остальном спектральном диапазоне</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{height:'60%'}}></Text>
                            <Text style={{height:'20%', textAlign: 'center'}}>±0,5</Text>
                            <Text style={{height:'20%', textAlign: 'center'}}>±1,0</Text>
                        </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Погрешность установки длин волн, нм, не более</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>±1,0</Text>
                        </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Спектральная ширина щели, нм</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>4,0</Text>
                        </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Уровень рассеянного света (при λ=340 нм), %, не более</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>0,3</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Габаритные размеры (ДxШxВ), мм</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>490×360×210</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Масса, кг, не более</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>10</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Потребляемая мощность, В∙А, не более</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>60</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Средний срок службы, лет</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>8</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Наработка на отказ, ч, не менее</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>6400</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Напряжение питания частотой (50±1) Гц, В</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{textAlign: 'center'}}>220+22-33</Text>
                        </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black'}}>
                        <View style={{width:'70%', borderRightWidth: 1, borderRightColor: 'black',
                            borderLeftWidth: 1, borderLeftColor: 'black'}}>
                            <Text>Условия эксплуатации:</Text>
                            <Text>- диапазон температур окружающего воздуха, ºC</Text>
                            <Text>- диапазон относительной влажности окружающего воздуха (при 25ºС), %</Text>
                            <Text>- диапазон атмосферного давления, кПа</Text>
                        </View>
                        <View style={{borderRightWidth: 1, borderRightColor: 'black', width:'30%', verticalAlign:'middle',}}>
                            <Text style={{height:'25%'}}></Text>
                            <Text style={{height:'25%', textAlign: 'center'}}>от 15 до 30 </Text>
                            <Text style={{height:'25%', textAlign: 'center'}}>не более 80</Text>
                            <Text style={{height:'25%', textAlign: 'center'}}>от 84 до 106</Text>
                        </View>
                    </View>

                </View>
          
              </Tab>
              <Tab heading={ <TabHeading><Text>Комплект поставки</Text></TabHeading>}>
                
                  {/*<Image source={require('../img/B1100/package.png')} style={styles.package_img}/>
                  <Image source={require('../img/B1100/sold_separately.png')} />*/}
                  <View style={{marginTop:20}}>
                      <Text style={{fontWeight: 'bold', fontSize:15, fontFamily: 'Arial'}}>Комплект поставки:</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Спектрофотометр 1 шт.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Универсальный кюветодержатель 1 шт.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Шнур питания 1 шт.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Чехол от пыли 1 шт.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Лампа галогенная запасная 1 шт.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Заглушка-адаптер 3 шт.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Кюветы К-8 10 мм. КФК 4 шт.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Кабель для подключения к ПК 1 шт.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Сертификат об утверждении типа СИ 1 экз.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Паспорт с отметкой о поверке и РЭ 1 экз.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • Методика поверки 1 экз.</Text>
                  </View>

                  <View style={{marginTop:20}}>
                      <Text style={{fontWeight: 'bold', fontSize:15, fontFamily: 'Arial'}}>Можно приобрести отдельно:</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900140 Перистальтический насос с держателем для проточных кювет</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 909103 Приставка диффузного отражения</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 920920 Принтер матричный</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900440 Держатель для 3 кювет КФК до 100 мм</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900410 Держатель для 4 евро кювет до 10 мм.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900420 Держатель для 4 евро кювет до 50 мм.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900430 Держатель для 4 евро кювет до 100 мм.</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900540 Держатель для 1 цилиндрической кюветы до 100 мм</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900610 Держатель для 1 евро кюветы 10 мм, с водяной рубашкой</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900620 Держатель для 4 евро кювет 10 мм, с водяной рубашкой</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900210 Держатель для 1 микрокюветы  до 10 мм</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900530 Держатель для 1 виалы ХПК</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • UT-4050 Термоблок для виал ХПК</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900550 Держатель для 2 пленок 1,5-3 мм</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 900441 Заглушка</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 909001 Чехол от пыли для 1100/1200/1800</Text>
                      <Text style={{fontSize:15, fontFamily: 'Arial'}}>    • 911634 Лампа галогенная 12В 20Вт</Text>
                  </View>
             
              </Tab>
            
            </Tabs>


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
    marginTop: 20,
    width: 378, 
    height: 723,
  },
  package_img:{
    marginTop: 20,
    marginBottom: 20,
  }

	
});