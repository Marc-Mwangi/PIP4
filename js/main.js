function pizza(size, toppings) {
    this.Size = size;
    this.Toppings = toppings;
}
var small= document.getElementsByClassName('selction');
var psize;
var sprice;
const form = document.getElementById("order");
    
form.addEventListener("submit", (e) => {
    e.preventDefault();
    for(var i = 0; i < 4; i++){
        if(form[i].type ==="radio" && form[i].checked)
        sprice = form[i].value;
        console.log(sprice);
    }
