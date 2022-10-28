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
 
background=document.getElementsByClassName('demo-bg')[0]
background.setAttribute('style',`width:${width()}px;height: ${height()}px`)
body=document.getElementsByTagName('body')[0]
body.setAttribute('style',`width:${width()}px;height: ${height()}px`)
//headerPrimeiro=document.getElementsByTagName('header')[0]
botaoPrimeiro=document.getElementById('botaoInicial')
botaoPrimeiro.setAttribute('style',`width:${width()*0.2}px;height:${Math.floor(height()*0.15)}px;left:${width()*0.4}px;top:${height()*0.1}px`)

window.onresize=(event)=>{
    if (botaoPrimeiro.getAttribute('style')==='visibility:hidden;'){

        body.setAttribute('style',`width:${width()}px;height: ${height()}px`)
        background.setAttribute('style',`width:${width()}px;height: ${height()}px;opacity:0.1;position: absolute; z-index: 0;`)
        
    }else{
        body.setAttribute('style',`width:${width()}px;height: ${height()}px`)
        background.setAttribute('style',`width:${width()}px;height: ${height()}px`)
        botaoPrimeiro.setAttribute('style',`width:${width()*0.2}px;height:${Math.floor(height()*0.2)}px;left:${width()*0.4}px;top:${height()*0.1}px`)
    }
    
}

botaoPrimeiro.addEventListener('click',(event)=>{
    event.currentTarget.setAttribute('style',"visibility:hidden;")
    document.getElementsByTagName('main')[0].setAttribute('style',"visibility:visible;")
    body.setAttribute('style',`width:${width()}px;height: ${height()}px`)
    background.setAttribute('style',`width:${width()}px;height: ${height()}px;opacity:0.1;position: absolute; z-index: 0;`)

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
const ln=40
const cl=80
for (let lin = 0; lin < ln ; lin++){
    let linha=document.createElement('tr')
    for (let col = 0; col < cl ; col ++ ){
        let celula=document.createElement('td')
        celula.setAttribute('id',`${lin},${col}`)
        celula.setAttribute('width',`1.25%`)
        celula.setAttribute('height',`2.5%`)
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
    fruta.setAttribute('style','display: block;margin: auto;position: absolute;top: 0; bottom: 0;left: 0;right: 0;width: 200%;z-index: 2; ')
    fruta.setAttribute('id','fruta')
    let celulaFruta=document.getElementById([randomLin,randomCol])
    celulaFruta.appendChild(fruta)
    return [randomLin,randomCol]
}

let posFruta;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

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
    intervalId=setInterval(()=>{cobra.correr([...cobra.cabeca.parentElement.id.split(',')].map(Number), orientacao='leste')},cobra.vel)
}


botaoIniciar=document.getElementById('start')
botaoIniciar.addEventListener('click',()=>{
    document.getElementById('start').disabled=true
    let nome = document.getElementById('idName').value
    document.getElementById('idName').value=''
    document.getElementById('scoreAtual').innerHTML=0
    document.getElementById('idName').disabled=true
    divPontuacao=document.getElementById('pontuacaoAtual')
    divPontuacao.children[0].innerHTML=`Pontuação do ${nome}`
    divPontuacao.setAttribute('style','visibility:visible')
    posFruta=gerarRadom()
    if ((classificacao.filter((obj)=>obj.nome.toLowerCase()===nome.toLowerCase())).length===0){
        const jogador=new User(nome,0,0)
        cobra.user=jogador
        classificacao.push(jogador)
    }else{
        cobra.user=classificacao.filter((obj)=>obj.nome===nome)[0]
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






