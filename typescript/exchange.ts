var exchange: Exchange;

class Exchange {
    public exchangeId: string;
    public serverSpdOfferings: any;
    public serverSpdResponses: any;

    constructor(options: any) {
        if(options == null) {
            this.exchangeId = "";
        }
        else {
            this.exchangeId = options.exchangeId ?? options.ExchangeId;
        }
    }
}