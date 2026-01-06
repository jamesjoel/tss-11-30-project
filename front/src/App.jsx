import AllRoutes from './routes/AllRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import {isLoggedIn} from './redux/AuthSlice'
import {getAllByUserIdServer} from './redux/CartSlice'

const App = () => {
  let dispatch = useDispatch();
  if(localStorage.getItem("user_access")){
    dispatch(isLoggedIn());
    dispatch(getAllByUserIdServer());

  }

  return (
    <>
    <Header />
    
      
        <AllRoutes /> 

      
      
    
    <Footer />
    </>
  )
}

export default App