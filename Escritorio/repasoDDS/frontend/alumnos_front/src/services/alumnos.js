import axios  from "axios";

export const get_alumnos = () => {
    return axios.get('http://localhost:3000/api/alumnos')
        .then((response)=>{
            const { data } = response;
            return data;

        })
}

export const getAlumnosPorNota = (condicion, minNota, maxNota) => {
    return axios.get(`http://localhost:3000/api/alumnos/alumnos?condicion=${condicion}&minNota=${minNota}&maxNota=${maxNota}`)
        .then((response)=>{
            const { data } = response;
            return data;

        })
}
