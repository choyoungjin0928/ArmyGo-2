import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import Setting from './Setting';

export default Main = ({ navigation }) => {
    return (<View style={styles.container}><Text style={styles.textstyle}>전역일 표시</Text></View>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    textstyle: {
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center'
    }
});