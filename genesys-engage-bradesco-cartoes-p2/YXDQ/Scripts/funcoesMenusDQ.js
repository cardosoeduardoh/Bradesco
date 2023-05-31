function getFrasesFalaCartaoBloq(dados) {

	var ret = {};
	var parametros = dados['parametros'];

	ret['nomeMenu'] = "FalaCartaoBloq";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["frases1"] = [];
	
	 dados["vRetry"]=0;

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
	ret['logTick'] = "TICK_LOG_MDESBLOQ";

	ret['statValida'] = "";

	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({"frase": "ypiiIdentCartEncontBloqueado.wav"});

	if (PossuiOrgLogo(parametros.HabFraseInformativa8b,AppState.io_dados['strAuxORG']) || PossuiOrgLogo(parametros.HabFraseInformativa8b,AppState.io_dados['strAuxORGLogo']) || PossuiOrgLogo(parametros.HabFraseInformativa8b,'TODOS')) {
		ret["frases"].push({"frase": parametros.FraseInformativa8});
	}
	
	//ret["frases"].push({"frase": "ypiiParaDesbloqPassarUsufTodBenefDig2.wav"});
	ret["frases"].push({ "frase": "ypiiParaDesbloqConfCartVantBradDisq2.wav"});
	ret["frases"].push({ "frase": "ypiiAindNaoRecebCartObtInfDig9.wav"});
	
	ret["frases1"].push({ "frase": "ypiiParaDesbloqConfCartVantBradDisq2.wav"});
	ret["frases1"].push({ "frase": "ypiiAindNaoRecebCartObtInfDig9.wav"});
	ret["opcoesValidas"] = "29";
	
	return ret;
}