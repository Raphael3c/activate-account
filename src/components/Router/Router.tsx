import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ActivateAccount } from 'features/ActivateAccount/pages/ActivateAccount'


export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ActivateAccount}/>        
      </Switch>
    </BrowserRouter>
  )
}