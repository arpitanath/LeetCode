class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        i, j = 0,0
        Ns, Np = len(s), len(p)
        memo = {}
        def matchHelper(s, p, i, j):
            if i==Ns and j==Np:
                return True
            if i==Ns:
                for x in p[j:]:
                    if x!="*":  return False
                return True
            if j==Np and i!=Ns:
                return False
            
            if (i,j) in memo:
                return memo[(i,j)]
            ans = False
            if p[j]=="*":
                ans = ans or matchHelper(s,p,i+1,j+1) or matchHelper(s,p,i,j+1) or matchHelper(s,p,i+1,j)
            elif p[j]=="?":
                ans = ans or matchHelper(s,p,i+1,j+1)
            else:
                ans = ans or (s[i]==p[j] and matchHelper(s, p, i+1, j+1))
            
            memo[(i,j)] = ans
            return ans
        return matchHelper(s, p, 0, 0)
                        
            
        