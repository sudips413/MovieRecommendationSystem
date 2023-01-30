import sys
import numpy as np
def new_func(list):
    return np.arange(0,10)

def name(var):
    list= []
    for i in range(0,10):
        list.append(i)
    return new_func(list)  

print(name(sys.argv[1]))