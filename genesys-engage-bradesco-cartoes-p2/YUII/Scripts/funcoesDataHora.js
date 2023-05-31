function isDentroHorario(feriado, horario) {
	if (horario && horario.indexOf(";") > 0 && horario.indexOf("-") > 0) {
		var data = new Date();
		var dataHoje = formataDataAtual("ddMM");
		var diaSemana = data.getDay();

		var hihf = horario.split(";");
		var hSem = (hihf[0] && hihf[0].indexOf("-") > 0 ? hihf[0].split("-") : ["0000", "0000"]);
		var hSab = (hihf[1] && hihf[1].indexOf("-") > 0 ? hihf[1].split("-") : ["0000", "0000"]);
		var hDom = (hihf[2] && hihf[2].indexOf("-") > 0 ? hihf[2].split("-") : ["0000", "0000"]);

		var ini = [hSem[0], hSab[0], hDom[0]];
		var fim = [hSem[1], hSab[1], hDom[1]];

		var horaAtual = parseInt(formataDataAtual("hhmm"), 10);

		if (parseInt(ini[0], 10) > parseInt(fim[0], 10) || parseInt(ini[1], 10) > parseInt(fim[1], 10) || parseInt(ini[2], 10) > parseInt(fim[2], 10)) {
			if ((feriado || diaSemana == 0) && (horaAtual >= parseInt(ini[2], 10) || horaAtual < parseInt(fim[2], 10))) {
				return true;
			} else {
				if (diaSemana == 6 && (horaAtual >= parseInt(ini[1], 10) || horaAtual < parseInt(fim[1], 10))) {
					return true;
				} else {
					if (diaSemana >= 1 && diaSemana <= 5 && (horaAtual >= parseInt(ini[0], 10) || horaAtual < parseInt(fim[0], 10))) {
						return true;
					}
				}
			}
			return false;

		} else if ((feriado || diaSemana == 0) && (horaAtual < parseInt(ini[2], 10) || horaAtual >= parseInt(fim[2], 10))) {
			return false;
		} else {
			if (diaSemana == 6 && (horaAtual < parseInt(ini[1], 10) || horaAtual >= parseInt(fim[1], 10))) {
				return false;
			} else {
				if (diaSemana >= 1 && diaSemana <= 5 && (horaAtual < parseInt(ini[0], 10) || horaAtual >= parseInt(fim[0], 10))) {
					return false;
				}
			}
		}
		return true;
	}
	return false;
}

var formatos = {
	"dd": function (data) {
		var dia = data.getDate();
		return dia < 10 ? "0" + dia : dia;
	},
	"MM": function (data) {
		var mes = data.getMonth() + 1;
		return mes < 10 ? "0" + mes : mes;
	},
	"yyyy": function (data) {
		return data.getFullYear();
	},
	"yy": function (data) {
		return data.getFullYear().toString().substring(2, 4);
	},
	"hh": function (data) {
		var h = data.getHours();
		return h < 10 ? "0" + h : h;
	},
	"mm": function (data) {
		var m = data.getMinutes();
		return m < 10 ? "0" + m : m;
	},
	"ss": function (data) {
		var s = data.getSeconds();
		return s < 10 ? "0" + s : s;
	},
	"ms": function (data) {
		var ms = data.getMilliseconds();
		return ms < 100 ? (ms < 10 ? "00" + ms : "0" + ms) : ms;
	}
};

var cDiasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

function formataDataAtual(formato) {
	return formataData(new Date(), formato);
}

function formataData(data, formato) {
	if (formato == null || formato.length == 0) {
		return "";
	}

	var retorno = "";
	var letra = formato.charAt(0);
	var palavra = letra;

	for (var i = 1; i < formato.length; i++) {
		var proximaLetra = formato.charAt(i);
		if (letra == proximaLetra) {
			palavra += proximaLetra;
		} else {
			if (formatos[palavra] == undefined) {
				retorno += palavra;
			} else {
				retorno += formatos[palavra](data);
			}
			letra = proximaLetra;
			palavra = letra;
		}
	}
	if (formatos[palavra] == undefined) {
		retorno += palavra;
	} else {
		retorno += formatos[palavra](data);
	}

	return retorno;
}

/**
 * Funcao getDateFromString(dt)
 * 
 * Formato: retorna data de entrada no formato String DDMMAA ou DDMMAAAA em Date.
 * @param dt
 * @returns {Date}
 *
 **/
function getDateFromString(dt) {

	var dia = dt.substr(0, 2);
	var mes = dt.substr(2, 2);
	var ano = dt.substr(4);

	mes = parseInt(mes, 10) - 1;

	if (ano.length == 2) {
		ano = "20" + ano;
	}

	var data = new Date(ano, mes, dia);
	return data;
}

function getDateFromStringInternational(dt) {

	var dia = 0;
	var mes = 0;
	var ano = 0;

	if (dt.length == 6) {
		dia = dt.substr(4);
		mes = dt.substr(2, 2);
		ano = "20" + dt.substr(0, 2);
	} else {
		dia = dt.substr(6);
		mes = dt.substr(4, 2);
		ano = dt.substr(0, 4);
	}

	mes = parseInt(mes, 10) - 1;
	var data = new Date(ano, mes, dia);
	return data;
}

/*
 * formato data ddMMyyyyhhmmss ou ex: 2016-01-12T18:00:00
 */
function getFullDateFromStringInternational(dt) {

	dt = replaceAll(dt, "-", "");
	dt = replaceAll(dt, " ", "");
	dt = replaceAll(dt, "T", "");
	dt = replaceAll(dt, ":", "");

	var dia = dt.substr(6, 2);
	var mes = dt.substr(4, 2);
	var ano = dt.substr(0, 4);
	var hora = dt.substr(8, 2);
	var min = dt.substr(10, 2);
	var seg = dt.substr(12, 2);

	mes = parseInt(mes, 10) - 1;

	if (ano.length == 2) {
		ano = "20" + ano;
	}

	var data = new Date(ano, mes, dia, hora, min, seg);
	return data;
}

function replaceAll(str, rep, valor) {
	var idx = str.indexOf(rep);
	if (idx > 0) {
		return replaceAll(str.substring(0, idx) + valor + str.substring(idx + rep.length), rep, valor);
	}
	return str;
}

/**
 * Funcao validaData(dt)
 * 
 * Formato: retorna verdadeiro se data de entrada no formato DDMMAA eh valida.
 * @param dt
 * @returns {Boolean}
 *
 **/
function validaData(dt) {

	if (dt == null || dt == undefined || dt.length != 6) {
		return false;
	}

	var dia = dt.substr(0, 2);
	var mes = dt.substr(2, 2);
	var ano = dt.substr(4, 2);

	var flg = false;

	if ((Math.abs(ano) > 00) || (Math.abs(ano) <= 99)) {
		switch (mes) {
			case "01":
			case "03":
			case "05":
			case "07":
			case "08":
			case "10":
			case "12":
				flg = Math.abs(dia) <= 31;
				break;

			case "04":
			case "06":
			case "09":
			case "11":
				flg = Math.abs(dia) <= 30;
				break;
			case "02":
				if ((Math.abs(ano) % 4 == 0) || (Math.abs(ano) % 100 == 0) || (Math.abs(ano) % 400 == 0)) {
					flg = Math.abs(dia) <= 29;
				} else {
					flg = Math.abs(dia) <= 28;
				}
				break;
		}
	}

	return flg;

}

/**
 * Funcao diferencaDias(dt)
 * 
 * Formato: retorna diferenca de dias entre a data atual e a data de entrada ou -1 se a data de entrada eh menor que data atual.
 * @param dt
 * @returns {Boolean}
 *
 **/
function diferencaDias(dt, formato) {

	var hoje = new Date();
	var xhoje = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 0, 0, 0);
	var dataX;
	// formato: 1 - nacional, 2 - internacional
	if (formato == 2) {
		dataX = getDateFromStringInternational(dt);
	} else {
		dataX = getDateFromString(dt);
	}

	var dif = Date.UTC(dataX.getYear(), dataX.getMonth(), dataX.getDate(), 0, 0, 0) -
		Date.UTC(xhoje.getYear(), xhoje.getMonth(), xhoje.getDate(), 0, 0, 0);

	return (dif / 1000 / 60 / 60 / 24);

}

function somaDiasDataAtual(dias) {
	var data = new Date();
	data.setDate(data.getDate() + dias);
	return data;
}

function somaMinutosDataAtual(minutos) {
	var data = new Date();
	data.setMinutes(data.getMinutes() + minutos);
	return data;
}

function subtraiDiasDataAtual(dias) {
	return subtraiDiasData(new Date(), dias);
}

function subtraiMinutosDataAtual(minutos) {
	var data = new Date();
	data.setMinutes(data.getMinutes() - minutos);
	return data;
}

function subtraiDiasData(data, dias) {
	data.setDate(data.getDate() - dias);
	return data;
}

function subtraiHorasData(data, horas) {
	data.setHours(data.getHours() - horas);
	return data;
}

//verifica se a data (ddmmyy ou ddmmyyyy) é valida (retorna true ou false)
function validaData2(dt) {

	var dia = dt.substr(0, 2);
	var mes = dt.substr(2, 2);
	var ano = dt.substr(4);

	mes = parseInt(mes, 10) - 1;

	if (ano.length == 2) {
		ano = "20" + ano;
	}

	var data = new Date(ano, mes, dia);

	if (data.getFullYear() == parseInt(ano) && data.getMonth() == parseInt(mes) && data.getDate() == dia) {
		return true;
	} else {
		return false;
	}
}

//retorna a differencia em dias entre duas datas (negativo se a primeira data é menor que a segunda, positivo o contrario)
function diferencaEntreDatas(dt1, dt2) {
	
	__Log('dt1 : ' + dt1); 
	__Log('dt2 : ' + dt2); 
	
	var dia1 = dt1.substr(0, 2);
	var mes1 = dt1.substr(2, 2);
	var ano1 = dt1.substr(4);

	mes1 = parseInt(mes1, 10) - 1;

	if (ano1.length == 2) {
		ano1 = "20" + ano1;
	}

	var data1 = new Date(ano1, mes1, dia1);

	var dia2 = dt2.substr(0, 2);
	var mes2 = dt2.substr(2, 2);
	var ano2 = dt2.substr(4);

	mes2 = parseInt(mes2, 10) - 1;

	if (ano2.length == 2) {
		ano2 = "20" + ano2;
	}

	var data2 = new Date(ano2, mes2, dia2);

	var one_day = 86400000;
	return Math.round((data1 - data2) / one_day);
}

/*
 * formato das datas ddMMyyyy-hhmmss
 */
function diferencaDatasMinutos(dt1, dt2) {
	var dia1 = dt1.substr(0, 2);
	var mes1 = dt1.substr(2, 2);
	var ano1 = dt1.substr(4, 4);
	var hora1 = dt1.substr(9, 2);
	var min1 = dt1.substr(11, 2);
	var seg1 = dt1.substr(13, 2);

	mes1 = parseInt(mes1) - 1;

	if (ano1.length == 2) {
		ano1 = "20" + ano1;
	}

	var data1 = new Date(ano1, mes1, dia1, hora1, min1, seg1);

	var dia2 = dt2.substr(0, 2);
	var mes2 = dt2.substr(2, 2);
	var ano2 = dt2.substr(4, 4);
	var hora2 = dt2.substr(9, 2);
	var min2 = dt2.substr(11, 2);
	var seg2 = dt2.substr(13, 2);

	mes2 = parseInt(mes2) - 1;

	if (ano2.length == 2) {
		ano2 = "20" + ano2;
	}

	var data2 = new Date(ano2, mes2, dia2, hora2, min2, seg2);

	var one_day = 1000 * 60 * 60 * 24; //86400000;
	var one_min = 1000 * 60;

	return Math.round((data1 - data2) / one_min);
}

function trataData(str) {
	if (str == "" || str == undefined) {
		return "00000000";
	}
	var dia = "";
	var mes = "";
	var ano = "";
	str = str.replace("-", "").replace(" ", "");
	dia = str.substring(0, 2);
	mes = str.substring(2, 4);
	ano = str.substring(4, 8);
	return dia + mes + ano;
}

function trataDataInternacional(str) {
	if (str == "" || str == undefined) {
		return "00000000";
	}
	var dia = "";
	var mes = "";
	var ano = "";
	while (str.indexOf("-") >= 0) {
		str = str.replace("-", "");
	}
	dia = str.substring(6, 8);
	mes = str.substring(4, 6);
	ano = str.substring(0, 4);
	return dia + mes + ano;
}

function getUltimoDiaUtil(feriados) {
	var data = new Date();
	data = subtraiDiasDataAtual(1);
	while (data.getDay() == 0 || data.getDay() == 6 || ehFeriado(data, feriados)) {
		data = subtraiDiasData(data, 1);
	}
	return data;
}

/*
 * formato feriados "0101;1702;1802"
 */
function ehFeriado(data, feriados) {
	if (data != undefined && feriados != undefined) {
		if (feriados.indexOf(formataData(data, "ddMM")) >= 0) {
			return true;
		}
	}
	return false;
}

function ehDiaEspecial(data, diaEspecias) {
	if (data != undefined && diaEspecias != undefined) {
		if (diaEspecias.indexOf(formataData(data, "ddMM")) >= 0) {
			return true;
		}
	}
	return false;
}

function buscaProximoDiaUtil(dados, dataInicial) {
	var feriados = dados['parametros']['feriados'];

	var d = new Date(),
		weekday = [1, 0, 0, 0, 0, 0, 2],
		mes,
		cont = 1,
		dia;
	if (dataInicial) {
		d = new Date(dataInicial);
	}
	do {
		d.setDate(weekday[d.getDay()] + d.getDate() + 1);
	} while (ehFeriado(new Date(), feriados));
	mes = (d.getMonth() + 1);

	while (cont == 1) {
		if (d.getDay() == 6 || d.getDay() == 0) {
			d.setDate(d.getDate() + 1);
		} else {
			cont = 0;
		}
	}

	if (mes < 10) {
		mes = '0' + mes;
	}
	dia = d.getDate();
	if (dia < 10) {
		dia = '0' + dia;
	}
	return dia + '' + mes + '' + d.getFullYear();
};

function formataDataTipo(data, tipo, retorno) {
	var ano = "";
	var mes = "";
	var dia = "";

	tipo = tipo.toLowerCase();
	retorno = retorno.toLowerCase();

	switch (tipo) {
		//caso ano mes dia
		case "yyyymmdd":
			ano = data.substring(0, 4);
			mes = data.substring(6, 4);
			dia = data.substring(8, 6);
			break;
		//caso ano dia mes
		case "yyyyddmm":
			ano = data.substring(0, 4);
			dia = data.substring(6, 4);
			mes = data.substring(8, 6);
			break;
		//caso mes dia ano
		case "mmddyyyy":
			mes = data.substring(0, 2);
			dia = data.substring(2, 4);
			ano = data.substring(8, 4);
			break;
		//caso mes ano dia
		case "mmyyyydd":
			mes = data.substring(0, 2);
			ano = data.substring(8, 4);
			dia = data.substring(2, 4);
			break;
		//caso dia mes ano
		case "ddmmyyyy":
			dia = data.substring(0, 2);
			mes = data.substring(4, 2);
			ano = data.substring(8, 4);
			break;
		//caso dia ano mes
		case "ddyyyymm":
			dia = data.substring(0, 2);
			ano = data.substring(2, 6);
			mes = data.substring(8, 6);
			break;
	}

	switch (retorno) {
		//caso ano mes dia
		case "yyyymmdd":
			return ano + '' + mes + '' + dia;
		//caso ano dia mes
		case "yyyyddmm":
			return ano + '' + dia + '' + mes;
		//caso mes ano dia
		case "mmyyyydd":
			return mes + '' + ano + '' + dia;
		//caso mes dia ano
		case "mmddyyyy":
			return mes + '' + dia + '' + ano;
		//caso dia mes ano
		case "ddmmyyyy":
			return dia + '' + mes + '' + ano;
		//caso dia mes ano
		case "ddyyyymm":
			return dia + '' + ano + '' + mes;
	}
}

function verHorarioAtendimentoAdquirente(dados) {
	var parametros = dados['parametros'];

	var hrInicialFeriado = parametros['hratendferiadoinic'];
	var hrFinalFeriado = parametros['hratendferiadofinal'];
	var hrInicialEspecial = parametros['hratendespecialinic'];
	var hrFinalEspecial = parametros['hratendespecialfinal'];
	var hrInicialSemana = parametros['hratendsemanainic'];
	var hrFinalSemana = parametros['hratendsemanafinal'];
	var hrInicialSabado = parametros['hratendsabadoinic'];
	var hrFinalSabado = parametros['hratendsemanafinal'];
	var hrInicialDomingo = parametros['hratenddomingoinic'];
	var hrFinalDomingo = parametros['hratenddomingofinal'];

	var data = new Date();
	var diaSemana = data.getDay();

	if (ehFeriado(new Date(), parametros['feriados'])) {
		if (isDentroHorarioAdquirente(hrInicialFeriado, hrFinalFeriado)) {
			return true;
		}
	} else if (ehDiaEspecial(new Date(), parametros['diaespeciais'])) {
		if (isDentroHorarioAdquirente(hrInicialEspecial, hrFinalEspecial)) {
			return true;
		}
	} else if (diaSemana >= 1 && diaSemana <= 5) {
		if (isDentroHorarioAdquirente(hrInicialSemana, hrFinalSemana)) {
			return true;
		}
	} else if (diaSemana == 6) {
		if (isDentroHorarioAdquirente(hrInicialSabado, hrFinalSabado)) {
			return true;
		}
	} else {
		if (isDentroHorarioAdquirente(hrInicialDomingo, hrFinalDomingo)) {
			return true;
		}
	}

	return false;
}

function isDentroHorarioAdquirente(hrInicial, hrFinal) {
	var horaAtual = parseInt(formataDataAtual("hhmm"), 10);

	var horaInicial = parseInt(hrInicial, 10);
	var horaFinal = parseInt(hrFinal, 10);

	if (parseInt(hrInicial, 10) > parseInt(hrFinal, 10)) {
		if (horaAtual >= horaInicial && horaAtual <= horaFinal) {
			return true;
		}
	}
}

function validaData3(dt) {
	var dia = dt.substr(0, 2);
	var mes = dt.substr(2, 2);
	var ano = dt.substr(4);

	var flg = false;

	switch (mes) {
		case "01":
		case "03":
		case "05":
		case "07":
		case "08":
		case "10":
		case "12":
			flg = Math.abs(dia) <= 31;
			break;
		case "04":
		case "06":
		case "09":
		case "11":
			flg = Math.abs(dia) <= 30;
			break;
		case "02":
			if (Math.abs(ano) % 4 != 0) {
				flg = Math.abs(dia) <= 28;
			} else if (Math.abs(ano) % 4 == 0) {
				if (Math.abs(ano) % 100 != 0) {
					flg = Math.abs(dia) <= 29;
				} else if (Math.abs(ano) % 100 == 0) {
					if (Math.abs(ano) % 400 == 0) {
						flg = Math.abs(dia) <= 29;
					} else {
						flg = Math.abs(dia) <= 28;
					}
				}
			}
			break;
	}

	return flg;
}

function formataDataString(dataString, formato) {
	var dia = '';
	var mes = '';
	var ano = '';

	if (dataString.length == 8) {
		dia = dataString.substr(0, 2);
		mes = dataString.substr(2, 2);
		ano = dataString.substr(4);
	}

	switch (mes) {
		case "01":
			dt = 'Jan ' + dia + ', ' + ano;
			break;
		case "02":
			dt = 'Feb ' + dia + ', ' + ano;
			break;
		case "03":
			dt = 'Mar ' + dia + ', ' + ano;
			break;
		case "04":
			dt = 'Apr ' + dia + ', ' + ano;
			break;
		case "05":
			dt = 'May ' + dia + ', ' + ano;
			break;
		case "06":
			dt = 'Jun ' + dia + ', ' + ano;
			break;
		case "07":
			dt = 'Jul ' + dia + ', ' + ano;
			break;
		case "08":
			dt = 'Aug ' + dia + ', ' + ano;
			break;
		case "09":
			dt = 'Sep ' + dia + ', ' + ano;
			break;
		case "10":
			dt = 'Oct ' + dia + ', ' + ano;
			break;
		case "11":
			dt = 'Nov ' + dia + ', ' + ano;
			break;
		case "12":
			dt = 'Dec ' + dia + ', ' + ano;
			break;
	}

	dt = new Date(Date.parse(dt));

	return formataData(dt, formato);
}

function verificaHorarioAtendimentoDiasNormais(horaRecebida){
	var ret = {};
		var dataHoje = formataDataAtual("yyyy-MM-dd");
		var data =  new Date();
		var diaSemana = data.getDay();
		var horaAtual = parseInt(formataDataAtual("hhmm"), 10);
		var i;
		var dentroHorario = false;
		if (horaRecebida) {
			if (horaRecebida.length == 0) {
				dentroHorario = true;
			} else {
			for (i = 0; i<horaRecebida.length; i++){		
					var horarios = horaRecebida[i].split("/");
					var tipo = horarios[0];
					var gmt = horarios[1];
					var dia = parseInt(horarios[2]);
					var tempo = horarios[3];
					var periodoInicial = parseInt(tempo.split("-")[0].replace(":",""), 10);
					var periodoTerminal = parseInt(tempo.split("-")[1].replace(":",""), 10);
					
					if(tipo == "w" && diaSemana == dia && periodoInicial < horaAtual && horaAtual < periodoTerminal){
		            	var dentroHorario = true;
		            }else if(tipo == "w" && diaSemana == dia && ( horaAtual < periodoInicial || horaAtual > periodoTerminal)){
						var dentroHorario = false;
					}
					 
					 if(dia == 1 ||dia == 2||dia == 3||dia == 4||dia == 5){
						var periodoInicialS = tempo.split("-")[0].replace(":","");
						var periodoTerminalS = tempo.split("-")[1].replace(":","");
					}
					 if(dia == 6 ||dia == 7 ){
						var periodoInicialSab = tempo.split("-")[0].replace(":","");
						var periodoTerminalSab = tempo.split("-")[1].replace(":","");
						var semana = horaRecebida[4].split("/")[3];
						var periodoInicialS = semana.split("-")[0].replace(":","");
						var periodoTerminalS = semana.split("-")[1].replace(":","");
					}
		        if(dentroHorario == true)
					break;
				}
			}
		} else {
			dentroHorario = true;
		}
		ret["dentroHorario"] = dentroHorario;
		ret["tipo"] = tipo;
		ret["periodoInicial"] = periodoInicial;
		ret["periodoTerminal"] = periodoTerminal;
		ret["periodoInicialS"] = periodoInicialS;
		ret["periodoTerminalS"] = periodoTerminalS;
		ret["periodoInicialSab"] = periodoInicialSab;
		ret["periodoTerminalSab"] = periodoTerminalSab;
		
		ret["dia"] = dia;
		ret["data"] = data;
	return ret;
}	

function verificaHorarioAtendimentoFeriado(horaRecebida){
	var ret = {};
		var dataHoje = formataDataAtual("yyyy-MM-dd");
		var data =  new Date();
		//var diaSemana = data.getDay();
		var horaAtual = parseInt(formataDataAtual("hhmm"), 10);
		var i;
		var dentroHorario = false;
		var feriado = false;
		if (horaRecebida) {
			if (horaRecebida.length == 0) {
				dentroHorario = true;
			} else {
			for (i = 0; i<horaRecebida.length; i++){		
					var horarios = horaRecebida[i].split("/");
					var tipo = horarios[0];
					var gmt = horarios[1];
					var dia = parseInt(horarios[2]);
					var data = horarios[2];
					var tempo = horarios[3];
					var periodoInicial = tempo ? parseInt(tempo.split("-")[0].replace(":",""), 10) : "0000";
					var periodoTerminal = tempo ? parseInt(tempo.split("-")[1].replace(":",""), 10) : "0000";
					if(data.split("-")[0]== "*"){
					//dataHoje = dataHoje.replace(dataHoje.split("-")[0],"*");
					data = data.replace(data.split("-")[0],dataHoje.split("-")[0]);
					}
					if(dataHoje == data && horaAtual > periodoInicial && horaAtual < periodoTerminal){
						var dentroHorario = true;
		            }else if(dataHoje == data && ( horaAtual < periodoInicial || horaAtual > periodoTerminal)){
						var feriado = true;
					} 
					 if(feriado == true){
							var periodoInicialS = tempo ? tempo.split("-")[0].replace(":","") : "0000";
							var periodoTerminalS = tempo ? tempo.split("-")[1].replace(":","") : "0000";
					}
		        if(feriado == true)
					break;
				}
			}
		} else {
			dentroHorario = true;
		}
		ret["dentroHorario"] = dentroHorario;
		ret["tipo"] = tipo;
		ret["periodoInicialS"] = periodoInicialS;
		ret["periodoTerminalS"] = periodoTerminalS;
		ret["periodoInicial"] = periodoInicial;
		ret["periodoTerminal"] = periodoTerminal;
		ret["feriado"] = feriado;
		ret["data"] = data;
		ret["dataHoje"] = dataHoje;
	return ret;
}


// Rodrigo da Silva - Inicio

/*
 * formato horarios "0123456;0800,2100"
 */
function ValidaHorarioAtendimento(dados) {
	//0123456;0800,2100	

	var bAplCloseOpen = false;
    var bAplCloseOpenDeriv = false;
    var bAplCloseOpenIDPos = false;
    var bAplAtendimentoAberto = false;

	var UsarHorAtendFeriado = dados.parametros.UsarHorarioAtendFeriado; //(val(GetParametroGMK("UsarHorarioAtendFeriado", "0")) = 1)
    var UsarHorAtendSSDF = dados.parametros.UsarHorarioAtendSSDF; //(val(GetParametroGMK("UsarHorarioAtendSSDF", "0")) = 1)
    var UsarHorGeral = dados.parametros.UsarHorarioAtendGeral; //(val(GetParametroGMK("UsarHorarioAtendGeral", "0")) = 1)

    if (UsarHorGeral == true) {
    	//Horario maximo de atendimento
    	var parametro = dados.parametros.HorarioAtdGeral;

    	if (parametro == '') { //se o parametro nao tiver valor assume que esta fora de horario
			dados.bAplAtendimentoAberto = false;
		}
   
		var data = new Date(); 
		var diaSemana = data.getDay();
		var temp = parametro.split(";");
		var diaSemanaHabilitado = temp[0];
		//var tempHora = temp[1].split(",");
		var horaIni = parseInt(temp[1], 10);
		var horaFim = parseInt(temp[2], 10);
		var horaAtual = parseInt(formataDataAtual("hhmm"), 10);
		
		if (diaSemanaHabilitado.indexOf(diaSemana) == -1 && (horaAtual > horaIni && horaAtual < horaFim )) {
			dados.bAplAtendimentoAberto = true;
			return dados;
		} else {
			dados.bAplAtendimentoAberto = false;
			return dados;  	
		}		  	 
    }   

    if (UsarHorAtendFeriado == true) {
    	
    	var parametro = dados.parametros.HorarioAtendFeriado;
    	var bFeriado = ehFeriado(dados);

    	if (parametro == '') { //se o parametro nao tiver valor assume que esta fora de horario
			dados.bRetHorAted = false;
		}

    	if (bFeriado == true) {
    		dados.bAplFeriadoDomingo = true;

    		var data = new Date(); 
			var diaSemana = data.getDay();
			var temp = parametro.split(";");
			var diaSemanaHabilitado = temp[0];
			var tempHora = temp[1].split(",");
			var horaIni = parseInt(temp[1], 10);
			var horaFim = parseInt(temp[2], 10);
			var horaAtual = parseInt(formataDataAtual("hhmm"), 10);
			
			if (diaSemanaHabilitado.indexOf(diaSemana) == -1 || (horaAtual > horaIni || horaAtual < horaFim )) {
				dados.bRetHorAted = true;
			} else {
				dados.bRetHorAted = false;
			}				

			if(!(dados.bRetHorAted)) {
				dados.bAplCloseOpen = true;
				if(bAplAtendimentoAberto) {
					dados.bAplCloseOpenDeriv = true;
				} else {
					dados.bAplCloseOpenIDPos = true;
				}
			}
			return dados;
    	}		  	 
    } 

    if (UsarHorAtendSSDF == true) {

    	var sHorarioAtdSemana = dados.parametros.HorarioAtendSemana; //GetParametroGMK("HorarioAtendSemana", "0")
        var sHorarioAtdSabado = dados.parametros.HorarioAtendSabado; //GetParametroGMK("HorarioAtendSabado", "0")
        var sHorarioAtdDomingo = dados.parametros.HorarioAtendDomingo; //GetParametroGMK("HorarioAtendDomingo", "0")
     
        var diaDaSemana = parseInt(new Date().getDay()); //0=domingo, 1=segunda,2=terca,3=quarta,4=quinta,5=sexta e 6 =sabado

       	switch (diaDaSemana) {
			case 0:
				//Domingo
				dados.bAplFeriadoDomingo = true;
				var parametro = sHorarioAtdDomingo;

				var data = new Date(); 
				var diaSemana = data.getDay();
				var temp = parametro.split(";");
				var diaSemanaHabilitado = temp[0];
				var tempHora = temp[1].split(",");
				var horaIni = parseInt(tempHora[0], 10);
				var horaFim = parseInt(tempHora[1], 10);
				var horaAtual = parseInt(formataDataAtual("hhmm"), 10);
				
				if (diaSemanaHabilitado.indexOf(diaSemana) == -1 || (horaAtual > horaIni || horaAtual < horaFim )) {
					dados.bRetHorAted = true;
				} else {
					dados.bRetHorAted = false;
				}				
				break;

			case 6:
				//sabado
				var parametro = sHorarioAtdSabado;

				var data = new Date(); 
				var diaSemana = data.getDay();
				var temp = parametro.split(";");
				var diaSemanaHabilitado = temp[0];
				var tempHora = temp[1].split(",");
				var horaIni = parseInt(tempHora[0], 10);
				var horaFim = parseInt(tempHora[1], 10);
				var horaAtual = parseInt(formataDataAtual("hhmm"), 10);
				
				if (diaSemanaHabilitado.indexOf(diaSemana) == -1 || (horaAtual > horaIni || horaAtual < horaFim )) {
					dados.bRetHorAted = true;
				} else {
					dados.bRetHorAted = false;
				}					 
				break;
			default:
				var parametro = sHorarioAtdSemana;

				var data = new Date(); 
				var diaSemana = data.getDay();
				var temp = parametro.split(";");
				var diaSemanaHabilitado = temp[0];
				var tempHora = temp[1].split(",");
				var horaIni = parseInt(tempHora[0], 10);
				var horaFim = parseInt(tempHora[1], 10);
				var horaAtual = parseInt(formataDataAtual("hhmm"), 10);
				
				if (diaSemanaHabilitado.indexOf(diaSemana) == -1 || (horaAtual > horaIni || horaAtual < horaFim )) {
					dados.bRetHorAted = true;
				} else {
					dados.bRetHorAted = false;
				}					
		}
		return dados;
    }   
    return dados;
}

/*
 * formato feriados "0101;1702;1802"
 */
function ehFeriado(dados) {
	
	var feriados = dados.parametros.feriados;

	if (feriados.indexOf(formataDataAtual('ddMM')) != -1) {
		return true;
	}
	return false;
}

// Rodrigo da Silva - Fim



function getPromptMes(mes){
    var ret = {};   
    ret["frases"] = [];

    if(mes.length > 1){
        mes = mes.substring(1);
    }

	switch (mes) {
        case '1':
            ret["frases"].push({ "frase": "cDeJaneiro.wav" });
            break;  
        case '2':
            ret["frases"].push({ "frase": "cDeFevereiro.wav" });
            break;  
        case '3':
            ret["frases"].push({ "frase": "cDeMarco.wav" });
            break;
        case '4':
            ret["frases"].push({ "frase": "cDeAbril.wav" });
            break;
        case '5':
            ret["frases"].push({ "frase": "cDeMaio.wav" });
            break;  
        case '6':
            ret["frases"].push({ "frase": "cDeJunho.wav" });
            break;
        case '7':
            ret["frases"].push({ "frase": "cDeJulho.wav" });
            break;
        case '8':
            ret["frases"].push({ "frase": "cDeAgosto.wav" });
            break;  
        case '9':
            ret["frases"].push({ "frase": "cDesetembro.wav" });
            break;
        case '10':
            ret["frases"].push({ "frase": "cDeOutubro.wav" });
            break;
        case '11':
            ret["frases"].push({ "frase": "cDeNovembro.wav" });
            break;  
        case '12':
            ret["frases"].push({ "frase": "cDeDezembro.wav" });
            break;
        default:
            //valor default colocar um log
        	ret["frases"].push({ "frase": "" });
            break;
    }
    return ret;
}


function getPromptDiaDoMes(dia){
   
    var ret = {};   
    ret["frases"] = [];
	
	if(dia.length > 1){
		if(dia < 10){
			dia = dia.substring(1);
		}
    }
    

	switch (dia) {
        case '1':
            ret["frases"].push({ "frase": "dia_1.wav" });
            break;  
        case '2':
            ret["frases"].push({ "frase": "dia_2.wav" });
            break;  
        case '3':
            ret["frases"].push({ "frase": "dia_3.wav" });
            break;
        case '4':
            ret["frases"].push({ "frase": "dia_4.wav" });
            break;
        case '5':
            ret["frases"].push({ "frase": "dia_5.wav" });
            break;  
        case '6':
            ret["frases"].push({ "frase": "dia_6.wav" });
            break;
        case '7':
            ret["frases"].push({ "frase": "dia_7.wav" });
            break;
        case '8':
            ret["frases"].push({ "frase": "dia_8.wav" });
            break;  
        case '9':
            ret["frases"].push({ "frase": "dia_9.wav" });
            break;
        case '10':
            ret["frases"].push({ "frase": "dia_10.wav" });
            break;
        case '11':
            ret["frases"].push({ "frase": "dia_11.wav" });
            break;  
        case '12':
            ret["frases"].push({ "frase": "dia_12.wav" });
            break;
        case '13':
            ret["frases"].push({ "frase": "dia_13.wav" });
            break;  
        case '14':
            ret["frases"].push({ "frase": "dia_14.wav" });
            break;  
        case '15':
            ret["frases"].push({ "frase": "dia_15.wav" });
            break;
        case '16':
            ret["frases"].push({ "frase": "dia_16.wav" });
            break;
        case '17':
            ret["frases"].push({ "frase": "dia_17.wav" });
            break;  
        case '18':
            ret["frases"].push({ "frase": "dia_18.wav" });
            break;
        case '19':
            ret["frases"].push({ "frase": "dia_19.wav" });
            break;
        case '20':
            ret["frases"].push({ "frase": "dia_20.wav" });
            break;  
        case '21':
            ret["frases"].push({ "frase": "dia_21.wav" });
            break;
        case '22':
            ret["frases"].push({ "frase": "dia_22.wav" });
            break;
        case '23':
            ret["frases"].push({ "frase": "dia_23.wav" });
            break;  
        case '24':
            ret["frases"].push({ "frase": "dia_24.wav" });
            break;
        case '25':
            ret["frases"].push({ "frase": "dia_25.wav" });
            break;  
        case '26':
            ret["frases"].push({ "frase": "dia_26.wav" });
            break;  
        case '27':
            ret["frases"].push({ "frase": "dia_27.wav" });
            break;
        case '28':
            ret["frases"].push({ "frase": "dia_28.wav" });
            break;
        case '29':
            ret["frases"].push({ "frase": "dia_29.wav" });
            break;  
        case '30':
            ret["frases"].push({ "frase": "dia_30.wav" });
            break;
        case '31':
            ret["frases"].push({ "frase": "dia_31.wav" });
            break;
        default:
            //valor default colocar um log
        	ret["frases"].push({ "frase": "" });
            break;
    }
    return ret;
}