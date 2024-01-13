#!/usr/bin/python3
"""
Uses the write_file function
"""


def write_file(filename="", text=""):
    """
    generates contents for a file
    """
    with open(filename, 'w', encoding='utf=8') as f:
        return f.write(text)
