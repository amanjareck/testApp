var CronJob = require('cron').CronJob;
var Client = require('ftp');
var nodemailer = require("nodemailer");
var sf = require('node-salesforce');


var ftp_connect = new Client();

var connectionProperties = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD
};

new CronJob('*/10 * * * * *', function() {
    //Connect to FTP
    ftp_connect.connect(connectionProperties);
    ftp_connect.on('error', function(){
        console.log('Could not connect to FTP!');
    });
    ftp_connect.on('ready', function () {
        console.log('Connecting...');
        /*c.list(function (err, list) {
            if (err) throw err;
            list.forEach(function (element, index, array) {
                //Ignore directories
                if (element.type === 'd') {
                    console.log('ignoring directory ' + element.name);
                    return;
                }
                //Ignore non zips
                if (path.extname(element.name) !== '.zip') {
                    console.log('ignoring file ' + element.name);
                    return;
                }
                //Download files
                c.get(element.name, function (err, stream) {
                    if (err) throw err;
                    stream.once('close', function () {
                        c.end();
                    });
                    stream.pipe(fs.createWriteStream(element.name));
                });
            });
        });*/
    });
},null,true);