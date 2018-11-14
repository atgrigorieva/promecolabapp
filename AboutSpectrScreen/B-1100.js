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
          				<Title>В-1100</Title>
        			</Body>
        			<Right />
      			</Header>
				<Content padder >
					<View style={styles.spectr_image}>	
						<Image source={require('../img/B1100/B-1100_201x170.png')} style={styles.image}/>
					</View>

          
					
         

          
            <Tabs>
              <Tab heading={ <TabHeading><Text>Технические характеристики</Text></TabHeading>}>
                <View style={styles.spectr_image}>  
                  <Image source={require('../img/B1100/specifications3.png')} style={styles.specifications}/>
                </View>
          
              </Tab>
              <Tab heading={ <TabHeading><Text>Комплект поставки</Text></TabHeading>}>
                
                  <Image source={require('../img/B1100/package.png')} style={styles.package_img}/>
                  <Image source={require('../img/B1100/sold_separately.png')} />
             
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