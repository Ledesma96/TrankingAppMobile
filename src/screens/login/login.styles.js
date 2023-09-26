import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInputs:{
        width: "100%",
        justifyContent:'center',
        alignItems: 'center'
    },
    input:{
        width: "75%",
        height: 50,
        borderBottomWidth:1,
        borderColor: colors.secondary,
        paddingLeft: 10,
        marginTop: 10,
    },
    placecholderLogin:{
        marginTop: 20,
        backgroundColor: colors.quaternary,
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textLogin:{
        color: colors.quinary,
        fontSize: 18,
        marginLeft: 10
    },
    placecholderRegister: {
        flexDirection: "row",
        marginTop: 20,
    },
    textRegister:{
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10
    },
    textRegisterRegister:{
        color: colors.quaternary,
        fontSize: 18,
        marginLeft: 10
    }
})

export default styles;