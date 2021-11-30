# rmrk-emote-script

This script is heavily inspired by the [kanaria-hatchery](https://github.com/kianenigma/kanaria-hatchery) script by [kianenigma](https://github.com/kianenigma), so please have a look at that script as well and give it a :star:

⚠️ **_PLEASE BE AWARE THAT RUNNING THE SCRIPT WITH ALL 1700+ EMOTES WILL BE ROUGHLY ~0.05 KSM_**

⚠️ **_PLEASE DON'T RUN THIS ON A HATCHING EGG_**

An example of the [extrinsic after running the script will look like this](https://kusama.subscan.io/extrinsic/0x77e1baf6e368644c60b6b3ffade989ff4298b76259e8e8a2edd29e6c7bed914f)  

🌱 Please support me if you'd like 😊

[KSM Address](https://kusama.subscan.io/account/HtSKUKWRPCxCtzsnNfdbN1NN5uVq4yMizb2FqeHSC3YoRTi):

```text
HtSKUKWRPCxCtzsnNfdbN1NN5uVq4yMizb2FqeHSC3YoRTi
```

## Getting started

First have [polkadot js api installed](https://polkadot.js.org/docs/api/start/install).

Clone the repo and install npm packages.

```sh
git clone https://github.com/martinloesethjensen/rmrk-emote-batch
cd rmrk-emote-batch
npm install
```

## How to run

Specify RPC endpoint, egg id, and seed phrase in the command.

I would first test on Westend before trying it out on Kusama. But try in small batches of emotes as you might not have enough westies.

[Westend faucet info here.](https://wiki.polkadot.network/docs/en/maintain-networks#westend-faucet)

```sh
# Sending all emotes (roughly ~0.05 KSM)
node index.js --id <RMRK_ID_FILE> -e wss://kusama-rpc.polkadot.io -s <SEED_FILE>

# Sending specific emotee
# Specified emotes need to be space separated.
node index.js --id <RMRK_ID_FILE> -e wss://kusama-rpc.polkadot.io -s <SEED_FILE> --emotes 🚀 🎉

# Removing specific emotes from complete list of emotes
# Specified emotes need to be space separated.
node index.js --id <RMRK_ID_FILE> -e wss://kusama-rpc.polkadot.io -s <SEED_FILE> -r 🤩 🥳
```

ℹ️ Please note that the [`emojis` list in index.js](index.js) contains many emoji unicodes. So if you want to emote with fewer emojis then just remove some from the list before running it. It is also possible to specify a specific list of emojis by using the command: `--emotes` and providing a space-separated list of emojis.

You can find [emoji unicodes here](https://unicode.org/emoji/charts/full-emoji-list.html) and [here](./emoji-unicodes.txt).

### Funding Accounts Example

```sh
# Fund other accounts by sending an amount from a funder to receiving addresses
node index.js -e wss://kusama-rpc.polkadot.io --receiving-addresses <FILE_WITH_ADDRESSES> --funding-account <FILE_WITH_SEED> --amount <AMOUNT>
```

## Commands

```txt
Options:
      --help                       Show help                           [boolean]
      --version                    Show version number                 [boolean]
      --id                         A file with RMRK IDs.                [string]
  -e, --endpoint                   The wss endpoint. (defaults to westend)
                                   [Westend = wss://westend-rpc.polkadot.io]
                                   [Kusama = wss://kusama-rpc.polkadot.io]
                                                             [string] [required]
  -s, --secret-keys                A file with secret keys or seed phrases. It
                                   is not saved anywhere.               [string]
  -f, --funding-account            A file with secret key or seed phrase. It is
                                   not saved anywhere.                  [string]
      --receiving-addresses, --ra  Used with funding-account where we specify
                                   amount to transfer to receiving accounts in
                                   the accounts file.                   [string]
      --amount                     Used with funding-account where we specify
                                   amount to transfer to receiving accounts in
                                   the accounts file.
      --emotes                     array of emojis, space separated      [array]
  -r, --remove                     array of emojis to remove from the list,
                                   space separated                       [array]
  -c, --chunk                      Boolean for if script should run chunked
                                   batch calls         [boolean] [default: true]
```
