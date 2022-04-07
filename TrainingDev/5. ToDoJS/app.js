const form = document.querySelector('form');
const liste = document.querySelector('ul');
const input = document.querySelector('input');
let toutesLesTaches = [];

form.addEventListener('click', event => {
    event.preventDefault();

    const text = input.value.trim();
    if(text !== '') {
        rajouterUneTache(text);
        input.value = '';
    }
})

function rajouterUneTache(text) {
    const toDo = {
        text,
        id: Date.now()
    }
    afficherListe(toDo);
} 

function afficherListe(toDo) {

    const item = document.createElement('li');
    item.setAttribute('data-key', toDo.id);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', tacheFaite);
    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerText = toDo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', supprimerTache);
    const img = document.createElement('img');
    img.setAttribute('src', 'ressources/fermer.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    liste.appendChild(item);
    toutesLesTaches.push(item);

}

function tacheFaite(e) {
    e.target.parentNode.classList.toggle('finDeTache');
}


function supprimerTache(e) {

    toutesLesTaches.forEach(el => {

        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
            el.remove();
            toutesLesTaches = toutesLesTaches.filter(li => li.dataset.key !== el.dataset.key);
        }

    })


}