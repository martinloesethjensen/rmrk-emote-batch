#!/bin/bash


## SEED_FILE contains keys for accounts used to emote.
## Multiple TARGET_ID can be set - 1 per line
## BOMB_LOG sets log file

SEED_FILE='keys.txt'
RMRK_ID_FILE=rmrk_ids.txt
TARGET_ID='6802639-24d573f4dfa1d7fd33-KAN-KANL-0000000000006501' 
BOMB_LOG=bomb.log
EMOTES='🪓 🏰 🕸 💀 🕷'


##  Declare Function

function emote {
    echo $TARGET_ID > $RMRK_ID_FILE
    node index.js \
    --id $RMRK_ID_FILE \
    -e wss://kusama-rpc.polkadot.io \
    -s $SEED_FILE \
    --emotes $EMOTES \
    --chunk true 2>&1 | tee -a $BOMB_LOG
}

## emote will run function

emote && echo "Completed $EMOTES on $TARGET_ID"

## change variables to more easily edit key files and emotes. 
## repeat as necessary
## Uncomment to enable additional targets

#TARGET_ID='6802639-24d573f4dfa1d7fd33-KAN-KANL-0000000000006503'
#EMOTES='⚰️ 🧟‍♀️ 🧛‍♀️'
#emote && echo "Completed $EMOTES on $TARGET_ID"

#TARGET_ID='6802639-24d573f4dfa1d7fd33-KAN-KANL-0000000000006502'
#EMOTES='🩸 🦋 🦚'
#emote && echo "Completed $EMOTES on $TARGET_ID"

#TARGET_ID='6802639-24d573f4dfa1d7fd33-KAN-KANL-0000000000006503'
#EMOTES='😠 😡 🎃 🧠 🍷'
#emote && echo "Completed $EMOTES on $TARGET_ID"
