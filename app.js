/*
  app.js

  Esta aplcación imprime los nombre de los colaboradores que se meten al repositorio en Github y abren un pull request.
*/
const colaboradores = [
    {nombre: "Laura AC", twitter: "@lac"},
    {nombre: "Prueba Lab", twitter: "@prueba-lab"},
    {nombre: "Khris Parrales", twitter: "@khrisparrales"},
    {nombre: "Cliber Castillo", twitter: "@CastilloCliber"},
    {nombre: "Ronnie Moncayo", twitter: "@@RonnieMoncayo"},
    {nombre: "Elisabetta", twitter: "@bettina86"},
    {nombre: "Martín Leiva", twitter: "@_marleiva"},
    {nombre: "Daniel Jimenez", twitter: "@Dejs1998"},
    {nombre: "Martin Fuentes", twitter: "@Someonewhosntme"},
    {nombre: "Daniel Maldonado", twitter: "@Maldonadoml09"},
    {nombre: "Marcos Rivas", twitter: "@vidamrr"},
    {nombre: "Ismael Garcia", twitter: "@leamsigc"},
    {nombre: "Marcos Rivas", twitter: "@vidamrr"},
    {nombre: "new_dat", twitter: "@victor-israel"},
    {nombre: "Victor Israel", twitter: "@victor-israel"},
    {nombre: "Fabrik Hernandez", twitter: "@FabrikHernandez"},
    {nombre: "Jennifer Cordón", twitter: "@jenny_cordon"},
    {nombre: "Javier Francisco", twitter: "@naranjas"},
    {nombre: "Eloy García Ceja", twitter: "@wineloy"},
    {nombre: "luis miguel", twitter: "@miguelacho"},
    {nombre: "Antonio Contreras", twitter: "@Mitwitter"},
    {nombre: "Willy Mateo", twitter: "@willymateo"},
    {nombre: "Eap Code", twitter: "@CodeEap"},
    {nombre: "Rodrigo Gutierrez", twitter: "@RODRIGOa507"},
    {nombre: "Lester Morales", twitter: "@larmorales14"},
    {nombre: "Daniel Guerrero", twitter: "@dgj86"},
    {nombre: "Carlos Vargas", twitter: "@"},
    {nombre: "Josue Vargas", twitter: "@NoTengo"}

];

console.log('Esta es la lista de colaboradores en este proyecto');
colaboradores.forEach(colaborador =>{
    console.log(`${colaborador.nombre} - ${colaborador.twitter}`);
});
