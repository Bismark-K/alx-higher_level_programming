#!/usr/bin/python3

# A function that prints x elements of a list

def safe_print_list(my_list=[], x=0):
    g = 0
    for h in range(x):
        try:
            print(my_list[h], end="")
            g = g + 1
        except IndexError:
            break
    print()
    return g
