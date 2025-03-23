import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import TestId from './Components/TestId'


const App=()=>{

return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/testid' element={<TestId />}/>
    </Routes>
  
  </BrowserRouter>
)

}
export default App
