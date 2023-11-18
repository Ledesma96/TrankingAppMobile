import React from 'react'
import { View } from 'react-native'
import { Modal as AlertModal} from 'react-native'
import styles from './modalAlert.styles.js'

const ModalAlert = ({children}) => {
  return (
    <AlertModal
        animationType="fade" 
        transparent={true}  
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500} 
    >
        <View style={styles.modalContainer}>
            {children}
        </View>
    </AlertModal>
  )
}

export default ModalAlert