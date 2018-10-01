const createCookie = (todolist) => {
    let todolist_str = todolist.toString();
    document.cookie = "todo=" + todolist_str;
}
const getCookie = (name = "todo") => {
    let c_start = document.cookie.indexOf(name + "=");
    if (c_start > -1){
        c_start = c_start + name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1){
            c_end = document.cookie.length;
        }
        let cookie_string =  unescape(document.cookie.substring(c_start, c_end));
        cookie_string = cookie_string.split(',');
        return cookie_string;
    }
    return [];
}
const addCookie = (newCookie, name = "todo") => {
    let old_cookie = getCookie(name);
    old_cookie = old.cookie.toString();
    old_cookie += newCookie;
    old_cookie = old_cookie.split(',');
    return createCookie(old_cookie);
}
const removeCookie = (remove, name) => {
    return null;
}