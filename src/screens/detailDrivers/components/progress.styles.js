import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerGrafic: {
        marginTop: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Monserrat"
    },
    svg: {
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    viewPackage:{
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20
    },
    viewPackageContent:{
        width:150,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
    },
    viewPackageContentIcon:{
        paddingRight: 10
    },
    viewPackageContentText:{
        paddingLeft: 10
    }
  });
  

export default styles