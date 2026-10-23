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
           this.Xpnecessario= 10
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
         uparNivel (Xp)
         { nivel_ganho=0
         while(Xp>=this.Xpnecessario){
          this.nivel+=1
          this.vida+=5
          this.dano+=1
          this.mana+=5
          this.Xp-= this.Xpnecessario
          nivel_ganho+=1
         }
         }
        }
        class item{
          constructor(dano,durabilidade,descrição,tipo,munição){
            this.dano= dano
            this.durabilidade=durabilidade
            this.descrição= descrição
            this.tipo=tipo
            this.munição = munição
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

        class npc {
          constructor(nome,raca,nivel,arma,vida,dano,mana,ouro,habilidades,xp){
           this.nome=nome
           this.raca=raca
           this.nivel= nivel
           this.arma= arma
           this.vida=vida
           this.dano=dano
           this.mana=mana
           this.ouro= ouro
           this.habilidades= habilidades
           this.xp=xp  
          }
        }
        let nome=prompt("escolha um nome para o seu personagem")
        let raca= prompt("digite a raça que você deseja: humano,elfo,anão")
        let jogador= new personagem (nome,raca)
        alert("Bem vindo ao começo de sua jornada," + jogador.nome + "!")
        alert("Sua historia começa em tua casa")
        if(jogador.raca == "humano"){
          let local_jogador= "vila Ashber"
          alert("O som de carroças sendo puxadas e conversas de pessoas vem pela janela,o cheiro dos animais e dos pães feitos pelos padeiros enche o ar")
          alert("Um sentimento de aventura invade seus sentidos")
          alert("Assim que você sai de casa,é recebido pelos cumprimentos de seus vizinhos,tomando rumo para a academia de aventureiros")
          alert("Ao chegar na academia,os diversos aventureiros conversam entre si,outros vendem seus itens por ouro ou bebida")
          alert("Após entrar na sala que você havia sido chamado,você encontra seu mentor,senhor Hanson,ja lhe esperando")
          alert("Senhor Hanson: ah," + jogador.nome + "!Como é bom te ver,no horário como sempre,venha aqui rapaz")
          alert("Ele te leva ate uma mesa,onde você consegue ver um mapa junto de uma espada embainhada")
          alert("Senhor Hanson: Rapaz,você ira engresssar em um caminho muito perigoso como aventureiro,então aqui está")
          let espada = new item (3,40,"uma lamina de ferro basica,otima para iniciantes","corpo a corpo",0)
          jogador.inventario.push(espada)
          jogador.arma= espada
          alert(jogador.nome + " ganhou uma espada e um mapa")
          alert("Senhor Hanson: use esses itens com sabedoria,rapaz")
          alert("Você agradece seu mentor,então se vira para sair em busca de começar sua jornada")
        }
        function combate(jogador,inimigo)
        {
          let jogCombate= jogador
          jogCombate_Iniciacao= Math.round(Math.random()*12)
          inimigo_Iniciacao= Math.round(Math.random()*12)
          if(jogCombate_Iniciacao < inimigo_Iniciacao)
            {
          while((jogCombate.vida > 0) && (inimigo.vida > 0))
          {
            
            alert(inimigo.nome + " ira lhe atacar!")
             inimigo_escolha= 0
            if(inimigo.habilidades.lenght > 0)
              {
            inimigo_escolha= Math.round(Math.random()*100)
              }
  
             let inimigo_ataque= inimigo.dano + Math.round(Math.random()*6) + inimigo.arma.dano
             if(inimigo_escolha>=90){
               e = Math.floor(Math.random()*(inimigo.habilidades.length))
              inimigo_ataque= inimigo.habilidades[e].dano
              inimigo.mana-=inimigo.habilidades[e].gasto
             }
             inimigo_acerto= Math.round(Math.random()*20)
             if(inimigo_acerto>= 10)
             {
              r= prompt(inimigo.nome + " te atacou,deseja desviar? 1.sim,2.não")
              if(r==1){
              jogCombate_desvio=  Math.round(Math.random()*20)
              }
              else{
                jogCombate_desvio= 0
              }
              if(jogCombate_desvio>inimigo_acerto )
              {
                alert("vocẽ conseguiu desviar com sucesso!")
              }
              else{

                alert ("você foi acertado e recebeu " + inimigo_ataque + " de dano!")
                jogCombate.vida= jogCombate.vida - inimigo_ataque
                alert("você esta com " + jogCombate.vida + " de vida")
             
             }
            }
             jogCombate_reacao= prompt ("seu turno,gostaria de usar qual ataque? 1.ataque fisico,2.habilidade")
             if(jogCombate_reacao==1){
              jogCombate_acerto= Math.round(Math.random()*20)
              if(jogCombate_acerto>= 10)
                {
                alert("você executou seu golpe")
                
                 inimigo_desvio=  Math.round(Math.random()*20)
                 
                 if(inimigo_desvio>jogCombate_acerto )
                 {
                   alert(inimigo.nome+ "conseguiu desviar!")
                 }
                 else{
                     jogCombate_ataque= jogCombate.dano + Math.round(Math.random()*6) + jogCombate.arma.dano
                   alert (inimigo.nome + "foi acertado e recebeu " + jogCombate_ataque+ " de dano!")
                   inimigo.vida= inimigo.vida - jogCombate_ataque
                
                }
             }
            
             
            }
          }
        }
        if(jogCombate_Iniciacao > inimigo_Iniciacao)
        {
          while((jogCombate.vida>0) && (inimigo.vida > 0))
          {
            jogCombate_reacao= prompt ("seu turno,gostaria de usar qual ataque? 1.ataque fisico,2.habilidade")
            if(jogCombate_reacao==1){
             jogCombate_acerto= Math.round(Math.random()*20)
             if(jogCombate_acerto>= 10)
               {
               alert("você executou seu golpe")
               
                inimigo_desvio=  Math.round(Math.random()*20)
                
                if(inimigo_desvio>jogCombate_acerto )
                {
                  alert(inimigo.nome+ "conseguiu desviar!")
                }
                else{
                    jogCombate_ataque= jogCombate.dano + Math.round(Math.random()*6) + jogCombate.arma.dano
                  alert (inimigo.nome + "foi acertado e recebeu " + jogCombate_ataque+ " de dano!")
                  inimigo.vida= inimigo.vida - jogCombate_ataque
               
               }
              }

            }

            alert(inimigo.nome + " ira lhe atacar!")
             inimigo_escolha= 0
            if(inimigo.habilidades.lenght > 0)
              {
            inimigo_escolha= Math.round(Math.random()*100)
              }
  
             let inimigo_ataque= inimigo.dano + Math.round(Math.random()*6) + inimigo.arma.dano
             if(inimigo_escolha>=90){
               e = Math.floor(Math.random()*(inimigo.habilidades.length))
              inimigo_ataque= inimigo.habilidades[e].dano
              inimigo.mana-=inimigo.habilidades[e].gasto
             }
             inimigo_acerto= Math.round(Math.random()*20)
             if(inimigo_acerto>= 10)
             {
              r= prompt(inimigo.nome + " te atacou,deseja desviar? 1.sim,2.não")
              if(r==1){
              jogCombate_desvio=  Math.round(Math.random()*20)
              }
              else{
                jogCombate_desvio= 0
              }
              if(jogCombate_desvio>inimigo_acerto )
              {
                alert("vocẽ conseguiu desviar com sucesso!")
              }
              else{

                alert ("você foi acertado e recebeu " + inimigo_ataque + " de dano!")
                jogCombate.vida= jogCombate.vida - inimigo_ataque
                alert("você esta com " + jogCombate.vida + " de vida")
             
             }
            }


        }
      }
     if(inimigo.vida <= 0)
     {
      alert("parabens,você derrotou um " + inimigo.nome + "!" )
      jogador.uparNivel (inimigo.xp)
      alert("voce ganhou " + inimigo.xp + " de XP e upou " + nivel_ganho + " niveis!")

     }
  if(jogCombate.vida <= 0)
  {
    alert ("você perdeu o combate")
  }
  }

  let nada= new item (0,Infinity,"","corpo a corpo",0)
        destino=prompt("para qual local você gostaria de ir? 1.floresta dos goblins(nivel recomendado:1),2.pantado da podridão(nivel recomendado(5)")
        if(destino== 1){
        local_jogador= "floresta goblin"
        let adaga= new item (1,20,"uma lamina fina de cabo curto","corpo a corpo",0)
        let npc1= new npc ("goblin","goblin",1,adaga,10,0,50,Math.trunc(Math.random()*20),[],10)
        let npc2= new npc ("lobo","lobo",2,null,25,2,60,null,null,25)
        let cichote_de_vinhas= new habilidade ("chicote de vinhas",4,30,"corpo a corpo",0,"um amontoado de vinhas em formato de chicote")
        let npc3= new npc ("espectro de arvore","espectro de arvore",2,null,30,1,120,null,[chicote_de_vinhas],30)
        let NPCs_floresta_dos_goblins= [npc1,npc2,npc3]
        alert("você adentra na floresta dos goblins,conhecida pela sua biodiversidade cheia dessas criaturinhas verdes que amam ouro e outros animais selvagens")
       let n = Math.round((Math.random()*30)/10)
       let inimigo= NPCs_floresta_dos_goblins[n]
       alert("Você escuta um barulho,ao se aproximar,você encontra um "+ inimigo.nome + "!")
       alert("um combate se inicia!")
       jogo1.combate(jogador,inimigo)

        
       


}
}
}
}
jogo1= new EraNegra
jogo1.iniciar()
