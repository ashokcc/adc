import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Loading from './components/loading';
import Header from './app/header';
import Footer from './app/footer';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Shop = lazy(() => import('./pages/shop'));


const Routes = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Header />
                <Box>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/shop" component={Shop} />
                    </Switch>
                </Box>
                <Footer />
            </Suspense>
        </Router>
    )
}
export default Routes;