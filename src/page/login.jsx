import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/api";
import woman from "../assets/Rectangle.png"
import linkedin from "../assets/3.png";
import github from "../assets/4.png"
import Google from "../assets/5.png"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await authService.login(email, password);
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setError(data.message || "Login failed");
    }
  };

  const handleRegister = async () => {
    const data = await authService.register(username, email, password);
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setError(data.message || "Register failed");
    }
  };

  return (
    <div className="flex w-full h-full items-center bg-red-50">
      <img className="h-[full] w-[33%] hidden lg:flex" src={woman} alt="" />

      <div className="h-[40rem] md:h-[35rem] w-full lg:w-[60%] flex flex-col items-center justify-around">
        <div className="w-[80%] md:w-[50%]">
          <h1 className="text-left text-4xl text-red-700">
            {isRegister ? "Register" : "Login"}
          </h1>
        </div>

        {isRegister && (
          <div className="w-[80%] md:w-[50%]">
            <label className="block mb-[10px] text-xl">Username:</label>
            <input type="text" placeholder="Enter your username"
              value={username} onChange={(e) => setUsername(e.target.value)}
              className="w-full h-[3rem] rounded-[1rem] bg-sky-200 p-3 placeholder-gray-500" />
          </div>
        )}

        <div className="w-[80%] md:w-[50%]">
          <label className="block mb-[10px] text-xl">Email:</label>
          <input type="email" placeholder="Enter your email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[3rem] rounded-[1rem] bg-sky-200 p-3 placeholder-gray-500" />
        </div>

        <div className="w-[80%] md:w-[50%]">
          <label className="block mb-[10px] mt-[2rem] text-xl">Password:</label>
          <input type="password" placeholder="Enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[3rem] rounded-[1rem] bg-sky-200 p-3 placeholder-gray-500" />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={isRegister ? handleRegister : handleLogin}
          className="w-[6rem] h-[3rem] bg-red-700 border-0 text-white rounded-[40px]">
          {isRegister ? "Register" : "Login"}
        </button>

        <p className="text-gray-500 cursor-pointer" onClick={() => { setIsRegister(!isRegister); setError(""); }}>
          {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
        </p>

        <div className="w-[22rem] h-[3rem] flex items-center justify-around">
          <div className="w-[6rem] h-[3rem] border-2 border-slate-400 rounded-[50px] flex items-center justify-center">
            <img className="w-[30px]" src={Google} alt="" />
          </div>
          <div className="w-[6rem] h-[3rem] border-2 border-slate-400 rounded-[50px] flex items-center justify-center">
            <img className="w-[30px]" src={github} alt="" />
          </div>
          <div className="w-[6rem] h-[3rem] border-2 border-slate-400 rounded-[50px] flex items-center justify-center">
            <img className="w-[30px]" src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;