import React from 'react'
import { Route } from "react-router-dom"

export default function AppliedRoute({ component: C, appProps, ...rest }) {
    console.log(appProps)
    return (
      <Route {...rest} render={props => <C {...props} {...appProps} />} />
    )
}