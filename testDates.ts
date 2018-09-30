import * as moment from 'moment-timezone'

class DatesScheduler {
    public nowScheduler:string; 
    public hourNowScheduler:number;
    public EODScheduler;
    
    constructor() {
        this.nowScheduler = moment().tz("Europe/Warsaw").format(this.formatDate);
        this.hourNowScheduler = Number(moment(this.nowScheduler, this.formatDate).format('HH'));
        this.EODScheduler = (this.hourNowScheduler < 4) ?
            moment(this.nowScheduler, this.formatDate).format('MM-DD-YYYYT04:00:00') :
            moment(this.nowScheduler, this.formatDate).add(1, 'days').format('MM-DD-YYYYT04:00:00') 
    }
    private formatDate:string = 'MM-DD-YYYYTHH:mm:ss'
}

export default DatesScheduler;