class Counter{
    static #instance = null;
    #count = 0;
    // constructor() {
    //     if(typeof Counter.instance === 'object'){
    //         return Counter.instance;
    //     }
    //     this.count = 0;
    //     Counter.instance = this;
    //     return this;
    // }
    constructor() {
        if(Counter.#instance === null){
            Counter.#instance = this;
            return this;
        }
        return Counter.#instance
    }


    getCounter() {
        return this.#count
    }

    increaseCounter(){
        return this.#count++;
    }
}


const counter1 = new Counter();
const counter2 = new Counter();
counter1.increaseCounter();
counter1.increaseCounter();
counter2.increaseCounter();
counter2.increaseCounter();
counter1.increaseCounter();
console.log(counter2.getCounter());
console.log(counter2.getCounter());
console.log(counter2 === counter1);
counter3 = new Counter();
console.log(counter2.getCounter())
counter3.increaseCounter()
console.log(counter3.getCounter());
console.log(counter2 === counter3);
console.log(counter2.instance)
console.log(counter3.instance)