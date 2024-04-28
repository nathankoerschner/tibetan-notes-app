module.exports = {
	expo: {
		icon: "./assets/icon.png",
		name: "Tibetan Dictionary",
		slug: "tibetan-notes-app",
		version: "1.0.0",
		build: {
			preview: {
				distribution: "internal",
			},
		},
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#B31D1D",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
			bundleIdentifier: "com.nathankoerschner.tibetannotesapp",
			googleServicesFile:
				process.env.GOOGLE_SERVICE_INFO_PLIST ?? "./GoogleService-Info.plist",
		},
		android: {
			googleServicesFile:
				process.env.GOOGLE_SERVICES_JSON ?? "./google-services.json",
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
			package: "com.nathankoerschner.tibetannotesapp",
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		plugins: [
			"@react-native-firebase/app",
			[
				"expo-build-properties",
				{
					ios: {
						useFrameworks: "static",
					},
				},
			],
		],
		extra: {
			eas: {
				projectId: "40eb841b-0961-418b-a478-1a935869dce4",
			},
		},
		owner: "nathankoerschner",
	},
};
