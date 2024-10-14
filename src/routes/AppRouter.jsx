import { Route, BrowserRouter as Router,Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import ProtectedRoute from "./ProtectedRoute"
import Dashboard from "../pages/dashboard/Dashboard"
import Album from "./Album"
import Playlist from "../pages/dashboard/playlist/Playlist"
function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<h2>Error 404</h2>}/>
                <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard></Dashboard>
                    </ProtectedRoute>
                }
                >
                    
                    <Route path="playlist" element={<Playlist/>}/>
                    <Route path="profile" element={<h1>profile</h1>}/>
                    <Route path="settings" element={<h1>settings</h1>}/>
                </Route>
                <Route path="/album" element={<Album></Album>}>
                    <Route path="single" element={<h2>SONG MUSIC</h2>}></Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter