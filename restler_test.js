#!/usr/bin/env node

var sys = require('util');
var rest = require('restler');

rest.get('http://afternoon-bayou-9795.herokuapp.com').on('complete', function(result) {
  if (result instanceof Error) {
    sys.puts('Error: ' + result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    sys.puts(result);
  }
});
