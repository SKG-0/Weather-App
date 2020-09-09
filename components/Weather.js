import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {weatherConditions} from './WeatherConditions'
export default function Weather({weather,temperature}) {
    if(weather!=null){
        return(
            <View style={[styles.weathercontainer,{backgroundColor:weatherConditions[weather].color}]}>
                <View style={styles.headercontainer}>
                    <MaterialCommunityIcons size={72} name={weatherConditions[weather].icon} color={'#fff'} />
                    <Text style={styles.temptext}>{temperature}</Text>
                </View>
                <View style={styles.bodycontainer}>
                    <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                    <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
                </View>
            </View>
        )
    }
    else{
        return (
            <View>
                <Text style={styles.loadingtext}>Fetching The Weather</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    weathercontainer:{
        flex:1,
        backgroundColor:'#f7b733'
    },
    headercontainer:{
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around'
    },
    temptext:{
        fontSize:72,
        color:'#fff'
    },
    bodycontainer:{
        flex:2,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingLeft:25,
        marginBottom:40
    },
    title:{
        fontSize:60,
        color:'#fff'
    },
    subtitle:{
        fontSize:24,
        color:'#fff'
    },
    loadingtext:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        fontSize:60
    }
})