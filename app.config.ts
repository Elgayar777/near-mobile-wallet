import { ExpoConfig, ConfigContext } from "@expo/config";
import "dotenv/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "CKBull",
    slug: "CKBull",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/ckbull-icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
    },
    updates: {
        fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        supportsTablet: true,
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff",
        },
    },
    web: {
        favicon: "./assets/images/favicon.png",
    },
});
