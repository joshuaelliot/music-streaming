import { Outlet } from "react-router-dom";

export default function Album(){
    return (
        <div>
            <h2>Album music</h2>
            <Outlet></Outlet>
        </div>
    )
}