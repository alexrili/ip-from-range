'use strict';
(function(){
    
    // 'new' an object
    const IpFromRange = function (ipStarts, ipEnds) {
        return new IpFromRange.init(ipStarts,ipEnds);
    };

    // ifr holds methods to save memory space
    // ifr is a refers to the prototype object
    // then we can use 'this' as a refers to the calling object at execution time
    const ifr = IpFromRange.prototype = {};

    // retrieve a array of all ip found
    ifr.getIpAddresses = function () {

        // check if any of this two parameters are not exist
        // if not, we should be stop the process here
        if(!this.ipStarts || !this.ipEnds){
            throw "Error: you  must give two parameters (ip_starts and ip_ends";
        }


        // _ipStarts recive a converted number to hexadecimal
        let _ipStarts = _convertIpAddressToHexadecimal(this.ipStarts);
        // _ipEnds recive a converted number to hexadecimal
        let _ipEnds = _convertIpAddressToHexadecimal(this.ipEnds);

        // return's the array of ips
        // if is empty return a empty array []
        return _getRange(_ipStarts,_ipEnds);

    };

    // convert a IP ex. '10.10.0.1' to a hexadecimal number 0x0a0100
    const _convertIpAddressToHexadecimal = function (_ip) {
        let _ipArr = _ip.split('.');
        var hexNumber = (_ipArr[3]*1) + (_ipArr[2] * 256) + (_ipArr[1]*65536) + (_ipArr[0]*16777216);
        hexNumber = "0x"+hexNumber.toString(16);
        return hexNumber;
    };

    // recive two hexadecimal parameters
    // and returns a array of all arrays in the range
    const _getRange = function (_ipStarts,_ipEnds) {
        let newRange = [];
        for(var i = _ipStarts; i <= _ipEnds; i++)
        {
            var oc4 = (i>>24) & 0xff;
            var oc3 = (i>>16) & 0xff;
            var oc2 = (i>>8) & 0xff;
            var oc1 = i & 0xff;
            newRange.push(oc4 + "." + oc3 + "." + oc2 + "." + oc1);
        }
        return newRange;
    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    IpFromRange.init = function (ipStarts, ipEnds) {
        let self = this;
        self.ipStarts   = ipStarts  || null;
        self.ipEnds     = ipEnds    || null;

        return self;
    };
    
    // trick borrowed code, so we don't have to use the 'new' keyword
    IpFromRange.init.prototype = ifr;
    
    // exports a IpFromRange function
    return module.exports = IpFromRange;

})();