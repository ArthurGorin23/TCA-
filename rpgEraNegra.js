class EraNegra{
 constructor (){
     Start(){
      console.clear
      console.log("bem vindo a Era Negra!")
      opções=(
        console.log("1. continuar"),
        console.log("2.sair")
      )
      prompt("escolha uma opção: " + opções)
     }
     
     
     class personagem{
     constructor(nome,historia,raca){
      this.nome=nome
      this.historia=historia
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