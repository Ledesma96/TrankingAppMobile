import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomNavigation/BottomTabNavitagation'
import LoginNavigator from './loginNavigation/LoginNavigation'

const IndexNavigation = () => {
  const  token = useSelector(state => state.user.token)
  return (
    <NavigationContainer>
        {token ? <BottomTabNavigator/> : <LoginNavigator/>}
    </NavigationContainer>
  )
}

export default IndexNavigation