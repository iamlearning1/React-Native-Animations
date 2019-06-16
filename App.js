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
		translate: new Animated.Value(0)
	};

	pressHandler = () => {
		Animated.timing(this.state.translate, {
			toValue: 300,
			duration: 1500
		}).start(() => {
			Animated.timing(this.state.translate, {
				toValue: 0,
				duration: 1000
			}).start();
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.pressHandler}>
					<Animated.View
						style={{
							width: 100,
							height: 100,
							backgroundColor: "orange",
							transform: [
								{
									translateY: this.state.translate
								}
							]
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
