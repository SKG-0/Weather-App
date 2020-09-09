import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
const API_KEY='8eb4dd55b22cf51f7920c19dd409eaf4'
import Weather from './components/Weather'
export class App extends Component {
  state={
    isloading:false,
    temperature:0,
    weathercondition:null,
    error:null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position=>{
        this.fetchweather(position.coords.latitude,position.coords.longitude);
      },
      error=>{
        this.setState({
          error:'Error Getting Weather Conditions'
        })
      }
    )
  }
  fetchweather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`).then(res=> res.json()).then(json=>{
      this.setState({
        temperature:json.main.temp,
        weathercondition:json.weather[0].main,
        isloading:false
      })
    })
  }
  render() {
    const {isloading,weathercondition,temperature}=this.state;
    return (
      <View style={styles.container}>
        {isloading?(
          <Text style={styles.loading}>Fetching The Weather</Text>
        ):(
          <Weather weather={weathercondition} temperature={temperature} />
        )}
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  loading:{
    textAlign:'center',
    justifyContent:'center',
    fontSize:30
  }
})
export default App
