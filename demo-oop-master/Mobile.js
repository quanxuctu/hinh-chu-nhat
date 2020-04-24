class Mobile {
    constructor(name) {
        this.name = name;
        this.mess = "";
        this.inbox = [];
        this.outbox = [];
    }

    writeMess(value){
        this.mess = value;
    }
    receiveMess(value){
        this.inbox.push(value);
    }
    sendMess (mobile){
        this.outbox.push(this.mess);
        mobile.receiveMess(this.mess);
    }
}


