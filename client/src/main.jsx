import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './_styles/index.scss'
import SignIn from './User/SignIn.jsx'
import SignUp from './User/SignUp.jsx'
import Collection from './Album/Collection.jsx'
import Wishlist from './Album/Wishlist.jsx'
import Add from './Album/Add.jsx'
import Sidebar from './Common/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={
                    <div className='container'>
                        <aside>
                            <Sidebar />
                        </aside>
                        <main>
                            <Outlet />
                        </main>
                    </div>
                }>
                    <Route path='/' element={<App />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/sign-in' element={<SignIn />} /> 
                    <Route path='/collection' element={<Collection />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/add' element={<Add />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
