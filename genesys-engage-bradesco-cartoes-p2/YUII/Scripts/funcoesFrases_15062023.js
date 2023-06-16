function getFrasesXXX(dados) {
    var ret = {};
    var i = 0;
    var frases = [];

    frases[i++] = { "frase": ".wav" };
    frases[i++] = { "data": formataData("", "ddMMyyyy") };
    frases[i++] = { "frase": ".wav" };
    frases[i++] = { "valor": trataValor("") };
    frases[i++] = { "frase": ".wav" };
    frases[i++] = { "numero": "3" };

    return frases;
}

function getFrasesParametros(dados, parametroFrases) {
    var i = 0;
    var frases = [];
    var fraseParametro = [];
    var parametros = dados['parametros'];
    
    parametros[parametroFrases] = parametros[parametroFrases].toLowerCase();

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



function getFrasesParametros(dados, parametroFrases) {
    var i = 0;
    var frases = [];
    var fraseParametro = [];
    var parametros = dados['parametros'];
    
    parametros[parametroFrases] = parametros[parametroFrases].toLowerCase();

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
// <-- Anderson Sales


// Rodrigo Pereira - Inicio





function getFraseIncentivo_AvViagem(dados){
    var ret = {};

    var HabilitaFraseIncentivoAV = dados['parametros']['HabilitaFraseIncentivoAV'];
    var FraseIncentivoAV = dados['parametros']['FraseIncentivoAV'];
       
    ret["frases"] = [];
	
	if (HabilitaFraseIncentivoAV == true && FraseIncentivoAV != '') {
		ret["frases"].push({"frase": FraseIncentivoAV +".wav"});
	} else {
		ret["frases"].push({"frase": "cSilencio.wav"});
	}
	return ret;	
}

function getFraseFalaNumeroAtendimentoMudou(dados) {
	
	var ret = {};	
	ret["frases"] = [];

	var parametros = dados['parametros']; 
		
	ret["frases"].push({ "frase": "ypiiNumAtendMu.wav" });
	ret["frases"].push({ "numero": parametros.strTelPadraoLocal.substring(0,4) });
	ret["frases"].push({ "numero": parametros.strTelPadraoLocal.substring(4,8) });
	ret["frases"].push({ "frase": "ypiiParaCapRegMetOu.wav" });
	ret["frases"].push({ "frase": "ypiiParaDemRegLig.wav" });
	ret["frases"].push({ "frase": "ypii0800.wav" });
	ret["frases"].push({ "substring": parametros.strTelPadrao0800.substring(4,11) });
	ret["frases"].push({ "frase": "cRepetindo.wav" });
	ret["frases"].push({ "numero": parametros.strTelPadraoLocal.substring(0,4) });
	ret["frases"].push({ "string":  parametros.strTelPadraoLocal.substring(4,8) });
	ret["frases"].push({ "frase": "ypiiParaCapRegMetOu.wav" });
	ret["frases"].push({ "frase": "ypiiParaDemRegLig.wav" });
	ret["frases"].push({ "frase": "ypii0800.wav" });
	ret["frases"].push({ "numero": parametros.strTelPadrao0800 });

	return ret;
}

function getFraseFalaConsultarFatura(dados) {
	
	var ret = {};	
	ret["frases"] = [];
	
	ret["frases"].push({ "frase": "ypiiConsulFatAppstore.wav" });

	return ret;
}

function getFraseFalaFatura(dados) {
	
	var ret = {};	
	ret["frases"] = [];
	
	ret["frases"].push({ "frase": "ypiiVocePodAcessFaLimCredSit.wav" });

	return ret;
}
/* Removido com o Fluxo Begins
function getFraseAtendimento(dados) {
	var ret ={};
	var iAplOrgSistema = dados.iAplOrgSistema;
	ret["frases"] = [];
	
	switch (iAplOrgSistema) {
		case 'APL_SIST_PL_BR':
			ret["frases"].push({ "frase": "ypiiAtendC&a.wav" });
		break;
		case 'APL_SIST_MAKRO':
			ret["frases"].push({ "frase": " ypiiAtendCartMak.wav" });
		break;
		case 'APL_SIST_DOTz':
			ret["frases"].push({ "frase": "ypiiAtendCartDotz.wav" });
		break;
		case 'APL_SIST_SHOPLAPA':
			ret["frases"].push({ "frase": "ypiiAtendCartCenterLapa.wav" });
		break;
		case 'APL_SIST_ANGELONI':
			ret["frases"].push({ "frase": "ypiiBVAtendCartAngBrad.wav" });
		break;
		case 'APL_SIST_JEANS':
			ret["frases"].push({ "frase": "ypiiBVAtendCartCanalJeBrad.wav" });
		break;
		case 'APL_SIST_BELEM':
			ret["frases"].push({ "frase": "ypiiAtendCartEstBel.wav" });
		break;
		case 'APL_SIST_MAFRE':
			ret["frases"].push({ "frase": "ypiiAtendCartClubeMapfre.wav" });
		break;
		case 'APL_SIST_CANOAS':
			ret["frases"].push({ "frase": "ypiiAtendCartCanoasShopping.wav" });
		break;
		case 'APL_SIST_COLOMBO':
			ret["frases"].push({ "frase": "ypiiBVAtendCartColBrad.wav" });
		break;
		case 'APL_SIST_ESKALA':
			ret["frases"].push({ "frase": "ypiiBVAtendCartEskBrad.wav" });	
		break;
		case 'APL_SIST_BAKLIZI':
			ret["frases"].push({ "frase": "ypiiBVAtendCartBackBrad.wav" });	
		break;
		case 'APL_SIST_MODELO':
			ret["frases"].push({ "frase": "F1225.WAV" });	
		break;
		case 'APL_SIST_MATEUS':
			ret["frases"].push({ "frase": " ypiiAgendMatCard.wav" });	
		break;
		case 'APL_SIST_SHOPTATUAPE':
			ret["frases"].push({ "frase": "ypiiAtendCartShopTatu.wav" });	
		break;
		case 'APL_SIST_DORINHOS':
			ret["frases"].push({ "frase": "F1225.WAV" });	
		break;
		case 'APL_SIST_EXPRESSMASTER':
			ret["frases"].push({ "frase": " ypiiAtendCartExpCard.wav" });	
		break;
		case 'APL_SIST_ELO':
			ret["frases"].push({ "frase": "ypiiBVAtendCartEloCard.wav" });	
		break;
		case 'APL_SIST_LEBISCUIT':
			ret["frases"].push({ "frase": " ypiiAtendCartLeBiscuit.wav" });	
		break;
		case 'APL_SIST_LOJASREDE':
			ret["frases"].push({ "frase": "F1225.WAV" });	
		break;
		case 'APL_SIST_PAGUEMENOS':
			ret["frases"].push({ "frase": " ypiiAtendCartPagMen.wav" });	
		break;
		case 'APL_SIST_MAKENJI':
			ret["frases"].push({ "frase": "ypiiBVAtendCartMakBrad.wav" });	
		break;
		case 'APL_SIST_RONDELLI':
			ret["frases"].push({ "frase": " ypiiAtendBrad.wav" });	
		break;
		case 'APL_SIST_BONANZA':
			ret["frases"].push({ "frase": "ypiiAtendCartBonanzaBradescard.wav" });	
		break;
		case 'APL_SIST_ARCOIRIS':
			ret["frases"].push({ "frase": "ypiiBVAtendCartArcIrisBrad.wav" });	
		break;
		case 'APL_SIST_IBICARD_IBI_MC':
		case 'APL_SIST_IBICARD_IBI_VISA':
		case 'APL_SIST_IBICARD_IBI_FACIL':
			ret["frases"].push({ "frase": "ypiiBVAtendIbCard.wav" });	
		break;
		case 'APL_SIST_IBICARD_CEA_MC':
		case 'APL_SIST_IBICARD_CEA_VISA':
		case 'APL_SIST_IBICARD_CEA_SECURED':
		case 'APL_SIST_IBICARD_IBI_SECURED':
		case 'APL_SIST_IBICARD_CEA_FACIL':
			ret["frases"].push({ "frase": "F1225.WAV" });	
		break;
		case 'APL_SIST_BRADESCARD':
			ret["frases"].push({ "frase": "F1225.WAV" });	
		break;
		case 'APL_SIST_TNG':
			ret["frases"].push({ "frase": "ypiiAtendCartTng.wav" });	
		break;
		case 'APL_SIST_GUANABARA':
			ret["frases"].push({ "frase": "ypiiAtendCartGuana.wav" });	
		break;
		case 'APL_SIST_TELERIO':
			ret["frases"].push({ "frase": "F1225.WAV" });	
		break;
		case 'APL_SIST_ELO_BRADESCARD':
			ret["frases"].push({ "frase": "ypiiBVAtendCartBradElo.wav" });	
		break;
		case 'APL_SIST_PASSARELA':
			ret["frases"].push({ "frase": "ypiiAtendCartPassarela.wav" });	
		break;
		case 'APL_SIST_BISTEK':
			ret["frases"].push({ "frase": "ypiiAtendCartBistek.wav" });	
		break;
		case 'APL_SIST_COMPER':
			ret["frases"].push({ "frase": "F1313.WAV" });	
		break;
		case 'APL_SIST_CVC':
			ret["frases"].push({ "frase": "ypiiBemVindoServAtendCartCVC.wav" });	
		break;
		case 'APL_SIST_SPORTCARD':
			ret["frases"].push({ "frase": "ypiiAtendCartSportcard.wav" });	
		break;
		case 'APL_SIST_LOJASAMERICANAS':
			if (dados.bHab_ENC_LASA == true) {
				ret["frases"].push({ "frase": "F1225.WAV" });
			} else {
				ret["frases"].push({ "frase": "ypiiAtendCartLojAmericanas.wav" });
			}
			break;
		case 'APL_SIST_CONSIGNADO':
			ret["frases"].push({ "frase": "ypiiBemVindoServAtendConsigBradescard.wav" });	
		break;
		default:
			ret["frases"].push({ "frase": "Silence.WAV" });
        		
		
	}
	return ret;
} */

function getFraseSaudacaoAposCartao(dados) {
	
	var fn_SaudacaoAposCartao = '';
	var iAplOrgSistema = dados.iAplOrgSistema;

	switch (iAplOrgSistema) {
		case 'APL_SIST_IBICARD_IBI_MC':
		case 'APL_SIST_IBICARD_IBI_VISA':
		case 'APL_SIST_IBICARD_IBI_FACIL':
		case 'APL_SIST_IBICARD':
		case 'APL_SIST_IBICARD_CEA_MC':
		case 'APL_SIST_IBICARD_CEA_VISA':
		case 'APL_SIST_IBICARD_CEA_SECURED':
		case 'APL_SIST_IBICARD_IBI_SECURED':
		case 'APL_SIST_IBICARD_CEA_FACIL':
		case 'APL_SIST_BRADESCARD':
		case 'APL_SIST_ELO_BRADESCARD':
		case 'APL_SIST_ELO':
			fn_SaudacaoAposCartao = true;
		break;
		default:
        	fn_SaudacaoAposCartao = false;		
		
	}
	return fn_SaudacaoAposCartao;
}

function getFraseHorarioSaudacao(dados) {
	
	var ret = {};
	var hora = parseInt(new Date().getHours());

	ret["frases"] = [];

	if (hora >= 0 && hora < 12 ) {
		ret["frases"].push({ "frase": "cBomDia.wav" });
	} else if (hora >= 12 && hora < 18) {
		ret["frases"].push({ "frase": "cBoaTarde.wav" });
	} else {
		ret["frases"].push({ "frase": "cBoaNoite.wav" });
	}
	ret["frases"].push({ "frase": "cBemVindo.wav" });
	
	return ret.frases;
}

function getFraseFalaDevidoAtraso(dados) {
	
	var ret = {};	
	ret["frases"] = [];
	
	ret["frases"].push({ "frase": "ypiiDevAtrasEnvFatVencEm.wav" });

	return ret;
}

function getFraseFalaDia_Pos_0(dados) {

	var ret = {};	
	var diaVariavel = dados.sAplAgendaDataVencimento[0];

	ret["frases"] = [];
	
	ret["frases"].push({ "numero": diaVariavel });

	return ret;
}

function getFraseFalaDia_Pos_1(dados) {

	var ret = {};	
	var diaVariavel = parseInt(dados.sAplAgendaDataVencimento[1]);

	ret["frases"] = [];
	
	ret["frases"].push({ "numero": diaVariavel });

	return ret;
}

function getFraseFalaDia_Pos_2(dados) {

	var ret = {};	
	var diaVariavel = parseInt(dados.sAplAgendaDataVencimento[2]);

	ret["frases"] = [];
	
	ret["frases"].push({ "numero": diaVariavel });

	return ret;
}

function getFraseFalaDia_Pos_4(dados) {

	var ret = {};	
	var diaVariavel = parseInt(dados.sAplAgendaDataVencimento[4]);

	ret["frases"] = [];
	
	ret["frases"].push({ "numero": diaVariavel });

	return ret;
}
function getFraseFalaPagamentoEfetuado(dados) {
	
	var ret = {};	
	ret["frases"] = [];
	
	ret["frases"].push({ "frase": "ypiiPagPodEfet.wav" });

	return ret;
}

function getFraseFalaAgendarDia(dados) {

	var ret = {};	
	var parametros = dados['parametros']; 

	ret["frases"] = [];
	
	//ret["frases"].push({ "data": parametros.sAplFlgAnoVencimento });
	ret["frases"].push({ "data": parametros.sAgendaDia });

	return ret;
}

function getFraseFalaAgendarAno(dados) {

	var ret = {};	
	var parametros = dados['parametros']; 

	ret["frases"] = [];
	
	//ret["frases"].push({ "data": parametros.sAplFlgAnoVencimento });
	ret["frases"].push({ "data": parametros.sAgendaAno });

	return ret;
}


function getFraseFalaDiaVencimentoOriginal(dados) {
	
	var ret = {};	
	ret["frases"] = [];
	
	ret["frases"].push({ "frase": "ypiiDiasAposVencOrig.wav" });

	return ret;
}

function getFraseFalaAgendarMesWAV(dados) {

	var ret = {};		
	var sAgendaMes = dados.sAgendaMes;
	ret["frases"] = [];

	ret["frases"].push({ "frase": sAgendaMes +'.WAV' });
	ret["frases"].push({ "frase": "ypiiEDe.wav" });	

	return ret;
}

function getFraseFalaAgendarMes(dados) {

	var ret = {};		
	var sAgendaMes = dados.sAgendaMes;
	ret["frases"] = [];

	switch (sAgendaMes) {
		case '1':
			ret["frases"].push({ "frase": "cDeJaneiro.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;	
		case '2':
			ret["frases"].push({ "frase": "cDeFevereiro.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;	
		case '3':
			ret["frases"].push({ "frase": "cDeMarco.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '4':
			ret["frases"].push({ "frase": "cDeAbril.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '5':
			ret["frases"].push({ "frase": "cDeMaio.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '6':
			ret["frases"].push({ "frase": "DE_JUNWAV" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '7':
			ret["frases"].push({ "frase": "cDeJulho.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '8':
			ret["frases"].push({ "frase": "cDe Agosto.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '9':
			ret["frases"].push({ "frase": "cDesetembro.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '10':
			ret["frases"].push({ "frase": "cDeOutubro.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '11':
			ret["frases"].push({ "frase": "cDeNovembro.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;
		case '12':
			ret["frases"].push({ "frase": "cDeDezembro.wav" });
			ret["frases"].push({ "frase": "ypiiEDe.wav" });
			break;			
		break;
		default:
        	ret["frases"].push({ "frase": "cSilencio.wav" });
			break;		
	}

	return ret;
}


function getFrasepFraseEmergencial(dados) {
	
	var ret = {};	
	var pFraseEmergencial = dados['parametros']['FraseEmergencial'];
	
	ret["frases"] = [];	
	ret["frases"].push({ "frase": pFraseEmergencial });
	
	return ret.frases;
}

function getFrasesMenu1Nivel(dados) {
	
	__Log('dados.parametros.HabPedeCPF : ' + dados['parametros']['HabPedeCPF']);
	__Log('dados.NumB : ' + dados['NumB']);
	
	var ret = {};			
	ret["frases"] = [];
	
	if (dados['parametros']['HabPedeCPF'].indexOf(dados['NumB']) >= 0 ) {
		ret["frases"].push({ "frase" : "ypiiPFDigNumCartCPF.wav"}); 
	} else {
		ret["frases"].push({ "frase" : "ypiiPFDigNumCart.wav"}); 
	}
	__Log('dados.parametros.HabOpcoesMenu1oNivel : ' + dados['parametros']['HabOpcoesMenu1oNivel']);

	if (dados['parametros']['HabOpcoesMenu1oNivel']) {
		ret["frases"].push({ "frase" : "ypiiParaComuPerdRoubDig2.wav"}); 
		ret["frases"].push({ "frase" : "ypiiSeVoceAindaNCliente.wav"});
		ret["frases"].push({ "frase" : dados['NomeCartaoNumB']});
		ret["frases"].push({ "frase" : "cDigite8.wav"});
	}
	
	return ret.frases;
	
}

// Rodrigo Pereira - Fim

function trataAtdUra_FalaLimiteCompra(dados) {
    var retorno;
	ret["estatistica"] = [];
	ret["vocalizaPrompt"] = [];
	
    if (dados != "" || dados != undefined){
		if(dados["UR80"]["AplSldDispNac"] > 0 && dados["UR80"]["AplSinalSldDispNac"] == 0){
			ret["estatistica"].push({ "estatistica" : "2229"});
			ret["vocalizaPrompt"].push({"frase": "ypiiLimTotalComprasEDe.wav"});
			ret["vocalizaPrompt"].push({"valor": dados["UR80"]["AplVlrLimiteNac"]});
			ret["vocalizaPrompt"].push({"frase": "ypiiDisponivelEm.wav"});
			ret["vocalizaPrompt"].push({"data": getPromptDiaDoMes(dados["UR80"]["AplVlrLimiteNac"].substring(0,2))});
			ret["vocalizaPrompt"].push({"data": getPromptMes(dados["UR80"]["AplVlrLimiteNac"].substring(2,4))});
			ret["vocalizaPrompt"].push({"frase": "cEDe.wav"});
			ret["vocalizaPrompt"].push({"valor": dados["UR80"]["AplSldDispNac"]});

		}else if(dados["UR80"]["AplSldDispNac"] > 0 && dados["UR80"]["AplSinalSldDispNac"] == 1){
			ret["estatistica"].push({ "estatistica" : "2238"});

		}else{
			ret["estatistica"].push({ "estatistica" : "2230"});
		}
		dados["direcionaFluxo"] = "Menu2Nivel"; 
	}
	dados["listaEstatisticas"] = ret["estatistica"];
	dados["listaPrompts"] = ret["vocalizaPrompt"];
	return dados;
}

function setFraseDesligaP2(dados) {

	__Log('######## dados.bEhAtendimentoServiceDesk :' + dados["bEhAtendimentoServiceDesk"] );
	__Log('######## dados.bEhAtendimentoServiceDesk_0800 :' + dados["bEhAtendimentoServiceDesk_0800"] );
    __Log('######## dados.parametros.Procon_HabFraseProconCovid :' + dados.parametros.Procon_HabFraseProconCovid );
	 __Log('######## dados.bEhAtendimentoProcon :' + dados["bEhAtendimentoProcon"] );
	__Log('######## dados.bEhAtendimentoD_Ibi_Seguro :' + dados["bEhAtendimentoD_Ibi_Seguro"] );
	 __Log('######## dados.bEhAtendimentoD_Emprest_INSS :' + dados["bEhAtendimentoD_Emprest_INSS"] );
    
    var frases = [];

    if ( dados['bEhAtendimentoServiceDesk'] || dados['bEhAtendimentoServiceDesk_0800'] ) {
       frases.push({ "frase": "ypiiVoceLigouSDBradescard.wav" });
    } else if (dados['bEhAtendimentoProcon'] == true) {
    	if(dados['parametros']['Procon_HabFraseProconCovid']) {
    		frases.push({ "frase": "ypiiBemVindoAtendProconCovid.wav" });
    	} else {
    		frases.push({ "frase": "ypiiBemVindoAtendProconSegSex.wav" });
    	}
    } else if(dados['bEhAtendimentoD_Ibi_Seguro']) {
    	frases.push({ "frase": "cObrigadoLigar.wav" });
    	frases.push({ "frase": "ypiiCentralRelacIBISeguros.wav" });
    } else if( dados['bEhAtendimentoD_Emprest_INSS'] && dados['bSeDataFraseINSSTelMudou'] ) {
    	frases.push({ "frase": "ypiiClienEmprestConsigPensi.wav" });
    	frases.push({ "frase": "cObrigadoLigar.wav" });
    	frases.push({ "frase": "ypiiCentralBradSempDisposicao.wav" });
    } else {
    	frases.push({ "frase": "cObrigadoLigar.wav" });
    	frases.push({ "frase": "ypiiCentralBradSempDisposicao.wav" });
    }
    
    return frases;
}


function falaSaudacao(dados) {
    
	var frases = [];
	var seFalaFraseVisaGold = dados['SeFalaFraseVisaGold'];
	var seFalaFraseEloMais = dados['SeFalaFraseEloMais'];
	var sORGCartao = dados['sORGCartao'];
	var sLogoCartao = dados['sLogoCartao'];
	var parametros = dados['parametros'];
	
	__Log('########### dados.sORGCartao :' + dados.sORGCartao);
	__Log('########### dados.sLogoCartao :' + dados.sLogoCartao);	
	__Log('########### dados.strAuxORGLogo :' + dados.strAuxORGLogo);
	__Log('########### dados.strAuxORG :' + dados.strAuxORG);
	__Log('########### dados.parametros.HabFraseInformativa1 :' + dados.parametros.HabFraseInformativa1);	
	__Log('########### dados.parametros.HabFraseInformativa3 :' + dados.parametros.HabFraseInformativa3);
	__Log('########### dados.parametros.HabFraseInformativa4 :' + dados.parametros.HabFraseInformativa4);
	__Log('########### dados.parametros.FraseInformativa1 :' + dados.parametros.FraseInformativa1);
	__Log('########### dados.parametros.FraseInformativa3 :' + dados.parametros.FraseInformativa3);
	__Log('########### dados.parametros.FraseInformativa4 :' + dados.parametros.FraseInformativa4);
	__Log('########### dados.UR80.AplCondicaoVencto :' + dados.UR80.AplCondicaoVencto);
	__Log('########### dados.UR80.AplSinalSldDevedor :' + dados.UR80.AplSinalSldDevedor);

	
	if (seFalaFraseVisaGold) {
        //frases.push({'frase:' : 'ypiiVoceConsulPontTerAut.wav'});
          frases.push({"frase": "ypiiAgoraCartVisaGoldVantg.wav" });
    }
	
    if (seFalaFraseEloMais) {
        if (sORGCartao == '038' && sLogoCartao == '038') {
            frases.push({"frase": "ypiiCartEloMaisVoceBenefFlex.wav" });
        } else if (sORGCartao == '038' && sLogoCartao == '048') {
            frases.push({"frase": "ypiiCartEloBenefFlex.wav" });
        } else if (sORGCartao == '046' && sLogoCartao == '038') {
            frases.push({"frase": "ypiiCartEloMaisVoceBenefFlex.wav" });
        } else if (sORGCartao == '046' && sLogoCartao == '048') {
            frases.push({"frase": "ypiiCartEloMaisVoceBenefFlex.wav" });
        } else if (sORGCartao == '069' && sLogoCartao == '048') {
            frases.push({"frase": "ypiiCartEloBenefFlex.wav" });
        } else if (sORGCartao == '081' && sLogoCartao == '038') {
            frases.push({"frase": "ypiiCartEloMaisVoceBenefFlex.wav" });
        } else if (sORGCartao == '081' && sLogoCartao == '048') {
            frases.push({"frase": "ypiiCartEloBenefFlex_663.wav" });
        } else if (sORGCartao == '102' && sLogoCartao == '048') {
            frases.push({"frase": "ypiiCartEloBenefFlex_663.wav" });
        } else if (sORGCartao == '122' && sLogoCartao == '038') {
            frases.push({"frase": "ypiiCartEloMaisVoceBenefFlex_666.wav" });
        } else if (sORGCartao == '122' && sLogoCartao == '048') {
            frases.push({"frase": "ypiiCartEloBenefFlex_663.wav" });
        } else if (sORGCartao == '122' && sLogoCartao == '058') {
            frases.push({"frase": "ypiiCartEloBenefFlex_664.wav" });
        } else if (sORGCartao == '126' && sLogoCartao == '038') {
            frases.push({"frase": "ypiiCartEloMaisVoceBenefFlex_668.wav" });
        }
    } else {
    	frases.push({"frase": 'cSilencio.wav'});
    }
	
	if (PossuiOrgLogo(parametros.HabFraseInformativa1,AppState.io_dados['strAuxORG']) || PossuiOrgLogo(parametros.HabFraseInformativa1,AppState.io_dados['strAuxORGLogo'])) {
        //frases.push(getFrasesParametros(dados, 'FraseInformativa1'));
        frases.push({"frase": dados.parametros.FraseInformativa1});
    }else if (PossuiOrgLogo(parametros.HabFraseInformativa3,AppState.io_dados['strAuxORG']) || PossuiOrgLogo(parametros.HabFraseInformativa3,AppState.io_dados['strAuxORGLogo'])) {
        if (parametros['FraseInformativa3'] == 'ypiiAcessExtLimMelhorData.wav' || parametros['FraseInformativa3'] == 'ypiiConsulFatAppstore.wav') {
			if ((dados['UR80']['AplCondicaoVencto'] == '4' || dados['UR80']['AplCondicaoVencto'] == '5') && dados['UR80']['AplSinalSldDevedor'] != '1') {
				if (parametros['FraseInformativa3'] == 'ypiiConsulFatAppstore.wav'){
					frases.push({ 'frase' : 'ypiiRecebBoletEmail.wav' });
				} else {
					frases.push({ 'frase' : 'ypiiEstaDispApliBraCart.wav' });
				}
			} else {
				//frases.push(getFrasesParametros(dados, 'FraseInformativa3'));
				frases.push({"frase": dados.parametros.FraseInformativa3});
			}
		} else {
			//frases.push(getFrasesParametros(dados, 'FraseInformativa3'));
			frases.push({"frase": dados.parametros.FraseInformativa3});
		}
    }

	if (PossuiOrgLogo(parametros.HabFraseInformativa4,AppState.io_dados['strAuxORG']) || PossuiOrgLogo(parametros.HabFraseInformativa4,AppState.io_dados['strAuxORGLogo'])) {
		//frases.push(getFrasesParametros(dados, "FraseInformativa4"));
		frases.push({"frase": dados.parametros.FraseInformativa4});
    }
	
	frases.push({"frase": 'cSilencio.wav'});

	return frases;
}

function getFrasesFalaSaldoCondicaoVencto_0(dados) {

	var ret = {};
	ret["frases"] = [];
	
	//UR80.AplDataCorrente (Formato DDMM)
	ret["frases"].push({ "frase" : "ypiiSuaConNaoApreMovAte.wav"});
	ret["frases"].push({ "data" : dados.UR80.AplDataCorrente.substring(0,2) + dados.UR80.AplDataCorrente.substring(3,5)});
	
	return ret.frases;
}
	
function getFrasesFalaSaldoCondicaoVencto_1(dados) {
	
	var ret = {};
	ret["frases"] = [];
	
	__Log('########### dados.UR80.AplSinalVlrSldParcial :' + dados.UR80.AplSinalVlrSldParcial);
	__Log('########### dados.UR80.AplDataVencto :' + dados.UR80.AplDataVencto);
	
	ret["frases"].push({ "frase" : "ypiiObrigPagDe.wav"});
	ret["frases"].push({ "valor" : dados.UR80.AplVlrFatura}); // Grande chance de dar problemas (extenso)
	ret["frases"].push({ "frase" : "ypiiEM.wav"});
	ret["frases"].push({ "data" : dados.UR80.AplDataVencto.substring(0,2) + dados.UR80.AplDataVencto.substring(3,5)});
	if(parseInt(dados.UR80.AplVlrSldParcial) == 0 ) {
		ret["frases"].push({ "frase" : "ypiiAteMomNaoConstValLancFat.wav"});
	} else if (parseInt(dados.UR80.AplVlrSldParcial) > 0) {
		ret["frases"].push({ "frase" : "ypiiSeuSaldoParParaProxVencEDe.wav"});
		ret["frases"].push({ "valor" : dados.UR80.AplVlrSldParcial}); // Grande chance de dar problemas (extenso)
		if (parseInt(dados.UR80.AplSinalVlrSldParcial ) == 1) {
			ret["frases"].push({ "frase" : "ypiiCredor.wav"});
		} else {
			ret["frases"].push({ "frase" : "ypiiDevedor.wav"});
		}
	}
	return ret.frases;
}
	
function getFrasesFalaSaldoCondicaoVencto_2(dados) {
	
	var ret = {};
	ret["frases"] = [];
	
	__Log('########### dados.UR80.AplVlrSldParcial :' + dados.UR80.AplVlrSldParcial);
	
	if(parseInt(dados.UR80.AplVlrSldParcial) == 0 ) {
		ret["frases"].push({ "frase" : "ypiiAteMomNaoConstValLancFat.wav"});
	} else if (parseInt(dados.UR80.AplVlrSldParcial) > 0) {
		ret["frases"].push({ "frase" : "ypiiSeuSaldoParParaProxVencEDe.wav"});
		ret["frases"].push({ "valor" : dados.UR80.AplVlrSldParcial}); // Grande chance de dar problemas (extenso)
		if (parseInt(dados.UR80.AplSinalVlrSldParcial ) == 1) {
			ret["frases"].push({ "frase" : "ypiiCredor.wav"});
		} else {
			ret["frases"].push({ "frase" : "ypiiDevedor.wav"});
		}
	}
	return ret.frases;
}
	
function getFrasesFalaSaldoCondicaoVencto_3(dados) {
	
	var ret = {};
	ret["frases"] = [];
	
	__Log('########### dados.UR80.AplDataVencto :' + dados.UR80.AplDataVencto);
	__Log('########### dados.UR80.AplVlrSldParcial :' + dados.UR80.AplVlrSldParcial);
	
	if(parseInt(dados.UR80.AplVlrSldParcial) > 0 ) {
		ret["frases"].push({ "frase" : "ypiiObrigPagDe.wav"});
		ret["frases"].push({ "valor" : dados.UR80.AplVlrFatura}); // Grande chance de dar problemas (extenso)
		ret["frases"].push({ "frase" : "ypiiEM.wav"});
		ret["frases"].push({ "data" : dados.UR80.AplDataVencto.substring(0,2) + dados.UR80.AplDataVencto.substring(3,5)});
		ret["frases"].push({ "frase" : "ypiiSuaFatNaoEstFec.wav"});
		ret["frases"].push({ "frase" : "ypiiSeuSaldoParParaProxVencEDe.wav"});
		ret["frases"].push({ "valor" : dados.UR80.AplVlrSldParcial}); // Grande chance de dar problemas (extenso)
		if (parseInt(dados.UR80.AplSinalVlrSldParcial ) == 1) {
			ret["frases"].push({ "frase" : "ypiiCredor.wav"});
		} else {
			ret["frases"].push({ "frase" : "ypiiDevedor.wav"});
		}
	} else {
		ret["frases"].push({ "frase" : "ypiiSuaFatNaoEstFec.wav"});
	}
	
	return ret.frases;
}
	
function getFrasesFalaSaldoCondicaoVencto_4(dados) {
	
	var ret = {};
	ret["frases"] = [];
	
	__Log('########### dados.UR80.AplDataVencto :' + dados.UR80.AplDataVencto);
	__Log('########### dados.UR80.AplVlrFatura :' + dados.UR80.AplVlrFatura);
	__Log('########### dados.UR80.AplSinalSldDevedor :' + dados.UR80.AplSinalSldDevedor);
	__Log('########### dados.UR80.AplVlrSldParcial :' + dados.UR80.AplVlrSldParcial);
	
	if(parseInt(dados.UR80.AplVlrSldParcial) == 0 ) {
		ret["frases"].push({ "frase" : "ypiiNaoSaldoParaPagEm.wav"});
	} else if (dados.UR80.AplSinalSldDevedor != '1') {
		ret["frases"].push({ "frase" : "ypiiValFatVencEm.wav"});
	} else {
		ret["frases"].push({ "frase" : "ypiiSeuSaldoParcParaProxVecEm.wav"});
	}
	
	ret["frases"].push({ "data" : dados.UR80.AplDataVencto.substring(0,2) + dados.UR80.AplDataVencto.substring(3, 5) });
	
	if (parseInt(dados.UR80.AplVlrSldParcial ) == 0) {
		ret["frases"].push({ "frase" : "cSilencio.wav"});
	} else {
		ret["frases"].push({ "frase" : "cEDe.wav"});
		if (dados.UR80.AplSinalVlrFatura != '1') {
			ret["frases"].push({ "valor" : dados.UR80.AplVlrFatura}); // Grande chance de dar problemas (extenso)
			ret["frases"].push({ "frase" : "ypiiDevedor.wav"});
		} else {
			ret["frases"].push({ "valor" : dados.UR80.AplVlrSldParcial}); // Grande chance de dar problemas (extenso)
			ret["frases"].push({ "frase" : "ypiiCredor.wav"});
		}
	
		if (parseInt(dados.UR80.AplSinalSldDevedor) != 1 && parseInt(dados.UR80.AplSinalVlrFatura) != 1 && dados.UR80.AplFlagDebConta == 'N' ) {
			ret["frases"].push({ "frase" : "cSilencio.wav"});
		} else {
			ret["frases"].push({ "frase" : "ypiiFatCartDebAuto.wav"});
		}
	}
	return ret.frases;
}
	
function getFrasesFalaSaldoCondicaoVencto_5 (dados) {
	
	var ret = {};
	ret["frases"] = [];
	
	__Log('########### dados.UR80.AplVlrSldParcial :' + dados.UR80.AplVlrSldParcial);
	__Log('########### dados.UR80.AplDataVencto :' + dados.UR80.AplDataVencto);
	
	if (parseInt(dados.UR80.AplVlrSldParcial) == 0) {
		ret["frases"].push({ "frase" : "ypiiNaoSaldoParaPagEm.wav"});
	} else if (dados.UR80.AplSinalSldDevedor != '1') {
		ret["frases"].push({"frase" : "ypiiAteMomNaoConstPagFatVecEm.wav"});
	} else {
		ret["frases"].push({"frase" : "ypiiSeuSaldoParcParaProxVecEm.wav"});
	}
	ret["frases"].push({ "data" : dados.UR80.AplDataVencto.substring(0,2) + dados.UR80.AplDataVencto.substring(3, 5) });
	
	if (parseInt(dados.UR80.AplVlrSldParcial) == 0){
		ret["frases"].push({"frase" : "cSilencio.wav"});
	} else if (dados.UR80.AplSinalVlrFatura != '1'){
		ret["frases"].push({"frase" : "ypiiNoValorDe.wav"});
		ret["frases"].push({ "valor" : dados.UR80.AplVlrFatura});
	} else {
		ret["frases"].push({"frase" : "cEDe.wav"});
		ret["frases"].push({"valor" : dados.UR80.AplVlrSldParcial});
		ret["frases"].push({"frase" : "ypiiCredor.wav"});
	}
	return ret.frases;
}
	
function getFrasesFalaSaldoCondicaoVencto_6 (dados) {
	
	var ret = {};
	ret["frases"] = [];
	
	__Log('########### dados.UR80.AplVlrSldParcial :' + dados.UR80.AplVlrSldParcial);
	__Log('########### dados.UR80.AplDataVencto :' + dados.UR80.AplDataVencto);
	
	if (parseInt(dados.UR80.AplVlrSldParcial) == 0) {
		ret["frases"].push({"frase" : "ypiiAteMomNaoConstValLancFat.wav"});
	} else {
		ret["frases"].push({"frase" : "ypiiSeuSaldoParParaProxVencEDe.wav"});
		ret["frases"].push({"valor" : dados.UR80.AplVlrSldParcial}); // Grande chance de dar problemas (extenso)
	
		if (dados.UR80.AplSinalVlrSldParcial == '1') {
			ret["frases"].push({"frase" : "ypiiCredor.wav"});
		} else {
			ret["frases"].push({"frase" : "ypiiDevedor.wav"});
		}
	}
	return ret.frases;
}

function getFraseFalaCartao(dados){

	var frases = [];

	frases.push({ 'frase' : 'ypiiParaCPFDigConstBaseCart.wav'});
	frases.push({ 'frase' : nomeTipoCartao(dados, 0)});
	frases.push({ 'frase' : 'ypiiPFAguardConsultCart.wav'});

	return frases;

}

function getFrase_FalaLimiteCompra(dados) {
    
	var frases = [];
	
	__Log('########### dados.UR80.AplSinalSldDispNac :' + dados.UR80.AplSinalSldDispNac);
	__Log('########### dados.UR80.AplDataCorrente :' + dados.UR80.AplDataCorrente);
	__Log('########### dados.UR80.AplVlrLimiteNac :' + dados.UR80.AplVlrLimiteNac);
	
	if(dados["UR80"]["AplSldDispNac"] > 0 && dados["UR80"]["AplSinalSldDispNac"] == 0){
		frases.push({"frase": "ypiiLimTotalComprasEDe.wav"});
		frases.push({"valor": dados["UR80"]["AplVlrLimiteNac"]});
		frases.push({"frase": "ypiiDisponivelEm.wav"});
		frases.push({"data": dados["UR80"]["AplDataCorrente"].substring(0, 2) + dados["UR80"]["AplDataCorrente"].substring(3)});
		frases.push({"frase": "cEDe.wav"});
		frases.push({"valor": dados["UR80"]["AplSldDispNac"]});
	}else if(dados["UR80"]["AplSldDispNac"] > 0 && dados["UR80"]["AplSinalSldDispNac"] == 1){
		frases.push({"frase": "ypiiNaoLimDispParaComEm.wav"});
		frases.push({"data": dados["UR80"]["AplDataCorrente"].substring(0, 2) + dados["UR80"]["AplDataCorrente"].substring(3) });
	}else{
		frases.push({"frase": "ypiiNaoLimDispParaComEm.wav"});
		frases.push({"data": dados["UR80"]["AplDataCorrente"].substring(0, 2) + dados["UR80"]["AplDataCorrente"].substring(3) });
	}
	
	return frases;

}

//PedeMesNasc -->
function getFrasesPedeMesNasc (dados){
    
    var frases = [];

    if (dados.bListaPIDCNPJ == true) {
        frases.push({ "frase": "ypiiPFDigMesConstEmp2Dig.wav" });
    } else {
        frases.push({ "frase": "ypiiPFDigMesNascTitConta.wav" });
    }

    return frases;    
}
// PedeMesNasc <--

//PedeDiaNasc -->
function getFrasesPedeDiaNasc (dados){

    var frases = [];
   
    if (dados.bListaPIDCNPJ == true) {
        frases.push({ "frase": "ypiiPFDigDiaConstEmp2Dig.wav" });
    } else {
        frases.push({ "frase": "ypiiPFDigDiaNasciTitConta.wav" });
    }
      
    return frases;    
}
// PedeDiaNasc <--

//PedeAnoNasc -->
function getFrasesPedeAnoNasc (dados){

    var frases = [];

    if (dados.bListaPIDCNPJ == true) {
        frases.push({ "frase": "ypiiPFDigAnoConstEmp4Dig.wav" });
    } else {
        frases.push({ "frase": "ypiiPFDigAnoNasciTitConta.wav" });
    }
       
    return frases;    
}
// PedeAnoNasc <--

//PedeCPFCNPJ -->
function getFrasesPedeCPFCNPJ (dados){
   
    var frases = [];
    
    if (dados.bListaPIDCNPJ == true) {
        frases.push({ "frase": "ypiiDigCnpjEmp14Dig.wav" });
    } else {
        frases.push({ "frase": "ypiiPFDigCPFTitConta.wav" });
    }
    
    return frases;    
}
// PedeCPFCNPJ <--

//PedeCVVCVC -->
function getFrasesPedeCVVCVC (dados){

    var frases = [];


    frases.push({ "frase": "ypiiPFDigNumImpressPainel.wav" });
     
    return frases;    
}
// PedeCVVCVC <--

//PedeVencFatura -->
function getFrasesPedeVencFatura (dados){

    var frases = [];

    frases.push({ "frase": "ypiiPFDigDiaVenciFat.wav" });
    
    return frases;    
}
// PedeVencFatura <--

//PedeValidade -->
function getFrasesPedeValidade (dados){

    var frases = [];
    
    frases.push({ "frase": "ypiiPFDigMesANoValidade.wav" });
     
    return frases;    
}
// PedeValidade <--

//PedeTemAdicional -->
function getFrasesPedeTemAdicional (dados){
 
    var frases = [];

    frases.push({ "frase": "ypiiPossCartAdicional.wav" });
    frases.push({ "frase": "ypiiPFDig2ParaSim3ParaNao.wav" });
    
    return frases;
    
}
// PedeTemAdicional <--

//PedeTemProtPR -->
function getFrasesPedeTemProtPR (dados){
   
    var frases = [];

    frases.push({ "frase": "ypiiPossuiProtPerdRoubCart.wav" });
    frases.push({ "frase": "ypiiPFDig2ParaSim3ParaNao.wav" });
     
    return frases;
    
}

function getFrasesFalaAtdBinCCL(dados){
	
	
    __Log('######## dados.eBINCartaoCCL :' +  dados["eBINCartaoCCL"] );
	__Log('######## dados.parametros.TEL_COB_LOCAL  :' + dados["parametros"]["TEL_COB_LOCAL"]);
	__Log('######## dados.parametros.TEL_COB_LOCAL  :' + dados["parametros"]["TEL_COMPER_LOCAL"]);
	__Log('######## dados.parametros.TEL_COOP_LOCAL  :' + dados["parametros"]["TEL_COOP_LOCAL"]);
	__Log('######## dados.parametros.TEL_LUIGI_LOCAL  :' + dados["parametros"]["TEL_LUIGI_LOCAL"]);
	__Log('######## dados.parametros.TEL_COB_0800  :' + dados["parametros"]["TEL_COB_0800"]);
	__Log('######## dados.parametros.TEL_COB_0800  :' + dados["parametros"]["TEL_COMPER_0800"]);
	__Log('######## dados.parametros.TEL_COOP_0800  :' + dados["parametros"]["TEL_COOP_0800"]);
	__Log('######## dados.parametros.TEL_LUIGI_0800  :' + dados["parametros"]["TEL_LUIGI_0800"]);
	
    var ret = {};
    ret["frases"] = [];
 
    ret["frases"].push({ "frase": "ypiiNumAtendMud.wav" });
    ret["frases"].push({ "frase": "ypiiLigue.wav" });

    if(dados["eBINCartaoCCL"] == "BIN_COMPER"){
        ret["frases"].push({"string": dados["parametros"]["TEL_COMPER_LOCAL"]});
    }else if(dados["eBINCartaoCCL"] == "BIN_COOP"){
        ret["frases"].push({"string": dados["parametros"]["TEL_COOP_LOCAL"]});
    }else{
        ret["frases"].push({"string": dados["parametros"]["TEL_LUIGI_LOCAL"]});
    }

    ret["frases"].push({ "frase": "ypiiParaCapRegMetrop.wav" });
    ret["frases"].push({ "frase": "ypiiOuParaDemRegLig.wav" });

    if(dados["eBINCartaoCCL"] == "BIN_COMPER"){
        ret["frases"].push({"string": dados["parametros"]["TEL_COMPER_0800"]});
    }else if(dados["eBINCartaoCCL"] == "BIN_COOP"){
        ret["frases"].push({"string": dados["parametros"]["TEL_COOP_0800"]});
    }else{
        ret["frases"].push({"string": dados["parametros"]["TEL_LUIGI_0800"]});
    }

    ret["frases"].push({ "frase": "ypiiRepetindo.wav" });

    ret["frases"].push({ "frase": "ypiiNumAtendMud.wav" });
    ret["frases"].push({ "frase": "ypiiLigue.wav" });

    if(dados["eBINCartaoCCL"] == "BIN_COMPER"){
        ret["frases"].push({"string": dados["parametros"]["TEL_COMPER_LOCAL"]});
    }else if(dados["eBINCartaoCCL"] == "BIN_COOP"){
        ret["frases"].push({"string": dados["parametros"]["TEL_COOP_LOCAL"]});
    }else{
        ret["frases"].push({"string": dados["parametros"]["TEL_LUIGI_LOCAL"]});
    }

    ret["frases"].push({ "frase": "ypiiParaCapRegMetrop.wav" });
    ret["frases"].push({ "frase": "ypiiOuParaDemRegLig.wav" });

    if(dados["eBINCartaoCCL"] == "BIN_COMPER"){
        ret["frases"].push({"string": dados["parametros"]["TEL_COMPER_0800"] });
    }else if(dados["eBINCartaoCCL"] == "BIN_COOP"){
        ret["frases"].push({"string": dados["parametros"]["TEL_COOP_0800"]});
    }else{
        ret["frases"].push({"string": dados["parametros"]["TEL_LUIGI_0800"]});
    }

    return ret.frases;
}


function getFraseInoperante(dados) {
	var frases = [];
	var nData = new Date();
    var hora = nData.getHours();

    //ver horario saudação
    if (hora > 00 && hora < 12) {
        frases.push({"frase" : "cBomDia.wav"}); //Bom dia
    } else if (hora < 18){
        frases.push({"frase" : "cBoaTarde.wav"}); //Boa tarde
    } else {
        frases.push({"frase" : "cBoaNoite.wav"}); //Boa noite
    }

    //Saudação
    //frases.push({"frase" : "ypusParaInfoNumCartCPF.wav"});
        				
    return frases;
} 


function getFraseInputInoperante(dados) {
		var ret = {};
		ret["frases"] = [];
		ret["frases"].push({ "frase" : "ypiiParaInfoNumCartCPF.wav"});
		return ret.frases;
}

function getFraseMenuOutrasSolicitacoes(dados) {

	__Log('## PossuiOrgLogo(dados.parametros.HabOpContestaCompraSaque,dados.sORGCartao): ' + PossuiOrgLogo(dados.parametros.HabOpContestaCompraSaque,dados.sORGCartao));
	__Log('## PossuiOrgLogo(dados.parametros.HabOpContestaCompraSaque,dados.strAuxORGLogo): ' + PossuiOrgLogo(dados.parametros.HabOpContestaCompraSaque,dados.strAuxORGLogo));
	__Log('## PossuiOrgLogo(dados.parametros.HabProgramFidelidade,dados.sORGCartao: ' + PossuiOrgLogo(dados.parametros.HabProgramFidelidade,dados.sORGCartao));
	__Log('## PossuiOrgLogo(dados.parametros.HabOpDespNegada,dados.sORGCartao): ' + PossuiOrgLogo(dados.parametros.HabOpDespNegada,dados.sORGCartao));
	__Log('## PossuiOrgLogo(dados.parametros.HabOpDespNegada,dados.strAuxORGLogo) :' + PossuiOrgLogo(dados.parametros.HabOpDespNegada,dados.strAuxORGLogo));
	__Log('## PossuiOrgLogo(dados.parametros.HabOpAlterEndereco,dados.sORGCartao) : ' + PossuiOrgLogo(dados.parametros.HabOpAlterEndereco,dados.sORGCartao));
	__Log('## PossuiOrgLogo(dados.parametros.HabOpAlterEndereco,dados.strAuxORGLogo) : ' + PossuiOrgLogo(dados.parametros.HabOpAlterEndereco,dados.strAuxORGLogo));

	var ret = {};
	ret['opcoesValidas'] = '';
	ret["frases"] = [];

	ret["frases"].push({ "frase" : "ypiiCancCartDig2.wav"});
	ret["frases"].push({ "frase" : "ypiiAplicBradCartDig3.wav"});
	ret['opcoesValidas'] += '23';

	if (PossuiOrgLogo(dados.parametros.HabOpContestaCompraSaque,dados.sORGCartao) || PossuiOrgLogo(dados.parametros.HabOpContestaCompraSaque,dados.strAuxORGLogo)) {
		ret["frases"].push({ "frase" : "ypiiAssuntRelacCompSaqNReconDig4.wav"});
		ret['opcoesValidas'] += '4';
	}
	if (PossuiOrgLogo(dados.parametros.HabProgramFidelidade,dados.sORGCartao)) {
		ret["frases"].push({ "frase" : "ypiiProgFidelidadeDig5.wav"});
		ret['opcoesValidas'] += '5';
	}
	if ((PossuiOrgLogo(dados.parametros.HabOpDespNegada,dados.sORGCartao) || PossuiOrgLogo(dados.parametros.HabOpDespNegada,dados.strAuxORGLogo)) && (dados['bPIDOk'] || dados['bSenhaCHIPOk'])) {
		ret["frases"].push({ "frase" : "ypiiParaConsultMotDespNegDig6.wav"});
		ret['opcoesValidas'] += '6';
	}
	if (PossuiOrgLogo(dados.parametros.HabOpAlterEndereco,dados.sORGCartao) || PossuiOrgLogo(dados.parametros.HabOpAlterEndereco,dados.strAuxORGLogo)) {
		ret["frases"].push({ "frase" : "ypiiAltEndDig7.wav"});
		ret['opcoesValidas'] += '7';
	}

	ret["frases"].push({ "frase" : "ypiiParaFalarAtendDig9.wav"});
	ret["frases"].push({ "frase" : "ypiioltMenuAntDig0.wav"});
	ret['opcoesValidas'] += '90';

	return ret;
}
// PedeTemProtPR <--