# Example Commands

## Sending specific emotee

`node index.js --id <RMRK_ID_FILE> -e wss://kusama-rpc.polkadot.io -s <SEED_FILE> --emotes`

```sh
node index.js --id rmrk_ids.txt -e wss://kusama-rpc.polkadot.io -s keys.txt --emotes 🩸 🌫 --chunk
```

## Removing specific emotes from complete list of emotes

`node index.js --id <RMRK_ID_FILE> -e wss://kusama-rpc.polkadot.io -s <SEED_FILE> -r`
node index.js --id rmrk_ids.txt -e wss://westend-rpc.polkadot.io -s keys.txt -r 🐣

## Sending all emotes

`node index.js --id <RMRK_ID_FILE> -e wss://kusama-rpc.polkadot.io -s <SEED_FILE>`

```sh
node index.js --id rmrk_ids.txt -e wss://kusama-rpc.polkadot.io -s keys.txt
```

```sh
node index.js --id rmrk_ids.txt -e wss://kusama-rpc.polkadot.io -s keys.txt --chunk false
```

## Fund other accounts by sending an amount from a funder to receiving addresses

`node index.js -e wss://kusama-rpc.polkadot.io --receiving-addresses <FILE_WITH_ADDRESSES> --funding-account <FILE_WITH_SEED> --amount <AMOUNT>`

```sh
node index.js -e wss://kusama-rpc.polkadot.io --receiving-addresses receiving-addresses.txt --funding-account .funding-account --amount 0.06
```
