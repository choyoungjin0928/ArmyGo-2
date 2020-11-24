import React, { useState, useEffect } from "react";
import { firebase_db } from "../firebaseConfig"
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import innerdata from '../data.json';

export default Main = ({ navigation }) => {
    let title = ""
 
    const [data, setData] = useState([])
    useEffect(() => {
        const user_id = Constants.installationId;
        console.log("Firebase Reading")
        firebase_db.ref('/data/' + user_id).once('value').then((snapshot) => {
            console.log("Firebase Read Finish")
            let data = snapshot.val();
            setData(data)
        });
    }, [])

    if (data.value == innerdata.data[0].value)
        title = innerdata.data[0].title;
    else if (data.value == innerdata.data[1].value)
        title = innerdata.data[1].title;
    else if (data.value == innerdata.data[2].value)
        title = innerdata.data[2].title;
    else if (data.value == innerdata.data[3].value)
        title = innerdata.data[3].title;

return (<View style={styles.container}><Text style={styles.textstyle}>군 종류 : {title}{"\n"}입대일 : {data.v1value}{"\n"}포상휴가 : {data.v2value}일{"\n"}위로휴가 : {data.v3value}일</Text></View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems : 'center'
    },
    textstyle: {
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center'
    }
});