import AddDevices from './Components/AddDevices';
import AuthorisePage from './Components/AuthorisePage'
import ZkTecoHome from './Components/ZkTecoHome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DeviceDetails from './Components/DeviceDetails';

import AmazonHome from './Components/AmazonHome';
import UpdateDevice from './Components/UpdateDevice';



function App() {

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <AuthorisePage/>
          </Route>
          <Route path="/devices/zkteco">
            <ZkTecoHome/>
          </Route>
          <Route path="/devices/amazon">
            <AmazonHome/>
          </Route>
          <Route path="/device/:id/:title">
            <DeviceDetails/>
          </Route>
          <Route path="/device">
          <AddDevices/>
          </Route>
          <Route path="/update/:id1">
          <UpdateDevice/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
