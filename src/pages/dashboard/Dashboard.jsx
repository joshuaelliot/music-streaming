import { Outlet,Link ,useNavigate} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Dashboard(){
    const {logout} = useAuth();
    const navigate = useNavigate();
    return (<>
        <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
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
    </div>
    </>)
}

export default Dashboard;