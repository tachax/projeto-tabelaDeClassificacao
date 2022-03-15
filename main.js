//chaves referenciam objetos
var carol = {nome:"Carol", vitorias:0, empates:0, derrotas:0, pontos:0};
var paulo = {nome:"Paulo", vitorias:0, empates:0, derrotas:0, pontos:0};


/* para acessar valores específicos do objeto, utiliza-se o ponto
    console.log(rafa.vitorias);
    console.log(paulo.empates); */


//(nome da variavel que vai receber os comandos)
function calculaPontos(jogador) {
  var pontos = (jogador.vitorias*3) + jogador.empates;
  return pontos; //resultado da função - valor final 
}

//atribui o resultado da funcao de calcular pontos para os pontos do jogador
carol.pontos = calculaPontos(carol);
paulo.pontos = calculaPontos(paulo);

var jogadores = [carol, paulo];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onclick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento += "<td><button onclick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento += "<td><button onclick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento += "</tr>"
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;

}

//chamando a função
exibeJogadoresNaTela(jogadores);


//usuário adiciona um novo jogador
function adicionarJogador(novo) {
  let nomeNovo = document.getElementById("novo").value;
  let novoJogador = {
    nome: nomeNovo,
    vitorias:0, 
    empates:0, 
    derrotas:0,
    pontos:0
  };

  jogadores.push(novoJogador);
  exibeJogadoresNaTela(jogadores);
}


//(indice do jogador da vez)
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);

  for (var vitoria = 0; vitoria < jogadores.length; vitoria++) {
    if (vitoria != i ) {
      var outrosJogadores = jogadores[vitoria];
      outrosJogadores.derrotas++;

      exibeJogadoresNaTela(jogadores);
    }
  }
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);

  for (var empate = 0; empate < jogadores.length; empate++) {
    if (empate != i) {
      var outrosJogadores = jogadores[empate];
      outrosJogadores.empates++;
      outrosJogadores.pontos = calculaPontos(outrosJogadores);

      exibeJogadoresNaTela(jogadores);
    }
  }
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;

  for (var derrota = 0; derrota < jogadores.length; derrota++) {
    if (derrota != i ) {
      var outrosJogadores = jogadores[derrota];
      outrosJogadores.vitorias++;
      
      outrosJogadores.pontos = calculaPontos(outrosJogadores);

      exibeJogadoresNaTela(jogadores);
    } 
  }
}


//zera todos os dados da tabela
function reiniciarJogo(i) {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}
