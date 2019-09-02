#!/usr/local/bin/python3
import sys
fn = sys.argv[1]

with open(fn, 'r') as fp:
    outfile = []
    for line in fp.readlines():
        if line.startswith('layout'):
            continue
        if line.startswith('permalink'):
            continue
        if line.startswith('toc'):
            continue
        if line.startswith('##'):
            line = line[1:]
        if line.startswith('{%'):
            continue
        #outfile.append(line)
    
        print(line[:-1])
        # with open('mod_{}'.format(fn), 'w') as out:
        #     for line in outfile:
        #         out.write(line)

        
    
        
            