function clicked() {
    let ele = document.getElementById('newBar');
    let k = ele.style.top;
    // console.log(k)
    ele.style.top = k != '0vh' ? '0vh' : '-100vh';
    // ele.style.transition = '100ms';
    // ele.style.opacity = '1';
}