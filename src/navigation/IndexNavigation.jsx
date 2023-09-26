import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomNavigation/BottomTabNavitagation'
import LoginNavigator from './loginNavigation/LoginNavigation'

const IndexNavigation = () => {
  const session = useSelector(state => state.user.session)
  return (
    <NavigationContainer>
        {session ? <BottomTabNavigator/> : <LoginNavigator/>}
    </NavigationContainer>
  )
}

export default IndexNavigation