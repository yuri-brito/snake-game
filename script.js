
function width(){
    return window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth 
        || 0;
 }
 
 function height(){
    return window.innerHeight 
        || document.documentElement.clientHeight 
        || document.body.clientHeight 
        || 0;
 }
 
 //tela inicial


if(width()<700){
    window.alert('O jogo será melhor aproveitado se o celular estiver na horizontal')
    location.reload() 
}  

background=document.getElementsByClassName('demo-bg')[0]
background.setAttribute('style',`width:${width()}px;height: ${height()}px`)
body=document.getElementsByTagName('body')[0]
body.setAttribute('style',`width:${width()}px;height: ${height()}px`)

botaoPrimeiro=document.getElementById('botaoInicial')
botaoPrimeiro.setAttribute('style',`width:${width()*0.2}px;height:${Math.floor(height()*0.15)}px;left:${width()*0.4}px;top:${height()*0.1}px;font-size: ${width()*0.02}px;border-radius: ${width()*0.01}px;border-width:${width()*0.005}px;font-size:${width()*0.02}px;`)



//segunda tela
botaoStart=document.getElementById('start')
botaoStart.setAttribute('style',`width:${width()*0.12}px;height: ${height()*0.07}px;font-size:${width()*0.015}px;border-radius: ${width()*0.01}px;border-width:${width()*0.003}px;padding:${width()*0.005}px`)
labelNome=document.getElementsByTagName('label')[0]
labelNome.setAttribute('style',`font-size:${width()*0.02}px`)
inputNome=document.getElementById('idName')
inputNome.setAttribute('style',`width:${width()*0.15}px;height: ${height()*0.1}px;font-size:${width()*0.015}px;border-radius: ${width()*0.01}px;border-width:${width()*0.003}px;`)
form=document.getElementsByTagName('form')[0]
form.setAttribute('style',`border:${width()*0.005}px solid greenyellow;border-radius: ${width()*0.01}px;padding:${width()*0.03}px;width:${width()*0.18}px;height:${height()*0.18}px`)
article=document.getElementsByTagName('article')[0]
article.setAttribute('style',`border:${width()*0.005}px solid greenyellow;border-radius: ${width()*0.01}px;padding:${width()*0.01}px;width:${width()*0.22}px;height:${height()*0.45}px`)
melhoresJogadore=document.getElementById('melhoresJogadores')
h4=document.getElementsByTagName('h4')[0]
h4.setAttribute('style',`font-size:${width()*0.021}px`)
ol=document.getElementsByTagName('ol')[0]
ol.setAttribute('style',`font-size:${width()*0.015}px;width:${width()*0.15}px;border-width:${width()*0.002}px;border-radius: ${width()*0.01}px`)
pontuacaoAtual=document.getElementById('pontuacaoAtual')
pontuacaoAtual.setAttribute('style',`font-size:${width()*0.02}px`)
pAtual=document.getElementById('pAtual')
scoreAtual=document.getElementById('scoreAtual')
pAtual.setAttribute('style',`font-size:${width()*0.02}px`)
scoreAtual.setAttribute('style',`font-size:${width()*0.02}px`)
tabela=document.getElementsByTagName('table')[0]
tabela.setAttribute('style',`border-width:${width()*0.005}px;border-radius: ${width()*0.01}px`)
snake=document.getElementById('snakeArena')
snake.setAttribute('style',`font-size:${width()*0.021}px;text-align: center`)

window.onresize=(event)=>{
    if (botaoPrimeiro.getAttribute('style')==='display:none;'){

        //segunda tela
        
        if(botaoStart.getAttribute('style')==='display:none'){

            body.setAttribute('style',`width:${width()}px;height: ${height()}px`)
            background.setAttribute('style',`width:${width()}px;height: ${height()}px;opacity:1;position: absolute; z-index: 0;`)
            //botaoStart.setAttribute('style',`width:${width()*0.12}px;height: ${height()*0.07}px;font-size:${width()*0.015}px;border-radius: ${width()*0.01}px;border-width:${width()*0.003}px;padding:${width()*0.005}px`)
            //labelNome.setAttribute('style',`font-size:${width()*0.02}px`)
            //inputNome.setAttribute('style',`width:${width()*0.15}px;height: ${height()*0.1}px;font-size:${width()*0.015}px;border-radius: ${width()*0.01}px;border-width:${width()*0.003}px;`)
            form.setAttribute('style',`border:${width()*0.005}px solid greenyellow;border-radius: ${width()*0.01}px;padding:${width()*0.03}px;width:${width()*0.18}px;height:${height()*0.18}px`)
            article.setAttribute('style',`border:${width()*0.005}px solid greenyellow;border-radius: ${width()*0.01}px;padding:${width()*0.01}px;width:${width()*0.22}px;height:${height()*0.45}px`)
            h4.setAttribute('style',`font-size:${width()*0.021}px`)
            ol.setAttribute('style',`font-size:${width()*0.015}px;width:${width()*0.15}px;border-width:${width()*0.002}px;border-radius: ${width()*0.01}px`)
            //pontuacaoAtual.setAttribute('style',`font-size:${width()*0.015}px`)
            //pontuacaoAtual.setAttribute('style',`font-size:${width()*0.02}px`)
            pAtual.setAttribute('style',`font-size:${width()*0.015}px`)
            scoreAtual.setAttribute('style',`font-size:${width()*0.015}px`)
            tabela.setAttribute('style',`border-width:${width()*0.005}px;border-radius: ${width()*0.01}px`)
            snake.setAttribute('style',`font-size:${width()*0.021}px;text-align: center`)
        } else{
            body.setAttribute('style',`width:${width()}px;height: ${height()}px`)
            background.setAttribute('style',`width:${width()}px;height: ${height()}px;opacity:1;position: absolute; z-index: 0;`)
            botaoStart.setAttribute('style',`width:${width()*0.12}px;height: ${height()*0.07}px;font-size:${width()*0.015}px;border-radius: ${width()*0.01}px;border-width:${width()*0.003}px;padding:${width()*0.005}px`)
            labelNome.setAttribute('style',`font-size:${width()*0.02}px`)
            inputNome.setAttribute('style',`width:${width()*0.15}px;height: ${height()*0.1}px;font-size:${width()*0.015}px;border-radius: ${width()*0.01}px;border-width:${width()*0.003}px;`)
            form.setAttribute('style',`border:${width()*0.005}px solid greenyellow;border-radius: ${width()*0.01}px;padding:${width()*0.03}px;width:${width()*0.18}px;height:${height()*0.18}px`)
            article.setAttribute('style',`border:${width()*0.005}px solid greenyellow;border-radius: ${width()*0.01}px;padding:${width()*0.01}px;width:${width()*0.22}px;height:${height()*0.45}px`)
            h4.setAttribute('style',`font-size:${width()*0.021}px`)
            ol.setAttribute('style',`font-size:${width()*0.015}px;width:${width()*0.15}px;border-width:${width()*0.002}px;border-radius: ${width()*0.01}px`)
            //pontuacaoAtual.setAttribute('style',`font-size:${width()*0.015}px`)
            //pAtual.setAttribute('style',`font-size:${width()*0.015}px`)
            //scoreAtual.setAttribute('style',`font-size:${width()*0.015}px`)
            tabela.setAttribute('style',`border-width:${width()*0.005}px;border-radius: ${width()*0.01}px`)
            snake.setAttribute('style',`font-size:${width()*0.021}px;text-align: center`)

        }
        
       
        
    }else{
       // tela inicial
        body.setAttribute('style',`width:${width()}px;height: ${height()}px`)
        background.setAttribute('style',`width:${width()}px;height: ${height()}px`)
        botaoPrimeiro.setAttribute('style',`width:${width()*0.2}px;height:${Math.floor(height()*0.15)}px;left:${width()*0.4}px;top:${height()*0.1}px;font-size:${width()*0.02}px;border-radius: ${width()*0.01}px;border-width:${width()*0.005}px;`)
        
    }
    
}

botaoPrimeiro.addEventListener('click',(event)=>{
    event.currentTarget.setAttribute('style',"display:none;")
    document.getElementsByTagName('main')[0].setAttribute('style',"display:flex;")
    body.setAttribute('style',`width:${width()}px;height: ${height()}px;`)
    background.setAttribute('style',`width:${width()}px;height: ${height()}px;opacity:1;position: absolute; z-index: 0;`)

})



const frutas=[
    {'arquivo':'./imgFrutas/pngwing.com (10).png'},
    {'arquivo':'./imgFrutas/pngwing.com (9).png'},
    {'arquivo':'./imgFrutas/pngwing.com (8).png'},
    {'arquivo':'./imgFrutas/pngwing.com (7).png'},
    {'arquivo':'./imgFrutas/pngwing.com (6).png'},
    {'arquivo':'./imgFrutas/pngwing.com (5).png'},
    {'arquivo':'./imgFrutas/pngwing.com (4).png'},
    {'arquivo':'./imgFrutas/pngwing.com (3).png'},
    {'arquivo':'./imgFrutas/pngwing.com (2).png'},
    {'arquivo':'./imgFrutas/pngwing.com (1).png'},
    {'arquivo':'./imgFrutas/pngwing.com.png'},

]



let totalScore=0

const table=document.getElementsByTagName('table')[0]
const ln=25
const cl=50
for (let lin = 0; lin < ln ; lin++){
    let linha=document.createElement('tr')
    for (let col = 0; col < cl ; col ++ ){
        let celula=document.createElement('td')
        celula.setAttribute('id',`${lin},${col}`)
        celula.setAttribute('width',`2%`)
        celula.setAttribute('height',`4%`)
        if ((lin+col)%2===0){
            //celula.setAttribute('style',`background:rgb(255, 255, 255)`)
        }else{
            //celula.setAttribute('style',`background:rgb(224, 249, 224);`)
        }
        linha.appendChild(celula)
    }
    table.appendChild(linha)
}

function gerarRadom(){
    let randomFruit=Math.floor(Math.random()*frutas.length)
    let randomCol=Math.floor(Math.random()*(cl-1))
    let randomLin=Math.floor(Math.random()*(ln-1))
    let fruta=document.createElement('img')
    fruta.setAttribute('src',frutas[randomFruit].arquivo)
    if (randomFruit===4||randomFruit===5||randomFruit===9){
        fruta.setAttribute('style','display: block;margin: auto;position: absolute;top: 0; bottom: 0;left: 0;right: 0;width: 150%;z-index: 2; ')
    }else{
        fruta.setAttribute('style','display: block;margin: auto;position: absolute;top: 0; bottom: 0;left: 0;right: 0;width: 120%;z-index: 2; ')
    }
    fruta.setAttribute('id','fruta')
    let celulaFruta=document.getElementById([randomLin,randomCol])
    
     while (celulaFruta.innerHTML!==''){
         randomLin=Math.floor(Math.random()*(ln-1))
         randomCol=Math.floor(Math.random()*(cl-1))
         celulaFruta=document.getElementById([randomLin,randomCol])
     }
    celulaFruta.appendChild(fruta)
    return [randomLin,randomCol]
}

let posFruta;


listaMelhores=document.getElementById('melhores')
let i =0
for (let jogador of classificacao){
    li=document.createElement('li')
    li.innerHTML=`${jogador.nome} - ${jogador.melhor}`
    listaMelhores.appendChild(li)
    if (i>4){
        break
    }
    i++
}
const cobra=new Cobra({'nome':'jogador','pontuacaoAtual':0,'melhor':0})
function iniciar(){
    
    cobra.renderCobra(posicao=[8,8], orientacao='leste', tamanho=6)
    posFruta=gerarRadom()
    intervalId=setInterval(()=>{cobra.correr([...cobra.cabeca.parentElement.id.split(',')].map(Number), orientacao='leste')},cobra.vel)
    
}


botaoIniciar=document.getElementById('start')
botaoIniciar.addEventListener('click',()=>{
    botaoStart.disabled=true
    botaoStart.setAttribute('style','display:none')
    let nome = inputNome.value
    inputNome.value=''
    inputNome.setAttribute('style','display:none')
    labelNome.setAttribute('style','display:none')
    scoreAtual.innerHTML=0
    divPontuacao=document.getElementById('pontuacaoAtual')
    pAtual.innerHTML=`Pontuação do ${nome}`
    divPontuacao.setAttribute('style','display:flex')
    
    if ((classificacao.filter((obj)=>obj.nome.toLowerCase()===nome.toLowerCase())).length===0){
        const jogador=new User(nome,0,0)
        cobra.user=jogador
        classificacao.push(jogador)
    }else{ 
        cobra.user=classificacao.filter((obj)=>obj.nome.toLowerCase()===nome.toLowerCase())[0]
    }
    

    classificacao.sort((a,b)=>{
        if(a.melhor>b.melhor) return -1;
        if(a.melhor<b.melhor) return 1;
        if(a.melhor===b.melhor) return 0;
    })
   
    
    iniciar()
})


inputNome=document.getElementById('idName')
inputNome.onkeyup=(event)=>{
    if (document.getElementById('idName').value===''){
        botaoIniciar.disabled=true
    }else{
        botaoIniciar.disabled=false
    }
}

window.addEventListener('keydown',(event)=>{
    
    let orientacaoAntiga=cobra.cabeca.getAttribute('style')
    if (orientacaoAntiga==='transform:rotate(270deg)'){
        orientacaoAntiga='leste'
    }else if(orientacaoAntiga==='transform:rotate(90deg)'){
        orientacaoAntiga='oeste'

    }else if(orientacaoAntiga==='transform:rotate(180deg)'){
        orientacaoAntiga='norte'
    }else{
        orientacaoAntiga='sul'
    }
    if (event.keyCode===38){
        orientacao='norte'
    } else if(event.keyCode===40){
        orientacao='sul'
    } else if(event.keyCode===37){
        orientacao='oeste'
    }else if(event.keyCode===39){
        orientacao='leste'
    }else {
        return
    }
    try {
        
        if (orientacaoAntiga==='leste' && (orientacao==='norte' || orientacao==='sul')){
            let posicaoConversao=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
            cobra.mudarDirecao(posicaoConversao,orientacaoAntiga,orientacao)
        } else if (orientacaoAntiga==='oeste' && (orientacao==='norte' || orientacao==='sul')){
            let posicaoConversao=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
            cobra.mudarDirecao(posicaoConversao,orientacaoAntiga,orientacao)
        }
        else if (orientacaoAntiga==='norte' && (orientacao==='leste' || orientacao==='oeste')){
            let posicaoConversao=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
            cobra.mudarDirecao(posicaoConversao,orientacaoAntiga,orientacao)
        }else if (orientacaoAntiga==='sul' && (orientacao==='leste' || orientacao==='oeste')){
            let posicaoConversao=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
            cobra.mudarDirecao(posicaoConversao,orientacaoAntiga,orientacao)
        }else{
            return
        }
    } catch (error) {
        
    }

})
