import React, { Component } from 'react';
import { DrawerNavigator, Navigator } from 'react-navigation';
import HomePage from "./HomeScreen.js";
import AboutSpectrScreen from "../AboutSpectrScreen/index.js";

const HomePageRouter = DrawerNavigator({
  			'Главная': { screen: HomePage },
 			'О спректрофотометрах': { screen: AboutSpectrScreen },
 			'Отправить отзыв': { screen: PostReview},
    			///Profile: { screen: ProfileScreen },
		});
export default HomePageRouter;