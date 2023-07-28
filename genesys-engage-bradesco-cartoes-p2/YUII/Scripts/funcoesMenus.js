function getEventoMenuPrincipal(dados, opcao) {
	var evento = [];

	opcao = parseInt(opcao, 10);

	switch (opcao) {
		case 2:
			evento.push("424");
			break;
		case 3:
			evento.push("425");
			break;
		case 4:
			evento.push("474");
			break;
		case 5:
			evento.push("428");
			break;
		case 6:
			evento.push("430");
			break;
		case 7:
			evento.push("435");
			break;
		case 8:
			evento.push("468");
			break;
		case 9:
			break;
	}
	return evento;
}



function getTemBandeira(dados, bandeira) {
	
	var temBandeira = false;
	var bandeira = bandeira;	
	var qtdListCartao = parseInt(dados['KQB2_21']['Ocorrencia'].length); 	

	for (var i = 0; i < qtdListCartao; i++) {
		var obj_ListaCartoes = new Object();
		
		obj_ListaCartoes.CodProduto = dados['KQB2_21']['Ocorrencia'][i]['CodProduto'];
				
		if (obj_ListaCartoes.CodProduto == bandeira) { // Confirmar regra de negocio, enviado email ao banco
			temBandeira = true;
		}				
	}
	return temBandeira;
}


//Rodrigo Pereira - Fim

// Luiz Carlos - Inicio


function getFrases_MenuIbiSeguro(dados) {
	var ret = {};
    var parametros = dados['parametros'];   
	var retry = dados["iRetry"]; 
	dados["vRetry"]=0;
	
	ret['nomeMenu'] = "MenuIbiSeguro";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["frases1"] = [];
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
    ret["opcoesValidas"] = ""; 

    ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;	
    
    
	
	
	ret["frases"].push({ "frase": "ypiiCentralRelacioIBISeguros.wav" });	
	ret["frases"].push({ "frase": "ypiiRendHospiAcidRHVidaMulher.wav" });
	ret["frases"].push({ "frase": "ypiiIBIOdontoDig3.wav" });
	ret["frases"].push({ "frase": "ypiiIbiCapitDig4.wav" });
	ret["frases"].push({ "frase": "ypiiCartIbiCardProtPerdRoubProtTotal.wav" });
	ret["frases"].push({ "frase": "ypiiEmprParcDig6.wav" });
	ret["frases"].push({ "frase": "ypiiDemaisServdig7.wav" });
	
	ret["frases1"].push({ "frase": "ypiiRendHospiAcidRHVidaMulher.wav" });
	ret["frases1"].push({ "frase": "ypiiIBIOdontoDig3.wav" });
	ret["frases1"].push({ "frase": "ypiiIbiCapitDig4.wav" });
	ret["frases1"].push({ "frase": "ypiiCartIbiCardProtPerdRoubProtTotal.wav" });
	ret["frases1"].push({ "frase": "ypiiEmprParcDig6.wav" });
	ret["frases1"].push({ "frase": "ypiiDemaisServdig7.wav" });
	
	ret["opcoesValidas"] = "234567";
		
	return ret;
}
function getFrases_MenuEmprestINSS(dados) {
	var ret = {};
    var parametros = dados['parametros'];   
	var retry = dados["iRetry"]; 
	
	ret['nomeMenu'] = "MenuEmprestINSS";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["frases1"] = [];
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
    ret["opcoesValidas"] = ""; 

    ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;	

	
   
    dados["vRetry"]=0;
    
	ret["frases"].push({ "frase": "ypiiBemVindoAtendEmpConsig.wav" });
	ret["frases"].push({ "frase": "ypiiContraLojIbiDig2.wav" });
	ret["frases"].push({ "frase": "ypiiContratLojOutParcBradDig3.wav" });
	
	ret["frases1"].push({ "frase": "ypiiContraLojIbiDig2.wav" });
	ret["frases1"].push({ "frase": "ypiiContratLojOutParcBradDig3.wav" });
	
	ret["opcoesValidas"] = "23";
		
	return ret;
}

function getFrases_MenuSuperCredito(dados) {
	var ret = {};	  
	var parametros = dados['parametros'];   
	
	ret['nomeMenu'] = "MenuSuperCredito";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["frases1"] = [];
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
    ret["opcoesValidas"] = ""; 

    ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;
    
    dados["vRetry"]=0;
	    
    ret["frases"].push({ "frase": "ypiiBemVindoAtendSupCredito.wav" });
	ret["frases"].push({ "frase": "ypiiContraLojIbiDig2.wav" });
	ret["frases"].push({ "frase": "ypiiContratLojOutParcBradDig3.wav" });
	
	ret["frases1"].push({ "frase": "ypiiContraLojIbiDig2.wav" });
	ret["frases1"].push({ "frase": "ypiiContratLojOutParcBradDig3.wav" });
	

	ret["opcoesValidas"] = "23";
		
	return ret;
}

function getFrases_MenuCartaoAtraso(dados) {

	var ret = {};
    var parametros = dados['parametros']   
   
	
	ret['nomeMenu'] = "MenuCartaoAtraso";
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
    
    ret['logTick'] = 'TICK_LOG_MATRASO'

    ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;	
	
	ret["frases"].push({ "frase": "ypiiObtCodBarParaPagDig2.wav" });
	if(dados["bOrigemHotLineCEA"]){
		ret["frases"].push({ "frase": "ypiiLojaC&AEncerreContato.wav" });
	}else{
		ret["frases"].push({ "frase": "ypiiPorGentLigParaTel.wav" });
	}
	
	var vTel_Cob_Local = dados.parametros.TEL_COB_LOCAL;
	var vTel_Cob_0800 = dados.parametros.TEL_COB_0800;
	ret["frases"].push({"numero": vTel_Cob_Local.substring(0,2)});
	ret["frases"].push({"string": vTel_Cob_Local.substring(2,10)});
	ret["frases"].push({ "frase": "ypiiParaCapRegMetrop.wav" });
	ret["frases"].push({ "frase": "cOu.wav" });

	ret["frases"].push({"string": vTel_Cob_0800.substring(0,1)});
	ret["frases"].push({"numero": vTel_Cob_0800.substring(1,4)});
	ret["frases"].push({"string": vTel_Cob_0800.substring(4,11)});
	ret["frases"].push({ "frase": "ypiiParaOutReg.wav" });
	ret["frases"].push({ "frase": "ypiiRepetindo.wav" });
	
	ret["frases"].push({"numero": vTel_Cob_Local.substring(0,2)});
	ret["frases"].push({"string": vTel_Cob_Local.substring(2,10)});
	ret["frases"].push({ "frase": "ypiiParaCapRegMetrop.wav" });
	ret["frases"].push({ "frase": "cOu.wav" });

	ret["frases"].push({"string": vTel_Cob_0800.substring(0,1)});
	ret["frases"].push({"numero": vTel_Cob_0800.substring(1,4)});
	ret["frases"].push({"string": vTel_Cob_0800.substring(4,11)});
	ret["frases"].push({ "frase": "ypiiParaOutReg.wav" });
	ret["frases"].push({ "frase": "ypiiSegSext8As21Sab8As18.wav" });

	ret["opcoesValidas"] = "2";
		
	return ret;
}




function getFrases_FraseEmergencial(dados) {
	var ret = {};	    
	var retry = dados["iRetry"];
	var parametros = dados['parametros'];
	
	
	ret['nomeMenu'] = "FraseEmergencial";
	ret["maxTentativas"] = getMaxTentativasMenus(1, parametros);
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
	
	
	ret["frases"].push({ "frase": "ypiiNRecebFatObtCodBarrPagDis2.wav" });
	ret["frases"].push({ "frase": "ypiiAguardProssAtend.wav" });
	
	ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;	
	
	if (retry == 2) {
		dados["iRetry"] = retry + 1;
	}

	ret["opcoesValidas"] = "2";
		
	return ret;
}

function getFrases_MenuHotLineCeA(dados) {
	var ret = {};	    	

	var parametros = dados['parametros'];    	
	ret['nomeMenu'] = "MenuHotLineCeA";
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
    ret["opcoesValidas"] = ""; 
	
    ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;	

	ret["frases"].push({ "frase": "ypiiPFDigNumOpcDesejada.wav" });
	ret["frases"].push({ "frase": "ypii2SoliciSaqCart.wav" });
	
	if(!dados["bInibeOpcaoHotLineCEAParcFat"]){
		ret["frases"].push({ "frase": "ypii3ParcFat.wav" });
		ret["frases"].push({ "frase": "ypii9ContiAtendEletro.wav" });
		ret['opcoesValidas'] += "39";
	}else{
		ret["frases"].push({ "frase": "ypii9ContiAtendEletro.wav" });
		ret['opcoesValidas'] += "9";
	}				
	ret["opcoesValidas"] += "2";
	return ret;
}


function getFrasesMenu2Nivel (dados){
    
    var ret = {};
    var parametros = dados['parametros'];
   
    
    __Log('############ parametros.HabSaldoAutenticado : ' + parametros.HabSaldoAutenticado );
    __Log('########### dados.bVeioFluxoDesbloqueio :' + dados.bVeioFluxoDesbloqueio);
    __Log('############ dados.bSenhaCHIPOk : ' + dados.bSenhaCHIPOk );
    __Log('############ dados.sORGCartao : ' + dados.sORGCartao );
    __Log('########### dados.sLogoCartao :' + dados.sLogoCartao);	
    __Log('########### dados.strAuxORGLogo :' + dados.strAuxORGLogo);
    __Log('########### dados.strAuxORG :' + dados.strAuxORG);
    __Log('############ parametros.HabOpSeguro : ' + parametros.HabOpSeguro );
    __Log('############ parametros.HabOpCartaoAdicional : ' + parametros.HabOpCartaoAdicional );
    __Log('############ parametros.HabOpPlanoOdonto : ' + parametros.HabOpPlanoOdonto );
    __Log('############ parametros.InibeOpTrocaSenha : ' + parametros.InibeOpTrocaSenha );
    __Log('############ parametros.HabOpSenhaCartaoCredito : ' + parametros.HabOpSenhaCartaoCredito );
    __Log('############ parametros.HabOpDesbloqueioCartao  : ' + parametros.HabOpDesbloqueioCartao );
    __Log('############ dados.UR80.AplCdBloqueio  : ' +  dados.UR80.AplCdBloqueio);   
    __Log('############ dados.sCodBloqCartao  : ' +  dados.sCodBloqCartao); 
   

    
    ret['nomeMenu'] = "Menu2Nivel";
    ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
    ret["frases"] = [];
    ret["frases1"] = [];
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
    ret['opcoesValidas'] = '';
    ret['logTick'] = 'TICK_LOG_MN2';
    
    ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	dados["vRetry"]=0;

	if (!dados.bJaFalouFraseQQMomento) {
		ret["frases"].push({ "frase": "ypiiQualqMomDigOpcDese.wav" });	
	}

	if ( ( parametros['HabSaldoAutenticado'] && dados['bSenhaCHIPOk'] ) || !parametros['HabSaldoAutenticado'] ) {				

		if (dados.bVeioFluxoDesbloqueio == false) {
			ret["frases"].push({ "frase": "ypiiParaRefSaldoDigEstre.wav" });
			ret["frases1"].push({ "frase": "ypiiParaRefSaldoDigEstre.wav" });
			ret['opcoesValidas'] += '*';
		}	
		
		ret["frases"].push({ "frase": "ypiiConsultLimDig2.wav" });
		ret["frases1"].push({ "frase": "ypiiConsultLimDig2.wav" });
		ret['opcoesValidas'] += '2';
		
	
		ret["frases"].push({ "frase": "ypiiObtCodBarrasPagFatDig3.wav" });
		ret["frases1"].push({ "frase": "ypiiObtCodBarrasPagFatDig3.wav" });
		ret["frases"].push({ "frase": "ypiiInfoFatPagDig4.wav" });
		ret["frases1"].push({ "frase": "ypiiInfoFatPagDig4.wav" });
	
		ret['opcoesValidas'] += '34';
	}

	if (PossuiOrgLogo(parametros.HabOpSeguro,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpSeguro,dados.strAuxORGLogo)) {
        if (PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.strAuxORGLogo)) {
            if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo)){
                ret["frases"].push({ "frase": "ypiiSaqSegPlanOdontCartAdicDig5.wav" }); 
                ret["frases1"].push({ "frase": "ypiiSaqSegPlanOdontCartAdicDig5.wav" }); 
                ret['opcoesValidas'] += '5';

            } else {
                ret["frases"].push({ "frase": "ypiiSaqSegPlanOdontCartDig5.wav" });
                ret["frases1"].push({ "frase": "ypiiSaqSegPlanOdontCartDig5.wav" });
                ret['opcoesValidas'] += '5';
            }
        } else if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo)) {
            ret["frases"].push({ "frase": "ypiiSaqSegCartAdicDig5.wav" });
            ret["frases1"].push({ "frase": "ypiiSaqSegCartAdicDig5.wav" });
            ret['opcoesValidas'] += '5';
        } else {
            ret["frases"].push({ "frase": "ypiiSaquesSegDig5.wav" });
            ret["frases1"].push({ "frase": "ypiiSaquesSegDig5.wav" });
            ret['opcoesValidas'] += '5';
        }
    } else if (PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.strAuxORGLogo)) {        
        if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo)) {            
            ret["frases"].push({ "frase": "ypiiSaqPlanCartAdicDig5.wav" });
            ret["frases1"].push({ "frase": "ypiiSaqPlanCartAdicDig5.wav" });
            ret['opcoesValidas'] += '5';
        } else {            
            ret["frases"].push({ "frase": "ypiiSaqPlanOdontoDig5.wav" });
            ret["frases1"].push({ "frase": "ypiiSaqPlanOdontoDig5.wav" });
            ret['opcoesValidas'] += '5';
        }
    } else {
        if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo)) {
            ret["frases"].push({ "frase": "ypiiSaqCartAdicDig5.wav" }); 
            ret["frases1"].push({ "frase": "ypiiSaqCartAdicDig5.wav" });
            ret['opcoesValidas'] += '5'; 
        } else {
            ret["frases"].push({ "frase": "ypiiSaquesDig5.wav" });
            ret["frases1"].push({ "frase": "ypiiSaquesDig5.wav" });
            ret['opcoesValidas'] += '5';
        }        
    }

    
    
    if ((!PossuiOrgLogo(parametros.InibeOpTrocaSenha,dados.sORGCartao) && !PossuiOrgLogo(parametros.InibeOpTrocaSenha,dados.strAuxORGLogo)) && (PossuiOrgLogo(parametros.HabOpSenhaCartaoCredito,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpSenhaCartaoCredito,dados.strAuxORGLogo))){
        ret["frases"].push({ "frase": "ypiiParaSenhaCartDig6.wav" });
        ret["frases1"].push({ "frase": "ypiiParaSenhaCartDig6.wav" });
        ret['opcoesValidas'] += '6';
    } 

    ret["frases"].push({ "frase": "ypiiParcFatDig7.wav" });
    ret["frases1"].push({ "frase": "ypiiParcFatDig7.wav" });
    ret['opcoesValidas'] += '7';

    if ((dados.sCodBloqCartao == "M" || dados.sCodBloqCartao == "J") && (PossuiOrgLogo(parametros.HabOpDesbloqueioCartao,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpDesbloqueioCartao,dados.strAuxORGLogo))){
        ret["frases"].push({ "frase": "ypiiParaDesblqCartDig8.wav" });
        ret["frases1"].push({ "frase": "ypiiParaDesblqCartDig8.wav" });
        ret['opcoesValidas'] += '8';
    } 

    ret["frases"].push({ "frase": "ypiiParaOutSolicDig9.wav" });
    ret["frases1"].push({ "frase": "ypiiParaOutSolicDig9.wav" });
    ret["frases"].push({ "frase": "ypiiConsultCartDig0.wav" });
    ret["frases1"].push({ "frase": "ypiiConsultCartDig0.wav" });

    ret['opcoesValidas'] += '90';
           
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


function getFrasesMContinuaParc(dados) {
	var ret = {};

	var parametros = dados['parametros'];

	ret['nomeMenu'] = "MContinuaParc";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];

	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][1] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoMatch"][2] = { "frase": "ypiiOpcaoInvalida.wav" };
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "getEventoMenuXX";

	ret['statInvalida_NOMATCH'] = "4183";
	ret['statInvalida_NOINPUT'] = "4183";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['logTick'] = "TICK_LOG_MCONTPARC";

	ret['statEvDesligamento_NOMATCH'] = "";
	ret['statEvDesligamento_NOINPUT'] = "";

	ret['statValida'] = "";

	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret["frases"].push({ "frase": "ypiiParaContDig2.wav" });
	ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });
	ret["opcoesValidas"] += "20";
	
	return ret;
}


function getFrasesFalaCPFNCartao(dados) {
	var ret = {};

	var parametros = dados['parametros'];
	

	ret['nomeMenu'] = "FalaCPFNCartao";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	dados["posicao_org"] = '';

	ret["fraseNoMatch"] = [];
	ret["fraseNoMatch"][0] = { "frase" : "ypiiOpcaoInvalida.wav" };
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
	ret['logTick'] = "TICK_LOG_MCPFNCARTAO";

	ret['statValida'] = "";

	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;
	
	
	
	

	for (var i = 2; i < 9; i++) {   
		 dados = setIndiceORGValido(dados);
	     var iORGvalido = parseInt(dados["iIndiceORGValido"], 10);     
	     __Log('##### iORGvalido :' + iORGvalido);     
        
        if (iORGvalido >= 0) {
        	ret["frases"].push({ "frase" : "ypiiParaCart.wav" });
            ret["frases"].push({ "frase" : nomeTipoCartao(dados, iORGvalido) });
            ret["frases"].push({ "frase" : "ypiiFinal.wav" });
            ret["frases"].push({ "string" : dados["UR8FCartoes"][iORGvalido]["NumCartao"].substring(dados["UR8FCartoes"][iORGvalido]["NumCartao"].length - 4) });
            //ret["frases"].push(dados["UR8FCartoes"][iORGvalido]["NumCartao"].substring(dados["UR8FCartoes"][iORGvalido]["NumCartao"].length - 4));
            ret["frases"].push({ "frase" : "cDigite" + i.toString() + ".wav" });
            ret["opcoesValidas"] += i.toString();
            if(dados["posicao_org"] == undefined || dados["posicao_org"] == "" || dados["posicao_org"] == " "){
            	dados["posicao_org"] += iORGvalido;            	
            }else{
            	dados["posicao_org"] += ';' + iORGvalido;            	
            }
            
        }
	}
	if (dados["strListaIndiceORGValidoAux"] && dados["strListaIndiceORGValidoAux"] != "" ) {
	    ret["frases"].push({ "frase" : "ypiiParaDemaisCartDig9.wav" });
	    ret["opcoesValidas"] += "9";
	}
    
    ret["frases"].push({ "frase" : "cVoltarMenuInicialDig0.wav" });
    ret["opcoesValidas"] += "0";
    
    AppState.io_dados = adicionaDados(dados, "strListaIndiceORGValidoAux", dados["strListaIndiceORGValidoAux"]);
    
    __Log('##### dados.strListaIndiceORGValidoAux: ' + dados.strListaIndiceORGValidoAux);
    __Log('##### dados.posicao_org ' + dados.posicao_org);
    
    return ret;
}

function getFrasesMenuInoperante(dados) {
	
	var ret = {};
	var parametros = dados['parametros'];


	ret['nomeMenu'] = "MenuInoperante";
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

	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret['statValida'] = "";
	
	ret["frases"].push({ "frase": "ypiiParaInfoNumCartCPF.wav" });

	ret["opcoesValidas"] += "3";
	
	return ret;
	
	
}

function getEventoMenuInoperante(dados, opcao) {
	var evento = [];
	var i = 0;
	opcao = parseInt(opcao, 10);

	switch (opcao) {
		case 3:
			evento[i++] = "499";
			break;
	}
	return evento;
}


function getFrasesMenuInoperante2(dados) {
	
	var ret = {};
	var parametros = dados['parametros'];
	

	ret['nomeMenu'] = "MenuInoperante";
	ret["maxTentativas"] = getMaxTentativasMenus(3, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";

	ret['statInvalida_NOMATCH'] = "";
	ret['statInvalida_NOINPUT'] = "";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";

	ret['retryTentativaNoMatch'] = true;
	ret['retryTentativaNoInput'] = true;

	ret['statValida'] = "";
	
	ret["frases"].push({ "frase": "ypiiProsseguirCancelCartCredRoubadoOuPerd.wav" });
	ret["frases"].push({ "frase": "yppiParaConfirmarDig2.wav" });

	ret["opcoesValidas"] += "2";
	
	return ret;
	
	
}

function getEventoMenuInoperante2(dados, opcao) {
	var evento = [];
	var i = 0;
	opcao = parseInt(opcao, 10);

	switch (opcao) {
		case 2:
			evento[i++] = "455";
			break;
	}
	return evento;
}

function getFrases_MenuPedeTemAdicional(dados) {
	var ret = {};
	var parametros = dados['parametros'];
	
	
	ret['nomeMenu'] = "PedeTemAdicional";
	ret["maxTentativas"] = getMaxTentativasMenus(1, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "";
	ret['statInvalida_NOINPUT'] = "";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	
	
	ret["frases"].push({ "frase": "ypiiPossCartAdicional.wav" });
	ret["frases"].push({ "frase": "ypiiPFDig2ParaSim3ParaNao.wav" });
	
	ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;	

	ret["opcoesValidas"] = "23";
		
	return ret;
}

function getFrases_MenuPedeTemProtPR(dados) {
	var ret = {};
	var parametros = dados['parametros'];
	
	
	ret['nomeMenu'] = "PedeTemProtPR";
	ret["maxTentativas"] = getMaxTentativasMenus(1, parametros);
	ret["frases"] = [];
	ret["fraseNoMatch"] = [];
	ret["fraseNoInput"] = [];
	ret['fraseDesconexao'] = [];

	ret['statOpcoes'] = "";
	ret['statInvalida_NOMATCH'] = "";
	ret['statInvalida_NOINPUT'] = "";
	ret['statInvalida_EXCEDEU_NOMATCH'] = "";
	ret['statInvalida_EXCEDEU_NOINPUT'] = "";
	ret['statValida'] = "";
	
	
	ret["frases"].push({ "frase": "ypiiPossuiProtPerdRoubCart.wav" });
	ret["frases"].push({ "frase": "ypiiPFDig2ParaSim3ParaNao.wav" });
	
	ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;	

	ret["opcoesValidas"] = "23";
		
	return ret;
}


