import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Task } from './pages/Task'
import { QueryClientProvider } from 'react-query'
import {queryClient} from '../lib/query'
import { Note } from './pages/Note'
import { Register } from './pages/register'

function App() {
  

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Task' element={<Task />} />
          <Route path='/Note' element={<Note />} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
