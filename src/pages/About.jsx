import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import "./style/about.css"
const PlanCard = ({precio})=>{
    return(
        <div className="plan-container">
            <p>plan de </p>
            <span>{precio}</span>
        </div>
    )
}
export default function About(){
    const [precio,setPrecio] = useState(["$10","$20","$30"])
    return (
        <div className="about-container">
            <Header></Header>
            <div className="planes-container">
                {precio.map((valorPLan,index)=>(
                    <PlanCard
                    key={index}
                     precio={valorPLan}>
                        
                     </PlanCard>
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}

