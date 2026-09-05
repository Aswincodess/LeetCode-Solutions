function commonChars(words: string[]): string[] {
    let result: string[] = [];

    for (let char of words[0]) {
        let found = true;

        for (let i = 1; i < words.length; i++) {
            if (!words[i].includes(char)) {
                found = false;
                break;
            }
        }

        if (found) {
            result.push(char);

            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].replace(char, "");
            }
        }
    }

    return result;
}