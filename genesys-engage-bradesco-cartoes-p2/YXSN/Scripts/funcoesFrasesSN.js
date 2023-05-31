function getFrases_FalaCelCadastro(dados){
	var frases = [];
	
	var parametros = dados['parametros'];

    frases.push({ "frase": "ypiiCadastConstaNumCelular.wav" });
    frases.push({ "frase": "ypiiDDD.wav" });
    frases.push({ "numero": dados["sTelefoneCelularCadastrado"].substring(0,2)});
    frases.push({ "frase": "ypiiFinal.wav" });
    frases.push({ "string": dados["sTelefoneCelularCadastrado"].substring(dados["sTelefoneCelularCadastrado"].length - 4)});
 	

    return frases;
}
    
function getFrases_FalaCelular(dados){
    	var frases = [];
    	__Log('######### sTelefoneCelularNovo : ' + dados["sTelefoneCelularNovo"])
    	var parametros = dados['parametros'];

        frases.push({ "frase": "ypiiNumDesejCadastrarE.wav" });
        frases.push({ "numero": dados["sTelefoneCelularNovo"].substring(0,2)});
        frases.push({ "frase": "cSilencio.wav" });
        frases.push({ "string": dados["sTelefoneCelularNovo"].substring(2)});
     	

        return frases;
} 

function getFrases_FalaCartaoAtraso(dados){

        var frases = [];            

        var parametros = dados['parametros'];        

        frases.push({ "frase": "ypiiPorGentLigParaTel.wav" });
      
        
     
        frases.push({ "numero": dados["parametros"]['TEL_COB_LOCAL'].substring(0,4)});

        frases.push({ "frase": "cSilencio.wav"});

        frases.push({ "string": dados["parametros"]['TEL_COB_LOCAL'].substring(4)});        

        frases.push({ "frase": "ypiiParaCapRegMetrop.wav" });

        frases.push({ "frase": "cOu.wav" });

        frases.push({ "numero": "0"});    
 
        frases.push({ "numero": dados["parametros"]['TEL_COB_0800'].substring(0,4)});

        frases.push({ "frase": "cSilencio.wav"});

        frases.push({ "string": dados["parametros"]['TEL_COB_0800'].substring(4)});        

        frases.push({ "frase": "ypiiParaOutReg.wav" });

        frases.push({ "frase": "ypiiRepetindo.wav" });

        frases.push({ "numero": dados["parametros"]['TEL_COB_LOCAL'].substring(0,4)});

        frases.push({ "frase": "cSilencio.wav"});

        frases.push({ "string": dados["parametros"]['TEL_COB_LOCAL'].substring(4)});       

        frases.push({ "frase": "ypiiParaCapRegMetrop.wav" });

        frases.push({ "frase": "cOu.wav" });   
 
		frases.push({ "numero": "0"});

        frases.push({ "numero": dados["parametros"]['TEL_COB_0800'].substring(0,4)});

        frases.push({ "frase": "cSilencio.wav"});

        frases.push({ "string": dados["parametros"]['TEL_COB_0800'].substring(4)});        

        frases.push({ "frase": "ypiiParaOutReg.wav" });

        frases.push({ "frase": "ypiiSegSext8As21Sab8As18.wav" });

        return frases;

}

function getFraseFalaSegAcesso(dados) {
	var ret = {};			
	ret["frases"] = [];
	ret["frases1"] = [];
	
	__Log('######### dados.fluxoOrigem : ' + dados.fluxoOrigem);
	__Log('######### dados.parametros.HabSaldoAutenticado : ' + dados.parametros.HabSaldoAutenticado);
	
	 dados["vRetry"]=0;
	
	if(dados.fluxoOrigem != 'fraseInformativa2' && !dados.parametros.HabSaldoAutenticado){
		dados.fluxoOrigem = '';
		ret["frases"].push({ "frase" : "ypiiParaSegAcessServAtendAutSenCart.wav"});
		ret["frases"].push({ "frase" : "ypiiAcessSemSenhaLimUsoServ.wav"});		
	}
    
	
	if(dados.parametros.HabSaldoAutenticado){
		 ret["frases"].push({ "frase" : "ypiiDigSenhaCartCredito.wav"}); 	
		 ret["frases"].push({ "frase" : "cSilencio.wav"}); 
		 ret["frases1"].push({ "frase" : "ypiiDigSenhaCartCredito.wav"}); 	
		 ret["frases1"].push({ "frase" : "cSilencio.wav"}); 
	}else{
		 ret["frases"].push({ "frase" : "ypiiDigSenCart4Dig.wav"}); 	
		 ret["frases"].push({ "frase" : "cSilencio.wav"});
		 ret["frases1"].push({ "frase" : "ypiiDigSenCart4Dig.wav"}); 	
		 ret["frases1"].push({ "frase" : "cSilencio.wav"});
	}
	
	__Log('######### ret : ' + ret);
	
	return ret;
}


function getFrasePedeSenhaAtual(dados) {
	var ret = {};			
	ret["frases"] = [];
	
	ret["frases"].push({ "frase" : "ypiiDigSenCart4Dig.wav"}); 
	
	return ret.frases;
}

function getFrasePedeSenhaNova(dados) {
	var ret = {};			
	ret["frases"] = [];
	
	ret["frases"].push({ "frase" : "ypiiDigNovSenhaCom4Dig.wav"}); 
	
	return ret.frases;
}

function getFrasePedeCVV(dados) {
	var ret = {};			
	ret["frases"] = [];
	
	ret["frases"].push({ "frase" : "ypiiDigCodSeg3Dig.wav"}); 
	
	return ret.frases;
}

function getFrasePedeConfSenha(dados) {
	var ret = {};			
	ret["frases"] = [];
	
	ret["frases"].push({ "frase" : "ypiiConfSuaNovSen.wav"}); 
	
	return ret.frases;
}


function getFrases_ColetaCelularDDD(dados) {
	var ret = {};			
	ret["frases"] = [];
	
	ret["frases"].push({ "frase" : "ypiiDigNumCelDDD.wav"}); 
	
	return ret.frases;
}



        
        