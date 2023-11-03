import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    containerNameAndPhone:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    containerName:{
        width: "50%",
        paddingLeft: 20
    },
    containerPhone:{
        width: "50%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignContent: "center",
        paddingRight: 20
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
    },
    number:{
        fontSize: 18,
    },
    iconPhone:{
        marginRight:10,
        color: colors.quaternary
    },
    bajaContainer:{
        marginVertical: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: 'center'
    },
    bajaPrssable:{
        width: '30%',
    },
    bajaText:{
        textAlign: 'center',
        width: '100%',
        borderWidth:1,
        borderRadius:5,
        borderColor: colors.secondary,
        padding:5,
        fontWeight: 'bold'
    }
});

export default styles;