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
		dimensions: new Animated.Value(150)
	};

	pressHandler = () => {
		Animated.timing(this.state.dimensions, {
			toValue: 0,
			duration: 2000
		}).start();
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.pressHandler}>
					<Animated.View
						style={{
							backgroundColor: "orange",
							width: 150,
							height: this.state.dimensions
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
