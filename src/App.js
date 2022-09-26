import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './COMPONENTS/Admin/Home'
import Login from './COMPONENTS/Login'
import Sidebar from './COMPONENTS/Sidebar'
import Users from './COMPONENTS/Admin/Users'
import TaskList from './COMPONENTS/Admin/TaskList'
import Tasks from './COMPONENTS/Admin/Tasks'
import {useSelector} from 'react-redux'

function App() {
  // Use Selector - getting the value
  const status = useSelector(state => state.user)

  console.log(status)
  return (
    <Router>
      <Routes>
        {/* Admin Home Routes */}
        <Route path='/dashboard' element={<><Sidebar/><Home/></>}/>
        <Route path='/dashboard/users' element={<><Sidebar/><Users/></>}/>
        <Route path='/dashboard/tasklist' element={<><Sidebar/><TaskList/></>}/>
        <Route path='/dashboard/tasks' element={<><Sidebar/><Tasks/></>}/>

        {/* Login/Main Route */}
        <Route exact path='/' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App