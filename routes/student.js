//Rutas para estudiantes
const  express=require('express');
const router=express.Router();
const studentsController= require('../controllers/studentsController')

//Rutas get para obtner el grupo y un estudiante
router.get('/students',studentsController.getGroupStudent);
router.get('/:pos',studentsController.getOneStudentGroup);
//Rutas post para crear un estudian
router.post('',studentsController.postStudent);
//ruta put para eliminar un estudiante
router.put('/:pos',studentsController.putStudent);
//Ruta para eliminar
router.delete('/:pos',studentsController.deleteStudent);

module.exports=router;