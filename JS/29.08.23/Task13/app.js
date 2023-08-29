// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və 
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

// A: live legend 🐱‍💻 (return ile yazsaydin ela olardi amma )
const calc = (a,b,operator)=>{
switch (operator) {
    case `+`:
        console.log(a+b);
        break;
    case `-`:
        console.log(a-b);
        break;
    case `/`:
        console.log(a/b);
        break;
    case `*`:
        console.log(a*b);
        break;

    default:
        break;
}
}
calc(12,4,`+`)
