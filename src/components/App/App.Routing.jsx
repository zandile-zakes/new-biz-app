import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom'

import {Demo as ButtonDemo} from '../Button/Button.Demo'
import {Demo as CheckboxDemo} from '../Checkbox/Checkbox.Demo'
import {Demo as ImageDemo} from '../Image/Image.Demo'
import {Demo as InputDemo} from '../Input/Input.Demo'
import {Demo as LayoutDemo} from '../Layout/Layout.Demo'
import {Demo as LinkDemo} from '../Link/Link.Demo'
import {Demo as TextDemo} from '../Text/Text.Demo'
import {Demo as AlertDemo} from '../Alert/Alert.Demo'

import { LandingPage } from '../../views/LandingPage'
import { NewAccount } from '../../views/NewAccount'
import { ResetPassword } from '../../views/ResetPassword'
import { SignIn } from '../../views/SignIn' 

const Demos = () => {
  return(
  <Switch>
        <Route path='/demo/button'>
          <ButtonDemo />
        </Route>

        <Route path='/demo/checkbox'>
          <CheckboxDemo />
        </Route>

        <Route path='/demo/image'>
          <ImageDemo />
        </Route>

        <Route path='/demo/input'>
          <InputDemo />
        </Route>

        <Route path='/demo/layout'>
          <LayoutDemo />
        </Route>

        <Route path='/demo/link'>
          <LinkDemo /> 
        </Route>

        <Route path='/demo/text'>
          <TextDemo />
        </Route>

        <Route path='/demo/alert'>
          <AlertDemo />
        </Route>

      </Switch>
  )
}

const Auth = () => {
  return (
    <Switch>
        <Route path='/auth/register'>
          <NewAccount />
        </Route>

        <Route path='/auth/signIn'>
          <SignIn />
        </Route>

        <Route path='/reset'>
          <ResetPassword />
        </Route>
      </Switch>
  )
}


export const Routing = () => {
  return (
    <HashRouter>
      <Switch>
      <Route path='/demo'>
          <Demos />
        </Route>

        <Route path='/auth'>
          <Auth />
        </Route>

        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </HashRouter>
  )
}
export default Routing;
