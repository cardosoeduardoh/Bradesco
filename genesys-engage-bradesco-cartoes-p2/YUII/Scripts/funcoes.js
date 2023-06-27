// POLYFILLS
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}


// constANTES
const silencio = "cSILENCIO.wav";
//const silencio = "cSilencio.wav";
const cMenuPrincipal = 'Voltar Menu Principal';
const cMenuAnterior = 'Voltar Menu Anterior';

//constANTES yup2 Rodrigo 21-03-2022
//const NO_INICIO = 0;
const POS_INIC_VARIA_87 = 254;
const MAX_MENU_OPC_VEZ = 2;
const MAX_RETRY = 3;
const MAX_RETRY_PESQUISA = 1;
const TAM_CARTAO = 16;
//'Menu de Entrada 
const NENHUMA_OPCAO = 0;
const NUMERO_CPF = 1;
const COMUNICAR_PERDA_ROUBO = 2;
const SITUACAO_PROPOSTA = 3;
const OPCAO_COMPANHA = 4;
const NAO_EH_CLIENTE = 6;
const NUMERO_CARTAO = 7;
const DERIVAR_ATENDENTE = 9;
const DIGITAR_CPF = 10; 
const EXTRATO_DETALHADO = 11;
const SIMULACAO_LIQUIDACAO = 12;
const DESBLOQUEIO_CARTAO = 13;
const EXTRATO_DETALHADO_FAX = 14;
const PROX_FATURA_BANCO = 15;
const EMISSAO_FAX_BANCO = 16;
const EMISSAO_FAX_CARTAO = 17;
const FATURA_DETALHADA = 18;
const CODIGO_DE_BARRAS = 19;
const CADASTRO_SENHA_REORD = 20;
const FATURA_VIA_FAX = 21;
const CARTAO_CREDITO_CVC = 22;
//'constate para definir o Limite
const APL_LIMITE_MENOR = 0;
const APL_LIMITE_IGUAL = 1;
const APL_LIMITE_MAIOR = 2;
//'Tipos de Telas
const STR1_LOGIN = "C&A MODAS LTDA";
const STR2_LOGIN = "*START SCREEN*";
const STR3_LOGIN = "APLICACAO:";
//constantes para produtos
const PROD_SEM_PRODUTO = "0000"
const PROD_URA_PESQUISA_SATISFAÇÃO = "0001"
const PROD_URA_SAC = "0002"
const PROD_IBICARD_ELO = "0003"
const PROD_SERVICE_DESK = "0004"
const PROD_PROCON = "0005"
const PROD_EMPRESTIMO_IBI_FOLHA = "0006"
const PROD_EMPRESTIMO_BRAD_IBICARD = "0007"
const PROD_ATENDIMENTO_MAKRO_E_DEMAIS = "0008"
const PROD_CENTRAL_DESBLOQ_BRAD_VENDA_SEGUROS = "0009"
const PROD_CAMP_SAQUE = "0010"
const PROD_SUPER_CREDITO = "0011"
const PROD_EMPRESTIMO_INSS = "0012"
const PROD_IBI_SEGURO = "0013"
const PROD_PRO_EGUROS = "0014"
//'ATENCAO!!! O valor da APL_SIST_XXXX deve obedecer sempre o ORG do cartao
const APL_SIST_IBICARD = 11;         
const APL_SIST_PL_BR = 10;            
const APL_SIST_IBICARD_CEA_MC = 11;   
const APL_SIST_IBICARD_CEA_VISA = 13; 
const APL_SIST_IBICARD_IBI_MC = 14;  
const APL_SIST_IBICARD_IBI_VISA = 15; 
const APL_SIST_IBICARD_CEA_SECURED = 16; 
const APL_SIST_DOTz = 17;
const APL_SIST_IBICARD_IBI_SECURED = 19;  
const APL_SIST_SHOPLAPA = 20;
const APL_SIST_IBICRED = 23;
const APL_SIST_IBICARD_CEA_FACIL = 24;
const APL_SIST_IBICARD_IBI_FACIL = 25;
const APL_SIST_MAFRE = 26;                
const APL_SIST_BELEM = 28;                
const APL_SIST_MAKENJI = 29;
const APL_SIST_COLOMBO = 30;
const APL_SIST_ARCOIRIS = 32;
const APL_SIST_ESKALA = 33;
const APL_SIST_SHOPTATUAPE = 34;
const APL_SIST_BONANZA = 36;
const APL_SIST_MATEUS = 38;
const APL_SIST_EXPRESSMASTER = 40;
const APL_SIST_RONDELLI = 42;
const APL_SIST_LEBISCUIT = 44;
const APL_SIST_BAKLIZI = 45;
const APL_SIST_MAKRO = 46;
const APL_SIST_CATTAN = 47;
const APL_SIST_DORINHOS = 48;
const APL_SIST_MODELO = 49;
const APL_SIST_ANGELONI = 52;
const APL_SIST_CANOAS = 56;
const APL_SIST_LOJASREDE = 57;
const APL_SIST_PAGUEMENOS = 59;
const APL_SIST_JEANS = 61;
const APL_SIST_TELERIO = 67;
const APL_SIST_BRADESCARD = 69;
const APL_SIST_GUANABARA = 72;          
const APL_SIST_LUIGI = 72;    
const APL_SIST_TNG = 74;
const APL_SIST_COMPER = 77;
const APL_SIST_PASSARELA = 79;
const APL_SIST_BISTEK = 81;  
const APL_SIST_COOP = 81;
const APL_SIST_SPORTCARD = 89;
const APL_SIST_CVC = 91;
const APL_SIST_HOTLINE_CEA = 97; 
const APL_SIST_0800SAC = 98;
const APL_SIST_OUTROSPARC = 99;
const APL_SIST_LOJASAMERICANAS = 101;   
const APL_SIST_LOJASAMERICANAS_2 = 102 ;
const APL_SIST_CASASBAHIA = 106;
const APL_SIST_CeC = 108;
const APL_SIST_CARAJAS = 112;
const APL_SIST_BRADESCO_EXPRESSO = 114;
const APL_SIST_FUJIOKA = 116;
const APL_SIST_NossoLar = 136;
const APL_SIST_ELO = 510;
const APL_SIST_ELO_BRADESCARD = 569;
const APL_SIST_CONSIGNADO = 571;
const APL_SIST_CAMP_SAQUE = 900;
//'BANCO
const QUEDA_CTI = 33; 
const GOLD_CORPORATE = 34;  
//constantes para saber qual URA(Arvore) a chamada deve seguir 
const APL_URA_BANKCARD = 1;
const APL_URA_PRIVATE = 2;
const APL_URA_IBICRED = 3;
const APL_URA_PARCEIROS = 4;
const APL_URA_BANKCARD_REORD = 5;
const APL_URA_PESQUISA_SATISFACAO = 6;
const APL_URA_HOTLINE = 7;
const APL_URA_DERI = 8; 
const APL_URA_LOJALISTA = 9;
const APL_URA_CAMP_SAQUE = 10;
//Constantes de retorno do modulo de identificação positiva
const eRetIdPos = {
    IDPOS_OPCOES: 1,
    IDPOS_OK:  2,
    IDPOS_SENHA:  3,
    IDPOS_FINALIZA:  4,
    IDPOS_DERIVA:  5
};
//'Constantes de retorno do modulo de transações
const eRetTransacao = {
    TRANS_TOOLS : 1,
    TRANS_UR78: 2,
    TRANS_UR80 : 3,
    TRANS_UR81 : 4,
    TRANS_UR82 : 5,
    TRANS_UR83 : 6,
    TRANS_UR84 : 7,
    TRANS_UR85 : 8,
    TRANS_UR8F : 9,
    TRANS_UR87 : 10,
    TRANS_UR88 : 11,
    TRANS_UR90 : 12,
    TRANS_UR91 : 13,
    TRANS_UR92 : 14,
    TRANS_UR93 : 14,
    TRANS_UR96 : 16,
    TRANS_WS : 17,
    TRANS_FRAUDE : 18,
    TRANS_UR76 : 19,
    TRANS_UR1A : 20,
    TRANS_MAX : 21
};
//'Constantes de retorno para Menus
const eRetMenus = {
    MNU_VAZIO : 0,
    MNU_FIM: 1,
    MNU_DER : 2,
    MNU_01 : 3,
    MNU_02 : 4,
    MNU_04 : 5,
    MNU_03 : 6,
    SUB_MNU_OPC2_CVC : 7,
    SUB_MNU_OPC3_CVC : 8,
    SUB_MNU_OPC4_2_CVC : 9,
    SUB_MNU_OPC6_CVC : 10,
    MNU_N2 : 11,
    SUBMNU_OP2 : 12,
    MenuConsignado : 13   
};

const ENUM_SERVICOS = {
    NO_SERVICO : 1,
	PROGFIDELDD : 2,
	OUTROCARTAO : 3,
	CADASTROSENHA : 4,
	MANUTENSENHA : 5,
	ALTERASENHA : 6,
	Saldo : 7,
	PAGTOCTAS : 8,
	Saque : 9,
	Limite : 10,
	PAGAMENTOFATURA : 11,
	DETALHAMENTOFATURA : 12,
	MELHORDIACOMPRA : 13,
	ENCERRA : 14,
	ATENDENTE : 15,
	DESBLOQUEIO : 16,
	DESCONTO_ANUIDADE : 17,
	CANCELAMENTO_CARTAO : 18,
	VENDA_SEGUROS_SEGUNDO_MENU : 19,
	VENDA_SEGUROS_APOS_DESBLOQUEIO : 20,
	PARCELAMENTO_DE_FATURA : 21,
	ACEITOU_ATUALIZACAO_CADASTRAL : 22,
	FATURA_PARCELADA : 23,
	TRANSFERE_LIMITE : 24,
	CANC_CARTAO_ANUIDADE : 25,
	OUTRAS_INFO : 26,
	ESQUECEU_SENHA_CHIP : 27,
	CADAST_SENHA_CHIP : 28,
	SOLICITA_NOVA_SENHA : 29,
	CARTAO_BLOQUEADO : 30,
	CONTESTACAO : 31,
	ANTECIPA_DESPESA_PARCELADA : 32,
	APLICATIVO_BBC : 33,
	EMISSAO_FATURA : 34
};

const eOrg = {
    OrgIbiCardMasterCeA : 11,
    OrgIbiCardVisaCeA : 13,
    OrgIbiCardMaster : 14,
    OrgIbiCardVisa : 15,
    OrgIbiCardSecured : 16,
    OrgDotzMaster : 17,
    OrgCenterLapaMaster : 20,
    OrgCenterLapaVisa : 21,
    OrgCenterLapaSecured : 22,
    OrgIbiFacil : 25,
    OrgMafreMaster : 26,
    OrgMafreVisa : 27,
    OrgIguatemi : 28,
    OrgColombo : 30,
    OrgEskala : 33,
    OrgShopTatuape : 34,
    OrgMateus : 38,
    OrgExpressmaster : 40,
    OrgLebisCuit : 44,
    OrgBaklizi : 45,
    OrgMakro : 46,
    OrgDorinhos : 48,
    OrgModelo : 49,
    OrgAngeloniStandard : 52,
    OrgAngeloniMaster : 53,
    OrgAngeloniVisa : 55,
    OrgLojasREDE : 57,
    OrgPagueMenos : 59,
    OrgJeansStandard : 61,
    OrgJeansStandard2 : 62,
    OrgJeansMaster : 63,
    OrgJeansVisa : 64,
    OrgJeansSecured : 65,
    OrgElo : 510 
};

const EEventosConsulta = {
	EVT_C_2001 : 2001,
	EVT_C_2002 : 2002,
	EVT_C_2003 : 2003,
	EVT_C_2004 : 2004,
	EVT_C_2005 : 2005,
	EVT_C_2006 : 2006,
	EVT_C_2007 : 2007,
	EVT_C_2008 : 2008,
	EVT_C_2009 : 2009,
	EVT_C_2010 : 2010,
	EVT_C_2011 : 2011,
	EVT_C_2012 : 2012,
	EVT_C_2013 : 2013,
	EVT_C_2014 : 2014,
	EVT_C_2015 : 2015,
	EVT_C_2016 : 2016,
	EVT_C_2017 : 2017,
	EVT_C_2018 : 2018,
	EVT_C_2019 : 2019,
	EVT_C_2020 : 2020,
	EVT_C_2021 : 2021,
	EVT_C_2022 : 2022,
	EVT_C_2023 : 2023,
	EVT_C_2024 : 2024,
	EVT_C_2025 : 2025,
	EVT_C_2026 : 2026,
	EVT_C_2027 : 2027,
	EVT_C_2028 : 2028,
	EVT_C_2029 : 2029,
	EVT_C_2030 : 2030,
	EVT_C_2031 : 2031,
	EVT_C_2032 : 2032,
	EVT_C_2033 : 2033,
	EVT_C_2034 : 2034,
	EVT_C_2035 : 2035,
	EVT_C_2036 : 2036,
	EVT_C_2037 : 2037,
	EVT_C_2038 : 2038,
	EVT_C_2039 : 2039,
	EVT_C_2040 : 2040,
	EVT_C_2041 : 2041,
	EVT_C_2042 : 2042,
	EVT_C_2043 : 2043,
	EVT_C_2044 : 2044,
	EVT_C_2045 : 2045,
	EVT_C_2046 : 2046,
	EVT_C_2047 : 2047,
	EVT_C_2048 : 2048,
	EVT_C_2049 : 2049,
	EVT_C_2050 : 2050,
	EVT_C_2051 : 2051,
	EVT_C_2052 : 2052,
	EVT_C_2053 : 2053,
	EVT_C_2054 : 2054,
	EVT_C_2055 : 2055,
	EVT_C_2056 : 2056,
	EVT_C_2057 : 2057,
	EVT_C_2058 : 2058,
	EVT_C_2059 : 2059,
	EVT_C_2060 : 2060,
	EVT_C_2061 : 2061,
	EVT_C_2062 : 2062,
	EVT_C_2063 : 2063,
	EVT_C_2064 : 2064,
	EVT_C_2065 : 2065,
	EVT_C_2066 : 2066,
	EVT_C_2067 : 2067,
	EVT_C_2068 : 2068,
	EVT_C_2069 : 2069,
	EVT_C_2070 : 2070,
	EVT_C_2071 : 2071,
	EVT_C_2072 : 2072,
	EVT_C_2073 : 2073,
	EVT_C_2074 : 2074,
	EVT_C_2075 : 2075,
	EVT_C_2076 : 2076,
	EVT_C_2077 : 2077,
	EVT_C_2078 : 2078,
	EVT_C_2079 : 2079,
	EVT_C_2080 : 2080,
	EVT_C_2081 : 2081,
	EVT_C_2082 : 2082,
	EVT_C_2083 : 2083,
	EVT_C_2084 : 2084,
	EVT_C_2085 : 2085,
	EVT_C_2086 : 2086,
	EVT_C_2087 : 2087,
	EVT_C_2088 : 2088,
	EVT_C_2089 : 2089,
	EVT_C_2090 : 2090,
	EVT_C_2091 : 2091,
	EVT_C_2092 : 2092,
	EVT_C_2093 : 2093,
	EVT_C_2094 : 2094,
	EVT_C_2095 : 2095,
	EVT_C_2096 : 2096,
	EVT_C_2097 : 2097,
	EVT_C_2098 : 2098,
	EVT_C_2099 : 2099,
	EVT_C_2100 : 2100,
	EVT_C_2101 : 2101,
	EVT_C_2102 : 2102,
	EVT_C_2103 : 2103,
	EVT_C_2104 : 2104,
	EVT_C_2105 : 2105,
	EVT_C_2106 : 2106,
	EVT_C_2107 : 2107,
	EVT_C_2108 : 2108,
	EVT_C_2109 : 2109,
	EVT_C_2110 : 2110,
	EVT_C_2111 : 2111,
	EVT_C_2112 : 2112,
	EVT_C_2113 : 2113,
	EVT_C_2114 : 2114,
	EVT_C_2115 : 2115,
	EVT_C_2116 : 2116,
	EVT_C_2117 : 2117,
	EVT_C_2118 : 2118,
	EVT_C_2119 : 2119,
	EVT_C_2120 : 2120,
	EVT_C_2121 : 2121,
	EVT_C_2122 : 2122,
	EVT_C_2123 : 2123,
	EVT_C_2124 : 2124,
	EVT_C_2125 : 2125,
	EVT_C_2126 : 2126,
	EVT_C_2127 : 2127,
	EVT_C_2128 : 2128,
	EVT_C_2129 : 2129,
	EVT_C_2130 : 2130,
	EVT_C_2131 : 2131,
	EVT_C_2132 : 2132,
	EVT_C_2133 : 2133,
	EVT_C_2134 : 2134,
	EVT_C_2135 : 2135,
	EVT_C_2136 : 2136,
	EVT_C_2137 : 2137,
	EVT_C_2138 : 2138,
	EVT_C_2139 : 2139,
	EVT_C_2140 : 2140,
	EVT_C_2141 : 2141,
	EVT_C_2142 : 2142,
	EVT_C_2143 : 2143,
	EVT_C_2144 : 2144,
	EVT_C_2145 : 2145,
	EVT_C_2146 : 2146,
	EVT_C_2147 : 2147,
	EVT_C_2148 : 2148,
	EVT_C_2149 : 2149,
	EVT_C_2150 : 2150,
	EVT_C_2151 : 2151,
	EVT_C_2152 : 2152,
	EVT_C_2153 : 2153,
	EVT_C_2154 : 2154,
	EVT_C_2155 : 2155,
	EVT_C_2156 : 2156,
	EVT_C_2157 : 2157,
	EVT_C_2158 : 2158,
	EVT_C_2159 : 2159,
	EVT_C_2160 : 2160,
	EVT_C_2161 : 2161,
	EVT_C_2162 : 2162,
	EVT_C_2163 : 2163,
	EVT_C_2164 : 2164,
	EVT_C_2165 : 2165,
	EVT_C_2166 : 2166,
	EVT_C_2167 : 2167,
	EVT_C_2168 : 2168,
	EVT_C_2169 : 2169,
	EVT_C_2170 : 2170,
	EVT_C_2171 : 2171,
	EVT_C_2172 : 2172,
	EVT_C_2173 : 2173,
	EVT_C_2174 : 2174,
	EVT_C_2175 : 2175,
	EVT_C_2176 : 2176,
	EVT_C_2177 : 2177,
	EVT_C_2178 : 2178,
	EVT_C_2179 : 2179,
	EVT_C_2180 : 2180,
	EVT_C_2181 : 2181,
	EVT_C_2182 : 2182,
	EVT_C_2183 : 2183,
	EVT_C_2184 : 2184,
	EVT_C_2185 : 2185,
	EVT_C_2186 : 2186,
	EVT_C_2187 : 2187,
	EVT_C_2188 : 2188,
	EVT_C_2189 : 2189,
	EVT_C_2190 : 2190,
	EVT_C_2191 : 2191,
	EVT_C_2192 : 2192,
	EVT_C_2193 : 2193,
	EVT_C_2194 : 2194,
	EVT_C_2195 : 2195,
	EVT_C_2196 : 2196,
	EVT_C_2197 : 2197,
	EVT_C_2198 : 2198,
	EVT_C_2199 : 2199,
	EVT_C_2200 : 2200,
	EVT_C_2201 : 2201,
	EVT_C_2202 : 2202,
	EVT_C_2203 : 2203,
	EVT_C_2204 : 2204,
	EVT_C_2205 : 2205,
	EVT_C_2206 : 2206,
	EVT_C_2207 : 2207,
	EVT_C_2208 : 2208,
	EVT_C_2209 : 2209,
	EVT_C_2210 : 2210,
	EVT_C_2211 : 2211,
	EVT_C_2212 : 2212,
	EVT_C_2213 : 2213,
	EVT_C_2214 : 2214,
	EVT_C_2215 : 2215,
	EVT_C_2216 : 2216,
	EVT_C_2217 : 2217,
	EVT_C_2218 : 2218,
	EVT_C_2219 : 2219,
	EVT_C_2220 : 2220,
	EVT_C_2221 : 2221,
	EVT_C_2222 : 2222,
	EVT_C_2223 : 2223,
	EVT_C_2224 : 2224,
	EVT_C_2225 : 2225,
	EVT_C_2226 : 2226,
	EVT_C_2227 : 2227,
	EVT_C_2228 : 2228,
	EVT_C_2229 : 2229,
	EVT_C_2230 : 2230,
	EVT_C_2231 : 2231,
	EVT_C_2232 : 2232,
	EVT_C_2233 : 2233,
	EVT_C_2234 : 2234,
	EVT_C_2235 : 2235,
	EVT_C_2236 : 2236,
	EVT_C_2237 : 2237,
	EVT_C_2238 : 2238,
	EVT_C_2239 : 2239,
	EVT_C_2240 : 2240,
	EVT_C_2241 : 2241,
	EVT_C_2242 : 2242,
	EVT_C_2243 : 2243,
	EVT_C_2244 : 2244,
	EVT_C_2245 : 2245,
	EVT_C_2246 : 2246,
	EVT_C_2247 : 2247,
	EVT_C_2248 : 2248,
	EVT_C_2249 : 2249,
	EVT_C_2250 : 2250,
	EVT_C_2251 : 2251,
	EVT_C_2254 : 2254,
	EVT_C_2255 : 2255,
	EVT_C_2256 : 2256,
	EVT_C_2257 : 2257,
	EVT_C_2258 : 2258,
	EVT_C_2259 : 2259,
	EVT_C_2260 : 2260,
	EVT_C_2261 : 2261,
	EVT_C_2262 : 2262,
	EVT_C_2263 : 2263,
	EVT_C_2264 : 2264,
	EVT_C_2265 : 2265,
	EVT_C_2266 : 2266,
	EVT_C_2267 : 2267,
	EVT_C_2268 : 2268,
	EVT_C_2269 : 2269,
	EVT_C_2270 : 2270,
	EVT_C_2271 : 2271,
	EVT_C_2272 : 2272,
	EVT_C_2273 : 2273,
	EVT_C_2274 : 2274,
	EVT_C_2275 : 2275,
	EVT_C_2276 : 2276,
	EVT_C_2277 : 2277,
	EVT_C_2278 : 2278,
	EVT_C_2279 : 2279,
	EVT_C_2280 : 2280,
	EVT_C_2281 : 2281,
	EVT_C_2282 : 2282,
	EVT_C_2283 : 2283,
	EVT_C_2284 : 2284,
	EVT_C_2285 : 2285,
	EVT_C_2286 : 2286,
	EVT_C_2287 : 2287,
	EVT_C_2288 : 2288,
	EVT_C_2289 : 2289,
	EVT_C_2290 : 2290,
	EVT_C_2291 : 2291,
	EVT_C_2292 : 2292,
	EVT_C_2293 : 2293,
	EVT_C_2294 : 2294,
	EVT_C_2295 : 2295,
	EVT_C_2296 : 2296,
	EVT_C_2297 : 2297,
	EVT_C_2298 : 2298,
	EVT_C_2299 : 2299,
	EVT_C_2300 : 2300,
	EVT_C_2301 : 2301,
	EVT_C_2302 : 2302,
	EVT_C_2303 : 2303	
};

const EEventosRetencao = {
	EVT_R_1001 : 1001,
	EVT_R_1002 : 1002,
	EVT_R_1003 : 1003,
	EVT_R_1004 : 1004,
	EVT_R_1005 : 1005,
	EVT_R_1006 : 1006,
	EVT_R_1007 : 1007,
	EVT_R_1008 : 1008,
	EVT_R_1009 : 1009,
	EVT_R_1010 : 1010,
	EVT_R_1011 : 1011,
	EVT_R_1012 : 1012,
	EVT_R_1013 : 1013,
	EVT_R_1014 : 1014,
	EVT_R_1015 : 1015,
	EVT_R_1016 : 1016,
	EVT_R_1017 : 1017,
	EVT_R_1018 : 1018,
	EVT_R_1019 : 1019,
	EVT_R_1020 : 1020,
	EVT_R_1021 : 1021,
	EVT_R_1022 : 1022,
	EVT_R_1023 : 1023,
	EVT_R_1024 : 1024,
	EVT_R_1025 : 1025,
	EVT_R_1026 : 1026,
	EVT_R_1027 : 1027,
	EVT_R_1028 : 1028,
	EVT_R_1029 : 1029,
	EVT_R_1030 : 1030,
	EVT_R_1031 : 1031,
	EVT_R_1032 : 1032,
	EVT_R_1033 : 1033,
	EVT_R_1034 : 1034,
	EVT_R_1035 : 1035,
	EVT_R_1036 : 1036,
	EVT_R_1037 : 1037,
	EVT_R_1038 : 1038,
	EVT_R_1039 : 1039,
	EVT_R_1040 : 1040,
	EVT_R_1041 : 1041,
	EVT_R_1042 : 1042,
	EVT_R_1043 : 1043,
	EVT_R_1044 : 1044,
	EVT_R_1045 : 1045,
	EVT_R_1046 : 1046,
	EVT_R_1047 : 1047,
	EVT_R_1048 : 1048,
	EVT_R_1049 : 1049,
	EVT_R_1050 : 1050,
	EVT_R_1051 : 1051,
	EVT_R_1052 : 1052,
	EVT_R_1053 : 1053,
	EVT_R_1054 : 1054,
	EVT_R_1055 : 1055,
	EVT_R_1056 : 1056,
	EVT_R_1057 : 1057,
	EVT_R_1058 : 1058,
	EVT_R_1059 : 1059,
	EVT_R_1060 : 1060,
	EVT_R_1061 : 1061,
	EVT_R_1062 : 1062,
	EVT_R_1063 : 1063,
	EVT_R_1064 : 1064,
	EVT_R_1065 : 1065,
	EVT_R_1066 : 1066,
	EVT_R_1067 : 1067,
	EVT_R_1068 : 1068,
	EVT_R_1069 : 1069,
	EVT_R_1070 : 1070,
	EVT_R_1071 : 1071,
	EVT_R_1072 : 1072,
	EVT_R_1073 : 1073,
	EVT_R_1074 : 1074,
	EVT_R_1075 : 1075,
	EVT_R_1076 : 1076,
	EVT_R_1077 : 1077,
	EVT_R_1078 : 1078,
	EVT_R_1079 : 1079,
	EVT_R_1080 : 1080,
	EVT_R_1081 : 1081,
	EVT_R_1082 : 1082,
	EVT_R_1083 : 1083,
	EVT_R_1084 : 1084,
	EVT_R_1085 : 1085,
	EVT_R_1086 : 1086,
	EVT_R_1087 : 1087,
	EVT_R_1088 : 1088,
	EVT_R_1089 : 1089,
	EVT_R_1090 : 1090,
	EVT_R_1091 : 1091,
	EVT_R_1092 : 1092,
	EVT_R_1093 : 1093,
	EVT_R_1094 : 1094,
	EVT_R_1095 : 1095,
	EVT_R_1096 : 1096,
	EVT_R_1097 : 1097,
	EVT_R_1098 : 1098,
	EVT_R_1099 : 1099,
	EVT_R_1100 : 1100,
	EVT_R_1101 : 1101,
	EVT_R_1102 : 1102,
	EVT_R_1103 : 1103,
	EVT_R_1104 : 1104,
	EVT_R_1105 : 1105,
	EVT_R_1106 : 1106,
	EVT_R_1107 : 1107,
	EVT_R_1108 : 1108,
	EVT_R_1109 : 1109,
	EVT_R_1110 : 1110,
	EVT_R_1111 : 1111,
	EVT_R_1112 : 1112,
	EVT_R_1113 : 1113,
	EVT_R_1114 : 1114,
	EVT_R_1115 : 1115,
	EVT_R_1116 : 1116,
	EVT_R_1117 : 1117,
	EVT_R_1118 : 1118,
	EVT_R_1119 : 1119,
	EVT_R_1120 : 1120,
	EVT_R_1121 : 1121,
	EVT_R_1122 : 1122,
	EVT_R_1123 : 1123,
	EVT_R_1124 : 1124,
	EVT_R_1125 : 1125,
	EVT_R_1126 : 1126,
	EVT_R_1127 : 1127,
	EVT_R_1128 : 1128,
	EVT_R_1129 : 1129,
	EVT_R_1130 : 1130,
	EVT_R_1131 : 1131,
	EVT_R_1132 : 1132,
	EVT_R_1133 : 1133,
	EVT_R_1134 : 1134,
	EVT_R_1135 : 1135,
	EVT_R_1136 : 1136,
	EVT_R_1137 : 1137,
	EVT_R_1138 : 1138,
	EVT_R_1139 : 1139,
	EVT_R_1140 : 1140,
	EVT_R_1141 : 1141,
	EVT_R_1142 : 1142,
	EVT_R_1143 : 1143,
	EVT_R_1144 : 1144,
	EVT_R_1145 : 1145,
	EVT_R_1146 : 1146,
	EVT_R_1147 : 1147,
	EVT_R_1148 : 1148,
	EVT_R_1149 : 1149,
	EVT_R_1150 : 1150,
	EVT_R_1151 : 1151,
	EVT_R_1152 : 1152,
	EVT_R_1153 : 1153,
	EVT_R_1154 : 1154,
	EVT_R_1155 : 1155,
	EVT_R_1156 : 1156,
	EVT_R_1157 : 1157,
	EVT_R_1158 : 1158,
	EVT_R_1160 : 1160,
	EVT_R_1161 : 1161,
	EVT_R_1162 : 1162,
	EVT_R_1163 : 1163,
	EVT_R_1164 : 1164,
	EVT_R_1165 : 1165,
	EVT_R_1166 : 1166,
	EVT_R_1167 : 1167,
	EVT_R_1168 : 1168,
	EVT_R_1169 : 1169,
	EVT_R_1170 : 1170,
	EVT_R_1171 : 1171,
	EVT_R_1172 : 1172,
	EVT_R_1173 : 1173,
	EVT_R_1174 : 1174,
	EVT_R_1175 : 1175,
	EVT_R_1176 : 1176,
	EVT_R_1177 : 1177,
	EVT_R_1178 : 1178,
	EVT_R_1179 : 1179,
	EVT_R_1180 : 1180,
	EVT_R_1181 : 1181,
	EVT_R_1182 : 1182,
	EVT_R_1183 : 1183,
	EVT_R_1184 : 1184,
	EVT_R_1185 : 1185,
	EVT_R_1186 : 1186,
	EVT_R_1187 : 1187,
	EVT_R_1195 : 1195,
	EVT_R_1196 : 1196,
	EVT_R_1197 : 1197,
	EVT_R_1198 : 1198,
	EVT_R_1199 : 1199,
	EVT_R_1200 : 1200,
	EVT_R_1201 : 1201,
	EVT_R_1202 : 1202,
	EVT_R_1203 : 1203,
	EVT_R_1204 : 1204,
	EVT_R_1205 : 1205,
	EVT_R_1206 : 1206,
	EVT_R_1207 : 1207,
	EVT_R_1208 : 1208,
	EVT_R_1209 : 1209,
	EVT_R_1210 : 1210,
	EVT_R_1211 : 1211,
	EVT_R_1212 : 1212,
	EVT_R_1213 : 1213,
	EVT_R_1214 : 1214,
	EVT_R_1215 : 1215,
	EVT_R_1216 : 1216,
	EVT_R_1217 : 1217,
	EVT_R_1218 : 1218,
	EVT_R_1219 : 1219,
	EVT_R_1220 : 1220	
};

const EEventosDerivacao = {
	EVT_D_3001 : 3001,
	EVT_D_3002 : 3002,
	EVT_D_3003 : 3003,
	EVT_D_3004 : 3004,
	EVT_D_3005 : 3005,
	EVT_D_3006 : 3006,
	EVT_D_3007 : 3007,
	EVT_D_3008 : 3008,
	EVT_D_3009 : 3009,
	EVT_D_3010 : 3010,
	EVT_D_3011 : 3011,
	EVT_D_3012 : 3012,
	EVT_D_3013 : 3013,
	EVT_D_3014 : 3014,
	EVT_D_3015 : 3015,
	EVT_D_3016 : 3016,
	EVT_D_3017 : 3017,
	EVT_D_3018 : 3018,
	EVT_D_3019 : 3019,
	EVT_D_3020 : 3020,
	EVT_D_3021 : 3021,
	EVT_D_3022 : 3022,
	EVT_D_3023 : 3023,
	EVT_D_3024 : 3024,
	EVT_D_3025 : 3025,
	EVT_D_3026 : 3026,
	EVT_D_3027 : 3027,
	EVT_D_3028 : 3028,
	EVT_D_3029 : 3029,
	EVT_D_3030 : 3030,
	EVT_D_3031 : 3031,
	EVT_D_3032 : 3032,
	EVT_D_3033 : 3033,
	EVT_D_3034 : 3034,
	EVT_D_3035 : 3035,
	EVT_D_3036 : 3036,
	EVT_D_3037 : 3037,
	EVT_D_3038 : 3038,
	EVT_D_3039 : 3039,
	EVT_D_3040 : 3040,
	EVT_D_3041 : 3041,
	EVT_D_3042 : 3042,
	EVT_D_3043 : 3043,
	EVT_D_3044 : 3044,
	EVT_D_3045 : 3045,
	EVT_D_3046 : 3046,
	EVT_D_3047 : 3047,
	EVT_D_3048 : 3048,
	EVT_D_3049 : 3049,
	EVT_D_3050 : 3050,
	EVT_D_3051 : 3051,
	EVT_D_3052 : 3052,
	EVT_D_3053 : 3053,
	EVT_D_3054 : 3054,
	EVT_D_3055 : 3055,
	EVT_D_3056 : 3056,
	EVT_D_3057 : 3057,
	EVT_D_3058 : 3058,
	EVT_D_3059 : 3059,
	EVT_D_3060 : 3060,
	EVT_D_3061 : 3061,
	EVT_D_3062 : 3062,
	EVT_D_3063 : 3063,
	EVT_D_3064 : 3064,
	EVT_D_3065 : 3065,
	EVT_D_3066 : 3066,
	EVT_D_3067 : 3067,
	EVT_D_3068 : 3068,
	EVT_D_3069 : 3069,
	EVT_D_3070 : 3070,
	EVT_D_3071 : 3071,
	EVT_D_3072 : 3072,
	EVT_D_3073 : 3073,
	EVT_D_3074 : 3074,
	EVT_D_3075 : 3075,
	EVT_D_3076 : 3076,
	EVT_D_3077 : 3077,
	EVT_D_3078 : 3078,
	EVT_D_3079 : 3079,
	EVT_D_3080 : 3080,
	EVT_D_3081 : 3081,
	EVT_D_3082 : 3082,
	EVT_D_3083 : 3083,
	EVT_D_3084 : 3084,
	EVT_D_3085 : 3085,
	EVT_D_3086 : 3086,
	EVT_D_3087 : 3087,
	EVT_D_3088 : 3088,
	EVT_D_3089 : 3089,
	EVT_D_3090 : 3090,
	EVT_D_3091 : 3091,
	EVT_D_3092 : 3092,
	EVT_D_3093 : 3093
};

const EnumPontoDerivacao = {
	PD_NENHUM : 0,
	PD_PERDA_ROUBO : 1,
	PD_PERDA_ROUBO_ATENDIMENTO : 2,
	PD_PERDA_ROUBO_REEMISSAO : 3,
	PD_FRAUDE : 4,
	PD_PROPOSTA : 5,
	PD_NC : 6,
	PD_CORPORATE : 7,
	PD_PREVENTIVO : 8,
	PD_DESBLOQUEIO : 9,
	PD_DESBLOQUEIO_CARTASIMPLES : 10,
	PD_DESBLOQUEIO_CARTASIMPLES_DETECCAO : 11,
	PD_DESBLOQUEIO_VENDAS : 12,
	PD_APLICATIVO_BBC : 13,
	PD_REEMISSAO_SENHA : 14,
	PD_CAC : 15,
	PD_CAC_QHOST : 16,
	PD_LIMITE : 17,
	PD_FATURA_DETALHADA : 18,
	PD_CODIGO_BARRAS : 19,
	PD_ENVIO_SMS : 20,
	PD_FATURA_EMAIL : 21,
	PD_CANCELAMENTO_SEGUROS : 22,
	PD_RETENCAO_SEGUROS : 23,
	PD_BUNKER : 24,
	PD_RETENCAO_CANCELAMENTO : 25,
	PD_CANCELAMENTO_CARTAO : 26,
	PD_CONTESTACAO : 27,
	PD_SENHA_CARTAO : 28,
	PD_HOTLINE_MAKRO_CANCELAMENTO : 29,
	PD_HOTLINE_MAKRO_COBRANCA : 30,
	PD_HOTLINE_VENDAS_SAQUE : 31,
	PD_HOTLINE_VENDAS_PARCELAMENTO : 32,
	PD_VENDAS_LIMITE_EMERGENCIAL : 33,
	PD_CANCELA_LIMITE_EMERGENCIAL : 34,
	PD_VENDAS_PARCELAMENTO : 35,
	PD_INFO_PARCELAMENTO : 36,
	PD_VENDAS_SAQUE : 37,
	PD_INFO_SAQUE : 38,
	PD_SOLICITAR_SEGURO_PROTECAO : 39,
	PD_COBERTURA_SEGUROS : 40,
	PD_VENDAS_ODONTO : 41,
	PD_VENDAS_CARTAO_ADICIONAL : 42,
	PD_CANCELAMENTO_CARTAO_ADICIONAL : 43,
	PD_AUMENTO_LIMITE : 44,
	PD_DESPESA_NEGADA : 45,
	PD_APPIB_RESET : 46,
	PD_APPIB_DESBLOQ : 47,
	PD_APPIB_INFO : 48,
	PD_SERVICE_DESK : 49,
	PD_PROCON : 50,
	PD_EMPRESTIMO_IBI_FOLHA : 51,
	PD_EMPRESTIMO_BRAD_IBICARD : 52,
	PD_ATENDIMENTO_MAKRO_E_DEMAIS : 53,
	PD_CENTRAL_DESBLOQ_BRAD_VENDA_SEGUROS : 54,
	PD_TESTE_DERIVACAO : 55,
	PD_SERVICE_DESK_0800 : 56,
	PD_RENDA_HOSPITALAR : 57,
	PD_IBI_ODONTO : 58,
	PD_IBI_CAPITALIZACAO : 59,
	PD_CARTAO_IBICARD : 60,
	PD_EMPRESAS_PARCEIRAS : 61,
	PD_DEMAIS_SERVICOS : 62,
	PD_EMPRESTIMO_INSS_CBSS : 63,
	PD_EMPRESTIMO_INSS_BRADESCARD : 64,
	PD_CAMP_SAQUE : 65,
	PD_SUPER_CREDITO_CBSS : 66,
	PD_SUPER_CREDITO_BRADESCARD : 67,
	PD_PRO_SEGUROS : 68	
};

const EnumAtendimento = {
	ATD_NENHUM : 0,
	ATD_PL : 1,
	ATD_MAKRO : 2,
	ATD_HOTLINE_MAKRO : 3,
	ATD_DOTZ : 4,
	ATD_ANGELONI : 5,
	ATD_ESKALA : 6,
	ATD_MATEUS_CARD : 7,
	ATD_ELO_CARD : 8,
	ATD_ELO_CONSIGNADO : 9,
	ATD_PAGUE_MENOS : 10,
	ATD_TNG : 11,
	ATD_CVC : 12,
	ATD_IBICARD : 13,
	ATD_HOT_LINE_CEA : 14,
	ATD_DEFAULT_7332 : 15,
	ATD_IBICRED : 16,
	ATD_CAMP_SAQUE : 17,
};

const EnumTipoCartao = {
	TIPO_CARTAO_NENHUM : 0,
    TIPO_CARTAO_ADICIONAL : 1,
    TIPO_CARTAO_TITULAR : 2
};

const EnumBINCartao = {
	BIN_NENHUM : 0,
    BIN_COMPER: 1,
    BIN_COOP: 2,
    BIN_LUIGI : 3
};

//MÉTODOS
String.prototype.replaceAll = function (strOld, strNew) { return this.split(strOld).join(strNew); }

Number.prototype.between = function (a, b) {
    a = parseInt(a);
    b = parseInt(b);

    var min = Math.min.apply(Math, [a, b]),
        max = Math.max.apply(Math, [a, b]);
    return this >= min && this <= max;
}


function iniciaVariaveis(dados) {

    dados['app'] = 'YUII';
    // var profile = getIVRProfile();
    // dados['profile'] = profile;
    // dados['ambiente'] = getAmbiente();
	dados['strAplNumeroB'] = AppState.DNIS; 
    dados['DDDNroA'] = AppState.ANI.substring(0,2); 
    //dados['DataHoraInicial'] = formataDataAtual("yyyyMMdd-hhmmss");
    //dados['eventoOrigem'] = '';
    //dados['navegacao'] = '';
    //dados['proxDiaUtil'] = '';
    //dados['numFax'] = '';
    //dados['numSMS'] = '';
    //dados['contadorHorarioOcupado'] = 0;
    dados['attach'] = {};   
    // Inicia Variaveis yup2 - Rodrigo 21-03-2022
    dados['iAplFechaOpcao0'] = false;
	dados['iAplFechaOpcao1'] = false;
	dados['iAplFechaOpcao2'] = false;
	dados['iAplFechaOpcao3'] = false;
	dados['iAplFechaOpcao4'] = false;
	dados['iAplFechaOpcao5'] = false;
	dados['iAplFechaOpcao6'] = false;
	dados['iAplFechaOpcao7'] = false;
	dados['iAplFechaOpcao8'] = false;
	dados['iAplFechaOpcao9'] = false;
    dados['iAplFechaOpcaoFatParcelada'] = false;  

    //Variaveis iniciadas Talker  

    dados['iAplFechaOpcao9'] = '';

    dados['sAplBINGoldCorporate'] = '';
    dados['sAplBINIbicredVision'] = '';
    dados['sAplBINIbicredTools'] = '';
    dados['sAplBINBonanza'] = '';
    dados['sAplBINArcoiris'] = '';
    dados['sAplBINRondelli'] = '';
    dados['sAplBINIguatemi'] = '';
    dados['sAplBINMAFRE'] = '';
    dados['sAplBINMAKRO'] = '';
    dados['sAplBINJEANS'] = '';
    dados['sAplBINCATTAN'] = '';
    dados['sAplBINCOLOMBO'] = '';
    dados['sAplBINAngeloni'] = '';

    dados['sAplBINMAKENJI'] = '';
    dados['sAplBINCANOAS'] = '';
    dados['sAplBINESKALA'] = '';
    dados['sAplBINBAKLIZI'] = '';
    dados['sAplBINModelo'] = '';
    dados['sAplBINMateus'] = '';
    dados['sAplBINShopTatuape'] = '';
    dados['sAplBINExpressMaster'] = '';
    dados['sAplBINElo'] = '';
    dados['sAplBINDorinhos'] = '';
    dados['sAplBINLeBiscuit'] = '';
    dados['sAplBINLojasRede'] = '';
    dados['sAplBINPagueMenos'] = '';
    dados['sAplBINDerivCartao'] = ''; 
    dados['sAplBINTNG'] = '';
    dados['sAplBINGUANABARA'] = '';
    dados['sAplBINTELERIO'] = '';
    dados['sAplBINBradescard'] = '';
    dados['sAplBINBradescardElo'] = '';
    dados['sAplBINPassarela'] = '';
    dados['sAplBINBistek'] = '';
    dados['sAplBINComper'] = '';
    dados['sAplBINLuigi'] = '';
    dados['sAplBINCoop'] = '';
    dados['sAplBINSportCard'] = '';
    dados['sAplBINLojasAmericanas'] = '';
    dados['sAplBINCeC'] = '';
    dados['sAplBINCarajas'] = '';
    dados['sAplBINFujioka'] = '';
    dados['sAplBINNossoLar'] = '';
    dados['sAplBINBradExpresso'] = '';
    dados['sAplBINCasasBahia'] = '';

    dados['AplFlagControlaDesbloqueio'] = 0;
    dados['bAplAtendimentoSecured'] = false;
    dados['bAplRetornoSiteCobr'] = false;
    dados['bAplTelefoneVermelho'] = false;
    dados['bAplCallBack'] = false;
    dados['bAplSegmentoLojaNaLista'] = false;
    dados['bAplAtivaRegrasTratamentoCartao'] = false;
    dados['bAplAtivaMSGTelefoneMudou'] = false;

    dados['bAplFlgFraseAtrasoPL'] = false;
    dados['bAplFlgAtivarFraudePreventivo'] = false;
    dados['bFechaVendasSaldo2Menu'] = false;
    dados['bFechaVendasLimite2Menu'] = false;

    dados['bFechaIBICREDSaldo'] = false;
    dados['bFechaIBICREDLimite'] = false;

    dados['sAplDataVencimentoPL'] = '';
    dados['sAplMesVencimentoPL'] = '';
    dados['sAplFlgAnoVencimento'] = ''; 
    dados['sAplDiaCarenciaPL'] = ''; 

    dados['iAplLimiteDerivSeg2Menu'] = 0;
    dados['iAplLimiteDerivCap2Menu'] = 0;
    dados['iAplLimiteDerivPro2Menu'] = 0;

    dados['bAplFlgFraseAtrasoDotzIbicard'] = false;
    dados['sAplFlgDataVencimentoDotzIbicard1'] = '';
    dados['sAplFlgMesVencimentoDotzIbicard'] = '';
    dados['sAplDiaCarenciaDotzIbicard'] = 0;
    dados['bAplFlgFraseAtrasoIbicard'] = false;
    dados['sAplFlgFraseAtrasoIbicard'] = '';
    dados['sAplMesVencimentoIbicard'] = '';
    dados['sAplDiaCarenciaIbicard'] = 0;
    dados['bAplFlgFraseAtrasoMafre'] = false;
    dados['bAplFlgFraseAtrasoCenterLapa'] = false;
    dados['bAplFlgFraseAtrasoIguatemi'] = false;
    dados['sAplVencimentoMafre'] = '';
    dados['sAplVencimentoCenterLapa'] = '';
    dados['sAplVencimentoIguatemi'] = '';
    dados['sAplMesVencimentoCenterLapa'] = '';
    dados['sAplMesVencimentoMafre'] = '';
    dados['sAplMesVencimentoIguatemi'] = '';
    dados['sAplDiaCarenciaCenterLapa'] = 0;
    dados['sAplDiaCarenciaMafre'] = 0;
    dados['sAplDiaCarenciaIguatemi'] = 0;
    dados['bAplFlgFraseAtrasoAngeloni'] = false;
    dados['sAplVencimentoAngeloni'] = '';
    dados['sAplMesVencimentoAngeloni'] = '';
    dados['sAplDiaCarenciaAngeloni'] = 0;
    dados['iAplFlgContLigacaoVdSeguro'] = 0;
    dados['iAplFlgContLigacaoVdTitulo'] = 0;
    dados['iAplFlgContLigacaoVdProtecao'] = 0;
    dados['bAplFlgFraseAtrasoJEANS'] = false;
    dados['sAplVencimentoJEANS'] = '';
    dados['sAplMesVencimentoJEANS'] = '';
    dados['sAplDiaCarenciaJEANS'] = 0;

    dados['iAplContLigacaoVdSeg2Menu'] = 0;
    dados['iAplContLigacaoVdCap2Menu'] = 0;
    dados['iAplContLigacaoVdPro2Menu'] = 0;

    dados['AplNumFluxos'] = 0;

    dados['iAplUltimoHostNSU'] = 0;

    dados['strAplNomeCICS'] = '';
    dados['strAplNomeCICS2'] = '';
    dados['sDerivIbicredCampanhaAtiva'] = ''; 
    dados['bFecharContigenciaQCTI'] = false;
    dados['bFecharStatusPropostaJEANS'] = false;

    dados['bFecharOpcao9Menu1Angeloni'] = false;
    dados['bFecharOpcao9Menu1JEANS'] = false;
    dados['bFecharOpcao9Menu1DOTz'] = false;
    dados['bFecharOpcao9Menu1Mafre'] = false;

    dados['iAplConsultaVisioTOOLs'] = 0;
    dados['bAplBinIbicredIsVisio'] = false;

    dados['sAplMSGEmergencia'] = '';
    dados['sAplOrgLogoMSGEmergencia'] = '';

    dados['pVlrLimDesbloq'] = '';
    dados['bHabNovoDesbloq'] = false;
   
    dados['bHabUnificacao'] = false;
    //dados['bHabOpcoesMenu1oNivel'] = false;
    dados['iRetry'] = 0;
    dados['eMotivoBloqueio'] = ''; 
    dados['sNumeroCartaoCPF'] = ''; 
    dados['sNumeroCartaoDesbloqueio'] = ''; 
    dados['sORGCartao'] = ''; 
    dados['sLogoCartao'] = ''; 
    dados['sListaCartoesValidosBloqueio'] = '';
    dados['iQtdListaCartoesValidosBloqueio'] = 0;
    dados['sListaCartõesAdicionais'] = '';
    dados['sListaCartõesTitulares'] = '';
    dados['iQtdListaCartoesValidosBloqueioAdicionais'] = 0;
    dados['iQtdListaCartoesValidosBloqueioTitulares'] = 0;
    dados['iIndiceCartaoBloqueio'] = 0;
    dados['sNumeroCPFCNPJ'] = '';
   
    dados['bExisteAproMais10D'] = false;
   
    dados['iTotalPropostasValidas'] = 0;
    dados['bJaVerbalizouMais1PropostaValida'] = false;
    dados['iTotalAprovadas'] = 0;
    dados['iTotalReprovadas'] = 0;
    dados['iTotalEmAnalise'] = 0;
   
    dados['iContador'] = 0;
    dados['iVezFala'] = 0;
    dados['RespostaRxProposta'] = '';
    dados['sBINCartao'] = ' '; 
    dados['AidClear'] = '';
    dados['bJaFalouFraseQQMomento'] = false;
    dados['bVeioFluxoDesbloqueio'] = false;
    dados['iQtdePerguntasFeitas'] = 0;
    dados['iQtdePerguntasOK'] = 0;
    dados['iQtdePerguntasOKAntes'] = 0;
    dados['iQtdePerguntasCadastrais'] = 0;
    dados['iQtdePerguntasComportamentais'] = 0;
    dados['iLimitePerguntasPID'] = 0;
    dados['iLimitePerguntasCadastrais'] = 0;
    dados['iLimitePerguntasComportamentais'] = 0;
    dados['iMaxPerguntasCadastrais'] = 0;
    dados['iMaxPerguntasComportamentais'] = 0;
    dados['sTelefoneCelularCadastrado'] = '';
    dados['sTelefoneCelularNovo'] = '';
    dados['sPIDAnterior'] = '';
    dados['sListaDadosPIDCadastral'] = '';
    dados['sListaDadosPIDComportamental'] = '';
    dados['bListaPIDCNPJ'] = false;
    dados['sFuncaoUR81'] = '';
    dados['sSenhaAtual'] = '';
    dados['sSenhaNova'] = ''; 
    dados['sSenhaAtualDigitada'] = '';
    dados['sSenhaNovaDigitada'] = '';
    dados['sFuncaoUR91'] = ''; 
    dados['HabFraseEmergencial'] = false;
    dados['FraseEmergencial'] = '';
    dados['HabPedeCPF'] = false;
    dados['FraseInformativa1'] = '';
    dados['FraseInformativa3'] = '';
    dados['FraseInformativa4'] = '';
    dados['FraseInformativa5'] = '';
    dados['FraseInformativa7'] = '';
    dados['FraseInformativa8'] = '';
    dados['HabOpContestaCadastro'] = false;
    dados['HabOpPlanoOdonto'] = false;
    dados['HabOpCartaoAdicional'] = false;
    dados['HabOpAlterEndereco'] = false;
    dados['HabOpDesbloqueioCartao'] = false;
    dados['HabOpSenhaCartaoCredito'] = false;
    dados['HabOpLimEmergSolicitar'] = false;
    dados['HabOpLimEmergCancelar'] = false;
    dados['HabOpCB_SMS'] = false;
    dados['HabOpFatura_Email'] = false;    
    dados['HabOpContestaCompraSaque'] = false;
    dados['HabOpProgramaFidelidade'] = false;
    dados['HabOpSeguro'] = false;
    dados['HabPID_Atendente'] = false;
    dados['HabPID_BBC'] = false;
    dados['HabPID_Desbloqueio'] = false;
    dados['HabPID_FatDetalhada'] = false;
    dados['HabPID_Limite'] = false;
    dados['HabPID_Cancelamento'] = false;
    dados['HabDerivaDesbVendas'] = false;
    dados['HabDerivaPosDesbloqueio'] = false;
    dados['PIDOk'] = false;
    dados['bSenhaCHIPOk'] = false;
    dados['ListaParceriasEncerradas'] = '';
    dados['ListaPIDCNPJ'] = '';
    dados['ListaDDDValidos'] = '';
    dados['strForcaTeste'] = '';
    dados['ListaParceriasSemFiltroVendas'] = '';
    dados['bOptouCodBarrasEmCartAtraso'] = false;
    dados['bVerbalizouFraseInfo1'] = false;
    dados['FlagEncapsulaDllCripto'] = false;
    dados['HabAutenticaSenhaChip'] = false;
    dados['PorcBalancAtd'] = '';
    dados['PorcBalancAtd_Ant'] = '';
    dados['PorcBalancParc'] = '';
    dados['PorcBalancParc_Ant'] = '';
    dados['PorcBalancSaq'] = '';
    dados['PorcBalancSaq_Ant'] = '';
    dados['PorcBalancCan'] = '';
    dados['PorcBalancCan_Ant'] = '';
    dados['BalanceaAtentoCallLinkCancela'] = false;
    dados['FraseInformativa2'] = '';
    dados['AtdClienteP2COP'] = false;
    dados['AtdClienteP2LUI'] = false;
    dados['AtdClienteP2CPE'] = false;
    dados['PorcBalancParcHot'] = '';
    dados['PorcBalancParcHot_Ant'] = '';
    dados['PorcBalancSaqHot'] = '';
    dados['PorcBalancSaqHot_Ant'] = '';
    dados['FraseAppPerdaRoubo'] = '';
    dados['FraseAppCodBarras'] = '';
    dados['FraseAppSaldo'] = '';
    dados['FraseAppLimites'] = '';
    dados['HabEncerrarAposRepSld'] = false;
    dados['HabOpRetMenuMPosLimite'] = false;
    dados['HabEncerrarAposRepFat'] = false;
    dados['HabEncerrarAposCB'] = false;
    dados['HabopLimPre'] = false;
    dados['bHabReestruturacaoVDNs'] = false;
    dados['sListaORGs_CAN'] = '';
    dados['sListaORGs_CEA'] = '';
    dados['sListaORGs_BCR'] = '';
    dados['sListaORGs_CBS'] = '';
    dados['sListaORGs_MKR'] = '';
    dados['sListaORGs_LSA'] = '';
    dados['sListaORGs_MAT'] = '';
    dados['sListaORGs_SDM'] = '';
    dados['sListaORGs_ANG'] = '';
    dados['sListaORGs_COP'] = '';
    dados['sListaORGs_LUI'] = '';
    dados['sListaORGs_CPE'] = '';
    dados['sListaORGs_CEC'] = '';
    dados['sListaORGs_CRJ'] = '';
    dados['sListaORGs_FJK'] = '';
    dados['sListaORGs_NLR'] = '';
    dados['sListaORGs_BEX'] = '';
    dados['sListaORGs_CAB'] = '';
   
    dados['sParamBalanceamentoVDN'] = '';
    dados['PorcVDN_ATENDENTE_SOLIC_Ant'] = '';
    dados['PorcVDN_PeR_GENERICO_Ant'] = '';
    dados['PorcVDN_PeR_FALAR_Ant'] = '';
    dados['PorcVDN_PeR_PERDA_REEMISSAO_Ant'] = '';
    dados['PorcVDN_PeR_ROUBO_REEMISSAO_Ant'] = '';
    dados['PorcVDN_FRAUDE_DERIVA_Ant'] = '';
    dados['PorcVDN_PROPOSTA_NRECEBCC_Ant'] = '';
    dados['PorcVDN_NAOCLIENTE_NQUERCC_Ant'] = '';
    dados['PorcVDN_CORPORATE_Ant'] = '';
    dados['PorcVDN_FRAUDE_PREVENTIVO_Ant'] = '';
    dados['PorcVDN_DESBLCC_SOLIC_Ant'] = '';
    dados['PorcVDN_DESBLCC_CARTASIMPLES_Ant'] = '';
    dados['PorcVDN_DESBLCC_CARTASIMPLESDETC_Ant'] = '';
    dados['PorcVDN_DESBLCC_VENDAS_Ant'] = '';
    dados['PorcVDN_APPIB_SOLIC_Ant'] = '';
    dados['PorcVDN_SENHA_2VIA_Ant'] = '';
    dados['PorcVDN_SISTFORA_QHOST_Ant'] = '';
    dados['PorcVDN_FATURA_CBARRA_Ant'] = '';
    dados['PorcVDN_FATURA_EMAIL_Ant'] = '';
    dados['PorcVDN_CANCPRD_PROTVIDA_Ant'] = '';
    dados['PorcVDN_CANCPRD_ODONOUTRS_Ant'] = '';
    dados['PorcVDN_ALTEND_SOLIC_Ant'] = '';
    dados['PorcVDN_CANCCC_DESINT_Ant'] = '';
    dados['PorcVDN_CANCCC_OUTRO_Ant'] = '';
    dados['PorcVDN_CONTESTA_SOLIC_Ant'] = '';
    dados['PorcVDN_HOTLINE_CANCELA_Ant'] = '';
    dados['PorcVDN_HOTLINE_COBRANCA_Ant'] = '';
    dados['PorcVDN_HOTLINE_SAQUE_Ant'] = '';
    dados['PorcVDN_HOTLINE_PARCELA_Ant'] = '';
    dados['PorcVDN_LIMITE_SOLIC_Ant'] = '';
    dados['PorcVDN_LIMITE_CANC_Ant'] = '';
    dados['PorcVDN_PARCELA_SOLIC_Ant'] = '';
    dados['PorcVDN_PARCELA_MODIF_Ant'] = '';
    dados['PorcVDN_SAQUE_SOLIC_Ant'] = '';
    dados['PorcVDN_SAQUE_INFO_Ant'] = '';
    dados['PorcVDN_SEGURO_SOLIC_Ant'] = '';
    dados['PorcVDN_SEGURO_ACAO_Ant'] = '';
    dados['PorcVDN_ODONTO_SOLIC_Ant'] = '';
    dados['PorcVDN_ADICIO_SOLIC_Ant'] = '';
    dados['PorcVDN_ATENDENTE_VENDA_Ant'] = '';
    dados['PorcVDN_CANCPRD_ADICIO_Ant'] = '';
    dados['PorcVDN_LIMITE_AGTVIRT_Ant'] = '';
    dados['PorcVDN_DESPESA_NEGADA_Ant'] = '';
    dados['PorcVDN_APPIB_RESET_Ant'] = '';
    dados['PorcVDN_APPIB_DESBLQ_Ant'] = '';
    dados['PorcVDN_APPIB_INFO_Ant'] = '';
    dados['PorcVDN_SERVICE_DESK_Ant'] = '';
    dados['PorcVDN_D_PROCON_Ant'] = '';
    dados['PorcVDN_D_EMPREST_IBIFOLHA_Ant'] = '';
    dados['PorcVDN_D_EMPREST_BRAD_IBICARD_Ant'] = '';
    dados['PorcVDN_D_MAKRO_DEMAIS_Ant'] = '';
    dados['PorcVDN_D_DESB_BRAD_VENDA_SEG_Ant'] = '';
    dados['PorcVDN_TESTE_DERIVA_Ant'] = '';
    dados['PorcVDN_D_RENDA_HOSPITALAR_Ant'] = '';
    dados['PorcVDN_D_IBI_ODONTO_Ant'] = '';
    dados['PorcVDN_D_IBI_CAPITALIZACAO_Ant'] = '';
    dados['PorcVDN_D_CARTAO_IBICARD_Ant'] = '';
    dados['PorcVDN_D_EMPRESAS_PARCEIRAS_Ant'] = '';
    dados['PorcVDN_D_DEMAIS_SERVICOS_Ant'] = '';
    dados['PorcVDN_D_EMPREST_INSS_CBSS_Ant'] = '';
    dados['PorcVDN_D_EMPREST_INSS_BRADESCARD_Ant'] = '';
    dados['PorcVDN_D_SUPER_CREDITO_CBSS_Ant'] = '';
    dados['PorcVDN_D_SUPER_CREDITO_BRADESCARD_Ant'] = '';
    dados['PorcVDN_D_PRO_SEGUROS_Ant'] = '';
    dados['PorcVDN_CAMP_SAQUE_Ant'] = '';
    dados['PorcVDN_ATENDENTE_SOLIC'] = '';
    dados['PorcVDN_PeR_GENERICO'] = '';
    dados['PorcVDN_PeR_FALAR'] = '';
    dados['PorcVDN_PeR_PERDA_REEMISSAO'] = '';
    dados['PorcVDN_PeR_ROUBO_REEMISSAO'] = '';
    dados['PorcVDN_FRAUDE_DERIVA'] = '';
    dados['PorcVDN_PROPOSTA_NRECEBCC'] = '';
    dados['PorcVDN_NAOCLIENTE_NQUERCC'] = '';
    dados['PorcVDN_CORPORATE'] = '';
    dados['PorcVDN_FRAUDE_PREVENTIVO'] = '';
    dados['PorcVDN_DESBLCC_SOLIC'] = '';
    dados['PorcVDN_DESBLCC_CARTASIMPLES'] = '';
    dados['PorcVDN_DESBLCC_CARTASIMPLESDETC'] = '';
    dados['PorcVDN_DESBLCC_VENDAS'] = '';
    dados['PorcVDN_APPIB_SOLIC'] = '';
    dados['PorcVDN_SENHA_2VIA'] = '';
    dados['PorcVDN_SISTFORA_QHOST'] = '';
    dados['PorcVDN_FATURA_CBARRA'] = '';
    dados['PorcVDN_FATURA_EMAIL'] = '';
    dados['PorcVDN_CANCPRD_PROTVIDA'] = '';
    dados['PorcVDN_CANCPRD_ODONOUTRS'] = '';
    dados['PorcVDN_ALTEND_SOLIC'] = '';
    dados['PorcVDN_CANCCC_DESINT'] = '';
    dados['PorcVDN_CANCCC_OUTRO'] = '';
    dados['PorcVDN_CONTESTA_SOLIC'] = '';
    dados['PorcVDN_HOTLINE_CANCELA'] = '';
    dados['PorcVDN_HOTLINE_COBRANCA'] = '';
    dados['PorcVDN_HOTLINE_SAQUE'] = '';
    dados['PorcVDN_HOTLINE_PARCELA'] = '';
    dados['PorcVDN_LIMITE_SOLIC'] = '';
    dados['PorcVDN_LIMITE_CANC'] = '';
    dados['PorcVDN_PARCELA_SOLIC'] = '';
    dados['PorcVDN_PARCELA_MODIF'] = '';
    dados['PorcVDN_SAQUE_SOLIC'] = '';
    dados['PorcVDN_SAQUE_INFO'] = '';
    dados['PorcVDN_SEGURO_SOLIC'] = '';
    dados['PorcVDN_SEGURO_ACAO'] = '';
    dados['PorcVDN_ODONTO_SOLIC'] = '';
    dados['PorcVDN_ADICIO_SOLIC'] = '';
    dados['PorcVDN_ATENDENTE_VENDA'] = '';
    dados['PorcVDN_CANCPRD_ADICIO'] = '';
    dados['PorcVDN_LIMITE_AGTVIRT'] = '';
    dados['PorcVDN_DESPESA_NEGADA'] = '';
    dados['PorcVDN_APPIB_RESET'] = '';
    dados['PorcVDN_APPIB_DESBLQ'] = '';
    dados['PorcVDN_APPIB_INFO'] = '';
    dados['PorcVDN_SERVICE_DESK'] = '';
    dados['PorcVDN_D_PROCON'] = '';
    dados['PorcVDN_D_EMPREST_IBIFOLHA'] = '';
    dados['PorcVDN_D_EMPREST_BRAD_IBICARD'] = '';
    dados['PorcVDN_D_MAKRO_DEMAIS'] = '';
    dados['PorcVDN_D_DESB_BRAD_VENDA_SEG'] = '';
    dados['PorcVDN_TESTE_DERIVA'] = '';
    dados['PorcVDN_D_RENDA_HOSPITALAR'] = '';
    dados['PorcVDN_D_IBI_ODONTO'] = '';
    dados['PorcVDN_D_IBI_CAPITALIZACAO'] = '';
    dados['PorcVDN_D_CARTAO_IBICARD'] = '';
    dados['PorcVDN_D_EMPRESAS_PARCEIRAS'] = '';
    dados['PorcVDN_D_DEMAIS_SERVICOS'] = '';
    dados['PorcVDN_D_EMPREST_INSS_CBSS'] = '';
    dados['PorcVDN_D_EMPREST_INSS_BRADESCARD'] = '';
    dados['PorcVDN_D_SUPER_CREDITO_CBSS'] = '';
    dados['PorcVDN_D_SUPER_CREDITO_BRADESCARD'] = '';
    dados['PorcVDN_D_PRO_SEGUROS'] = '';
    dados['PorcVDN_CAMP_SAQUE'] = '';
   
    dados['HabFraseEmergencialCB'] = false;
    dados['bCBemTrataCartao'] = false;
    dados['bChamouUR8FnoDeriva'] = false;
    dados['HabNLayoutBilhete'] = false;
    dados['HabValidPerdaRoubo'] = false;     
    dados['HabAutPrevent'] = false;          
    dados['HabPlanosParcela'] = false;       
    dados['ListaBloqSemAtd'] = '';
    dados['InibeCartBloqViaCPF'] = '';     
    dados['HabValAutPrevent'] = false;         
    dados['bHabMFatPagtoRetMP'] = false;        
    dados['bHabMParcelRetMP'] = false;          
    dados['HabOpDespNegada'] = false;
    dados['HabTrocaSenha'] = '';             
    dados['bFlagTrocaSenha'] = false;
    if (dados.parametros.Hab_ENC_LASA) {
    	dados['bHab_ENC_LASA'] = true;
    } else {
    	dados['bHab_ENC_LASA'] = false;
    }        
    dados['HabNovaDerAPPIB'] = false;          
    dados['bFlagORGsNovoDesbloq'] = false;
    dados['HabDerAeC'] = false;               
    dados['HabDtVisaGold'] = false;
    dados['HabFalaCodBarraPausadamente'] = false;
    dados['iPosicaoCodBarra'] = 0;
    dados['sCodBarraVerbaliza'] = '';
    dados['Procon_Hab_Der_Direto'] = false;
    dados['parametros']['Procon_HabFraseProconCovid'] = false;
    dados['bCampSaqueAtiva'] = false;
    dados['HabSenhaReemissaoNovoCartao'] = false;   

    //RN58 - IniciaVariaveis
    dados['iAplLimitePerguntasCadastral'] = 0;
    dados['iAplLimitePerguntasComportam'] = 0;
    dados['bPerguntaCNPJIdePos'] = false;
    dados['iAplNumTotalPerguntasFeitas'] = 0;
    dados['iAplNumPerguntasCadastFeitas'] = 0;
    dados['iAplNumPerguntasComportFeitas'] = 0;
    dados['iAplLimitePerguntas'] = 0;
    dados['AplNomePergunta'] = '';
    dados['iTotalErrPerguntas'] = 0;
    dados['bPerguntaCNPJIdePos'] = false;
    dados['iContErrosIdePos'] = 0;
    dados['iAplRtyOpcao'] = 0;
    dados['iNumRespID_POS_OK'] = 0;
    dados['iAplNumErrosHojeID_POS'] = 0;
    dados['AplIDPergunta'] = '00';
    dados['AplRespostaCorreta'] = 'N';
    dados['AplResposta'] = '';
    dados['bJaFechouFuga'] = false;
    dados['IDateNasc'] = '';
    dados['IFlagDateNasc'] = '';
    dados['bUsaDateNasc'] = false;
    dados['IDiaNasc'] = '';
    dados['IFlagDiaNasc'] = '';
    dados['bUsaDiaNasc'] = false;
    dados['IMesNasc'] = '';
    dados['IFlagMesNasc'] = '';
    dados['bUsaMesNasc'] = false;
    dados['IAnoNasc'] = '';
    dados['IFlagAnoNasc'] = '';
    dados['bUsaAnoNasc'] = false;
    dados['ICPF'] = '';
    dados['IFlagCPF'] = '';
    dados['bUsaCPF11D'] = false;
    dados['bUsaCPF4D'] = false;
    dados['IRGNasc'] = '';
    dados['IFlagRGNasc'] = '';
    dados['bUsaRGNasc'] = false;
    dados['bUsaRGNasc4D'] = false;
    dados['IDiaVectoCartao'] = '';
    dados['IFlagDiaVenctoCartao'] = '';
    dados['bUsaDiaVectoCartao'] = false;
    dados['IValidadeCartao'] = '';
    dados['IFlagValidadeCartao'] = '';
    dados['bUsaValidadeCartao'] = false;
    dados['ICVV_CVCCartao'] = '';
    dados['IFlagCVV_CVCCartao'] = '';
    dados['bUsaCVV_CVCCartao'] = false;
    dados['ICEPResid'] = '';
    dados['IFlagCEPResid'] = '';
    dados['bUsaCEPResid'] = false;
    dados['IPossuiAdicional'] = '';
    dados['IFlagPossuiAdicional'] = '';
    dados['bUsaPossuiAdicional'] = false;
    dados['IDataUltimoPagto'] = '';
    dados['IFlagDataUltimoPagto'] = '';
    dados['bUsaDataUltimoPagto'] = false;
    dados['IPossuiSeguroIBI'] = '';
    dados['IFlagPossuiSeguroIBI'] = '';
    dados['bUsaPossuiSeguroIBI'] = false;
    dados['IPossuiProtecao'] = '';
    dados['IFlagPossuiProtecao'] = '';
    dados['bUsaPossuiProtecao'] = false;
    dados['IEstadoCivil'] = '';
    dados['IFlagEstadoCivil'] = '';
    dados['bUsaEstadoCivil'] = false; 
	dados['sAplAgendaDataVencimento'] = '';   
    //Inicia Variaveis Todas
	dados['AplDelayCTI'] = 0;
	dados['iAplPontoEstatistica'] = 'Abandono_Inicial';
	dados['AplServico'] = 'NO_SERVICO';
	dados['AplRxBuffer'] = '';
	dados['bAplCloseOpen'] = false;
	dados['bAplCloseOpenDeriv'] = false;
	dados['bAplFeriadoDomingo'] = false;
	dados['bAplCallBack'] = false;
	dados['iAplSeqDNIS'] = 0;
	dados['sAplWsCPF'] = '';
	dados['sAplWsTipo'] = '';
	dados['iAplMenuQtdLimiteSenhaSaque'] = 0;
	dados['iAplMenuSaque'] = 0;
	dados['iAplMenuQtdSaque'] = 0;
	dados['iAplMenuQtdRepSldLimite'] = 0;
	dados['bAplUR80_OK'] = false;
	dados['bAplProdutoCampanha'] = false;
	dados['bAplVeioDeOutraURA'] = false;
	dados['bAplTelefoneVermelho'] = false;
	dados['bAplDigitouCartao'] = false;
	dados['bAplConsultaOutroCartao'] = false;
	dados['iAplOpcaoEntrada'] = 'NENHUMA_OPCAO';
	dados['strAplNroCPF'] = '';
	dados['iAplQtdDigitCartao'] = 0;
	dados['iAplRtyOpcDesbloqueio'] = 0;
	dados['iAplRtyOpcPerdaRoubo'] = 0;
	dados['iAplRtyOpcEntrada'] = 0;
	dados['iAplRtyOpcao'] = 0;
	dados['iAplNrFrase'] = 1
	dados['strAplCodDesliga'] = 0;
	dados['bAplRetornoSiteCobr'] = false;
	dados['bAplValidouSenhaAtend'] = false;
	dados['iAplCountHostInop'] = 0;
	dados['AplFlagControlaDesbloqueio'] = 0;
	dados['AplContErrRGSaque'] = 0;
	dados['iAplFlagProcExecuta'] = 0;
	dados['iAplRtyNumCartao'] = 0;
	dados['iAplRtyOpcConsultas'] = 0;
	dados['AplControleInformacao'] = 0;
	dados['StrStatusSenhaPLSemLimite'] = true;
	dados['AplSenhaSaque'] = '';
	dados['AplSenhaSaque1'] = '';
	dados['AplFuncaoSenha'] = '';
	dados['AplStrConsSenha'] = '';
	dados['iAplMenuQtdFax'] = 0;
	dados['AplCliente.CodCondicaoCartao'] = '';
	dados['strAplReturnCode'] = '';
	dados['StrDesliga'] = false;
	dados['StrNumCartaoLog'] = '';
	dados['strAplDestTesteRoteamento'] = '';
	dados['strAplPesquisaRg'] = '';
	dados['StrAplFerVerbLog'] = '';
	dados['iAplRtyRg'] = 0;
	dados['iAplRtyDtNasc'] = 0;
	dados['iAplRtyNroCPF'] = 0;
	dados['strAplDestDerivacao'] = '';
	dados['sParamBalanceamentoVDN'] = 'VDN_NENHUM';
	dados['IAplConOutroCartao'] = false;
	dados['strRxReturnStatusPropFalse'] = true;
	dados['AplRxCics_ConsultaFraude'] = false;
	dados['strRxReturnStatusProp'] = false;
	dados['AplRxIbicred_TrGrava'] = '';
	dados['strVerDerPerdaRoubo'] = '';
	dados['bAplPegouCtiNumAFraude'] = false;
	dados['bAplInibirMenuFax'] = false;
	dados['strAplGrReturnCod'] = 0;
	dados['iAplContCTI'] = 0;
	dados['iAplOpcaoMenuCartoesPL'] = '';
	dados['iAplOpcaoMenuCartoesIbicard'] = '';
	dados['AplopcaoDiscMenu1'] = '';
	dados['AplopcaoDiscMenu2'] = '';
	dados['strRxInicioCartao'] = '';
	dados['strRxLocalidade'] = '';
	dados['strRxReturnCode'] = '';
	dados['strRxRamalGrupo'] = '';
	dados['sAplDadosLogURA'] = '';
	dados['sAplDadosLogOcultCartCPF'] = '';
	dados['bAplInibeOpcaoDeriva'] = false;
	dados['bAplFaxConectado'] = false;
	dados['iAplQtdeOpcoes'] = 0;
	dados['strAplSituacaoCartao'] = '';
	dados['strAplRazaoDerivacao']  = '';
	dados['strAplCodRetDerivacao']  = '';
	dados['iAplMenuQtdRepSld'] = 0;
	dados['iAplMenuQtdSldPrxFat'] = 0;
	dados['iAplMenuQtdInfoLimite'] = 0;
	dados['iAplMenuParcelaFatura'] = 0; 
	dados['iAplMenuQtdInfoShop'] = 0;
	dados['iAplMenuQtdFatDetalha'] = 0;
	dados['iAplMenuQtdCDB'] = 0;
	dados['iAplMenuQtdMelhorDia'] = 0;
	dados['iAplMenuRepetirOpcao'] = 0;
	dados['iAplMenuQtdRepetir'] = 0;
	dados['iAplMenuSimulacao'] = 0;
	dados['iAplMenuExtrato'] = 0;
	dados['iAplMenuSldDevedor'] = 0;
	dados['iAplNrFraseAtraso'] = 0;
	dados['AplOptPrivateLabel'] = 0; 
	dados['iAplMenuQtdInfoAumentoLimite'] = 0;
	dados['iAplMenuQtdInfoParcelamento'] = 0;
	dados['iAplPontoEstatistica'] = 'nulo';
	dados['iAplPontoDestinoTransf'] = 'nulo';
	dados['iAplMenuSldDevedor'] = 0;
	dados['iAplUraSistema'] = 0;
	dados['iAplOrgSistema'] = 0;
	dados['strAplUfAtendimento'] = '';
	dados['strAplBufFaxAux'] = '';
	dados['IAplConOutroCartao'] = true;
	dados['strAplCategoria'] = '';
	dados['bAplPegouCtiNumABC'] = false;

	dados['AplCallerDDD'] = 0;
	dados['iAplFechaOpcao0'] = false;
	dados['iAplFechaOpcao1'] = false;
	dados['iAplFechaOpcao2'] = false;
	dados['iAplFechaOpcao3'] = false;
	dados['iAplFechaOpcao4'] = false;
	dados['iAplFechaOpcao5'] = false;
	dados['iAplFechaOpcao6'] = false;
	dados['iAplFechaOpcao7'] = false;
	dados['iAplFechaOpcao8'] = false;
	dados['iAplFechaOpcao9'] = false;
	dados['iAplFechaOpcaoFatParcelada'] = false;
	dados['iAplMenu2QtdOpcao0'] = 0;
	dados['iAplMenu2QtdOpcao1'] = 0;
	dados['iAplMenu2QtdOpcao2'] = 0;
	dados['iAplMenu2QtdOpcao3'] = 0;
	dados['iAplMenu2QtdOpcao4'] = 0;
	dados['iAplMenu2QtdOpcao5'] = 0;
	dados['iAplMenu2QtdOpcao6'] = 0;
	dados['iAplMenu2QtdOpcao7'] = 0;
	dados['iAplMenu2QtdOpcao8'] = 0;
	dados['iAplMenu2QtdOpcao9'] = 0;
	dados['bAplJaRespondeuID_POS'] = false;
	dados['AplResposta'] = '';
	dados['AplTpCPFCNPJ'] = 'TP_NENHUM';
	dados['AplIDVendaSeguro'] = 0;
	dados['AplFalaVendaSeguro'] = false;
	dados['AplTipoSeguro'] = 'NENHUM_SEGURO';
	dados['bAplBinIbicredIsVisio'] = false;
	dados['AplIDParcela'] = 0;
	dados['AplFalaParcelaFatura'] = false;
	dados['AplNumeroParcelas'] = 0;
	dados['AplProduto'] = 'PROD_SEM_PRODUTO'; 
	dados['aplModFunc'] = 'eMODNenhum';
	
	dados['bEhAtendimento0800SAC'] = false;
	dados['bPadraoNumAtd'] = false;
	dados['sListaOrgPropostas_7331_7332_0800'] = '';
	dados['iListaOrgPropostas_7331_7332_0800_Contador'] = 0;
	dados['bInibeopcaoBoleto'] = false;
	dados['bOrigemHotLineCEA'] = false;
	dados['sDigitouAlgumaCoisa'] = '';
	dados['bHabColetaCPF'] = false;
	dados['strListaIndiceORGValido'] = '';
	dados['strListaIndiceORGValidoAux'] = '';
	dados['iQtdeOpIndiceORGValido'] = 0;
	dados['iQtdeOpIndiceORGValidoAtivo'] = 0;
	dados['iQtdeOpIndiceORGValidoBloqueado'] = 0;
	dados['iQtdeOpIndiceORGValidoOutro'] = 0;
	dados['iIndiceORGValido'] = 0;
	dados['bDesativa_Atend_URASAC'] = false;
	dados['iContIntervalo'] = 0;
	dados['sListaORGsIdentCPF'] = '';
	dados['bOrigemHotLineCEAMenu'] = 'MENU_HOTLINE_NAO_APRESENTAR';
	dados['bHabUnificacao'] = true;
	dados['bHabOpcoesMenu1oNivel'] = true;
	dados['iRetry'] = 0;
	dados['ePontoDerivacao'] = 'PD_NENHUM';
	dados['eMotivoBloqueio'] = 'MOTIVO_BLOQUEIO_NENHUM';
	dados['sNumeroCartaoCPF'] = '';
	dados['sNumeroCartaoDesbloqueio'] = '';
	dados['sORGCartao'] = '';
	dados['sLogoCartao'] = '';
	dados['eAtendimento'] = 'ATD_NENHUM';
	dados['sListaCartoesValidosBloqueio'] = '';
	dados['iQtdListaCartoesValidosBloqueio'] = 0;
	dados['sListaCartõesAdicionais'] = '';
	dados['sListaCartõesTitulares'] = '';
	dados['iQtdListaCartoesValidosBloqueioAdicionais'] = 0;
	dados['iQtdListaCartoesValidosBloqueioTitulares'] = 0;
	dados['eTipoCartaoBloqueio'] = 'TIPO_CARTAO_NENHUM';
	dados['iIndiceCartaoBloqueio'] = 0;
	dados['sNumeroCPFCNPJ'] = '';
	dados['bExisteAproMais10D'] = false;
	dados['iTotalPropostasValidas'] = 0;
	dados['bJaVerbalizouMais1PropostaValida'] = false;
	dados['iTotalAprovadas'] = 0;
	dados['iTotalReprovadas'] = 0;
	dados['iTotalEmAnalise'] = 0;
	
	dados['iContador'] = 0;
	dados['iVezFala'] = 0;
	dados['bJaFalouFraseQQMomento'] = false;
	dados['bVeioFluxoDesbloqueio'] = false;
	dados['pHabOpPlanoOdonto'] = false;
	dados['pHabOpCartaoAdicional'] = false;
	dados['pHabOpAlterEndereco'] = false;
	dados['pHabOpDesbloqueioCartao'] = false;
	dados['pHabOpSenhaCartaoCredito'] = false;
	dados['pHabPID_Atendente'] = false;
	dados['pHabPID_BBC'] = false;
	dados['pHabPID_Desbloqueio'] = false;
	dados['pHabPID_FatDetalhada'] = false;
	dados['pHabPID_Limite'] = false;
	dados['bPIDOk'] = false;
	dados['bSenhaCHIPOk'] = false;
	dados['eTelefoneChamador'] = 'TELEFONE_CHAMADOR_NENHUM';
	dados['sTelefoneCelularCadastrado'] = '';
	dados['sTelefoneCelularNovo'] = '';
	dados['sPIDAnterior'] = '';
	dados['sListaDadosPIDCadastral'] = '';
	dados['sListaDadosPIDComportamental'] = '';
	dados['bListaPIDCNPJ'] = false;
	dados['sFuncaoUR81'] = '';
	dados['sFuncaoUR91'] = '';
	dados['eMenuCelular'] = 'MENU_CELULAR_NENHUM';
	dados['sSenhaAtual'] = '0000000000000000';
	dados['sSenhaNova'] = '0000000000000000';
	dados['AplUR85RX.AplCodRetorno'] = '';
	dados['eOpSenhaCartao'] = 'OP_SENHA_CARTAO_NENHUM';
	dados['sSenhaAtualDigitada'] = '';
	dados['sSenhaNovaDigitada'] = '';
	dados['bInibeOpcaoHotLineCEAParcFat'] = false;
	dados['bOptouCodBarrasEmCartAtraso'] = false;
	dados['bBalanceaAtentoCallLinkCancela'] = false;
	dados['bVerbalizouFraseInfo1'] = false;
	dados['iPaginaCartao'] = 1;
	dados['bCBemTrataCartao'] = false;
	dados['bMsgIncentivoAtdDesliga'] = false;
	dados['bChamouUR8FnoDeriva'] = false;
	
	dados['bFlagTrocaSenha'] = false;
	dados['bEhAtendimentoServiceDesk'] = false;
	dados['bEhAtendimentoServiceDesk_0800'] = false;
	dados['bEhAtendimentoProcon'] = false;
	dados['bEhAtendimentoEmprestimoIbiFolha'] = false;
	dados['bEhAtendimentoEmprestimoBradIbiCard'] = false;
	dados['bEhAtendimentoMakroEDemais'] = false;
	dados['bEhAtendimentoDesbloq_Brad_Venda_Seguros'] = false;
	dados['bEhAtendimentoTesteDerivacao'] = false;
	dados['bEhAtendimentoD_Ibi_Seguro'] = false;
	dados['bEhAtendimentoD_Emprest_INSS'] = false;
	dados['bEhAtendimentoD_Super_Credito'] = false;
	dados['bEhAtendimentoD_Pro_Seguro'] = false;
	dados['bEhPrimeiraVez'] = false;
	dados['bEhAtendimentoCampSaque'] = false;
	dados['l_OpMenu'] = 'eOpFaxFatNenhum';

	dados['AplEhFraude'] = {};
	dados['AplEhFraude']['Situacao'] = 'eStFNenhum';
	dados['AplEhFraude']['TipoLista'] = 'eTpFNenhum';

	dados['MSGTYPE_INICIO'] = '01';

	return dados;
}

function getDiretorioFrases() {
    return "../../YPII/Resources/Prompts/Frases/";
}


function removeDupes(names) {
    var unique = {};
    names.forEach(function (i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return keys(unique);
}

var keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        semBug = !({ toString: null }).propertyIsEnumerable('toString'),
        semEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        semEnumsLength = semEnums.length;
    return function (obj) {
		/*
		if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
		}
		*/

        var result = [];
        var prop;
        var i;

        for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
                result.push(prop);
            }
        }

        if (semBug) {
            for (i = 0; i < semEnumsLength; i++) {
                if (hasOwnProperty.call(obj, semEnums[i])) {
                    result.push(semEnums[i]);
                }
            }
        }
        return result;
    };

}());

function getANITratado(ani) {
    if (ani != "" && ani != undefined) {
        if (ani.indexOf(":") >= 0) {
            var aux1 = ani.split(":");
            if (aux1[1] != "") {
                if (aux[1].indexOf("@") >= 0) {
                    var aux2 = aux1.split("@");
                    ani = aux2[0];
                }
            }
        }
    }
    return ani;
}

function getDDD(ani) {
    return ani.substring(0, 2);
}

function getTelefone(ani) {
    if (ani.length > 10) {
        return getUltimosCaracteres(ani, 9);
    } else return getUltimosCaracteres(ani, 8);
}

function getUltimosCaracteres(str, qtd) {
    if (str != undefined && str.length > qtd) {
        return str.substring(str.length - qtd, str.length);
    }
    return str;
}

function getValorEmDollar(valor) {
    var dezenas = trataValor(valor.substr(0, valor.length - 2));
    var centavos = (valor.substr(valor.length - 2));
    return ("$" + dezenas + "." + centavos);
}

function getValorEmEuro(valor) {
    var dezenas = trataValor(valor.substr(0, valor.length - 2));
    var centavos = valor.substr(valor.length - 2);
    return ("E" + dezenas + "." + centavos);
}

function getValorEmLibra(valor) {
    var dezenas = trataValor(valor.substr(0, valor.length - 2));
    var centavos = valor.substr(valor.length - 2);
    return ("L" + dezenas + "." + centavos);
}

function trataValor(valor) {
    if (trim(valor) == "" || isNaN(valor)) {
        return 0;
    }
    return parseInt(valor, 10);
}

function trataFloat(valor) {
    if (trim(valor) == "" || isNaN(valor)) {
        return 0;
    } else {
        valor = valor.replace(/[^\d\.\-]/g, "");
        var str = parseFloat(valor, 10);
        return str;
    }
}

function tiraPonto(str) {
    if (str != undefined && str != null) {
        if (str.indexOf(".") >= 0) {
            var arr = str.split(".");
            if (arr[1].length == 1) {
                str = arr[0] + arr[1] + "0";
            } else if (arr[1].length >= 2) {
                str = arr[0] + arr[1].substring(0, 2);
            }
        }
        return str;
    }
    return "";
}

function retornaValorAbsoluto(str) {
    if (str != undefined && str.indexOf("-") >= 0) {
        str = str.replace("-", "");
    }
    return str;
}

function tiraPontoVirgulaFinal(str) {
    if (str != undefined) {
        if (str.charAt(str.length - 1) == ";") {
            str = str.substring(0, str.length - 1)
        }
    }
    return str;
}

function tiraPontoDoFinal(str) {
    if (str != undefined) {
        if (str.charAt(str.length - 1) == ".") {
            str = str.substring(0, str.length - 1)
        }
    }
    return str;
}

function falaValor(numero) {
    if (numero != undefined && numero != "") {
        numero += "";
        numero = numero.replace(".", "");
        numero = numero.replace(",", "");
        return numero;
    }
    return "0";
}

function completaComZeros(variavel, tamanho) {
    if (variavel == null) {
        variavel = "";
    }
    while (variavel.length < tamanho) {
        variavel = "0" + variavel;
    }
    return variavel;
}

function completaComZerosDireita(variavel, tamanho) {
    if (variavel == null) {
        variavel = "";
    }
    while (variavel.length < tamanho) {
        variavel = variavel + "0";
    }
    return variavel;
}

function completaComEspacos(variavel, tamanho) {
    if (variavel == null) {
        variavel = "";
    }
    while (variavel.length < tamanho) {
        variavel = variavel + " ";
    }
    return variavel;
}

function adicionaDados(objeto, nome, valor) {
    objeto[nome] = valor;
    return objeto;
}

function trim(str) {
    if (str != null && str != undefined) {
        str = str.toString();
        return str.replace(/^\s+|\s+$/g, "");
    }
    return "";
}

function verificaJsonVazio(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}

function jsonValido(obj) {
    if (obj == null || obj == undefined || verificaJsonVazio(obj)) return false;
    return true;
}

function jsonValidoArray(jsonValidar, array) {
    if (!jsonValido(jsonValidar) || array.length == 0) {
        return false;
    }
    for (var i = 0; i < array.length; i++) {
        if (!jsonValido(jsonValidar[array[i]])) {
            return false;
        }
        jsonValidar = jsonValidar[array[i]];
    }
    return true;
}

function getLastUrl() {
    return AppState.LAST_EVENT_URL.substr(AppState.LAST_EVENT_URL.lastIndexOf("/") + 1);
}

function verificaNumerosIguais(str) {
    var iguais = true;
    for (var i = 1; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(i - 1)) {
            iguais = false;
        }
    }
    return iguais;
}

function verificaNumerosSequenciais(str) {
    var crescente = true;
    var decrescente = true;
    for (var i = 1; i < str.length; i++) {
        if (str.charAt(i) != Math.abs(str.charAt(i - 1)) - 1) {
            decrescente = false;
        }
        if (str.charAt(i) != Math.abs(str.charAt(i - 1)) + 1) {
            crescente = false;
        }
        if (str.charAt(i) == str.charAt(i - 1)) {
            crescente = false;
            decrescente = false;
        }
    }
    return crescente || decrescente;
}

function verificaNumerosIguaisSeparados(num) {
    for (var i = 0; i < num.length; i++) {
        var c = 0;
        for (var j = 0; j < num.length; j++) {
            if (i != j && num.charAt(i) == num.charAt(j)) {
                c++;
                if (c >= 2) {
                    return true;
                }
            }
        }
    }
    return false;
}

function replaceUndefined(str, valor) {
    if (!str) return valor;
    var idx = str.indexOf("undefined");
    if (idx > 0) {
        return replaceUndefined(str.substring(0, idx) + valor + str.substring(idx + 9), valor);
    }
    return str;
}

function replaceJsonUndefined(json, valor) {
    for (var j in json) {
        if (json[j] == undefined) {
            json[j] = valor;
        }
    }
    return json;
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


function desmontaParametros(retorno) {
    return retorno;
}

function isDocumentoValido(numero) {
    var ret = {};
    ret['valido'] = false;
    if (numero.length == 14) {
        if (isCNPJ(numero)) {
            ret['valido'] = true;
            ret['tipo'] = 'CNPJ';
        }
    } else if (numero.length >= 9 && numero.length <= 11 && isCPF(numero)) {
        ret['valido'] = true;
        ret['tipo'] = 'CPF';
    }
    ret['numero'] = numero;
    return ret;
}

function isCPF(cpf) {
    var acumulador = 0, numerosIguais = true;
    for (var peso = 10, indice = 0; indice < 9; indice++, peso--) {
        acumulador += peso * cpf[indice];
        if (cpf[indice] != cpf[indice + 1]) {
            numerosIguais = false;
        }
    }
    if (numerosIguais) {
        return false;
    }
    var digito1;
    var resto = acumulador % 11;
    if (resto < 2) {
        digito1 = 0;
    } else {
        digito1 = 11 - resto;
    }
    if (digito1 != cpf[9]) {
        return false;
    }
    acumulador = 0;
    for (peso = 11, indice = 0; indice < 10; indice++, peso--) {
        acumulador += peso * cpf[indice];
    }
    var digito2;
    var resto = acumulador % 11;
    if (resto < 2) {
        digito2 = 0;
    } else {
        digito2 = 11 - resto;
    }
    if (digito2 != cpf[10]) {
        return false;
    }
    return true;
}

function isCNPJ(cnpj) {
    var acumulador = 0, pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (var indice = 0; indice < 12; indice++) {
        acumulador += pesos[indice + 1] * cnpj[indice];
    }
    var digito1;
    var resto = acumulador % 11;
    if (resto < 2) {
        digito1 = 0;
    } else {
        digito1 = 11 - resto;
    }
    if (digito1 != cnpj[12]) {
        return false;
    }
    acumulador = 0;
    for (var indice = 0; indice < 13; indice++) {
        acumulador += pesos[indice] * cnpj[indice];
    }
    var digito2;
    var resto = acumulador % 11;
    if (resto < 2) {
        digito2 = 0;
    } else {
        digito2 = 11 - resto;
    }
    if (digito2 != cnpj[13]) {
        return false;
    }
    return true;
}



function isCartao(dados, numeroDigitado) {

    var numCartao = numeroDigitado;

    //verifica se é cartão valido
    switch (numCartao.substring(0, 1)) {
        case "1":
        case "4":
        case "5":
        case "6":
        case "7":
        case "9":
            dados["sAplNumCartao"] = numCartao;
            dados["StrNumCartaoLog"] = numCartao;
            dados["sAplBinCartao"] = numCartao;
            dados["iAplOpcaoEntrada"] = "NUMERO_CARTAO";
            dados["strAplNumeroCartao"] = dados["sAplNumCartao"];
            dados["StrAplSeqMenLog"] = dados["StrAplSeqMenLog"] + ";99"
            dados["isCartao"] = true;
            break;
        default:
            dados["isCartao"] = false;
    }
    dados["StrAplSeqMenLog"] = dados["StrAplSeqMenLog"] + ";99"
    
    return dados;

}

function VerificaCartao(cartao) {

	//Modulo 10
	var valid 	= "0123456789"
	var len 	= cartao.length;
	var bNum 	= true;
	var iCCN 	= cartao;
	var sCCN 	= cartao.toString();
	var iCCN;
	var iTotal 	= 0;
	var bResult = false;
	var digit;
	var calc;
	var calc2;
	var temp;
		iCCN = sCCN.replace (/^\s+|\s+$/g,''); //remove spaces
	for (var j=0; j<len; j++) {
		temp = "" + iCCN.substring(j, j+1);
		if (valid.indexOf(temp) == "-1") bNum = false;
	}
	if(!bNum){return false;}
	iCCN = parseInt(iCCN);
	if(len == 0){
		bResult = false;
	}else{
		if(len >= 15){		//15 or 16 for Amex or V/MC
			for(var i=len;i>0;i--){
				digit = "digit" + i;
				calc = parseInt(iCCN) % 10;
				calc = parseInt(calc);
				iTotal += calc;				
				i--;
				digit = "digit" + i;
				iCCN = iCCN / 10;
				calc = parseInt(iCCN) % 10 ;
				calc2 = calc *2;				
				switch(calc2){
					case 10: calc2 = 1; break;	//5*2=10 & 1+0 = 1
					case 12: calc2 = 3; break;	//6*2=12 & 1+2 = 3
					case 14: calc2 = 5; break;	//7*2=14 & 1+4 = 5
					case 16: calc2 = 7; break;	//8*2=16 & 1+6 = 7
					case 18: calc2 = 9; break;	//9*2=18 & 1+8 = 9
					default: calc2 = calc2; 	//4*2= 8 &   8 = 8  -same for all lower numbers
				}
				iCCN = iCCN / 10; 	// subtracts right most digit from ccNum
				iTotal += calc2;
			}
			if ((iTotal%10)==0){
				bResult = true;
	 		}else{
				bResult = false;
			}
		}else{
			var sum = 0;
			var alt = false;
			var numvar = 0;
			for(var i = cartao.length - 1; i >= 0; i--)
			{
				numvar = parseInt(cartao.charAt(i));
				if(alt)
				{
					numvar *= 2;
					if(numvar > 9)
					{
						numvar -= 9;
					}
				}
				sum += numvar;
				alt = !alt;
			}
			return sum % 10 == 0;
		}
	}

	return bResult;
}


function ehCelular(dados) {
    var ani = dados['ani'];

    return (ani.length > 10);
}

function validaTelefoneCelular(numero) {
    var ret = {};

    var ddd = "00";
    var primeiroDigito = "0";
    var posPrimeiroDigito = 0;
    var validaTelefoneCelular = false;

    var ddiCelular = "";
    var dddCelular = "";
    var numCelular = "";

    var telefone = numero;

    if (telefone) {
        if (telefone.substring(0, 1) == "0") {
            ddd = telefone.substring(1, 3);
            primeiroDigito = telefone.substring(3, 4);
            posPrimeiroDigito = 4;
        } else if (parseInt(telefone.substring(0, 1)) > 0) {
            ddd = telefone.substring(0, 2);
            primeiroDigito = telefone.substring(2, 3);
            posPrimeiroDigito = 3;
        } else {
            validaTelefoneCelular = false;
        }

        switch (parseInt(ddd, 10)) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 20:
            case 23:
            case 25:
            case 26:
            case 29:
            case 30:
            case 36:
            case 39:
            case 40:
            case 50:
            case 52:
            case 56:
            case 57:
            case 58:
            case 59:
            case 60:
            case 70:
            case 72:
            case 76:
            case 78:
            case 80:
            case 90:
                validaTelefoneCelular = false;
                break;
            default:
                if (primeiroDigito >= 2 && primeiroDigito <= 9) {
                    validaTelefoneCelular = true;
                    ddiCelular = "055"; //Fixo
                    dddCelular = completaComZeros(ddd, 3);

                    if (posPrimeiroDigito == 3) {
                        numCelular = completaComZeros(telefone.substring(2), 11);
                    } else {
                        numCelular = completaComZeros(telefone.substring(3), 11);
                    }
                } else {
                    validaTelefoneCelular = false;
                }
                break;
        }
    }

    ret['validaTelefoneCelular'] = validaTelefoneCelular;
    ret['ddiCelular'] = ddiCelular;
    ret['dddCelular'] = dddCelular;
    ret['numCelular'] = numCelular;

    return ret;
}

function insert(palavra, insert, pos) {
    if (typeof (pos) == "undefined") {
        pos = 0;
    }
    if (typeof (insert) == "undefined") {
        insert = '';
    }
    return palavra.slice(0, pos) + insert + palavra.slice(pos);
}

function insert(palavra, insert, pos) {
    if (typeof (pos) == "undefined") {
        pos = 0;
    }
    if (typeof (insert) == "undefined") {
        insert = '';
    }
    return palavra.slice(0, pos) + insert + palavra.slice(pos);
}

//Módulo

function set_eTipoAtendimentoProduto(dados) {
    var dnis = dados['dnis'];

    var ret = {};

    if (dados['parametros']['dnis_luigi_bertolli'].indexOf(dnis) >= 0) {
        ret['produto'] = "CARTAO_BRADESCO_PL";
        ret['eTipoAtendimento'] = "TIPO_ATENDIMENTO_LUIGI_BERTOLLI";
    } else if (dados['parametros']['dnis_boticario'].indexOf(dados['dnis']) >= 0) {
        ret['produto'] = "CARTAO_BRADESCO_BOTICARIO";
        ret['eTipoAtendimento'] = "TIPO_ATENDIMENTO_BOTICARIO";
    } else if (dados['parametros']['dnis_coop'].indexOf(dados['dnis']) >= 0) {
        ret['produto'] = "CARTAO_BRADESCO_COOP";
        ret['eTipoAtendimento'] = "TIPO_ATENDIMENTO_COOP";
    } else if (dados['parametros']['dnis_cencosud_bretas_2_irmaos'].indexOf(dados['dnis']) >= 0) {
        ret['produto'] = "CARTAO_BRADESCO_PL";
        ret['eTipoAtendimento'] = "TIPO_ATENDIMENTO_CENCOSUD_BRETAS_2_IRMAOS";
    } else {
        ret['produto'] = "CARTAO_BRADESCO_PL";
        ret['eTipoAtendimento'] = "TIPO_ATENDIMENTO_PRIVATE_LABEL";
    }

    return ret;
}

/*
function verDestino(dados) {
    var eTipoAtendimento = dados['eTipoAtendimento'];

    switch (eTipoAtendimento) {
        case "TIPO_ATENDIMENTO_LUIGI_BERTOLLI":
            return dados['parametros']['vdn_xx'];
        case "TIPO_ATENDIMENTO_BOTICARIO":
            return dados['parametros']['vdn_xx'];
        case "TIPO_ATENDIMENTO_COOP":
            return dados['parametros']['vdn_xx'];
        case "TIPO_ATENDIMENTO_CENCOSUD_BRETAS_2_IRMAOS":
            return dados['parametros']['vdn_xx'];
        case "TIPO_ATENDIMENTO_PRIVATE_LABEL":
            return dados['parametros']['vdn_xx'];
    }
}
*/



function getEvento(dados) {
    var eTipoAtendimento = dados['eTipoAtendimento'];
    var codLogo = dados['codLogo'];

    if (eTipoAtendimento == "TIPO_ATENDIMENTO_COOP") {
        switch (codLogo) {
            case "515":
            case "915":
                return "421";
            case "756":
            case "956":
                return "422";
        }
    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_PRIVATE_LABEL") {
        switch (codLogo) {
            case "511":
            case "800":
            case "911":
                return "412";
            case "513":
            case "913":
                return "413";
            case "514":
            case "757":
            case "914":
            case "957":
                return "414";
            case "744":
            case "745":
            case "746":
            case "747":
            case "748":
            case "749":
            case "750":
            case "755":
            case "946":
            case "947":
            case "948":
            case "949":
                return "415";
            case "752":
            case "952":
                return "417";
            case "600":
            case "751":
            case "900":
            case "951":
                return "416";
            case "516":
            case "916":
                return "419";
            case "753":
            case "953":
                return "418";
            case "801":
            case "901":
                return "423";
        }
    }

    return "0";
}

function verRetornoCartao(dados) {
    var eTipoAtendimento = dados['eTipoAtendimento'];
    var produto = dados['produto'];

    var codRet = "";
    var craMedBlock = "";
    var nome = "";

    if (dados['BDAS']) {
        codRet = dados['BDAS']['codRetorno'];
        craMedBlock = dados['BDAS']['craMedBlock'];
        nome = dados['BDAS']['craMedBlock'];
    }

    //RN6
    if (eTipoAtendimento == "TIPO_ATENDIMENTO_BOTICARIO" && produto == "CARTAO_BRADESCO_BOTICARIO") {
        return true;
        //RN7
    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_COOP" && produto == "CARTAO_BRADESCO_COOP") {
        //RN8
        if (eTipoAtendimento == "TIPO_ATENDIMENTO_CENCOSUD_BRETAS_2_IRMAOS" && produto == "CARTAO_BRADESCO_PL") {
            return false;
        } else {
            return true;
        }
    }

    return false;
}

function verBloqCob(dados) {
    var bloqCob1 = dados['BDAS']['bloqCobranca1'];
    var bloqCob2 = dados['BDAS']['bloqCobranca2'];
    var retCod1 = dados['BDAS']['codRetorno'];


    if (bloqCob1 == "S" || bloqCob2 == "S" || bloqCob1 == "Y" || bloqCob2 == "Y" || retCod1 == "02") {
        return true;
    } else {
        return false;
    }
}

function contabilizaPropostas(dados) {
    var ret = {};
    
    var codRet = dados['BDD7'] ? dados['BDD7']['retCod1'] : "";
    var ExisteReprovadaAprovadaMais15Dias = false;

    if (codRet == "000") {
        var totalPropostas = dados['totalPropostas'];
       
        if (totalPropostas <= 0) {
            ret['totalPropostas'] = 0;
        }
        ret['totalPropostas'] = 0;
        ret['totalAprovadas'] = 0;

        var numeroLogo = "";
        var numeroProposta = ""; //opcional
        var sitProposta = "";
        var dataAprovacao = ""; //opcional
        var numCartaoTit = ""; //opcional

        for (var i = 0, j = 0; j < 13; j++, i += 94) {
        	
            var propostas = dados['BDD7']['dadosPropostas'].substring(i, i + 43);

            numeroLogo = propostas.substring(0, 3);
            //__Log('numeroLogo: ' + numeroLogo);
            //numeroProposta = propostas[j].substring(3,16); //opcional
            sitProposta = propostas.substring(16, 17);
           // dataAprovacao = propostas[j].substring(17,25); //opcional
            dataAprovacao = propostas.substring(17,25); //opcional
            //numCartaoTit = propostas[j].substring(25,44); //opcional
            
            if (diferencaDias(dataAprovacao, 1) > 15)  {
            	//ExisteReprovadaAprovadaMais15Dias = true;
            	adicionaDados(dados, 'ExisteReprovadaAprovadaMais15Dias', dados['ExisteReprovadaAprovadaMais15Dias'] + ExisteReprovadaAprovadaMais15Dias);
            }
     
            if (numeroLogo) {
                ret['totalPropostas']++;
            }

            var eTipoAtendimento = dados['eTipoAtendimento'];
            var parametros = dados['parametros'];

            switch (sitProposta) {
                case "A":
                    if (eTipoAtendimento == "TIPO_ATENDIMENTO_COOP" && parametros['logos_coop'].indexOf(numeroLogo) >= 0) {
                        ret['totalAprovadas']++;
                        ret['numeroLogo'] = numeroLogo;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_BOTICARIO" && parametros['logos_boticario'].indexOf(numeroLogo) >= 0) {
                        ret['totalAprovadas']++;
                        ret['numeroLogo'] = numeroLogo;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_LUIGI_BERTOLLI" && parametros['logos_luigi_bertolli'].indexOf(numeroLogo) >= 0) {
                        ret['totalAprovadas']++;
                        ret['numeroLogo'] = numeroLogo;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_CENCOSUD_BRETAS_2_IRMAOS" && parametros['logos_cencosud_bretas_2_irmaos'].indexOf(numeroLogo) >= 0) {
                        ret['totalAprovadas']++;
                        ret['numeroLogo'] = numeroLogo;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_PRIVATE_LABEL" && parametros['logos_private_label'].indexOf(numeroLogo) >= 0) {
                        ret['totalAprovadas']++;
                        ret['numeroLogo'] = numeroLogo;
                    }
                    break;
                case "D":
                    if (eTipoAtendimento == "TIPO_ATENDIMENTO_COOP" && parametros['logos_coop'].indexOf(numeroLogo) >= 0) {
                        ret['totalRecusadas']++;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_BOTICARIO" && parametros['logos_boticario'].indexOf(numeroLogo) >= 0) {
                        ret['totalRecusadas']++;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_LUIGI_BERTOLLI" && parametros['logos_luigi_bertolli'].indexOf(numeroLogo) >= 0) {
                        ret['totalRecusadas']++;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_CENCOSUD_BRETAS_2_IRMAOS" && parametros['logos_cencosud_bretas_2_irmaos'].indexOf(numeroLogo) >= 0) {
                        ret['totalRecusadas']++;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_PRIVATE_LABEL" && parametros['logos_private_label'].indexOf(numeroLogo) >= 0) {
                        ret['totalRecusadas']++;
                    }
                    break;
                case "I":
                    if (eTipoAtendimento == "TIPO_ATENDIMENTO_COOP" && parametros['logos_coop'].indexOf(numeroLogo) >= 0) {
                        ret['totalEmAnalise']++;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_BOTICARIO" && parametros['logos_boticario'].indexOf(numeroLogo) >= 0) {
                        ret['totalEmAnalise']++;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_LUIGI_BERTOLLI" && parametros['logos_luigi_bertolli'].indexOf(numeroLogo) >= 0) {
                        ret['totalEmAnalise']++;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_CENCOSUD_BRETAS_2_IRMAOS" && parametros['logos_cencosud_bretas_2_irmaos'].indexOf(numeroLogo) >= 0) {
                        ret['totalEmAnalise']++;
                    } else if (eTipoAtendimento == "TIPO_ATENDIMENTO_PRIVATE_LABEL" && parametros['logos_private_label'].indexOf(numeroLogo) >= 0) {
                        ret['totalEmAnalise']++;
                    }
                    break;
            }
        }
    } else if (codRet == "005") {
        ret['totalPropostas'] = 0;

        ret['totalAprovadas'] = 0;
        ret['totalRecusadas'] = 0;
        ret['totalEmAnalise'] = 0;
    }

    return ret;
}

function verTelefoneCelular(dados) {

    var telResAux = "";
    var telComAux = "";

    if (dados['BDD1']) {
        telResAux = dados['BDD1']['dddTelRes'] + dados['BDD1']['telResResp'];
        telComAux = dados['BDD1']['dddTelCom'] + dados['BDD1']['telComResp'];
    }

    var evento = "464";
    var ani = dados['ani'];

    if (ehCelular(dados)) {
        if (ani == telResAux) {
            evento = "462";
        }
        if (ani == telComAux) {
            evento = "463";
        }
    } else {
        if (ani == telResAux) {
            evento = "460";
        }
        if (ani == telComAux) {
            evento = "461";
        }
    }

    return evento;
}

function verificaValorValidoPID(dados, opcao) {
	var ObterPID = dados["obterPID"];
	var eTipoPID = ObterPID["eTipoPID"];
	var eDadosPID = ObterPID["eDadosPID"];
	var CPF_Responsa = ObterPID["CPF_RESPONSAVEL"];
	var valido = false;

	if (eTipoPID == "TIPO_PID_TITULAR") {
		if (eDadosPID == "DADOS_PID_CPF_CVV") {
			if (opcao == ObterPID["CVV2_TITULAR"]) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_DATA_NASC_TITULAR") {
			if (opcao == ObterPID["DTNASC_TITULAR"]) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_CEP") {
			if (opcao == ObterPID["DTNASC_TITULAR"]) {
				valido = true;
			}
		}
	} else {


		if (eDadosPID == "DADOS_PID_CPF_CVV") {
			if (opcao == CPF_Responsa.substring(0, 3)) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_DATA_NASC_TITULAR") {
			if (opcao == ObterPID["DTNASC_TITULAR"]) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_CEP") {
			if (opcao == ObterPID["DTNASC_TITULAR"]) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_DATA_NASC_RESPONSAVEL") {
			if (opcao == ObterPID["DTNASC_RESPONSAVEL"]) {
				valido = true;
			}
		}
	}
	return valido;
}


function valorAleatorioPID(dados) {
	var dadosValorAleatorio = dados['valorAleatorio'];
	var tipoPID = dados['eTipoPID'];
	var valorAleatorio = 0;

	do {
		if (tipoPID == "TIPO_PID_TITULAR") {
			valorAleatorio = Math.floor(Math.random() * 3) + 1;
		} else {
			valorAleatorio = Math.floor(Math.random() * 4) + 1;
		}
	} while (dadosValorAleatorio.indexOf(valorAleatorio) >= 0);

	if (dadosValorAleatorio.indexOf(valorAleatorio) == -1) {
		adicionaDados(dados, 'valorAleatorio', dados['valorAleatorio'] + valorAleatorio);
		return valorAleatorio;
	}
}

function verificarDadosPID(dados, numeroDigitado, valorAleatorio) {
	var cpf = "";
	var anoNasc = "";
	var cep = "";
	var cvv = "";

	var tipoPID = dados['eTipoPID'];

	if (tipoPID == "TIPO_PID_TITULAR") {
		switch (valorAleatorio) {
			case 1:
				cvv = dados['ObterPID']['CVV2_TITULAR'];
				return (numeroDigitado == cvv);
			case 2:
				anoNasc = dados['ObterPID']['DTNASC_TITULAR'];
				return (numeroDigitado == anoNasc);
			case 3:
				cep = dados['ObterPID']['CEP_TITULAR'];
				return (numeroDigitado == cep);
		}
	} else {
		switch (valorAleatorio) {
			case 1:
				cpf = dados['ObterPID']['CPF_RESPONSAVEL'];
				return (numeroDigitado == cpf);
			case 2:
				anoNasc = dados['ObterPID']['DTNASC_TITULAR'];
				return (numeroDigitado == anoNasc);
			case 3:
				cep = dados['ObterPID']['CEP_RESPONSAVEL'];
				return (numeroDigitado == anoNasc);
			case 4:
				anoNasc = dados['ObterPID']['DTNASC_RESPONSAVEL'];
				return (numeroDigitado == anoNasc);
		}
	}

	return false;
}

function verificaValorValidoPID(dados, opcao) {
	var ObterPID = dados["obterPID"];
	var eTipoPID = ObterPID["eTipoPID"];
	var eDadosPID = ObterPID["eDadosPID"];
	var CPF_Responsa = ObterPID["CPF_RESPONSAVEL"];
	var valido = false;

	if (eTipoPID == "TIPO_PID_TITULAR") {
		if (eDadosPID == "DADOS_PID_CPF_CVV") {
			if (opcao == ObterPID["CVV2_TITULAR"]) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_DATA_NASC_TITULAR") {
			if (opcao == ObterPID["DTNASC_TITULAR"]) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_CEP") {
			if (opcao == ObterPID["DTNASC_TITULAR"]) {
				valido = true;
			}
		}
	} else {


		if (eDadosPID == "DADOS_PID_CPF_CVV") {
			if (opcao == CPF_Responsa.substring(0, 3)) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_DATA_NASC_TITULAR") {
			if (opcao == ObterPID["DTNASC_TITULAR"]) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_CEP") {
			if (opcao == ObterPID["DTNASC_TITULAR"]) {
				valido = true;
			}
		} else if (eDadosPID == "DADOS_PID_DATA_NASC_RESPONSAVEL") {
			if (opcao == ObterPID["DTNASC_RESPONSAVEL"]) {
				valido = true;
			}
		}
	}
	return valido;
}


function valorAleatorioPID(dados) {
	var dadosValorAleatorio = dados['valorAleatorio'];
	var valorAleatorio = 0;

	do {
		valorAleatorio = Math.floor(Math.random() * 3) + 1;
	} while (dadosValorAleatorio.indexOf(valorAleatorio) >= 0);

	if (dadosValorAleatorio.indexOf(valorAleatorio) == -1) {
		adicionaDados(dados, 'valorAleatorio', dados['valorAleatorio'] + valorAleatorio);
		return valorAleatorio;
	}
}

function verificarDadosPID(dados, numeroDigitado, valorAleatorio) {
	var rg = "";
	var diaMesNasc = "";
	var anoNasc = "";
    var respCorreta = "";

	switch (valorAleatorio) {
		case 1:
			rg = dados['ObterPID']['RG'];
			var digitosRg = rg.split('');

			for (var i = 0; respCorreta.length < 2; i++) {
				if (digitosRg[i] >= 0 || digitosRg[i] <= 9){
					respCorreta += digitosRg[i];
				}
			}
        return (respCorreta == numeroDigitado);
		break;
		case 2:
			var dtNasc = dados['ObterPID']['DTNASC']; 
			diaMesNasc = dtNasc.split("/");
			var respCorreta = diaMesNasc[0] + diaMesNasc[1];
			return (respCorreta == numeroDigitado);
			break;
		case 3:
			dtNasc = dados['ObterPID']['DTNASC'];
			anoNasc = dtNasc.split("");
			var respCorreta = anoNasc[8] + anoNasc[9]; 
			return (respCorreta == numeroDigitado);
			break;
		default:
			return false;
			break;
	}
}

function verCPFPID(dados){
	var cpf = dados['BDD1']['Cpf'];
	var digitosCPF = cpf.split("");
	var respCorreta = "";
	for (var i = 0; i < 3; i++){
		respCorreta += digitosCPF[i];
	}
	return respCorreta
}

function getvalidaSenha(dados) {

	var senha = dados['senha'];
	
	if ( !senha || senha.length != 4
		|| senha == "0000"
		|| senha == "1111"
		|| senha == "2222" 
		|| senha == "3333" 
		|| senha == "4444" 
		|| senha == "5555" 
		|| senha == "6666"
		|| senha == "7777"
		|| senha == "8888" 
		|| senha == "9999" )
		return false;
	
	var retornoCrescente = ordemCrescente(senha);
	var retornoDeCrescente = ordemDeCrescente(senha);
	
	if(retornoCrescente == true || retornoDeCrescente == true ) {
		return false;
	} else {
		return true;
	}
}



function ordemCrescente(senha) {

	var sequencia = true;
	var senha = senha;
	
	for (var i = 0; i < senha.length; i++) {
		var digitoAtual = senha.substring(i, i + 1);
		
		if (i > 0) {
			var digitoAnterior = senha.substring(i - 1, i);
			
				// testa sequencia
				if (sequencia == true) {
					if (parseInt(digitoAnterior) + 1 != parseInt(digitoAtual)) {
						sequencia = false;
					}
				}

			}

		}
		
		if (sequencia == true) {
			return sequencia;
		} else  {
			return sequencia;
		}
	}

	function ordemDeCrescente(senha) {

	var sequencia = true;
	var senha = senha;
	
	for (var i = 0; i < senha.length; i++) {
		var digitoAtual = senha.substring(i, i + 1);
		
		if (i > 0) {
			var digitoAnterior = senha.substring(i - 1, i);
			
				// testa sequencia
				if (sequencia == true) {
					if (parseInt(digitoAnterior) - 1 != parseInt(digitoAtual)) {
						sequencia = false;
					}
				}

			}

		}
		
		if (sequencia == true) {
			return sequencia;
		} else  {
			return sequencia;
		}
	}
	
// --> Anderson Sales
// RN24 fn_VerPIDPossivel  -->
	// RN24 fn_VerPIDPossivel  -->
	function fn_VerPIDPossivel (dados){  
		
		  __Log('dados.iLimitePerguntasPID --> ' + JSON.stringify(dados.iLimitePerguntasPID));
          __Log('dados.iMaxPerguntasComportamentais --> ' + JSON.stringify(dados.iMaxPerguntasComportamentais));
          __Log('dados.iMaxPerguntasCadastrais --> ' + JSON.stringify(dados.iMaxPerguntasCadastrais));
          __Log('dados.iLimitePerguntasCadastrais --> ' + JSON.stringify(dados.iLimitePerguntasCadastrais));
          __Log('dados.iLimitePerguntasComportamentais --> ' + JSON.stringify(dados.iLimitePerguntasComportamentais));
      
	    
	    var iNroPerguntasMetade = 0;
	    var iRestoNroPerguntas = 0;    
	    dados['fn_VerPIDPossivel'] = false;

	    if (dados['iLimitePerguntasPID'] == 0) {
	        // EnviaConsulta , EVT_C_2220 ' = 2220 ; 
	        dados['fn_VerPIDPossivel'] = false;        
	    } else {
	        if ((dados['iMaxPerguntasCadastrais'] + dados['iMaxPerguntasComportamentais']) < dados['iLimitePerguntasPID']) {
	            // EnviaConsulta , EVT_C_2220 ' = 2220   'Sem Perguntar PID
	            dados['fn_VerPIDPossivel'] = false;            
	        } else {
	            iNroPerguntasMetade = dados['iLimitePerguntasPID'] / 2;
	            iRestoNroPerguntas = dados['iLimitePerguntasPID'] % 2;            
	            if (iRestoNroPerguntas == 0) {
	                if ((iNroPerguntasMetade <= dados['iMaxPerguntasComportamentais']) && (iNroPerguntasMetade <= dados['iMaxPerguntasCadastrais'])) {                    
	                    dados['iLimitePerguntasComportamentais'] = iNroPerguntasMetade;
	                    dados['iLimitePerguntasCadastrais'] = iNroPerguntasMetade;
	                } else if (iNroPerguntasMetade <= dados['iMaxPerguntasComportamentais']) {
	                    if (dados['iMaxPerguntasCadastrais'] == 0) {
	                        dados['iLimitePerguntasComportamentais'] = dados['iLimitePerguntasPID'];
	                        dados['iLimitePerguntasCadastrais'] = 0;                        
	                    } else {
	                        dados['iLimitePerguntasComportamentais'] = (dados['iLimitePerguntasPID'] - dados['iMaxPerguntasCadastrais']);
	                        dados['iLimitePerguntasCadastrais'] = dados['iMaxPerguntasCadastrais'];                        
	                    }
	                } else if (iNroPerguntasMetade <= dados['iMaxPerguntasCadastrais']){
	                    if (dados['iMaxPerguntasComportamentais'] == 0) {
	                        dados['iLimitePerguntasComportamentais'] = 0;
	                        dados['iLimitePerguntasCadastrais'] = dados['iLimitePerguntasPID'];
	                    } else {
	                        dados['iLimitePerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'];
	                        dados['iLimitePerguntasCadastrais'] = (dados['iLimitePerguntasPID'] - ['iMaxPerguntasComportamentais']);
	                    }
	                }
	            } else {
	                if ((iNroPerguntasMetade <= dados['iMaxPerguntasComportamentais']) && ((iNroPerguntasMetade + 1) <= dados['iMaxPerguntasCadastrais'])) {
	                    dados['iLimitePerguntasComportamentais'] = iNroPerguntasMetade;
	                    dados['iLimitePerguntasCadastrais'] = iNroPerguntasMetade + 1;
	                } else if ((iNroPerguntasMetade <= dados['iMaxPerguntasComportamentais'])) {
	                    if (dados['iMaxPerguntasCadastrais'] == 0) {
	                        dados['iLimitePerguntasComportamentais'] = dados['iLimitePerguntasPID'];
	                        dados['iLimitePerguntasCadastrais'] = 0;    
	                    } else {
	                        dados['iLimitePerguntasComportamentais'] = dados['iLimitePerguntasPID'] - dados['iMaxPerguntasCadastrais'];
	                        dados['iLimitePerguntasCadastrais'] = dados['iMaxPerguntasCadastrais']; 
	                    }   
	                } else if (iNroPerguntasMetade <= dados['iMaxPerguntasCadastrais']) {
	                    if (dados['iMaxPerguntasComportamentais'] == 0) {
	                        dados['iLimitePerguntasComportamentais'] = 0;
	                        dados['iLimitePerguntasCadastrais'] = dados['iLimitePerguntasPID']; 
	                    } else {
	                        dados['iLimitePerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'];
	                        dados['iLimitePerguntasCadastrais'] = dados['iLimitePerguntasPID'] - dados['iMaxPerguntasComportamentais'];    
	                    }
	                }
	            }           

	            var strAuxORGLogo = (dados['sORGCartao']) + (dados['sLogoCartao']) + ';';            
	            var strAuxORG = (dados['sORGCartao']) + ';';

	            if (PossuiOrgLogo(dados.parametros.ListaPIDCNPJ,strAuxORGLogo)) {
	                dados['bListaPIDCNPJ'] = true;
	            } else if (PossuiOrgLogo(dados.parametros.ListaPIDCNPJ,strAuxORG)) {
	                dados['bListaPIDCNPJ'] = true;
	            } else {
	                dados['bListaPIDCNPJ'] = false;
	            }

	            dados['fn_VerPIDPossivel'] = true;
	        }
	    }
	    return dados;
	}
// RN24 fn_VerPIDPossivel <--

// AutenticaPodePID RN23 -->
function VerificaDadosPerguntasPID (dados){

    var vDadosCadastral = [];
    var vDadosComportamental = [];

    //vDadosCadastral['PID'] = [];
    //vDadosComportamental['PID'] = [];

    dados['iMaxPerguntasCadastrais'] = 0;
    dados['iMaxPerguntasComportamentais'] = 0;

    if(dados['UR80']['AplDtNascimento'] != '') {
        if (dados['UR80']['AplFlagIdDtNascimento'] == '0') {
            dados['iMaxPerguntasCadastrais'] = dados['iMaxPerguntasCadastrais'] + 3;                        
            vDadosCadastral.push('DADOS_PID_DIA_NASCIMENTO');
            vDadosCadastral.push('DADOS_PID_MES_NASCIMENTO');
            vDadosCadastral.push('DADOS_PID_ANO_NASCIMENTO');
            dados['sListaDadosPIDCadastral'] = vDadosCadastral;
        }else {
            dados['iMaxPerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'] + 3;             
            vDadosComportamental.push('DADOS_PID_DIA_NASCIMENTO');
            vDadosComportamental.push('DADOS_PID_MES_NASCIMENTO');
            vDadosComportamental.push('DADOS_PID_ANO_NASCIMENTO');            
            dados['sListaDadosPIDComportamental'] = vDadosComportamental;
       }       
    }
  
    if(dados['UR80']['AplNrCPF'] != '') {
        if (dados['UR80']['AplFlagIdNrCPF'] == '0') {
            dados['iMaxPerguntasCadastrais'] = dados['iMaxPerguntasCadastrais'] + 1;
            vDadosCadastral.push('DADOS_PID_CPF_CNPJ');                
            dados['sListaDadosPIDCadastral'] = vDadosCadastral;
        } else {
            dados['iMaxPerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'] + 1; 
            vDadosComportamental.push('DADOS_PID_CPF_CNPJ');
            dados['sListaDadosPIDComportamental'] = vDadosComportamental;          
        }
    }    

    if(dados['UR80']['AplDiaVectoCartao'] != '') {
        if (dados['UR80']['AplFlagIdDiaVectoCartao'] == '0') {
            dados['iMaxPerguntasCadastrais'] = dados['iMaxPerguntasCadastrais'] + 1;               
            vDadosCadastral.push('DADOS_PID_VENC_FATURA');
            dados['sListaDadosPIDCadastral'] = vDadosCadastral;
        } else {
            dados['iMaxPerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'] + 1;
            vDadosComportamental.push('DADOS_PID_VENC_FATURA');
            dados['sListaDadosPIDComportamental'] = vDadosComportamental;        
        }
    }    

    if ( (dados['UR80']['AplValidadeCartao'] != '') && (dados['UR80']['AplTipoCartaoTarjaOuChip'] != '1') ){
        if (dados['UR80']['AplFlagIdValidadeCartao'] == '0') {
            dados['iMaxPerguntasCadastrais'] = dados['iMaxPerguntasCadastrais'] + 1;               
            vDadosCadastral.push('DADOS_PID_VALIDADE');
            dados['sListaDadosPIDCadastral'] = vDadosCadastral;
        } else {
            dados['iMaxPerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'] + 1;
            vDadosComportamental.push('DADOS_PID_VALIDADE');
            dados['sListaDadosPIDComportamental'] = vDadosComportamental;
        }
    }    

    if ( dados['UR80']['AplCVV_CVCCartao'] != '' && dados['UR80']['AplTipoCartaoTarjaOuChip'] != '1' ){
        if (dados['UR80']['AplFlagIdCVV_CVCCartao'] == '0') {
            dados['iMaxPerguntasCadastrais'] = dados['iMaxPerguntasCadastrais'] + 1;               
            vDadosCadastral.push( 'DADOS_PID_CVV_CVC');
            dados['sListaDadosPIDCadastral'] = vDadosCadastral;
        } else {
            dados['iMaxPerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'] + 1;
            vDadosComportamental.push('DADOS_PID_CVV_CVC');
            dados['sListaDadosPIDComportamental'] = vDadosComportamental;
        }
    }    

    if ( dados['UR80']['AplPossuiCartaoAdicional'] == 'S' || dados['UR80']['AplPossuiCartaoAdicional'] == 'N' ){
        if (dados['UR80']['AplFlagIdPossuiCartaoAdicional'] == '0') {
            dados['iMaxPerguntasCadastrais'] = dados['iMaxPerguntasCadastrais'] + 1;               
            vDadosCadastral.push('DADOS_PID_POSSUI_ADICIONAL');
            dados['sListaDadosPIDCadastral'] = vDadosCadastral;
        } else {
            dados['iMaxPerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'] + 1;
            vDadosComportamental.push('DADOS_PID_POSSUI_ADICIONAL');
            dados['sListaDadosPIDComportamental'] = vDadosComportamental;
        }
    }    

    if (dados['UR80']['AplPossuiProtecaoPerdaRoubo'] == 'S' || dados['UR80']['AplPossuiProtecaoPerdaRoubo'] == 'N'){
        if (dados['UR80']['AplFlagIdPossuiProtecaoPerdaRoubo'] == '0') {
            dados['iMaxPerguntasCadastrais'] = dados['iMaxPerguntasCadastrais'] + 1;               
            vDadosCadastral.push('DADOS_PID_POSSUI_SEGURO_PROTECAO_PR');
            dados['sListaDadosPIDCadastral'] = vDadosCadastral;
        } else {
            dados['iMaxPerguntasComportamentais'] = dados['iMaxPerguntasComportamentais'] + 1;
            vDadosComportamental.push('DADOS_PID_POSSUI_SEGURO_PROTECAO_PR');
            dados['sListaDadosPIDComportamental'] = vDadosComportamental;
        }
    }   
    
    __Log('######### dados.sListaDadosPIDCadastral : ' + JSON.stringify(dados.sListaDadosPIDCadastral));
    __Log('######### dados.sListaDadosPIDComportamental : ' + JSON.stringify(dados.sListaDadosPIDComportamental));

    return dados;
}
// AutenticaPodePID RN23 <--

// SelecionaPerg RN25 -->
function SelecionaPerg (dados){ 
	
	dados['eDadosPID'] = 'DADOS_PID_NENHUM';
	var achou = false
	
	
    do {        
        if (dados.iQtdePerguntasFeitas < dados.iLimitePerguntasPID) {
            if (dados.iQtdePerguntasCadastrais < dados.iLimitePerguntasCadastrais) {
                dados.sListaDadosPID = dados.sListaDadosPIDCadastral;                                
                dados['iPID'] = 'CA' + Math.floor( Math.random() * (dados.iMaxPerguntasCadastrais ));
            } else if (dados.iQtdePerguntasComportamentais < dados.iLimitePerguntasComportamentais) {
                dados.sListaDadosPID = dados.sListaDadosPIDComportamental; 
                dados['iPID'] = 'CO' + Math.floor( Math.random() * (dados.iMaxPerguntasComportamentais));
            } else{
            	achou = true
            }
            
            
            __Log('dados.sListaDadosPID --> ' + JSON.stringify(dados.sListaDadosPID));
            __Log('dados.iPID.sub --> ' + JSON.stringify(dados['iPID'].substring(2, 3)));
            __Log('PIDAnterior --> ' + JSON.stringify(dados['PIDAnterior']));
            __Log('dados.iQtdePerguntasFeitas --> ' + JSON.stringify(dados.iQtdePerguntasFeitas));
            __Log('dados.iLimitePerguntasPID --> ' + JSON.stringify(dados.iLimitePerguntasPID));
            __Log('dados.iQtdePerguntasCadastrais --> ' + JSON.stringify(dados.iQtdePerguntasCadastrais));
            __Log('dados.iLimitePerguntasCadastrais --> ' + JSON.stringify(dados.iLimitePerguntasCadastrais));
            __Log('dados.iQtdePerguntasComportamentais --> ' + JSON.stringify(dados.iQtdePerguntasComportamentais));
            __Log('dados.iLimitePerguntasComportamentais --> ' + JSON.stringify(dados.iLimitePerguntasComportamentais));
            __Log('dados.iMaxPerguntasCadastrais --> ' + JSON.stringify(dados.iMaxPerguntasCadastrais));
            __Log('dados.iMaxPerguntasComportamentais --> ' + JSON.stringify(dados.iMaxPerguntasComportamentais));
            
            var posicao = parseInt(dados['iPID'].substring(2, 3));
           
            __Log('posicao --> ' + posicao);
        
            if (posicao >= 0){
				if (dados['PIDAnterior'].indexOf(dados['iPID']) < 0){
					
					switch (posicao) {                    
						case 0:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];
							break;
						case 1:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];               
							break;
						case 2:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];
							break;
						case 3:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];
							break;              
						case 4:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];
							break;
						case 5:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];
							break; 
						case 6:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];
							break; 
						case 7:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];
							break; 
						case 8:                        
							dados['eDadosPID'] = dados.sListaDadosPID[posicao];
							break;
						default:
							__Log('iPID --> ' + JSON.stringify('teste'));
							dados['eDadosPID'] = 'DADOS_PID_NENHUM';                        
					}
					if(dados['eDadosPID'] == 'DADOS_PID_NENHUM'){						
                        achou = true
					}else{
                        achou = true
                        //'adiciona na string a escolha, foi o melhor jeito de saber se a
                        //'pergunta já não havia sido apresentada.
                        dados['PIDAnterior'] = dados['PIDAnterior'] + dados['iPID']+ ";";
                    }
				}

            }            
        }else{
			achou = true
		}
    } while (!achou);
  
    
    return dados;    
}

// SelecionaPerg RN25 <--

// <-- Anderson Sales	

// Rodrigo Pereira - Inicio

function getSelecionaCartao(dados) {

	var objListaCartoes = new Object();
	var parametros = dados['parametros'];			
	var qtdListCartao = parseInt(dados['KQB2_21']['Ocorrencia'].length); 	
		
	var listCartao = [];
	var listCartaoAtivo = [];
	var listCartaoInativo = [];

	for (var i = 0; i < qtdListCartao; i++) {
		var wLista = new Object();

		if ((dados['KQB2_21']['Ocorrencia'][i]['Pessoa'] == 'F' && (dados['KQB2_21']['Ocorrencia'][i]['Titularidade'] == 'T' || _
			(dados['KQB2_21']['Ocorrencia'][i]['Titularidade'] == 'T' && dados['KQB2_21']['Ocorrencia'][i]['Espelho'] == 'S'))) || dados['KQB2_21']['Ocorrencia'][i]['Pessoa'] == 'J') {

		   	wLista.NumCartao = dados['KQB2_21']['Ocorrencia'][i]['NumCartao'];
			wLista.Validade = dados['KQB2_21']['Ocorrencia'][i]['Validade'];
			wLista.Pessoa = dados['KQB2_21']['Ocorrencia'][i]['Pessoa'];
			wLista.FillerA = dados['KQB2_21']['Ocorrencia'][i]['FillerA'];
			wLista.Titularidade = dados['KQB2_21']['Ocorrencia'][i]['Titularidade'];
			wLista.Espelho = dados['KQB2_21']['Ocorrencia'][i]['Espelho'];
			wLista.Ficticio = dados['KQB2_21']['Ocorrencia'][i]['Ficticio'];
			wLista.Status = dados['KQB2_21']['Ocorrencia'][i]['Status'];
			wLista.DataStatus = dados['KQB2_21']['Ocorrencia'][i]['DataStatus'];
			wLista.CodProduto = dados['KQB2_21']['Ocorrencia'][i]['CodProduto'];
			wLista.CodSubProduto = dados['KQB2_21']['Ocorrencia'][i]['CodSubProduto'];
			wLista.ReasonCode = dados['KQB2_21']['Ocorrencia'][i]['ReasonCode'];
			wLista.FillerB = dados['KQB2_21']['Ocorrencia'][i]['FillerB'];

			listCartao.push(wLista);
			
			if (dados['KQB2_21']['Ocorrencia'][i]['Status'] == parametros["IdCPF_StatusAtivo"]) {
				listCartaoAtivo.push(wLista);	
				objListaCartoes.ListCartaoAtivo = listCartaoAtivo;
			}


			var data1 = formataDataAtual("ddMMyyyy"); // *****Importante : o formato da data deve estar igual ao que a funcao espera
			var data2 = dados['KQB2_21']['Ocorrencia'][i]['DataStatus']; //.replace("-", "");
		
			if (diferencaEntreDatas(data1, data2) > 0 && diferencaEntreDatas(data1, data2) <= parseInt(parametros.IdCPF_TempoBloqueioCartao )) { // Confirmar regra de negocio, enviado email ao banco
				listCartaoInativo.push(wLista);
				objListaCartoes.ListCartaoInativo = listCartaoInativo;			
			}				
		}		
		objListaCartoes.ListCartao = listCartao;				
	}	
	return objListaCartoes;
}

function getBuscaCartoesBandeira(dados) {
	
	var objListaCartoesBandeira = new Object();
	var temBandeira = false;
	var bandeira = dados['sBandeiraEscolhida'];	
	var qtdListCartao = parseInt(dados['ListCartao']['ListCartaoAtivo'].length); 
	
	var iCartoesNaBandeira = 0;
	var listCartaoBandeira = [];

	for (var i = 0; i < qtdListCartao; i++) {
		var obj_ListaCartoes = new Object();
				
		obj_ListaCartoes.CodProduto = dados['ListCartao']['ListCartaoAtivo'][i]['CodProduto'];
				
		if (obj_ListaCartoes.CodProduto == bandeira && obj_ListaCartoes.CodProduto != '' ) { // Confirmar regra de negocio, enviado email ao banco
			obj_ListaCartoes.temBandeira = true;
			iCartoesNaBandeira = iCartoesNaBandeira + 1;
			obj_ListaCartoes.NumCartao = dados['ListCartao']['ListCartaoAtivo'][i]['NumCartao'];
			obj_ListaCartoes.Pessoa = dados['ListCartao']['ListCartaoAtivo'][i]['Pessoa'];

			listCartaoBandeira.push(obj_ListaCartoes);
			
		}	
			objListaCartoesBandeira.iCartoesNaBandeira = {};
			objListaCartoesBandeira.iCartoesNaBandeira = iCartoesNaBandeira;
			objListaCartoesBandeira.ListCartaoBandeira = listCartaoBandeira;
	}
	
	
	return objListaCartoesBandeira;
}

function habilitaBandeiraAV (dados) {

	var habilitaBandeiraAV = false;
	var Habilita_Autent_AvisoViagem = dados['parametros']['Bandeiras_Autent_Aviso_Viagem'];
	var sBandeira = dados['sBandeira'];

	if (Habilita_Autent_AvisoViagem == true) {
		habilitaBandeiraAV = true;
	} else if (sBandeira.substring(1,1) == Habilita_Autent_AvisoViagem) {
		habilitaBandeiraAV = true;
	}
	return habilitaBandeiraAV;
	}

//15032022
function verTitular (dados) {

	var bEhCartaoHSBC = dados['bEhCartaoHSBC'];
	var bTitular = dados['bTitular'];
	var bSeguirTitularXS = dados['bSeguirTitularXS'];
	var sTipoPessoa = dados['sTipoPessoa'];
	var bEhCartaoComChip = dados['bEhCartaoComChip'];
	var direcionaFluxo = '';

	if (bEhCartaoHSBC == 'false') {
		if ((bTitular == 'true' || bSeguirTitularXS == 'true') && sTipoPessoa == 'F' )  {
			direcionaFluxo = 'EAVM_KQB2_26';
		} else {
			if (bEhCartaoComChip == 'true') {
				if (sTipoPessoa == 'F') {
					direcionaFluxo = 'EAVM_KQB2_26';
				}else {
					direcionaFluxo = 'EAVM_SenhaCartao';
				}
			} else {
				if (sTipoPessoa == 'F') {
					direcionaFluxo = 'EAVM_KQB2_26';
				}else {
					direcionaFluxo = 'EAVM_VerPJ';
				}
			}
		}
	} else {

		if (sTipoPessoa == 'F') {
			direcionaFluxo = 'EAVM_KQB2_26';
		}else {
			direcionaFluxo = 'EAVM_HSBC_SenhaCartao';
		}

	}
	return direcionaFluxo;
	
}

function trata_HSBC_KQB2_14 (dados) {

	if (dados != '' || dados != undefined  ) {
		if (dados['bCPF_PerdaRoubo'] == true) {
			if (dados['OpMenuPR_FH'] == 'Op_Despesas') {
				dados['sVDNDados'] = RetornaVDN_DespesaNegada(dados);
				dados['direcionaFluxo'] = 'EAVM_FalaDeriva';
			} else {
				dados['direcionaFluxo'] = 'EAVM_MenuPerdaRoubo';
			}
		} else if (dados['iValidando'] == 'V_SENHA_CARTAO') {
			if (dados['iSenhaCartaoValidada'] == 'AUTENT_APTO_OK') {
				if(dados['bAtendimentoIngles'] == true) {
					dados['direcionaFluxo'] = 'EAVM_FalaDeriva';
				} else if (dados['bEhCartaoHSBC_DE'] == true) {
					if( dados['bEhMenuReduzidoHsbcDE'] == true ) {
						dados['direcionaFluxo'] = 'EAVM_SaidaCartao';
					} else {
						dados['direcionaFluxo'] = 'EAVM_FalaDeriva';
					}
				} else {
					if( dados['bServicoMwallet'] == true ) {
						dados['direcionaFluxo'] = 'EAVM_FalaDeriva';
					} else if (dados['bServicoDesbloqueio'] == true) {
						dados['direcionaFluxo'] = 'EAVM_HSBC_AgenciaConta';
					} else if (dados['bServicoSenhaCartao'] == true) {
						dados['direcionaFluxo'] = 'EAVM_HSBC_AgenciaConta';
					} else if (dados['bServicoAvisoViagem'] == true) {
						dados['sVDNDados'] = RetornaVDN_AvisoViagem(dados);
						dados['direcionaFluxo'] = 'EAVM_FalaDeriva';
					} else if (dados['bServicoFidelidade'] == true) {
						dados['direcionaFluxo'] = 'EAVM_Fid_MenuLivelo';
					} else if (dados['bServicoSaldosLimites'] == true) {
						if (dados['bEhAltaRenda'] == true) {
							dados['estatisticaConsulta'] = '631';
						} else {
							dados['estatisticaConsulta'] = '617';
						}
						dados['direcionaFluxo'] = 'EAVM_VerSaldoCredor';
					} else {
						dados['direcionaFluxo'] = 'EAVM_SaidaCartao';
					}
				}

			} else {
				dados['estatisticaConsulta'] = '721';
				if (dados['bAtendimentoIngles'] == true) {
					dados['direcionaFluxo'] = 'EAVM_FalaDeriva';
				} else if (dados['bEhMenuReduzidoHsbcDE'] == true) {
					dados['direcionaFluxo'] = 'EAVM_SaidaCartao';
				} else {
					if(dados['bCartaoBloqueado'] == false) {
						dados['direcionaFluxo'] = 'EAVM_HSBC_MenuSenhaInvalida';
					} else {
						dados['direcionaFluxo'] = 'EAVM_SaidaCartao';
					}
				}
			}

		} else {
			if(dados['bEhCartaoHSBC_DE'] == true) {
				if(dados['bEhMenuReduzidoHsbcDE'] == true) {
					dados['direcionaFluxo'] = 'EAVM_SaidaCartao';
				} else {
					dados['estatisticaConsulta'] = '356';
					dados['direcionaFluxo'] = 'EAVM_FalaDeriva';
				}
				dados['estatisticaConsulta'] = '721';
			} else {
				if(dados['bJaFalouPreSaldo'] == false) {
					dados['direcionaFluxo'] = 'EAVM_SaidaCartao';
				} else {
					dados['direcionaFluxo'] = 'EAVM_DecideMenu';
				}
			}
		}
	}
	return dados;	
}

function RetornaVDN_AvisoViagem(dados) {
	// precisa entender como ficara a derivacao para construir ou nao esta funcao
	var vdn = '9876543';

	return vdn;
}

function RetornaVDN_DespesaNegada(dados) {
	// precisa entender como ficara a derivacao para construir ou nao esta funcao
	var vdn = '123456';

	return vdn;
}


function verificaNumA_LojasCEAInibeOpParcFat(dados) {

	if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_1'].indexOf(dados['NumA']) >= 0 ) {
	 	return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_1'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_3'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_4'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_5'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_6'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_7'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_8'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_9'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_10'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_11'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_12'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_13'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_14'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_15'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_16'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_17'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_18'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_19'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_20'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_21'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_22'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_23'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_24'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_25'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_26'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_27'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_28'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_29'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEAInibeOpParcFat_30'].indexOf(dados['NumA']) >= 0) {
		return true;
	}

	return false;
}

function verificaNumA_LojasCEA(dados) {

	if (dados['parametros']['TelefonesLojasCEA_1'].indexOf(dados['NumA']) >= 0 ) {
	 	return true;
	} else if (dados['parametros']['TelefonesLojasCEA_2'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_3'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_4'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_5'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_6'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_7'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_8'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_9'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_10'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_11'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_12'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_13'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_14'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_15'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_16'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_17'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_18'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_19'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_20'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_21'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_22'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_23'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_24'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_25'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_26'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_27'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_28'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_29'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_30'].indexOf(dados['NumA']) >= 0) {
		return true;
	}

	return false;
}

function verificaNumA_TelefonesLojasCEA_P1(dados) {

	if (dados['parametros']['TelefonesLojasCEA_P1_1'].indexOf(dados['NumA']) >= 0 ) {
	 	return true;
	} else if (dados['parametros']['TelefonesLojasCEA_P1_2'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_P1_3'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_P1_4'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_P1_5'].indexOf(dados['NumA']) >= 0) {
		return true;
	} else if (dados['parametros']['TelefonesLojasCEA_P1_6'].indexOf(dados['NumA']) >= 0) {
		return true;
	}
	return false;
}

function setSubEventoDDD(dados) {
	
	var ddd = dados['NumA'].substring(0, 2);

	var evento = '4';

	switch (ddd) {
		case '11':
		case '12':
		case '13':
		case '14':
		case '15':
		case '16':
		case '17':
		case '18':
		case '19':
		case '21':
		case '22':
		case '24':
		case '27':
		case '28':
		case '31':
		case '32':
		case '33':
		case '34':
		case '35':
		case '37':
		case '38':
		case '41':
		case '42':
		case '43':
		case '44':
		case '45':
		case '46':
		case '47':
		case '48':
		case '49':
		case '51':
		case '53':
		case '54':
		case '55':
		case '59':
		case '61':
		case '62':
		case '63':
		case '64':
		case '65':
		case '66':
		case '67':
		case '68':
		case '69':
		case '71':
		case '73':
		case '74':
		case '75':
		case '77':
		case '79':
		case '81':
		case '82':
		case '83':
		case '84':
		case '85':
		case '86':
		case '87':
		case '88':
		case '89':
		case '91':
		case '92':
		case '93':
		case '94':
		case '95':
		case '96':
		case '97':
		case '98':
		case '99':
			evento = ddd;
			break;
	}

	return evento;

}

function isNumeric(str) {  
    var er = /^[0-9]+$/;  
    return (er.test(str));
}


function EhCartaoValidoBloqueio(dados, indice) { //RN03

	var EhCartaoValidoBloqueio = false;
	var i = indice;

	switch(dados['UR8FCartoes'][i]['CodBloqCartao']){
		case 'H':
		case 'M':
		case 'J':
		case 'A':
		case ' ':
		case 'B':
		case 'F':
			EhCartaoValidoBloqueio = true;
			break;
	}
	
	if ( (dados['UR8FCartoes'][i]['ORG'].indexOf("888;889") >= 0 )) {  
		EhCartaoValidoBloqueio = false;
	}

    return EhCartaoValidoBloqueio;
}

// Rodrigo Pereira - Fim

//Gustavo Gamez Inicio
function fn_ver_ura_atendimentoByBIN(dados){

    var bErro = false;
    var bValidParam = True;
    var fn_ver_ura_atendimentoByBIN = 0;
 
    if ( dados.AplCliente.CartaoNum.length ==  16 ) {
        switch (dados.AplCliente.CartaoNum.substring(1,1)){
            case ('4'):
            case ('5'):
            case ('6'):
            case ('7'):
               
                dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
               
                if ( fn_Equal_BIN(dados.sAplBINMAKRO)) {
                    dados['iAplUraSistema'] = 'APL_SIST_MAKRO';
                } else if (fn_Equal_BIN(dados.sAplBINMAFRE)){
                    dados['iAplUraSistema'] = 'APL_SIST_MAFRE';
                } else if (fn_Equal_BIN(dados.sAplBINAngeloni)) {
                    dados['iAplUraSistema'] = 'APL_SIST_ANGELONI';
                } else if (fn_Equal_BIN(dados.sAplBINJEANS)) {
                    dados['iAplUraSistema'] = 'APL_SIST_JEANS';
                } else if (fn_Equal_BIN(dados.sAplBINIguatemi)) {
                    dados['iAplUraSistema'] = 'APL_SIST_BELEM';
                } else if (fn_Equal_BIN(dados.sAplBINIbicredVision)) {
                    dados['bAplBinIbicredIsVisio'] = true;
                    dados['iAplUraSistema'] = 'APL_URA_IBICRED';
                    dados['iAplUraSistema'] = 'APL_SIST_IBICRED';
                }else if (fn_Equal_BIN(dados.sAplBINIbicredTools)) {
                    dados['bAplBinIbicredIsVisio'] = false
                    dados['iAplUraSistema'] = 'APL_URA_IBICRED';
                    dados['iAplUraSistema'] = 'APL_SIST_IBICRED';
                }else if (fn_Equal_BIN(dados.sAplBINArcoiris)) {
                    dados['iAplUraSistema'] = 'APL_URA_PARCEIROS';
                    dados['iAplUraSistema'] = 'APL_SIST_ARCOIRIS';
                }else if (fn_Equal_BIN(dados.sAplBINRondelli)){
                    dados['iAplUraSistema'] = 'APL_URA_PARCEIROS';
                    dados['iAplUraSistema'] = 'APL_SIST_RONDELLI';
                }else if (fn_Equal_BIN(dados.sAplBINCATTAN)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_CATTAN';
                }else if (fn_Equal_BIN(dados.sAplBINCANOAS)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_CANOAS';
                }else if (fn_Equal_BIN(dados.sAplBINCOLOMBO)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_COLOMBO';
                }else if (fn_Equal_BIN(dados.sAplBINESKALA)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_ESKALA';
                }else if (fn_Equal_BIN(dados.sAplBINBAKLIZI)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_BAKLIZI';
                }else if (fn_Equal_BIN(dados.sAplBINMAKENJI)) {
                    dados['iAplUraSistema'] = 'APL_URA_PARCEIROS';
                    dados['iAplUraSistema'] = 'APL_SIST_MAKENJI';
                }else if (fn_Equal_BIN(dados.sAplBINModelo)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_MODELO';
                }else if (fn_Equal_BIN(dados.sAplBINMateus)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_MATEUS';
                }else if (fn_Equal_BIN(dados.sAplBINShopTatuape)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_SHOPTATUAPE';
                }else if (fn_Equal_BIN(dados.sAplBINDorinhos)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_DORINHOS';
                }else if (fn_Equal_BIN(dados.sAplBINExpressMaster)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_EXPRESSMASTER';
                }else if (fn_Equal_BIN(dados.sAplBINElo)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_ELO';
                }else if (fn_Equal_BIN(dados.sAplBINLeBiscuit)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_LEBISCUIT';
                }else if (fn_Equal_BIN(dados.sAplBINLojasRede)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_LOJASREDE';
                }else if (fn_Equal_BIN(dados.sAplBINPagueMenos)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_PAGUEMENOS';
                }else if (fn_Equal_BIN(dados.sAplBINTNG)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_TNG';
                }else if (fn_Equal_BIN(dados.sAplBINTELERIO)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_TELERIO';
                }else if (fn_Equal_BIN(dados.sAplBINBradescard)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_BRADESCARD';
                }else if (fn_Equal_BIN(dados.sAplBINBradescardElo)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_ELO_BRADESCARD';
                }else if (fn_Equal_BIN(dados.sAplBINPassarela)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_PASSARELA';
                }else if (fn_Equal_BIN(dados.sAplBINComper)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_COMPER';
                }else if (fn_Equal_BIN(dados.sAplBINSportCard)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_SPORTCARD';
                }else if (fn_Equal_BIN(dados.sAplBINLojasAmericanas)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_LOJASAMERICANAS';
                }else if (fn_Equal_BIN(dados.sAplBINCeC)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_CeC';
                }else if (fn_Equal_BIN(dados.sAplBINCarajas)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplUraSistema'] = 'APL_SIST_CARAJAS';
                }else if (fn_Equal_BIN(dados.sAplBINFujioka)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplOrgSistema'] = 'APL_SIST_FUJIOKA';
                }else if (fn_Equal_BIN(dados.sAplBINNossoLar)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplOrgSistema'] = 'APL_SIST_NossoLar';
                }else if (fn_Equal_BIN(dados.sAplBINBradExpresso)) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplOrgSistema'] = 'APL_SIST_BRADESCO_EXPRESSO';
                }else if  (fn_Equal_BIN(dados.sAplBINCasasBahia)){
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                    dados['iAplOrgSistema'] = 'APL_SIST_CASASBAHIA';
                } else {
if (dados.bAplFlgAtivaLuigiBertolliECoop) {
                        if (fn_Equal_BIN(dados.sAplBINLuigi)) {
                            dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                            dados['iAplUraSistema'] = 'APL_SIST_LUIGI';
                        } else if (fn_Equal_BIN(dados.sAplBINCoop)) {
                            dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                            dados['iAplUraSistema'] = 'APL_SIST_COOP';
}
                    } else {
if (fn_Equal_BIN(dados.sAplBINGUANABARA)){
                            dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                            dados['iAplUraSistema']= 'APL_SIST_GUANABARA';
                        } else if (fn_Equal_BIN(dados.sAplBINBistek)) {
                            dados['iAplUraSistema'] = 'APL_URA_BANKCARD';
                            dados['iAplUraSistema'] = 'APL_SIST_BISTEK';
                        }
}
}
       
                if (bValidParam) {
                    if (OrgLogo_ParamTrue(dados.sAplOrgLogoAtivaReordenacao, "AtivaReordenacao")) {
                    dados['iAplUraSistema'] = 'APL_URA_BANKCARD_REORD';
                    }
                }
                break;

            case ('1') : // 'CARTOES'
            dados['iAplUraSistema'] = 'APL_URA_PRIVATE';
            dados['iAplOrgSistema'] = 'APL_SIST_PL_BR';
                break;
default:
bErro = true;
break;              
            }
        }
        if (dados.iAplUraSistema =! '' && (!(bErro))) {
            dados.fn_ver_ura_atendimentoByBIN = 'iAplUraSistema';
        }
return dados;
}





function fn_Equal_BIN(dados,BINs) {

var sBIN = '';
    var pos = '';
    var fn_Equal_BIN = false;

    sBIN = dados.AplCliente.CartaoBin;
    

    if (BINs !=  '' ) {
    _

        if ((isNumeric(sBIN)) && (sBIN > 0)  && (sBIN.length == 6 )) {
     
       
            //'Ver se o BIN esta na Lista de BINs
            //pos = InStr(1, BINs, sBIN);
           
            pos = (BINs.indexOf(sBIN) >= 0 )  

            //  __Log('Teste indexOf: ' + (dados['parametros']['TelefonesLojasCEA_P1_1'].indexOf(dados['numA']) >= 0 ));

            fn_Equal_BIN = (pos);

        }

    }
    return fn_Equal_BIN;

}
   


function OrgLogo_ParamTrue(Param) {
//'Valores Aceitos:
    //'TODOS      - Retorna true para todos
    //'0          - Retorna false para todos
    //'Org/Logo   - Retorna True ou False de acordo com o ORG

    var sParam = '';
    var Param = Param.parametros.OrgLogoAtivaReordenacao;
    var OrgLogo_ParamTrue = false;

    if (Param != '' ) {
        sParam = Param.toUpperCase();
       

        if (sParam.indexOf("TODOS") >= 0 ) {
            OrgLogo_ParamTrue = true;
        }else if ((sParam.length) = 0) {
            OrgLogo_ParamTrue = false;
        }else {
            OrgLogo_ParamTrue = OrgLogo_ValidParam(sParam, False) > 0 ; //'(Função Abaixo)
        }      
    }

}
//Gustavo Gamez FIm

//Luiz Inicio
function trataCRE1_EhTOOLs(dados) {
	  
    if (dados != "" || dados != undefined) { 
        if(dados["iAplOpcaoEntrada"] == "NUMERO_CARTAO") {
			if (dados["sAplBINIbicredVision"].indexOf(dados["AplCliente"]["CartaoBin"]) > 1){
				dados["bAplIbicredModoVISION"] = true;
				dados["l_OpMenu"]  = "eOpFaxFatNenhum";
				if(dados["parametros"]["sAplOrgLogoInibeOuvirBoleto"].indexOf(dados["AplCliente"]["ORG"]) > 1 || (dados["AplCliente"]["ORG"] && ["AplCliente"]["LOGO)"])){
				   dados["bInibeopcaoBoleto"] = true;
				   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
				}else{
				   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
				}
			}else{
				dados["iAplCountTxCPF"] = dados["iAplCountTxCPF"] + 1;
				dados["bAplIbicredModoVISION"] = true;
				dados["l_OpMenu"]  = "eOpFaxFatNenhum";
				if(dados["parametros"]["sAplOrgLogoInibeOuvirBoleto"].indexOf(dados["AplCliente"]["ORG"]) > 1 || (dados["AplCliente"]["ORG"] && ["AplCliente"]["LOGO)"])){
				   dados["bInibeopcaoBoleto"] = true;
				   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
				}else{
				   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
				}
			}
          }else{
             if(dados["sAplBINIbicredTools"].indexOf(dados["AplCliente"]["CartaoBin"])> 1){
                 dados["iCtrlVocOpcLimite"] = 0;
                 dados["l_OpMenu"]  = "eOpFaxFatNenhum";
                 if(dados["parametros"]["sAplOrgLogoInibeOuvirBoleto"].indexOf(dados["AplCliente"]["ORG"])> 1 || (dados["AplCliente"]["ORG"] && ["AplCliente"]["LOGO)"])){
                     dados["bInibeopcaoBoleto"] = true;
                     dados["direcionaFluxo"] = "Host_TxTOOLs"; 
                 }else{
                    dados["direcionaFluxo"] = "Host_TxTOOLs"; 
                 }

             }else{
               dados["direcionaFluxo"] = "CRE1_ColetaCartao2"; 
             }
          }
        }else if(dados["iAplConsultaVisioTOOLs"] == 0){
           dados["iCtrlVocOpcLimite"] = 0;
           dados["l_OpMenu"]  = "eOpFaxFatNenhum";
           if(dados["parametros"]["sAplOrgLogoInibeOuvirBoleto"].indexOf(dados["AplCliente"]["ORG"])> 1 || (dados["AplCliente"]["ORG"] && ["AplCliente"]["LOGO)"])){
               dados["bInibeopcaoBoleto"] = true;
               dados["direcionaFluxo"] = "Host_TxTOOLs"; 
           }else{
               dados["direcionaFluxo"] = "Host_TxTOOLs"; 
           }
        }else if(dados["iAplConsultaVisioTOOLs"] == 1){
            dados["bAplIbicredModoVISION"] = true;
            dados["l_OpMenu"] = "eOpFaxFatNenhum";
            if(dados["parametros"]["sAplOrgLogoInibeOuvirBoleto"].indexOf(dados["AplCliente"]["ORG"])> 1 || (dados["AplCliente"]["ORG"] && ["AplCliente"]["LOGO)"])){
                dados["bInibeopcaoBoleto"] = true;
            }
            if(trim(dados["AplCliente"]["CartaoNum"]) == 16){

            }else{
                dados["AplCliente"]["CartaoNum"] = dados["AplCliente"]["CPF"].substring(0, 16);
            }

            dados["bFalaSistInop"] = true;
            dados["bTocaMusica"] = true;
            dados["iAplRetornoTRANS"] = "TRANS_UR80";
            dados["AplTxBuffer"] = Monta_Tx_UR80();
            dados["AplRxBuffer"] = "";

           dados["direcionaFluxo"] = "Host_TXCICS"; 
        
        }else if(dados["iAplConsultaVisioTOOLs"] == 2){
            if(dados["iAplCountTxCPFMod 2"] == 0){
                dados["iAplCountTxCPF"] = dados["iAplCountTxCPF"] + 1;
                dados["iCtrlVocOpcLimite"] = 0;
                dados["l_OpMenu"]  = "eOpFaxFatNenhum";
                if(dados["parametros"]["sAplOrgLogoInibeOuvirBoleto"].indexOf(dados["AplCliente"]["ORG"])> 1 || (dados["AplCliente"]["ORG"] && ["AplCliente"]["LOGO)"])){
                   dados["bInibeopcaoBoleto"] = true;
                   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
                }else{
                   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
                }
            }else{
                dados["iAplCountTxCPF"] = dados["iAplCountTxCPF"] + 1;
                dados["bAplIbicredModoVISION"] = true;
            }
        }else if(dados["iAplConsultaVisioTOOLs"] == 3){
            if(dados["iAplCountTxCPFMod 2"] == 0){
                dados["iAplCountTxCPF"] = dados["iAplCountTxCPF"] + 1;
                dados["bAplIbicredModoVISION"] = 0;
                dados["l_OpMenu"]  = "eOpFaxFatNenhum";
                if(dados["parametros"]["sAplOrgLogoInibeOuvirBoleto"].indexOf(dados["AplCliente"]["ORG"])> 1 || (dados["AplCliente"]["ORG"] && ["AplCliente"]["LOGO)"])){
                   dados["bInibeopcaoBoleto"] = true;
                   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
                }else{
                   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
                }
            }else{
                dados["iAplCountTxCPF"] = dados["iAplCountTxCPF"] + 1;
                dados["bAplIbicredModoVISION"] = true;
                dados["l_OpMenu"]  = "eOpFaxFatNenhum";
                if(dados["parametros"]["sAplOrgLogoInibeOuvirBoleto"].indexOf(dados["AplCliente"]["ORG"])> 1 || (dados["AplCliente"]["ORG"] && ["AplCliente"]["LOGO)"])){
                   dados["bInibeopcaoBoleto"] = true;
                   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
                }else{
                   dados["direcionaFluxo"] = "Host_TxTOOLs"; 
                }
            }
        }
        return dados;   
    }
    
    

function trata_SelMenu(dados){
    
    if (dados != "" || dados != undefined){
		dados["saida"] = -1;
		if(dados["iAplOrgSistema"] = "APL_SIST_PL_BR"){
			dados["saida"] = 0;
		
		}else if(dados["iAplOrgSistema"] == "APL_SIST_CVC"){
			if(dados["l_PassMenuPre"]){
				trata_auxSelMenu(dados);
			}else{
				dados["saida"] = 2;
				trata_auxSelMenu(dados);
			}
		
		}else if(dados["iAplOrgSistema"] == "APL_SIST_IBICRED"){
			dados["saida"] = 3;
			trata_auxSelMenu(dados);
		
		}else if(dados["iAplOrgSistema"] == "APL_URA_HOTLINE"){
			if(dados["l_PassMenuPre"]){
				trata_auxSelMenu(dados);
			}else{
				dados["saida"] = 1;
				trata_auxSelMenu(dados);
			}
		}
    }
    return dados;   
}


function trata_auxSelMenu(dados){
	if(dados["bPadraoNumAtd"]){
		if(bDesligarPadraoNumAtd){
			adicionaDados(dados, "estatisticaConsulta", "68");
			dados["direcionaFluxo"] = "PegaCartao_Agradece";
		}else{
			adicionaDados(dados, "estatisticaConsulta", "238");
			dados["iRetry"] = 0;
			dados["strAplCodRetDerivacao"] = "DERIV_USUARIO";
			dados["bHabUnificacao"] = true;
			//Call LerParametros();
			dados["saida"] = 6;
			dados["direcionaFluxo"] = "InicioAtd_HotLineMaro";
		}
	}else if(dados["saida"] != 3){
		dados["iRetry"] = 0;
		dados["strAplCodRetDerivacao"] = "DERIV_USUARIO";
		dados["bHabUnificacao"] = true;
		//Call LerParametros();
		dados["direcionaFluxo"] = "InicioAtd_HotLineMaro";
	}else{
		dados["direcionaFluxo"] = "CRE1_RET_MENU";
	}
	
}



function trataCaseCadastraCel(dados) {
    var retorno;
    var ret = {};
	ret["estatistica"] = [];

    if (dados != "" || dados != undefined){
		if(dados["parametros"]["HabAtualizacaoCelular"] == "True"){
			ret["estatistica"].push({ "estatistica" : "2282"});
			ret["estatistica"].push({ "estatistica" : "1053"});
			adicionaDados(dados, "eMenuCelular", "MENU_CELULAR_NENHUM");
			
			if(dados["strAplNumeroA"] == ""){
				ret["estatistica"].push({ "estatistica" : "2073"});
				
				if(dados["sTelefoneCelularCadastrado"] == 0){
					ret["estatistica"].push({ "estatistica" : "2078"});
					adicionaDados(dados, "eMenuCelular", "MENU_CELULAR_CADASTRAR");
					dados["direcionaFluxo"] = "MCadastrarCel";					
				}else{
                    dados["direcionaFluxo"] = "IfSaldoMHotLine";
                }

			}else{
				ret["estatistica"].push({ "estatistica" : "2074"});
                
                retorno = fn_IdentificaTipoTelefoneChamador(dados["strAplNumeroA"], "Fixo");
                
                //valida retorno da funcao
                if (retorno) {
					ret["estatistica"].push({ "estatistica" : "2075"});
                    
                    if (dados["sTelefoneCelularCadastrado"] = 0) {
						ret["estatistica"].push({ "estatistica" : "2080"});
                        
                        adicionaDados(dados, "eMenuCelular", "MENU_CELULAR_CADASTRAR");
					    dados["direcionaFluxo"] = "MCadastrarCel";
                    } else {
						ret["estatistica"].push({ "estatistica" : "2079"});
                        dados["direcionaFluxo"] = "IfSaldoMHotLine";
                    }
                    
                }else if(dados["sTelefoneCelularCadastrado"] = 0) {
					ret["estatistica"].push({ "estatistica" : "2080"});
                    
                    adicionaDados(dados, "eMenuCelular", "MENU_CELULAR_CADASTRAR");
                    dados["direcionaFluxo"] = "MCadastrarCel";
                }else{
					ret["estatistica"].push({ "estatistica" : "2079"});
                }

                if (dados["eTelefoneChamador"] == "TELEFONE_CHAMADOR_CELULAR") {
					ret["estatistica"].push({ "estatistica" : "2076"});
                    ret["estatistica"].push({ "estatistica" : "2081"});
                    
                    adicionaDados(dados, "eMenuCelular", "MENU_CELULAR_CADASTRAR");
                    dados["direcionaFluxo"] = "MCadastrarCel";
                    
                } else {
					ret["estatistica"].push({ "estatistica" : "2079"});
                    
                    retorno = fn_IdentificaTipoTelefoneChamador(dados["strAplNumeroA"], "Celular");

                    if (retorno){
						ret["estatistica"].push({ "estatistica" : "2076"});
                        ret["estatistica"].push({ "estatistica" : "2082"});
                        
                        adicionaDados(dados, "sTelefoneCelularNovo", dados["strAplNumeroA"]);
                        adicionaDados(dados, "eMenuCelular", "MENU_CELULAR_ALTERAR");
                        dados["direcionaFluxo"] = "FalaCelCadastro";
                    }else{
                        dados["direcionaFluxo"] = "IfSaldoMHotLine";
                    }
                }

            }
		}else{
			dados["direcionaFluxo"] = "IfSaldoMHotLine"; 
		}
		
	}
	dados['listaEstatisticas'] = ret["estatistica"];
	
	return dados;
}
//Luiz Fim

//Wanderson INICIO
function fn_NomeTipoCartao(dados, cartaoSelecionado) {
	var ret = "";
	var iORG;
	var iLOGO;
	var wAux;
	var iCartao;
	var parametros = dados['parametros'];

    var fn_NomeTipoCartao = "cPausa.wav";

	//VALIDAR
    iORG = cartaoSelecionado.ORG; //val(AplUR8FCartoes(T_Fluxo).ORG(val(iIndiceORGValido(T_Fluxo))))
    iLOGO = cartaoSelecionado.LOGO; //val(AplUR8FCartoes(T_Fluxo).LOGO(val(iIndiceORGValido(T_Fluxo))))
    iCartao = cartaoSelecionado.NumCartao; //Mid(AplUR8FCartoes(T_Fluxo).NumCartao(val(iIndiceORGValido(T_Fluxo))), 4, 6)
    //VALIDAR

	switch (iORG) {
		case 10:
			ret = "ypiiC&A.wav";
			break;
		case 11:
			ret = "ypiiC&AMastercard.wav";
			break;
		case 13:
			if (parametros.HabDtVisaGold && iCartao == "428267") {
				ret = "ypiiC&AVisaGold.wav";
			} else {
				ret = "ypiiC&Avisa.wav";
			}
			break;
		case 14:
			ret = "ypiiIbicardMasterCard.wav";
			break;
		case 15:
			ret = "ypiiIBICArdVisa.wav";
			break;
		case 16:
			ret = "ypiiC&A.wav";
			break;
		case 17:
			ret = "ypiiDoTzMastercard.wav";
			break;
		case 18:
			ret = "ypiiIbicredo.wav";
			break;
		case 19:
			ret = "ypiiIBIcard.wav";
			break;
		case 20:
			ret = "ypiiBradescard.wav";
			break;
		case 21:
			ret = "ypiiBradescard.wav";
			break;
		case 22:
			ret = "ypiiBradescard.wav";
			break;
		case 23:
			ret = "ypiiIbicredC&A.wav";
			break;
		case 24:
			ret = "ypiiC&A.wav";
			break;
		case 25:
			ret = "ypiiIBIcard.wav";
			break;
		case 26:
			ret = "ypiiClubeMapfre.wav";
			break;
		case 27:
			ret = "ypiiClubeMapfre.wav";
			break;
		case 28:
			ret = "ypiiBradescard.wav";
			break;
		case 29:
			ret = "ypiiBradescard.wav";
			break;
		case 30:
			ret = "ypiiBradescard.wav";
			break;
		case 30:
			ret = "ypiiBradescard.wav";
			break;
		case 32:
			ret = "ypiiBradescard.wav";
			break;
		case 33:
			ret = "ypiiBradescard.wav";
			break;
		case 34:
			ret = "ypiiBradescard.wav";
			break;
		case 36:
			ret = "ypiiBradescard.wav";
			break;
		case 38:
			switch (iLOGO) {
				case 22:
					ret = "ypiiMateusVisaNacional.wav";
					break;
				case 30:
					ret = "ypiiMateusMastercardInter.wav";
					break;
				case 38:
					if (SeDataEloMais(dados)) { //VALIDAR
						ret = "ypiiMateusCartdEloMais.wav";
					} else {
						ret = "ypiiMateusEloInternacional.wav";
					}
					break;
				case 48:
					ret = "ypiiMateusEloMais.wav";
					break;
			}
			break;
		case 40:
			ret = "ypiiBradescard.wav";
			break;
		case 42:
			ret = "ypiiBradescard.wav";
			break;
		case 44:
			ret = "ypiiBradescard.wav";
			break;
		case 45:
			ret = "ypiiBradescard.wav";
			break;
		case 46:
			if (parametros.HabDtVisaGold && iCartao == "418049") {
				ret = "ypiiMakroVisaGold.wav";
			} else if (SeDataEloMais(dados) && val(iLOGO) == 38) { //VALIDAR
				ret = "ypiiMakroEloMais.wav";
			} else {
				ret = "ypiiMakro.wav";
			}
			break;
		case 47:
			ret = "ypiiBradescard.wav";
			break;
		case 48:
			ret = "ypiiBradescard.wav";
			break;
		case 49:
			ret = "ypiiBradescard.wav";
			break;
		case 52:
			ret = "ypiiAngeloni.wav";
			break;
		case 53:
			ret = "ypiiAngeloniMastercard.wav";
			break;
		case 54:
			ret = "ypiiAngeloniVisa.wav";
			break;
		case 55:
			if (parametros.HabDtVisaGold && iCartao == "422011") {
				ret = "ypiiAngeloniVisaGold.wav";
			} else {
				ret = "ypiiAngeloniVisa.wav";
			}
			break;
		case 56:
			ret = "ypiiBradescard.wav";
			break;
		case 57:
			ret = "ypiiBradescard.wav";
			break;
		case 59:
			if (parametros.HabDtVisaGold && iCartao == "420339") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case 61:
			ret = "ypiiCanalJeans.wav";
			break;
		case 62:
			ret = "ypiiCanalJeans.wav";
			break;
		case 63:
			ret = "ypiiCanalJeans.wav";
			break;
		case 64:
			ret = "ypiiCanalJeans.wav";
			break;
		case 65:
			ret = "ypiiCanalJeans.wav";
			break;
		case 67:
			ret = "ypiiBradescard.wav";
			break;
		case 69:
			if (parametros.HabDtVisaGold && iCartao == "457302") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case 72:
			if (parametros.HabDtVisaGold && iCartao == "457292") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiLuigiBertolli.wav";
			}
			break;
		case 74:
			ret = "ypiiBradescard.wav";
			break;
		case 77:
			ret = "ypiiCompcard.wav";
			break;
		case 79:
			ret = "ypiiBradescard.wav";
			break;
		case 81:
			if (parametros.HabDtVisaGold && iCartao == "457294") {
				ret = "ypiiCoopVisaGold.wav";
			} else if (SeDataEloMais(dados) && val(iLOGO) == 38) { //VALIDAR
				ret = "ypiiCoopFacilEloMais.wav";
			} else {
				ret = "ypiiCoopcopil.wav";
			}
			break;
		case 89:
			if (parametros.HabDtVisaGold && iCartao == "418048") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case 91:
			if (parametros.HabDtVisaGold && iCartao == "457304") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case 101:
			if (dados.bHab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case 102:
			if (dados.bHab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case 106:
			ret = "ypiiCasasBahia.wav";
			break;
		case 108:
			ret = "ypiiC&C.wav";
			break;
		case 112:
			ret = "ypiiCarajas.wav";
			break;
		case 114:
			ret = "ypiiBradExpresso.wav";
			break;
		case 116:
			ret = "ypiiFujioka.wav";
			break;
		case 122:
			if (SeDataEloMais(T_Fluxo) && val(iLOGO) == 38) { //VALIDAR
				ret = "ypiiC&aEloMais.wav";
			} else {
				ret = "ypiiC&Aelo.wav";
			}
			break;
		case 123:
			ret = "ypiiAngeloni.wav";
			break;
		case 126:
			if (parametros.HabDtVisaGold && iCartao == "444666") {
				ret = "ypiiBradescardVisaGold.wav";
			} else if (SeDataEloMais(T_Fluxo) && val(iLOGO) == 38) { //VALIDAR1
				ret = "ypiiSodimacEloMais.wav";
			} else {
				if (dados.bHabReestruturacaoVDNs) {
					ret = "ypiiSodimac.wav";
				}
			}
			break;
		case 136:
			ret = "ypiiNossoLar.wav";
			break;
		case 510:
			ret = "ypiiIbicardElo.wav";
			break;
		case 568:
			ret = "ypiiBradescard.wav";
			break;
		case 569:
			ret = "ypiiBradescardElo.wav";
			break;
		case 571:
			ret = "ypiiConsigBradescard.wav";
			break;
		case 573:
			ret = "ypiiConsigBradescard.wav";
			break;
		default:
			ret = "ypiiBradescard.wav";
	}

	if (ret != "") {
		fn_NomeTipoCartao = ret;
	}
	
	return fn_NomeTipoCartao;
}

function VerificaCEP(dados, lCEP) {
	var verificaCEP = false;

	if (lCEP == 0) {
		return verificaCEP;
	}

	for (var i = 0; i <= dados.tbFaixaCEP.length; i++) {
		if (lCEP >= dados.tbFaixaCEP[i].CEPIni && lCEP <= dados.tbFaixaCEP[i].CEPFin) {
			verificaCEP = true;
		}
	}

	return verificaCEP;
}
//Wanderson FIM

//Lucas Cipriano - Inicio

function BAbreOpcaoLimiteEmpr(dados){

    if (dados["Ibicred_Tr_Consulta"]["ValorLimite"] > dados["Ibicred_Tr_Consulta"]["ValorMinimo"] || dados["Ibicred_Tr_Consulta"]["ValorLimiteCP"] > dados["RxIbicred_Tr_Consulta"]["ValorMinimo"] ) {
        if (dados["AplRxIbicred_Tr_Consulta"]["SituacaoCartao"] == "100" || dados["AplRxIbicred_Tr_Consulta"]["SituacaoCartao"] == "029" ) {
            return true;
        }
    }
}

function verDataValida(numeroDigitado) {

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = dataAtual.getMonth() + 1;
    var anoAtual = dataAtual.getFullYear();
    var iDataAtual = Date.now();
    var sDataAtual = "0" + mesAtual + "/" + diaAtual + "/" + anoAtual;
    var dia = numeroDigitado.substring(0, 2);
    var mes = numeroDigitado.substring(2, 4);
    var ano = numeroDigitado.substring(4);
    var sDataSolicitada = mes + "/" + dia + "/" + ano;
    var iDataSolicitada = Date.parse(sDataSolicitada);

    console.log(sDataAtual, sDataSolicitada);

    if (iDataSolicitada > iDataAtual || sDataSolicitada == sDataAtual) {
        return true;
    } else {
        return false;
    }

}

//Lucas Cipriano - Fim

function validaSenhaNova (senha) {

	var senhaValida = true;
	
	switch (senha) {
		case "0000":
		case "1111":
		case "2222":
		case "3333":
		case "4444":
		case "5555":
		case "6666":
		case "7777":
		case "8888":
		case "9999":
		case "1234":
		case "2345":
		case "3456":
		case "4567":
		case "5678":
		case "6789":
		case "7890":
			senhaValida = false;
			break;
	}

return senhaValida;		

}
// Leandro Pereira -->
//RN71 ValideSenhaSaque
function getValideSenhaSaque(senha){
    var ValideSenhaSaque = true;
    
    switch (senha) {
        case "0000":
        case "1111":
        case "2222":
        case "3333":
        case "4444":
        case "5555":
        case "6666":
        case "7777":
        case "8888":
        case "9999":
        case "1234":
        case "2345":
        case "3456":
        case "4567":
        case "5678":
        case "6789":
            ValideSenhaSaque = false;
            break;
    }
    return ValideSenhaSaque;
}

function montaBilhete(dados) {
    var bilhete = '';
    bilhete += "&H&"; // HeaderId
    bilhete += '01';//dados["MSGTYPE_INICIO"]; // MsgType
    bilhete += '096'; //MsgLen
    bilhete += "&D&"; //DadosURA
    bilhete += completaComEspacos("",6); //CallID Lucent
    bilhete += formataDataAtual("yyyyMMdd"); // Ano mes dia
    bilhete += formataDataAtual("hhmmss"); // Hora min seg
    bilhete += dados['ani'].substring(0,2); //Cod Area 
    bilhete += completaComZeros(dados['ani'].substring(2), 9); //Prefixo + Num Tel (Que ligou) 
    bilhete += (dados['UR80']["AplDDDCelular"] != undefined) ? dados['UR80']["AplDDDCelular"].substring(3) :completaComEspacos("",2) ; //AplCodAreaCad (Cadastrado)    
    bilhete += (dados['UR80']["AplTelCelular"] != undefined) ? dados['UR80']["AplTelCelular"].substring(2) : completaComEspacos("",9); //AplPrefixoCad e AplNumTelCad (Cadastrado) 
    
    //CPF
    if (dados["UR80"]["AplNrCPF"] != undefined) {
		bilhete += completaComEspacos(dados["UR80"]["AplNrCPF"].substring(0,11), 14); //CPFCNPJ
	} else {
        bilhete += completaComEspacos(dados.sNumeroCartaoCPF, 14); //CPFCNPJ
	}
    
    //Cartao
    if (dados["UR80"]["AplNumCartao"] != undefined && dados["UR80"]["AplNumCartao"].length == 16) {
		bilhete += dados["UR80"]["AplNumCartao"]; //CardNumber
	} else if (dados["UR8F"]['CARTOES'] != undefined) { 
		if (dados["UR8F"]['CARTOES'].length == 1){
			bilhete += dados["UR8F"]['CARTOES'][0]["NumCartao"];
		}
		else {
			bilhete += completaComEspacos("", 16);
		}
	} else {
		bilhete += completaComEspacos("", 16);
	}

    
    bilhete += ' '; //CartaoSituacao
    
    // Titularidade
    if (dados.strAplTitAdic != undefined) {
		if (dados.strAplTitAdic == "0") {
			bilhete += "T"; //titular
		} else if (dados.strAplTitAdic == "1") {
			bilhete += "A"; //adicional
		} else {
			bilhete += dados.strAplTitAdic.substring(0);
		}
    } else {
    	bilhete += " ";
    }

    if (dados.bSenhaCHIPOk) {
    	bilhete += "1"; // Status Autent - Sempre 2 nao tem senha
    } else {
    	bilhete += "2";
    }
    
    bilhete += "&T&"; //TrailerId
    bilhete += completaComEspacos(dados['DERIVACAO_CODIGO'],2); //CodRetorno
    bilhete += completaComEspacos(dados['DERIVACAO_MOTIVO'],2); //RazaoRetorno
    bilhete += "&F&"; //Final Bilhete       
    
	return bilhete;
}

function change_to_hex(valor){
    var hex = "";

    for(var i=0; i<valor.length; i++){
        hex += valor.charCodeAt(i).toString(16);
    }

    return hex;
}

function getDerivacaoCartoes(dados) {
    var ret = {};
    var tc = montaBilhete(dados);
    var bilhete;  
    
    var vdn = (dados.MenuInoperante) ? dados.opm.sistemaindisponivel_vdn : dados.Balanceamento.vdn;
    var rota = (dados.MenuInoperante) ? dados.opm.sistemaindisponivel_rotasbc : dados.Balanceamento.rotaSbc; //110405    
    var sm = (dados.MenuInoperante) ? dados.opm.sistemaindisponivel_sessionmanager :  dados.Balanceamento.sessionManager; //10.207.6.130:5060
        
    var uui = tc;
    
    __Log("### Bilhete ###  (" + uui + ")");
    var prefixo = dados['parametros']['derivacaoprefixogenesys_fis']; // 
    //if (!prefixo) {prefixo = "310";}
    if (!prefixo) {prefixo = getPoloCode();}
        
    var destino = 'sip:';
    destino = destino + prefixo;
    destino = destino + rota;
    destino = destino + vdn;
    destino = destino + '@' + sm;

	//bilhete
	destino = destino + "?User-to-User=";
	destino = destino + "04";
	destino = destino + change_to_hex(uui);
	destino = destino + "%3Bencoding%3Dhex";

    ret['destino'] = destino;
    ret['uui'] = uui;
    ret['uui_hex'] = change_to_hex(uui);

    return ret;
}

function setSaudacaoOrg(dados){
	
	var frases = [];
	var sORGCartao = dados['sORGCartao'];
	var sLogoCartao = dados['sLogoCartao'];
	var SeDataEloMais = dados['SeDataEloMais'];
	var wBin = dados['UR80']['AplNumCartao'].substring(0, 6);
	var parametros = dados['parametros'];
	var bHab_ENC_LASA = dados['bHab_ENC_LASA'];
	var bHabReestruturacaoVDNs = dados['bHabReestruturacaoVDNs'];
	
	__Log('########### setSaudacaoOrg ');
	__Log('########### dados.sORGCartao :' + dados.sORGCartao);
	__Log('########### dados.sLogoCartao :' + dados.sLogoCartao);
	__Log('########### dados.SeDataEloMais :' + dados.SeDataEloMais);
	__Log('########### dados.UR80.AplNumCartao :' + dados.UR80.AplNumCartao);
	__Log('########### dados.bHab_ENC_LASA :' + dados.bHab_ENC_LASA);
	__Log('########### dados.parametros.Hab_Enc_Lasa :' + dados.parametros.Hab_Enc_Lasa);
	__Log('########### dados.bHabReestruturacaoVDNs :' + dados.bHabReestruturacaoVDNs);
	__Log('########### dados.parametros.HabReestruturacaoVDN :' + dados.parametros.HabReestruturacaoVDN);
	

	switch(sORGCartao){
		case '010':
		case '011':
		case '016':
		case '024':
		case '122': //Atendimento C&A
            if (SeDataEloMais && sORGCartao == '122' && sLogoCartao == '038') {
                //DNK674 = Atendimento C&A Elo Mais.
                frases = "ypiiAtendC&aEloMais.wav"
			} else {
                //DNK373 = ATENDIMENTO C&A
                frases = "ypiiAtendC&a.wav"
            }
			break;
        case '013': //Atendimento C&A
            if (parametros['HabDtVisaGold'] && wBin == "428267") {
                //DNK616 = ATENDIMENTO C&A VISA GOLD
                frases = "ypiiAtendC&AVisaGold.wav"
            } else {
                //DNK373 = ATENDIMENTO C&A.
                frases = "ypiiAtendC&a.wav"
            }
			break;
        case '014':
		case '015':
		case '025':
		case '510': //Atendimento IBICard
            //DNK518 = ATENDIMENTO IBICARD.
            frases = "ypiiAtendIBIcard.wav"
			break;
        case '046': //Atendimento cartão Makro.
            if (parametros['HabDtVisaGold'] && wBin == "418049") {
                //DNK618 = ATENDIMENTO MAKRO VISA GOLD
                frases = "ypiiAtendMakroVisaGold.wav"
            } else if (SeDataEloMais && sLogoCartao == '038') {
                //DNK676 = Atendimento Makro Elo Mais.
                frases = "ypiiAtendMakroEloMais.wav"
            } else {
                //DNK374 = ATENDIMENTO CARTÃO MAKRO.
                frases = "ypiiAtendCartMakro.wav"
            }
			break;
        case '017': //Atendimento cartão DOTZ Bradescard.
            //DNK375 = ATENDIMENTO CARTÃO DOTZ BRADESCARD.
            frases = "ypiiAtendCartDotz.wav"
			break;
        case '020':
		case '021':
		case '022': //Atendimento cartão Center Lapa.
            //DNK376 = ATENDIMENTO CARTÃO CENTER LAPA.
            frases = "ypiiAtendCartCenterLapa.wav"
			break;
        case '052':
		case '053':
		case '123': //Atendimento cartão Angeloni Bradescard.
            //DNK632 = ATENDIMENTO CARTÃO ANGELONI.
            frases = "ypiiAtendCartAngeloni.wav"
			break;
        case '055': //Atendimento cartão Angeloni Bradescard.
            if (parametros['HabDtVisaGold'] && wBin == "422011") {
                //DNK614 = ATENDIMENTO ANGELONI VISA GOLD.
                frases = "ypiiAtendAngeloniVisaGold.wav"
            } else {
                //DNK632 = ATENDIMENTO CARTÃO ANGELONI.
                frases = "ypiiAtendCartAngeloni.wav"
            }
			break;
        case '061':
		case '062':
		case '063':
		case '064':
		case '065': //Atendimento cartão Canal Jeans Bradescard.
            //DNK378 = ATENDIMENTO CARTÃO CANAL JEANS BRADESCARD.
            frases = "ypiiAtendCartCanalJeansBradescard.wav"
			break;
        case '069': // Atendimento Bradescard.
            if (parametros['HabDtVisaGold'] && wBin == "457302") {
                //DNK615 = ATENDIMENTO BRADESCARD VISA GOLD 
                frases = "ypiiAtendBradVisaGold.wav"
            } else {
                //DNK395 = ATENDIMENTO BRADESCARD.
                frases = "ypiiAtendBradescard.wav"
            }
			break;
        case '028': //Atendimento cartão Estilo Belém.
            //DNK379 = ATENDIMENTO CARTÃO ESTILO BELÉM.
            frases = "ypiiAtendCartEstBelem.wav"
			break;
        case '026':
		case '027': //Atendimento cartão Clube Mapfre.
            //DNK380 = ATENDIMENTO CARTÃO CLUBE MAPFRE.
            frases = "ypiiAtendCartClubeMapfre.wav"
			break;
        case '047': //Atendimento cartão Cattan Bradescard.
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
			break;
        case '056': //Atendimento cartão Canos Shopping
            //DNK382 = ATENDIMENTO CARTÃO CANOAS SHOPPING
            frases = "ypiiAtendCartCanoasShopping.wav"
			break;
        case '030': //Atendimento cartão Colombo Bradescard.
            //DNK383 = ATENDIMENTO CARTÃO COLOMBO BRADESCARD.
            frases = "ypiiAtendCartColomboBradescard.wav"
			break;
        case '033': //Atendimento cartão Eskala Bradescard.
            //DNK384 = ATENDIMENTO CARTÃO ESKALA BRADESCARD.
            frases = "ypiiAtendCartEskalaBradescard.wav"
			break;
        case '045': //Atendimento cartão Baklizi Bradescard.
            //DNK385 = ATENDIMENTO CARTÃO BAKLIZI BRADESCARD.
            frases = "ypiiAtendCartBakliziBradescard.wav"
			break;
        case '049': //Atendimento cartão Modelo Bradescard.
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
			break;
        case '038': //Atendimento Mateus Card.
            switch (sLogoCartao) {
				case '022': //DNK584 = Mateus Visa Nacional.
                    frases = "ypiiMateusVisaNacional.wav"
					break;
                case '030': //DNK587 = Mateus Mastercard Internacional.
                    frases = "ypiiMateusMastercardInter.wav"
					break;
                case '038':
                    if (SeDataEloMais) {
                        //DNK675 = Atendimento Mateuscard Elo Mais.
                        frases = "ypiiAtendMateusCartdEloMais.wav"
                    } else {
                        //DNK585 = Mateus Elo Internacional.
                        frases = "ypiiMateusEloInternacional.wav"
                    }
					break;
                case'048': //DNK586 = Mateus Elo Mais.
                    frases = "ypiiMateusEloMais.wav"
					break;
			}
			break;          
        case '034': //Atendimento Cartão Shopping Tatuapé.
            //DNK388 = ATENDIMENTO CARTÃO SHOPPING TATUAPÉ.
            frases = "ypiiAtendCartShoppingTatuape.wav"
			break;
        case '048': //Atendimento cartão Dorinhos.
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
			break;
        case '040': //Atendimento cartão Express Card
            //DNK390 = ATENDIMENTO CARTÃO EXPRESS CARD.
            frases = "ypiiAtendCartExpCard.wav"
			break;
        case '044': //Atendimento cartão Le Biscuiti.
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
			break;
        case '057': //Atendimento cartão Lojas Rede.
            //DNK392 = ATENDIMENTO CARTÃO LOJAS REDE.
            frases = "ypiiAtendCartLojasRede.wav"
			break;
        case '059': //Atendimento cartão Pague Menos.
            if (parametros['HabDtVisaGold'] && wBin == "420339") {
                //DNK615 = ATENDIMENTO BRADESCARD VISA GOLD
                frases = "ypiiAtendBradVisaGold.wav"
            } else {
                //DNK395 = ATENDIMENTO BRADESCARD.
                frases = "ypiiAtendBradescard.wav"
            }
			break;
        case '029': //Atendimento docartão Makenji Bradescard.
            //DNK394 = ATENDIMENTO DO CARTÃO MAKENJI BRADESCARD.
            frases = "ypiiAtendCartMakenjiBradescard.wav"
			break;
        case '042': //Atendimento Bradescard.
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
			break;
        case '036': //Atendimento do cartão Bonanza Bradescard.
            //DNK396 = ATENDIMENTO DO CARTÃO BONANZA BRADESCARD.
            frases = "ypiiAtendCartBonanzaBradescard.wav"
			break;
        case '032': //Atendimento do cartão Arco Ìris Bradescard.
            //DNK397 = ATENDIMENTO DO CARTÃO ARCO ÌRIS BRADESCARD.
            frases = "ypiiAtendCartArcoIrisBradescard.wav"
			break;
        case '074': //Atendimento cartão TNG.
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
			break;
        case '067': //Atendimento cartão Tele Rio.
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
			break;
        case '072': //Atendimento Bradescard.
            if (parametros['HabDtVisaGold'] && wBin == "457292") {
                //DNK615 = ATENDIMENTO BRADESCARD VISA GOLD 
                frases = "ypiiAtendBradVisaGold.wav"
            } else {
                //DNK395 = ATENDIMENTO BRADESCARD.
                frases = "ypiiAtendBradescard.wav"
            }
			break;
        case '079': //Atendimento cartão Passarela
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
			break;
        case '077': //Atendimento cartão Compcard.
            //DNK401 = ATENDIMENTO CARTÃO COMPCARD.
            frases = "ypiiAtendCartCompcard.wav"
			break;
        case '091': //Atendimento Bradescard.
            if (parametros['HabDtVisaGold'] && wBin == "457304") {
                //DNK615 = ATENDIMENTO BRADESCARD VISA GOLD
                frases = "ypiiAtendBradVisaGold.wav"
            } else {
                //DNK395 = ATENDIMENTO BRADESCARD.
                frases = "ypiiAtendBradescard.wav"
            }
			break;
        case '081': //Atendimento Coop.
            if (parametros['HabDtVisaGold'] && wBin == "457294") {
                //DNK617 = ATENDIMENTO COOP VISA GOLD 
                frases = "ypiiAtendCoopVisaGold.wav"
            } else if (SeDataEloMais && sLogoCartao == '038') {
                //DNK677 = Atendimento Coop Fácil Elo Mais.
                frases = "ypiiAtendCoopFacilEloMais.wav"
            } else {
                //DNK631 = ATENDIMENTO COOP.
                frases = "ypiiAtendCoop.wav"
            }
			break;
        case '089': //Atendimento cartão Sportcard.
            if (parametros['HabDtVisaGold'] && wBin == "418048") {
                //DNK615 = ATENDIMENTO BRADESCARD VISA GOLD
                frases = "ypiiAtendBradVisaGold.wav"
            } else {
                //DNK395 = ATENDIMENTO BRADESCARD.
                frases = "ypiiAtendBradescard.wav"
            }
			break;
        case '101':
		case '102': //Atendimento cartão Lojas Americanas.
            if (bHab_ENC_LASA) {
                //DNK395 = ATENDIMENTO BRADESCARD.
                frases = "ypiiAtendBradescard.wav"
            } else {
                //DNK8 = Atendimento cartão Lojas Americanas.
                frases = "ypiiAtendCartLojAmericanas.wav"
            }
			break;
        case '106': //Casas Bahia
            //DNK633 = ATENDIMENTO CARTÃO CASAS BAHIA.
            frases = "ypiiAtendCartCB.wav"
			break;
        case '108': //C&C
            //DNK603 = Atendimento cartão C&C.
            frases = "ypiiAtendCartC&C.wav"
			break;
        case '112': //Carajás
            //DNK604 = Atendimento cartão Carajás.
            frases = "ypiiAtendCartCarajas.wav"
			break;
        case '114': //Bradesco Expresso
            //DNK612 = Atendimento  cartão Bradesco Expresso.
            frases = "ypiiAtendCartBradExpress.wav"
			break;
        case '116': //Fujioka
            //DNK605 = Atendimento cartão Fujioka.
            frases = "ypiiAtendCartFujioka.wav"
			break;
        case '126':
            if (bHabReestruturacaoVDNs) {
                if (parametros['HabDtVisaGold'] && wBin == "444666") {
                    //DNK619 = ATENDIMENTO SODIMAC VISA GOLD
                    frases = "ypiiAtendSodimacVisaGold.wav"
                } else if (SeDataEloMais && sLogoCartao == '038') {
                    //DNK678 = Atendimento Sodimac Elo Mais.
                    frases = "ypiiAtendSodimacEloMais.wav"
                } else {
                    //DNK529 = ATENDIMENTO SODIMAC
                    frases = "ypiiAtendCartSodimac.wav"
                }
            } else {
                //DNK395 = ATENDIMENTO BRADESCARD.
                frases = "ypiiAtendBradescard.wav"
            }
			break;
        case '136':   //Atakarejo
            //DNK657 = Atendimento cartão Nosso Lar. 
            frases = "ypiiAtendCartNossoLar.wav"
			break;
        case '571': //Atendimento do cartão Consignado Bradescard.
            //DNK404 = ATENDIMENTO DO CARTÃO CONSIGNADO BRADESCARD.
            frases = "ypiiAtendCartConsigBradescard.wav"
			break;
        default: //Atendimento Bradescard.
            //DNK395 = ATENDIMENTO BRADESCARD.
            frases = "ypiiAtendBradescard.wav"
	}
        
	return frases;

}

function SeFalaFraseVisaGold(dados) {
	//RN17 - SeFalaFraseVisaGold
	var strAux = '';
    var data = new Date();
    var wDataInicio = '';
    var wDataFinal = '';
    var wPos = 0;
    var wAux = '';
    
    __Log('########### dados.parametros.HabDtFraseVisaGold :' + dados.parametros.HabDtFraseVisaGold);
    __Log('########### dados.parametros.HabBinFraseVisaGold :' + dados.parametros.HabBinFraseVisaGold);
    __Log('########### dados.UR80.AplNumCartao :' + dados.UR80.AplNumCartao);

    var SeFalaFraseVisaGold = false;
    
    var wNow = formataData(new Date(data), "yyyyMMddhhmm") ; //ddMMyyyy

    if(dados['parametros']['HabDtFraseVisaGold'].length == 25){ //"HabDtFraseVisaGold"="202104050000-202106052400"
    //'verifica se tem conteudo  YYYYMMDDHHNN
		wDataInicio = dados['parametros']['HabDtFraseVisaGold'].substring(0,12);
		wDataFinal = dados['parametros']['HabDtFraseVisaGold'].substring(13,25);
				
		if(wNow >= wDataInicio && wNow <= wDataFinal) { //"HabBinFraseVisaGold"=";428267;418049;422011;457302;457294;444666; 457292;457304;420339;418048;427167;"
			if(dados['parametros']['HabBinFraseVisaGold'] != '') {
				if ((dados['parametros']['HabBinFraseVisaGold'].indexOf(dados.UR80.AplNumCartao.substring(0,6)) >= 0 )) {
					SeFalaFraseVisaGold = true;
				} 
			}
		}
    }
    return SeFalaFraseVisaGold;
}

function SeFalaFraseEloMais(dados) {
	//RN21 - SeFalaFraseEloMais
	var strAux = '';
    var data = new Date();
    var wDataInicio = '';
    var wDataFinal = '';
    var wAux = '';

    var SeFalaFraseEloMais = false;
    __Log('########### dados.parametros.HabDtFraseEloMais :' + dados.parametros.HabDtFraseEloMais);
    
    var wNow = formataData(new Date(data), "yyyyMMddhhmm") ; //ddMMyyyy

    if(dados['parametros']['HabDtFraseEloMais'].length == 25){ //"HabDtFraseEloMais"="202110150000-202112152400"
    	//'verifica se tem conteudo  YYYYMMDDHHNN
		wDataInicio = dados['parametros']['HabDtFraseEloMais'].substring(0,12);
		wDataFinal = dados['parametros']['HabDtFraseEloMais'].substring(13,25);
				
		if(wNow >= wDataInicio && wNow <= wDataFinal) { //"HabBinFraseVisaGold"=";428267;418049;422011;457302;457294;444666; 457292;457304;420339;418048;427167;"
			SeFalaFraseEloMais = true;
		}
    }
    return SeFalaFraseEloMais;
}

function setDestinoSaudacao(dados) {

	var parametros = dados['parametros'];
	
	__Log('########### dados.UR80.AplTipoCartaoTarjaOuChip :' + dados.UR80.AplTipoCartaoTarjaOuChip);
	__Log('########### parametros.HabAutenticaSenhaChip :' + parametros.HabAutenticaSenhaChip);

	if (dados['UR80']['AplTipoCartaoTarjaOuChip'] == '2' && parametros['HabAutenticaSenhaChip']) {
		dados['sDigitouAlgumaCoisa'] = "";
		dados['iRetry'] = 0;
		dados['destinoFalaSaldo'] = 'FalaSegAcesso';
	} else if (dados['bOrigemHotLineCEA']) {
		if (dados['bOrigemHotLineCEAMenu'] == 'MENU_HOTLINE_APRESENTAR') {
			switch (dados['sORGCartao']) {
				case '10':
				case '11':
				case '13':
				case '14':
				case '15':
				case '16':
				case '122':
					dados['destinoFalaSaldo'] = 'MenuHotLineCeA';
					break;
				default:
					dados['bOrigemHotLineCEAMenu'] = 'MENU_HOTLINE_NAO_APRESENTAR';
					dados['destinoFalaSaldo'] = 'FalaSaldo';
					dados['iVezFala'] = 0;
			}
		} else {
			dados['iVezFala'] = 0;
			dados['destinoFalaSaldo'] = 'FalaSaldo';
		}
	}

	return dados;

}

//RN09

function setaListaORGsValidosNumB(dados) {

    var strAux = "";
    var strAux1 = "";
    var strAux2 = "";
	var parametros = dados['parametros'];

    switch (dados['eAtendimento']){
        case 'ATD_PL':
            strAux1 = parametros["ListaORGsAtdPL"];
            break;
        case 'ATD_MAKRO':
		case 'ATD_HOTLINE_MAKRO':
            strAux1 = parametros["ListaORGsAtdMakro"];
            break;
        case 'ATD_DOTZ':
            strAux1 = parametros["ListaORGsAtdDotz"];
            break;
        case 'ATD_ANGELONI':
            strAux1 = parametros["ListaORGsAtdAngeloni"];
			break;
        case 'ATD_ESKALA':
            strAux1 = parametros["ListaORGsAtdEskala"];
			break;
        case 'ATD_MATEUS_CARD':
            strAux1 = parametros["ListaORGsAtdMateusCard"];
			break;
        case 'ATD_ELO_CARD':
            strAux1 = parametros["ListaORGsAtdEloCard"];
			break;
        case 'ATD_ELO_CONSIGNADO':
            strAux1 = parametros["ListaORGsAtdEloConsignado"];
			break;
        case 'ATD_PAGUE_MENOS':
            strAux1 = parametros["ListaORGsAtdPagueMenos"];
			break;
        case 'ATD_TNG':
            strAux1 = parametros["ListaORGsAtdTNG"];
			break;
        case 'ATD_CVC':
            strAux1 = parametros["ListaORGsAtdCVC"];
            break;
        case 'ATD_IBICARD':
            strAux1 = parametros["ListaORGsAtdIBICard"];
			break;
        case 'ATD_HOT_LINE_CEA':
            strAux1 = parametros["ListaORGsAtdHotLineCEA"];
            break;
        case 'ATD_DEFAULT_7332':
            strAux1 = parametros["ListaORGsAtdDefault7332_1"];
            strAux2 = parametros["ListaORGsAtdDefault7332_2"];
            //strAux = strAux1 + strAux2;
            break;
        default:
            strAux1 = parametros["ListaORGsAtdDefault7332_1"];
            strAux2 = parametros["ListaORGsAtdDefault7332_2"];
            //strAux = strAux1 + strAux2;
	}
    
    strAux = strAux1 + strAux2;

    dados['sListaORGsIdentCPF'] = strAux
    __Log('########### dados.eAtendimento :' + JSON.stringify(dados['eAtendimento']));
    __Log('########### dados.sListaORGsIdentCPF :' + JSON.stringify(dados['sListaORGsIdentCPF']));

	return dados;
}

function verCartaoOrgValido(dados){
		var IdentCPF  = dados['sListaORGsIdentCPF'].indexOf(dados['UR8FCartoes'][0]['ORG']);
		var IdentCPF2 = dados['sListaORGsIdentCPF'].indexOf('TODOS') ;
		var BloqSemAt = dados['parametros']['ListaBloqSemAtd'].indexOf(dados['UR8FCartoes'][0]['CodBloqCartao'].replace(/\s+/g, ''));
		
		__Log('########### dados.UR8FCartoes[0].ORG :' + dados.UR8FCartoes[0].ORG);
		__Log('########### dados.parametros.ListaBloqSemAtd :' + dados.parametros.ListaBloqSemAtd);
		__Log('########### IdentCPF :' + IdentCPF);
		__Log('###########IdentCPF2 :' + IdentCPF2);
		__Log('########### BloqSemAt :' + BloqSemAt);

	if ((IdentCPF > -1 || IdentCPF2 > -1) && BloqSemAt > -1) {
		//if ((dados['sListaORGsIdentCPF'].indexOf(dados['UR8FCartoes'][0]['ORG']) > -1 || dados['sListaORGsIdentCPF'].indexOf('TODOS') > -1) && dados['parametros']['ListaBloqSemAtd'].indexOf(dados['UR8FCartoes'][0]['CodBloqCartao']>-1))  {
		var OrgValido = true;
	} else {
		var OrgValido = false;
	}
		__Log('########### OrgValido :' + OrgValido);
		return OrgValido
	}

//RN10

function verRetornouORGsValidoIdentCPF(dados) {

    var i = 1;
    var iCount = 0;
    var iCountAtivo = 0;
    var iCountBloqueado = 0;
    var iCountOutro = 0;
    var qtdeCartoes = dados['UR8F']['QtdeCartoes'];

    dados['strListaIndiceORGValido'] = "";
    dados['strListaIndiceORGValidoAtivo'] = "";
    dados['strListaIndiceORGValidoAux'] = "";
    dados['strListaIndiceORGValidoBloqueado'] = "";
    dados['strListaIndiceORGValidoOutro'] = "";
    dados['strListaDataORGValidoAtivo'] = "";
    
    for (var i = 0; i < qtdeCartoes; i++) {
        //var codBloq = dados["UR8FCartoes"][i]["CodBloqCartao"];
        //var validade = dados["UR8FCartoes"][i]["validade"];

        if ((dados['sListaORGsIdentCPF'].indexOf(dados['UR8FCartoes'][i]['ORG']) >= 0 || dados['sListaORGsIdentCPF'].indexOf('TODOS') >= 0) && ehCartBloqLiberadoViaCPF(dados, i) && ehCartaoBloqueioComAtd(dados, i)) {
        	var codBloq = dados["UR8FCartoes"][i]["CodBloqCartao"];
            var validade = dados["UR8FCartoes"][i]["validade"];
        	switch(codBloq){
                case ' ':
                    if (iCountAtivo == 0) {
                        dados['strListaIndiceORGValidoAtivo'] = i;
                        dados['strListaDataORGValidoAtivo'] = validade.substring(2, 4) + validade.substring(0, 2) + " " + i;
                    } else {
                        dados['strListaIndiceORGValidoAtivo'] += ";" + i;
                        dados['strListaDataORGValidoAtivo'] += ";" + validade.substring(2, 4) + validade.substring(0, 2) + " " + i;
                    }
                    iCountAtivo += 1;
                    break;
				case '':
                    if (iCountAtivo == 0) {                    	
                        dados['strListaIndiceORGValidoAtivo'] = i;
                        dados['strListaDataORGValidoAtivo'] = validade.substring(2, 4) + validade.substring(0, 2) + " " + i;
                    } else {
                        dados['strListaIndiceORGValidoAtivo'] += ";" + i;
                        dados['strListaDataORGValidoAtivo'] += ";" + validade.substring(2, 4) + validade.substring(0, 2) + " " + i;
                    }
                    iCountAtivo += 1;
                    break;
                case 'M':
                case 'J':
                    if (iCountBloqueado == 0) {
                        //dados['strListaIndiceORGValidoBloqueado'] = i;
                        dados['strListaIndiceORGValidoBloqueado'] = validade.substring(2, 4) + validade.substring(0, 2) + " " + i;
                    } else {
                        //verRetornouORGsValidoIdentCPF//dados['strListaIndiceORGValidoBloqueado'] += ";" + i;
                        dados['strListaIndiceORGValidoBloqueado'] += ";" + validade.substring(2, 4) + validade.substring(0, 2) + " " + i;
                        
                    }
                    iCountBloqueado += 1;
                    break;
                default:
                    if (iCountOutro ==0) {
                        //dados['strListaIndiceORGValidoOutro'] = i;
                        dados['strListaIndiceORGValidoOutro'] = validade.substring(2, 4) + validade.substring(0, 2) + " " + i;
                    } else {
                        //dados['strListaIndiceORGValidoOutro'] += ";" + i;
                        dados['strListaIndiceORGValidoOutro'] += ";" + validade.substring(2, 4) + validade.substring(0, 2) + " " + i;
                        
                    }
                    iCountOutro = iCountOutro + 1;

            }
            if (iCount == 0) {
                dados['strListaIndiceORGValido'] = i;
            } else {
                dados['strListaIndiceORGValido'] += ";" + i;
            }
            iCount = iCount + 1;
        }
       
    }

    dados['iQtdeOpIndiceORGValidoAtivo'] = iCountAtivo;
    dados['iQtdeOpIndiceORGValidoBloqueado'] = iCountBloqueado;
    dados['iQtdeOpIndiceORGValidoOutro'] = iCountOutro;
    dados['iQtdeOpIndiceORGValido'] = iCount;

	__Log('############# dados.QtdeOpIndiceORGValidoAtivo :'  + dados['iQtdeOpIndiceORGValidoAtivo']);
	__Log('############# dados.strListaIndiceORGValidoAtivo :'  + dados['strListaIndiceORGValidoAtivo']);
	__Log('############# dados.strListaDataORGValidoAtivo :'  + dados['strListaDataORGValidoAtivo']);
	__Log('############# dados.iQtdeOpIndiceORGValidoBloqueado :'  + dados['iQtdeOpIndiceORGValidoBloqueado']);
	__Log('############# dados.strListaIndiceORGValidoBloqueado :'  + dados['strListaIndiceORGValidoBloqueado']);
	__Log('############# dados.iQtdeOpIndiceORGValidoOutro :'  + dados['iQtdeOpIndiceORGValidoOutro']);
	__Log('############# dados.strListaIndiceORGValidoOutro :'  + dados['strListaIndiceORGValidoOutro']);
	__Log('############# dados.iQtdeOpIndiceORGValido :'  + dados['iQtdeOpIndiceORGValido']);
	__Log('############# dados.strListaIndiceORGValido :'  + dados['strListaIndiceORGValido']);
    
    return dados;

}

//RN 11

function ordenaORGsValidoStatusAtivoValidadeIdentCPF(dados) {


    __Log('############# dados.strListaDataORGValidoAtivo : ' + dados['strListaDataORGValidoAtivo']);
	__Log('############# dados.iQtdeOpIndiceORGValidoAtivo : ' + dados['iQtdeOpIndiceORGValidoAtivo']);
    var s = dados['strListaDataORGValidoAtivo'];
    var a = s.split(';');

    var pegaCartaoCPF = [];

    for (var i = 0; i < a.length; i++) {
        pegaCartaoCPF.push(a[i]);
    }

    var strListaAuxTemp = "";
    for (var i = 0; i < dados['iQtdeOpIndiceORGValidoAtivo']; i++) {
        if (strListaAuxTemp == "") {
        	if (i < 10) {
        		strListaAuxTemp = pegaCartaoCPF[i].substring(0, 6);
        	} else {
        		strListaAuxTemp = pegaCartaoCPF[i].substring(0, 7);
        	}
        } else {
        	if (i < 10) {
        		strListaAuxTemp += ";" + pegaCartaoCPF[i].substring(0, 6).toString();
        	} else {
        		strListaAuxTemp += ";" + pegaCartaoCPF[i].substring(0, 7).toString();
        	}
        }
    }

    dados['strListaIndiceORGValidoAtivo'] = strListaAuxTemp;
    
    __Log('############# dados.strListaIndiceORGValidoAtivo : ' + dados['strListaIndiceORGValidoAtivo']);

    return dados;

}

//RN12

function ordenaORGsValidoStatusIdentCPF(dados){

    var strListaAux = "";
    var iQtdeAux = 0;

    if (dados['iQtdeOpIndiceORGValidoAtivo'] > 0) { 
        iQtdeAux += dados['iQtdeOpIndiceORGValidoAtivo'];
        strListaAux = dados['strListaIndiceORGValidoAtivo'];
    }
    
    if (dados['iQtdeOpIndiceORGValidoBloqueado'] > 0) { 
        iQtdeAux += dados['iQtdeOpIndiceORGValidoBloqueado'];
        if (dados['iQtdeOpIndiceORGValidoAtivo'] == 0) {
            strListaAux = dados['strListaIndiceORGValidoBloqueado'];
        } else { 
            strListaAux += ";" + dados['strListaIndiceORGValidoBloqueado'];
        }
    }
    
    if (dados['iQtdeOpIndiceORGValidoOutro'] > 0) { 
        iQtdeAux += dados['iQtdeOpIndiceORGValidoOutro'];
        if (dados['iQtdeOpIndiceORGValidoAtivo'] == 0 && dados['iQtdeOpIndiceORGValidoBloqueado'] == 0) {
            strListaAux = dados['strListaIndiceORGValidoOutro'];
        } else {
            strListaAux += ";" + dados['strListaIndiceORGValidoOutro'];
        }
    }  
   

    
   dados['strListaIndiceORGValido'] = strListaAux + ";";
   dados['iQtdeOpIndiceORGValido'] = iQtdeAux;
   
    
    __Log('########## dados.strListaIndiceORGValido :' + dados['strListaIndiceORGValido']);
    __Log('########## dados.iQtdeOpIndiceORGValido :' + dados['iQtdeOpIndiceORGValido']);

    return dados;

}

//RN13

function nomeTipoCartao(dados, cont) {
	
	var ret = "";
	var iORG;
	var iLOGO;
	var iCartao;

	//VALIDAR
	iORG = dados.UR8FCartoes[cont]['ORG'];
	iLOGO = dados.UR8FCartoes[cont]['LOGO']; //val(AplUR8FCartoes(T_Fluxo).LOGO(val(iIndiceORGValido(T_Fluxo))))
	//iCartao = dados.UR8FCartoes[cont]['NumCartao'].substring(5, 11); //Mid(AplUR8FCartoes(T_Fluxo).NumCartao(val(iIndiceORGValido(T_Fluxo))), 4, 6)
	iCartao = dados.UR8FCartoes[cont]['NumCartao'].substring(0, 6);
	//VALIDAR
	__Log('########### nomeTipoCartao ');
	__Log('########## iORG :' + iORG);
	__Log('########## iLOGO :' + iLOGO);
	__Log('########## iCartao :' + iCartao);

	switch (iORG) {
		case '010':
			ret = "ypiiC&A.wav";
			break;
		case '011':
			ret = "ypiiC&AMastercard.wav";
			break;
		case '013':
			if (dados.parametros.HabDtVisaGold && iCartao == "428267") {
				ret = "ypiiC&AVisaGold.wav";
			} else {
				ret = "ypiiC&Avisa.wav";
			}
			break;
		case '014':
			ret = "ypiiIbicardMasterCard.wav";
			break;
		case '015':
			ret = "ypiiIBICArdVisa.wav";
			break;
		case '016':
			ret = "ypiiC&A.wav";
			break;
		case '017':
			ret = "ypiiDoTzMastercard.wav";
			break;
		case '018':
			ret = "ypiiIbicredo.wav";
			break;
		case '019':
			ret = "ypiiIBIcard.wav";
			break;
		case '020':
			ret = "ypiiBradescard.wav";
			break;
		case '021':
			ret = "ypiiBradescard.wav";
			break;
		case '022':
			ret = "ypiiBradescard.wav";
			break;
		case '023':
			ret = "ypiiIbicredC&A.wav";
			break;
		case '024':
			ret = "ypiiC&A.wav";
			break;
		case '025':
			ret = "ypiiIBIcard.wav";
			break;
		case '026':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '027':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '028':
			ret = "ypiiBradescard.wav";
			break;
		case '029':
			ret = "ypiiBradescard.wav";
			break;
		case '030':
			ret = "ypiiBradescard.wav";
			break;
		case '032':
			ret = "ypiiBradescard.wav";
			break;
		case '033':
			ret = "ypiiBradescard.wav";
			break;
		case '034':
			ret = "ypiiBradescard.wav";
			break;
		case '036':
			ret = "ypiiBradescard.wav";
			break;
		case '038':
			switch (iLOGO) {
				case '022':
					ret = "ypiiMateusVisaNacional.wav";
					break;
				case '030':
					ret = "ypiiMateusMastercardInter.wav";
					break;
				case '038':
					if (SeDataEloMais(dados)) { //VALIDAR
						ret = "ypiiMateusCartdEloMais.wav";
					} else {
						ret = "ypiiMateusEloInternacional.wav";
					}
					break;
				case '048':
					ret = "ypiiMateusEloMais.wav";
					break;
			}
			break;
		case '040':
			ret = "ypiiBradescard.wav";
			break;
		case '042':
			ret = "ypiiBradescard.wav";
			break;
		case '044':
			ret = "ypiiBradescard.wav";
			break;
		case '045':
			ret = "ypiiBradescard.wav";
			break;
		case '046':
			if (dados.parametros.HabDtVisaGold && iCartao == "418049") {
				ret = "ypiiMakroVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '038') { //VALIDAR
				ret = "ypiiMakroEloMais.wav";
			} else {
				ret = "ypiiMakro.wav";
			}
			break;
		case '047':
			ret = "ypiiBradescard.wav";
			break;
		case '048':
			ret = "ypiiBradescard.wav";
			break;
		case '049':
			ret = "ypiiBradescard.wav";
			break;
		case '052':
			ret = "ypiiAngeloni.wav";
			break;
		case '053':
			ret = "ypiiAngeloniMastercard.wav";
			break;
		case '054':
			ret = "ypiiAngeloniVisa.wav";
			break;
		case '055':
			if (dados.parametros.HabDtVisaGold && iCartao == "422011") {
				ret = "ypiiAngeloniVisaGold.wav";
			} else {
				ret = "ypiiAngeloniVisa.wav";
			}
			break;
		case '056':
			ret = "ypiiBradescard.wav";
			break;
		case '057':
			ret = "ypiiBradescard.wav";
			break;
		case '059':
			if (dados.parametros.HabDtVisaGold && iCartao == "420339") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '061':
			ret = "ypiiCanalJeans.wav";
			break;
		case '062':
			ret = "ypiiCanalJeans.wav";
			break;
		case '063':
			ret = "ypiiCanalJeans.wav";
			break;
		case '064':
			ret = "ypiiCanalJeans.wav";
			break;
		case '065':
			ret = "ypiiCanalJeans.wav";
			break;
		case '067':
			ret = "ypiiBradescard.wav";
			break;
		case '069':
			if (dados.parametros.HabDtVisaGold && iCartao == "457302") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '072':
			if (dados.parametros.HabDtVisaGold && iCartao == "457292") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiLuigiBertolli.wav";
			}
			break;
		case '074':
			ret = "ypiiBradescard.wav";
			break;
		case '077':
			ret = "ypiiCompcard.wav";
			break;
		case '079':
			ret = "ypiiBradescard.wav";
			break;
		case '081':
			if (dados.parametros.HabDtVisaGold && iCartao == "457294") {
				ret = "ypiiCoopVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '038') { //VALIDAR
				ret = "ypiiCoopFacilEloMais.wav";
			} else {
				ret = "ypiiCoopcopil.wav";
			}
			break;
		case '089':
			if (dados.parametros.HabDtVisaGold && iCartao == "418048") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '091':
			if (dados.parametros.HabDtVisaGold && iCartao == "457304") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '101':
			if (dados['bHab_ENC_LASA']) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '102':
			if (dados['bHab_ENC_LASA']) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '106':
			ret = "ypiiCasasBahia.wav";
			break;
		case '108':
			ret = "ypiiC&C.wav";
			break;
		case '112':
			ret = "ypiiCarajas.wav";
			break;
		case '114':
			ret = "ypiiBradExpresso.wav";
			break;
		case '116':
			ret = "ypiiFujioka.wav";
			break;
		case '122':
			if (SeDataEloMais(dados) && iLOGO == '038') { //VALIDAR
				ret = "ypiiC&aEloMais.wav";
			} else {
				ret = "ypiiC&Aelo.wav";
			}
			break;
		case '123':
			ret = "ypiiAngeloni.wav";
			break;
		case '126':
			if (dados.parametros.HabDtVisaGold && iCartao == "444666") {
				ret = "ypiiBradescardVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '038') { //VALIDAR1
				ret = "ypiiSodimacEloMais.wav";
			} else {
				if (dados.parametros.HabReestruturacaoVDNs) {
					ret = "ypiiSodimac.wav";
				} else {
					ret = "ypiiBradescard.wav";
				}
			}
			break;
		case '136':
			ret = "ypiiNossoLar.wav";
			break;
		case '510':
			ret = "ypiiIbicardElo.wav";
			break;
		case '568':
			ret = "ypiiBradescard.wav";
			break;
		case '569':
			ret = "ypiiBradescardElo.wav";
			break;
		case '571':
			ret = "ypiiConsigBradescard.wav";
			break;
		case '573':
			ret = "ypiiConsigBradescard.wav";
			break;
		default:
			ret = "ypiiBradescard.wav";
	}
	
	__Log('#### ret : '+ ret);

	return ret;
}



function ehCartBloqLiberadoViaCPF(dados, indice){
    
    var ehCartBloqLiberadoViaCPF = true;
    var codBloqCartao = dados["UR8FCartoes"][indice]["CodBloqCartao"];
	var NumCartao = dados["UR8FCartoes"][indice]["NumCartao"];
    
    if (codBloqCartao != " " && dados['parametros']['InibeCartBloqViaCPF'].indexOf(codBloqCartao) < 0) { //código de bloqueio não válido
        ehCartBloqLiberadoViaCPF = false;
    }

	__Log('############ NumCartao : ' + NumCartao);
	__Log('############ codBloqCartao : ' + codBloqCartao);
	__Log('############ dados.parametros.InibeCartBloqViaCPF : ' + dados['parametros']['InibeCartBloqViaCPF']);
    __Log('############ ehCartBloqLiberadoViaCPF : ' + ehCartBloqLiberadoViaCPF);
    
    return ehCartBloqLiberadoViaCPF;
   
}

function SeDataEloMais(dados) {
    
	 __Log('############ dados.parametros.HabDtEloMais : ' + dados.parametros.HabDtEloMais);
    var wDataInicio='';
    var SeDataEloMais = false;
    var strAux = "";
    var wNow ="";

    
    if (dados['parametros']['HabDtEloMais'].length == 12 ){
        wNow = formataDataAtual("yyyyMMddhhmm") ;
        wDataInicio = dados['parametros']['HabDtEloMais'].substring(0, 12);
        if (wNow >= wDataInicio) { 
        		SeDataEloMais = true;
        }        			
    }
    
    __Log('############ SeDataEloMais ');
    __Log('############ wNow : ' + wNow);
    __Log('############ wDataInicio : ' + wDataInicio);

    return SeDataEloMais;
    
}

function ehCartaoBloqueioComAtd(dados){
	return true;
}

function setIndiceORGValido(dados) {

    var posPontoVirgula = dados["strListaIndiceORGValidoAux"].indexOf(";");
    
    __Log('##### dados.strListaIndiceORGValidoAux :' + dados["strListaIndiceORGValidoAux"]);
    __Log('#####  dados.iIndiceORGValido :' +  dados["iIndiceORGValido"]);
    __Log('##### posPontoVirgula :' + posPontoVirgula);

    if (posPontoVirgula == 6) {
        dados["iIndiceORGValido"] = dados["strListaIndiceORGValidoAux"].substring(posPontoVirgula - 1, posPontoVirgula);
        if (dados["strListaIndiceORGValidoAux"].length > posPontoVirgula) { //Tem mais indice
        	 dados["strListaIndiceORGValidoAux"] = dados["strListaIndiceORGValidoAux"].substring(posPontoVirgula + 1);
        } else {
        	dados["strListaIndiceORGValidoAux"] = '';
        }
    }else if (posPontoVirgula == 7) {
    	dados["iIndiceORGValido"] = dados["strListaIndiceORGValidoAux"].substring(posPontoVirgula - 2, posPontoVirgula);
        if (dados["strListaIndiceORGValidoAux"].length > posPontoVirgula) { //Tem mais indice
            dados["strListaIndiceORGValidoAux"] = dados["strListaIndiceORGValidoAux"].substring(posPontoVirgula + 1);
        } else {
        	dados["strListaIndiceORGValidoAux"] = '';
        }
    } else {
        dados["iIndiceORGValido"] = dados["strListaIndiceORGValidoAux"];
        dados["strListaIndiceORGValidoAux"] = "";
    }
    __Log('######### dados.iIndiceORGValido :' + dados["iIndiceORGValido"]);
    __Log('######### dados.strListaIndiceORGValidoAux :' + dados["strListaIndiceORGValidoAux"]);

    return dados;
}

//RN49 

function fn_NomeCartaoNumB(dados){
	
	var eAtendimento = dados['eAtendimento'];
	                          
	var ret = '';

    switch (eAtendimento){
        case "ATD_PL":
            ret = "ypiiC&A.wav";
            break;
        case 'ATD_MAKRO', 'ATD_HOTLINE_MAKRO':
            ret = "ypiiMakro.wav";
            break;
        case 'ATD_DOTZ':
            //'DNK190 = DOTZ
            ret = "ypiiDotz.wav";
            break;
        case 'ATD_ANGELONI':
           // 'DNK192 = CLUBE ANGELONI
            ret = "ypiiClubeAngeloni.wav";
            break;
        case 'ATD_ESKALA':
           // 'DNK197 = ESKALA
            ret = "YupaEskala.wav";
            break;
        case 'ATD_MATEUS_CARD':
            //'DNK200 = MATEUS CARD
            ret = "ypiiMateusCard.wav";
            break;
        case 'ATD_ELO_CARD':
            //'DNK205 = ELO CARD
            ret = "ypiiEloCard.wav";
            break;
        case 'ATD_ELO_CONSIGNADO':
           // 'DNK219 = CONSIGNADO BRADESCARD
            ret = "ypiiConsigBradescard.wav";
            break;
        case 'ATD_PAGUE_MENOS':
            //'DNK208 = PAGUE MENOS
            ret = "ypiiPagueMenos.wav";
            break;
        case 'ATD_TNG':
           // 'DNK214 = TNG
            ret = "ypiiTNG.wav";
            break;
        case 'ATD_CVC':
           // 'DNK99 = CVC
            ret ="ypiiCVC.wav";
            break;
        case 'ATD_IBICARD':
            //'DNK519 = BRADESCARD OU IBICARD.
            ret = "ypiiBradOuIBiCard.wav";
            break;
        case 'ATD_HOT_LINE_CEA':
            //'DNK185 = C&A
            ret = "ypiiC&A.wav";
            break;
        case 'ATD_DEFAULT_7332':
            //'DNK203 = BRADESCARD
            ret = "ypiiBradescard.wav";
            break;
         default:
            //'DNK203 = BRADESCARD
            ret = "ypiiBradescard.wav";
            break;
        }
    
    dados['NomeCartaoNumB'] = ret;
    __Log('dados.NomeCartaoNumB : ' + dados['NomeCartaoNumB']);
    __Log('dados.eTipoAtendimento : ' + dados['eTipoAtendimento']);
    __Log('dados.eAtendimento : ' + dados['eAtendimento']);
        
    return dados;
    
}

function verTemCartaoValidoBloqueio(dados) {

	var TotalCartoes = parseInt(dados.UR8F.QtdeCartoes);
	dados['indiceValidoBloqueio'] = '';
	dados['indiceValidoBloqueioTit'] = '';
	dados['indiceValidoBloqueioAdic'] = '';
	dados['ListaCartoesAdicionaisBloqueio'] = [];
	dados['ListaCartoesTitularBloqueio'] = [];
	var ListaCartoesAdicionaisBloqueio= [];
	var ListaCartoesTitularBloqueio= [];

	for(var i = 0; i < TotalCartoes; i++){

		if (EhCartaoValidoBloqueio(dados, i)) {
			 dados['sListaCartoesValidosBloqueio'] = dados['sListaCartoesValidosBloqueio'] + i.toString() + ";";
			 dados['iQtdListaCartoesValidosBloqueio'] = dados['iQtdListaCartoesValidosBloqueio'] + 1;
			 if(dados['indiceValidoBloqueio'] == ''){		       
		         dados['indiceValidoBloqueio'] = i +';';
		     }else{
		    	dados['indiceValidoBloqueio'] += i +';';
		     }    
			 
			 if (dados['UR8FCartoes'][i]['IndTitAdic'] == '1' ){
				ListaCartoesAdicionaisBloqueio[i] = dados['UR8FCartoes'][i];
				dados['sListaCartoesAdicionais'] = dados['sListaCartoesAdicionais'] + i.toString() + ";";
				dados['iQtdListaCartoesValidosBloqueioAdicionais'] = dados['iQtdListaCartoesValidosBloqueioAdicionais'] + 1;
				 if(dados['indiceValidoBloqueioAdic'] == ''){		       
			         dados['indiceValidoBloqueioAdic'] = i +';';
			     }else{
			    	dados['indiceValidoBloqueioAdic'] += i +';';
			     }    
				 
			 } else { 
				
				ListaCartoesTitularBloqueio[i] = dados['UR8FCartoes'][i];
				dados['sListaCartoesTitulares'] = dados['sListaCartoesTitulares'] + i.toString() + ";";
				dados['iQtdListaCartoesValidosBloqueioTitulares'] = dados['iQtdListaCartoesValidosBloqueioTitulares'] + 1;
				 if(dados['indiceValidoBloqueioTit'] == ''){		       
			         dados['indiceValidoBloqueioTit'] = i +';';
			     }else{
			    	dados['indiceValidoBloqueioTit'] += i +';';
			     }
			}
		}	
	}
	
	    dados.ListaCartoesAdicionaisBloqueio = ListaCartoesAdicionaisBloqueio.filter(function (i) {
		  return i;
		});
		dados.ListaCartoesTitularBloqueio = ListaCartoesTitularBloqueio.filter(function (i) {
		  return i;
		});
	
	__Log('############# dados.ListaCartoesAdicionaisBloqueio : ' + JSON.stringify(dados.ListaCartoesAdicionaisBloqueio));
	__Log('############# dados.ListaCartoesTitularBloqueio : ' + JSON.stringify(dados.ListaCartoesTitularBloqueio));
	__Log('############# dados.indiceValidoBloqueioTit : ' + dados.indiceValidoBloqueioTit);
	__Log('############# dados.indiceValidoBloqueioAdic : ' + dados.indiceValidoBloqueioAdic);
	__Log('############# dados.sListaCartoesValidosBloqueio : ' + dados.sListaCartoesValidosBloqueio);
	__Log('############# dados.iQtdListaCartoesValidosBloqueio : ' + dados.iQtdListaCartoesValidosBloqueio);
	__Log('############ dados.sListaCartoesAdicionais : ' + dados.sListaCartoesAdicionais);
	__Log('############# dados.iQtdListaCartoesValidosBloqueioAdicionais : ' + dados.iQtdListaCartoesValidosBloqueioAdicionais);
	__Log('############# dados.sListaCartoesTitulares : ' + dados.sListaCartoesTitulares);
	__Log('############# dados.iQtdListaCartoesValidosBloqueioTitulares : ' + dados.iQtdListaCartoesValidosBloqueioTitulares);

	return dados;
}

function nomeTipoCartaoConfDesbloqueio(dados) {
	
	var ret = "";
	var iORG;
	var iLOGO;
	var iCartao;

	//VALIDAR
	var iORG = dados.sORGCartao;
	var iLOGO = dados.sLogoCartao; //val(AplUR8FCartoes(T_Fluxo).LOGO(val(iIndiceORGValido(T_Fluxo))))
	var iCartao = dados.sNumeroCartaoCPF.substring(5, 11); //Mid(AplUR8FCartoes(T_Fluxo).NumCartao(val(iIndiceORGValido(T_Fluxo))), 4, 6)
	//VALIDAR

	switch (iORG) {
		case '10':
			ret = "ypiiC&A.wav";
			break;
		case '11':
			ret = "ypiiC&AMastercard.wav";
			break;
		case '13':
			if (dados.parametros.HabDtVisaGold && iCartao == "428267") {
				ret = "ypiiC&AVisaGold.wav";
			} else {
				ret = "ypiiC&Avisa.wav";
			}
			break;
		case '14':
			ret = "ypiiIbicardMasterCard.wav";
			break;
		case '15':
			ret = "ypiiIBICArdVisa.wav";
			break;
		case '16':
			ret = "ypiiC&A.wav";
			break;
		case '17':
			ret = "ypiiDoTzMastercard.wav";
			break;
		case '18':
			ret = "ypiiIbicredo.wav";
			break;
		case '19':
			ret = "ypiiIBIcard.wav";
			break;
		case '20':
			ret = "ypiiBradescard.wav";
			break;
		case '21':
			ret = "ypiiBradescard.wav";
			break;
		case '22':
			ret = "ypiiBradescard.wav";
			break;
		case '23':
			ret = "ypiiIbicredC&A.wav";
			break;
		case '24':
			ret = "ypiiC&A.wav";
			break;
		case '25':
			ret = "ypiiIBIcard.wav";
			break;
		case '26':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '27':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '28':
			ret = "ypiiBradescard.wav";
			break;
		case '29':
			ret = "ypiiBradescard.wav";
			break;
		case '30':
			ret = "ypiiBradescard.wav";
			break;
		case '32':
			ret = "ypiiBradescard.wav";
			break;
		case '33':
			ret = "ypiiBradescard.wav";
			break;
		case '34':
			ret = "ypiiBradescard.wav";
			break;
		case '36':
			ret = "ypiiBradescard.wav";
			break;
		case '38':
			switch (iLOGO) {
				case '22':
					ret = "ypiiMateusVisaNacional.wav";
					break;
				case '30':
					ret = "ypiiMateusMastercardInter.wav";
					break;
				case '38':
					if (SeDataEloMais(dados)) { //VALIDAR
						ret = "ypiiMateusCartdEloMais.wav";
					} else {
						ret = "ypiiMateusEloInternacional.wav";
					}
					break;
				case '48':
					ret = "ypiiMateusEloMais.wav";
					break;
			}
			break;
		case '40':
			ret = "ypiiBradescard.wav";
			break;
		case '42':
			ret = "ypiiBradescard.wav";
			break;
		case '44':
			ret = "ypiiBradescard.wav";
			break;
		case '45':
			ret = "ypiiBradescard.wav";
			break;
		case '46':
			if (dados.parametros.HabDtVisaGold && iCartao == "418049") {
				ret = "ypiiMakroVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiMakroEloMais.wav";
			} else {
				ret = "ypiiMakro.wav";
			}
			break;
		case '47':
			ret = "ypiiBradescard.wav";
			break;
		case '48':
			ret = "ypiiBradescard.wav";
			break;
		case '49':
			ret = "ypiiBradescard.wav";
			break;
		case '52':
			ret = "ypiiAngeloni.wav";
			break;
		case '53':
			ret = "ypiiAngeloniMastercard.wav";
			break;
		case '54':
			ret = "ypiiAngeloniVisa.wav";
			break;
		case '55':
			if (dados.parametros.HabDtVisaGold && iCartao == "422011") {
				ret = "ypiiAngeloniVisaGold.wav";
			} else {
				ret = "ypiiAngeloniVisa.wav";
			}
			break;
		case '56':
			ret = "ypiiBradescard.wav";
			break;
		case '57':
			ret = "ypiiBradescard.wav";
			break;
		case '59':
			if (dados.parametros.HabDtVisaGold && iCartao == "420339") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '61':
			ret = "ypiiCanalJeans.wav";
			break;
		case '62':
			ret = "ypiiCanalJeans.wav";
			break;
		case '63':
			ret = "ypiiCanalJeans.wav";
			break;
		case '64':
			ret = "ypiiCanalJeans.wav";
			break;
		case '65':
			ret = "ypiiCanalJeans.wav";
			break;
		case '67':
			ret = "ypiiBradescard.wav";
			break;
		case '69':
			if (dados.parametros.HabDtVisaGold && iCartao == "457302") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '72':
			if (dados.parametros.HabDtVisaGold && iCartao == "457292") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiLuigiBertolli.wav";
			}
			break;
		case '74':
			ret = "ypiiBradescard.wav";
			break;
		case '77':
			ret = "ypiiCompcard.wav";
			break;
		case '79':
			ret = "ypiiBradescard.wav";
			break;
		case '81':
			if (dados.parametros.HabDtVisaGold && iCartao == "457294") {
				ret = "ypiiCoopVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiCoopFacilEloMais.wav";
			} else {
				ret = "ypiiCoopcopil.wav";
			}
			break;
		case '89':
			if (dados.parametros.HabDtVisaGold && iCartao == "418048") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '91':
			if (dados.parametros.HabDtVisaGold && iCartao == "457304") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '101':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '102':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '106':
			ret = "ypiiCasasBahia.wav";
			break;
		case '108':
			ret = "ypiiC&C.wav";
			break;
		case '112':
			ret = "ypiiCarajas.wav";
			break;
		case '114':
			ret = "ypiiBradExpresso.wav";
			break;
		case '116':
			ret = "ypiiFujioka.wav";
			break;
		case '122':
			if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiC&aEloMais.wav";
			} else {
				ret = "ypiiC&Aelo.wav";
			}
			break;
		case '123':
			ret = "ypiiAngeloni.wav";
			break;
		case '126':
			if (dados.parametros.HabDtVisaGold && iCartao == "444666") {
				ret = "ypiiBradescardVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR1
				ret = "ypiiSodimacEloMais.wav";
			} else {
				if (dados.parametros.HabReestruturacaoVDNs) {
					ret = "ypiiSodimac.wav";
				} else {
					ret = "ypiiBradescard.wav";
				}
			}
			break;
		case '136':
			ret = "ypiiNossoLar.wav";
			break;
		case '510':
			ret = "ypiiIbicardElo.wav";
			break;
		case '568':
			ret = "ypiiBradescard.wav";
			break;
		case '569':
			ret = "ypiiBradescardElo.wav";
			break;
		case '571':
			ret = "ypiiConsigBradescard.wav";
			break;
		case '573':
			ret = "ypiiConsigBradescard.wav";
			break;
		default:
			ret = "ypiiBradescard.wav";
	}

	return ret;
}
/*
function verificaPropostasValidas(dados, detLinha) {
	var obj_analisePropostas = new Object();
	var sListaORGsAtd = '';
	var sListaORGsAtd1 = '';
	var sListaORGsAtd2 = '';
	var iNroDiasPropostaValida = '';    
	var sListaORGsAtd = '';
	var iTotalProposta = 0
	var iTotalAprovadas = 0;
	var iTotalReprovadas = 0;
	var iTotalEmAnalise = 0;
	obj_analisePropostas.strRespPropostasA = {};
	obj_analisePropostas.strRespPropostasA.DetLinha = [];
	obj_analisePropostas.strRespPropostasR = {};
	obj_analisePropostas.strRespPropostasR.DetLinha = [];
	obj_analisePropostas.strRespPropostasEmAna = {};
	obj_analisePropostas.strRespPropostasEmAna.DetLinha = [];


	for (var i = 0; i < detLinha.length; i++) {

		var strORG = detLinha[i].strORG;
		var strLogo = detLinha[i].strLOGO;
		var strStatus = detLinha[i].strStatus;
		var strData = detLinha[i].strData;
		var strSafra = detLinha[i].DtSafra;

		__Log('************************************************** Posicao:' + i);
		__Log('-----> strORG : '+ strORG);
		__Log('-----> strLogo : '+ strLogo);
		__Log('-----> strStatus : '+ strStatus);
		__Log('-----> strData : '+ strData);
		__Log('-----> eAtendimento : '+ dados['eAtendimento']);
		

		switch (dados['eAtendimento']) {  
			case 'ATD_PL':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdPL'];
			break;
			case 'ATD_MAKRO':
			case 'ATD_HOTLINE_MAKRO':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdMakro'];
			break;
			case 'ATD_DOTZ':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdDotz'];
			break;
			case 'ATD_ANGELONI':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdAngeloni'];
			break;
			case 'ATD_ESKALA':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdEskala'];
			break;
			case 'ATD_MATEUS_CARD':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdMateusCard'];
			break;
			case 'ATD_ELO_CARD':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdEloCard'];
			break;
			case 'ATD_ELO_CONSIGNADO':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdEloConsignado'];
			break;
			case 'ATD_PAGUE_MENOS':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdPagueMenos'];
			break;
			case 'ATD_TNG':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdTNG'];
			break;
			case 'ATD_CVC':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdCVC'];
			break;
			case 'ATD_IBICARD':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdIBICard'];
			break;
			case 'ATD_HOT_LINE_CEA':
				sListaORGsAtd = dados['parametros']['ListaORGsAtdHotLineCEA'];
			break;
			case 'ATD_DEFAULT_7332':
				var aux = dados['parametros']['ListaORGsAtdDefault7332_1'];
				aux = aux + dados['parametros']['ListaORGsAtdDefault7332_2'];
				sListaORGsAtd = aux;
			break;
			default:
				var aux = dados['parametros']['ListaORGsAtdDefault7332_1'];
				aux = aux + dados['parametros']['ListaORGsAtdDefault7332_2'];
				sListaORGsAtd = aux;
			break;
		}

		__Log('-----> sListaORGsAtd : '+ sListaORGsAtd); 
		
		if ((sListaORGsAtd.indexOf(strORG) >= 0 ) || sListaORGsAtd.indexOf('TODOS') >= 0  ){ // 'ORG do atendimento correto
			__Log('---------------------------> Entrou IF sListaORGsAtd : '+ sListaORGsAtd);    	
		if(strData != '' || strData != undefined  ) {
				//__Log('---------------------------> Entrou IF strData : '+ strData);
				iNroDiasPropostaValida =  dados['parametros']['NroDiasPropostaValida'];
				if (parseInt(iNroDiasPropostaValida) > 0 ){
					__Log('---------------------------> strData : '+ strData.substring(7, 9));
					__Log('---------------------------> iNroDiasPropostaValida : ' + iNroDiasPropostaValida);

					if (parseInt(strData.substring(7, 9)) <= parseInt(iNroDiasPropostaValida)) {
						//__Log('---------------------------> ENTROU strStatus : '+ strStatus);
						//__Log('---------------------------> ENTROU strORG : '+ strORG);
						

						switch (parseInt(strStatus)) {  
							case 1: //APROVADO
							__Log('---------------------------> ENTROU FLUXO APROVADO : ');
							
							obj_analisePropostas.strRespPropostasA.DetLinha[iTotalAprovadas] = {};							
							obj_analisePropostas.strRespPropostasA.DetLinha[iTotalAprovadas].ORG = strORG;
							obj_analisePropostas.strRespPropostasA.DetLinha[iTotalAprovadas].LOGO = strLogo;
							obj_analisePropostas.strRespPropostasA.DetLinha[iTotalAprovadas].DtSafra = strSafra;

							iTotalProposta = iTotalProposta + 1;
							obj_analisePropostas.iTotalProposta = iTotalProposta
							iTotalAprovadas = iTotalAprovadas + 1;
							obj_analisePropostas.strRespPropostasA.iTotalAprovadas = iTotalAprovadas;
								//__Log('--------------------------->obj_analisePropostas.iTotalAprovadas  : '+ obj_analisePropostas.iTotalAprovadas);
								//__Log('--------------------------->AppState.analisePropostas.strRespPropostasA  : '+ JSON.stringify(obj_analisePropostas.strRespPropostasA));

								var data = strData.replace("-", "");
								//__Log('-----> data : '+ data.replace("-", ""));

								if(parseInt(data.replace("-", "")) > 0 ){ ////Abs(DateDiff("d", strData, Now)) > 10 Then
									obj_analisePropostas.strRespPropostasA.bExisteAproMais10D = true;
									//__Log('-----> obj_analisePropostas dentro: ' + JSON.stringify(obj_analisePropostas));
								}	                                                       
								__Log('---------------------------> obj_analisePropostas  : '+ JSON.stringify(obj_analisePropostas));

								break;
							
							case 2: //REPROVADO
								__Log('---------------------------> ENTROU FLUXO REPROVADO : ');

								obj_analisePropostas.strRespPropostasR.DetLinha[iTotalReprovadas] = {};							
								obj_analisePropostas.strRespPropostasR.DetLinha[iTotalReprovadas].ORG = strORG;
								obj_analisePropostas.strRespPropostasR.DetLinha[iTotalReprovadas].LOGO = strLogo;
								obj_analisePropostas.strRespPropostasR.DetLinha[iTotalReprovadas].DtSafra = strSafra;

								iTotalProposta = iTotalProposta + 1;
								obj_analisePropostas.iTotalProposta = iTotalProposta
								iTotalReprovadas = iTotalReprovadas + 1;
								obj_analisePropostas.strRespPropostasR.iTotalReprovadas = iTotalReprovadas;
								__Log('---------------------------> obj_analisePropostas  : '+ JSON.stringify(obj_analisePropostas));
								break;

							case 3: //EM ANALISE
								__Log('---------------------------> ENTROU FLUXO EM ANALISE : ');

								obj_analisePropostas.strRespPropostasEmAna.DetLinha[iTotalEmAnalise] = {};							
								obj_analisePropostas.strRespPropostasEmAna.DetLinha[iTotalEmAnalise].ORG = strORG;
								obj_analisePropostas.strRespPropostasEmAna.DetLinha[iTotalEmAnalise].LOGO = strLogo;
								obj_analisePropostas.strRespPropostasEmAna.DetLinha[iTotalEmAnalise].DtSafra = strSafra;

								iTotalProposta = iTotalProposta + 1;
								obj_analisePropostas.iTotalProposta = iTotalProposta
								iTotalEmAnalise = iTotalEmAnalise + 1;
								obj_analisePropostas.strRespPropostasEmAna.iTotalEmAnalise = iTotalEmAnalise;
								__Log('--------------------------->obj_analisePropostas  : '+ JSON.stringify(obj_analisePropostas));
							break;	

							default: //erro
							break;
						}
					}
				}
			}  
		} 
	}

	return obj_analisePropostas;

}
*/
/*
function nomeTipoCartaoPropostaAprovada(dados, contador) {
	
	var ret = "";
	var iORG;
	var iLOGO;
	var iCartao;

	//VALIDAR
	iORG = dados.analisePropostas.strRespPropostasA.DetLinha[contador].ORG;
	iLOGO = dados.analisePropostas.strRespPropostasA.DetLinha[contador].LOGO; //val(AplUR8FCartoes(T_Fluxo).LOGO(val(iIndiceORGValido(T_Fluxo))))
	iCartao = dados.analisePropostas.strRespPropostasA.DetLinha[contador].ORG.substring(5, 11); //Mid(AplUR8FCartoes(T_Fluxo).NumCartao(val(iIndiceORGValido(T_Fluxo))), 4, 6)
	//VALIDAR

	switch (iORG) {
		case '10':
			ret = "ypiiC&A.wav";
			break;
		case '11':
			ret = "ypiiC&AMastercard.wav";
			break;
		case '13':
			if (dados.parametros.HabDtVisaGold && iCartao == "428267") {
				ret = "ypiiC&AVisaGold.wav";
			} else {
				ret = "ypiiC&Avisa.wav";
			}
			break;
		case '14':
			ret = "ypiiIbicardMasterCard.wav";
			break;
		case '15':
			ret = "ypiiIBICArdVisa.wav";
			break;
		case '16':
			ret = "ypiiC&A.wav";
			break;
		case '17':
			ret = "ypiiDoTzMastercard.wav";
			break;
		case '18':
			ret = "ypiiIbicredo.wav";
			break;
		case '19':
			ret = "ypiiIBIcard.wav";
			break;
		case '20':
			ret = "ypiiBradescard.wav";
			break;
		case '21':
			ret = "ypiiBradescard.wav";
			break;
		case '22':
			ret = "ypiiBradescard.wav";
			break;
		case '23':
			ret = "ypiiIbicredC&A.wav";
			break;
		case '24':
			ret = "ypiiC&A.wav";
			break;
		case '25':
			ret = "ypiiIBIcard.wav";
			break;
		case '26':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '27':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '28':
			ret = "ypiiBradescard.wav";
			break;
		case '29':
			ret = "ypiiBradescard.wav";
			break;
		case '30':
			ret = "ypiiBradescard.wav";
			break;
		case '32':
			ret = "ypiiBradescard.wav";
			break;
		case '33':
			ret = "ypiiBradescard.wav";
			break;
		case '34':
			ret = "ypiiBradescard.wav";
			break;
		case '36':
			ret = "ypiiBradescard.wav";
			break;
		case '38':
			switch (iLOGO) {
				case '22':
					ret = "ypiiMateusVisaNacional.wav";
					break;
				case '30':
					ret = "ypiiMateusMastercardInter.wav";
					break;
				case '38':
					if (SeDataEloMais(dados)) { //VALIDAR
						ret = "ypiiMateusCartdEloMais.wav";
					} else {
						ret = "ypiiMateusEloInternacional.wav";
					}
					break;
				case '48':
					ret = "ypiiMateusEloMais.wav";
					break;
			}
			break;
		case '40':
			ret = "ypiiBradescard.wav";
			break;
		case '42':
			ret = "ypiiBradescard.wav";
			break;
		case '44':
			ret = "ypiiBradescard.wav";
			break;
		case '45':
			ret = "ypiiBradescard.wav";
			break;
		case '46':
			if (dados.parametros.HabDtVisaGold && iCartao == "418049") {
				ret = "ypiiMakroVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiMakroEloMais.wav";
			} else {
				ret = "ypiiMakro.wav";
			}
			break;
		case '47':
			ret = "ypiiBradescard.wav";
			break;
		case '48':
			ret = "ypiiBradescard.wav";
			break;
		case '49':
			ret = "ypiiBradescard.wav";
			break;
		case '52':
			ret = "ypiiAngeloni.wav";
			break;
		case '53':
			ret = "ypiiAngeloniMastercard.wav";
			break;
		case '54':
			ret = "ypiiAngeloniVisa.wav";
			break;
		case '55':
			if (dados.parametros.HabDtVisaGold && iCartao == "422011") {
				ret = "ypiiAngeloniVisaGold.wav";
			} else {
				ret = "ypiiAngeloniVisa.wav";
			}
			break;
		case '56':
			ret = "ypiiBradescard.wav";
			break;
		case '57':
			ret = "ypiiBradescard.wav";
			break;
		case '59':
			if (dados.parametros.HabDtVisaGold && iCartao == "420339") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '61':
			ret = "ypiiCanalJeans.wav";
			break;
		case '62':
			ret = "ypiiCanalJeans.wav";
			break;
		case '63':
			ret = "ypiiCanalJeans.wav";
			break;
		case '64':
			ret = "ypiiCanalJeans.wav";
			break;
		case '65':
			ret = "ypiiCanalJeans.wav";
			break;
		case '67':
			ret = "ypiiBradescard.wav";
			break;
		case '69':
			if (dados.parametros.HabDtVisaGold && iCartao == "457302") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '72':
			if (dados.parametros.HabDtVisaGold && iCartao == "457292") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiLuigiBertolli.wav";
			}
			break;
		case '74':
			ret = "ypiiBradescard.wav";
			break;
		case '77':
			ret = "ypiiCompcard.wav";
			break;
		case '79':
			ret = "ypiiBradescard.wav";
			break;
		case '81':
			if (dados.parametros.HabDtVisaGold && iCartao == "457294") {
				ret = "ypiiCoopVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiCoopFacilEloMais.wav";
			} else {
				ret = "ypiiCoopcopil.wav";
			}
			break;
		case '89':
			if (dados.parametros.HabDtVisaGold && iCartao == "418048") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '91':
			if (dados.parametros.HabDtVisaGold && iCartao == "457304") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '101':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '102':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '106':
			ret = "ypiiCasasBahia.wav";
			break;
		case '108':
			ret = "ypiiC&C.wav";
			break;
		case '112':
			ret = "ypiiCarajas.wav";
			break;
		case '114':
			ret = "ypiiBradExpresso.wav";
			break;
		case '116':
			ret = "ypiiFujioka.wav";
			break;
		case '122':
			if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiC&aEloMais.wav";
			} else {
				ret = "ypiiC&Aelo.wav";
			}
			break;
		case '123':
			ret = "ypiiAngeloni.wav";
			break;
		case '126':
			if (dados.parametros.HabDtVisaGold && iCartao == "444666") {
				ret = "ypiiBradescardVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR1
				ret = "ypiiSodimacEloMais.wav";
			} else {
				if (dados.parametros.HabReestruturacaoVDNs) {
					ret = "ypiiSodimac.wav";
				} else {
					ret = "ypiiBradescard.wav";
				}
			}
			break;
		case '136':
			ret = "ypiiNossoLar.wav";
			break;
		case '510':
			ret = "ypiiIbicardElo.wav";
			break;
		case '568':
			ret = "ypiiBradescard.wav";
			break;
		case '569':
			ret = "ypiiBradescardElo.wav";
			break;
		case '571':
			ret = "ypiiConsigBradescard.wav";
			break;
		case '573':
			ret = "ypiiConsigBradescard.wav";
			break;
		default:
			ret = "ypiiBradescard.wav";
	}

	return ret;
}
*/
/*
function nomeTipoCartaoPropostaReprovada(dados, contador) {
	
	var ret = "";
	var iORG;
	var iLOGO;
	var iCartao;

	//VALIDAR
	iORG = dados.analisePropostas.strRespPropostasR.DetLinha[contador].ORG;
	iLOGO = dados.analisePropostas.strRespPropostasR.DetLinha[contador].LOGO; //val(AplUR8FCartoes(T_Fluxo).LOGO(val(iIndiceORGValido(T_Fluxo))))
	iCartao = dados.analisePropostas.strRespPropostasR.DetLinha[contador].ORG.substring(5, 11); //Mid(AplUR8FCartoes(T_Fluxo).NumCartao(val(iIndiceORGValido(T_Fluxo))), 4, 6)
	//VALIDAR

	switch (iORG) {
		case '10':
			ret = "ypiiC&A.wav";
			break;
		case '11':
			ret = "ypiiC&AMastercard.wav";
			break;
		case '13':
			if (dados.parametros.HabDtVisaGold && iCartao == "428267") {
				ret = "ypiiC&AVisaGold.wav";
			} else {
				ret = "ypiiC&Avisa.wav";
			}
			break;
		case '14':
			ret = "ypiiIbicardMasterCard.wav";
			break;
		case '15':
			ret = "ypiiIBICArdVisa.wav";
			break;
		case '16':
			ret = "ypiiC&A.wav";
			break;
		case '17':
			ret = "ypiiDoTzMastercard.wav";
			break;
		case '18':
			ret = "ypiiIbicredo.wav";
			break;
		case '19':
			ret = "ypiiIBIcard.wav";
			break;
		case '20':
			ret = "ypiiBradescard.wav";
			break;
		case '21':
			ret = "ypiiBradescard.wav";
			break;
		case '22':
			ret = "ypiiBradescard.wav";
			break;
		case '23':
			ret = "ypiiIbicredC&A.wav";
			break;
		case '24':
			ret = "ypiiC&A.wav";
			break;
		case '25':
			ret = "ypiiIBIcard.wav";
			break;
		case '26':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '27':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '28':
			ret = "ypiiBradescard.wav";
			break;
		case '29':
			ret = "ypiiBradescard.wav";
			break;
		case '30':
			ret = "ypiiBradescard.wav";
			break;
		case '32':
			ret = "ypiiBradescard.wav";
			break;
		case '33':
			ret = "ypiiBradescard.wav";
			break;
		case '34':
			ret = "ypiiBradescard.wav";
			break;
		case '36':
			ret = "ypiiBradescard.wav";
			break;
		case '38':
			switch (iLOGO) {
				case '22':
					ret = "ypiiMateusVisaNacional.wav";
					break;
				case '30':
					ret = "ypiiMateusMastercardInter.wav";
					break;
				case '38':
					if (SeDataEloMais(dados)) { //VALIDAR
						ret = "ypiiMateusCartdEloMais.wav";
					} else {
						ret = "ypiiMateusEloInternacional.wav";
					}
					break;
				case '48':
					ret = "ypiiMateusEloMais.wav";
					break;
			}
			break;
		case '40':
			ret = "ypiiBradescard.wav";
			break;
		case '42':
			ret = "ypiiBradescard.wav";
			break;
		case '44':
			ret = "ypiiBradescard.wav";
			break;
		case '45':
			ret = "ypiiBradescard.wav";
			break;
		case '46':
			if (dados.parametros.HabDtVisaGold && iCartao == "418049") {
				ret = "ypiiMakroVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiMakroEloMais.wav";
			} else {
				ret = "ypiiMakro.wav";
			}
			break;
		case '47':
			ret = "ypiiBradescard.wav";
			break;
		case '48':
			ret = "ypiiBradescard.wav";
			break;
		case '49':
			ret = "ypiiBradescard.wav";
			break;
		case '52':
			ret = "ypiiAngeloni.wav";
			break;
		case '53':
			ret = "ypiiAngeloniMastercard.wav";
			break;
		case '54':
			ret = "ypiiAngeloniVisa.wav";
			break;
		case '55':
			if (dados.parametros.HabDtVisaGold && iCartao == "422011") {
				ret = "ypiiAngeloniVisaGold.wav";
			} else {
				ret = "ypiiAngeloniVisa.wav";
			}
			break;
		case '56':
			ret = "ypiiBradescard.wav";
			break;
		case '57':
			ret = "ypiiBradescard.wav";
			break;
		case '59':
			if (dados.parametros.HabDtVisaGold && iCartao == "420339") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '61':
			ret = "ypiiCanalJeans.wav";
			break;
		case '62':
			ret = "ypiiCanalJeans.wav";
			break;
		case '63':
			ret = "ypiiCanalJeans.wav";
			break;
		case '64':
			ret = "ypiiCanalJeans.wav";
			break;
		case '65':
			ret = "ypiiCanalJeans.wav";
			break;
		case '67':
			ret = "ypiiBradescard.wav";
			break;
		case '69':
			if (dados.parametros.HabDtVisaGold && iCartao == "457302") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '72':
			if (dados.parametros.HabDtVisaGold && iCartao == "457292") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiLuigiBertolli.wav";
			}
			break;
		case '74':
			ret = "ypiiBradescard.wav";
			break;
		case '77':
			ret = "ypiiCompcard.wav";
			break;
		case '79':
			ret = "ypiiBradescard.wav";
			break;
		case '81':
			if (dados.parametros.HabDtVisaGold && iCartao == "457294") {
				ret = "ypiiCoopVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiCoopFacilEloMais.wav";
			} else {
				ret = "ypiiCoopcopil.wav";
			}
			break;
		case '89':
			if (dados.parametros.HabDtVisaGold && iCartao == "418048") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '91':
			if (dados.parametros.HabDtVisaGold && iCartao == "457304") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '101':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '102':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '106':
			ret = "ypiiCasasBahia.wav";
			break;
		case '108':
			ret = "ypiiC&C.wav";
			break;
		case '112':
			ret = "ypiiCarajas.wav";
			break;
		case '114':
			ret = "ypiiBradExpresso.wav";
			break;
		case '116':
			ret = "ypiiFujioka.wav";
			break;
		case '122':
			if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiC&aEloMais.wav";
			} else {
				ret = "ypiiC&Aelo.wav";
			}
			break;
		case '123':
			ret = "ypiiAngeloni.wav";
			break;
		case '126':
			if (dados.parametros.HabDtVisaGold && iCartao == "444666") {
				ret = "ypiiBradescardVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR1
				ret = "ypiiSodimacEloMais.wav";
			} else {
				if (dados.parametros.HabReestruturacaoVDNs) {
					ret = "ypiiSodimac.wav";
				} else {
					ret = "ypiiBradescard.wav";
				}
			}
			break;
		case '136':
			ret = "ypiiNossoLar.wav";
			break;
		case '510':
			ret = "ypiiIbicardElo.wav";
			break;
		case '568':
			ret = "ypiiBradescard.wav";
			break;
		case '569':
			ret = "ypiiBradescardElo.wav";
			break;
		case '571':
			ret = "ypiiConsigBradescard.wav";
			break;
		case '573':
			ret = "ypiiConsigBradescard.wav";
			break;
		default:
			ret = "ypiiBradescard.wav";
	}

	return ret;
}
*/
/* Avaliar
function nomeTipoCartaoPropostaEmAnalise(dados, contador) {
	
	var ret = "";
	var iORG;
	var iLOGO;
	var iCartao;

	//VALIDAR
	iORG = dados.analisePropostas.strRespPropostasEmAna.DetLinha[contador].ORG;
	iLOGO = dados.analisePropostas.strRespPropostasEmAna.DetLinha[contador].LOGO; //val(AplUR8FCartoes(T_Fluxo).LOGO(val(iIndiceORGValido(T_Fluxo))))
	iCartao = dados.analisePropostas.strRespPropostasEmAna.DetLinha[contador].ORG.substring(5, 11); //Mid(AplUR8FCartoes(T_Fluxo).NumCartao(val(iIndiceORGValido(T_Fluxo))), 4, 6)
	//VALIDAR

	switch (iORG) {
		case '10':
			ret = "ypiiC&A.wav";
			break;
		case '11':
			ret = "ypiiC&AMastercard.wav";
			break;
		case '13':
			if (dados.parametros.HabDtVisaGold && iCartao == "428267") {
				ret = "ypiiC&AVisaGold.wav";
			} else {
				ret = "ypiiC&Avisa.wav";
			}
			break;
		case '14':
			ret = "ypiiIbicardMasterCard.wav";
			break;
		case '15':
			ret = "ypiiIBICArdVisa.wav";
			break;
		case '16':
			ret = "ypiiC&A.wav";
			break;
		case '17':
			ret = "ypiiDoTzMastercard.wav";
			break;
		case '18':
			ret = "ypiiIbicredo.wav";
			break;
		case '19':
			ret = "ypiiIBIcard.wav";
			break;
		case '20':
			ret = "ypiiBradescard.wav";
			break;
		case '21':
			ret = "ypiiBradescard.wav";
			break;
		case '22':
			ret = "ypiiBradescard.wav";
			break;
		case '23':
			ret = "ypiiIbicredC&A.wav";
			break;
		case '24':
			ret = "ypiiC&A.wav";
			break;
		case '25':
			ret = "ypiiIBIcard.wav";
			break;
		case '26':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '27':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '28':
			ret = "ypiiBradescard.wav";
			break;
		case '29':
			ret = "ypiiBradescard.wav";
			break;
		case '30':
			ret = "ypiiBradescard.wav";
			break;
		case '32':
			ret = "ypiiBradescard.wav";
			break;
		case '33':
			ret = "ypiiBradescard.wav";
			break;
		case '34':
			ret = "ypiiBradescard.wav";
			break;
		case '36':
			ret = "ypiiBradescard.wav";
			break;
		case '38':
			switch (iLOGO) {
				case '22':
					ret = "ypiiMateusVisaNacional.wav";
					break;
				case '30':
					ret = "ypiiMateusMastercardInter.wav";
					break;
				case '38':
					if (SeDataEloMais(dados)) { //VALIDAR
						ret = "ypiiMateusCartdEloMais.wav";
					} else {
						ret = "ypiiMateusEloInternacional.wav";
					}
					break;
				case '48':
					ret = "ypiiMateusEloMais.wav";
					break;
			}
			break;
		case '40':
			ret = "ypiiBradescard.wav";
			break;
		case '42':
			ret = "ypiiBradescard.wav";
			break;
		case '44':
			ret = "ypiiBradescard.wav";
			break;
		case '45':
			ret = "ypiiBradescard.wav";
			break;
		case '46':
			if (dados.parametros.HabDtVisaGold && iCartao == "418049") {
				ret = "ypiiMakroVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiMakroEloMais.wav";
			} else {
				ret = "ypiiMakro.wav";
			}
			break;
		case '47':
			ret = "ypiiBradescard.wav";
			break;
		case '48':
			ret = "ypiiBradescard.wav";
			break;
		case '49':
			ret = "ypiiBradescard.wav";
			break;
		case '52':
			ret = "ypiiAngeloni.wav";
			break;
		case '53':
			ret = "ypiiAngeloniMastercard.wav";
			break;
		case '54':
			ret = "ypiiAngeloniVisa.wav";
			break;
		case '55':
			if (dados.parametros.HabDtVisaGold && iCartao == "422011") {
				ret = "ypiiAngeloniVisaGold.wav";
			} else {
				ret = "ypiiAngeloniVisa.wav";
			}
			break;
		case '56':
			ret = "ypiiBradescard.wav";
			break;
		case '57':
			ret = "ypiiBradescard.wav";
			break;
		case '59':
			if (dados.parametros.HabDtVisaGold && iCartao == "420339") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '61':
			ret = "ypiiCanalJeans.wav";
			break;
		case '62':
			ret = "ypiiCanalJeans.wav";
			break;
		case '63':
			ret = "ypiiCanalJeans.wav";
			break;
		case '64':
			ret = "ypiiCanalJeans.wav";
			break;
		case '65':
			ret = "ypiiCanalJeans.wav";
			break;
		case '67':
			ret = "ypiiBradescard.wav";
			break;
		case '69':
			if (dados.parametros.HabDtVisaGold && iCartao == "457302") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '72':
			if (dados.parametros.HabDtVisaGold && iCartao == "457292") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiLuigiBertolli.wav";
			}
			break;
		case '74':
			ret = "ypiiBradescard.wav";
			break;
		case '77':
			ret = "ypiiCompcard.wav";
			break;
		case '79':
			ret = "ypiiBradescard.wav";
			break;
		case '81':
			if (dados.parametros.HabDtVisaGold && iCartao == "457294") {
				ret = "ypiiCoopVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiCoopFacilEloMais.wav";
			} else {
				ret = "ypiiCoopcopil.wav";
			}
			break;
		case '89':
			if (dados.parametros.HabDtVisaGold && iCartao == "418048") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '91':
			if (dados.parametros.HabDtVisaGold && iCartao == "457304") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '101':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '102':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '106':
			ret = "ypiiCasasBahia.wav";
			break;
		case '108':
			ret = "ypiiC&C.wav";
			break;
		case '112':
			ret = "ypiiCarajas.wav";
			break;
		case '114':
			ret = "ypiiBradExpresso.wav";
			break;
		case '116':
			ret = "ypiiFujioka.wav";
			break;
		case '122':
			if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiC&aEloMais.wav";
			} else {
				ret = "ypiiC&Aelo.wav";
			}
			break;
		case '123':
			ret = "ypiiAngeloni.wav";
			break;
		case '126':
			if (dados.parametros.HabDtVisaGold && iCartao == "444666") {
				ret = "ypiiBradescardVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR1
				ret = "ypiiSodimacEloMais.wav";
			} else {
				if (dados.parametros.HabReestruturacaoVDNs) {
					ret = "ypiiSodimac.wav";
				} else {
					ret = "ypiiBradescard.wav";
				}
			}
			break;
		case '136':
			ret = "ypiiNossoLar.wav";
			break;
		case '510':
			ret = "ypiiIbicardElo.wav";
			break;
		case '568':
			ret = "ypiiBradescard.wav";
			break;
		case '569':
			ret = "ypiiBradescardElo.wav";
			break;
		case '571':
			ret = "ypiiConsigBradescard.wav";
			break;
		case '573':
			ret = "ypiiConsigBradescard.wav";
			break;
		default:
			ret = "ypiiBradescard.wav";
	}

	return ret;
}
*/
function fn_IdentificaTipoTelefoneChamador(numTelefone, tipoTelefone) {
    var valido = false;
    var i1oDig;
    var ListaDDDValidos1 = AppState.io_dados.parametros.ListaDDDValidos1;//"11;12;13;14;15;16;17;18;19;21;22;24;27;28;31;32;33;34;35;37;38;41;42;43;44;45;46;47;48;49;"
    var ListaDDDValidos2 = AppState.io_dados.parametros.ListaDDDValidos2;//"51;53;54;55;61;62;64;63;65;66;67;68;69;71;73;74;75;77;79;81;87;82;83;84;85;88;86;89;91;93;94;92;97;95;96;98;99;"

    if (numTelefone.length >= 10) {
        if (ListaDDDValidos1.indexOf(numTelefone.substring(0,2)) != -1 || ListaDDDValidos2.indexOf(numTelefone.substring(0,2)) != -1) {
            i1oDig = numTelefone.substring(2, 3);
            if (tipoTelefone.toUpperCase() == "CELULAR") {
                if (numTelefone.length == 10) {
                    if (i1oDig >= 6 && i1oDig <= 9) {
                        valido = true;
                    }
                } else {
                    if (i1oDig == 9) {
                        valido = true;
                    }
                }
            } else if (tipoTelefone.toUpperCase() == "FIXO") {
                if (numTelefone.length == 10) {
                    if (i1oDig >= 2 && i1oDig <= 5) {
                        valido = true;
                    }
                }
            }
        }
    }
    
    __Log('###### ListaDDDValidos1 :' + ListaDDDValidos1);
    __Log('###### ListaDDDValidos2 :' + ListaDDDValidos2);
    __Log('###### valido :' + valido);
    
    return valido;
}

function retiraCartaoDesbloqDaLista(dados) {
	var sNumeroCartaoAdicional = dados.sNumeroCartaoDesbloqueio;
	__Log('#### sNumeroCartaoDesbloqueio: ' + dados.sNumeroCartaoDesbloqueio);

	for (var i in dados.UR8F.CARTOES) {
		if (dados.UR8F.CARTOES[i].NumCartao == sNumeroCartaoAdicional) {
			dados.UR8F.CARTOES[i].CodBloqCartao = "";
		}
	}

	return dados;
}

//RN 32
function verRetornouCartoesAdicionaisBloqueados(dados){

	var iCount = 0;
	var iCountAtivo = 0;
	var iCountBloqueado = 0;
	var iCountOutro = 0;

	dados['strListaIndiceORGValido'] = "";
	dados['strListaIndiceORGValidoAtivo'] = "";
	dados['strListaIndiceORGValidoBloqueado'] = "";
	dados['strListaIndiceORGValidoOutro'] = "";
	dados['strListaDataORGValidoAtivo'] = "";

	for (var i = 1; i < dados['UR8F']['QtdeCartoes']; i ++){
		if (dados['sListaORGsIdentCPF'].indexOf(dados['UR8FCartoes'][i]['ORG']) >= 0) {
			if (dados['UR8FCartoes'][0]['CodBloqCartao'] == "") {
				if (iCountAtivo == 0) {
					dados['strListaIndiceORGValidoAtivo'] = i;
					dados['strListaDataORGValidoAtivo'] = dados['AplUR8FCartoes'][i]['validade'].substring(2) + dados['AplUR8FCartoes'][i]['validade'].substring(0, 2) + " " + i.toString();
				} else {
					dados['strListaIndiceORGValidoAtivo'] += ";" + i.toString();
					dados['strListaDataORGValidoAtivo'] += ";" + dados['AplUR8FCartoes'][i]['validade'].substring(2) + dados['AplUR8FCartoes'][i]['validade'].substring(0, 2) + " " + i.toString();
				}
				iCountAtivo += 1;

			} else if (dados['UR8FCartoes'][i]['CodBloqCartao'] == "M" || dados['UR8FCartoes'][i]['CodBloqCartao'] == "J") {
				if (dados['UR8FCartoes'][i]['IndTitAdic'] == "1") {
					if (iCountBloqueado == 0) {
						dados['strListaIndiceORGValidoBloqueado'] = i.toString();
					} else {
						dados['strListaIndiceORGValidoBloqueado'] += ";" + i.toString();
					}
					iCountBloqueado += 1;
				}
			} else {
				if (iCountOutro == 0) {
					dados['strListaIndiceORGValidoOutro'] = i.toString();
				} else {
					dados['strListaIndiceORGValidoOutro'] += ";" + i.toString();
				}
				iCountOutro += 1;
			}
		
			if (iCount == 0) {
				dados['strListaIndiceORGValido'] = i.toString();
			} else {
				dados['strListaIndiceORGValido'] += ";" + i.toString();
			}
		
			iCount += 1;
		}
	
		dados['iQtdeOpIndiceORGValidoAtivo'] = iCountAtivo;
		dados['iQtdeOpIndiceORGValidoBloqueado'] = iCountBloqueado;
		dados['iQtdeOpIndiceORGValidoOutro'] = iCountOutro;
		dados['iQtdeOpIndiceORGValido'] = iCount;
		
		__Log('###### dados.iQtdeOpIndiceORGValidoAtivo :' + dados['iQtdeOpIndiceORGValidoAtivo']);
		__Log('###### dados.iQtdeOpIndiceORGValidoBloqueado : ' + dados['iQtdeOpIndiceORGValidoBloqueado']);
		__Log('###### dados.iQtdeOpIndiceORGValidoOutro : ' +  dados['iQtdeOpIndiceORGValidoOutro']);
		__Log('###### dados.iQtdeOpIndiceORGValido : ' + dados['iQtdeOpIndiceORGValido']);
		
	}

	return dados;
}

function verCartaoValidoDesbloqueio(dados){

	var indiceCartaoBloqueio = dados['sListaCartoesValidosBloqueio'].split(';');
	var cartoesBloqueio = [];

	for (var i = 0; i < indiceCartaoBloqueio.length -1; i++) {
		
		cartoesBloqueio[i] = {};

		cartoesBloqueio[i]['sNumeroCartaoCPF'] = dados['UR8FCartoes'][indiceCartaoBloqueio[i]]['NumCartao'];
		cartoesBloqueio[i]['sORGCartao'] = dados['UR8FCartoes'][indiceCartaoBloqueio[i]]['ORG'];
		cartoesBloqueio[i]['sLogoCartao'] = dados['UR8FCartoes'][indiceCartaoBloqueio[i]]['LOGO'];

	}

	return cartoesBloqueio;
}

function nomeTipoCartaoConfBloqCar(dados, lista, contador) {

	var iORG = lista[contador]['ORG'];
	var iLOGO = lista[contador]['LOGO'];
	var iCartao = lista[contador]['NumCartao'].substring(5, 11);
	__Log('#### iORG : '+ iORG);
	__Log('#### iLOGO : '+ iLOGO);
	__Log('#### iCartao : '+ iCartao);
	
	var ret = '';

	switch (iORG) {
		case '10':
			ret = "ypiiC&A.wav";
			break;
		case '11':
			ret = "ypiiC&AMastercard.wav";
			break;
		case '13':
			if (dados.parametros.HabDtVisaGold && iCartao == "428267") {
				ret = "ypiiC&AVisaGold.wav";
			} else {
				ret = "ypiiC&Avisa.wav";
			}
			break;
		case '14':
			ret = "ypiiIbicardMasterCard.wav";
			break;
		case '15':
			ret = "ypiiIBICArdVisa.wav";
			break;
		case '16':
			ret = "ypiiC&A.wav";
			break;
		case '17':
			ret = "ypiiDoTzMastercard.wav";
			break;
		case '18':
			ret = "ypiiIbicredo.wav";
			break;
		case '19':
			ret = "ypiiIBIcard.wav";
			break;
		case '20':
			ret = "ypiiBradescard.wav";
			break;
		case '21':
			ret = "ypiiBradescard.wav";
			break;
		case '22':
			ret = "ypiiBradescard.wav";
			break;
		case '23':
			ret = "ypiiIbicredC&A.wav";
			break;
		case '24':
			ret = "ypiiC&A.wav";
			break;
		case '25':
			ret = "ypiiIBIcard.wav";
			break;
		case '26':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '27':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '28':
			ret = "ypiiBradescard.wav";
			break;
		case '29':
			ret = "ypiiBradescard.wav";
			break;
		case '30':
			ret = "ypiiBradescard.wav";
			break;
		case '32':
			ret = "ypiiBradescard.wav";
			break;
		case '33':
			ret = "ypiiBradescard.wav";
			break;
		case '34':
			ret = "ypiiBradescard.wav";
			break;
		case '36':
			ret = "ypiiBradescard.wav";
			break;
		case '38':
			switch (iLOGO) {
				case '22':
					ret = "ypiiMateusVisaNacional.wav";
					break;
				case '30':
					ret = "ypiiMateusMastercardInter.wav";
					break;
				case '38':
					if (SeDataEloMais(dados)) { //VALIDAR
						ret = "ypiiMateusCartdEloMais.wav";
					} else {
						ret = "ypiiMateusEloInternacional.wav";
					}
					break;
				case '48':
					ret = "ypiiMateusEloMais.wav";
					break;
			}
			break;
		case '40':
			ret = "ypiiBradescard.wav";
			break;
		case '42':
			ret = "ypiiBradescard.wav";
			break;
		case '44':
			ret = "ypiiBradescard.wav";
			break;
		case '45':
			ret = "ypiiBradescard.wav";
			break;
		case '46':
			if (dados.parametros.HabDtVisaGold && iCartao == "418049") {
				ret = "ypiiMakroVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiMakroEloMais.wav";
			} else {
				ret = "ypiiMakro.wav";
			}
			break;
		case '47':
			ret = "ypiiBradescard.wav";
			break;
		case '48':
			ret = "ypiiBradescard.wav";
			break;
		case '49':
			ret = "ypiiBradescard.wav";
			break;
		case '52':
			ret = "ypiiAngeloni.wav";
			break;
		case '53':
			ret = "ypiiAngeloniMastercard.wav";
			break;
		case '54':
			ret = "ypiiAngeloniVisa.wav";
			break;
		case '55':
			if (dados.parametros.HabDtVisaGold && iCartao == "422011") {
				ret = "ypiiAngeloniVisaGold.wav";
			} else {
				ret = "ypiiAngeloniVisa.wav";
			}
			break;
		case '56':
			ret = "ypiiBradescard.wav";
			break;
		case '57':
			ret = "ypiiBradescard.wav";
			break;
		case '59':
			if (dados.parametros.HabDtVisaGold && iCartao == "420339") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '61':
			ret = "ypiiCanalJeans.wav";
			break;
		case '62':
			ret = "ypiiCanalJeans.wav";
			break;
		case '63':
			ret = "ypiiCanalJeans.wav";
			break;
		case '64':
			ret = "ypiiCanalJeans.wav";
			break;
		case '65':
			ret = "ypiiCanalJeans.wav";
			break;
		case '67':
			ret = "ypiiBradescard.wav";
			break;
		case '69':
			if (dados.parametros.HabDtVisaGold && iCartao == "457302") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '72':
			if (dados.parametros.HabDtVisaGold && iCartao == "457292") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiLuigiBertolli.wav";
			}
			break;
		case '74':
			ret = "ypiiBradescard.wav";
			break;
		case '77':
			ret = "ypiiCompcard.wav";
			break;
		case '79':
			ret = "ypiiBradescard.wav";
			break;
		case '81':
			if (dados.parametros.HabDtVisaGold && iCartao == "457294") {
				ret = "ypiiCoopVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiCoopFacilEloMais.wav";
			} else {
				ret = "ypiiCoopcopil.wav";
			}
			break;
		case '89':
			if (dados.parametros.HabDtVisaGold && iCartao == "418048") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '91':
			if (dados.parametros.HabDtVisaGold && iCartao == "457304") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '101':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '102':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '106':
			ret = "ypiiCasasBahia.wav";
			break;
		case '108':
			ret = "ypiiC&C.wav";
			break;
		case '112':
			ret = "ypiiCarajas.wav";
			break;
		case '114':
			ret = "ypiiBradExpresso.wav";
			break;
		case '116':
			ret = "ypiiFujioka.wav";
			break;
		case '122':
			if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiC&aEloMais.wav";
			} else {
				ret = "ypiiC&Aelo.wav";
			}
			break;
		case '123':
			ret = "ypiiAngeloni.wav";
			break;
		case '126':
			if (dados.parametros.HabDtVisaGold && iCartao == "444666") {
				ret = "ypiiBradescardVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR1
				ret = "ypiiSodimacEloMais.wav";
			} else {
				if (dados.parametros.HabReestruturacaoVDNs) {
					ret = "ypiiSodimac.wav";
				} else {
					ret = "ypiiBradescard.wav";
				}
			}
			break;
		case '136':
			ret = "ypiiNossoLar.wav";
			break;
		case '510':
			ret = "ypiiIbicardElo.wav";
			break;
		case '568':
			ret = "ypiiBradescard.wav";
			break;
		case '569':
			ret = "ypiiBradescardElo.wav";
			break;
		case '571':
			ret = "ypiiConsigBradescard.wav";
			break;
		case '573':
			ret = "ypiiConsigBradescard.wav";
			break;
		default:
			ret = "ypiiBradescard.wav";
	}
	__Log('#### ret : '+ ret);

	return ret;
}

//RN33
function verCartaoAdicionalValido(dados){

	var strListaIndiceORGValidoAux = dados['strListaIndiceORGValidoBloqueado'].split(';');
	var iIndiceORGValido = '';

	for (var i = 0; i < dados['iQtdeOpIndiceORGValidoBloqueado']; i++){
		iIndiceORGValido = strListaIndiceORGValidoAux[i];
		if (dados['sDigitouAlgumaCoisa'] == dados['UR8FCartoes'][iIndiceORGValido]['NumCartao']){
			return true;
		}
	}

	return false;

}

function trataRetornoMainFrame(rx, retornoMainFrame) {
	var ret = {};
	if (retornoMainFrame) {

		var i = 0;
		for(var campo in rx){
			var nomeCampo = campo;
			var tam = rx[campo];
			var valorCampo = retornoMainFrame.substring(i,i+=tam);
			nomeCampo = campo.substr(0);
			ret[nomeCampo] = valorCampo;
		}	
	}
	return ret;
}

function trataRetornoArrayObjeto(rx, retornoMainFrame) {
	var array = []
	if (retornoMainFrame) {
		
		var i = 0;
		while (i < retornoMainFrame.length) {
		var ret = {};
			for(var campo in rx){
				var nomeCampo = campo;
				var tam = rx[campo];
				var valorCampo = retornoMainFrame.substring(i,i+=tam);
				nomeCampo = campo.substr(0);
				ret[nomeCampo] = valorCampo;
			}

			array.push(ret);
		}
	}
	return array;
}

function inicializaVariaveis(dados) {

	dados['opm'] = '';
	dados['objSessao'] = {};
	dados['Estruturante'] = {};
	dados['nsuSessao'] = getDataAtual().replaceAll("-","").replaceAll("T","").replaceAll(":","").replaceAll(".","").replaceAll("Z","") + "II";
	//dados['nsuSessao'] = new Date().getFullYear() + '' + new Date().getTime() + 'P2';
	dados['ani'] = getANITratado(AppState.ANI);
	dados['dnis'] = AppState.DNIS;
	dados['dnis'] = dados['dnis'].substring(dados['dnis'].length - 4);
	dados['NumB'] = AppState.DNIS;
	dados['NumB'] = dados['NumB'].substring(dados['NumB'].length - 4);
    dados['NumA'] = getANITratado(AppState.ANI);
	dados['LogTick'] = '';
	dados['MenuInoperante'] = false;
	dados['iIndiceORGValido'] = 0;
	dados['horaInicioChamada'] = formataDataAtual('yyyyMMdd') + ' ' + formataDataAtual('hh') + ':' + formataDataAtual('mm') + ':' + formataDataAtual('ss');

	//Parametros

	dados.parametros = {};
	dados.parametrosV2 = {};
	
	dados.parametros.ForcaTeste = '';
	dados.parametros.FraseAppCodBarras = '';
	dados.parametros.FraseAppLimites = '';
	dados.parametros.FraseAppPerdaRoubo = '';
	dados.parametros.FraseAppSaldo = '';
	dados.parametros.FraseEmergencial = '';
	dados.parametros.FraseInformativa1 = '';
	dados.parametros.FraseInformativa2 = '';
	dados.parametros.FraseInformativa3 = '';
	dados.parametros.FraseInformativa4 = '';
	dados.parametros.FraseInformativa5 = '';
	dados.parametros.FraseInformativa7 = '';
	dados.parametros.FraseInformativa8 = '';
	dados.parametros.Hab_Enc_Lasa = '';
	dados.parametros.HabAutenticaSenhaChip = '';
	dados.parametros.HabAutPrevent = '';
	dados.parametros.HabBinFraseVisaGold = '';
	dados.parametros.HabDerAeC = '';
	dados.parametros.HabDerivaDesbVendas = '';
	dados.parametros.HabDerivaPosDesbloqueio = '';
	dados.parametros.HabDtEloMais = '';
	dados.parametros.HabDtFraseEloMais = '';
	dados.parametros.HabDtFraseVisaGold = '';
	dados.parametros.HabDtVisaGold = '';
	dados.parametros.HabEncerrarAposCB = '';
	dados.parametros.HabEncerrarAposRepFat = '';
	dados.parametros.HabEncerrarAposRepSld = '';
	dados.parametros.HabFraseAppCodBarras = '';
	dados.parametros.HabFraseAppLimites = '';
	dados.parametros.HabFraseAppSaldo = '';
	dados.parametros.HabFraseEmergencial = '';
	dados.parametros.HabFraseEmergencialCB = '';
	dados.parametros.HabFraseInformativa1 = '';
	dados.parametros.HabFraseInformativa2 = '';
	dados.parametros.HabFraseInformativa3 = '';
	dados.parametros.HabFraseInformativa4 = '';
	dados.parametros.HabFraseInformativa5 = '';
	dados.parametros.HabFraseInformativa7 = '';
	dados.parametros.HabFraseInformativa8a = '';
	dados.parametros.HabFraseInformativa8b = '';
	dados.parametros.HabMFatPagtoRetMP = '';
	dados.parametros.HabMParcelRetMP = '';
	dados.parametros.HabNovaDerAPPIB = '';
	dados.parametros.HabOpAlterEndereco = '';
	dados.parametros.HabOpCartaoAdicional = '';
	dados.parametros.HabOpCB_SMS = '';
	dados.parametros.HabOpContestaCompraSaque = '';
	dados.parametros.HabOpDespNegada = '';
	dados.parametros.HabOpLimEmergCancelar = '';
	dados.parametros.HabOpLimEmergSolicitar = '';
	dados.parametros.HabOpLimPre = '';
	dados.parametros.HabOpPlanoOdonto = '';
	dados.parametros.HabOpRetMenuMPosLimite = '';
	dados.parametros.HabOpSeguro = '';
	dados.parametros.HabPedeCPF = '';
	dados.parametros.HabPID_Atendente = '';
	dados.parametros.HabPID_BBC = '';
	dados.parametros.HabPID_Cancelamento = '';
	dados.parametros.HabPID_Desbloqueio = '';
	dados.parametros.HabPID_FatDetalhada = '';
	dados.parametros.HabPID_Limite = '';
	dados.parametros.HabPlanosParcela = '';
	dados.parametros.HabReestruturacaoVDNs = '';
	dados.parametros.HabSenhaReemissaoNovoCartao = '';
	dados.parametros.HabTrocaSenha1 = '';
	dados.parametros.HabValAutPrevent = '';
	dados.parametros.HabValidPerdaRoubo = '';
	dados.parametros.InibeCartBloqViaCPF = '';
	dados.parametros.InibeOpTrocaSenha = '';
	dados.parametros.ListaBloqSemAtd = '';
	dados.parametros.ListaDDDValidos1 = '';
	dados.parametros.ListaDDDValidos2 = '';
	dados.parametros.ListaORGsNovoDesbloq = '';
	dados.parametros.ListaParceriasEncerradas = '';
	dados.parametros.ListaPIDCNPJ = '';
	dados.parametros.NroB_0800SAC = '';
	dados.parametros.NroB_D_Desb_Brad_Venda_Seguro = '';
	dados.parametros.NroB_D_Emprest_Brad_Ibi_Card = '';
	dados.parametros.NroB_D_Emprest_IbiFolha = '';
	dados.parametros.NroB_D_Emprest_INSS = '';
	dados.parametros.NroB_D_Ibi_Seguro = '';
	dados.parametros.NroB_D_Makro_Demais = '';
	dados.parametros.NroB_D_Pro_Seguro = '';
	dados.parametros.NroB_D_Procon = '';
	dados.parametros.NroB_D_Super_Credito = '';
	dados.parametros.NroB_MsgIncentivoAtdDesliga = '';
	dados.parametros.NroB_MsgIncentivoAtdDesliga2 = '';
	dados.parametros.NroB_PadraoNumAtd = '';
	dados.parametros.NroB_PadraoNumAtdDesliga = '';
	dados.parametros.NroB_PadraoNumAtdDesliga2 = '';
	dados.parametros.NroB_ServiceDesk = '';
	dados.parametros.NroDiasAtraso = '';
	dados.parametros.NroMaxPerguntasPID_TelNOk = '';
	dados.parametros.NroMaxPerguntasPID_TelOk = '';
	dados.parametros.HabNLayoutBilhete = '';
	dados.parametros.LojasAmericanasNroA = '';
	dados.parametros.Banner1 = '';
	dados.parametros.Banner2 = '';
	dados.parametros.NroB_ServiceDesk_0800 = '';
	
	dados.parametros.NroB_IBICARD = '';
	dados.parametros.NroB_HotLine_Angeloni = '';
	dados.parametros.NroB_PL = '';
 	dados.parametros.NroB_Mafre = '';
  	dados.parametros.NroB_Rondelli = '';
  	dados.parametros.NroB_MODELO = '';
  	dados.parametros.NroB_Iguatemi = '';
  	dados.parametros.NroB_ELO = '';
  	dados.parametros.NroB_LOJAsREDE = '';
  	dados.parametros.NroB_Camp_Saque = '';
    dados.parametros.BIN_COOP = '';
	dados.parametros.BIN_LUIGI	= '';
	dados.parametros.HabAtdClienteP2CPE	= '';
	dados.parametros.HabAtdClienteP2COP	= '';
	dados.parametros.HabAtdClienteP2LUI	= '';
	dados.parametros.BIN_CORPORATE	= '';
	dados.parametros.TEL_COB_LOCAL = '';
	dados.parametros.TEL_COB_0800 = '';
    dados.parametros.BIN_CORPORATE = '';
    dados.parametros.HabOpLimProm2Torres = '';
    dados.parametros.HabOpFatura_Email = '';
    dados.bHab_ENC_LASA = '';
    dados.bHabReestruturacaoVDNs = '';
    dados.SeDataEloMais = '';
	dados.sBINCartao = ' ';
	dados.habilita_GravarLog12k = false;
	dados.vRetry='vazio';
	dados['bVeioFluxoDesbloqueio'] = false;
	//Servicos

	dados.UR80 = {};
	dados.UR8F = {};
	dados.UR8F = {};
	dados['chaveRestartUR8F'] = completaComEspacos("", 20);
	dados.UR88 = {};
	dados.UR1A = {};
	dados.UR85 = {};
	dados.UR93 = {};
	dados.UR76 = {};
	dados.UR81 = {};
	dados.UR91 = {};
	dados.CEPRestrito = {};
    dados['AplCliente'] = {};
    dados['AplCliente'] = {};
    dados['sListaORGs_CAN'] = '';  
    dados['sListaORGs_CEA'] = '';
    dados['sListaORGs_BCR'] = '';
    dados['sListaORGs_CBS'] = '';
    dados['sListaORGs_MKR'] = '';
    dados['sListaORGs_LSA'] = '';
    dados['sListaORGs_MAT'] = '';
    dados['sListaORGs_SDM'] = '';
    dados['sListaORGs_ANG'] = '';
    dados['sListaORGs_COP'] = '';
    dados['sListaORGs_CEC'] = '';
    dados['sListaORGs_CRJ'] = '';
    dados['sListaORGs_FJK'] = '';
    dados['sListaORGs_ATK'] = '';
    dados['sListaORGs_BEX'] = '';
    dados['sListaORGs_CAB'] = '';
    dados['sListaORGsIdentCPF'] = '';
    dados['bSenhaCHIPOk'] = false;
    dados['bJaFalouFraseQQMomento'] = false;
    dados['strForcaTeste'] = '';
    dados['PIDAnterior'] = '';
    dados['CodDesliga'] = '402';
    dados.PedeSenhaAtual_Tentativas = 1;
   
    
    



	// Controla os serviços de parâmetros que já foram chamados
    dados['ServicoParametroPorModulo'] = {
		'YXAE' : false,
		'YXAS' : false,
		'YXCL' : false,
		'YXDN' : false,
		'YXDQ' : false,
		'YXFR' : false,
		'YXLT' : false,
		'YXNN' : false,
		'YXNR' : false,
		'YXPE' : false,
		'YXPF' : false,
		'YXPP' : false,
		'YXSN' : false,
		'YXVN' : false
    }

	// Cabeçalho enviado na Request do MainFrame
	dados['areaEnvio'] = {}
	dados['areaEnvio']['areaEnvioSisAcionado'] = 'A02CICUR';
	
	 dados['sFuncaoUR91'] = '';

	return dados;
}

function verNumB(dados){

    var parametros = dados['parametros']; 
	
    
    if ( parametros['NroB_IBICARD'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_IBICARD';
        dados.bHabColetaCPF = true;
        dados.eAtendimento = 'ATD_IBICARD';
        dados.estatistica = '239';
    } else if ( parametros['NroB_HotLine_Angeloni'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_ANGELONI';
        dados.eAtendimento = 'ATD_ANGELONI';
        dados.estatistica = '241';
        dados.estatistica2 = '124';
    } else if ( parametros['NroB_PL'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_PRIVATE';
        dados.iAplOrgSistema = 'APL_SIST_PL_BR';
        dados.bHabColetaCPF = true;
        dados.eAtendimento = 'ATD_PL';
        dados.estatistica = '242';
    } else if ( parametros['NroB_Mafre'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_MAFRE';
        dados.bHabUnificacao = false;
        dados.estatistica = '245';
    } else if ( parametros['NroB_Rondelli'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_PARCEIROS';
        dados.iAplOrgSistema = 'APL_SIST_RONDELLI';
        dados.eAtendimento = 'ATD_DEFAULT_7332';
        dados.estatistica = '258';
    } else if ( parametros['NroB_MODELO'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_MODELO';
        dados.bHabUnificacao = false;
        dados.estatistica = '261';
    } else if ( parametros['NroB_Iguatemi'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_BELEM';
        dados.bHabUnificacao = false;
        dados.estatistica = '250';
    } else if ( parametros['NroB_ELO'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_ELO';
        dados.eAtendimento = 'ATD_ELO_CARD';
        dados.estatistica = '265';
    } else if ( parametros['NroB_LOJAsREDE'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_LOJASREDE';
        dados.bHabUnificacao = false;
        dados.estatistica = '266';
    } else if (parametros['NroB_Camp_Saque'].indexOf(dados.NumB) > -1) {
        dados.iAplUraSistema = 'APL_CAMP_SAQUE';
        dados.iAplOrgSistema = 'APL_SIST_CAMP_SAQUE';
        dados.eAtendimento = 'ATD_CAMP_SAQUE';
        dados.bHabUnificacao = true;
        dados.bEhAtendimentoCampSaque = true;
        dados.estatistica = '2294';
    } else {
        dados.eAtendimento = 'ATD_DEFAULT_7332';
        dados.bHabUnificacao = true;
    }

    //dados.AplCliente.ORG = '0';
    __Log('########### dados.iAplUraSistema :' + dados.iAplUraSistema);
    __Log('########### dados.iAplOrgSistema :' + dados.iAplOrgSistema);
    __Log('########### dados.bHabColetaCPF :' + dados.bHabColetaCPF);    
    __Log('########### dados.eAtendimento :' + dados.eAtendimento);
    __Log('########### dados.estatistica  :' + dados.estatistica);
    __Log('########### dados.estatistica2  :' + dados.estatistica2);
    __Log('########### dados.bEhAtendimentoCampSaque :' + dados.bEhAtendimentoCampSaque);
    __Log('########### dados.bHabUnificacao :' + dados.bHabUnificacao);

    return dados;

}

/*
function verNumB(dados){ Backup

    var parametros = dados['parametros'];

    if ( parametros['NroB_IBICARD'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_IBICARD';
        dados.bHabColetaCPF = true;
        dados.eAtendimento = 'ATD_IBICARD';
        dados.estatistica = '239';
    } else if ( parametros['NroB_HotLine_Makro'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_HOTLINE';
        dados.iAplOrgSistema = 'APL_SIST_MAKRO';
        dados.estatistica = '240';
        dados.estatistica2 = '123';
    } else if ( parametros['NroB_HotLine_Angeloni'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_ANGELONI';
        dados.eAtendimento = 'ATD_ANGELONI';
        dados.estatistica = '241';
        dados.estatistica2 = '124';
    } else if ( parametros['NroB_PL'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_PRIVATE';
        dados.iAplOrgSistema = 'APL_SIST_PL_BR';
        dados.bHabColetaCPF = true;
        dados.eAtendimento = 'ATD_PL';
        dados.estatistica = '242';
    } else if ( parametros['NroB_ShopLapa'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_SHOPLAPA';
        dados.bHabUnificacao = false;
        dados.estatistica = '244';
    } else if ( parametros['NroB_Mafre'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_MAFRE';
        dados.bHabUnificacao = false;
        dados.estatistica = '245';
    } else if ( parametros['NroB_Makro'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_MAKRO';
        dados.eAtendimento = 'ATD_MAKRO';
        dados.estatistica = '246';
    } else if ( parametros['NroB_Angeloni'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_ANGELONI';
        dados.eAtendimento = 'ATD_ANGELONI';
        dados.estatistica = '247';
    } else if ( parametros['NroB_JEANS'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_JEANS';
        dados.bHabUnificacao = false;
        dados.estatistica = '248';
    } else if ( parametros['NroB_Dotz_Ibicard'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_DOTz';
        dados.eAtendimento = 'ATD_DOTZ';
        dados.estatistica = '249';
    } else if ( parametros['NroB_Iguatemi'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_BELEM';
        dados.bHabUnificacao = false;
        dados.estatistica = '250';
    } else if ( parametros['NroB_CATTAN'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_CATTAN';
        dados.bHabUnificacao = false;
        dados.estatistica = '251';
    } else if ( parametros['NroB_Colombo'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_COLOMBO';
        dados.bHabUnificacao = false;
        dados.estatistica = '252';
    } else if ( parametros['NroB_ESKALA'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_ESKALA';
        dados.eAtendimento = 'ATD_ESKALA';
        dados.estatistica = '253';
    } else if ( parametros['NroB_BAKLIZI'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_BAKLIZI';
        dados.bHabUnificacao = false;
        dados.estatistica = '254';
    } else if ( parametros['NroB_BONANZA'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_PARCEIROS';
        dados.iAplOrgSistema = 'APL_SIST_BONANZA';
        dados.bHabUnificacao = false;
        dados.estatistica = '255';
    } else if ( parametros['NroB_CVC'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_PARCEIROS';
        dados.iAplOrgSistema = 'APL_SIST_CVC';
        dados.eAtendimento = 'ATD_CVC';
        dados.estatistica = '256';
    } else if ( parametros['NroB_ArcoIris'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_PARCEIROS';
        dados.iAplOrgSistema = 'APL_SIST_ARCOIRIS';
        dados.bHabUnificacao = false;
        dados.estatistica = '257';
    } else if ( parametros['NroB_Rondelli'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_PARCEIROS';
        dados.iAplOrgSistema = 'APL_SIST_RONDELLI';
        dados.eAtendimento = 'ATD_DEFAULT_7332';
        dados.estatistica = '258';
    } else if ( parametros['NroB_Makenji'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_PARCEIROS';
        dados.iAplOrgSistema = 'APL_SIST_MAKENJI';
        dados.bHabUnificacao = false;
        dados.estatistica = '259';
    } else if ( parametros['NroB_CANOAS'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_CANOAS';
        dados.bHabUnificacao = false;
        dados.estatistica = '260';
    } else if ( parametros['NroB_MODELO'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_MODELO';
        dados.bHabUnificacao = false;
        dados.estatistica = '261';
    } else if ( parametros['NroB_MATEUS'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_MATEUS';
        dados.eAtendimento = 'ATD_MATEUS_CARD';
        dados.estatistica = '262';
    } else if ( parametros['NroB_ShopTatuape'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_SHOPTATUAPE';
        dados.bHabUnificacao = false;
        dados.estatistica = '263';
    } else if ( parametros['NroB_ExpressMaster'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_EXPRESSMASTER';
        dados.bHabUnificacao = false;
        dados.estatistica = '264';
    } else if ( parametros['NroB_ELO'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_ELO';
        dados.eAtendimento = 'ATD_ELO_CARD';
        dados.estatistica = '265';
    } else if ( parametros['NroB_LOJAsREDE'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_LOJASREDE';
        dados.bHabUnificacao = false;
        dados.estatistica = '266';
    } else if ( parametros['NroB_PagueMenos'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_PAGUEMENOS';
        dados.eAtendimento = 'ATD_PAGUE_MENOS';
        dados.estatistica = '267';
    } else if ( parametros['NroB_TNG'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_TNG';
        dados.eAtendimento = 'ATD_TNG';
        dados.estatistica = '268';
    } else if ( parametros['NroB_Consignado'].indexOf(dados.NumB) > -1 ) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_CONSIGNADO';
        dados.eAtendimento = 'ATD_ELO_CONSIGNADO';
        dados.estatistica = '269';
    } else if (dados['bEhAtendimento0800SAC?']) {
        dados.iAplUraSistema = 'APL_URA_BANKCARD';
        dados.iAplOrgSistema = 'APL_SIST_RONDELLI';
        dados.bHabUnificacao = false;
        dados.estatistica = '271';
    } else {
        dados.eAtendimento = 'ATD_DEFAULT_7332';
        dados.bHabUnificacao = true;
    }

    dados.AplCliente.ORG = '0';

    return dados;

}
*/

//RN06

function SetaVDNDadosReestruturacaoCAON(dados){
	
	__Log('############# dados : ' + JSON.stringify(dados));

    var strAux = "";
    var sParamBalanceamentoVDN = "";
    var parametros = dados.parametros;

    switch (dados.ePontoDerivacao){
        case 'PD_PREVENTIVO':
            if (parametros.HabValAutPrevent && (dados.bPIDOk || dados.bSenhaCHIPOk)) {
                strAux = "VDN_FRAUDE_PREVENTIVO" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_FRAUDE_PREVENTIVO" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_FRAUDE_PREVENTIVO";
            break;
         case 'PD_DESPESA_NEGADA':
            strAux = "VDN_DESPESA_NEGADA" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_DESPESA_NEGADA";
            break;
        default:
            strAux = "VDN_ATENDENTE_SOLIC_CEAON";
    }

    if (strAux == "") { //erro em alguma VDN, usa default        
        if (dados.bPIDOk || dados.bSenhaCHIPOk) {
            strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
        } else {
            strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
        }
        sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
    }

    return strAux;        

}

//RN07

function SetaVDNDadosReestruturacao(dados) {
	
	__Log('############# dados : ' + JSON.stringify(dados)); 
	__Log('############# ePontoDerivacao : ' + JSON.stringify(dados.ePontoDerivacao));
	
    var strAux = "";
    var strRet = "";
    var strVendas = "";
    var strCAC = "";
    var sParamBalanceamentoVDN = "";
    var sBalanceamentoParceiro = "";
    var parametros = dados.parametros;
    
    switch (dados.ePontoDerivacao) {
        case 'PD_NENHUM':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
            break;
        case 'PD_PERDA_ROUBO':
            strAux = "VDN_PeR_GENERICO" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_PeR_GENERICO";
            break;
        case 'PD_PERDA_ROUBO_ATENDIMENTO':
            strAux = "VDN_PeR_FALAR" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_PeR_FALAR";
            break;
        case 'PD_PERDA_ROUBO_REEMISSAO':
            strAux = "VDN_PeR_PERDA_REEMISSAO" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_PeR_PERDA_REEMISSAO";
            break;
        case 'PD_FRAUDE':
            strAux = "VDN_FRAUDE_DERIVA" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_FRAUDE_DERIVA";
            break;
        case 'PD_PROPOSTA':
            strAux = "VDN_PROPOSTA_NRECEBCC" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_PROPOSTA_NRECEBCC";
            break;
        case 'PD_NC':
            strAux = "VDN_NAOCLIENTE_NQUERCC" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_NAOCLIENTE_NQUERCC";
            break;
        case 'PD_CORPORATE':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_CORPORATE_DEF";
            } else {
                strAux = "VDN_CORPORATE_DEF" + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_CORPORATE";
            break;
        case 'PD_PREVENTIVO':
            if ( dados.parametros.HabValAutPrevent && (dados.bPIDOk || dados.bSenhaCHIPOk) ) {
                strAux = "VDN_FRAUDE_PREVENTIVO" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_FRAUDE_PREVENTIVO" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_FRAUDE_PREVENTIVO";
            break;
        case 'PD_DESBLOQUEIO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_DESBLCC_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_DESBLCC_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_DESBLCC_SOLIC";
            break;
        case 'PD_DESBLOQUEIO_CARTASIMPLES':
            strAux = "VDN_DESBLCC_CARTASIMPLES" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_DESBLCC_CARTASIMPLES";
            break;
        case 'PD_DESBLOQUEIO_CARTASIMPLES_DETECCAO':
            strAux = "VDN_DESBLCC_CARTASIMPLESDETC" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_DESBLCC_CARTASIMPLESDETC";
            break;
        case 'PD_DESBLOQUEIO_VENDAS':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_DESBLCC_VENDAS" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_DESBLCC_VENDAS" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_DESBLCC_VENDAS";
            break;
        case 'PD_APLICATIVO_BBC':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_APPIB_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_APPIB_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_APPIB_SOLIC";
            break;
        case 'PD_REEMISSAO_SENHA':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_SENHA_2VIA" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_SENHA_2VIA" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_SENHA_2VIA";
            break;
        case 'PD_CAC_QHOST':
            strAux = "VDN_SISTFORA_QHOST" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_SISTFORA_QHOST";
            break;
        case 'PD_ENVIO_SMS':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_FATURA_CBARRA" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_FATURA_CBARRA" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_FATURA_CBARRA";
            break;
        case 'PD_FATURA_EMAIL':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_FATURA_EMAIL" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_FATURA_EMAIL" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_FATURA_EMAIL";
            break;
        case 'PD_CANCELAMENTO_SEGUROS':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_CANCPRD_PROTVIDA" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_CANCPRD_PROTVIDA" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_CANCPRD_PROTVIDA";
            break;
        case 'PD_RETENCAO_SEGUROS':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_CANCPRD_ODONOUTRS" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_CANCPRD_ODONOUTRS" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_CANCPRD_ODONOUTRS";
            break;
        case 'PD_BUNKER':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_ALTEND_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_ALTEND_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_ALTEND_SOLIC";
            break;
        case 'PD_RETENCAO_CANCELAMENTO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_CANCCC_DESINT" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_CANCCC_DESINT" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_CANCCC_DESINT";
            break;
        case 'PD_CANCELAMENTO_CARTAO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_CANCCC_OUTRO" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_CANCCC_OUTRO" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_CANCCC_OUTRO";
            break;
        case 'PD_CONTESTACAO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_CONTESTA_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_CONTESTA_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_CONTESTA_SOLIC";
            break;
        case 'PD_HOTLINE_MAKRO_CANCELAMENTO':
            strAux = "VDN_HOTLINE_CANCELA" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_HOTLINE_CANCELA";
            break;
        case 'PD_HOTLINE_MAKRO_COBRANCA':
            strAux = "VDN_HOTLINE_COBRANCA" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_HOTLINE_COBRANCA"
            break;
        case 'PD_HOTLINE_VENDAS_SAQUE':
            if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "") {
                if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                } else {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                }
                strVendas = "VDN_HOTLINE_SAQUE" + defineGrupoVDN(dados);
                //strAux = BalanceamentoSaqHot(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
            } else {
                if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                } else {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                }
                sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
            }
            break;
        case 'PD_HOTLINE_VENDAS_PARCELAMENTO':
            if ( dados.UR80.AplVlrSldParcial > 0 && AplUR80RX.AplCdBloqueio == "") {
                if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                } else {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                }
                strVendas = "VDN_HOTLINE_PARCELA" + defineGrupoVDN(dados);

                //strAux = BalanceamentoParcHot(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
                
            } else {
                if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                } else {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                }
                sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
            }
            break;
        case 'PD_VENDAS_LIMITE_EMERGENCIAL':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_LIMITE_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_LIMITE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_LIMITE_SOLIC";
            break;
        case 'PD_CANCELA_LIMITE_EMERGENCIAL':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_LIMITE_CANC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_LIMITE_CANC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_LIMITE_CANC";
            break;
        case 'PD_AUMENTO_LIMITE':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_LIMITE_AGTVIRT" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_LIMITE_AGTVIRT" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_LIMITE_AGTVIRT";
            break;
        case 'PD_VENDAS_PARCELAMENTO':
            if ( dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "") {
                if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                    strVendas = "VDN_PARCELA_SOLIC" + defineGrupoVDN(dados);
                } else {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                    strVendas = "VDN_PARCELA_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                }
                //strAux = BalanceamentoParc(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
            } else {
                if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                } else {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                }
                sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
            }
            break;
        case 'PD_INFO_PARCELAMENTO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_PARCELA_MODIF" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_PARCELA_MODIF" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_PARCELA_MODIF";
            break;
        case 'PD_VENDAS_SAQUE':
            if ( dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "") {
                if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                    strVendas = "VDN_SAQUE_SOLIC" + defineGrupoVDN(dados);
                } else {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                    strVendas = "VDN_SAQUE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                }
                //strAux = BalanceamentoSaq(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
            } else {
                if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                } else {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                }
                sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
            }
            break;
        case 'PD_INFO_SAQUE':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_SAQUE_INFO" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_SAQUE_INFO" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_SAQUE_INFO"
        case 'PD_SOLICITAR_SEGURO_PROTECAO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_SEGURO_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_SEGURO_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_SEGURO_SOLIC";
            break;
        case 'PD_COBERTURA_SEGUROS':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_SEGURO_ACAO" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_SEGURO_ACAO" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_SEGURO_ACAO";
            break;
        case 'PD_VENDAS_ODONTO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_ODONTO_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_ODONTO_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_ODONTO_SOLIC";
            break;
        case 'PD_VENDAS_CARTAO_ADICIONAL':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_ADICIO_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_ADICIO_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_ADICIO_SOLIC";
            break;
        case 'PD_CAC':
            if (dados['strForcaTeste'].indexOf("TESTABILHETE") > -1){
                strAux = "VDN_TESTA_BILHETE";
                sParamBalanceamentoVDN = "VDN_TESTA_BILHETE"
            } else if (dados.bPIDOk || dados.bSenhaCHIPOk) {
                if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio== "" && ! ehParceriaSemFiltroVendas(dados)) {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                    strVendas = "VDN_ATENDENTE_VENDA" + defineGrupoVDN(dados);
                    //strAux = BalanceamentoAtd(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
                } else {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
                    sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
                }
            } else {
                if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio== "" && ! ehParceriaSemFiltroVendas(dados)) {
                    strCAC = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                    strVendas = "VDN_ATENDENTE_VENDA" + defineGrupoVDN(dados) + "_PIDNOK";
                    //strAux = BalanceamentoAtd(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
                } else {
                    strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
                    sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
                }
            }
            break;
        case 'PD_CANCELAMENTO_CARTAO_ADICIONAL':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_CANCPRD_ADICIO" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_CANCPRD_ADICIO" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_CANCPRD_ADICIO";
            break;
         case 'PD_DESPESA_NEGADA':
            strAux = "VDN_DESPESA_NEGADA" + defineGrupoVDN(dados);
            sParamBalanceamentoVDN = "VDN_DESPESA_NEGADA";
        case 'PD_APPIB_RESET':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_APPIB_RESET" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_APPIB_RESET" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_APPIB_RESET";
            break;
        case 'PD_APPIB_DESBLOQ':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_APPIB_DESBLQ" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_APPIB_DESBLQ" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_APPIB_DESBLQ"
            break;
        case 'PD_APPIB_INFO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_APPIB_INFO" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_APPIB_INFO" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_APPIB_INFO";
            break;
        case 'PD_SERVICE_DESK':
            strRet = "VDN_SERVICE_DESK";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_SERVICE_DESK";
            break;
        case 'PD_SERVICE_DESK_0800':
            strRet = "VDN_SERVICE_DESK_0800";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_SERVICE_DESK";
            break;
        case 'PD_PROCON':
            strRet = "VDN_D_PROCON";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_PROCON";
            break;
        case 'PD_EMPRESTIMO_IBI_FOLHA':
            strRet = "VDN_D_EMPREST_IBIFOLHA";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_EMPREST_IBIFOLHA";
            break;
        case 'PD_EMPRESTIMO_BRAD_IBICARD':
            strRet = "VDN_D_EMPREST_BRAD_IBICARD";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_EMPREST_BRAD_IBICARD";
            break;
        case 'PD_ATENDIMENTO_MAKRO_E_DEMAIS':
            strRet = "VDN_D_MAKRO_DEMAIS";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_MAKRO_DEMAIS";
            break;
        case 'PD_CENTRAL_DESBLOQ_BRAD_VENDA_SEGUROS':
            strRet = "VDN_D_DESB_BRAD_VENDA_SEGURO";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_DESB_BRAD_VENDA_SEGURO";
            break;
        case 'PD_RENDA_HOSPITALAR':
            strRet = "VDN_D_RENDA_HOSPITALAR";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_RENDA_HOSPITALAR";
            break;
        case 'PD_IBI_ODONTO':
            strRet = "VDN_D_IBI_ODONTO";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_IBI_ODONTO";
            break;
        case 'PD_IBI_CAPITALIZACAO':
            strRet = "VDN_D_IBI_CAPITALIZACAO";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_IBI_CAPITALIZACAO";
            break;
        case 'PD_CARTAO_IBICARD':
            strRet = "VDN_D_CARTAO_IBICARD";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_CARTAO_IBICARD";
            break;
        case 'PD_EMPRESAS_PARCEIRAS':
            strRet = "VDN_D_EMPRESAS_PARCEIRAS";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_EMPRESAS_PARCEIRAS";
            break;
        case 'PD_DEMAIS_SERVICOS':
            strRet = "VDN_D_DEMAIS_SERVICOS";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_DEMAIS_SERVICOS";
            break;
        case 'PD_EMPRESTIMO_INSS_CBSS':
            strRet = "VDN_D_EMPREST_INSS_CBSS";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_EMPREST_INSS_CBSS";;
            break;
        case 'PD_EMPRESTIMO_INSS_BRADESCARD':
            strRet = "VDN_D_EMPREST_INSS_BRADESCARD";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_EMPREST_INSS_BRADESCARD";
            break;
        case 'PD_SUPER_CREDITO_CBSS':
            strRet = "VDN_D_SUPER_CREDITO_CBSS";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_SUPER_CREDITO_CBSS";
            break;
        case 'PD_SUPER_CREDITO_BRADESCARD':
            strRet = "VDN_D_SUPER_CREDITO_BRADESCARD";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_SUPER_CREDITO_BRADESCARD";
            break;
        case 'PD_PRO_SEGUROS':
            strRet = "VDN_D_PRO_SEGUROS";
            strAux = strRet;
            sParamBalanceamentoVDN = "VDN_D_PRO_SEGUROS";
            break;
        case 'PD_CAMP_SAQUE':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strRet = "VDN_CAMP_SAQUE";
                strAux = strRet;
            } else {
                strRet = "VDN_CAMP_SAQUE_PIDNOK";
                strAux = strRet;
            }
            sParamBalanceamentoVDN = "VDN_CAMP_SAQUE";
            break;
        default:
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
            } else {
                strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
            }
            sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
    }
    
    if ( strAux == "") { //erro em alguma VDN, usa default
        if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
            strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados);
        } else {
            strAux = "VDN_ATENDENTE_SOLIC" + defineGrupoVDN(dados) + "_PIDNOK";
        }
        sParamBalanceamentoVDN = "VDN_ATENDENTE_SOLIC";
    }

    return strAux

}

//RN04

function SetaVDNDados(dados) {
    
    var strAux = "";
    var strVendas = "";
    var strCAC = "";
    __Log('############# dados : ' + dados +'###########');
    switch(dados.ePontoDerivacao){
        case 'PD_NENHUM':
            strAux = 'VDN_CAC_PIDNOK';
            break;
        case 'PD_PERDA_ROUBO':
            strAux = 'VDN_OpPR';
            break;
        case 'PD_PERDA_ROUBO_ATENDIMENTO':
            strAux = 'VDN_OpPR_ATD';
            break;
        case 'PD_PERDA_ROUBO_REEMISSAO':
            strAux = 'VDN_OpPR_Reemissao';
            break;
        case 'PD_FRAUDE':
            strAux = 'VDN_FraudeDeriva';
            break;   
        case 'PD_PROPOSTA':
            strAux = 'VDN_OpCartaoNRecebido';
            break; 
        case 'PD_NC':
            strAux = 'VDN_OpNC';
            break; 
        case 'PD_CORPORATE':
            strAux = 'VDN_Corporate';
            break;   
        case 'PD_PREVENTIVO':
            strAux = 'VDN_Preventivo';
            break;                              
        case 'PD_DESBLOQUEIO':
            if (dados.bPIDOk || dados.bSenhaCHIPOk) {
                strAux = 'VDN_Desbloqueio';
            } else {
                strAux = 'VDN_Desbloqueio_PIDNOK';
            }
            break; 
        case 'PD_DESBLOQUEIO_CARTASIMPLES':
            strAux = 'VDN_DesbloqueioCartaSimples';
            break; 
        case 'PD_DESBLOQUEIO_CARTASIMPLES_DETECCAO':
            strAux = 'VDN_DesbloqueioCartaSimplesDeteccao';
            break; 
        case 'PD_DESBLOQUEIO_VENDAS':
            strAux = 'VDN_DesbloqueioVendas';
            break; 
        case 'PD_APLICATIVO_BBC':
            if (dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = 'VDN_BBC';
            } else {
                strAux = 'VDN_BBC_PIDNOK';
            }
            break; 
        case 'PD_REEMISSAO_SENHA':
            strAux = 'VDN_ReemissaoSenha';
            break; 
        case 'PD_CAC_QHOST':
            strAux = 'VDN_CAC_QHost';
            break; 
        case 'PD_ENVIO_SMS':
            strAux = 'VDN_EnvioSMS';
            break; 
        case 'PD_FATURA_EMAIL':
            strAux = 'VDN_FaturaEmail';
            break; 
        case 'PD_CANCELAMENTO_SEGUROS':
            strAux = 'VDN_Cancel_SegPro';
            break; 
        case 'PD_RETENCAO_SEGUROS':
            strAux = 'VDN_RetencaoSeguros';
            break; 
        case 'PD_BUNKER':
            strAux = 'VDN_Bunker';
            break; 
        case 'PD_RETENCAO_CANCELAMENTO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = 'VDN_RetencaoCancelamento';
            } else {
                strAux = 'VDN_RetencaoCancelamento_PIDNOK';
            }
            //Exceto Angeloni e CVC
            //bBalanceaAtentoCallLinkCancela = CBool(InStr("052;053;055;091", sORGCartao) = 0)
        
        case 'PD_CANCELAMENTO_CARTAO':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = 'VDN_Cancel_Cartao';
            } else {
                strAux = 'VDN_Cancel_Cartao_PIDNOK';
            }
            break; 
        case 'PD_CONTESTACAO':
            strAux = 'VDN_Contestacao';
            break; 
        case 'PD_HOTLINE_MAKRO_CANCELAMENTO':
            strAux = 'VDN_HotLine_Cancelamento';
            break; 
        case 'PD_HOTLINE_MAKRO_COBRANCA':
            strAux = 'VDN_HotLine_Cobranca';
            break; 
        case 'PD_HOTLINE_VENDAS_SAQUE':
            if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "") {
                strCAC = 'VDN_CAC';
                strVendas = 'VDN_HOTLINE_SAQUE_CEA';
                //strAux = BalanceamentoSaqHot(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
            } else {
                strAux = 'VDN_CAC';
            }
            break; 
        case 'PD_HOTLINE_VENDAS_PARCELAMENTO':
            if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "") {
                strCAC = 'VDN_CAC';
                strVendas = 'VDN_HOTLINE_PARCELA_CEA';
                //strAux = BalanceamentoParcHot(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
            } else {
                strAux = 'VDN_CAC';
            }
            break; 
        case 'PD_VENDAS_LIMITE_EMERGENCIAL':
            strAux = 'VDN_Vendas_LimiteEmerg';
            break; 
        case 'PD_CANCELA_LIMITE_EMERGENCIAL':
            strAux = 'VDN_Cancela_LimiteEmerg';
            break; 
        case 'PD_AUMENTO_LIMITE':
            strAux = 'VDN_Limite_Agtvirt';
            break; 
        case 'PD_VENDAS_PARCELAMENTO':
            if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "") {
                strCAC = 'VDN_CAC';
                strVendas = 'VDN_Vendas_Parc';
                //strAux = BalanceamentoParc(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
            } else {
                strAux = 'VDN_CAC';
            }
            break; 
        case 'PD_INFO_PARCELAMENTO':
            strAux = 'VDN_Info_Parc';
            break; 
        case 'PD_VENDAS_SAQUE':
            if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "") {
                strCAC = 'VDN_CAC';
                strVendas = 'VDN_Vendas_Saque';
                //strAux = BalanceamentoSaq(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
            } else {
                strAux = 'VDN_CAC';
            }
            break; 
        case 'PD_INFO_SAQUE':
            strAux = 'VDN_Info_Saque';
            break; 
        case 'PD_SOLICITAR_SEGURO_PROTECAO':
            strAux = 'VDN_Solic_SegPro';
            break; 
        case 'PD_COBERTURA_SEGUROS':
            strAux = 'VDN_CoberturaSeguros';
            break; 
        case 'PD_VENDAS_ODONTO':
            strAux = 'VDN_Vendas_Odonto';
            break; 
        case 'PD_VENDAS_CARTAO_ADICIONAL':
            strAux = 'VDN_Vendas_CartaoAdic';
            break; 
        case 'PD_CAC':
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "" && !ehParceriaSemFiltroVendas(dados)) {
                    strCAC = 'VDN_CAC';
                    strVendas = 'VDN_Vendas_CAC';
                    //strAux = BalanceamentoAtd(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
                } else {
                    strAux = 'VDN_CAC';
                }
            } else {
                if (dados.UR80.AplVlrSldParcial > 0 && dados.UR80.AplCdBloqueio == "" && !ehParceriaSemFiltroVendas(dados)) {
                    strCAC = 'VDN_CAC_PIDNOK';
                    strVendas = 'VDN_Vendas_CAC_PIDNOK';
                    //strAux = BalanceamentoAtd(T_Fluxo, "ePontoDerivacao=CAC - ", "ePontoDerivacao=VENDAS - ", strCAC, strVendas)
                } else {
                    strAux = 'VDN_CAC_PIDNOK';
                }
            }
            break;
        case 'PD_CANCELAMENTO_CARTAO_ADICIONAL':
            strAux = 'VDN_CAC';
            break;
        default:
            if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
                strAux = 'VDN_CAC';
            } else {
                strAux = 'VDN_CAC_PIDNOK';
            }
    }

    if ( strAux == "" ) { //erro em alguma VDN, usa default
        if ( dados.bPIDOk || dados.bSenhaCHIPOk ) {
            strAux = 'VDN_CAC';
        } else {
            strAux = 'VDN_CAC_PIDNOK';
        }
    }

    return strAux;

}

function verVerificacao1(dados) {
    if ( dados.bEhAtendimentoServiceDesk || dados.bEhAtendimentoServiceDesk_0800 || dados.bEhAtendimentoProcon || dados.bEhAtendimentoEmprestimoIbiFolha || dados.bEhAtendimentoEmprestimoBradIbiCard || dados.bEhAtendimentoMakroEDemais || dados.bEhAtendimentoDesbloq_Brad_Venda_Seguros || dados.bEhAtendimentoD_Super_Credito || dados.bEhAtendimentoD_Emprest_INSS || dados.bEhAtendimentoD_Ibi_Seguro || dados.bEhAtendimentoD_Pro_Seguro){
        return true;
    } else {
        return false;
    }
}

function defineGrupoVDN(dados){
	
	if(!dados.hasOwnProperty("sListaORGs_CAN")){
		dados.sListaORGs_CAN ='';
	}
	
	__Log('############# dados.parametros.ListaORGs_CAN :' + JSON.stringify(dados.parametros.ListaORGs_CAN));

    //v3.0.46 - Chiba - Inclusão do serviço Saque - 04/05/2021 - aproveitado e c||rigido para as derivações diretas.
    if ( dados['bEhAtendimentoCampSaque'] && dados['ePontoDerivacao'] == 'PD_CAMP_SAQUE' ) {
        return "_SAQUE";
    } else if ( dados['bEhAtendimentoServiceDesk'] || dados['bEhAtendimentoServiceDesk_0800'] ) {
        return "_DIRETO";
    } else if ( dados['bEhAtendimentoProcon'] ) {
        return "_DIRETO";
    } else if ( dados['bEhAtendimentoEmprestimoIbiFolha'] ) {
        return "_DIRETO";
    } else if ( dados['bEhAtendimentoEmprestimoBradIbiCard'] ) {
        return "_DIRETO";
    } else if ( dados['bEhAtendimentoMakroEDemais'] ) {
        return "_DIRETO";
    } else if ( dados['bEhAtendimentoDesbloq_Brad_Venda_Seguros'] ) {
        return "_DIRETO";
    
    //v3.0.47 - Chiba - Inclusão de Telefones na URA - 20/05/2021
    } else if ( dados['bEhAtendimentoD_Super_Credito'] || dados['bEhAtendimentoD_Emprest_INSS'] || dados['bEhAtendimentoD_Ibi_Seguro'] ) {
        return "_DIRETO";
    } else if ( dados['bEhAtendimentoD_Pro_Seguro'] ) {
        return "_DIRETO";
        
        
        
    } else if ( dados['parametros']['ListaORGs_CAN'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_CAN";
    } else if ( dados['parametros']['ListaORGs_CEA'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_CEA";
    } else if ( dados['parametros']['ListaORGs_BCR'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_BCR";
    } else if ( dados['parametros']['ListaORGs_CBS'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_CBS";
    } else if ( dados['parametros']['ListaORGs_MKR'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_MKR";
    } else if ( dados['parametros']['ListaORGs_LSA'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_LSA";
    } else if ( dados['parametros']['ListaORGs_MAT'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_MAT";
    } else if ( dados['parametros']['ListaORGs_SDM'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_SDM";
    } else if ( dados['parametros']['ListaORGs_ANG'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_ANG";
    
    //FZ - v3.0.24b - Pontos de derivação com segregação PID ok e Nok, e tratamento Coop, Comper e Luigi (fase2) - 30/01/2019
    } else if ( dados['parametros']['ListaORGs_COP'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_COP";
        
    //v3.0.41 - Chiba - Inclusão Novas ||G's - 12/02/2021
    } else if ( dados['parametros']['ListaORGs_CEC'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_CEC";
    } else if ( dados['parametros']['ListaORGs_CRJ'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_CRJ";
    } else if ( dados['parametros']['ListaORGs_FJK'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_FJK";

    //v3.0.50 - Chiba - troca de Atakarejo para Nosso Lar - Ago/2021
    //'} else if ( dados['sListaORGs_ATK'].indexOf(dados['sORGCartao']) {
    //'    return "_ATK";
    } else if ( dados['parametros']['ListaORGs_ATK'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_NLR";
    
    //'v3.0.43 - Chiba - Inclusão Bradesco Expresso - 08/03/2021
    } else if ( dados['parametros']['ListaORGs_BEX'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_BEX";
    //'v3.0.45 - Chiba - CADASTRO NOVA ||G CASAS BAHIA - 07/04/2021
    } else if ( dados['parametros']['ListaORGs_CAB'].indexOf(dados['sORGCartao']) > -1 ) {
        return "_CAB";
    } else {
        return "_DEF";
    }

}

function ehParceriaSemFiltroVendas(dados) {
    //FZ - v3.0.11 - Retirada Mateus de Ilha de Vendas - 01/03/2018

    var parametros = dados['parametros'];
    
    var strORGLogo = dados['sORGCartao'] + dados['sLogoCartao'] + ";";
    var strORG = ";" + dados['sORGCartao'] + ";";
    var strORG1 = ";" + dados['sORGCartao'] + ";";
    
    if (parametros['ListaParceriasSemFiltroVendas'].indexOf(strORGLogo) > -1) {
        return true;
    } else if (parametros['ListaParceriasSemFiltroVendas'].indexOf(strORG) > -1) {
        return true;
    } else if (parametros['ListaParceriasSemFiltroVendas'].indexOf(strORG1) > -1) {
        return true;
    } else {
        return false;
    }

}

function seDataFraseINSSTelMudou(dados) {
    
    var strAux = '';
    var wDataInicio = '';
    var DtAtual = '';
    var retorno = false;
    
    
    strAux = dados.parametros.HabDtTelINSSMudou;
    DtAtual = formataDataAtual('ddMMyyyy');
    if (strAux.length == 8) { //verifica se tem conteudo

        wDataInicio = strAux;
        __Log('strAux : ' + strAux); 
        __Log('wDataInicio : ' + wDataInicio); 
        __Log('DtAtual : ' + DtAtual); 
        
        if (diferencaEntreDatas(DtAtual,wDataInicio) >= 0) {
        	retorno= true;
        }
    }
    
    //__Log('diferencaEntreDatas(formataDataAtual(ddMMyyyy)) : ' + diferencaEntreDatas(formataDataAtual('ddMMyyyy')));
    __Log('wDataInicio : ' + wDataInicio); 

    return retorno;
 
}

//RN48

function seFalaFraseProconDesliga(dados) {
    
    //var bProcon_HabDtFraseProconCovid = False
    var strAux = "";
    var retorno = false;
    
    strAux = dados.parametros.Procon_DtFraseProconCovid; 
    
    if (strAux != "") { //verifica se tem conteudo
        var wNow = formataDataAtual('ddMMyyyy');
        var wDataInicio = strAux.substring(6,8)+strAux.substring(4, 6)+strAux.substring(0, 4);
        var wDataFinal = strAux.substring(19,21)+strAux.substring(17, 19)+strAux.substring(13, 17);
        
        __Log(diferencaEntreDatas(wNow, wDataInicio));
        __Log(diferencaEntreDatas(wDataFinal, wNow));

        if (diferencaEntreDatas(wNow,wDataInicio) >= 0 && diferencaEntreDatas(wDataFinal,wNow) >= 0) {
        	retorno= true;
            //bProcon_HabDtFraseProconCovid = True            
        }
    }
    __Log(' #### dados.parametros.Procon_DtFraseProconCovid ###' + dados.parametros.Procon_DtFraseProconCovid);
    __Log(' #### wNow ###' + wNow);
    __Log(' #### wDataInicio ###' + wDataInicio);
    __Log(' #### wDataFinal ###' + wDataFinal);

    return retorno;
 
}

//RN47

function podeDerivarProcon(dados) {
    
    var wAux = "";

    wAux = dados.parametros.Procon_Horario_Atendimento;
	__Log(' #### Procon_Horario_Atendimento ###' + wAux);

    var retorno = false;
	
    if (wAux == "") {
        var horaIni = "0800";
        var HoraFim = "1800";
    } else {
		var horaIni = wAux.substring(0, 4);
		var HoraFim = wAux.substring(5, 9);    
    }

    var hora = formataDataAtual("hhmm");
    var wData = formataDataAtual("dd/MM/yyyy");
	__Log(' #### wData ###' + wData);

    var diaSemana = new Date().getDay();

	__Log(' #### Dia da Semana ###' + diaSemana);

    switch (diaSemana) {
        case 0:
        case 6:
            //nao atende no fim de semana
            break;
        default:
            __Log('horaIni: ' + horaIni);
            __Log('hora: ' + hora);
            __Log('HoraFim: ' + HoraFim);
            
            if (horaIni <= hora && hora <= HoraFim) {
                var wAuxf = "";
                //verifica se é feriado
                wAuxf = dados.parametros.Procon_Feriado;				
				__Log(' #### Procon_Feriado ###' + wAuxf);
                if (wAuxf != '') {						
                    var wPos = wAuxf.indexOf(wData);
					__Log(' #### Feriado ###' + wPos);
                    if ( wPos < 0 ) {						
                        retorno = true;
                    }
                }
            }
    }

    return retorno;
}

function preparaLogTrace(dados) {
	for (var idx in dados.objSessao.inLogOperacao) {
		var navAtual = dados.objSessao.inLogOperacao[idx];
		var level, msg;
	
		switch (navAtual.codigoServico) {
			case "PARMMENU":
				msg = "servico de parametros"
				break;
			case "INFOATDO":
				msg = "servico consultar-informacoes-iniciais-atendimento"
				break;
			case "UR8F":
				msg = "servico UR8F"
				break;
			case "UR80":
				msg = "servico UR80"
				break;
			case "CONSU":
				msg = "servico Balanceamento"
				break;
			case "CONSSRVC":
				if (navAtual.dadosOperacao[0].Request.codigoServico != null && navAtual.dadosOperacao[0].Request.codigoServico != undefined) {
					switch (navAtual.dadosOperacao[0].Request.codigoServico) {
						case "idClient":
							msg = "servico de parametros do modulo YXIC";
							break;
						case "transfe":
							msg = "servico de parametros do modulo YXTC";
							break;
						case "central":
							msg = "servico de parametros do modulo YXAT";
							break;
								
						default:
							msg = "servico de parametros de modulo";
							break;
					}
				} else {
					msg = "servico de parametros de modulo";
				}
				break;
		
			default:
				msg = "servico nao-identificado"
				break;
		}
		
		if (navAtual.status == 0) {
			level = 1;
			msg = "Executou com sucesso o " + msg;
		} else {
			level = 3;
			msg = "Executou com erro o " + msg;
	
		dados = adicionaLogTrace(dados, level, msg, navAtual.timestampInicio);
	
	}
	return dados;
}

}

function adicionaLogTrace(objeto, level, valor, timestamp) { //0 – DEBUG | 1 – INFO | 2 – WARN | 3 – ERROR

	//Verifica se a posição já foi instanciada
	if (!objeto.hasOwnProperty("logTrace")) {
		objeto["logTrace"] = [];
	}

	//Adiciona msg de trace
    objeto["logTrace"].push({
		"level": level,
		"msg": "[" + (timestamp == null ? getTimeStamp() : timestamp) + "] " + valor
	});

	return objeto;
}

function getTimeStamp() {
	var dataAtual = (new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString();
	return dataAtual.substring(0,23).replace('T',' '); // "9999-12-31 23:59:59.999"
}

function trataParametros(dados) {

    __Log('#### parametros: ' + JSON.stringify(dados.parametros));

    for (var key in dados.parametros) {
		
		var strValorParam = '';
		strValorParam += dados.parametros[key];
		var blUpperValor = strValorParam.toUpperCase();
		
		//__Log('##### VALOR UPPERCASE:|' + blUpperValor + '|');
		
        if (blUpperValor == "TRUE") {
            dados.parametros[key] = true;
        } else if (blUpperValor == "FALSE") {
            dados.parametros[key] = false;
        } else if (blUpperValor == "TODOS") {
			dados.parametros[key] = "TODOS";
		}
     }
	__Log('#### parametros: ' + JSON.stringify(dados.parametros));
    return dados.parametros;
}

function getDataAtual() {
	return (new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString();
	
}

function verificaTamanhoLog(obj) {
    var bytes = 0;

    function sizeOfLog(obj) {
        if(obj !== null && obj !== undefined) {
            switch(typeof obj) {
            case 'number':
                bytes += 8;
                break;
            case 'string':
                bytes += obj.length * 2;
                break;
            case 'boolean':
                bytes += 4;
                break;
            case 'object':
                var objClass = Object.prototype.toString.call(obj).slice(8, -1);
                if(objClass === 'Object' || objClass === 'Array') {
                    for(var key in obj) {
                        if(!obj.hasOwnProperty(key)) continue;
                        sizeOfLog(obj[key]);
                    }
                } else bytes += obj.toString().length * 2;
                break;
            }
        }
        return bytes;
    }
    return sizeOfLog(obj);
}

function normalizaLogTransacional(dados) {

	for (var idx in dados.objSessao.inLogOperacao) {
		var navAtual = dados.objSessao.inLogOperacao[idx];
		delete navAtual.tipoBloco;
	}

	for (var idx in dados.objSessao.inLogEvento) {
		var navAtual = dados.objSessao.inLogEvento[idx];
		delete navAtual.tipoBloco;
	}
	return dados;
}

function ValidaOrg(NumCartao,ORG,LOGO,dados) {
	
	var ret = "";
	var iORG;
	var iLOGO;
	var iCartao;

	//VALIDAR
	iORG = ORG;
	iLOGO = LOGO; //val(AplUR8FCartoes(T_Fluxo).LOGO(val(iIndiceORGValido(T_Fluxo))))
	iCartao = NumCartao.substring(5, 11); //Mid(AplUR8FCartoes(T_Fluxo).NumCartao(val(iIndiceORGValido(T_Fluxo))), 4, 6)
	//VALIDAR
	__Log('#### iORG : '+ iORG);

	switch (iORG) {
		case '10':
			ret = "ypiiC&A.wav";
			break;
		case '11':
			ret = "ypiiC&AMastercard.wav";
			break;
		case '13':
			if (dados.parametros.HabDtVisaGold && iCartao == "428267") {
				ret = "ypiiC&AVisaGold.wav";
			} else {
				ret = "ypiiC&Avisa.wav";
			}
			break;
		case '14':
			ret = "ypiiIbicardMasterCard.wav";
			break;
		case '15':
			ret = "ypiiIBICArdVisa.wav";
			break;
		case '16':
			ret = "ypiiC&A.wav";
			break;
		case '17':
			ret = "ypiiDoTzMastercard.wav";
			break;
		case '18':
			ret = "ypiiIbicredo.wav";
			break;
		case '19':
			ret = "ypiiIBIcard.wav";
			break;
		case '20':
			ret = "ypiiBradescard.wav";
			break;
		case '21':
			ret = "ypiiBradescard.wav";
			break;
		case '22':
			ret = "ypiiBradescard.wav";
			break;
		case '23':
			ret = "ypiiIbicredC&A.wav";
			break;
		case '24':
			ret = "ypiiC&A.wav";
			break;
		case '25':
			ret = "ypiiIBIcard.wav";
			break;
		case '26':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '27':
			ret = "ypiiClubeMapfre.wav";
			break;
		case '28':
			ret = "ypiiBradescard.wav";
			break;
		case '29':
			ret = "ypiiBradescard.wav";
			break;
		case '30':
			ret = "ypiiBradescard.wav";
			break;
		case '32':
			ret = "ypiiBradescard.wav";
			break;
		case '33':
			ret = "ypiiBradescard.wav";
			break;
		case '34':
			ret = "ypiiBradescard.wav";
			break;
		case '36':
			ret = "ypiiBradescard.wav";
			break;
		case '38':
			switch (iLOGO) {
				case '22':
					ret = "ypiiMateusVisaNacional.wav";
					break;
				case '30':
					ret = "ypiiMateusMastercardInter.wav";
					break;
				case '38':
					if (SeDataEloMais(dados)) { //VALIDAR
						ret = "ypiiMateusCartdEloMais.wav";
					} else {
						ret = "ypiiMateusEloInternacional.wav";
					}
					break;
				case '48':
					ret = "ypiiMateusEloMais.wav";
					break;
			}
			break;
		case '40':
			ret = "ypiiBradescard.wav";
			break;
		case '42':
			ret = "ypiiBradescard.wav";
			break;
		case '44':
			ret = "ypiiBradescard.wav";
			break;
		case '45':
			ret = "ypiiBradescard.wav";
			break;
		case '46':
			if (dados.parametros.HabDtVisaGold && iCartao == "418049") {
				ret = "ypiiMakroVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiMakroEloMais.wav";
			} else {
				ret = "ypiiMakro.wav";
			}
			break;
		case '47':
			ret = "ypiiBradescard.wav";
			break;
		case '48':
			ret = "ypiiBradescard.wav";
			break;
		case '49':
			ret = "ypiiBradescard.wav";
			break;
		case '52':
			ret = "ypiiAngeloni.wav";
			break;
		case '53':
			ret = "ypiiAngeloniMastercard.wav";
			break;
		case '54':
			ret = "ypiiAngeloniVisa.wav";
			break;
		case '55':
			if (dados.parametros.HabDtVisaGold && iCartao == "422011") {
				ret = "ypiiAngeloniVisaGold.wav";
			} else {
				ret = "ypiiAngeloniVisa.wav";
			}
			break;
		case '56':
			ret = "ypiiBradescard.wav";
			break;
		case '57':
			ret = "ypiiBradescard.wav";
			break;
		case '59':
			if (dados.parametros.HabDtVisaGold && iCartao == "420339") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '61':
			ret = "ypiiCanalJeans.wav";
			break;
		case '62':
			ret = "ypiiCanalJeans.wav";
			break;
		case '63':
			ret = "ypiiCanalJeans.wav";
			break;
		case '64':
			ret = "ypiiCanalJeans.wav";
			break;
		case '65':
			ret = "ypiiCanalJeans.wav";
			break;
		case '67':
			ret = "ypiiBradescard.wav";
			break;
		case '69':
			if (dados.parametros.HabDtVisaGold && iCartao == "457302") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '72':
			if (dados.parametros.HabDtVisaGold && iCartao == "457292") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiLuigiBertolli.wav";
			}
			break;
		case '74':
			ret = "ypiiBradescard.wav";
			break;
		case '77':
			ret = "ypiiCompcard.wav";
			break;
		case '79':
			ret = "ypiiBradescard.wav";
			break;
		case '81':
			if (dados.parametros.HabDtVisaGold && iCartao == "457294") {
				ret = "ypiiCoopVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiCoopFacilEloMais.wav";
			} else {
				ret = "ypiiCoopcopil.wav";
			}
			break;
		case '89':
			if (dados.parametros.HabDtVisaGold && iCartao == "418048") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '91':
			if (dados.parametros.HabDtVisaGold && iCartao == "457304") {
				ret = "ypiiBradescardVisaGold.wav";
			} else {
				ret = "ypiiBradescard.wav";
			}
			break;
		case '101':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '102':
			if (dados.parametros.Hab_ENC_LASA) {
				ret = "ypiiBradescard.wav";
			} else {
				ret = "ypiiLojAmericanas.wav";
			}
			break;
		case '106':
			ret = "ypiiCasasBahia.wav";
			break;
		case '108':
			ret = "ypiiC&C.wav";
			break;
		case '112':
			ret = "ypiiCarajas.wav";
			break;
		case '114':
			ret = "ypiiBradExpresso.wav";
			break;
		case '116':
			ret = "ypiiFujioka.wav";
			break;
		case '122':
			if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR
				ret = "ypiiC&aEloMais.wav";
			} else {
				ret = "ypiiC&Aelo.wav";
			}
			break;
		case '123':
			ret = "ypiiAngeloni.wav";
			break;
		case '126':
			if (dados.parametros.HabDtVisaGold && iCartao == "444666") {
				ret = "ypiiBradescardVisaGold.wav";
			} else if (SeDataEloMais(dados) && iLOGO == '38') { //VALIDAR1
				ret = "ypiiSodimacEloMais.wav";
			} else {
				if (dados.parametros.HabReestruturacaoVDNs) {
					ret = "ypiiSodimac.wav";
				} else {
					ret = "ypiiBradescard.wav";
				}
			}
			break;
		case '136':
			ret = "ypiiNossoLar.wav";
			break;
		case '510':
			ret = "ypiiIbicardElo.wav";
			break;
		case '568':
			ret = "ypiiBradescard.wav";
			break;
		case '569':
			ret = "ypiiBradescardElo.wav";
			break;
		case '571':
			ret = "ypiiConsigBradescard.wav";
			break;
		case '573':
			ret = "ypiiConsigBradescard.wav";
			break;
		default:
			ret = "ypiiBradescard.wav";
	}
	
	__Log('#### ret : '+ ret);

	return ret;
}

function AddLogTick(dados,Tick,StrInfo) {

    var sSeqMenLog  = '' ;

    if(StrInfo.length > 0){
        sSeqMenLog = Tick + '#' + StrInfo
    }else{
        sSeqMenLog = Tick
    }
    
    if(AppState.io_dados.LogTick.length == 0){
        AppState.io_dados.LogTick = sSeqMenLog;
    }else{
        AppState.io_dados.LogTick =  AppState.io_dados.LogTick + ";" + sSeqMenLog;
    }        
}

function PossuiOrgLogo(str,valor) {
	__Log('############ str : ' + str);
	__Log('############ valor : ' + valor);
	  var substrings = str.split(';');
	  var contem = false;

	  for (var i = 0; i < substrings.length; i++) {
	    if (substrings[i] === valor) {
	      contem = true;
	      break;
	    }
	  }

	  return contem;
}



function getDiretorioComuns() {
    return "../../01comuns/Resources/Prompts/Frases/";
}

function getPoloCode() {
    var polo = getPolo();
    var code = "";

    if (polo == "SPO") {
        code = "310";
    } else if (polo == "CTA") {
        code = "330";
    } else if (polo == "RJO") {
        code = "350";
    } else if (polo == "OSO") {
        code = "360";
    } else if (polo == "BSA") {
        code = "340";
    } else if (polo == "BHE") {
        code = "320";
    } else {
        code = "";
    }
    __Log('#### polo code ####: ' + code);
    return code;
}

function getPolo() { //POLO GVP CARTOES
    var polo = getSIPHeaderValue('User-Agent').toUpperCase();
    __Log('#### User-Agent: ' + polo);

    if (polo.indexOf("SBC_BHE") >= 0) {
          polo = "BHE";
    } else if (polo.indexOf("SBC_BSB") >= 0) {
          polo = "BSA";
    } else if (polo.indexOf("SBC_CTA") >= 0) {
          polo = "CTA";
    } else if (polo.indexOf("SBC_OSA") >= 0) {
          polo = "OSO";
    } else if (polo.indexOf("SBC_RJO") >= 0) {
          polo = "RJO";
    } else if (polo.indexOf("SBC_SPO") >= 0) {
          polo = "SPO";
    } else if (polo.indexOf("SBC_LAB_SPO") >= 0) {
          polo = "SPO";
    } else if (polo.indexOf("SBC_LAB_ALPHA") >= 0) {
          polo = "SPO";
    } else if (polo.indexOf("SBC_SP") >= 0) {
          polo = "SPO";
    } else {
          polo = "N/A";
    }

    __Log('#### polo: ' + polo);
    return polo;
}

function limpaVariaveis(dados) {

	//Para armazenar a transação UR80
	dados['UR80'] = {}

	//Para armazenar a transação UR81
	dados['UR81'] = {}

	//Para armazenar a transação UR85
	dados['UR85'] = {}

	//Para armazenar a transação UR8F
	dados['UR8F'] = {}

	dados['sCartao'] = "";
	dados['sCPFTitular'] = "";
	dados['sORGCartao'] = "";
	dados['sLogoCartao'] = "";//usado nos logs
	dados['sCodBloqCartao'] = "";//usado nos logs
	dados['sDiasAtraso'] = "";//usado nos logs	
	dados['DERIVACAO_CODIGO'] = "02"; //01 - Usuário | 02 - Sistema[padrao]
	dados['DERIVACAO_MOTIVO'] = "";
	dados['clienteAbandonou'] = false;

	return dados;
}
