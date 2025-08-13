class Solution {
    sorting(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        return s.split('').sort().join('') === t.split('').sort().join('');
    }

    oneHash(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const hash: Record<string, number> = {};
        for (let i = 0; i < s.length; i++) {
            hash[s[i]] = (hash[s[i]] || 0) + 1;
        }
        for (let i = 0; i < t.length; i++) {
            if (hash[t[i]] && hash[t[i]] > 0) {
                hash[t[i]] -= 1;
            } else {
                return false;
            }
        }
        return true;
    }

    twoHash(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const hashS: Record<string, number> = {}, hashT: Record<string, number> = {};
        for (let i = 0; i < s.length; i++) {
            hashS[s[i]] = (hashS[s[i]] || 0) + 1;
            hashT[t[i]] = (hashT[t[i]] || 0) + 1;
        }
        for (const key in hashS) {
            if (hashS[key] !== hashT[key]) {
                return false;
            }
        }
        return true;
    }

    oneArray(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const count: number[] = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
        }
        for (const val of count) {
            if (val !== 0) {
                return false;
            }
        }
        return true;
    }
}
export default new Solution();
