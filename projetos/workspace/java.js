let res = document.querySelector('.res ul')
let basico = [1700, 'Altamir']
let pacnet = [350, 'AJM']
let epi = [300, 'M C']
let desinfecçao = [506, 'M C']
let higiene = [414, 'Altamir']
let serviços = [2000, 'Genival']
let pactue1 = [basico, pacnet, epi, desinfecçao, higiene, serviços]
for (let i of pactue1) {
    let valor = i[0];
    let nome = i[1];
    let itemText = `${nome} - ${valor}`;

    let ListItem = document.createElement('li');
    ListItem.textContent = itemText;
    res.appendChild(listItem);
}