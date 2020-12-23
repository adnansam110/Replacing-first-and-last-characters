var str = prompt("Enter a string");
if (str.length>=1)
{
    var last_char = str.substring(str.length-1,str.length);
    var first_char = str.substring(0,1);
    var rem_char = str.substring(1,str.length-1);
    var new_str=last_char + rem_char + first_char
    document.write(new_str);
}