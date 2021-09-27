
import { Route, Switch } from 'react-router-dom'
import AnimalCrudMain from '../AnimalList/AnimalCrudMain'
import App from './App'


function Routing() {

    return (

        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/admin' component={AnimalCrudMain} />
            </Switch>

        </div>



    );
}

export default Routing;


