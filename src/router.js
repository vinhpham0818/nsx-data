import React from 'react'
import { Switch, Route} from 'react-router-dom'
import HomePage from "./pages/home/home"
import ProductPage from "./pages/product/product"

const MainRouter = () => (
    <main>
        <Switch>
            <Route path="/" component={HomePage}></Route>
            <Route path="/product" component={ProductPage}></Route>
        </Switch>
    </main>
)

export default MainRouter