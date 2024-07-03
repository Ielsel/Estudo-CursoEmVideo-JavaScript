function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    //coletando informação dada pelo usuário
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //se o valor do total de dígitos for igual a 0 || valor for maior que o ano atual
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!') //mensagem de erro
    }else{
        //variável do input radio
        var fsex = document.getElementsByTagName('radsex')
        //cálculo da idade
        var idade = ano - Number(fAno.value)

        //String vazia gênero
        var gênero = ''

        //criando img
        var img = document.createElement('img')
        //criando id = foto para img
        img.setAttribute('id', 'foto')
        console.log(fsex)
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //adicionando arquivo de imagem no img
                img.setAttribute('src', 'criancamenino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemhomem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adultohomem.png')
            }else{
                img.setAttribute('src', 'idosohomem.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancamenina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemmulher.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adultomulher.png')
            }else{
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`

        //appendChild pra colocar conteúdo na tag 'img'
        res.appendChild('img')
    }

}