#!/bin/bash

## NOTES ##

# This script will add substrate wallet private keys in raw format to keys.txt 
# and add their Kusama addresses to receiving-addresses.txt.

for A in {1..50}; do subkey generate -n kusama >> /tmp/keys.txt; done
cat /tmp/keys.txt | grep "Secret seed:"|sed 's/Secret seed://g'|tr -d ' ' >> keys.txt \
&& cat /tmp/keys.txt | grep "SS58 Address:"|sed 's/SS58 Address://g'|tr -d ' ' >> receiving-addresses.txt \
&& rm /tmp/keys.txt
