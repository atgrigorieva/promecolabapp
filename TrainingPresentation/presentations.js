import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Accordion } from 'native-base';
import { View, Image, StyleSheet,} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions, TouchableOpacity } from 'react-navigation';
import Orientation from 'react-native-orientation-locker';

export default class PresentationsPage extends Component {

    componentDidMount(){
        Orientation.lockToPortrait();
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Обучающие презентации</Title>
                    </Body>
                </Header>
                <Content padder >
                    <View>
                        <Button block light onPress={() => this.props.navigation.navigate('turningOnB1200')} style={styles.button}>
                            <Image
                                source={require('../img/present/presentTurningOnB1200.png')} />
                        </Button>
                    </View>
                </Content>
                <Footer/>
            </Container>
        )
    }
}

var styles = StyleSheet.create({

    button: {
        paddingBottom: 5,
        height:'100%'


    },

});