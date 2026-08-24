function nextGreaterElement(nums1: number[], nums2: number[]): number[] {

    let result: number[] = [];

    for (let i = 0; i < nums1.length; i++) {

        let answer = -1;

        for (let j = 0; j < nums2.length; j++) {

            if (nums1[i] === nums2[j]) {

                for (let k = j + 1; k < nums2.length; k++) {

                    if (nums2[k] > nums1[i]) {
                        answer = nums2[k];
                        break;
                    }

                }

                break;
            }
        }

        result.push(answer);
    }

    return result;
}