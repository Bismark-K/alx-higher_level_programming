#!/usr/bin/python3
def search_replace(my_list, search, replace):
    def s_n_r(element):
        return (element if element != search else replace)
    return list(map(s_n_r, my_list))
