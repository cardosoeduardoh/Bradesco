function getDiretorioFrases() {
    return "../../YPII/Resources/Prompts/Frases/";
}

function getFrases_MAppIb(dados) {
	var ret = {};	
	
	
	var parametros = dados.parametros;
	
	ret['nomeMenu'] = "MAppIb";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4028";
	ret['statInvalida_NOINPUT'] = "4028";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	ret["opcoesValidas"] = "";
	ret['logTick'] = 'TICK_LOG_MAPPIB';
	
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	if(dados["bPIDOk"] || dados["bSenhaCHIPOk"]){
		ret["frases"].push({ "frase": "ypiiParaGerarNovSenhaAcessAplic.wav" });
		ret["frases"].push({ "frase": "ypiiParaDesbloqAcessAplicativoDig3.wav" });
		ret["opcoesValidas"] += "23";
	}
	ret["frases"].push({ "frase": "ypiiParaDuvUtilNaveAplic.wav" });
	

	ret["opcoesValidas"] += "4";
		
	return ret;
}