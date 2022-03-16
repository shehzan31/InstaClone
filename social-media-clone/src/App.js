import './css/App.css';
import './css/SignUp.css';
import './css/Login.css';
import AllRoutes from './Routes/Route';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;
