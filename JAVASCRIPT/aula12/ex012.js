//Criando variável 'agora' tipo 'new Date()' com os dados da data atual
var agora = new Date()
//variável 'hora' que vai pegar o horário atual
var hora = agora.getHours()
//pegando os minutos
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minutos} horas`)
if (hora < 12){
    console.log('Bom Dia!')
}else if(hora <= 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}