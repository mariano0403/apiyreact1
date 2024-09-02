const BaseRepository = require('./baseRepository');
const Alumno = require('../models/alumnos'); // Asegúrate de importar el modelo de Alumno correspondiente
const {Op} = require('sequelize');
class AlumnoRepository extends BaseRepository {
  constructor() {
    super(Alumno);
  }
  
  async get() {
    return this.model.findAll();
  }
  
 /* 
  async filtrarAlumnosPorCondicion(condicion) {
    try {
      let alumnos;
  
      if (condicion === 'true') {
        alumnos = await Alumno.findAll({
          where: {
            condicion: 1 // true
          },
          order: [
            ['condicion', 'DESC'] // Orden descendente para que los true (1) aparezcan primero
          ]
        });
      } else if (condicion === 'false') {
        alumnos = await Alumno.findAll({
          where: {
            condicion: 0 // false
          },
          order: [
            ['condicion', 'DESC'] // Orden descendente para que los false (0) aparezcan primero
          ]
        });
      } else {
        // Si el valor de condicion no es válido, puedes manejarlo de alguna manera (lanzar una excepción, mostrar un mensaje de error, etc.)
        throw new Error('Valor de condicion inválido');
      }
  
      return alumnos;
    } catch (error) {
      throw new Error('Error al filtrar los alumnos por condición');
    }
  }
  
  

  async filtrarAlumnosPorNota(minNota, maxNota) {
    try {
      const alumnos = await Alumno.findAll({
        where: {
          nota: {
            [Op.between]: [minNota, maxNota]
          }
        },
        order: [
          ['nota', 'ASC'] // Orden ascendente por nota
        ]
      });
  
      return alumnos;
    } catch (error) {
      throw new Error('Error al filtrar los alumnos por nota');
    }
  }
  
*/

  async buscarAlumnosCondicionYRangoNota(condicion, minNota, maxNota) {
  try {
    let alumnos;
    if (condicion === 'true') {
      alumnos = await Alumno.findAll({
        where: {
          condicion: 1,
          nota: {
            [Op.between]: [minNota, maxNota]
          }
        },
        order: [
          ['condicion', 'DESC'] 
        ]
      });
    } else if (condicion === 'false') {
      alumnos = await Alumno.findAll({
        where: {
          condicion: 0,
          nota: {
            [Op.between]: [minNota, maxNota]
          }
        },
        order: [
          ['condicion', 'DESC'] 
        ]
      });
    } else {
      	
    }

    return alumnos;
  } catch (error) {
    throw new Error('Error al filtrar los alumnos por condición');
  }
}

  
  
  async create(entity) {
    return this.model.create(entity);
  }
  
  async update(id, entity) {
    const alumno = await this.model.findByPk(id);

    if (!alumno) {
      throw new Error(`No se encontró el alumno con ID ${id}`);
    }

    return alumno.update(entity);
  }
  
  async delete(id) {
    const alumno = await this.model.findByPk(id);

    if (!alumno) {
      throw new Error(`No se encontró el alumno con ID ${id}`);
    }

    return alumno.destroy();
  }
}

module.exports = new AlumnoRepository();

