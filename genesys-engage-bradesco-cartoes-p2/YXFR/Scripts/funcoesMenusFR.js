function getFrases_MenuFatParcPagto(dados) {
    var ret = {};      
   
    var parametros = dados.parametros;
   
    ret['nomeMenu'] = "MenuFatParcPagto";
    ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
    ret["frases"] = [];
    ret["fraseNoMatch"] = [];
    ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
    ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
    ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
    ret["fraseNoInput"] = [];
    ret["fraseNoInput"][0] = { "frase": "" };
    ret['fraseDesconexao'] = [];
 
    ret['statOpcoes'] = "";
    ret['statInvalida_NOMATCH'] = "4105";
    ret['statInvalida_NOINPUT'] = "4105";
    ret['statInvalida_EXCEDEU_NOMATCH'] = "";
    ret['statInvalida_EXCEDEU_NOINPUT'] = "";
    ret['statValida'] = "";
    ret["opcoesValidas"] = "";
   
    ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;
    ret['logTick'] = 'TICK_LOG_MFATPARCPAGTO';
   
 
    ret["frases"].push({ "frase": "ypiiInfoFatDig2.wav" });
    ret["frases"].push({ "frase": "ypiiInfMelDiaCompVencFatDig4.wav" });
    ret["opcoesValidas"] = "24";
 
    __Log("##### dados.parametros.HabOpFatura_Email = " + dados["parametros"]["HabOpFatura_Email"]);
    __Log("##### dados.parametros.HabOpCB_SMS = " + dados["parametros"]["HabOpCB_SMS"]);
    __Log("##### dados.parametros.HabMFatPagtoRetMP = " + dados["parametros"]["HabMFatPagtoRetMP"]);
    __Log("##### dados.UR80.sLogoCartao = " + dados["UR80"]["sLogoCartao"]);
    __Log("##### dados.UR80.sORGCartao = " + dados["UR80"]["sORGCartao"]);
    __Log("##### dados.sLogoCartao = " + dados["sLogoCartao"]);
    __Log("##### dados.sORGCartao = " + dados["sORGCartao"]);
    __Log("##### dados.strAuxORG = " + dados["strAuxORG"]);
    __Log("##### dados.strAuxORGLogo = " + dados["strAuxORGLogo"]);
    __Log("##### dados.AplCliente = " + JSON.stringify(dados["AplCliente"]));
   
    if(PossuiOrgLogo(parametros.HabOpCB_SMS,dados['strAuxORG']) || PossuiOrgLogo(parametros.HabOpCB_SMS,dados['strAuxORGLogo'])){
        ret["frases"].push({ "frase": "ypiiParaEnvCodBarrasSmsDig6.wav" });
        ret["opcoesValidas"] += "6";            
    }
    
    
    if(PossuiOrgLogo(parametros.HabOpFatura_Email,dados['strAuxORG']) || PossuiOrgLogo(parametros.HabOpFatura_Email,dados['strAuxORGLogo'])){
    	ret["frases"].push({ "frase": "ypiiCadEnvioFatEmailDig7.wav" });
        ret["opcoesValidas"] += "7";        	
    } 
   
    if(dados["parametros"]["HabMFatPagtoRetMP"]==true){
        ret["frases"].push({ "frase": "ypiiVoltMenuPrincDig0.wav" });
        ret["opcoesValidas"] += "0";
    }
   
 
    
       
    return ret;
}


function getFrases_MenuRepetir(dados) {
    var ret = {};      
   
    var parametros = dados.parametros;
   
    ret['nomeMenu'] = "MenuRepetir";
    ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
    ret["frases"] = [];
    ret["fraseNoMatch"] = [];
    ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
    ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
    ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
    ret["fraseNoInput"] = [];
    ret["fraseNoInput"][0] = { "frase": "" };
    ret['fraseDesconexao'] = [];
 
    ret['statOpcoes'] = "";
    ret['statInvalida_NOMATCH'] = "4074";
    ret['statInvalida_NOINPUT'] = "4074";
    ret['statInvalida_EXCEDEU_NOMATCH'] = "";
    ret['statInvalida_EXCEDEU_NOINPUT'] = "";
    ret['statValida'] = "";
   
    ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;
    ret['logTick'] = 'TICK_LOG_MPOSFATURA';
 
    ret["frases"].push({ "frase": "ypiiParaRepetirDig2.wav" });
 
    ret["opcoesValidas"] = "2";
       
    return ret;
}

function getFrases_MenuRepetirDiaVencFat(dados) {
	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret['nomeMenu'] = "MenuRepetirDiaVencFat";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4075";
	ret['statInvalida_NOINPUT'] = "4075";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	ret['logTick'] = 'TICK_LOG_MPOSFATURA';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiParaRepetirDig2.wav" });

	ret["opcoesValidas"] = "2";
		
	return ret;
}


function getFrases_MParcelamento(dados) {
	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret['nomeMenu'] = "MenuParcelamento";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4174";
	ret['statInvalida_NOINPUT'] = "4174";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	ret["opcoesValidas"] = "";
	ret['logTick'] = 'TICK_LOG_MPARC';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	if (dados['parametros']['HabPlanosParcela']==true) {
		
		if (dados['UR1A']['NroOcor'] > 0) {
			
			ret["frases"].push({ "frase": "ypiiParaContParcFatDig2.wav" });
			ret["opcoesValidas"] += "2";
			
		}
		
	} else {
		
		ret["frases"].push({ "frase": "ypiiParaContParcFatDig2.wav" });
		ret["opcoesValidas"] += "2";
		
	}
	
	ret["frases"].push({ "frase": "ypiiParaAntecCanceAltParcFatDig3.wav" });
	ret["opcoesValidas"] += "3";
	
	if (dados.parametros.HabMParcelRetMP==true) {
		
		ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });
		ret["opcoesValidas"] += "0";
		
	}
	

	return ret;
}



function getFrases_MenuOpcParc(dados) {
	
	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret['nomeMenu'] = "MenuOPCParc";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4174";
	ret['statInvalida_NOINPUT'] = "4174";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	ret["opcoesValidas"] = "";
	ret['logTick'] = 'TICK_LOG_MOPPAR';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	var validaZero = false;
	var iAux = null;
	
	for (var i = 2; i < 10; i++) {
		
		if (dados.iOpcaoParc[i] == null ) {
			
			//Ponto A
			
			//if (dados.iIndiceOpcParc == dados.UR1A.NroOcor) {
				
				ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });
				ret["opcoesValidas"] += "0";
				validaZero = true;
				i = 10;
			//} 
			
		} else {
				
			if (i == 2) {
				ret["frases"].push({ "frase": "ypiiPFQualqMometEscoOpcDesej.wav" });
			}
			ret["frases"].push({ "frase": "ypiiParaParcelamentoEm.wav" });
			ret["frases"].push({ "numero": dados.UR1A.OCOR[dados.iOpcaoParc[i]].Qtde});
			ret["frases"].push({ "frase": "ypiiVezes.wav" });
			ret["frases"].push({ "frase": "cDigite" + i + ".wav" });
			ret["opcoesValidas"] += i;
				
			}
			iAux = i;
			
	}
	
	if ( (dados.iIndiceOpcParc < (dados.UR1A.NroOcor) )) {

        ret["frases"].push({ "frase": "ypiiParaOuvirPlanosParcDisq0.wav" });
        ret["opcoesValidas"] += "0";

    } else if (parseInt(dados.iOpcaoParc[iAux], 10) == parseInt((dados.UR1A.NroOcor -1), 10)) {

        ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });
        ret["opcoesValidas"] += "0";

    }

	return ret;
}

function getMaxTentativasMenus(padrao, parametros) {
    if (parametros) {
        var tentativas = parseInt(parametros, 10);
        if (tentativas > 0) {
            return tentativas;
        }
    }
    return padrao;
}


function getFrases_MenuFalaOpParSel(dados) {
	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret['nomeMenu'] = "MenuFalaOpParSel";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4186";
	ret['statInvalida_NOINPUT'] = "4186";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	ret["opcoesValidas"] = "";
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	ret['logTick'] = 'TICK_LOG_MCONTOPPAR';
	
	
	//////////Menu
	
	ret["frases"].push({ "frase": "ypiiParaRealizNovSimulDis2.wav" });
	ret["frases"].push({ "frase": "ypiiParaOuvNovDIsq3.wav" });
	ret["frases"].push({ "frase": "ypiiUtilizAplicBradCartValorEntrada.wav" });
	
	ret["opcoesValidas"] += "23";
	

	return ret;
}

function getFrases_MenuContinuaParc(dados) {
	var ret = {};	    
	
	var parametros = dados.parametros;
	
	ret['nomeMenu'] = "MenuContinuaParc";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "4183";
	ret['statInvalida_NOINPUT'] = "4183";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	ret["opcoesValidas"] = "";
	ret['logTick'] = 'TICK_LOG_MCONTPARC';
	
	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	
	
	//////////Menu
	
	ret["frases"].push({ "frase": "ypiiParaContDig2.wav" });
	ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });
	
	ret["opcoesValidas"] += "20";
	

	return ret;
}


