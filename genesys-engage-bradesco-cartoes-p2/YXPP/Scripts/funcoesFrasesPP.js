function getFrasesColetaCPF_CNPJ(dados) {
	
	var ret = {};	
		
	ret["frases"] = [];	
	ret["frases"].push({ "frase" : "cAtencao.wav"}); 
		
	return ret.frases;
}

function getFrasesColetaCPF(dados) {
	
	var ret = {};	
		
	ret["frases"] = [];	
	ret["frases"].push({ "frase" : "ypiiDigNumCPFCNPJTit.wav"}); 
		
	return ret.frases;
	
}

function getFraseRepetePropostas(dados){
	
	var ret = {};
	ret['opcoesValidas'] = "";
	ret['frases'] = [];

	ret['frases'].push({ 'frase' : 'ypiiParaRepetirDig2.wav' })

	if (dados.analisePropostas.strRespPropostasA.bExisteAproMais10D){
		ret['frases'].push({ 'frase' : 'ypiiCasNaoRecebCartFalAtendDig3.wav' })
		ret['opcoesValidas'] += '3'
	}

	ret['opcoesValidas'] += '2'
		
	return ret;

}