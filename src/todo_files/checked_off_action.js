export default function(item){
    //console.log('action');
    console.log(item);
    return {
        type: "CHECKED",
        payload: item.toString()
    }
}