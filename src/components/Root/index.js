import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../app/App'

export const Root = () => {
    return <Router>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Router>

}