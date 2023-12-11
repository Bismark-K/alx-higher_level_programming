#!/usr/bin/python3

# Function that prints all integers of a list, in reverse order

def print_reversed_list_integer(my_list=[]):
    if my_list:
        for idx in reversed(my_list):
            print("{:d}".format(idx))
