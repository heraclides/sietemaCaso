let checar1 = false , checar2 = false, checar3=false;

//função correspondente ao exercicio 1, chamada ao clicar no button
function atividade1() {
    checar1 = true;
    checar2 = false;
    checar3 = false;

    const questao = 'Digite um numero de 1 a 7 e descubra o dia da semana.';
    //mostra em tela a expressão do exercicio
    document.getElementById('questao').innerText = questao;

    //recebe a div que consta os dados para exibir o input
    var inputContainer = document.getElementById('inputContainer');
    // Alterar a propriedade display para mostrar o input
    inputContainer.style.display = 'flex';
    document.getElementById('resultado').innerText = ""
    checarResultado()

}

function checarResultado() {
    if (checar1) {
        resultado1();
    } else if (checar2) {
        resultado2();
    } else if (checar3) {
        resultado3();
    }
}

function resultado1() {
    
    //converte o numero digitado no campo do imput em um número inteiro
    let num = parseInt(document.getElementById('userInput').value,10);

    const dias = [
        '', //mostra o resulatado dos dia da semana
        'O dia da semana é Domingo.',
        'O dia da semana é Segunda-Feira.',
        'O dia da semana é Terça-Feira.',
        'O dia da semana é Quarta-feira.',
        'O dia da semana é Quinta-Feira.',
        'O dia da semana é Sexta-feira.',
        'O dia da semana é Sábado.'

    ]

    //confere se o numero digitado e um numero valido e carrega a resposta senâo manda um erro.
    let texto = (num>=1 && num <=7) ? dias[num] : 'Você digitou um valor inválido! Digite um número de (1 a 7).';

    //carrega a resposta e mostra em tela
    document.getElementById('resultado').innerText = texto;

    //limpa os dados digitados
    document.getElementById('userInput').value = "";
    num="";



    // switch (num) {
    //     case '1':
    //         document.getElementById('resultado').innerText = 'o dia da semana é segunda-feira';
    //         break

    //     case '2':
    //         document.getElementById('resultado').innerText = 'o dia da semana é terça-feira';
    //         break

    //     case '3':
    //         document.getElementById('resultado').innerText = 'o dia da semana é quarta-feira';
    //         break

    //     case '4':
    //         document.getElementById('resultado').innerText = 'o dia da semana é quinta-feira';
    //         break

    //     case '5':
    //         document.getElementById('resultado').innerText = 'o dia da semana é sexta-feira';
    //         break

    //     case '6':
    //         document.getElementById('resultado').innerText = 'o dia da semana é sábado';
    //         break
    //     case '7':
    //         document.getElementById('resultado').innerText = 'o dia da semana é domingo';
    //         break
    
}



function limpar() {
    //limpa os dados do input
    document.getElementById('userInput').value = "";
    num = "";
    //limpa os dados de resposta
    document.getElementById('resultado').innerText = "";
    //esconde o input
    inputContainer.style.display = 'none';
    //limpa o questinario do exercicio
    document.getElementById('questao').innerText = "";
}



function atividade2() {
    checar2= true;
    checar= false;
    checar3= false;

    const questao = 'Digite o nome de uma cor e descubra se ela e uma cor primária.';

    document.getElementById('questao').innerText = questao;

    var inputContainer = document.getElementById('inputContainer');
    // Alterar a propriedade display para mostrar o input
    inputContainer.style.display = 'flex';
    document.getElementById('resultado').innerText = ""
    checarResultado();
}


function resultado2() {

   // Obtém o valor do input e tenta convertê-lo para um número inteiro
let corDigitada = document.getElementById('userInput').value;

// Array que descreve as cores
const cor = {
    'azul': 'A cor azul é uma cor primária.',
    'vermelho': 'A cor vermelha é uma cor primária.',
    'amarelo': 'A cor amarela é uma cor primária.',
    'verde': 'A cor verde é uma cor secundária, mistura Amarelo com Azul.',
    'laranja': 'A cor laranja é uma cor secundária, mistura amarelo com vermelho.',
    'violeta': 'A cor violeta é uma cor secundária, mistura vermelho com azul.',
    'roxa': 'A cor roxa é uma cor secundária, mistura vermelho com azul.'
};

// Verifica se o valor é um número válido dentro do intervalo 1 a 7
let texto = cor[corDigitada] || 'Você digitou uma cor inválida!';
    

// Atualiza o texto do elemento com id 'resultado'
document.getElementById('resultado').innerText = texto;

// Limpa o valor do input
document.getElementById('userInput').value = "";
corDigitada ="";

    // switch (num) {
    //     case 'azul':
    //         document.getElementById('resultado').innerText = 'A cor azul eé uma cor primária';
    //         break

    //     case 'vermelha':
    //         document.getElementById('resultado').innerText = 'A cor vermelha é uma cor primária';
    //         break

    //     case 'verde':
    //         document.getElementById('resultado').innerText = 'A cor verde é uma cor primária';
    //         break

    //     default:
    //         document.getElementById('resultado').innerText = 'Cor não reconhecida';
    //         break
    // }
}

function atividade3() {
    checar3=true;
    checar2= false;
    checar= false;

    const questao = 'Digite um numero de 1 a 7 e descubra o esporte relacionado.';
    //mostra em tela a expressão do exercicio
    document.getElementById('questao').innerText = questao;

    //recebe a div que consta os dados para exibir o input
    var inputContainer = document.getElementById('inputContainer');
    // Alterar a propriedade display para mostrar o input
    inputContainer.style.display = 'flex';
    document.getElementById('resultado').innerText = ""
    checarResultado();
}

function resultado3() {
    
    //converte o numero digitado no campo do imput em um número inteiro
    let num = parseInt(document.getElementById('userInput').value,10);

    const dias = [
        '', //mostra o resulatado dos dia da semana
        'Futebol esporte mais popular no Brasil, praticado em estádios.',
        'Volei esporte coletivo Praticado em quadra dividido por uma rede.',
        'Basquete jogado por duas equipes, objetivo acertar a cesta do advérsario.',
        'Tênis é um esporte que dois jogadores lançam uma bola usando uma raquete.',
        'Bike as principais modalidades são CICLISMO, MONTAIN BIKE, BMX.',
        'Golf é um esporte ao ar livre, cuja meta e acertar varios buracos com uso de tacos.',
        'Natação é uma atividade fisica baseada na capacidade de se locomover na água.'

    ]

    //confere se o numero digitado e um numero valido e carrega a resposta senâo manda um erro.
    let texto = (num>=1 && num <=7) ? dias[num] : 'Você digitou um valor inválido! Digite um número de (1 a 7).';

    //carrega a resposta e mostra em tela
    document.getElementById('resultado').innerText = texto;

    //limpa os dados digitados
    document.getElementById('userInput').value = "";
    num="";
}




