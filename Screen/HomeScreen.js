import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {Fontisto,FontAwesome,Ionicons} from "react-native-vector-icons";
import * as Font from "expo-font";
import Svg, { Path } from "react-native-svg";
import pacmanImage from "../assets/pacman.png";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "OpenSans-ExtraBold": require("../assets/fonts/Open_Sans/static/OpenSans-ExtraBold.ttf"),
      "OpenSans_Condensed-Regular": require("../assets/fonts/Open_Sans/static/OpenSans_Condensed-Regular.ttf"),
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
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/Bg.jpg")}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            resizeMode: "cover",
          }}
        />
        <TouchableOpacity onPress={()=>navigation.navigate("Setting")} >
          <View style={{ alignItems: "flex-end", padding: 20 }}>
            <Ionicons
              name={"settings-sharp"}
              size={30}
              style={{ zIndex: 1, color: "white" }}
            />
          </View>
        </TouchableOpacity>

        {/* Center Content */}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {/* Title Section */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* NEVER */}
            <Text style={{ fontSize: 57 }}>
              <Text
                style={{
                  fontFamily: "OpenSans-ExtraBold",
                  color: "lightgreen",
                  textDecorationColor: "lightgreen",
                  textDecorationLine: "underline",
                }}
              >
                NEVER
              </Text>
            </Text>

            {/* HAVE I */}
            <Text style={{ fontSize: 57 }}>
              <Text
                style={{
                  fontFamily: "OpenSans-ExtraBold",
                  color: "white",
                  textDecorationLine: "underline",
                  textDecorationColor: "white",
                }}
              >
                HAVE I
              </Text>
            </Text>

            {/* EVER */}
            <Text style={{ fontSize: 57 }}>
              <Text
                style={{
                  fontFamily: "OpenSans-ExtraBold",
                  color: "#EB7171",
                  textDecorationLine: "underline",
                  textDecorationColor: "#EB7171",
                }}
              >
                EVER
              </Text>
            </Text>
          </View>

          {/* Button Section */}
          <View style={{ marginTop: 40, width: "100%", alignItems: "center" }}>
            {/* PLAY Button with SVG */}
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                paddingVertical: 15,
                marginVertical: 10,
                borderRadius: 30,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                overflow: "hidden",
                width: "60%",
                position: "relative",
              }}
              onPress={() => navigation.replace("Deck")}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ position: "absolute", height: 100, width: "100%" }}
              >
                <Path
                  fill="#90EE90"
                  fillOpacity="1"
                  d="M0,288L24,266.7C48,245,96,203,144,202.7C192,203,240,245,288,250.7C336,256,384,224,432,202.7C480,181,528,171,576,149.3C624,128,672,96,720,80C768,64,816,64,864,64C912,64,960,64,1008,58.7C1056,53,1104,43,1152,58.7C1200,75,1248,117,1296,112C1344,107,1392,53,1416,26.7L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                />
              </Svg>
              <Ionicons
                name="play-circle-outline"
                size={25}
                color="#112537"
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontFamily: "OpenSans-ExtraBold",
                  fontSize: 22,
                  color: "#001C37",
                }}
              >
                PLAY
              </Text>
            </TouchableOpacity>

            {/* MULTIPLAYER Button */}
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                paddingVertical: 15,
                marginVertical: 10,
                borderRadius: 30,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                overflow: "hidden",
                width: "60%",
                position: "relative",
              }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ position: "absolute", height: 100, width: "100%" }}
              >
                <Path
                  fill="#EB7171"
                  fillOpacity="1"
                  d="M0,32L102.9,192L205.7,64L308.6,224L411.4,192L514.3,256L617.1,128L720,256L822.9,160L925.7,288L1028.6,224L1131.4,256L1234.3,96L1337.1,256L1440,96L1440,0L1337.1,0L1234.3,0L1131.4,0L1028.6,0L925.7,0L822.9,0L720,0L617.1,0L514.3,0L411.4,0L308.6,0L205.7,0L102.9,0L0,0Z"
                />
              </Svg>
              <FontAwesome
                name="group"
                size={25}
                color="#112537"
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontFamily: "OpenSans-ExtraBold",
                  fontSize: 22,
                  color: "#001C37",
                }}
              >
                MULTIPLAYER
              </Text>
            </TouchableOpacity>

            {/* HOW TO PLAY Button */}
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                paddingVertical: 15,
                marginVertical: 10,
                borderRadius: 30,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                overflow: "hidden",
                width: "60%",
                position: "relative",
              }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none" // Ensures SVG scales proportionally
                style={{
                  position: "absolute",
                  top: 0, // Start the SVG at the top
                  left: 0,
                  bottom: 0,
                  right: 0,
                  height: "60", // Fill the height of the button
                  width: "100%", // Fill the width of the button
                }}
              >
                <Path
                  fill="#DFC461"
                  fillOpacity="1"
                  d="M0,32L17.1,58.7C34.3,85,69,139,103,144C137.1,149,171,107,206,112C240,117,274,171,309,192C342.9,213,377,203,411,208C445.7,213,480,235,514,224C548.6,213,583,171,617,170.7C651.4,171,686,213,720,218.7C754.3,224,789,192,823,197.3C857.1,203,891,245,926,256C960,267,994,245,1029,240C1062.9,235,1097,245,1131,224C1165.7,203,1200,149,1234,149.3C1268.6,149,1303,203,1337,202.7C1371.4,203,1406,149,1423,122.7L1440,96L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
                />
              </Svg>

              <FontAwesome
                name="gamepad"
                size={25}
                color="#112537"
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontFamily: "OpenSans-ExtraBold",
                  fontSize: 22,
                  color: "#001C37",
                }}
              >
                HOW TO PLAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal:30,
            marginTop:50
          }}
        >
          {/* Container for FOLLOW US */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Fontisto
              name={"rocket"}
              size={30}
              color={"white"}
              style={{ marginRight: 10 }}
            />
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 0.3,
                  width: 70,
                  alignItems: "center",
                  backgroundColor: "#112537",
                  borderRadius: 20,
                  borderColor: "white",
                  height: 23,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 10,
                    fontFamily: "OpenSans_Condensed-Regular",
                    lineHeight: 23,
                  }}
                >
                  FOLLOW US
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Container for MORE GAMES */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={pacmanImage}
              style={{
                height: 30,
                width: 30,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 0.3,
                  width: 70,
                  alignItems: "center",
                  backgroundColor: "#112537",
                  borderRadius: 20,
                  borderColor: "white",
                  height: 23,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 10,
                    fontFamily: "OpenSans_Condensed-Regular",
                    lineHeight: 23,
                  }}
                >
                  MORE GAMES
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
