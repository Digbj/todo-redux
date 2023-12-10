import './App.css'
import{BrowserRouter as Router,Route,Routes, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import RegForm from './components/form'
import User from './components/user'

function App() {

  return (
    <Provider store={appStore}>
      <Router>
      <Routes>
        <Route path='/' element={ <RegForm/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
     
      </Router>
    </Provider>
     
     
  )
}

export default App
