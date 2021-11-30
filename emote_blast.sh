#!/bin/bash

SEED_FILE='SEED_FILE'
RMRK_ID_FILE=rmrk_ids.txt
RMRK_ID='RMRK_ID'
BOMB_LOG=logs/log.log
EMOTES='😬 😀 😃'

function emote {
    echo -e $RMRK_ID | tr ' ' '\n' > $RMRK_ID_FILE
    node index.js \
    --id $RMRK_ID_FILE \
    -e wss://kusama-rpc.polkadot.io \
    -s $SEED_FILE \
    --emotes $EMOTES \
    --chunk true 2>&1 | tee -a $BOMB_LOG
}
emote && echo Completed $EMOTES on $RMRK_ID

# RMRK_ID='6802639-24d573f4dfa1d7fd33-KAN-KANL-0000000000009630
# 6802639-24d573f4dfa1d7fd33-KAN-KANL-0000000000009670'
# SEED_FILE='keys25.txt'
# EMOTES='🌫 🧖 🥢 📟 🏷 🗞 🧫 🥉 🛀 🕖'
# emote && echo Completed $EMOTES on $RMRK_ID
