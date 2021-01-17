import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateEmployeeScreen from './screens/create-employee/CreateEmployeeScreen'
import ListEmployeeScreen from './screens/list- employee/ListEmployeeScreen'

function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/tabela' component={ListEmployeeScreen} />
                <Route path='/' exact component={CreateEmployeeScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes