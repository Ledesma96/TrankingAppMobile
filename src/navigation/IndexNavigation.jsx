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
  const { user, localId } = useSelector(state => state.user);


  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession()
        console.log('Esta es la sesion', session)
        if (session.rows.length) {
          const usuario = session.rows._array[0]
          dispatch(login(usuario))
        }
      } catch (error) {
        console.log('Error en obtener ususario', error.message)
      }
    })()
  }, [])

  return (
    <NavigationContainer>
        {user ? <BottomTabNavigator/> : <LoginNavigator/>}
    </NavigationContainer>
  )
}

export default IndexNavigation