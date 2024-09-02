const express = require('express');
const router = express.Router();
const AlumnoRepository = require('../repositories/alumno.repository');
const alumnoRepository = require('../repositories/alumno.repository');
const { Op } = require('sequelize');
const Alumno = require('../models/alumnos');

// Obtener todos los alumnos
router.get('/', async (req, res) => {
  try {
    const alumnos = await AlumnoRepository.get();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alumnos' });
  }
});

/*router.get('/alumnos', async (req, res) => {
  try {
    const condicion = req.query.condicion;
    const alumnos = await AlumnoRepository.filtrarAlumnosPorCondicion(condicion);
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alumnos' });
  }
});


router.get('/alumnos', async (req, res) => {
  try {
    const { minNota, maxNota } = req.query;
    const alumnos = await AlumnoRepository.filtrarAlumnosPorNota(minNota, maxNota);
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alumnos' });
  }
});*/

router.get('/alumnos', async (req, res) => {
  try {
    const condicion = req.query.condicion;
    const minNota = req.query.minNota;
    const maxNota = req.query.maxNota;

    const alumnos = await AlumnoRepository.buscarAlumnosCondicionYRangoNota(condicion, minNota, maxNota);
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los alumnos' });
  }
});


// Crear un nuevo alumno
router.post('/', async (req, res) => {
  try {
    const alumno = await AlumnoRepository.create(req.body);
    res.status(201).json(alumno);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el alumno' });
  }
});

// Actualizar un alumno por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const alumno = await AlumnoRepository.update(id, req.body);
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ error: `Error al actualizar el alumno con ID ${id}` });
  }
});

// Eliminar un alumno por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await AlumnoRepository.delete(id);
    res.json({ message: 'Alumno eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: `Error al eliminar el alumno con ID ${id}` });
  }
});

module.exports = router;
