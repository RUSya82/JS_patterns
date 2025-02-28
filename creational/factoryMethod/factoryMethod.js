class BMW {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.MaxSpeed = maxSpeed;
    }
}

class BMWFactory{
    create(type){
        if(type === 'X5'){
            return new BMW(type, 111000, 300)
        }
        if(type === 'X6'){
            return new BMW(type, 222000, 400)
        }
    }
}
