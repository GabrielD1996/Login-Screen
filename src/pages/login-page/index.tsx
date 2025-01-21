import React, { useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import Header from "../../components/Header";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      });
      const token = response.data.access_token;

      localStorage.setItem("access_token", token);

      console.log("Token armazenado no Local Storage:", token);

      console.log("Login bem-sucedido", response.data);

      const profileResponse = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`, 
        }})

        console.log("Perfil do usuário:", profileResponse.data);

    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Header></Header>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Senha:</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button label=" Entrar"/>
       
      </form>
    </div>
  );
};

export default LoginPage;
