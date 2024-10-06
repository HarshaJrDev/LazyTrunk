import { ImageBackground, StyleSheet, Switch, Text, TouchableOpacity, View,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import * as Font from "expo-font";
import {Fontisto,FontAwesome,Ionicons,Foundation,AntDesign,Entypo,MaterialIcons} from "react-native-vector-icons";
import pacmanImage from "../assets/pacman.png";
const SettingScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "OpenSans-ExtraBold": require("../assets/fonts/Open_Sans/static/OpenSans-ExtraBold.ttf"),
      "Montserrat-Bold": require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
      "OpenSans_Condensed-Regular": require("../assets/fonts/Open_Sans/static/OpenSans_Condensed-Regular.ttf"),
      "Montserrat-Regular": require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground style={{flex:1}} source={require("../assets/Bg.jpg")}  >
    <View style={{backgroundColor:"#001c37",marginTop:30,height:70,flexDirection:"row",alignItems:"center",}} > 
    <TouchableOpacity>
          <View style={{ alignItems: "flex-start", padding: 20 }}>
            <Ionicons
              name={"settings-sharp"}
              size={30}
              style={{ zIndex: 1, color: "white" }}
            />
          </View>
        </TouchableOpacity>

        <View style={{paddingLeft:60}}>
          <Text style={{textAlign:"center",color:"white",fontSize:30,fontFamily:"Montserrat-Bold"}}>SETTINGS</Text>
        </View>

    </View>

    <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:20,marginRight:20,marginTop:20}}>
      <TouchableOpacity style={{height:50,width:50,backgroundColor:"#313131",alignItems:"center",borderRadius:25,justifyContent:"center"}} >  
        <Foundation style={{alignItems:"center"}} name={"music"} color={"#fff"} size={30}/> 
      </TouchableOpacity>
      <TouchableOpacity style={{height:50,width:50,backgroundColor:"#313131",alignItems:"center",borderRadius:25,justifyContent:"center"}} >  
        <AntDesign style={{alignItems:"center"}} name={"infocirlce"} color={"#fff"} size={25}/> 
      </TouchableOpacity>
    </View>

    <View style={{marginHorizontal:10,marginTop:60}}>
      <TouchableOpacity style={{backgroundColor:"#9ED93C",height:90,borderRadius:20,paddingLeft:10,flexDirection:"row",alignItems:"center"}} >
      <Text style={{textAlign:"left",color:"white",fontSize:20,fontFamily:"Montserrat-Bold" ,color:"#001c37"}}>Languages</Text>
      <Text style={{textAlign:"left",color:"white",fontSize:20,fontFamily:"Montserrat-Bold" ,color:"#001c37",paddingLeft:40}}>Eng(Us)</Text>
      <Image style={{height:40,width:40,marginHorizontal:10}} source={require("../assets/circle.png")}/>
      <AntDesign name={"caretright"} size={30} style={{marginHorizontal:20}} />
      </TouchableOpacity>
    </View>
    <View style={{marginHorizontal:10,marginTop:30,width:"90%"}}>
  
      <TouchableOpacity style={{backgroundColor:"#EE6E6E",height:80,borderRadius:20,paddingLeft:10,flexDirection:"row",alignItems:"center"}} >
      <AntDesign name={"star"} size={30} />
      <Text style={{textAlign:"left",color:"white",fontSize:20,fontFamily:"Montserrat-Bold" ,color:"#001c37",paddingLeft:20}}>Kid Mode</Text>
      <Text style={{textAlign:"left",color:"white",fontSize:20,fontFamily:"Montserrat-Bold" ,color:"#001c37",marginHorizontal:40}}>0ff</Text>
      <Switch thumbColor={"#001C37"} trackColor={"#fff"}/>
      </TouchableOpacity>
    </View>
    <View style={{marginHorizontal:10,marginTop:30,width:"80%"}}>
      <TouchableOpacity style={{backgroundColor:"#3AB4B4",height:70,borderRadius:20,paddingLeft:10,flexDirection:"row",alignItems:"center"}} >
        <AntDesign name={"shoppingcart"} size={30}/>
      <Text style={{textAlign:"left",color:"white",fontSize:20,fontFamily:"Montserrat-Bold" ,color:"#001c37",marginHorizontal:20}}>Purchaes</Text>
      <AntDesign name={"caretright"} size={30} style={{marginHorizontal:80}} />
      </TouchableOpacity>
    </View>


    <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            marginTop:70,
          }}
        >
          {/* Container for FOLLOW US */}
          <View
            style={{
              width: 150,
              alignItems: "center",
              backgroundColor: "#112537",
              borderRadius:10,
              borderColor: "white",
              height: 50,
              flexDirection:"row"
            }}
          >
          
            <TouchableOpacity>
              
              <View
                style={{
  
                  width: 100,
                  alignItems: "center",
                  backgroundColor: "#112537",
                  borderRadius:10,
                  borderColor: "white",
                  height: 50,
                  justifyContent:'center',
                  flexDirection:"row",
                  paddingLeft:10,
                  marginLeft:10
                }}
              >
                  <Entypo
              name={"game-controller"}
              size={20}
              color={"white"}
              style={{ marginHorizontal:20}}
            />
                <Text
                  style={{
                    color: "white",
                  justifyContent:'center',
                    fontSize: 20,
                    fontFamily: "OpenSans_Condensed-Regular",
                    lineHeight: 23,
            
                  }}
                >
                  More Games 
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Container for MORE GAMES */}
          <View
            style={{
              width: 150,
              alignItems: "center",
              backgroundColor: "#112537",
              borderRadius:10,
              borderColor: "white",
              height: 50,
              flexDirection:"row"
            }}
          >
         
            <TouchableOpacity>
              <View
                style={{
       
                  width: 100,
                  alignItems: "center",
                  backgroundColor: "#112537",
                  borderRadius:10,
                  borderColor: "white",
                  height: 50,
                  justifyContent:'center',
                  flexDirection:"row",
                  paddingLeft:10,
                  marginLeft:10
                }}
              >
                 <MaterialIcons
              name={"rocket"}
              size={30}
              color={"white"}
              style={{ marginHorizontal:20}}
            />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                    fontFamily: "OpenSans_Condensed-Regular",
                    lineHeight: 23,
                  }}
                >
                 Follow Us
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

    </ImageBackground>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})