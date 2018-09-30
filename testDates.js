"use strict";
exports.__esModule = true;
var moment = require("moment-timezone");
var DatesScheduler = /** @class */ (function () {
    function DatesScheduler() {
        this.formatDate = 'MM-DD-YYYYTHH:mm:ss';
        this.nowScheduler = moment().tz("Europe/Warsaw").format(this.formatDate);
        this.hourNowScheduler = Number(moment(this.nowScheduler, this.formatDate).format('HH'));
        this.EODScheduler = (this.hourNowScheduler < 4) ?
            moment(this.nowScheduler, this.formatDate).format('MM-DD-YYYYT04:00:00') :
            moment(this.nowScheduler, this.formatDate).add(1, 'days').format('MM-DD-YYYYT04:00:00');
    }
    return DatesScheduler;
}());
exports["default"] = DatesScheduler;
