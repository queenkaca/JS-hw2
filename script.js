let allDuration = 0;
let allPrice = 0;

function dodaj(element) {
    let mainEl = element.closest('.col-md-3');
    let duration = mainEl.querySelector('.duration .minute-duration').innerText;
    let price = mainEl.querySelector('.price .dollar-price').innerText;
    let dno = document.querySelector('.dno');
    let total = document.querySelector('.total');
    let naziv = mainEl.querySelector('.naziv').innerText;

    duration = parseInt(duration);
    price = parseInt(price);

    allDuration += duration;
    allPrice += price;

    dno.innerHTML += `<div class="dno">
                        <div class="poddno">
                        <h4><span class="naziv1">${naziv}</span> : $<span class="cena">${price}</span></h4> 
                        <button onclick="remove(this)" class="remove-item"> Ukloni </button>
    
    </div>
</div>`;

    total.innerHTML = `<div class="total">
                        <h4>Potroseno novca(ukupno): $${allPrice}</h4>
    </div>`;

    element.innerText = 'Pogledano';
    element.setAttribute('disabled', 'true');
    mainEl.style.opacity = "0.5";
}

function remove(element) {
    let mainEl = document.querySelector('.dno');
    let price = mainEl.querySelector('h4 .cena').innerText;
    let naziv = document.querySelector('.container .row .col-md-6 .dno .poddno h4 .naziv1').innerHTML;
    let item = document.querySelectorAll('.col-md-3');

    price = parseInt(price);
    allPrice -= price;

    document.querySelector('.total').innerHTML = `<h4>Potroseno novca(ukupno): $${allPrice}<?h4>`;
    let poddno = mainEl.querySelector('.poddno');
    poddno.remove();

    item.forEach(function (i) {
        let itemName = i.querySelector('.row .name .naziv').innerText;
        if(itemName === naziv) {
            i.querySelector('.row button').removeAttribute('disabled');
            i.querySelector('.row button').innerText = 'Gledaj';
            i.style.opacity = "1.0";
        }
    });
}