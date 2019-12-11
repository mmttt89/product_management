import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import orange from "@Assets/orange.png";

export default class ProductDetailsScreen extends React.Component {

    componentDidMount() {

    }

    render() {
        const { item } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>                
                <View style={{ flex: 1, flexDirection: 'row', width: "100%" }}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Text>Feature one</Text>
                        </View>
                        <View style={styles.button}>
                            <Text>Feature two</Text>
                        </View>
                        <View style={styles.button}>
                            <Text>Feature three</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image source={orange} resizeMode={"contain"} style={{ width: "100%", height: "100%" }} />
                    </View>
                </View>
                <View style={styles.detailsContainer}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    detailsContainer: {
        borderWidth: 1,
        height: hp("25%"),
        width: wp("100%"),
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    buttonContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp("10%")
    },
    button: {
        width: wp("18%"),
        height: wp("18%"),
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#cecece',
        borderRadius: wp("5%")
    },
})
