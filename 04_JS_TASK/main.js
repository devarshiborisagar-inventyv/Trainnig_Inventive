const f1=()=>{

    array1=[1,2,3];

    let value=array1.

    f2(5,array1);

    console.log(array1);
}

const f2=(first_element , ...array1)=>{
    array1[0].push(first_element);
    console.log(array1);
}

f1();