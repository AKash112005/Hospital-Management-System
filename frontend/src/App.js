import { useState } from "react";
import axios from "axios";

const API = "http://65.2.152.76:3000"; // your EC2 IP

function App() {
  const [token, setToken] = useState("");
  const [patients, setPatients] = useState([]);

  const login = async () => {
    const res = await axios.post(`${API}/auth/login`, {
      email: "admin@gmail.com",
      password: "123456",
    });
    setToken(res.data.token);
    alert("Login Success");
  };

  const getPatients = async () => {
    const res = await axios.get(`${API}/patients`, {
      headers: { Authorization: token },
    });
    setPatients(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Hospital Management System</h2>

      <button onClick={login}>Login</button>
      <button onClick={getPatients}>Get Patients</button>

      <ul>
        {patients.map((p) => (
          <li key={p._id}>
            {p.name} - {p.disease}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;