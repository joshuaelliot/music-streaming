import { Outlet,Link ,useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styleDashboard from "./style/dashboard.module.css"
function Dashboard(){
    const {logout} = useAuth();
    const navigate = useNavigate();
    return (<>
        <div className={styleDashboard.dashboardContainer}>
      <header className={styleDashboard.header}>
        <h1>Soy human</h1>
        </header>
      <nav className={styleDashboard.dashboardNav}>
      <h1 id={styleDashboard.title}>Dashboard</h1>
        <ul>
        <li><Link to="playlist">playlist</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
          <li
          onClick={()=>{
            logout();
            navigate("/");
          }}
          >singout</li>
        </ul>
      </nav>

      {/* Aquí se renderizan las subrutas */}
      <Outlet />
      <div className={styleDashboard.reproductor}>
        <h1>Reproductor</h1>
      </div>
    </div>
    </>)
}

export default Dashboard;