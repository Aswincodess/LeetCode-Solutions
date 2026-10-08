function maximumLengthSubstring(s: string): number {
    let left = 0;
    let maxLength = 0;

    const freq: { [key: string]: number } = {};

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        freq[ch] = (freq[ch] || 0) + 1;

        while (freq[ch] > 2) {
            freq[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}