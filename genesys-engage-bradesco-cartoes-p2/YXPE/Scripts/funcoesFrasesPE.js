function getFrasesMenuPerdaRoubo(dados) {
	
	var ret = {};			
	ret["frases"] = [];		

	ret["frases"].push({ "frase" : "ypiiParaRealBloqDigNumCartCPF.wav"}); 
	ret["frases"].push({ "frase" : "cVoltarMenuInicialDig0.wav"}); 
		
	return ret.frases;
}

function getFraseAppPerdaRoubo(dados) {
	
	var ret = {};	
	var pFraseAppPerdaRoubo = dados['parametros']['FraseAppPerdaRoubo'];
	
	ret["frases"] = [];	
	ret["frases"].push({ "frase": pFraseAppPerdaRoubo });
	
	return ret.frases;
}

function getFrasepAtencaoPerdaRoubo(dados) {
	
	var ret = {};	
		
	ret["frases"] = [];	
	ret["frases"].push({ "frase" : "cAtencao.wav"}); 
	ret["frases"].push({ "frase" : "ypiiOpcExcluiPerdRoubCart.wav"}); 
	
	return ret.frases;
}