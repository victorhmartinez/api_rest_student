
//Arrglo con estudiantes
const students = 
[
    {
        pos:0,
        name:"Juan",
        last_name:"Yanangomez",
        age:23
    },
    {
        pos:1,
        name:"Victor",
        last_name:"Martinez",
        age:23
    },
    {
        pos:2,
        name:"Jonathan",
        last_name:"Herrera",
        age:23
    }
]

exports.getGroupStudent=(req,res)=>{
    //Devolvemos el listado de estudiantes
     res.status(200).json(students)
}

exports.getOneStudentGroup=(req,res)=>{
    //Buscamos el estudiante segun la pos pasada por la url
        const resultado = students.find(es=>es.pos ==  req.params.pos);
        //validamos si es una posicion valida
           if(resultado!=null){
               //Devolvemos el estudiante que se encontro y un status: 200
            res.status(200).json(resultado);
           }else{
               //En caso de no encontrar un estudiante
            res.status(404).json({status:404,msg:"No existe el estudiante"})
           }   
}
exports.postStudent=(req,res)=>{
    //Recibimos los datos del body
  const student=req.body;
  //Validamos si los datos enviados no estan vacios
  if(student!=null){
      //Añadimos el estudiante a la lista y devolvemos un estatus:201 
    students.push(student);
    res.status(201).json(student);
  }else{
      //En caso de no poder agregar un estudiante
      res.status(404).json({status:404,msg:"No se pudo agregar el estudiante"})
  }


  
}
exports.putStudent = (req,res)=>{
    //Obtenemos el estudiante a validar
    const resultado = students.find(es=>es.pos ==  req.params.pos);
    //Validamos si el estudiante a validar es correcto
        if(resultado!=null){
            //Guardamos los informacion pasada por el body
            const data=req.body;
            //Buscamos el indice del elemento a modificar
            let indice= students.indexOf(resultado);
            //Guardamos la informacion y devolvemos un status:201
            students[indice]=data;
          
            res.status(201).json(data);
        }else{
            //En caso de no poder modificar el usuario
            res.status(409).json({status:409,msg:"No se puede modificar,No existe el estudiante"})
        }
         
   
           
}
exports.deleteStudent=(req,res)=>{
    //Obtenemos el estudiante a eliminar
    const resultado = students.find(es=>es.pos ==  req.params.pos);
    //Validamos si el estudiante a validar es correcto
    if(resultado!=null){
          //Buscamos el indice del elemento a eliminar
        let indice= students.indexOf(resultado);
        //eliminamos el elemento del array y 
        students.splice(indice,1)
        res.json(msg="Datos eliminados");
    }else{
        res.status(400).json({status:400,msg:"No se puede eliminar"})
    }

}