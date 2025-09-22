function solution(n)
{
    const stringN = n.toString()
    const splited = stringN.split('');
    const sum = splited.reduce((acc,cur) => acc +Number(cur),0);

    return sum;
}

