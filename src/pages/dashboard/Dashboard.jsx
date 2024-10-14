import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import styleDashboard from "./style/dashboard.module.css"
function Dashboard() {

  return (<>
    <div className={styleDashboard.dashboardContainer}>
      <header className={styleDashboard.header}>
        <h1>Soy human</h1>
      </header>
      <NavDashboard/>
      {/* Aquí se renderizan las subrutas */}
      <Outlet />
      <div className={styleDashboard.reproductor}>
        <h1>Reproductor</h1>
      </div>
    </div>
  </>)
}

const NavDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [navWidth, setNavWidth] = useState(200)
  const handleCLick = ()=>{
    if(navWidth == 200){
      setNavWidth(70)
    }else{
      setNavWidth(200)
    }
  }
  return (
    <nav className={styleDashboard.dashboardNav}
    onClick={handleCLick}
    style={{width:`${navWidth}px`}}
    >
      <h1 id={styleDashboard.title}>Dashboard</h1>
      <ul>
        <li><span>{navWidth}</span></li>
        <li><Link to="playlist">playlist</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="settings">Settings</Link></li>
        <li
          onClick={() => {
            logout();
            navigate("/");
          }}
        >singout</li>
      </ul>
    </nav>
  )
}
export default Dashboard;