    export const fetchinitialdeals= async()=>{
    try{
    let response=await fetch('https://bakesaleforgood.com/api/deals');
    let responseJson= await response.json();
    return responseJson;
    }
    catch(e){
        console.error(e);
    };
}


