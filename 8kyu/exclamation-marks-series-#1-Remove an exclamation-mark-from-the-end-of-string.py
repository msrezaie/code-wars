# Description:
# Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

# Examples
# remove("Hi!") == "Hi"
# remove("Hi!!!") == "Hi!!"
# remove("!Hi") == "!Hi"
# remove("!Hi!") == "!Hi"
# remove("Hi! Hi!") == "Hi! Hi"
# remove("Hi") == "Hi"

# my solution
def remove(s):
    return s[0:-1] if len(s) > 1 and s[-1] == '!' else s