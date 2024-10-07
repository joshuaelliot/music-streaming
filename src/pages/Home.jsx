import Footer from "../components/Footer"
import Header from "../components/Header"
import Portada from "../components/Portada"
import "./style/home.css"

function Home(){
    return(
        <div className="home-container">
            <Header></Header>
            <Portada></Portada>
            <Footer></Footer>
        </div>
    )
}
export default Home