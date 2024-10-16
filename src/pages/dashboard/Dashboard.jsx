import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import spoti from "../../assets/spoti.svg"
import library from "../../assets/album.svg"
import styleDashboard from "./style/dashboard.module.css"
function Dashboard() {

  return (<>
    <div className={styleDashboard.dashboardContainer}>
      <header className={styleDashboard.header}>
        <div className="icons">
        <i className="fa-brands fa-spotify"></i>
        <i className="fa-solid fa-house"></i>
        <i className="fa-regular fa-album-collection"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-bell"></i>
        
        </div>
        
      </header>
      <NavDashboard/>
      {/* Aquí se renderizan las subrutas */}
      <Outlet />
      <div className={styleDashboard.reproductor}>
        
        <div className={styleDashboard.portSongContainer}>
          <img 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FDrkzl3qPiin76sK4tRPVE3VbeLA%3D%2Ffit-in%2F300x300%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(40)%2Fdiscogs-images%2FR-2104318-1264250363.jpeg.jpg&f=1&nofb=1&ipt=ddd29b6393df01b61fcb250a8c45ba41d1afc4ca409f7493d289ec0c181d746b&ipo=images" 
          alt="" />
          <div className={styleDashboard.infoSong}>
            <p>Somewhere I Belong </p>
            <span>Linkin Park</span>
          </div>
          <div className={styleDashboard.likeContainer}>
            <button>+</button>
          </div>
        </div>
        <div className={styleDashboard.playerControlerContainer}>
          <div className={styleDashboard.btnsControlerContainer}>
            
          </div>
        <div className={styleDashboard.inputContainer}>
        <input type="range" />
        </div>
        </div>
        

        <div>
          <input  type="range" name="" id="" />
        </div>
        
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