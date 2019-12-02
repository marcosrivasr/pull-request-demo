/*
  app.js
  
  Esta aplcación imprime los nombre de los colaboradores que se meten al repositorio en Github y abren un pull request.
*/
const colaboradores = [
    {nombre: "Marcos Rivas", twitter: "@vidamrr"},
    {nombre: "Prueba Lab", twitter: "@prueba-lab"},
    {nombre: "Khris Parrales", twitter: "@khrisparrales"},
    {nombre: "Cliber Castillo", twitter: "@CastilloCliber"},
    {nombre: "Elisabetta", twitter: "@bettina86"},
    {nombre: "Martín Leiva", twitter: "@_marleiva"},
    {nombre: "Martin Fuentes", twitter: "@Someonewhosntme"},
    {nombre: "Marcos Rivas", twitter: "@vidamrr"},
    {nombre: "Marcos Rivas", twitter: "@vidamrr"},
    {nombre: "Marcos Rivas", twitter: "@vidamrr"}
];

console.log('Esta es la lista de colaboradores en este proyecto');
colaboradores.forEach(colaborador =>{
    console.log(`${colaborador.nombre} - ${colaborador.twitter}`);
});
