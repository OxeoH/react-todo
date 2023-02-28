import React from 'react'
import { useStore } from '../../store'
import AuthBlock from '../AuthPage/AuthPage'
import { WelcomeBlock } from '../WelcomeBlock'

export const WelcomePage = () => {

    const {userStore} = useStore()
  return (<>
        {!userStore.isAuth ? <AuthBlock/> : <WelcomeBlock/>}
    </>
  )
}