import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header'
import Footer from './components/Footer'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/css/style.scss';
import { SiteContext } from './contexts/SiteContext'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Referral from './pages/Referral'
import Faq from './pages/Faq';

function Wrap() {
    return (
        <SiteContext>
            <Router>
                <Header />
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={Referral} />
                <Route exact path="/faq" component={Faq} />
                {/* <SectionBrand /> */}
                <Footer />

            </Router>
        </SiteContext>
    );
}

ReactDOM.render(<Wrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
