import React, { Component } from 'react';
import { DrawerNavigator} from 'react-navigation';
import HomePage from "./HomeScreen.js";
import AboutSpectrScreen from "../AboutSpectrScreen/index.js";
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import PostReview from "../Chat/PostReview.js";
import CommentsSuggestions from "../Chat/CommentsSuggestions.js";
import CoefficientCalculation from "../CoefficientCalculation/index.js";
import TrainingPresentations from "../TrainingPresentation/index.js";



const HomePageRouter = DrawerNavigator({
    'Главная': { screen: HomePage },
    'О спректрофотометрах': { screen: AboutSpectrScreen },
    'Отправить отзыв': { screen: PostReview},
    'Замечания и пожелания': {screen: CommentsSuggestions},
    'Расчет по коэффициентам': {screen: CoefficientCalculation},
    'Обучающие презентации': {screen: TrainingPresentations},
    ///Profile: { screen: ProfileScreen },
});


export default HomePageRouter;
