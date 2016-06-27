'use strict';

module.exports = function(app){
    app.route('/').get(function(req,res){
        res.redirect('/api/whoami');
    });
    
    app.route('/api').get(function(req,res){
        res.redirect('/api/whoami');
    });
    
    app.route('/api/whoami').get(function(req,res){
        var acceptLanguage = req.headers["accept-language"];
        var language = acceptLanguage!==null? acceptLanguage.substr(0,acceptLanguage.indexOf(',')):"";
        var ipAdddress = req.headers["x-forwarded-for"];
        var userAgent = req.headers["user-agent"];
        var operatingSystem = userAgent!==null? userAgent.substr(userAgent.indexOf('(') + 1 , (userAgent.indexOf(')')-1) - userAgent.indexOf('(')):"";
        
        var result = {
            "ipaddress":ipAdddress,
            "language":language,
            "software":operatingSystem
        };
        
        res.json(result);
        
    });
};