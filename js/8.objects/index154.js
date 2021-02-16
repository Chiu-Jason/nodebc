const player = {
    name: null,
    energy: 100,
    lives: 3,
};
player.loseEnergy = function(damage){
    this.energy -= damage; 
    if (this.energy <= 0){
        player.loseLife();
        this.energy = 100;
    }   
};
player.recoverEnergy = function(energyUp){
    this.energy += energyUp;
    if (this.energy > 100){
        this.energy = 100;
    }
}
player.loseLife = function(){
    this.lives--;
    if (this.lives < 0){
        console.log("Game Over");
    }
}
player.recoverLife = function(){
    if (this.lives < 99){
    this.lives++;
    }
};
player.name = "Shadow Hunter";
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();
console.log(`Player ${player.name} has ${player.energy} energy and ${player.lives} lives`);
