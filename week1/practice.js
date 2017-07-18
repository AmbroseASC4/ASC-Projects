var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add(){
    for(var i = 0; i < num; i++){
        console.log(num[i] + num[i]);
   }
   return add();
}
















var colors = ['green', 'blue', 'red']

for(var i = 0; i >= colors.length; i++){

}

function car(name, color, door){
    this.name = name;
    this.color = color;
    this.door = door;

    return this.name
}

var audi = new car('Audi', 'White', true)