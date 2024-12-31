const express=require('express'); //import module express
const app =express(); //creer une inst dapp express
const port =8000; //def port d'ecoute
app.get('/',(req, res) => {
   res.send('Hello World'); 

});
app.listen(port, () => {
   console.log(`Application example a lecoute sur le port ${port}!`) ;
});