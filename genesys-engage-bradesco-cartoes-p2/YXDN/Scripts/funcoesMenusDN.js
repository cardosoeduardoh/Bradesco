function getFrases_MConfDespNeg(dados) {
	var ret = {};
	
	var parametros = dados.parametros;

	ret['nomeMenu'] = "MConfDespNeg";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4016";
	ret['statInvalida_NOINPUT'] = "4016";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "1171";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "1171";
	ret['statValida'] = "";
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	ret['logTick'] = 'TICK_LOG_MCONTESTACOMPRASAQUE';

	ret["frases"].push({ "frase": "ypiiParaContDig2.wav" });
	ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });

	ret["opcoesValidas"] = "02";
		
	return ret;
}