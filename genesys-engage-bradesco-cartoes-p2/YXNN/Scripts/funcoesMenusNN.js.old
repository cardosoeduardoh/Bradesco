function getFrases_MenuNaoCliente(dados) {
	
	var ret = {};
	

	var parametros = dados['parametros'];

	ret['nomeMenu'] = "MenuNaoCliente";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];

	ret["fraseNoMatch"] = [];
	//ret["fraseNoMatch"].push({ "frase": "ypiiOpcaoInvalida.wav" });
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
	
	ret['logTick'] = 'TICK_LOG_MNC';

	ret['statValida'] = "";

	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiParaAdqCartCredDig2.wav" });
	ret["frases"].push({ "frase": "cVoltarMenuInicialDig0.wav" });

	ret["opcoesValidas"] += "02";

	return ret;
}

