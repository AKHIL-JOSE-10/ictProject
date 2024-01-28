import './App.css';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CreateUsers } from './components/create';
import { UpdateUsers } from './components/update';
import { Users } from './components/users';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUsers/>}></Route>
        <Route path='/update/:id' element={<UpdateUsers/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
