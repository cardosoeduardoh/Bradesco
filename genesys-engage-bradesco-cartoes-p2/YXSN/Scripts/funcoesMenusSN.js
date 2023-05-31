function getFrases_MConfAltCad(dados) {
	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret["frases"] = [];

	ret['nomeMenu'] = "MConfAltCad";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4293";
	ret['statInvalida_NOINPUT'] = "4293";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "1119";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "1119";
	ret['statValida'] = "";
	ret['logTick'] = 'TICK_LOG_MCONFALTCADSENHA';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiParaConfirmarDig2.wav" });
	ret["frases"].push({ "frase": "ypiiCancAltNovDig3.wav" });
	ret["frases"].push({ "frase": "ypiiVoltMenuPrincDig0.wav" });

	ret["opcoesValidas"] = "023";
			
	return ret;
}

function getFrases_MFalaCelular(dados) {
	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret["frases"] = [];

	ret['nomeMenu'] = "MFalaCelular";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4301";
	ret['statInvalida_NOINPUT'] = "4301";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	ret['logTick'] = 'TICK_LOG_MCONFCADCEL';

	ret["frases"].push({ "frase": "ypiiDig2ParaSim3Nao.wav" });

	ret["opcoesValidas"] = "23";
			
	return ret;
}

function getFrases_MenuFalaCelCadastro(dados) {
	var ret = {};	    
	var retry = dados["iRetry"];
	
	var parametros = dados.parametros;

	ret['nomeMenu'] = "FalaCelCadastro";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4037";
	ret['statInvalida_NOINPUT'] = "4037";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "1057";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "1057";
	ret['statValida'] = "";
	
	ret['logTick'] = 'TICK_LOG_MALTERARCEL';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	ret["frases"].push({ "frase": "ypiiParaDadosAtualDesjAltTele.wav" });
	ret["frases"].push({ "frase": "ypiiDig2ParaSim3Nao.wav" });
	

	ret["opcoesValidas"] = "23";
		
	return ret;
}

function getFrases_MCadastrarCel(dados) {
	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret['nomeMenu'] = "MCadastrarCel";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4040";
	ret['statInvalida_NOINPUT'] = "4040";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "1055";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "1055";
	ret['statValida'] = "";
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	ret['logTick'] = 'TICK_LOG_MCADASTRARCEL';

	ret["frases"].push({ "frase": "ypiiParaDadosAtualDesjCadastCel.wav" });
	ret["frases"].push({ "frase": "ypiiDig2ParaSim3Nao.wav" });
	

	ret["opcoesValidas"] = "23";
		
	return ret;
}

function getFrases_MenuCVV(dados) {

	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret["frases"] = [];

	ret['nomeMenu'] = "MenuCVV";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoInput"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };	
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4083";
	ret['statInvalida_NOINPUT'] = "4083";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "1161";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "1161";
	ret['statValida'] = "";
	ret['logTick'] = 'TICK_LOG_MCVV';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiParaCadasSenhaNecDigCodSegVersCart.wav" });
	ret["frases"].push({ "frase": "ypiiParaContDig2.wav" });
	ret["frases"].push({ "frase": "cOu.wav" });
	ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });

	ret["opcoesValidas"] = "02";
			
	return ret;
}

function getFrases_MenuSenhaAtiva(dados) {

	var ret = {};	    
	var parametros = dados.parametros;
	
	ret["frases"] = [];

	ret['nomeMenu'] = "MenuSenhaAtiva";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4088";
	ret['statInvalida_NOINPUT'] = "4088";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "1113";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "1113";
	ret['statValida'] = "";
	ret['logTick'] = 'TICK_LOG_MSENHAATIVA';
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiPossSenDesAltParaPrefDig2.wav" });
	ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });

	ret["opcoesValidas"] = "02";
			
	return ret;
}