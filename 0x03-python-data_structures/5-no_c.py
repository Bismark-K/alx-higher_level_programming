#!/usr/bin/python3

# Function that removes all character c and C from a string

def no_c(my_string):
    brand_new_string = my_string.translate({ord('C'): None})
    brand_new_string = brand_new_string.translate({ord('c'): None})
    return brand_new_string
