class Solution:
    """
    @param s: A string
    @param k: An integer
    @return: An integer
    """
    def lengthOfLongestSubstringKDistinct(s, k):
        end = begin = 0

    # set to store distinct characters in a window
    window = set()

    # `freq` stores the frequency of characters present in the
    # current window. We can also use a dictionary instead.

    freq = [0] * CHAR_RANGE

    # `[low…high]` maintains the sliding window boundaries
    low = high = 0

    while high < len(str):

        window.add(str[high])
        freq[ord(str[high])] = freq[ord(str[high])] + 1

        # if the window size is more than `k`, remove characters from the left
        while len(window) > k:

            # If the leftmost character's frequency becomes 0 after
            # removing it in the window, remove it from the set as well
            freq[ord(str[low])] = freq[ord(str[low])] - 1
            if freq[ord(str[low])] == 0:
                window.remove(str[low])

            low = low + 1        # reduce window size

        # update the maximum window size if necessary
        if end - begin < high - low:
            end = high
            begin = low

        high = high + 1

    # return the longest substring found at `str[begin…end]`
    return str[begin:end + 1]


ans = Solution.lengthOfLongestSubstringKDistinct("ecdfbbbbca", 3)
print(ans)
