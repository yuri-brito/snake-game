function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
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


class Cobra{
    constructor(user){
        this.user=user
        this.cabeca=document.createElement('img')
        this.cabeca.setAttribute('src',"./cobra.png")
        this.cabeca.setAttribute('id',"cab")
        this.corpo=[]
        this.vel=150
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
                //bola.setAttribute('style','width:10%;')
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
    correr(posicaoConversao, orientacao){
        try {
            let posicaoAntiga=[...cobra.cabeca.parentElement.id.split(',')].map(Number)
        } catch (error) {
            this.morrer()
            return           
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
    comer(){
        posFruta=gerarRadom()
        totalScore+=10
        this.vel=this.vel*0.98
        this.user.pontuacaoAtual+=10
        document.getElementById('scoreAtual').innerHTML=this.user.pontuacaoAtual
        
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
        if(this.user.pontuacaoAtual>this.user.melhor){
            this.user.melhor=this.user.pontuacaoAtual
        }
        this.user.pontuacaoAtual=0
        
        classificacao.sort((a,b)=>{
            if(a.melhor>b.melhor) return -1;
            if(a.melhor<b.melhor) return 1;
            if(a.melhor===b.melhor) return 0;
        })
        document.getElementById('idName').disabled=false
        document.getElementById('fruta').parentElement.innerHTML=''
        // this.cabeca.parentElement.innerHTML=''
        
        let i=0
        for (let gomo of this.corpo){
        
            gomo.parentElement.innerHTML=''
            
            i++
        }   
        this.corpo=[]
        this.vel=150
        
        
        classificacao.sort((a,b)=>{
            if(a.melhor>b.melhor) return -1;
            if(a.melhor<b.melhor) return 1;
            if(a.melhor===b.melhor) return 0;
        })
        
        let lista=document.getElementById('melhores')
        lista.innerHTML=''
        let max=0
        if (classificacao.length<10){
            max=classificacao.length
        }else{
            max=9
        }
        for (let i = 0; i<max;i++){
            let li=document.createElement('li')
            li.innerHTML=`${classificacao[i].nome} - ${classificacao[i].melhor} pontos`
            lista.appendChild(li)
        }

        divPontuacao=document.getElementById('pontuacaoAtual')
        divPontuacao.setAttribute('style','display:none')

        botaoStart=document.getElementById('start')
        botaoStart.setAttribute('style',`width:${width()*0.12}px;height: ${height()*0.07}px;font-size:${width()*0.015}px;border-radius: ${width()*0.01}px;border-width:${width()*0.003}px;padding:${width()*0.005}px`)
        labelNome=document.getElementsByTagName('label')[0]
        labelNome.setAttribute('style',`font-size:${width()*0.02}px`)
        inputNome=document.getElementById('idName')
        inputNome.setAttribute('style',`width:${width()*0.15}px;height: ${height()*0.1}px;font-size:${width()*0.015}px;border-radius: ${width()*0.01}px;border-width:${width()*0.003}px;`)
        
        
    }
}

class User{
    constructor(nome, pontuacaoAtual){
        this.nome=nome
        this.pontuacaoAtual=pontuacaoAtual
        this.melhor=0
    }

}

const classificacao=[]