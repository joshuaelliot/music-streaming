
import './App.css'
import AppRouter from './routes/AppRouter'
import {AuthProvider} from "./context/AuthContext"

function App() {


  return (
    <>
    <AuthProvider>
    <AppRouter></AppRouter>
    </AuthProvider>
    </>
  )
}

export default App
