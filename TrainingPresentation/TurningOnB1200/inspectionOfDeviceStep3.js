import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet,} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';

export default class InspectionOfDevicePage extends Component {

    componentDidMount(){
        Orientation.lockToLandscape();
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                    <Title>Включение Спектрофотометра В-1200. Осмотр прибора. Шаг 3</Title>
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
                                        После осмотра можно подключать спектрофотометр к сети электропитания.
                                    </Text>
                                </View>
                                <View>
                                    <Image
                                        source={require('../../img/B1200/B1200.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <Left><Button onPress={() => this.props.navigation.navigate('PowerConnection')}><Text>Повернуть прибор</Text></Button></Left>
                    <Right><Button onPress={() => this.props.navigation.goBack(null)}><Text>К списку презентаций</Text></Button></Right>
                </Footer>
            </Container>
        )
    }
}

var styles = StyleSheet.create({



});