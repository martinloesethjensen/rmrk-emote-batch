#!/bin/bash

## NOTES ##

# This script will add N substrate wallet private keys in raw format to keys.txt 
 
N=50

for A in {1..11}; do subkey generate -n kusama >> /tmp/keys.txt; done
cat /tmp/keys.txt | grep "Secret seed:"|sed 's/Secret seed://g'|tr -d ' ' >> keys.txt \
&& cat /tmp/keys.txt | grep "SS58 Address:"|sed 's/SS58 Address://g'|tr -d ' ' >> .receiving-addresses.txt \
&& rm /tmp/keys.txt
