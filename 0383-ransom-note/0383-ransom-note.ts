function canConstruct(ransomNote: string, magazine: string): boolean {

    let magazineArr: string[] = magazine.split("");

    for (let i = 0; i < ransomNote.length; i++) {

        let found: boolean = false;

        for (let j = 0; j < magazineArr.length; j++) {

            if (ransomNote[i] === magazineArr[j]) {

                
                magazineArr[j] = "";
                found = true;
                break;
            }
        }

        if (found === false) {
            return false;
        }
    }

    return true;
}