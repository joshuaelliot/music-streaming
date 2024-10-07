
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./style/login.css"
function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const ID_GOOGLE = "931932305489-l54s61mrdoao58k0flqscrmrb16kve3g.apps.googleusercontent.com";
    const ID = "262957174727-2f3j7hcmc05n1gvahq04ls9j85op9fmh.apps.googleusercontent.com";
    const handleLogin = () => {
        login();
        navigate("/dashboard");
    }

    const [user, setUser] = useState(null);

    const handleLoginSuccess = (credentialResponse) => {
        const decodedToken = jwtDecode(credentialResponse.credential);
        setUser(decodedToken); // Almacenar los datos decodificados del usuario
        console.log(decodedToken); // Mostrar la información del usuario
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    return (
        <div className="login-container">
            <form action="">
                <label htmlFor="">usuario</label>
                <input type="text"
                    placeholder="usuario"
                />
                <label htmlFor="">contraseña</label>
                <input type="password"
                    placeholder="contraseña"
                />
            </form>
            <button
                onClick={handleLogin}
            >ingresar</button>
            <p>O registrate con Google</p>
            <button id="btn-google">Google</button>
            <GoogleOAuthProvider clientId={ID}>
                <div>
                    <h2>Login con Google</h2>
                    {!user ? (
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginError}
                        />
                    ) : (
                        <div>
                            <h3>Bienvenido, {user.name}</h3>
                            <img src={user.picture} alt={user.name} />
                            <p>Email: {user.email}</p>
                        </div>
                    )}
                </div>
            </GoogleOAuthProvider>
        </div>
    )
}
export default Login