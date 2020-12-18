function dictionary(){
    this.items={}

    dictionary.prototype.set=function(key,value){
        this.items[key]=value
    }
    dictionary.prototype.has=function(key){
        return this.items.hasOwnProperty(key)
    }
    dictionary.prototype.remove=function(key){
        if(!this.has(value))return false
        delete this.items[key]
        return true
    }
    dictionary.prototype.get=function(key){
        return this.has(key)?this.items[key]:undefined
    }
    dictionary.prototype.keys=function(){
        return Object.keys(this.items)
    }


console.log(process.argv)
let playerAction =process.argv[process.argv.length-1]
console.log(playerAction)

let random=Math.random()*3

if(random<1){
    let computerAction="rock"
}else if( random>2){
    let computerAction="scissor"
}else{
    let computerAction="paper"
}


if(computerAction==playerAction){
    console.log("平局")
}