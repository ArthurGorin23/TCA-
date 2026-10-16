class EraNegra{
 constructor (){}
   iniciar(){
      console.clear()
      alert("bem vindo a Era Negra!")
      let opções=["1. continuar","2. sair"]
        
      let escolha=prompt(opções.join("\n"))
      if(escolha==2){
      alert("volte sempre")
      }
      else{
        class personagem {
          constructor(nome,raca){
           this.nome=nome
           this.raca=raca
           this.inventario=[]
           this.vida=0
           this.dano=0
           this.mana=0
           this.ataques= []
         if(this.raca== "humano"){
           this.vida=20
           this.dano=0
           this.mana=100
         }
         if(this.raca== "elfo"){
           this.vida=15
           this.dano=0
           this.mana=150
         }
         if(this.raca== "anão"){
           this.vida=25
           this.dano=1
           this.mana=70
           }
         }
     
      }
        let nome=prompt("escolha um nome para o seu personagem")
        let raca= prompt("digite a raça que você deseja: humano,elfo,anão")
        let jogador= new personagem (nome,raca)
        alert("bem vindo ao começo de sua jornada," + jogador.nome + "!")
        alert("sua historia começa em tua casa")
        if(jogador.raca== humano){
          alert("o som de carroças sendo puxadas e conversas de pessoas vem pela janela,o cheiro dos animais e dos pães feitos pelos padeiros enche o ar")
          alert("um sentimento de aventura invade seus sentidos")
        }
        

    
        class arma{
          constructor(nome,dano,durabilidade,descrição){
            this.nome= nome
            this.dano= dano
            this.durabilidade=durabilidade
            this.descrição= descrição
          }
        }
        
        class ataque{
          constructor(nome,dano,gasto,tipo,adicional,descrição){
            this.nome= nome
            this.dano= dano
            this.gasto= gasto
            this.tipo= tipo
            this.adicional= adicional
            this.descrição= descrição
          }
        }
        
}
  
}
}

jogo1= new EraNegra
jogo1.iniciar()