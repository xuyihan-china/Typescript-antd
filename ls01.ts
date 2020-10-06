function identity(arg: any): any {
    return arg;
}

//:any 返回值是any
//arg:any 参数的值为any
//     函数名 传入泛型类 参数类型   返回类型
function cat2     <T>    (arg:T) :    T{
    return arg
}
//现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity2: GenericIdentityFn = identity2;

interface tooth {
    <T>(arg:T):T;
}

function cat<T>(arg1:T):T{
    return arg1
}

let anne : tooth = cat


interface GenericIdentityFn2<T> {
    (arg: T): T;
}

function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn2<number> = identity;