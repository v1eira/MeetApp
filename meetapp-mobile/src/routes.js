/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import logo from './assets/images/logo/logo.png';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Meetups from './pages/Meetups';
import Subscriptions from './pages/Subscriptions';
import Profile from './pages/Profile';

const stackNavigationOptions = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerTitle: (
      <Image source={logo} resizeMode="contain" style={{ height: 24 }} />
    ),
    headerStyle: {
      backgroundColor: '#000',
    },
  },
};

const MeetupsStack = createStackNavigator(
  { Meetups },
  {
    navigationOptions: {
      tabBarLabel: 'Meetups',
      tabBarIcon: ({ tintColor }) => (
        <MIcon name="format-list-bulleted" size={20} color={tintColor} />
      ),
    },
    ...stackNavigationOptions,
  }
);

const SubscriptionsStack = createStackNavigator(
  { Subscriptions },
  {
    navigationOptions: {
      tabBarLabel: 'Inscrições',
      tabBarIcon: ({ tintColor }) => (
        <MIcon name="local-offer" size={20} color={tintColor} />
      ),
    },
    ...stackNavigationOptions,
  }
);

const ProfileStack = createStackNavigator(
  { Profile },
  {
    navigationOptions: {
      tabBarLabel: 'Meu perfil',
      tabBarIcon: ({ tintColor }) => (
        <MIcon name="person" size={20} color={tintColor} />
      ),
    },
    ...stackNavigationOptions,
  }
);

const createRouter = (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            MeetupsStack,
            SubscriptionsStack,
            ProfileStack,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#2b1a2f',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

export default createRouter;
