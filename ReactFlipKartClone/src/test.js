let arr=["man","madam","test","malayalam"];  
for(let i=0;i<arr.length;i++)
    {
        let str=arr[i]
        let str2=arr[i].split('').reverse().join('');
        if(str===str2)
        {
            console.log("palindrome string"); 
            console.log(str2);
        }
    }