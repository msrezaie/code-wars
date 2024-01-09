# The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

# What if the string is empty? Then the result should be empty object literal, {}.

# my solution
def count(s):
    object = {}
    for char in s:
        object[char] = s.count(char)
    return object


# clever solution
def count(string):
    return {i: string.count(i) for i in string}
