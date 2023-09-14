# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

# my solution
def solution(s):
    return ''.join(f' {char}' if char.isupper() else char for char in s)

# unecesserily complex solution


def solution(s):
    return ''.join(list(map(lambda x: f' {x}' if x.isupper() else x, list(s))))
