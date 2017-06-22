/**
 * Mocking client-server processing
 */
var qs = require('qs')
var axios = require('axios')

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function ajax({
	url,
	params = {},
	cb,
	method = 'get',
	headers = {
		'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
		'X-Requested-with':'XMLHttpRequest'
	},
	beforeSend = function() {}
}) {
	var basicConfig = {
		method,
		url,
		headers,
		beforeSend
	}
	var config = Object.assign({}, basicConfig, (method === 'post' ? {
		data: qs.stringify(params)
	} : {
		params
	}))
	axios(config)
		.then(function(response) {
			cb(response.data)
		})
		.catch(function(error) {

			if (error.response) {
		      	// var sessionStatus = error.response.headers.logout;
	          //   if (error.response.status == "401" && sessionStatus == 'True') {
	          //       util.clearCookie();
	          //       window.location.href = "/";
	          //   }
		    } else {
		      // Something happened in setting up the request that triggered an Error
		      console.log('Error', error.message);
		    }
		})
}
axios.interceptors.request.use(function(config) {
	config.beforeSend()
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});

export default {
	ajax,
  testWeather({
    params,
		cb,
		beforeSend
	}) {
		ajax({
			url: '/query',
      		params,
			cb,
			beforeSend
		})
	},
	// purchaseInstance({
	// 	params,
	// 	cb,
	// 	beforeSend
	// }) {
	// 	ajax({
	// 		url: '/project/instances/launch_create',
	// 		params: params,
	// 		cb: cb,
	// 		method: "post",
	// 		beforeSend
	// 	})
	// },
}
