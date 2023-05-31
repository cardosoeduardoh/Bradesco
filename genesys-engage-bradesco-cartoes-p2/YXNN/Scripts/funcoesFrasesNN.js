function getFrasesMenuNaoClienteOpcao2(dados) {
	var ret = {};
	ret["frases"] = [];

    if (dados != "" && dados != undefined){
        if(dados["eAtendimento"] == "ATD_PL"){
            ret["frases"].push({ "frase": "ypiiParaSolCartC&aDirLojDoc.wav" });        
        }else if(dados["eAtendimento"] == "ATD_ELO_CARD"){
            ret["frases"].push({ "frase": "ypiiParaCliEloCardDir.wav" });
        }else if(dados["eAtendimento"] == "ATD_IBICARD"){
            ret["frases"].push({ "frase": "ypiiParaSolCartIbicardDir.wav" });       
        }else if(dados["eAtendimento"] == "ATD_DEFAULT_7332"){
            ret["frases"].push({ "frase": "ypiiParaAdqCartSiteBradescard.wav" });
        }else{
            ret["frases"].push({ "frase": "ypiiParaAdqCartSiteBradescard.wav" });
        }
        
    }
	
				
	return ret.frases;
}