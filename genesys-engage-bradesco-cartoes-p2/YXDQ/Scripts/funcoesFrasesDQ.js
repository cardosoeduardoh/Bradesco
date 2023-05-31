// FalaAdicionalBloq -->

function getFrasesInicioFalaAdicionalBloq (dados){

    var frases = [];

	if (dados['iQtdeOpIndiceORGValidoBloqueado'] == 1) {
		frases.push({ "frase": "ypiiExis1CartAdicBloq.wav" });
	} else {
		frases.push({ "frase": "ypiiExistem.wav" });
		frases.push({ "numero": dados['iQtdeOpIndiceORGValidoBloqueado'] });
    	frases.push({ "frase": "ypiiCartAdicBloq.wav" });
	}
     
    return frases;
}

function getFrasesFalaAdicionalBloq (dados){

    var frases = [];
    
    //frases.push({ "frase": "ypiiParaDesbloqCartDependDigNumCart.wav" }); Antigo
    frases.push({ "frase": "ypiiParaDesbloqConfCartDependente.wav" });
    frases.push({ "frase": "ypiiParaOutInfCartDig9.wav" });
     
    return frases;    
}
// FalaAdicionalBloq <--

//UR88 -->
function gerFrasesFalaSaidaUR88(dados){

    var frases = [];
    //frases.push({ 'frase' : 'ypiiCartFinal.wav' }); Antigo
    //frases.push({ 'string' : dados['sNumeroCartaoCPF'].substring(12,16) }); Antigo
    //frases.push({ 'frase' : 'ypiiEstaDesbloqAptoUso.wav' }); Antigo
    frases.push({ 'frase' : 'ypiiContCartConfDesbloqUso.wav' });
    frases.push({ 'frase' : 'ypiiVencCartSeraTodoDia.wav' });
    frases.push({ 'numero' : dados['UR80']['AplDiaVectoCartao'] });
    frases.push({ 'frase' : 'ypiiDeCadaMes.wav' });

    return frases;

}
//UR88 <--
