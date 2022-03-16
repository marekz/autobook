import { StyleSheet } from "react-native";

const podstawowyRozmiarCzcionki = 24;

const styles = StyleSheet.create({
  bigText: { fontSize: podstawowyRozmiarCzcionki + 8, color: "#FFFFFF" },
  mainText: { fontSize: podstawowyRozmiarCzcionki, color: "#FFFFFF" }
});

// Do użycia w innym miejscu...
styles["podstawowyRozmiarCzcionki"] = podstawowyRozmiarCzcionki;

export default styles;
