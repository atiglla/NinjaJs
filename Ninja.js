class Ninja {
    constructor(nombre){
        this.nombre=nombre;
        this.salud=100;
        this.velocidad=3;
        this.fuerza=3;

    }

    sayName(){
        console.log(`Your name is ${this.nombre}`);
    }

    showStats(){
        console.log(`El nombre es ${this.nombre} , tiene de ${this.fuerza} fuerza, su velocidad es ${this.velocidad} y la salud del Ninja es ${this.salud}.`);
    }

    drinkSake (){
        this.salud+=10;
    }

}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();