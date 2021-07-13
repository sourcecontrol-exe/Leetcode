def func(s,k):
        if(k>len(set(list(s)))): return len(s)
        globemax = 0 
        globalslice = ""
        for i in range(len(s)):
                temp = i+k
                while(temp<=len(s)):
                        globalslice = list(s[i:temp])        
                        sub = set(globalslice)
                        if(len(sub) <= k):
                                if(globemax < len(globalslice)):
                                        globemax = len(globalslice)
                        else: break
                        temp+=1
                        
        return globemax

print(func("aaaaaaaaaaaaasdddddd", 102))