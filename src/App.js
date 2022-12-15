import React from 'react';
import ProvideAuth from './views/ProvideAuth';
import AuthButton from './views/ProvideAuth';
import PublicPage from './views/ProvideAuth';
import LoginPage from './views/ProvideAuth';
import PublicPage from './views/ProvideAuth';
import ProtectedPage from './views/ProvideAuth';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <div>
            <AuthButton />

            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>

            <Switch>
              <Route path="/public">
                <PublicPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute path="/protected">
                <ProtectedPage />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
