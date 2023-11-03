import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    blurContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    modalContent: {
        backgroundColor:"white",
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    modalForm:{

    },
    inputs:{
        width: 200,
        height: 50,
        borderBottomWidth:1,
        borderColor: colors.secondary,
        paddingLeft: 10,
        marginTop: 10,
    },
    modalContainerButton:{
        flexDirection:"row-reverse"
    },
    modalButtonConfirm: {
        padding:10,
        width:100,
        borderRadius:10,
        margin: 15,
        backgroundColor:"green"
    },
    modalButtonCancel:{
        padding:10,
        width:100,
        borderRadius:10,
        margin:15,
        backgroundColor:"#FF4500"
    },
    modalButtonText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold"
    }
})
export default styles