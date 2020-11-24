import React, { useState, useEffect, setEffect } from "react";
import { firebase_db } from "../firebaseConfig"
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default Main = ({ navigation, route }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const user_id = Constants.installationId;
        console.log("Firebase Reading")
        firebase_db.ref('/data/'+ user_id).once('value').then((snapshot) => {
            console.log("Firebase Read Finish")
            let data = snapshot.val();
            setData(data)
        });
    }, [])

    setEffect(() => {
        const user_id = Constants.installationId;
        console.log("Firebase Reading")
        firebase_db.ref('/data/'+ user_id).once('value').then((snapshot) => {
            console.log("Firebase Read Finish")
            let data = snapshot.val();
            setData(data)
        });
    }, [])

    return (<View>{console.log("Main Code Start") || console.log(data.value) || console.log(data.v1value) || console.log(data.v2value) || console.log(data.v3value) || console.log("Main Code End")}</View>)
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