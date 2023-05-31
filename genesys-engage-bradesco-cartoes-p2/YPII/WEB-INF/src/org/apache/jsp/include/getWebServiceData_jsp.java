/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: JspCServletContext/1.0
 * Generated at: 2023-05-23 18:14:22 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.include;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import javax.naming.InitialContext;
import java.net.*;
import java.io.BufferedInputStream;
import java.io.*;
import java.util.*;
import java.net.HttpURLConnection;
import org.json.JSONObject;
import com.genesyslab.studio.backendlogic.WebServiceBackendProcessor;
import com.genesyslab.studio.backendlogic.BackendLogManager;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSession;
import org.apache.logging.log4j.Logger;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public final class getWebServiceData_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {


Logger logger = BackendLogManager.getLogger("getWebService");
boolean throwServerException = false;  // Flag to display Error Messages
private String buildErrorResponse(String message) {
	

	logger.info("buildErrorResponse() in");
    StringBuffer sb = new StringBuffer();
    sb.append("'errorMsg'");
    sb.append(":");
    sb.append("'").append(message).append("',");
    sb.append("'throwServerException'");
    sb.append(":");
    sb.append(throwServerException);

	logger.error("buildErrorResponse:" + "{" + sb.toString() + "}");
	logger.info("buildErrorResponse() out");
    return "{" + sb.toString() + "}";

};

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("application/json;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n");
      out.write('\r');
      out.write('\n');

    // This backend logic will process WebServices requests and responses for URS
    logger.info("getWebServiceData:Start");
    HttpURLConnection con = null;
    String readTimeout = "20000"; // timeout in milliseconds
    String conTimeout = "20000"; // timeout in milliseconds
    Boolean legacyFlow = false;
    
    final WebServiceBackendProcessor processor = new WebServiceBackendProcessor(
            request);
    processor.parseRequest();
    FileInputStream ipStr = null;
    FileOutputStream opStr = null;
    try {
        Properties properties = new Properties();
        ipStr = new FileInputStream(request
                .getRealPath("/WEB-INF/composer.properties"));
        properties.load(ipStr);
        if (properties.getProperty("web.connectionTimeout") != null) {
            conTimeout = properties
                    .getProperty("web.connectionTimeout");
        }
        if (properties.getProperty("web.readTimeout") != null) {
            readTimeout = properties.getProperty("web.readTimeout");
        }
	
	if (properties.getProperty("web.throwServerException") != null) {
		throwServerException = Boolean.parseBoolean(properties.getProperty("web.throwServerException"));
        }
	
     	// During project upgrade remove the property 'web.legacyCertificateCode' if this key is present.
     	if (properties.getProperty("web.legacyCertificateCode") != null) {

     		properties.remove("web.legacyCertificateCode");
     		opStr = new FileOutputStream(request.getRealPath("/WEB-INF/composer.properties"));
     		properties.store(opStr, "Removed the flag 'web.legacyCertificateCode'");
     	}
     	
     	if (properties.getProperty("web.legacyFlow") != null) {
				legacyFlow = Boolean.parseBoolean(properties.getProperty("web.legacyFlow"));
		}
				
        logger.debug("conTimeout: " + conTimeout + ", readTimeout: " + readTimeout + ", throwServerException: " + throwServerException + ", legacyFlow: " + legacyFlow);
    } catch (Exception e) {
    	 logger.error("Could not find properties file. Hence using default connectionTimeout and readTimeout values");
    } finally {
			if (ipStr != null) {
				try {
					ipStr.close();
				} catch (IOException e) {
					logger.error("Error in closing properties input file stream");
				}
			} if(opStr != null) {
				try {
					opStr.close();
				} catch (IOException e) {
					logger.error("Error in closing properties output file stream",e);
				}
			}
		}

    String value = null;

    URL url = processor.formURI();
       
    
    if (url != null) {
        try {
           final String connectTimeout = conTimeout;
           final String connectReadTimeout = readTimeout;
        	if(legacyFlow) {
				// Fallback mechanism to invoke the service in the older fashion.
				logger.info("Legacy Flow - 'web.LegacyFlow' has been enabled");
				processor.formHTTPMessage(connectTimeout, connectReadTimeout);
           		processor.connectToURL();
            	value = processor.readWebServiceresponse();
				logger.info("Legacy Flow - Exit!!");
				
				
			} else {			  
				/**
				 * Raise the request/response in a separate thread.
				 */
				logger.info("Async Flow Execution!");
				ExecutorService executorService = Executors.newFixedThreadPool(3);

				Future<Object> future = executorService.submit(new Callable<Object>() {
				    public Object call() throws Exception {
				    	logger.info("Async Flow Start!");
				    	processor.formHTTPMessage(connectTimeout, connectReadTimeout);
           				processor.connectToURL();
            			String retValue = processor.readWebServiceresponse();
            			logger.info("Async Flow End - "+retValue);
            			return retValue;
				    }
				});
				logger.info("Main thread!");		
				value = (String) future.get();
				logger.info("Value - "+ value);
				executorService.shutdown();
					
			}
           
            if (value == null) {
                // URS will generate error.session.fetch when receiving response of 500
                out.print(buildErrorResponse("error.com.genesyslab.composer.webservice.badFetch - Input Stream cannot be read"));
              // Removed the logger over here as it is already been taken care in method 'buildErrorResponse(..)' above
                return;
            } else {
                value = processor.processSOAPMessage(value);
                String postData = value;
                JSONObject result = org.json.XML.toJSONObject(postData);
                value = result.toString();
                logger.debug("result:" + result.toString());
                logger.debug("value:" + value.toString());
                if (processor.isSOAPFault()) {
                    out.print(buildErrorResponse(value));
                    return;
                }
            }
        } catch (Exception e) {
            // Removed the logger over here as it is already been taken care in method 'buildErrorResponse(..)' below
            out.print(buildErrorResponse("An error has occured - "+e.getMessage()));

            return;
        }

    } else {
        out.print(buildErrorResponse("error.com.genesyslab.composer.webservice.badFetch - Requested URL cannot be fetched"));
        // Removed the logger over here as it is already been taken care in method 'buildErrorResponse(..)' above
        return;

    }

    processor.disconnectConnection();
    if (null != value) {
        // value should not be null here 
        out.print(value);
        logger.debug("value:" + value.toString());
    }
    logger.info("getWebServiceData:End");

    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
