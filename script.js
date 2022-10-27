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
    fruta.setAttribute('style','display: block;margin: auto;position: absolute;top: 0; bottom: 0;left: 0;right: 0;width: 200%; ')
    fruta.setAttribute('id','fruta')
    let celulaFruta=document.getElementById([randomLin,randomCol])
    celulaFruta.appendChild(fruta)
    return [randomLin,randomCol]
}

let posFruta=gerarRadom()


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

class Cobra{
    constructor(){
        
        this.cabeca=document.createElement('img')
        this.cabeca.setAttribute('src',"./cobra.png")
        this.cabeca.setAttribute('id',"cab")
        this.corpo=[]
        this.vel=200
    }

    renderCobra(posicao, orientacao, tamanho){
    
        let celulaCabeca=document.getElementById(posicao)
        celulaCabeca.appendChild(this.cabeca)
        if (orientacao==='leste'){
            this.cabeca.setAttribute('style','transform:rotate(270deg)')
        } else if (orientacao==='oeste'){
            this.cabeca.setAttribute('style','transform:rotate(90deg)')
        } else if(orientacao==='norte'){
            this.cabeca.setAttribute('style','transform:rotate(180deg)')
        } 
        for (let el = 1; el < tamanho ; el++){
            if (orientacao==='leste'){
                let bola=document.createElement('img')
                //bola.setAttribute('style','width:80%;border-radius: 50%;')
                bola.setAttribute('src',"./fundo_cobra.png")
                bola.setAttribute('id',el)
                bola.setAttribute('class','bola')
                this.corpo.push(bola)
                let celulaBola=document.getElementById([posicao[0],posicao[1]-el])
                celulaBola.appendChild(bola)
            } else if (orientacao==='oeste'){
                let bola=document.createElement('img')
                //bola.setAttribute('style','width:80%;border-radius: 50%;')
                bola.setAttribute('src',"./fundo_cobra.png")
                bola.setAttribute('id',el)
                bola.setAttribute('class','bola')
                this.corpo.push(bola)
                let celulaBola=document.getElementById([posicao[0],posicao[1]+el])
                celulaBola.appendChild(bola)
            } else if(orientacao==='norte'){
                
                let bola=document.createElement('img')
                //bola.setAttribute('style','width:80%;border-radius: 50%;')
                bola.setAttribute('src',"./fundo_cobra.png")
                bola.setAttribute('id',el)
                bola.setAttribute('class','bola')
                this.corpo.push(bola)
                let celulaBola=document.getElementById([posicao[0]+el,posicao[1]])
                celulaBola.appendChild(bola)
            }  else{
                let bola=document.createElement('img')
                //bola.setAttribute('style','width:80%;border-radius: 50%;')
                bola.setAttribute('src',"./fundo_cobra.png")
                bola.setAttribute('id',el)
                bola.setAttribute('class','bola')
                this.corpo.push(bola)
                let celulaBola=document.getElementById([posicao[0]-el,posicao[1]])
                celulaBola.appendChild(bola)
            }
        }
        
        
    }
    async mudarDirecao(posicaoConversao,orientacaoAntiga,orientacao){
        await sleep(this.vel)
        if(orientacaoAntiga==='leste' ){
            if(orientacao==='norte'){

                 this.cabeca.setAttribute('style','transform:rotate(180deg)')
                
                 clearInterval(intervalId)
                 intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)
            } else{

                 this.cabeca.setAttribute('style','')
                
                 clearInterval(intervalId)
                 intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)
            }

        }else if(orientacaoAntiga==='oeste'){
            if(orientacao==='norte'){
                this.cabeca.setAttribute('style','transform:rotate(180deg)')
                
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)

            }else{
                this.cabeca.setAttribute('style','')
                let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)

            }
        } else if(orientacaoAntiga==='norte'){
            if(orientacao==='leste'){

                this.cabeca.setAttribute('style','transform:rotate(270deg)')
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)
            }else{

                this.cabeca.setAttribute('style','transform:rotate(90deg)')
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)
            }

        } else if(orientacaoAntiga==='sul'){
            if(orientacao==='leste'){
                this.cabeca.setAttribute('style','transform:rotate(270deg)')
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)

            }else {
                this.cabeca.setAttribute('style','transform:rotate(90deg)')
                
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)  
                
                
            }
        }

    }
    correr(posicaoConversao, orientacao, orientacaoAntiga){
        try {
            let posicaoAntiga=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
        } catch (error) {
            console.log(error)
            this.morrer()           
        }
        let posicaoAntiga=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
        if (orientacao==='leste'){
            let novo=0
            if (posicaoAntiga[1]+1>=cl){
                novo=0
            }else{
                novo=posicaoAntiga[1]+1
            }
            let celulaCabeca=document.getElementById([posicaoAntiga[0],novo])
            document.getElementById(posicaoAntiga).innerHTML=''
            celulaCabeca.appendChild(this.cabeca)
            
            
        } else if (orientacao==='oeste'){
            let novo=0
            if (posicaoAntiga[1]-1<0){
                novo=cl-1
            }else{
                novo=posicaoAntiga[1]-1
            }
            let celulaCabeca=document.getElementById([posicaoAntiga[0],novo])
            document.getElementById(posicaoAntiga).innerHTML=''
            celulaCabeca.appendChild(this.cabeca)
            
        } else if(orientacao==='norte'){
            let novo=0
            if (posicaoAntiga[0]-1<0){
                novo=ln-1
            }else{
                novo=posicaoAntiga[0]-1
            }
            let celulaCabeca=document.getElementById([novo,posicaoAntiga[1]])
            document.getElementById(posicaoAntiga).innerHTML=''
            celulaCabeca.appendChild(this.cabeca)
            
        }  else{
            let novo=0
            if (posicaoAntiga[0]+1>ln-1){
                novo=0
            }else{
                novo=posicaoAntiga[0]+1
            }
            let celulaCabeca=document.getElementById([novo,posicaoAntiga[1]])
            document.getElementById(posicaoAntiga).innerHTML=''
            celulaCabeca.appendChild(this.cabeca)
              
        }
        let comeu=false
        if (JSON.stringify([...cobra.cabeca.parentElement.id.split(',')].map(Number))===JSON.stringify(posFruta)){
            comeu=true
            this.comer()
        }
        let posicaoGomoAnterior=[]
        let styleAnterior=''
        for (let gomo of this.corpo){
            let posicaoGomo=[...gomo.parentElement.id.split(',')].map(Number)
            let style=gomo.getAttribute('style')
            if(this.corpo.indexOf(gomo)===0){
                
                document.getElementById(posicaoGomo).innerHTML=''
                let celulaGomo=document.getElementById(posicaoAntiga)
                celulaGomo.appendChild(gomo) 
                
            }else{
                document.getElementById(posicaoGomo).innerHTML=''
                let celulaGomo=document.getElementById(posicaoGomoAnterior)
                celulaGomo.appendChild(gomo)
            }
            posicaoGomoAnterior=posicaoGomo
            styleAnterior=style
            if (this.corpo.indexOf(gomo)===this.corpo.length-1 && comeu){
                this.crescer(posicaoGomo)
            }
        }          
        }    
    async comer(){
        await sleep(10)
        posFruta=gerarRadom()
        if (document.getElementById('fruta')===null){
            this.comer()
        }
        totalScore+=10
        this.vel=this.vel*0.95
        document.getElementById('scoreAtual').innerHTML=totalScore
        
    }
    async crescer(posicao){
        await sleep(10)
        let bola=document.createElement('img')
        bola.setAttribute('src',"./fundo_cobra.png")
        bola.setAttribute('class','bola')
        this.corpo.push(bola)
        let celulaBola=document.getElementById(posicao)
        celulaBola.appendChild(bola)

    }
    morrer(){
        clearInterval(intervalId)
        location.reload()
    }
}

const cobra= new Cobra()
cobra.renderCobra(posicao=[8,8], orientacao='leste', tamanho=6,first=true)
intervalId=setInterval(()=>{cobra.correr([...cobra.cabeca.parentElement.id.split(',')].map(Number), orientacao='leste', orientacaoAntiga='leste')},cobra.vel)
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

})






