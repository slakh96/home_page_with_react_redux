
let d = new Date();
export default function (state = d, action){
    //console.log(action.type);
    state = new Date();
    let min = state.getMinutes();
    let hour = state.getHours();
    let secs = state.getSeconds();
    let day = state.getDay(); // Monday - Sunday
    let month = state.getMonth();
    let year = state.getFullYear();
    let date = state.getDate(); //1st, second etc.
    if (min < 10){
        min = "0" + min;
    };
    if (secs < 10){
        secs = "0" + secs;
    };
    switch(day){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = undefined;
            break;
    };
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months[month];
    return {
        min: min,
        hour: hour,
        secs: secs,
        day: day,
        month: month,
        date: date,
        year: year
    };
}