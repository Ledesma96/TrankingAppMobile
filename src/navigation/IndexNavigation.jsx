import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomNavigation/BottomTabNavitagation'
import LoginNavigator from './loginNavigation/LoginNavigation'
import { useEffect } from 'react'
import { fetchSession } from '../db'
import { login } from '../features/user/userSlice'

const IndexNavigation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);


  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession()
        if (session.rows.length) {
          console.log(session.rows);
          const usuario = session.rows._array[0]
          dispatch(login(usuario))
        }
      } catch (error) {
        console.log('Error en obtener ususario', error.message)
      }
    })()
  }, [])
  console.log(user);
  return (
    <NavigationContainer>
        {user ? <BottomTabNavigator/> : <LoginNavigator/>}
    </NavigationContainer>
  )
}

export default IndexNavigation