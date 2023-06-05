import React, { useState, useEffect } from "react";
import Image from "next/image";

const Logotipo = () => {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);
  const [showData, setShowData] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (showData) {
      fetchData();
    }
  }, [showData]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPostData(data))
      .catch((error) => setError(error));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Lógica de verificación de usuario y contraseña
    if (username === "camilo" && password === "1234") {
      setShowData(true);
    setUsername('');
    setPassword('');
    } else {
      alert("Credenciales inválidas");
      setShowData(false);
    }
  };

 

  return (
    <div>
      <header>
        <img id="miImagen2"
          src="/img/3.png"
          width={200}
          height={200}
          alt="Logotipo"
        
          />
        <h1 id="bien">Bienvenido</h1>
        <div className="burbujas">
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
        </div>
      </header>

      <div className="login">
        <img id="miImagen" src="/img/2.png" alt="" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Inicio de Sesión</h1>
        <form>
          <label htmlFor="username">Usuario:</label>
          <input
            placeholder="Ingrese Su Usuario"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            placeholder="Ingrese Su Contraseña"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="text">Archivo a Consultar:</label>
          <input placeholder="Archivo a Consultar" type="text" id="text" />

          <button type="submit"  onClick={handleFormSubmit}>
            Consultar
          </button>
        </form>

        {error && <h1> Error en La Consulta {error.message}</h1>}

        {showData && postData && (
          <div>
            <h1>Resultados De La Consulta:</h1>
            <pre>{JSON.stringify(postData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logotipo;
