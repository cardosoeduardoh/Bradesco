function getDiretorioFrases() {
    return "../../YPII/Resources/Prompts/Frases/";
}

function getFrases_MConfAlterEnd(dados) {
	var ret = {};	    
	
	
	var parametros = dados.parametros

	ret['nomeMenu'] = "MConfAlterEnd";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4024";
	ret['statInvalida_NOINPUT'] = "4024";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	
	ret['logTick'] = 'TICK_LOG_MCONFALTEND';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiParaConfirmarDig2.wav" });
	ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });

	ret["opcoesValidas"] = "02";
		
	return ret;
}