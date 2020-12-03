import React, { useState, useEffect } from "react";
import Constants from 'expo-constants';
import { firebase_db } from "../firebaseConfig"
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default Setting = () => {
    const user_id = Constants.installationId;

    const [value, setValue] = useState("null")
    const [v1value, setV1alue] = useState("0000.00.00")
    const [v2value, setV2value] = useState("00")
    const [v3value, setV3value] = useState("00")

    useEffect(() => {
        const user_id = Constants.installationId;
        console.log("Firbase Reading for Writing")
        firebase_db.ref('/data/' + user_id).once('value').then((snapshot) => {
            console.log("Firebase Read Finish")
            let data
            if(data = snapshot.val()){
                setValue(data.value);
                setV1alue(data.v1value);
                setV2value(data.v2value);
                setV3value(data.v3value);
            }
        });
    }, [])

    const Result = () => {
        const new_history = {
            value: value,
            v1value: v1value,
            v2value: v2value,
            v3value: v3value,
        }
        console.log(value)
        console.log(v1value)
        console.log(v2value)
        console.log(v3value)
        firebase_db.ref('/data/' + user_id).set(new_history, function (error) {
            console.log(error)
        })
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.tt}>군 종류</Text>
                <Picker
                    style={{ height: 50, width: 160 }}
                    onValueChange={setValue}>
                    <Picker.Item label="선택해주세요" value="" />
                    <Picker.Item label="육군" value="roka" />
                    <Picker.Item label="해군" value="navi" />
                    <Picker.Item label="해병대" value="marin" />
                    <Picker.Item label="공군" value="air" />
                </Picker>
                <Text>{"\n"}</Text>
                <Text style={styles.tt}>입대날짜</Text>
                <TextInput style={styles.tt2} placeholder="2020.11.11" onChangeText={setV1alue} />

                <Text>{"\n"}</Text>
                <Text style={styles.tt}>포상휴가</Text>
                <TextInput style={styles.tt2} placeholder="00일" onChangeText={setV2value} />

                <Text>{"\n"}</Text>
                <Text style={styles.tt}>위로휴가</Text>
                <TextInput style={styles.tt2} placeholder="00일" onChangeText={setV3value} />
                <TouchableOpacity
                    onPress={() => Result() || Alert.alert("앱을 다시 실행해주세요")}
                >
                    <Text>{"\n"}</Text>
                    <Text style={styles.tt3}>Submit</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    tt: {
        fontSize: 20
    },
    tt2: {
        fontSize: 15
    },
    tt3: {
        fontSize: 25
    }
});
