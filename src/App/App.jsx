import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../Navbar/NavBar';
import '../Navbar/NavBar.css';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

function App () {
//    constructor(props) {
//        super(props);
//
//        history.listen((location, action) => {
//            // clear alert on location change
//            this.props.clearAlerts();
//        });
//    }

//    render() {
//        const { alert } = this.props;
        return (
            <div className='App'>
                <Navbar/>
            </div>
//            <div className="jumbotron">
//               <div className="container">
 //                   <div className="col-sm-8 col-sm-offset-2">
//                        {alert.message &&
//                            <div className={`alert ${alert.type}`}>{alert.message}</div>
//                        }
 //                       <Router history={history}>
//                            <Switch>
//                                <PrivateRoute exact path="/" component={HomePage} />
//                                <Route path="/login" component={LoginPage} />
//                                <Route path="/register" component={RegisterPage} />
//                                <Redirect from="*" to="/" />
//                           </Switch>
//                        </Router>
//                    </div>
//                </div>
//            </div>
        );
    }
//}

//function mapState(state) {
//    const { alert } = state;
//    return { alert };
//}

//const actionCreators = {
//    clearAlerts: alertActions.clear
//};

//const connectedApp = connect(mapState, actionCreators)(App);
export default App;