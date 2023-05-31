<%@page language="java" contentType="application/json;charset=UTF-8" pageEncoding="UTF-8"%>
<%!
// Implement this method to execute some server-side logic.
public JSONObject performLogic(JSONObject state, Map<String, String> additionalParams) throws Exception {
     
    JSONObject result = new JSONObject();
    
    String senha = additionalParams.get("senha");
   
    CriptoClient client = new CriptoClient();
	CriptoModel model = client.cripto(senha);
	
	Gson gson = new Gson();
		
    String retorno = gson.toJson(model);
     
    result.put ("retorno",retorno);           
    return result;
    
};
%>
<%-- GENERATED: DO NOT REMOVE --%> 
<%@page import="org.json.JSONObject"%>
<%@page import="com.google.gson.*"%> 
<%@page import="br.com.bradesco.comum.dll.client.*"%> 
<%@page import="br.com.bradesco.yess.comum.model.*"%> 
<%@page import="org.json.JSONException"%>
<%@page import="java.util.Map"%>
<%@include file="../include/backend.jspf" %>