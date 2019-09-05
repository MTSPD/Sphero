var express = require('express');

var sphero = require("sphero"),
    orb = sphero("/dev/tty.Sphero-GRP-AMP-SPP"); // change port accordingly
    
orb.connect();

const action = (opt) => {
    orb.roll(50, opt);        
}

module.exports = action;

