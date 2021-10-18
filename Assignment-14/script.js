let cnt = 0;
window.onload=function() {
    console.log('Hi ');
    setTimeout(()=>{
        mainFunction();
    },2000);
}


function mainFunction() {
    let div = document.getElementById('loading');
    div.remove();
   
    let main_container = document.getElementById("main-container");
    main_container.innerHTML = `<h2 class="heading">Counter</h2>
    <button id = "decriment" class = "fade" >-</button>
    <p>${cnt}</p>
    <button id="increment" onclick = "incr()">+</button>`;

}
function incr() {
    cnt = cnt + 1;
    let main_container = document.getElementById("main-container");
    main_container.innerHTML = `
    <h2 class="heading">Counter</h2>
    <button id = "decriment" onclick = "decr()">-</button>
    <p>${cnt}</p>
    <button id="increment" onclick = "incr()">+</button>`;
}
function decr() {
    cnt = cnt-1;
    let main_container = document.getElementById("main-container");
    if(cnt==0)
    {
        main_container.innerHTML = `
        <h2 class="heading">Counter</h2>
        <button id = "decriment" class="fade" >-</button>
        <p>${cnt}</p>
        <button id="increment" onclick = "incr()">+</button>`;
    }
    else{
        main_container.innerHTML = `
        <h2 class="heading">Counter</h2>
        <button id = "decriment" onclick = "decr()">-</button>
        <p>${cnt}</p>
        <button id="increment" onclick = "incr()">+</button>`;
    }
  
}