class Queue {
    constructor(){
        this.a = []
    }

    front(){
        if(this.a.length===0){
            console.log("Queue is empty")
            return
        }else return this.a[0]
    }

    enq(value){
        this.a.push(value)
    }

    deq(){
        if(this.a.lenth===0){
            console.log("Queue is empty")
            return
        }
        this.a.shift()
    }

    auto(){
        for(let i = 0; i<5; i++){
            console.log(q.front())      //a에 있는 데이터 중 첫번째를 보여줌
            q.deq()     //a에 있는 첫번째 데이터를 삭제
        }
    }
}

const q = new Queue()
q.enq(111)
q.enq(222)
q.enq(333)
q.enq(444)
q.enq(555)
