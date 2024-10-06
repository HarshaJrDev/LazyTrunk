import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  Switch,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import RazorpayCheckout from "react-native-razorpay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "react-native-vector-icons";
import { BlurView } from "expo-blur"; 
// For navigation

const bgImage = require("../assets/Bg.jpg");

const DeckScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigation = useNavigation(); // Initialize navigation

  const loadFonts = async () => {
    await Font.loadAsync({
      "OpenSans-ExtraBold": require("../assets/fonts/Open_Sans/static/OpenSans-ExtraBold.ttf"),
      "Montserrat-Bold": require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
      "OpenSans_Condensed-Regular": require("../assets/fonts/Open_Sans/static/OpenSans_Condensed-Regular.ttf"),
      "Montserrat-Regular": require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    });
    setFontsLoaded(true);
  };
  const RummyCard = ({ card, color, image }) => (
    <View
      style={{
        width: 60, // Set width to 100
        height: 80, // Set height to 100
        backgroundColor: color,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#333",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
      }}
    >
      <Text
        style={{
          fontSize: 18, // Slightly reduce font size for smaller cards
          fontWeight: "bold",
        }}
      >
        {card}
      </Text>

      {image && (
        <Image resizeMode="contain"
          source={{ uri: image }}
          style={{ width: 40, height: 40 }}
        />
      )}
    </View>
  );
  const cards = [
    { value: "", color: "#1A3B5B" }, // Light Red
    {
      value: "",
      color: "#D5F769",
      image:
        "https://www.pinclipart.com/picdir/big/121-1211086_hot-lips-clip-art.png",
    }, // Light Blue
    { value: "", color: "#477A34" }, // Light Green
  ];

  // Check if the user is subscribed from AsyncStorage
  const checkSubscription = async () => {
    const subscriptionStatus = await AsyncStorage.getItem("isSubscribed");
    setIsSubscribed(subscriptionStatus === "true");
  };

  useEffect(() => {
    loadFonts();
    checkSubscription(); // Check subscription on component mount
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  // Razorpay Payment Handling
  const handleSubscription = async () => {
    const options = {
      description: "Subscribe to Unlock Decks",
      image: "https://example.com/your_logo", // Add your logo
      currency: "INR",
      key: "rzp_test_vCJ5UQSKVbMxKd", // Replace with your Razorpay key
      amount: "1", // Amount in paise (e.g., 50000 paise = 500 INR)
      name: "LazyTrunk",
      prefill: {
        email: "user@example.com",
        contact: "9191919191",
        name: "Test User",
      },
      theme: { color: "#F37254" },
    };

    try {
      const data = await RazorpayCheckout.open(options);
      if (data.razorpay_payment_id) {
        // Payment successful, unlock the deck
        await AsyncStorage.setItem("isSubscribed", "true");
        setIsSubscribed(true);
        Alert.alert(
          "Success",
          "Subscription successful! You have unlocked the deck."
        );
      }
    } catch (error) {
      Alert.alert("Payment failed", "Subscription failed. Please try again.");
    }
  };

  // Handle click on the locked deck
  const handleDeckClick = () => {
    if (isSubscribed) {
      navigation.navigate("Relationship"); // Replace with your target screen
    } else {
      Alert.alert("Access Denied", "Please subscribe to unlock this deck.");
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground 
        style={{ flex: 1, width: "100%", height: "100%",position:"relative" }}
        source={bgImage}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <TouchableOpacity onPress={()=>navigation.navigate("Setting")} style={{ justifyContent: "space-around" }}>
            <Ionicons name="settings-sharp" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: "space-around" }}>
            <AntDesign name="infocirlce" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Text
            style={{
              alignItems: "center",
              fontSize: 35,
              color: "#fff",
              fontFamily: "Montserrat-Bold",
              fontWeight: "800",
            }}
          >
            CHOOSE DECK
          </Text>
        </View>

        <View
  style={{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    flexDirection: "row",
    columnGap: 20,
  }}
>
  {/* First deck */}
  <View
    style={{
      backgroundColor: "#fff",
      height: 180, // Increase height to make space for text
      width: 110,
      borderRadius: 20,
      overflow: "hidden",
    }}
  >
    <TouchableOpacity style={{ width: "100%", height: "100%" }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: 130, width: "100%" }}
      >
        <Path
          fill="#EB7171"
          fillOpacity="1"
          d="M0,192L120,165.3C240,139,480,85,720,90.7C960,96,1200,160,1320,192L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        />
      </Svg>
      <Image
        style={{
          height: 220,
          width: 130,
          zIndex: 1,
          bottom:150,
          marginLeft: -15,
        }}
        source={{
          uri: "https://th.bing.com/th/id/R.26a632a252f3201ffbb223d3da1a841f?rik=CFt6SaGKwUt%2fvg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fdance-team-silhouette%2fdance-team-silhouette-21.png&ehk=TRe9ZL1nc8x%2bTO8bSwGtAy2OE1D3jprHJEMi415EG10%3d&risl=&pid=ImgRaw&r=0",
        }}
        resizeMode="contain"
      />

      <Text
      style={{
       bottom:220,
        color: "#1A3B5B",
        fontWeight: "bold",
        fontSize: 15,
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 6 },
        elevation: 5,
        paddingLeft:10
      }}
    >
      PARTY AND
      </Text>
      <Text
      style={{
       bottom:220,
        color: "#1A3B5B",
        fontWeight: "bold",
        fontSize: 15,
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 6 },
        elevation: 5,
        paddingLeft:40
      }}
    >
   FUN
      </Text>
    </TouchableOpacity>
  </View>

  {/* Second deck */}
  <View
    style={{
      backgroundColor: "#fff",
      height: 180, // Increase height to make space for text
      width: 110,
      borderRadius: 20,
      position: "relative",
    }}
  >
    <TouchableOpacity style={{ borderRadius: 20, overflow: "hidden" }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: 130, width: "100%" }}
      >
        <Path
          fill="#D5F769"
          fillOpacity="1"
          d="M0,192L120,165.3C240,139,480,85,720,90.7C960,96,1200,160,1320,192L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        />
      </Svg>
      <Image
        style={{
          height: 220,
          width: 110,
          zIndex: 1,
     bottom:150,
          marginLeft: -5,
        }}
        source={{
          uri: "https://www.pngall.com/wp-content/uploads/2016/03/Food-Free-Download-PNG.png",
        }}
        resizeMode="contain"
      />
      <Text
      style={{
       bottom:220,
        color: "#1A3B5B",
        fontWeight: "bold",
        fontSize: 15,
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 6 },
        elevation: 5,
        paddingLeft:30
      }}
    >
      FOOD
      </Text>
    </TouchableOpacity>
  </View>

  {/* Third deck with lock/unlock */}
  <View
      style={{
        backgroundColor: "#fff",
        height: 180, // Increased height
        width: 110,
        borderRadius: 20,
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{ borderRadius: 20, overflow: "hidden" }}
        onPress={handleDeckClick}
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: 130, width: "100%" }}
        >
          <Path
            fill="#EB7171"
            fillOpacity="1"
            d="M0,192L120,165.3C240,139,480,85,720,90.7C960,96,1200,160,1320,192L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
        </Svg>

        {/* Blur Effect */}
        {!isSubscribed && (
          <BlurView
            intensity={80}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2, // Ensure blur stays above the image
              borderRadius: 20,
            }}
          />
        )}

        <Image
          style={{
            height: 100,
            width: 110,
            zIndex: 1,
            marginTop: -100,
          }}
          source={require("../assets/vecteezy_lovers-couple-in-heart_24098009.png")}
          resizeMode="contain"
        />

        <Text
          style={{
            color: "#1A3B5B",
            fontWeight: "bold",
            fontSize: 12,
            shadowOpacity: 0.6,
            shadowOffset: { width: 0, height: 6 },
            elevation: 5,
            paddingLeft: 7,
            zIndex: 3, // Ensure text stays above the blur
          }}
        >
          RELATIONSHIPS
        </Text>
      </TouchableOpacity>

      {/* Centered Lock Icon */}
      <View
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: [{ translateX: -15 }, { translateY: -15 }],
          zIndex: 3, // Ensure lock stays on top
        }}
      >
        {isSubscribed ? (
        null
        ) : (
         null
        )}
      </View>
    </View>
</View>


        {/* Subscribe button */}
        {!isSubscribed && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <TouchableOpacity
              onPress={handleSubscription}
              style={{
                backgroundColor: "#28a745",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>
                Subscribe to Unlock
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
            flexDirection: "row",
            columnGap: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#313131",
              height: 35,
              width: 100,
              borderRadius: 22,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0.9,
              borderColor: "#fff",
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>PLAY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#6A7A34",
              height: 35,
              width: 100,
              borderRadius: 22,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0.9,
              borderColor: "#fff",
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>PLAY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#B65656",
              height: 35,
              width: 100,
              borderRadius: 22,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0.9,
              borderColor: "#fff",
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>BUY NOW</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            width: "95%",
            height: 110,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity style={{ borderRadius: 20, overflow: "hidden" }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{ height: 90, width: "100%" }}
            >
              <Path
                fill="#EB7171"
                fillOpacity="1"
                d="M0,288L40,261.3C80,235,160,181,240,165.3C320,149,400,171,480,176C560,181,640,171,720,144C800,117,880,75,960,90.7C1040,107,1120,181,1200,224C1280,267,1360,277,1400,282.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              />
            </Svg>
          </TouchableOpacity>

          {/* Lock Icon and Texts in one row */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: -60,
              paddingHorizontal: 20,
            }}
          >
            <Feather name={"lock"} size={40} color={"#1A3B5B"} />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  color: "#1A3B5B",
                  fontWeight: "bold",
                  fontSize: 18,
                  shadowOpacity: 0.6,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 5,
                }}
              >
                EXPLORE
              </Text>
              <Text
                style={{
                  color: "#1A3B5B",
                  fontWeight: "bold",
                  fontSize: 16,
                  shadowOpacity: 0.6,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 5,
                }}
              >
                PREMIUM DECKS
              </Text>
              <TouchableOpacity style={{}} >

              <View style={{backgroundColor:"#1A3B5B",borderRadius:10}}>
 
                <Text style={{color:"#ffff"}} >Starting From ₹120.00</Text>

            </View> 

              </TouchableOpacity>
             
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 100,
                height: 15, // Slightly reduce the container height
              }}
            >
              {/* Left Card */}
              <View
                style={{
                  position: "absolute",
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ translateX: -20 }, { rotate: "-10deg" }], // Adjust position and rotation for smaller cards
                }}
              >
                <RummyCard card={cards[0].value} color={cards[0].color} />
              </View>

              {/* Middle Card */}
              <View
                style={{
                  position: "absolute",
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1, // Bring the middle card to the front
                }}
              >
                <RummyCard
                  card={cards[1].value}
                  color={cards[1].color}
                  image={cards[1].image}
                />
              </View>

              {/* Right Card */}
              <View
                style={{
                  position: "absolute",
                  width: 10,
                  height: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ translateX: 20 }, { rotate: "10deg" }], // Adjust position and rotation for smaller cards
                }}
              >
                <RummyCard card={cards[2].value} color={cards[2].color} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#B65656",
              height: 20,
              width: 70,
              borderRadius: 22,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#fff",
              justifyContent: "flex-end",
              alignSelf: "flex-end",
              marginRight: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize:10,
                marginBottom:2
              
              }}
            >
              EXPLORE
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "OpenSans-ExtraBold",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            F I L T E R S
          </Text>
          <View
            style={{
              backgroundColor: "#7CC163",
              width: "95%",
              borderRadius: 20,
              height: 60,
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={{ marginTop: 15, paddingLeft: 30 }}>
              <Image
                style={{ height: 30, width: 30 }}
                source={{
                  uri: "https://th.bing.com/th/id/R.58971472906c3c2942fc50c2f97827f3?rik=pqWCfG%2b1BqnZzA&riu=http%3a%2f%2fclipart-library.com%2fnewhp%2f11-111392_pix-for-tongue-smiley-face-funny-smiley-faces.png&ehk=Q0%2fbbeADCaSejMwHtmDCmVsQQxtj8R6HRONoZs4uXZY%3d&risl=&pid=ImgRaw&r=0",
                }}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  marginTop: 15,
                  color: "#1A3B5B",
                  fontWeight: "bold",
                  fontSize: 15,
                  shadowOpacity: 0.6,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 5,
                }}
              >
                FUNNY
              </Text>
              <Text style={{ color: "#fff" }}>110 CARDS</Text>
            </View>
            <View style={{ justifyContent: "center", paddingLeft: 130 }}>
              <View
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 20,
                }}
              >
                <Switch
                  thumbColor={""}
                  turnedOn={true}
                  trackColor={"#7CC163"}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 20 }}>
          <View
            style={{
              backgroundColor: "#DDB5B8",
              width: "95%",
              borderRadius: 20,
              height: 60,
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={{ marginTop: 5, paddingLeft: 30 }}>
              <Image
                style={{ height: 50, width: 40 }}
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/015/116/014/original/emotion-sad-boy-male-character-emotion-png.png",
                }}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  marginTop: 15,
                  color: "#1A3B5B",
                  fontWeight: "bold",
                  fontSize: 15,
                  shadowOpacity: 0.6,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 5,
                }}
              >
                AWKWARD
              </Text>
              <Text style={{ color: "#fff" }}>70 CARDS</Text>
            </View>
            <View style={{ justifyContent: "center", paddingLeft: 110 }}>
              <View
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 20,
                }}
              >
                <Switch
                  thumbColor={""}
                  turnedOn={true}
                  trackColor={"#7CC163"}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 20 }}>
          <View
            style={{
              backgroundColor: "#B4CF5C",
              width: "95%",
              borderRadius: 20,
              height: 60,
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={{ marginTop: 5, paddingLeft: 30 }}>
              <Image
                style={{ height: 50, width: 40 }}
                resizeMode="contain"
                source={{
                  uri: "https://th.bing.com/th/id/R.5ecbaea5f7329259f266b66f266c750f?rik=VUb8Vg1s327wUw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f15%2fEggplant-Brinjal-PNG-Photos.png&ehk=scKYcRNLqCiX7PH%2fNJZtf7NfbskrXyxZH9tjdTVW4%2bw%3d&risl=&pid=ImgRaw&r=0",
                }}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  marginTop: 15,
                  color: "#1A3B5B",
                  fontWeight: "bold",
                  fontSize: 15,
                  shadowOpacity: 0.6,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 5,
                }}
              >
                ADULT
              </Text>
              <Text style={{ color: "#fff" }}>90 CARDS</Text>
            </View>
            <View style={{ justifyContent: "center", paddingLeft: 120 }}>
              <View
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 20,
                }}
              >
                <Switch
                  thumbColor={""}
                  turnedOn={true}
                  trackColor={"#B4CF5C"}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default DeckScreen;
