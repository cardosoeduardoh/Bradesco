// MenuVendas -->
function getFraseMenuVendas (dados){
 
    var ret = {};
    var parametros = dados['parametros'];
    __Log('########### dados.sLogoCartao : ' + dados.sLogoCartao);
    __Log('########### dados.sORGCartao : ' + dados.sORGCartao);
    __Log('########### parametros.HabOpSeguro  : ' + parametros['HabOpSeguro']);
    __Log('########### parametros.HabOpPlanoOdonto  : ' + parametros['HabOpPlanoOdonto']);
    __Log('########### parametros.HabOpCartaoAdicional  : ' + parametros['HabOpCartaoAdicional']);

    ret['nomeMenu'] = "MenuVendas";
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
    ret['logTick'] = 'TICK_LOG_MVENDAS';
    ret['retryTentativaNoMatch'] = true;
    ret['retryTentativaNoInput'] = true;
 
    ret["frases"].push({ "frase": "ypiiParaSolicSaqCartDig2.wav" });
    ret["frases"].push({ "frase": "ypiiInfSaqJaSolicDig3.wav" }); 

    ret["opcoesValidas"] += "23";

    if (PossuiOrgLogo(parametros.HabOpSeguro,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpSeguro,dados.strAuxORGLogo)){       
        ret["frases"].push({ "frase": "ypiiSolicSegProtCartDig4.wav" });
        ret["frases"].push({ "frase": "ypiiPosSegDesAdicCobertDig5.wav" });
        ret["opcoesValidas"] += "45";        
    }

    if (PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.strAuxORGLogo)){      
        ret["frases"].push({ "frase": "ypiiSolicPlaOdoDig6.wav" });
        ret["opcoesValidas"] += "6";     
    }

    if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo)){      
        ret["frases"].push({ "frase": "ypiiParaAdqCartAdicDig7.wav" });
        ret["opcoesValidas"] += "7";          
    }

    if (PossuiOrgLogo(parametros.HabOpSeguro,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpSeguro,dados.strAuxORGLogo)){     
        if (PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.strAuxORGLogo)){          
            if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo)){            
                ret["frases"].push({ "frase": "ypiiParaCancSegPlaAdicDig8.wav" });
            } else {
                ret["frases"].push({ "frase": "ypiiParaCancSegPlaDig8.wav" });
            }
        } else if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo) ) {       
            ret["frases"].push({ "frase": "ypiiParaCancSegAdicDig8.wav" });
        } else {
            ret["frases"].push({ "frase": "ypiiParaCancSegDig8.wav" });
        }
        ret["opcoesValidas"] += "8";
    } else if (PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpPlanoOdonto,dados.strAuxORGLogo)) {   
            if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo)){            
                ret["frases"].push({ "frase": "ypiiParaCancPlaAdicDig8.wav" });    
            } else {
                ret["frases"].push({ "frase": "ypiiParaCancPlaDig8.wav" });    
            }
            ret["opcoesValidas"] += "8";
    } else if (PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.sORGCartao) || PossuiOrgLogo(parametros.HabOpCartaoAdicional,dados.strAuxORGLogo)) {   
        ret["frases"].push({ "frase": "ypiiParaCancAdcDig8.wav" });
        ret["opcoesValidas"] += "8";
    }
 
    ret["frases"].push({ "frase": "ypiioltMenuAntDig0.wav" });
    ret["opcoesValidas"] += "0";

    return ret;
}
// MenuVendas <--