function getFrasesCodBarras(dados) {
    var frases = [];
    var codBarras = dados.UR85.AplCodBarraVoz;  
    
    __Log("##### dados.UR80.AplCondicaoVencto = " + dados.UR80.AplCondicaoVencto );
    __Log("##### dados.UR80.AplDataVencto = " + dados.UR80.AplDataVencto );
    __Log("##### dados.UR80.AplVlrFatura = " + dados.UR80.AplVlrFatura );
    __Log("##### dados.UR85.AplCodBarraVoz = " + dados.UR85.AplCodBarraVoz );
 
    if (dados['UR80']['AplCondicaoVencto'] == "5") {
        frases.push({ "frase": "ypiiFatVenceuEm.wav" });
        frases.push({ "data": dados['UR80']['AplDataVencto'].substring(0,2) + dados['UR80']['AplDataVencto'].substring(3,5) });        
        frases.push({ "frase": "ypiiValTotalPagEDe.wav" });
        frases.push({ "valor": dados['UR80']['AplVlrFatura'] });
    } else if (dados['UR80']['AplCondicaoVencto'] == "4") {
        frases.push({ "frase": "ypiiVenciEDia.wav" });
        frases.push({ "data": dados['UR80']['AplDataVencto'].substring(0,2) + dados['UR80']['AplDataVencto'].substring(3,5) });
        frases.push({ "frase": "ypiiValTotalPagEDe.wav" });
        frases.push({ "valor": dados['UR80']['AplVlrFatura'] });
    }
    frases.push({ "frase": "ypiiAnoteCodBarras.wav" });
    frases.push({ "string": codBarras.substring(0,5) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(5,10) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(10,15) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(15,21) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(21,26) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(26,32) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(32,33) });
    frases.push({ "frase": "ypiiRepetindo.wav" });
    frases.push({ "string": codBarras.substring(0,5) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(5,10) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(10,15) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(15,21) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(21,26) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(26,32) });
    frases.push({ "frase": "cSilencio.wav" });
    frases.push({ "string": codBarras.substring(32,33) });
    frases.push({ "frase": "ypiiMais14DigZeros.wav" });
    frases.push({ "frase": "cSilencio.wav" });
 
    if (dados['UR80']['AplCondicaoVencto'] == 5) {
        frases.push({ "frase": "ypiiNConteMValoresJurosMoraAtraso.wav" });
    }
    return frases;
}


function getFrasesFaturaDetalhada(dados) {
    var frases = [];
 
    __Log("##### AplSeguroPerdaRoubo = " + dados.UR85.AplSeguroPerdaRoubo );
    __Log("##### AplSeguroDividaFamiliar = " + dados.UR85.AplSeguroDividaFamiliar );
    __Log("##### AplSeguroMaisVida = " + dados.UR85.AplSeguroMaisVida );
    __Log("##### AplSeguroVidaSemRisco = " + dados.UR85.AplSeguroVidaSemRisco );
    __Log("##### = AplSeguroDesemprego " + dados.UR85.AplSeguroDesemprego );
    __Log("##### = AplSeguroResidencial " + dados.UR85.AplSeguroResidencial );
    __Log("##### AplAplicAcert = " + dados.UR85.AplAplicAcert );
    __Log("##### AplProtecaoTotal = " + dados.UR85.AplProtecaoTotal );
    __Log("##### AplOutrosProdServ = " + dados.UR85.AplOutrosProdServ );
    __Log("##### AplSldFaturaAnterior = " + dados.UR85.AplSldFaturaAnterior );
    __Log("##### AplEncargosFinan = " + dados.UR85.AplEncargosFinan );
    __Log("##### AplJurosDeMora = " + dados.UR85.AplJurosDeMora );
    __Log("##### AplMulta = " + dados.UR85.AplMulta );
    __Log("##### AplAjustes = " + dados.UR85.AplAjustes );
    __Log("##### AplSinalAjustes = " + dados.UR85.AplSinalAjustes );
    __Log("##### AplAnuidade = " + dados.UR85.AplAnuidade );
    __Log("##### AplVlrPagamento = " + dados.UR85.AplVlrPagamento );
    __Log("##### AplSaques = " + dados.UR85.AplSaques );
    __Log("##### AplTotFaturaNac = " + dados.UR85.AplTotFaturaNac );
    __Log("##### AplTotGeralFatura = " + dados.UR85.AplTotGeralFatura );
    __Log("##### AplFlagDebConta = " + dados.UR85.AplFlagDebConta );
 
    frases.push({ "frase": "ypiiTotalComprasAte.wav" });
    frases.push({ "data": dados['UR85']['AplDataCorte']});
    frases.push({ "frase": "cEDe.wav" });
    frases.push({ "valor": dados['UR85']['AplTotCompras'] });
 
    if (dados.UR85.AplSeguroPerdaRoubo > 0) {
        frases.push({ "frase": "ypiiProtPerdOuRoubo.wav" });
        frases.push({ "valor": dados['UR85']['AplSeguroPerdaRoubo'] });
    }
 
    if (dados.UR85.AplSeguroDividaFamiliar > 0) {
        frases.push({ "frase": "ypiiSeguroDivFamiliar.wav" });
        frases.push({ "valor": dados['UR85']['AplSeguroDividaFamiliar'] });
    }
 
    if (dados.UR85.AplSeguroMaisVida > 0) {
        frases.push({ "frase": "ypiiSeguroMaisVida.wav" });
        frases.push({ "valor": dados['UR85']['AplSeguroMaisVida'] });
    }  
 
    if (dados.UR85.AplSeguroVidaSemRisco > 0) {
        frases.push({ "frase": "ypiiSeguroVidaSemRisco.wav" });
        frases.push({ "valor": dados['UR85']['AplSeguroVidaSemRisco'] });
    }
 
    if (dados.UR85.AplSeguroDesemprego > 0) {
        frases.push({ "frase": "ypiiSeguroDesemprego.wav" });
        frases.push({ "valor": dados['UR85']['AplSeguroDesemprego'] });
    }
 
    if (dados.UR85.AplSeguroResidencial > 0) {
        frases.push({ "frase": "ypiiSeguroResidencial.wav" });
        frases.push({ "valor": dados['UR85']['AplSeguroResidencial'] });
    }
 
    if (dados.UR85.AplAplicAcert > 0) {
        frases.push({ "frase": "ypiiAplcAcert.wav" });
        frases.push({ "valor": dados['UR85']['AplAplicAcert'] });
    }
 
    if (dados.UR85.AplProtecaoTotal > 0) {
        frases.push({ "frase": "ypiiProtTotal.wav" });
        frases.push({ "valor": dados['UR85']['AplProtecaoTotal'] });
    }
 
    if (dados.UR85.AplOutrosProdServ > 0) {
        frases.push({ "frase": "ypiiOutProdServicos.wav" });
        frases.push({ "valor": dados['UR85']['AplOutrosProdServ'] });
    }
 
    if (dados.UR85.AplSldFaturaAnterior > 0) {
        frases.push({ "frase": "ypiiSaldoFinanFatAnterior.wav" });
        frases.push({ "valor": dados['UR85']['AplSldFaturaAnterior'] });
    }
 
    if (dados.UR85.AplEncargosFinan > 0) {
        frases.push({ "frase": "ypiiEncargosContratuais.wav" });
        frases.push({ "valor": dados['UR85']['AplEncargosFinan'] });
    }
 
    if (dados.UR85.AplJurosDeMora > 0) {
        frases.push({ "frase": "ypiiJurosMora.wav" });
        frases.push({ "valor": dados['UR85']['AplJurosDeMora'] });
    }
 
    if (dados.UR85.AplMulta > 0) {
        frases.push({ "frase": "ypiiMultaAtraso.wav" });
        frases.push({ "valor": dados['UR85']['AplMulta'] });
    }
 
    if (dados.UR85.AplAjustes > 0) {
        frases.push({ "frase": "ypiiAjustes.wav" });
        frases.push({ "valor": dados['UR85']['AplAjustes'] });
 
        if (dados.UR85.AplSinalAjustes == 1) {
            frases.push({ "frase": "ypiiCredor.wav" });
        } else {
            frases.push({ "frase": "ypiiDevedor.wav" });
        }
    }  
 
    if (dados.UR85.AplAnuidade > 0) {
        frases.push({ "frase": "ypiiAnuidade.wav" });
        frases.push({ "valor": dados['UR85']['AplAnuidade'] });
        if (dados.UR85.AplVlrPagamento > 0) {
            frases.push({ "frase": "ypiiPagEfetuadoAte.wav" });
        } else {
            frases.push({ "frase": "ypiiNenhumPagEfetAte.wav" });
        }        
        frases.push({ "data": dados['UR85']['AplDataCorrente'] });
        if (dados.UR85.AplVlrPagamento > 0) {
            frases.push({ "valor":  dados['UR85']['AplVlrPagamento'] });
        }
    }
 
     if (dados.UR85.AplSaques > 0) {
        frases.push({ "frase": "ypiiSaque.wav" });
        frases.push({ "valor": dados['UR85']['AplSaques'] });
        frases.push({ "frase": "ypiiEncargosSobreSaq.wav" });
        frases.push({ "valor": dados['UR85']['AplEncargoSaques'] });
    }
 
    if (dados.UR85.AplTotFaturaNac > 0) {
        frases.push({ "frase": "ypiiTotalDespesasNacionaisAte.wav" });
        frases.push({ "data": dados['UR85']['AplDataCorte'] });
        frases.push({ "valor": dados['UR85']['AplTotFaturaNac'] });
    }
 
    if (dados.UR85.AplTotGeralFatura > 0) {
        frases.push({ "frase": "ypiiTotalFatVenciEm.wav" });        
        frases.push({ "data": dados['UR85']['AplDataVencto'] });
        frases.push({ "valor": dados['UR85']['AplTotGeralFatura'] });
        if (dados.UR85.AplSinalTotGeralFatura == 1) {
            frases.push({ "frase": "ypiiCredor.wav" });
        } else {
            frases.push({ "frase": "ypiiDevedor.wav" });
        }
    }
 
   if (dados.UR80.AplFlagDebConta == 'S') {
        frases.push({ "frase": "ypiiFatCartDebAuto.wav" });
   }
 
    return frases;
}

function getFrasesFalaDiaVencFat(dados){
	var frases = [];
	
	var parametros = dados['parametros'];

     frases.push({ "frase": "ypiiOVencCartSeraTodoDia.wav" });

    // Verbaliza o dia do campo UR80.AplDiaVectoCartao 
    frases.push({ "numero": dados['UR80']['AplDiaVectoCartao'].substring(0,2) });
    
    frases.push({ "frase": "ypiiDeCadaMes.wav" });
    frases.push({ "frase": "ypiiNesteMesMelDia.wav" });

    // Verbaliza o dia do campo UR80.AplMelhorDiaCompra
    frases.push({ "numero": dados['UR80']['AplMelhorDiaCompra'].substring(0,2) });

    return frases;
}

function getFrasesFalaOpParSel(dados){
	var frases = [];
	
	var parametros = dados['parametros'];

	var Ocorrencia = dados.UR1A.OCOR[dados.iOpEscolhida];

	
	frases.push({ "frase": "ypiiOpcParcEscolhidaProxVenciEM.wav" });
	frases.push({ "data": dados['UR80']['AplDtVctoPrxFatura'].substring(0,4) });
	frases.push({ "frase": "ypiiEntradaValorDe.wav" });
	frases.push({ "valor": Ocorrencia.VlrEntr });
	frases.push({ "frase": "ypiiMais.wav" });
	frases.push({ "numero": Ocorrencia.Qtde });
	frases.push({ "frase": "ypiiParceValorDe.wav" });
	frases.push({ "valor": Ocorrencia.VlrParc });
	frases.push({ "frase": "ypiiContemplaValTotalEncarg.wav" });
	
	var TXJuros = dados.UR1A.TxJuros.split(",");
	frases.push({ "numero": TXJuros[0] });
	
	if (TXJuros.length == 2){
		
		frases.push({ "frase": "ypiiVirgula.wav" });
		frases.push({ "numero": TXJuros[1] });
	}
	
	frases.push({ "frase": "ypiiPorcento.wav" });
	frases.push({ "frase": "ypiiValorCustoEfetTotal.wav" });
	
	var vlrCetAnu = Ocorrencia.VlrCetAnu.split(",");
	frases.push({ "numero": vlrCetAnu[0] });
	
	if (vlrCetAnu.length == 2){
		
		frases.push({ "frase": "ypiiVirgula.wav" });
		frases.push({ "numero": vlrCetAnu[1] });
	}
	
	frases.push({ "frase": "ypiiPorcentoAno.wav" });
	frases.push({ "frase": "ypiiParaEfetParcFatCodRealizPag.wav" });
	frases.push({ "valor": Ocorrencia.VlrEntr });

    return frases;
 }