function getFrases_FalaConfirmaBloqueio(dados) {
	
	var ret = {};	    
	var parametros = dados['parametros'];
	__Log('dados.sNumeroCartaoCPF  : ' + JSON.stringify(dados.sNumeroCartaoCPF)); 
	__Log('dados.AplCliente.CartaoNum  : ' + JSON.stringify(dados.AplCliente.CartaoNum)); 

	ret['nomeMenu'] = "FalaConfirmaBloqueio";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "0000";
	ret['statInvalida_NOINPUT'] = "0000";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	
	ret['logTick'] = 'TICK_LOG_MADICTIT';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiConfirBloqCart.wav" });
	ret["frases"].push({ "frase": nomeTipoCartaoConfDesbloqueio(dados) });
	ret["frases"].push({ "frase": "ypiiFinal.wav" });
	ret["frases"].push({ "string": dados["sNumeroCartaoCPF"].substring(dados["sNumeroCartaoCPF"].length - 4)});
	ret["frases"].push({ "frase": "ypiiDig2ParaSim3Nao.wav" });

	ret["opcoesValidas"] = "23";
		
	return ret;
}

function getFrasesMenuAdicTit(dados) {
	var ret = {};

	var parametros = dados['parametros'];

	ret['nomeMenu'] = "MenuAdicTit";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];

	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";

	ret['statInvalida_NOMATCH'] = "0000";
	ret['statInvalida_NOINPUT'] = "0000";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['logTick'] = "TICK_LOG_MADICTIT";

	ret['statEvDesligamento_NOMATCH'] = "";
	ret['statEvDesligamento_NOINPUT'] = "";

	ret['statValida'] = "";

	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiParaBloqCartAdicDig2.wav" });
	ret["frases"].push({ "frase": "ypiiParaBloqCartTitDig3.wav" });
	ret["frases"].push({ "frase": "cVoltarMenuInicialDig0.wav" });
	
	ret["opcoesValidas"] = "023";

	return ret;
}

function getFrases_MenuPosBloqueio(dados) {
	
	var ret = {};	    
	var parametros = dados['parametros'];

	ret['nomeMenu'] = "MenuPosBloqueio";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "0000";
	ret['statInvalida_NOINPUT'] = "0000";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	
	ret['logTick'] = 'TICK_LOG_MPOSBLOQPR';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiParaSolicEnvNovCartDig2.wav" });
	ret["frases"].push({ "frase": "ypiiDesejBloqCartDig3.wav" });
	

	ret["opcoesValidas"] = "23";
		
	return ret;
}

function getFrasesFalaConfirmaBloqueioCartao(dados) {

	var ret = {};
	var parametros = dados['parametros'];
	

	ret['nomeMenu'] = "FalaConfirmaBloqueio";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret['opcoesValidas'] = '';

	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";

	ret['statInvalida_NOMATCH'] = "0000";
	ret['statInvalida_NOINPUT'] = "0000";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";

	ret['statEvDesligamento_NOMATCH'] = "";
	ret['statEvDesligamento_NOINPUT'] = "";
	
	ret['logTick'] = 'TICK_LOG_MOPCARBLOQ';

	ret['statValida'] = "";

	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	//var listaCartoesBloqueio = verCartaoValidoDesbloqueio(dados);
	
	if(dados['eTipoCartaoBloqueio'] == 'TIPO_CARTAO_ADICIONAL'){
		
		var listaCartoesBloqueio = dados['ListaCartoesAdicionaisBloqueio'];	
		
	}else{
		
		var listaCartoesBloqueio = dados['ListaCartoesTitularBloqueio'];
		
	}
	__Log('#### dados.eTipoCartaoBloqueio :' + dados.eTipoCartaoBloqueio)
	__Log('#### listaCartoesBloqueio :' + listaCartoesBloqueio)
		

	for (var i = 0; i < listaCartoesBloqueio.length; i++) {

		var opcao = i + 2;

		ret['frases'].push({ 'frase' : 'ypiiParaBloqCart.wav' });
		ret['frases'].push({ 'frase' : nomeTipoCartaoConfBloqCar(dados, listaCartoesBloqueio, i) });
		ret['frases'].push({ 'frase' : 'ypiiFinal.wav' });
		ret['frases'].push({ 'string' :  listaCartoesBloqueio[i]['NumCartao'].substring(listaCartoesBloqueio[i]['NumCartao'].length - 4) });
		ret['frases'].push({ 'frase' : 'cDigite' + opcao + '.wav' });
		ret['opcoesValidas'] += opcao.toString();


	}
	
	return ret;

}