/*import React, { useEffect, useState } from "react";
import { get_alumnos, getAlumnosPorNota } from "../services/alumnos";

function AlumnosList() {
  const [alumnos, setAlumnos] = useState([]);
  const [condicion, setCondicion] = useState("");
  const [minNota, setMinNota] = useState("");
  const [maxNota, setMaxNota] = useState("");

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  const obtenerAlumnos = () => {
    get_alumnos()
      .then((data) => {
        setAlumnos(data);
      })
      .catch((error) => {
        console.log("Error al obtener los alumnos:", error);
      });
  };

  const filtrarPorNota = () => {
    getAlumnosPorNota(condicion, minNota, maxNota)
      .then((data) => {
        setAlumnos(data);
      })
      .catch((error) => {
        console.log("Error al obtener los alumnos por nota:", error);
      });
  };

  const handleCondicionChange = (event) => {
    setCondicion(event.target.value);
  };

  return (
    <div>
      <h1>Listado de Alumnos</h1>
      <div>
        <label htmlFor="condicion">Filtrar por condición:</label>
        <select id="condicion" value={condicion} onChange={handleCondicionChange}>
          <option value="">Todos</option>
          <option value="true">Condición Verdadera</option>
          <option value="false">Condición Falsa</option>
        </select>
      </div>
      <div>
        <label htmlFor="minNota">Nota mínima:</label>
        <input type="number" id="minNota" value={minNota} onChange={(e) => setMinNota(e.target.value)} />
      </div>
      <div>
        <label htmlFor="maxNota">Nota máxima:</label>
        <input type="number" id="maxNota" value={maxNota} onChange={(e) => setMaxNota(e.target.value)} />
      </div>
      <button onClick={filtrarPorNota}>Filtrar</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Legajo</th>
            <th>Nombre de Pila</th>
            <th>Condición</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.legajo}</td>
              <td>{alumno.nombreDePila}</td>
              <td>{alumno.condicion ? "true" : "false"}</td>
              <td>{alumno.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlumnosList;*/

import React, { useEffect, useState } from "react";
import { get_alumnos, getAlumnosPorNota } from "../services/alumnos";

function AlumnosList() {
  const [alumnos, setAlumnos] = useState([]);
  const [condicion, setCondicion] = useState("");
  const [minNota, setMinNota] = useState("");
  const [maxNota, setMaxNota] = useState("");

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  const obtenerAlumnos = () => {
    get_alumnos()
      .then((data) => {
        setAlumnos(data);
      })
      .catch((error) => {
        console.log("Error al obtener los alumnos:", error);
      });
  };

  const filtrarPorNota = () => {
    getAlumnosPorNota(condicion, minNota, maxNota)
      .then((data) => {
        setAlumnos(data);
      })
      .catch((error) => {
        console.log("Error al obtener los alumnos por nota:", error);
      });
  };

  const handleCondicionChange = (event) => {
    setCondicion(event.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Listado de Alumnos</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="condicion">Filtrar por condición:</label>
        <select id="condicion" value={condicion} onChange={handleCondicionChange}>
          <option value="">Todos</option>
          <option value="true">Condición Verdadera</option>
          <option value="false">Condición Falsa</option>
        </select>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="minNota">Nota mínima:</label>
        <input type="number" id="minNota" value={minNota} onChange={(e) => setMinNota(e.target.value)} />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="maxNota">Nota máxima:</label>
        <input type="number" id="maxNota" value={maxNota} onChange={(e) => setMaxNota(e.target.value)} />
      </div>
      <button onClick={filtrarPorNota} style={{ marginBottom: "1rem" }}>Filtrar</button>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Legajo</th>
            <th>Nombre de Pila</th>
            <th>Condición</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.legajo}</td>
              <td>{alumno.nombreDePila}</td>
              <td>{alumno.condicion ? "true" : "false"}</td>
              <td>{alumno.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlumnosList;












