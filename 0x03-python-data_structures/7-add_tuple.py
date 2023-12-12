#!/usr/bin/python3

# Function that adds 2 tuples

def add_tuple(tuple_a=(), tuple_b=()):
    len_1 = len(tuple_a)
    len_2 = len(tuple_b)
# dealing with tuple_a
    if len_1 < 1:
        tuple_a = (0, 0)
    elif len_1 < 2:
        tuple_a = (tuple_a[0], 0)
# dealing with tuple_b
    if len_2 < 1:
        tuple_b = (0, 0)
    elif len_2 < 2:
        tuple_b = (tuple_b[0], 0)

    result = (tuple_a[0] + tuple_b[0], tuple_a[1] + tuple_b[1])
    return result
