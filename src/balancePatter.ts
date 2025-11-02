//**
// EX - string - {(a+b)*[2+(ab)+c]} 
// */


//** Algoritham
// create main mathod
// for loop i=0 to string of lenth-1
// call cheak symble 
// symble return true then call stack nethod
// 
// create check symble method
// create swith case for check symble { } [ ] ( ) its match then 
// return true othe return flas
//
// create stack method
// create stack method and store height and top
// check top its null then call push method 
// update top and update heighit
// check top == given symbel close then pop
// check top == given new open symbel then push
// cjeck top == given symbel class and not match then retun and show message not balence 
// return true*/
import { Stack } from "./Stack";
export class balancePattern<T> {
    private stack: Stack<T> = new Stack<T>();
    public data: string | null = null

    constructor(value: string) {
        this.data = value;
    }


    balancePatterCheck(value: string) {
        let valueLength = value.length;
        if (valueLength === 0) return true;
        for (let i = 0; i < valueLength; i++) {
            let symbelStatus = this.symbaleCheack(value[i])
            let topStatus = this.symbaleCheack(this.stack.top?.value || '')
            if (symbelStatus.status && symbelStatus.message === 'open') {
                this.stack.pushStack(value[i])
            }
            if (symbelStatus.status && symbelStatus.message === 'close') {
                if (topStatus.type === symbelStatus.type) {
                    this.stack.pop()
                }else{
                    console.log("Not Balanced at symbel ", value[i]);
                    return false;
                }

            }
        }  
        return this.stack.isEmpty();
    }

    symbaleCheack(symbelitem: string) {
        switch (symbelitem) {
            case '[':
                return { status: true, type: 'square', message: 'open' };
            case ']':
                return { status: true, type: 'square', message: 'close' };
            case '{':
                return { status: true, type: 'curly',  message: 'open' };
            case "}":
                return { status: true, type: 'curly', message: 'close' };
            case "(":
                return { status: true, type: 'round', message: 'open' };
            case ")":
                return { status: true, type: 'round', message: 'close' };
            default:
                return { status: false, message: 'not Symbel' };
        }
    }

}