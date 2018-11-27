import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet,} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';

export default class AutomaticHolderPage extends Component {

    componentDidMount(){
        Orientation.lockToLandscape();
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                    <Title>Включение Спектрофотометра В-1200. Инициализация системы. Автоматический держатель</Title>
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
                                        Может использоваться только в комплекте со спектрофотометром УФ-1800.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Самотестирование спектрофотометров В-1200 и УФ-1200 по этому пункту всегда проходит положительно.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Если самотестирование прервалось, обратитесь к специалисту.
                                    </Text>


                                </View>
                                <View style={{marginLeft: 20}}>
                                    <Image
                                        source={require('../../img/B1200/v-1200_2_OK_2.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <Left><Button onPress={() => this.props.navigation.navigate('NextPage2')}><Text>Продолжить</Text></Button></Left>
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