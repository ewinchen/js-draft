const axios = require('axios');

const AUTH_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkhCeGw5bUFlNmd4YXZDa2NvT1UyVEhzRE5hMCIsImtpZCI6IkhCeGw5bUFlNmd4YXZDa2NvT1UyVEhzRE5hMCJ9.eyJhdWQiOiIzMzRlNTE5ZS1hYzkyLTRjNGItYmFhZi1mYjAxNjU2YzEwZGMiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yOWFiZjE2ZS05NWEyLTRkMTMtOGQ1MS02ZGIxYjc3NWQ0NWIvIiwiaWF0IjoxNTU4MDYyNTczLCJuYmYiOjE1NTgwNjI1NzMsImV4cCI6MTU1ODA2NjQ3MywiYWlvIjoiNDJaZ1lGRFN5ZkpmdTM1THpCV2VjNGF6UDBZN3ZDb1Z1dUNmMnhCOCswbGdya2JLcmE4QSIsImFtciI6WyJ3aWEiXSwiZmFtaWx5X25hbWUiOiJDaGVuIiwiZ2l2ZW5fbmFtZSI6IllvbmcgUGVpIiwiaXBhZGRyIjoiMTE2LjYuNTIuMTE3IiwibmFtZSI6IkNoZW4sIFlvbmcgUGVpIC9HRVQvS25pdHRpbmcvUEUiLCJub25jZSI6Ijk3YzM5M2VhLWIwNDAtNGFmYy05NWQ0LWY4NWIzNTYxNWMxZSIsIm9pZCI6IjlhZThjMGRlLWZmODktNDFhOC1iNzlhLWU2NTBhNTIzZmYxYyIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xMzg4MTExOTAtNzQ5ODE3NzMzLTcyNDE4MjgwMy05ODc2NiIsInN1YiI6IlN4X2Z3Nk56NGVsWFA0MlZkQzNtWTB3WENmZHFXQktELTdTa2NxZXBtZzAiLCJ0aWQiOiIyOWFiZjE2ZS05NWEyLTRkMTMtOGQ1MS02ZGIxYjc3NWQ0NWIiLCJ1bmlxdWVfbmFtZSI6IkNoZW5Zb25nUEBlc3F1ZWwuY29tIiwidXBuIjoiQ2hlbllvbmdQQGVzcXVlbC5jb20iLCJ1dGkiOiJSQWhDUHVscWZVYTBtdjhVd0Y4NUFBIiwidmVyIjoiMS4wIn0.ndlASP4iD6Lje44PCIsydz47mQTvSUSSEHvVQJJnNY91FmyExqAXiktmnvHmDMdoj669Cxst3_xSs91lbcJGOSoh-IDlJZp4clLLUKVNxJVgyQp8rNajqOkUGJVxOZC-ztsM839Xr8FPoYD9YSlf1i78XNRlWbJRipJXLC_ah0UBYMbAcihYIunpHKd8ncsO2cBfn5KZDSaApLzalIN-iBmt8nj7SnpeEZVjWI15XE7RZnwjbBHTC9-mey1svIzWDiOBwSXrLuOBWLF0WZCVGfjCj8OOAb_q0K8C0EmNCatz_l6ZmCh8DNwoEPYmTKwbyMwl00-81o5BaVs9BMUVmw';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['X-API-Key'] = '653832c4-5c82-4c99-82d3-18cf66465721';

setInterval(async () => {
  let time = new Date();

  try {
    console.log(`Request time ${time} begin`);
    const res = await axios.get('http://fsr-api.k8s.prod.esquel.cloud/show/fsr/5cdd0f9357f5f7001a2068d3?_time=1558059999802')
    console.log(`Request time ${time} succeeded`, res.status);
  } catch (error) {
    console.log(`Request time ${time} failed`);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(`Request time ${time} failed`, error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(`Request time ${time} failed, Bad network`);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(`Request time ${time} failed`, error.message);
    }
  }
}, 1000 * 5);