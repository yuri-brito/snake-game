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
                let bola=document.createElement('p')
                bola.setAttribute('style','width:130%;height: 50%;')
                bola.setAttribute('id',el)
                let celulaBola=document.getElementById([posicao[0],posicao[1]-el])
                celulaBola.appendChild(bola)
            } else if (orientacao==='oeste'){
                let bola=document.createElement('p')
                bola.setAttribute('style','width:130%;height: 50%;')
                bola.setAttribute('id',el)
                let celulaBola=document.getElementById([posicao[0],posicao[1]+el])
                celulaBola.appendChild(bola)
            } else if(orientacao==='norte'){
                
                let bola=document.createElement('p')
                bola.setAttribute('style','margin-left: 25%;width:50%;height: 130%;')
                bola.setAttribute('id',el)
                let celulaBola=document.getElementById([posicao[0]+el,posicao[1]])
                celulaBola.appendChild(bola)
            }  else{
                let bola=document.createElement('p')
                bola.setAttribute('style','margin-left: 25%;width:50%;height: 130%;')
                bola.setAttribute('id',el)
                let celulaBola=document.getElementById([posicao[0]-el,posicao[1]])
                celulaBola.appendChild(bola)
            }
        }
        
        
    }
    mudarDirecao(posicaoAntiga,orientacaoAntiga,orientacao){
        console.log(posicaoAntiga)
        console.log(orientacaoAntiga)
        console.log(orientacao)
        if(orientacaoAntiga==='leste' && orientacao==='norte'){
            this.cabeca.setAttribute('style','transform:rotate(180deg)')

        }else{
            this.cabeca.setAttribute('style','')

        }

    }
    correr(posicaoAntiga, orientacao, tamanho){
        
        //let posicaoAntiga=[...this.cabeca.parentElement.id.split(',')].map(Number)
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
            let listaCorpo=[...document.getElementsByTagName('p')]
            listaCorpo.sort((a,b)=>{
                if(Number(a.id)>(Number(b.id))) return 1;
                if(Number(a.id)<(Number(b.id))) return -1;
            })
            
        for (let gomo of listaCorpo){
            let posicaoAntigaGomo=[...gomo.parentElement.id.split(',')].map(Number)
            document.getElementById(posicaoAntigaGomo).innerHTML=''
            let novo=0
            if (posicaoAntigaGomo[1]+1>=40){
                novo=0
            }else{
                novo=posicaoAntigaGomo[1]+1
            }
            let celulaGomo=document.getElementById([posicaoAntigaGomo[0],novo])
            celulaGomo.appendChild(gomo)
        }
        } else if (orientacao==='oeste'){
            let novo=0
            if (posicaoAntiga[1]-1<=0){
                novo=39
            }else{
                novo=posicaoAntiga[1]-1
            }
            let celulaCabeca=document.getElementById([posicaoAntiga[0],novo])
            document.getElementById(posicaoAntiga).innerHTML=''
            celulaCabeca.appendChild(this.cabeca)
            let listaCorpo=[...document.getElementsByTagName('p')]
            listaCorpo.sort((a,b)=>{
                if(Number(a.id)>(Number(b.id))) return 1;
                if(Number(a.id)<(Number(b.id))) return -1;
            })
        for (let gomo of listaCorpo){
            let posicaoAntigaGomo=[...gomo.parentElement.id.split(',')].map(Number)
            document.getElementById(posicaoAntigaGomo).innerHTML=''
            let novo=0
            if (posicaoAntigaGomo[1]-1<=0){
                novo=39
            }else{
                novo=posicaoAntigaGomo[1]-1
            }
            let celulaGomo=document.getElementById([posicaoAntigaGomo[0],novo])
            celulaGomo.appendChild(gomo)
        }
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
            let listaCorpo=[...document.getElementsByTagName('p')]
            listaCorpo.sort((a,b)=>{
                if(Number(a.id)>(Number(b.id))) return 1;
                if(Number(a.id)<(Number(b.id))) return -1;
            })
        for (let gomo of listaCorpo){
            let posicaoAntigaGomo=[...gomo.parentElement.id.split(',')].map(Number)
            document.getElementById(posicaoAntigaGomo).innerHTML=''
            let novo=0
            if (posicaoAntigaGomo[0]-1<0){
                novo=19
            }else{
                novo=posicaoAntigaGomo[0]-1
            }
            let celulaGomo=document.getElementById([novo,posicaoAntigaGomo[1]])
            celulaGomo.appendChild(gomo)
        }
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
            let listaCorpo=[...document.getElementsByTagName('p')]
            listaCorpo.sort((a,b)=>{
                if(Number(a.id)>(Number(b.id))) return 1;
                if(Number(a.id)<(Number(b.id))) return -1;
            })
        for (let gomo of listaCorpo){
            let posicaoAntigaGomo=[...gomo.parentElement.id.split(',')].map(Number)
            document.getElementById(posicaoAntigaGomo).innerHTML=''
            let novo=0
            if (posicaoAntigaGomo[0]+1>19){
                novo=0
            }else{
                novo=posicaoAntigaGomo[0]+1
            }
            let celulaGomo=document.getElementById([novo,posicaoAntigaGomo[1]])
            celulaGomo.appendChild(gomo)
        }
            
        }  

        
    }
    comer(){

    }
}

const cobra= new Cobra()
cobra.renderCobra(posicao=[8,8], orientacao='leste', tamanho=4,first=true)
setInterval(()=>{cobra.correr([...cobra.cabeca.parentElement.id.split(',')].map(Number), orientacao='leste', tamanho=4)},300)
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
        let posicaoAntiga=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
        cobra.mudarDirecao(posicaoAntiga,orientacaoAntiga,orientacao)
    } else if (orientacaoAntiga==='oeste' && (orientacao==='norte' || orientacao==='sul')){
        let posicaoAntiga=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
        cobra.mudarDirecao(posicaoAntiga,orientacaoAntiga,orientacao)
    }
    else if (orientacaoAntiga==='norte' && (orientacao==='leste' || orientacao==='oeste')){
        let posicaoAntiga=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
        cobra.mudarDirecao(posicaoAntiga,orientacaoAntiga,orientacao)
    }else if (orientacaoAntiga==='sul' && (orientacao==='leste' || orientacao==='oeste')){
        let posicaoAntiga=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
        cobra.mudarDirecao(posicaoAntiga,orientacaoAntiga,orientacao)
    }else{
        return
    }

})






