import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async () => {
        const payload = {
            name,
            email,
            password,
            gender,
            age,
        };

        try {
            await fetch("https://bc-zidc.onrender.com/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            alert("User registered successfully");
            navigate("/login");
        } catch (error) {
            alert(`An error occurred: ${error}`);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Register;