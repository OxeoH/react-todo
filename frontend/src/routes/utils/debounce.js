export const debounce = (fn, ms) =>{
    let timeoutLink
    return function (){
        const fnCall = () => {fn.apply(this, arguments)}

        clearTimeout(timeoutLink)

        timeoutLink = setTimeout(fnCall, ms)
    }
}