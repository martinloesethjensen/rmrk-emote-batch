# rmrk-emote-script

If you are looking for a script to create multiple addresses and emote specific emotes, then I would like to refer to the [kanaria-hatchery](https://github.com/kianenigma/kanaria-hatchery) script by [kianenigma](https://github.com/kianenigma).

This script is heavily inspired by the above mentioned script, so please have a look a that script as well and give it a :star:.

They way this script differs is that it sends 1700+ emojis in one batch call to be executed on the node.

> Currently we split the emoji list into chunks and send each chunk in a batch call and awit finalization before sending the next batch.

## Getting started

Clone repo and install npm packages.

```sh
git clone https://github.com/martinloesethjensen/rmrk-emote-batch
cd rmrk-emote-batch
npm install
```

## How to run

Specify rpc endpoint, egg id and seed phrase in the command.

I would first test on Westend before trying it out on kusama.

[Westend faucet info here.](https://wiki.polkadot.network/docs/en/maintain-networks#westend-faucet)

```sh
node index.js --id "6802595-24d573f4dfa1d7fd33-KAN-KANL-000000000000<EGG_ID>" -e "<WSS_ENDPOINT>" -s "<SEED_PHRASE>"
```

Please note that the [`emojis` list in index.js](index.js) contains many emoji unicodes. So if you want to emote with less emojis then just remove some from the list before running it.

You can find [emoji unicodes here](https://unicode.org/emoji/charts/full-emoji-list.html).
