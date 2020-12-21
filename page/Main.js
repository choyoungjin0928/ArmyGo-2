import React, { useState, useEffect } from "react";
import { firebase_db } from "../firebaseConfig"
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import innerdata from '../data.json';
import roka from "../assets/roka.png"
import marin from "../assets/marin.png"
import navi from "../assets/navi.png"
import air from "../assets/air.png"

export default Main = () => {
    let title = ""
    let worktime = 0
    let vct = 0
    let total = 0;

    var Ndate = new Date();
    var diffDay = []
   
    const [data, setData] = useState([])
    useEffect(() => {
        const user_id = Constants.installationId;
        console.log("Firebase Reading")
        firebase_db.ref('/data/' + user_id).once('value').then((snapshot) => {
            console.log("Firebase Read Finish")
            let data;
            if (data = snapshot.val())
                setData(data);
            else
                Alert.alert('초기설정을 해주세요.');
        });
    }, [])

    if (data.value == innerdata.data[0].value) {
        title = innerdata.data[0].title;
        worktime = innerdata.data[0].date;
        vct = innerdata.data[0].vacation;
    }
    else if (data.value == innerdata.data[1].value) {
        title = innerdata.data[1].title;
        worktime = innerdata.data[1].date;
        vct = innerdata.data[1].vacation;
    }
    else if (data.value == innerdata.data[2].value) {
        title = innerdata.data[2].title;
        worktime = innerdata.data[2].date;
        vct = innerdata.data[2].vacation;
    }
    else if (data.value == innerdata.data[3].value) {
        title = innerdata.data[3].title;
        worktime = innerdata.data[3].date;
        vct = innerdata.data[3].vacation;
    }

    var tData = []
    tData = data.v1value
    if (tData) {
        var tDataresult = tData.split('.')
        console.log(tDataresult[0], tDataresult[1], tDataresult[2])
        let date1 = new Date(parseInt(tDataresult[0]), parseInt(tDataresult[1]), parseInt(tDataresult[2]));
        let date2 = new Date(Date.parse(date1) + worktime * 1000 * 60 * 60 * 24)
        var fDate = date2.getFullYear() + '.' + date2.getMonth() + '.' + date2.getDate()
        console.log(fDate)
        diffDay = (date2.getTime() - Ndate.getTime()) / (1000*60*60*24) - 30;
    }

    total = vct + parseInt(data.v2value) + parseInt(data.v3value);

    return (
        (data.value == "roka" && <View style={styles.container}><Text style={styles.textstyle}>군 종류 : {title}{"\n"}입대일 : {data.v1value}{"\n"}전역일 : {fDate}{"\n"}--------------------------------------{"\n"}예정 복무일수 : {worktime}일{"\n"}남은 복무일수 : {parseInt(diffDay)}일{"\n"}--------------------------------------{"\n"}총 휴가일수 : {total}일{"\n"}정기휴가 : {vct}일{"\n"}포상휴가 : {data.v2value}일{"\n"}위로휴가 : {data.v3value}일</Text>
            <Image source={roka} style={{ height: '50%', width: '50%' }} /></View>) ||
        (data.value == "marin" && <View style={styles.container}><Text style={styles.textstyle}>군 종류 : {title}{"\n"}입대일 : {data.v1value}{"\n"}전역일 : {fDate}{"\n"}--------------------------------------{"\n"}예정 복무일수 : {worktime}일{"\n"}남은 복무일수 : {parseInt(diffDay)}일{"\n"}--------------------------------------{"\n"}총 휴가일수 : {total}일{"\n"}정기휴가 : {vct}일{"\n"}포상휴가 : {data.v2value}일{"\n"}위로휴가 : {data.v3value}일</Text>
            <Image source={marin} style={{ height: '50%', width: '50%' }} /></View>) ||
        (data.value == "navi" && <View style={styles.container}><Text style={styles.textstyle}>군 종류 : {title}{"\n"}입대일 : {data.v1value}{"\n"}전역일 : {fDate}{"\n"}--------------------------------------{"\n"}예정 복무일수 : {worktime}일{"\n"}남은 복무일수 : {parseInt(diffDay)}일{"\n"}--------------------------------------{"\n"}총 휴가일수 : {total}일{"\n"}정기휴가 : {vct}일{"\n"}포상휴가 : {data.v2value}일{"\n"}위로휴가 : {data.v3value}일</Text>
            <Image source={navi} style={{ height: '50%', width: '50%' }} /></View>) ||
        (data.value == "air" && <View style={styles.container}><Text style={styles.textstyle}>군 종류 : {title}{"\n"}입대일 : {data.v1value}{"\n"}전역일 : {fDate}{"\n"}--------------------------------------{"\n"}예정 복무일수 : {worktime}일{"\n"}남은 복무일수 : {parseInt(diffDay)}일{"\n"}--------------------------------------{"\n"}총 휴가일수 : {total}일{"\n"}정기휴가 : {vct}일{"\n"}포상휴가 : {data.v2value}일{"\n"}위로휴가 : {data.v3value}일</Text>
            <Image source={air} style={{ height: '40%', width: '90%' }} /></View>) || (<View style={styles.container}><Text style={styles.textstyle}>설정 페이지에서 초기설정을 해주세요.</Text></View>)
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textstyle: {
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center'
    }
});
