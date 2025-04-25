import "dotenv/config";

export default {
  expo: {
    entryPoint: "./App.js",
    name: "Uber_clone",
    slug: "Uber_clone",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_APIKEY, // ✅ for iOS
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_MAPS_APIKEY, // ✅ for Android
        },
      },
    },
    web: {
      favicon: "./assets/favicon.png",
      bundler: "metro",
    },
    plugins: [
      [
        "expo-font",
        {
          fonts: [
            "./node_modules/@react-native-vector-icons/<font-package>/fonts/<font-file>.ttf",
            "./node_modules/@react-native-vector-icons/simple-line-icons/fonts/SimpleLineIcons.ttf",
          ],
        },
      ],
      "react-native-maps",
    ],
  },
};
