import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet,} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';

export default class SystemInitializationPage extends Component {

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
                                        После включения начнут работать вентиляторы охлаждения.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Если этого не произошло обратитесь к специалисту.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        На дисплее прибора будет показан логотип ТМ ECOVIEW.
                                    </Text>
                                    <Text style={{
                                        fontSize:15,
                                        marginBottom: 10
                                    }}>
                                        Этот логотип подтверждает, что прибор подлинный.
                                    </Text>
                                    <Text style={styles.italicText}>
                                        Если при включении прибора на дисплее не отразился логотип,
                                        обязательно свяжитесь с нами по тел.: +7 (812) -309-29-40.
                                    </Text>

                                </View>
                                <View style={{marginLeft: 20}}>
                                    <Image
                                        source={require('../../img/B1200/v-1200_11.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <Left><Button onPress={() => this.props.navigation.navigate('NextPage1')}><Text>Продолжить</Text></Button></Left>
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