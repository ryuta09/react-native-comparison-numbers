import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
