#!/usr/bin/env node

/* eslint-disable */
var program = require('commander')
var create = require('./create')

program
  .version('0.1.0')
  .command('component <name>')
  .action(function (name,) {
     create(name)
  })

program.parse(process.argv)
