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
			toValue: 360,
			duration: 2000
		}).start();
	};

	render() {
		const rotate = this.state.animation.interpolate({
			inputRange: [0, 360],
			outputRange: ["0deg", "3600deg"]
		});

		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.pressHandler}>
					<Animated.View
						style={{
							width: 150,
							height: 150,
							backgroundColor: "pink",
							transform: [{ rotate }]
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
