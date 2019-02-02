import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {createStackNavigator, StackActions, NavigationActions} from 'react-navigation';
import InformasiScreen from "./screens/InformasiScreen";
import {Component} from 'react';
import {ThemeContext, getTheme} from 'react-native-material-ui';
import TebakGambarScreen from "./screens/TebakGambarScreen";
import HasilScreen from "./screens/HasilScreen";

export const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })],
});

const PrimaryStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        TebakGambar: {
            screen: TebakGambarScreen
        },
        Hasil: {
            screen: HasilScreen
        },
        Informasi: {
            screen: InformasiScreen
        }
    },{
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ff0000'
            },
            headerBackTitleStyle: {
                color: '#fff'
            },
            headerTintColor: 'white',
        },
        headerMode: 'none'
    }
);

const uiTheme = {
    toolbar: {
        container: {
            backgroundColor: 'red'
        }
    }
};

export default class App extends Component {
    render() {
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>
                <PrimaryStack/>
            </ThemeContext.Provider>
        )
    }
};
