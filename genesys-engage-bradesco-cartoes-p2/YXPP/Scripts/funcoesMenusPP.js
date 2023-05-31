function getFrases_FalaPgmFidAngel(dados) {
	var ret = {};	    
	var retry = dados["iRetry"];

	ret['nomeMenu'] = "FalaPgmFidAngel";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "";
	ret['statInvalida_NOINPUT'] = "";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";

	ret["frases"].push({ "frase": "ypiiParaRepetirDig2.wav" });
	ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });
	

	if (retry < 3) {
		adicionaDados(dados,"estatisticaConsulta", "4019");
		dados["iRetry"] = retry + 1;

	}

	ret["opcoesValidas"] = "02";
		
	return ret;
}