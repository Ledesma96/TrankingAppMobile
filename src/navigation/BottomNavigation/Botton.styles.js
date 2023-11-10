import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const styles = StyleSheet.create({
    container:{
      backgroundColor: colors.primary,
      height: 55,
    },
    icons:{
      color: colors.quaternary,
    },
    back:{
      marginLeft: 16
    },
    disabled:{
      display: 'none'
    }
})

export default styles;