import { LoginContext } from './Components/Context/LoginContext';
import Header from './Components/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <LoginContext>
      <Header/>
    </LoginContext>
    </>
  );
}

export default App
