import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap"
import React from "react"
import './App.css'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import TopCols from './components/TopColToday/TopColToday'
import HotCollections from "./components/HotCollections/HotCollections"
import AllCollections from "./components/AllCollections/AllCollections"
import NavigationBar from "./components/Navbar/NavigationBar"
import Watchlist from "./components/Watchlist/Watchlist"
import Collection from "./components/Collection/Collection"
import NFTCard from "./components/NFTCard/NFTCard"
import ErrorPage from "./components/ErrorPage/ErrorPage"
import Footer from './components/Footer/Footer'

function App() {
  return (

    // Header
    <>
      <Router >
        <Switch>
          <Route path="/" exact>
            <NavigationBar />

            {/* Top Collections  */}
            <div className="container">
              <div className="row">
                <TopCols />
              </div>
            </div>

            {/* Hot Collections  */}
            <div className="container">
              <HotCollections />
            </div>

            <div className="container">
              <div className="row mb-4">
                <Watchlist />
              </div>
            </div>

            <Footer />

          </Route>
          <Route exact path="/top-collections" >
            <AllCollections />
          </Route>


          <Route path="/collections/:id">
            <Collection />
          </Route>

          <Route path="/assets/:id/:token">
            <NFTCard />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>


    </>

  );
}

export default App
