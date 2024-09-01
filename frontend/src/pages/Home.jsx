import { useNavigate } from "react-router-dom";


function Home(){
    const navigate=useNavigate()
      const handleRegister=()=>{
         navigate("/register")
      }
    return (
        <div>
            <h2>Welcome to the Note App</h2>
            <h2>you can process through registering process</h2>
            <button onClick={handleRegister}>To Register Click Me</button>
        </div>
    )
}

export default Home;