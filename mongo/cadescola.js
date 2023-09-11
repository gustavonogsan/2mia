//consfigurar a conexião com o mongodb e o banco de dados

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/27017/escola',
 {useNewUrlParser:true,
useUnifiedTopology:true,
   serverSelectionTimeoutMS: 10000
});

const db = mongoose.connection;

db.on('error ', console.error.bind(console, 'conection error :'));

db.once('open', function(){
    console.log("estamos conectados ao mongoDB ");
});

//criando uma collection dentro do mongodb

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
});

const aluno = mongoose.model("aluno", alunoSchema);
const paulo = new aluno({
    matricula : 'rm201',
    nome : "paulo da silva",
    idade : 18,
    turma : '2mia'
})

paulo.save();

