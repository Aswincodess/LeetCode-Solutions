function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {

        let digitA = 0;
        let digitB = 0;

        if (i >= 0) {
            digitA = Number(a[i]);
        }

        if (j >= 0) {
            digitB = Number(b[j]);
        }

        let sum = digitA + digitB + carry;

        let digit = sum % 2;
        carry = Math.floor(sum / 2);

        result = digit + result;

        i--;
        j--;
    }

    return result;
}