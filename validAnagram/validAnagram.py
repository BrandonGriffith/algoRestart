class ValidAnagram:
    def sorting(self, s, t):
        if len(s) != len(t):
            return False
        return sorted(s) == sorted(t)
    
    def oneHash(self, s, t):
        if len(s) != len(t):
            return False
        hash = {}
        for i in range(len(s)):
            if s[i] in hash:
                hash[s[i]] += 1
            else:
                hash[s[i]] = 1
        for i in range(len(t)):
            if t[i] in hash and hash[t[i]] > 0:
                hash[t[i]] -= 1
            else:
                return False
        return True

    def twoHash(self, s, t):
        if len(s) != len(t):
            return False
        hashS, hashT = {}, {}
        for i in range(len(s)):
            hashS[s[i]] = 1 + hashS.get(s[i], 0)
            hashT[t[i]] = 1 + hashT.get(t[i], 0)
        return hashS == hashT
    
    def oneArray(sefl, s, t):
        if len(s) != len(t):
            return False
        count = [0] * 26
        for i in range(len(s)):
            count[ord(s[i]) - ord('a')] += 1
            count[ord(t[i]) - ord('a')] -= 1
        for val in count:
            if val != 0:
                return False
        return True