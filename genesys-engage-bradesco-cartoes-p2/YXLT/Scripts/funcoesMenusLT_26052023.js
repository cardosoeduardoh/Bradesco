// getFrasesMenuPosLimite
function getFrasesParametros(dados, parametroFrases) {
    var i = 0;
    var frases = [];
    var fraseParametro = [];
    var parametros = parametros;
    
    parametros[parametroFrases] = parametros[parametroFrases];

    if (parametros && parametroFrases) {
        if (parametros[parametroFrases]) {
            fraseParametro = parametros[parametroFrases].split(";");
        }
    }

    if (fraseParametro) {
        for (var j = 0; j < fraseParametro.length; j++) {
            frases[i++] = { "frase": fraseParametro[j] };
        }
    }

    return frases;
}

function getFrasesMenuPosLimite(dados){
	
	
    var ret = {};
    var wNow = formataDataAtual('yyyyMMdd'); 
    var wDif = AppState.io_dados.UR80.AplDatecrlim2Expir.substring(4,12)+AppState.io_dados.UR80.AplDatecrlim2Expir.substring(2,4)+AppState.io_dados.UR80.AplDatecrlim2Expir.substring(0,2)
    var diferencaData = diferencaEntreDatas(wNow,wDif);
    
    var parametros = dados['parametros'];
    
    __Log('########### wNow : ' + wNow);
    __Log('########### wDif : ' + wDif);
    __Log('########### diferencaData : ' + diferencaData);
    __Log('########### AppState.io_dados.parametros.HabFraseAppCodBarras : ' + AppState.io_dados.parametros.HabFraseAppCodBarras);
    __Log('########### AppState.io_dados.sORGCartao : ' +  AppState.io_dados.sORGCartao);
    __Log('########### AppState.io_dados.sLogoCartao : ' + AppState.io_dados.sLogoCartao);  
    __Log('########### AppState.io_dados.strAuxORGLogo : ' + AppState.io_dados.strAuxORGLogo); 
    __Log('########### AppState.io_dados.strAuxORG : ' + AppState.io_dados.strAuxORG);     
    __Log('########### dados.bPIDOk : ' +  dados.bPIDOk);
    __Log('########### dados.bSenhaCHIPOk : ' + dados.bSenhaCHIPOk);
    __Log('########### parametros.HabOpLimEmergSolicitar : ' + parametros.HabOpLimEmergSolicitar);
    __Log('########### parametros.HabOpLimEmergCancelar : ' + parametros.HabOpLimEmergCancelar);
    __Log('########### parametros.HabOpRetMenuMPosLimite : ' + parametros.HabOpRetMenuMPosLimite);
    __Log('########### parametros.HabOpLimPre : ' + parametros.HabOpLimPre); 
    __Log('########### parametros.HabOpLimProm2Torres : ' + parametros.HabOpLimProm2Torres);   
    __Log('########### dados.UR80.Apl2TCrlim2Promocional : ' + dados.UR80.Apl2TCrlim2Promocional);
    __Log('########### dados.UR80.AplSin2TCrlim2Promo : ' + dados.UR80.AplSin2TCrlim2Promo);
    __Log('########### dados.UR80.AplDatecrlim2Expir : ' + dados.UR80.AplDatecrlim2Expir);
    							  
    
	
    
    ret['nomeMenu'] = "MenuPosLimite";
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
	ret["opcoesValidas"] = "";
	ret['logTick'] = 'TICK_LOG_MPOSLIM';	
	
	ret["retryTentativaNoMatch"] = true;
    ret["retryTentativaNoInput"] = true;

    ret["frases"].push({ "frase": "ypiiParaRepetirDig2.wav" });
	ret["opcoesValidas"] += "2";

    if ( (PossuiOrgLogo(AppState.io_dados.parametros.HabOpLimPre,AppState.io_dados['strAuxORG']) || PossuiOrgLogo(AppState.io_dados.parametros.HabOpLimPre,AppState.io_dados['strAuxORGLogo'])) && (dados['bPIDOk'] == true || dados['bSenhaCHIPOk'] ==  true)) {
        ret["frases"].push({ "frase": "ypiiParaSolicConsulAumLimite.wav" });
		ret["frases"].push({ "frase": "cDigite3.wav" });
		ret["opcoesValidas"] += "3";
    }

    if(PossuiOrgLogo(parametros.HabOpLimEmergSolicitar,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpLimEmergSolicitar,dados.strAuxORGLogo)){
    //if (parametros['HabOpLimEmergSolicitar'] == true) {
        ret["frases"].push({ "frase": "ypiiParaSolicLimEmergencial.wav" });
		ret["frases"].push({ "frase": "cDigite4.wav" });
		ret["opcoesValidas"] += "4";
    }

    if(PossuiOrgLogo(parametros.HabOpLimEmergCancelar,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpLimEmergCancelar,dados.strAuxORGLogo)){
    //if (parametros['HabOpLimEmergCancelar'] == true) {
        ret["frases"].push({ "frase": "ypiiParaCancelarLimEmergencial.wav" });
		ret["frases"].push({ "frase": "cDigite5.wav" });
		ret["opcoesValidas"] += "5";
    }
    
    
    if (dados.parametros['HabOpLimProm2Torres'] && parseInt(dados.UR80.Apl2TCrlim2Promocional) > 0 && parseInt(dados.UR80.AplSin2TCrlim2Promo) == 0 && diferencaData >= 0) {
	//if (dados.parametros['HabOpLimProm2Torres'] && parseInt(dados.UR80.Apl2TCrlim2Promocional) >0 && parseInt(dados.UR80.AplSin2TCrlim2Promo) == 0 && diferencaEntreDatas(dados.UR80.AplDatecrlim2Expir,wNow)>=0) {
		ret["frases"].push({ "frase": "ypiiVocePossLimitParcDig6.wav" });
		ret["opcoesValidas"] += "6";
	}
	
    if(PossuiOrgLogo(parametros.HabOpRetMenuMPosLimite,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpRetMenuMPosLimite,dados.strAuxORGLogo)){
    //if (parametros['HabOpRetMenuMPosLimite'] == true) {
        ret["frases"].push({ "frase": "ypiiVoltMenuPrincDig0.wav" });
		ret["opcoesValidas"] += "0";
    }
      
    return ret;  
}

function getFraseRepetirLimite(dados) {
	var ret = {};			
	ret["frases"] = [];
	
	
		ret["frases"].push({ "frase" : "ypiRepetirLimParcTempDig2.wav"});
		ret["frases"].push({ "frase" : "ypiiParaVoltMenuAntDig2.wav"});		
	
	
	return ret.frases;
}
// MenuPosLimite <--