function tabuar() {
    let num = window.document.getElementById('txtnum');
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Digite algum número para fazer a tabuada');
    } else {
        let n = (Number(num.value));
        let contador = 1;
        tab.innerHTML = '';

        while(contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item);
            contador++;
        }
        
    }
    
}