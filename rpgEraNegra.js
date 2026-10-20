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
      if(escolha==1){
        
        class personagem {
          constructor(nome,raca){
           this.nome=nome
           this.raca=raca
           this.nivel= 1
           this.inventario=[]
           this.arma= null
           this.vida=0
           this.dano=0
           this.mana=0
           this.ouro= 0
           this.habilidades= []
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
        class item{
          constructor(dano,durabilidade,descrição,tipo,munição,efeito){
            this.dano= dano
            this.durabilidade=durabilidade
            this.descrição= descrição
            this.tipo=tipo
            this.munição = munição
            this.efeito = efeito
          }
        }
        class habilidade{
          constructor(nome,dano,gasto,tipo,adicional,descrição){
            this.nome= nome
            this.dano= dano
            this.gasto= gasto
            this.tipo= tipo
            this.adicional= adicional
            this.descrição= descrição
          }
        }

        let nome=prompt("escolha um nome para o seu personagem")
        let raca= prompt("digite a raça que você deseja: humano,elfo,anão")
        let jogador= new personagem (nome,raca)
       

        alert("Bem vindo ao começo de sua jornada," + jogador.nome + "!")
        alert("Sua historia começa em tua casa")
        if(jogador.raca == "humano"){
          alert("O som de carroças sendo puxadas e conversas de pessoas vem pela janela,o cheiro dos animais e dos pães feitos pelos padeiros enche o ar")
          alert("Um sentimento de aventura invade seus sentidos")
          alert("Assim que você sai de casa,é recebido pelos cumprimentos de seus vizinhos,tomando rumo para a academia de aventureiros")
          alert("Ao chegar na academia,os diversos aventureiros conversam entre si,outros vendem seus itens por ouro ou bebida")
          alert("Após entrar na sala que você havia sido chamado,você encontra seu mentor,senhor Hanson,ja lhe esperando")
          alert("Senhor Hanson: ah," + jogador.nome + "!Como é bom te ver,no horário como sempre,venha aqui rapaz")
          alert("Ele te leva ate uma mesa,onde você consegue ver um mapa junto de uma espada embainhada")
          alert("Senhor Hanson: Rapaz,você ira engresssar em um caminho muito perigoso como aventureiro,então aqui está")
          let espada = new item (3,40,"uma lamina de ferro basica,otima para iniciantes","corpo a corpo",0,null)
          jogador.inventario.push(espada)
          alert(jogador.nome + " ganhou uma espada e um mapa")
          alert("Senhor Hanson: use esses itens com sabedoria,rapaz")
          alert("Você agradece seu mentor,então se vira para sair em busca de começar sua jornada")
        }
       escolha= prompt("oque voce gostaria de fazer agora? 1. explorar,2.treinar,3.comprar algo")
       if(escolha==1){
        destino=prompt("para qual local você gostaria de ir? 1.floresta dos goblins(nivel recomendado:1),2.pantado da podridão(nivel recomendado(5)")
        
       }
  
}
}
}
jogo1= new EraNegra
jogo1.iniciar()