const useCreateCode=(groom, bride)=>{

    let brideArray=[]
    let groomArray=[]
    for(let i=0;i<2;i++){
        groomArray.push(groom[i])
    }
    for(let i=0;i<2;i++){
        groomArray.push(bride[i])
    }
    
    let groomAndBride=groomArray.concat(brideArray)
    let val = Math.floor(1000 + Math.random() * 9000);
    let consortsPlusValue=[...groomAndBride, val];
    
    let code= consortsPlusValue.join('');
    console.log(code)
    
    
    

    return code
}

export default useCreateCode