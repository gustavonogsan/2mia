function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    alert('Usuario logado');
})
.cath(err =>{
    console.log('error', error)
})
}
