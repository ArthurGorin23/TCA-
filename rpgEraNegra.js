class personagem{
    constructor(nome,historia,raca){
    this.nome=nome
    this.historia=historia
    this.raca=raca
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
 