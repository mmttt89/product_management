import React from 'react';
import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import Home from "@Screens/home";
import ProductDetails from "@Screens/product-details";

const TopLevelStack = FluidNavigator({
    Home,
    ProductDetails,
}, {
    initialRouteName: 'Home'
})

const AppContainer = createAppContainer(TopLevelStack);

export default class RootNavigator extends React.Component {
    render() {
        return (
            <AppContainer />
        )
    }
}
