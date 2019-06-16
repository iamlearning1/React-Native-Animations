import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Animated,
	TouchableWithoutFeedback
} from "react-native";

export default class App extends Component {
	state = {
		animation: new Animated.Value(0)
	};

	pressHandler = () => {
		Animated.timing(this.state.animation, {
			toValue: 10,
			duration: 2000
		}).start();
	};

	render() {
		const viewBg = this.state.animation.interpolate({
			inputRange: [0, 10],
			outputRange: ["rgba(212, 45, 89, 1)", "rgba(89, 45, 212, 1)"]
		});

		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.pressHandler}>
					<Animated.View
						style={{
							width: 150,
							height: 150,
							backgroundColor: viewBg
						}}
					/>
				</TouchableWithoutFeedback>
				<Text>Hello</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
