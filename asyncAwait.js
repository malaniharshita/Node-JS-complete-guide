const print = async function(){
    try{
        function fun1(){
            return new Promise((resolve,reject) => {
                resolve('a');
            })
        }
        function fun2(){
            return new Promise((resolve,reject) => {
                resolve('b');
            })
        }
        function fun3(){
            return new Promise((resolve,reject) => {
                setTimeout(()=>{
                    resolve('c');
                    reject('error')
                },3000)
            })
        }
        function fun4(){
            return new Promise((resolve,reject) => {
                setTimeout(()=>{
                    resolve('d');
                    reject('error')
                },0)
            })
        }
        function fun5(){
            return new Promise((resolve,reject) => {
                resolve('e');
            })
        }
        const step1 = await fun1();
        console.log(step1);
        const step2 = await fun2();
        console.log(step2);
        const step3 = await fun3();
        console.log(step3);
        const step4 = await fun4();
        console.log(step4);
        const step5 = await fun5();
        console.log(step5);
    }
    catch(e){
        console.log(e);
    }
}
print();
