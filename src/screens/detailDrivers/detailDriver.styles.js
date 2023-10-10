import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    containerView:{
        width: "100%",
        paddingLeft: 20
    },
    containerViewTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20
    },
    containerViewSubTitle: {
        fontSize: 15,
        paddingLeft: 5,
        marginTop: 5
    },
    containerViewImg:{
        alignItems: "center",
        marginTop: 30,
    },
    containerImg:{
        width: 350,
        height: 250,
        borderRadius: 15,
        overflow: "hidden",
    }
});

export default styles;