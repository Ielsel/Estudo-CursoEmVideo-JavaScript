function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //muda a foto
        img.src = 'fotomanha.png'
        //muda a cor do fundo
        document.body.style.background = '#ddd2bc'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#e4b01e'
    }else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#004d8d'
    }
}