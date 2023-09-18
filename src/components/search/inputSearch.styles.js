import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    inputContainer: {
        marginTop:10,
        marginLeft:20,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        position:"fixed",
        zIndex:2,
        backgroundColor:"rgba(255, 255, 255, 0.8)"
      },
    input: {
        width: 230,
        height: 50,
        marginRight:15,
        fontSize: 17,
        paddingLeft: 12,
        marginLeft:10,
        borderBottomWidth:1,
        borderColor:colors.primary,
      }
})

export default styles