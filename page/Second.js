import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

export default Second = ({ navigation }) => {
    return (<View style={styles.container}><Text style={styles.textstyle}>실제로 하는 복무기간</Text></View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent : 'center'
    },
    textstyle: {
        fontSize: 15,
        textAlign : 'center'
    }
});