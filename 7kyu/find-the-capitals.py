# Instructions
# Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

# Example
# Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

# my solution
def capitals(word):
    r = []
    for i in range(len(word)):
        if word[i].isupper():
            r.append(i)
    return r

# best practice
def capitals(word):
    return [i for i in range(len(word)) if word[i].isupper()]