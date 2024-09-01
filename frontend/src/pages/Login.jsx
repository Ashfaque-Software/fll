import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const payload = {
            email,
            password,
        };

        try {
            const response = await fetch("https://bc-zidc.onrender.com/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (data.token) {
                localStorage.setItem("token", data.token);
                alert(`${data.message}`);
                navigate("/notes");
            } else {
                alert(`${data.message}`);
            }
        } catch (error) {
            alert(`An error occurred: ${error}`);
        }
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Type email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Type password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;