# A search for ip address from a range of ip's

// The ip-from-range provides for you a array of all ip addresses of a range

Basics usage

    var ipfr = require('ip-from-range');
    var arrIp = ipfr("192.168.0.1","192.168.0.100).getIpAddresses();
    console.log(arrIp);
    /**
    * // Output should be
    * 
    * [
    *   '192.168.0.1, 
    *   '192.168.0.2',
    *   '192.168.0.3',
    *   ...
    *   '192.168.0.99',
    *   '192.168.0.100'
    * ]
    */