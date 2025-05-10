import { Pressable, StyleSheet, Text } from "react-native";

const LemonButton = ({onPress, children, inactiveButton}) => {
    return (
        <Pressable
        style={[styles.buttonWrapper, inactiveButton ? styles.inactiveButtonStyle : null]}
        onPress={onPress}
        >
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  inactiveButtonStyle: {
    backgroundColor: "#CECECE",
  },
   text: {
    fontSize: 16,
    color: 'white',
  }
});

export default LemonButton;