var BasicHttpBinding = require('wcf.js').BasicHttpBinding
	, Proxy = require('wcf.js').Proxy
	, binding = new BasicHttpBinding()
	, proxy = new Proxy(binding, 'http://localhost:50051/Service1.svc')
	, message =  '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">' +
	                 '<Header />' +
	                   '<Body>' +
	                     '<GetData xmlns="http://tempuri.org/">' +
	                       '<value>123</value>' +
	                     '</GetData>' +
	                    '</Body>' +
	              '</Envelope>';

proxy.send(message, 'http://tempuri.org/IService1/GetData', function (response, ctx) {
	console.log(response);
});
