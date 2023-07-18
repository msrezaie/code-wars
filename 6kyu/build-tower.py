# Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

# For example, a tower with 3 floors looks like this:

# [
#   "  *  ",
#   " *** ",
#   "*****"
# ]

# my solution:
def tower_builder(n_floors):
  return [ ("*" * ((i * 2) - 1)).center((n_floors * 2) - 1) for i in range(1, n_floors + 1) ]