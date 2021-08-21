import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import FileUpload from './components/Upload/FileUpload';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';


function App() {
  
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/upload'>
          <FileUpload />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
