function ordenar() {
    
    let arr = document.getElementById("inputValores").value;

    let numArray = arr.split(",");
    numArray.sort();

    document.getElementById("result").innerText = numArray;

}