import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet,} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';

export default class NextPage extends Component {

    componentDidMount(){
        Orientation.lockToLandscape();
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                    <Title>Включение Спектрофотометра В-1200. Инициализация системы</Title>
                    </Body>
                </Header>
                <Content padder >
                    <View>
                        <View>
                            <View style={{flex:1, flexDirection: 'row'}}>
                                <View style={{
                                    width: "40%"
                                }}>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Перед тем как система самотестирования проверит точность установки длины волны
                                        и фотометрические характеристики прибору необходимо прогреться.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Время полного прогрева занимает 20 минут
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Рекомендуем дождаться окончания прогрева.
                                        После окончания прибор автоматически вернется в режим самотестирования
                                        и самокалибровки.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Если пропустить Прогрев, самокалибровка может пройти с увеличенной погрешностью,
                                        это может сказаться на точности измерений.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Для продолжения нажмите на область дисплея «Пропустить >>».
                                    </Text>


                                </View>
                                <View style={{marginLeft: 20}}>
                                    <Image
                                        source={require('../../img/B1200/display1.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <Left><Button onPress={() => this.props.navigation.navigate('Pass')}><Text>Пропустить</Text></Button></Left>
                    <Right><Button onPress={() => this.props.navigation.goBack(null)}><Text>К списку презентаций</Text></Button></Right>
                </Footer>
            </Container>
        )
    }
}

var styles = StyleSheet.create({

    italicText: {
        marginTop: 10,
        marginBottom: 10,
        fontStyle: 'italic',
        color: '#ff6600',
    }


});