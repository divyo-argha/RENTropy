import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import SignUp from "../Signup/SignUp"
import About from "../about/About"
import Blog from "../blog/Blog"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import Contact from "../contact/Contact"
import Home from "../home/Home"
import LogIn from "../login/Login"
import Pricing from "../pricing/Pricing"
import Services from "../services/Services"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/log-in' component={LogIn} />
          <Route exact path='/sign-up' component={SignUp} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
