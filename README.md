# rmrk-emote-script

## How to run

Specify rpc endpoint, egg id and seed phrase in the command. 

I would first test on Westend before trying it out on kusama. 

[Westend faucet info here.](https://wiki.polkadot.network/docs/en/maintain-networks#westend-faucet)

```sh
node index.js --id 6802595-24d573f4dfa1d7fd33-KAN-KANL-000000000000<EGG_ID> -e wss://westend-rpc.polkadot.io -s "<SEED_PHRASE>"
```

Please note that the [`emojis` list in index.js](index.js) contains many emoji unicodes. So if you want to emote with less emojis then just remove some from the list before running it. 

You can find [emoji unicodes here](https://unicode.org/emoji/charts/full-emoji-list.html)
 
