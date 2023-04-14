// let a=[3,4,3,5,6,3,4,8,5,23,2,4];
// let count=1;
// for(let i=0;i<a.length-1;i++)
// {
//     count=1;
//     for(let j=i+1;j<a.length;j++)
//     {
//         if(a[i]===a[j])
//         {
//             count++;
//             a[j]=0;
//         }
//     }
//     if(a[i]!=0)
//     console.log(a[i]+"Counted:"+count+" times");
// }

// var x=1;
// function foo(){
//     var x=3
// }
// foo();
// console.log(x);
// function bar(){
//     x=4;
// }
// bar();
// console.log(x);

// var counter=(function(){
//     var my=0;
//     function change(val)
//     {
//         my+=val;
//     }
//     return{
//         inc:function(){
//             change(1)
//         },
//         dec:function(){
//             change(-1)
//         },
//         val:function(){
//             return my;
//         }
//     }
// })();
// console.log(counter.val());
// counter.inc()
// counter.inc()
// console.log(counter.val());
// counter.dec()
// console.log(counter.val());
// counter.change(2)
// console.log(counter.val());

var x=2;
var y=4;
if((y>x || y++===4)&& ++y===5)
{
    x=1;
}
else 
x=4;
console.log(x);
console.log(y);

function foo(a,b,c){
    a++;
    b="new"
    c["key"]="new val";

}
var a=1;
b="old"
c={"key":"old val"}
foo(a,b,c);
console.log(a);
    console.log(b);
    console.log(c);
// var a=["app","bana","coc"]
// var b=a;
// var c=a.slice();
// a.push("date");
// console.log(a);
// console.log(b);
// console.log(c);