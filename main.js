// Variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const imgGet = document.querySelector('#imgGet')
const btnReset = document.querySelector('#btnReset')

// Gerando Frases aleatórias
const frases = [
    'É em meio a dificuldade que se encontra a oportunidade',
    'O êxito é ir de frustração a frustração sem perder a animação',
    'Mesmo que algo pareça difícil, nunca desista antes de tentar',
    'Você é o único que entende as suas dificuldades, por isso motive se a prosseguir',
    'Não é uma vida ruim, é apenas um dia ruim, lembre-se disso',
    'A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis',
    'Que os dias bons se tornem rotina, e os ruins se tornem raros',
    'É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota',
    'Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução',
    'Já pensou que você já superou muitas dificuldades até aqui?',
]
function frasebiscoito(){
    let fraseselecionada = Math.floor(Math.random() * 10 )
    return fraseselecionada
}
document.getElementById('phrases').innerText=(frases[frasebiscoito()])

// Eventos
imgGet.addEventListener('click', handleMouseEnter)
btnReset.addEventListener('click', handleMouseClick)

// function callback
function handleMouseEnter() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}
function handleMouseClick() {
    document.location.reload(true);
} 