
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UsercontextProvider from './context/UsercontextProvider'

function App() {
  

  return (
    <>
    {/* v need wrap all the components inside the UsercontextProvider 
    so that they can access the properties */}
     <UsercontextProvider>
      <Login/>
      <Profile/>
     </UsercontextProvider>
    </>
  )
}

export default App
