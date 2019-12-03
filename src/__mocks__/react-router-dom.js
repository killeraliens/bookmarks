import React from 'react'
//import { BrowserRouter } from 'react-router-dom';
const rrd = require('react-router-dom')

rrd.BrowserRouter = ({children}) => <div>{children}</div>

//export default rrd
module.exports = rrd;
