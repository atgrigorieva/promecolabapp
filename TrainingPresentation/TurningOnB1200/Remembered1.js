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
                                        marginBottom: 10,
                                        color: '#ff0000',
                                        fontWeight: 'bold'
                                    }}>
                                        ВНИМАНИЕ
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        1. Перед дальнейшим ознакомление запомните: «ДИСПЛЕЙ СЕНСОРНЫЙ!!!
                                        <Text style={{
                                            fontSize:15,
                                            marginBottom: 10,
                                            color: '#ff0000',
                                            fontStyle: 'italic',
                                            fontWeight: 'bold'

                                        }}> (как на смарфоне)</Text>».
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        2. Нажимать нужно без излишнего усилия!
                                        Сенсор срабатывает на прикосновение, а не на нажатие!
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        3. Нажимать нужно на ПИКТОГРАММЫ, НАДПИСИ И ОБЛАСТИ на дисплее.
                                        Подробнее об этом можно узнать в других интерактивных презентациях.
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
                    <Left><Button onPress={() => this.props.navigation.navigate('DarkCurrent')}><Text>Темновой ток</Text></Button></Left>
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