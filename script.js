const table=document.getElementsByTagName('table')[0]

const ln=20
const cl=40
for (let lin = 0; lin < ln ; lin++){
    let linha=document.createElement('tr')
    for (let col = 0; col < cl ; col ++ ){
        let celula=document.createElement('td')
        celula.setAttribute('id',`${lin},${col}`)
        celula.setAttribute('width',`2.5%`)
        celula.setAttribute('height',`5%`)
        linha.appendChild(celula)
    }
    table.appendChild(linha)
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
                let gomos=document.createElement('div')
                let bola=document.createElement('p')
                bola.setAttribute('style','width:110%;height: 110%;')
                bola.setAttribute('id',el)
                gomos.setAttribute('style','display:flex')
                
                this.corpo.push(bola)
                let celulaBola=document.getElementById([posicao[0],posicao[1]-el])
                celulaBola.appendChild(bola)
            } else if (orientacao==='oeste'){
                let bola=document.createElement('p')
                bola.setAttribute('style','width:130%;height: 50%;')
                bola.setAttribute('id',el)
                this.corpo.push(bola)
                let celulaBola=document.getElementById([posicao[0],posicao[1]+el])
                celulaBola.appendChild(bola)
            } else if(orientacao==='norte'){
                
                let bola=document.createElement('p')
                bola.setAttribute('style','margin-left: 25%;width:50%;height: 130%;')
                bola.setAttribute('id',el)
                this.corpo.push(bola)
                let celulaBola=document.getElementById([posicao[0]+el,posicao[1]])
                celulaBola.appendChild(bola)
            }  else{
                let bola=document.createElement('p')
                bola.setAttribute('style','margin-left: 25%;width:50%;height: 130%;')
                bola.setAttribute('id',el)
                this.corpo.push(bola)
                let celulaBola=document.getElementById([posicao[0]-el,posicao[1]])
                celulaBola.appendChild(bola)
            }
        }
        
        
    }
    mudarDirecao(posicaoConversao,orientacaoAntiga,orientacao){
        
        if(orientacaoAntiga==='leste' ){
            if(orientacao==='norte'){

                 this.cabeca.setAttribute('style','transform:rotate(180deg)')
                // let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)
            } else{

                 this.cabeca.setAttribute('style','')
                // let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao=orientacao, orientacaoAntiga=orientacaoAntiga)},this.vel)
            }

        }else if(orientacaoAntiga==='oeste'){
            if(orientacao==='norte'){
                this.cabeca.setAttribute('style','transform:rotate(180deg)')
                let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao='norte', tamanho=tamanho)},this.vel)

            }else{
                this.cabeca.setAttribute('style','')
                let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao='sul', tamanho=tamanho)},this.vel)

            }
        } else if(orientacaoAntiga==='norte'){
            if(orientacao==='leste'){

                this.cabeca.setAttribute('style','transform:rotate(270deg)')
                let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao='leste', tamanho=tamanho)},this.vel)
            }else{

                this.cabeca.setAttribute('style','transform:rotate(90deg)')
                let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao='oeste', tamanho=tamanho)},this.vel)
            }

        } else if(orientacaoAntiga==='sul'){
            if(orientacao==='leste'){
                this.cabeca.setAttribute('style','transform:rotate(270deg)')
                let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao='leste', tamanho=tamanho)},this.vel)

            }else {
                this.cabeca.setAttribute('style','transform:rotate(90deg)')
                let tamanho=this.corpo.length
                clearInterval(intervalId)
                intervalId=setInterval(()=>{this.correr(posicaoConversao, orientacao='oeste', tamanho=tamanho)},this.vel)
                
            }
        }

    }
    correr(posicaoConversao, orientacao, orientacaoAntiga){
        
        let posicaoAntiga=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
        if (orientacao==='leste'){
            let novo=0
            if (posicaoAntiga[1]+1>=40){
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
                novo=39
            }else{
                novo=posicaoAntiga[1]-1
            }
            let celulaCabeca=document.getElementById([posicaoAntiga[0],novo])
            document.getElementById(posicaoAntiga).innerHTML=''
            celulaCabeca.appendChild(this.cabeca)
            
        } else if(orientacao==='norte'){
            let novo=0
            if (posicaoAntiga[0]-1<0){
                novo=19
            }else{
                novo=posicaoAntiga[0]-1
            }
            let celulaCabeca=document.getElementById([novo,posicaoAntiga[1]])
            document.getElementById(posicaoAntiga).innerHTML=''
            celulaCabeca.appendChild(this.cabeca)
            
        }  else{
            let novo=0
            if (posicaoAntiga[0]+1>19){
                novo=0
            }else{
                novo=posicaoAntiga[0]+1
            }
            let celulaCabeca=document.getElementById([novo,posicaoAntiga[1]])
            document.getElementById(posicaoAntiga).innerHTML=''
            celulaCabeca.appendChild(this.cabeca)
              
        }
        let posicaoGomoAnterior=[]
        let styleAnterior=''
        for (let gomo of this.corpo){
            let posicaoGomo=[...gomo.parentElement.id.split(',')].map(Number)
            let style=gomo.getAttribute('style')
            if(this.corpo.indexOf(gomo)===0){
                if (this.cabeca.getAttribute('style')==='transform:rotate(270deg)' ||this.cabeca.getAttribute('style')==='transform:rotate(90deg)'){
                    
                    document.getElementById(posicaoGomo).innerHTML=''
                    gomo.setAttribute('style','width:110%;height: 110%;')
                    let celulaGomo=document.getElementById(posicaoAntiga)
                    celulaGomo.appendChild(gomo)
                    
                } else{
                    
                    document.getElementById(posicaoGomo).innerHTML=''
                    gomo.setAttribute('style','width:110%;height: 110%;')
                    let celulaGomo=document.getElementById(posicaoAntiga)
                    celulaGomo.appendChild(gomo)
                }
            }else{
                if(this.corpo[this.corpo.indexOf(gomo)-1].getAttribute('style')==='width:130%;height: 50%;'){
                    
                    document.getElementById(posicaoGomo).innerHTML=''
                    gomo.setAttribute('style',styleAnterior)

                    let celulaGomo=document.getElementById(posicaoGomoAnterior)
                    celulaGomo.appendChild(gomo)
                }else{
                    
                    document.getElementById(posicaoGomo).innerHTML=''
                    gomo.setAttribute('style',styleAnterior)
                    let celulaGomo=document.getElementById(posicaoGomoAnterior)
                    celulaGomo.appendChild(gomo)

                }

            }
            
            posicaoGomoAnterior=posicaoGomo
            styleAnterior=style
                
            }

            
        }   
    
    comer(){

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






