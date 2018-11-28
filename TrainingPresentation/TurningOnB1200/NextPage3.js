import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet,} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';
import InspectionOfDevice from "./InspectionOfDevice";

export default class TurningOnB1200Page extends Component {

    componentDidMount(){
        Orientation.lockToLandscape();
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                    <Title>Включение Спектрофотометра В-1200 (ТМ ЭКОВЬЮ)</Title>
                    </Body>
                </Header>
                <Content padder >
                    <View>
                        <View>
                            <Text style={styles.h1}>Благодарим Вас за уделенное время!</Text>
                            <Text style={styles.h2}>Надеемся наша Интерактивная презентация</Text>
                            <Text style={styles.h2}>«Включение Спектрофотометра В-1200 (ТМ ЭКОВЬЮ)» помогла Вам.</Text>
                            <Text style={styles.h2}>Предложения и пожелания можно направлять</Text>
                            <Text style={styles.h2}>по адресу электронной почты info@ecoview.ru</Text>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <Left><Button onPress={() => this.props.navigation.navigate('inspectionOfDevice')}><Text>Начать просмотр заново</Text></Button></Left>
                    <Right><Button onPress={() => this.props.navigation.goBack(null)}><Text>К списку презентаций</Text></Button></Right>
                </Footer>
            </Container>
        )
    }
}

var styles = StyleSheet.create({

    h2:{
        fontSize: 30,
        fontFamily: 'Arial',
        textAlign: 'center',
        fontWeight: '400',
    },
    h1:{
        fontSize: 40,
        fontFamily: 'Arial',
        textAlign: 'center',
        fontWeight: '500',
    },

});