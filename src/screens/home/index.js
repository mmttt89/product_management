import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Search, Dollar } from "@Assets/icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const tabs = [
    { id: "01", name: "Best Seller" },
    { id: "02", name: "Women" },
    { id: "03", name: "Men" },
    { id: "04", name: "Popular" },
    { id: "05", name: "Best Offers" },
]

const products = [
    { id: "001", imageUrl: "https://placeimg.com/640/480/any", name: "Hond soap", description: "50 ml", price: 8.99 },
    { id: "002", imageUrl: "https://placeimg.com/640/480/people", name: "Hond soap", description: "50 ml", price: 3.65 },
    { id: "003", imageUrl: "https://placeimg.com/640/480/arch", name: "Hond soap", description: "50 ml", price: 4.99 },
    { id: "004", imageUrl: "https://placeimg.com/640/480/animals", name: "Hond soap", description: "50 ml", price: 4.35 },
    { id: "005", imageUrl: "https://placeimg.com/640/480/any", name: "Hond soap", description: "50 ml", price: 6.95 },
    { id: "006", imageUrl: "https://placeimg.com/640/480/any", name: "Hond soap", description: "50 ml", price: 7.99 },
]

export default class HomeScreen extends React.Component {
    render() {
        let { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.navbar}>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>|||</Text>
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sales App</Text>
                        <View style={styles.notif}>
                            <Text style={{ color: '#fff' }}>4</Text>
                        </View>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {`Discover the \nnewest products`}
                        </Text>
                    </View>
                    <View style={styles.search}>
                        <View style={styles.iconWrapper}>
                            <Search />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput placeholder="Search products"></TextInput>
                        </View>
                    </View>
                </View>
                <View style={{ width: WIDTH, paddingVertical: hp("1%") }}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        contentContainerStyle={{ paddingStart:wp("3%"), justifyContent: 'center', }}>
                        {
                            tabs.map(tab =>
                                <View
                                    key={tab.id}
                                    style={styles.tab}>
                                    <Text>{tab.name}</Text>
                                </View>)
                        }
                    </ScrollView>
                </View>
                <View style={styles.bottomView}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={products}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => item.id}
                        renderItem={
                            ({ item }) =>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ProductDetails", { item })}
                                    style={{
                                        flexDirection: "row",
                                        alignItems: 'center',
                                        marginVertical: hp("1%"),
                                        paddingVertical: hp("3%"),
                                    }}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ borderRadius: 25, width: wp("12%"), height: wp("12%") }}>
                                            <Image
                                                resizeMode={"cover"}
                                                source={{ uri: item.imageUrl }}
                                                style={{ width: "100%", height: "100%", borderRadius: 25 }}
                                            />
                                        </View>
                                        <View style={{ paddingHorizontal: wp("4%") }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000" }}>{item.name}</Text>
                                            <Text>{item.description}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ width: wp("3.2%"), height: wp("3.2%"), position: 'absolute', left: -wp("3.2%"), top: -10 }}>
                                            <Dollar />
                                        </View>
                                        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{item.price}</Text>
                                    </View>
                                </TouchableOpacity>
                        } />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    topView: {
        paddingHorizontal: wp("4.5%"),
        paddingVertical: hp("1%"),
        width: "100%",
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    notif: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#026fc2'
    },
    header: {
        justifyContent: "flex-start",
        paddingVertical: 30,
        marginTop: 30
    },
    headerText: {
        fontSize: 45,
        color: "#000"
    },
    search: {
        backgroundColor: '#e3e5e6',
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: wp("5%")
    },
    iconWrapper: {
        paddingHorizontal: 10
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp("3%"),
        paddingVertical: hp("1.5%"),
        marginHorizontal: hp("2%"),
        borderRadius: wp("20%"),
        backgroundColor: "#e3e5e6"
    },
    bottomView: {
        flex: 1,
        width: '100%',
        paddingHorizontal: wp("4.5%"),
        paddingVertical: hp("0.5%")
    },
})
