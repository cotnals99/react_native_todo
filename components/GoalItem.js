import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
      <View style={styles.goalItem}>
        {/* <Text style={styles.goalText}>{itemData.item.text}</Text> */}
        <Pressable
          android_ripple={{ color: "#210644" }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    // minHeight: 50,
    justifyContent: "center",
  },
  pressedItem: {
    opacity: 0.5,
    // backgroundColor: "#210644",
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});
