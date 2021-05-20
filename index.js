// Import the API, Keyring and some utility functions
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

const options = require('yargs')
  .option('id', {
    type: 'string',
    description: 'The id of your target egg',
    required: true,
  })
  .option('endpoint', {
    alias: 'e',
    type: 'string',
    description: 'The wss endpoint. [Westend = wss://westend-rpc.polkadot.io] [Kusama = wss://kusama-rpc.polkadot.io]',
    required: true,
  })
  .option('seed', {
    alias: 's',
    type: 'string',
    description: 'Your mnemonic seed. It is not saved anywhere.',
    required: true,
  })
  .argv

async function main() {
  const provider = new WsProvider(options.endpoint);

  const api = await ApiPromise.create({ provider });

  console.log(`Connected to node: ${(await api.rpc.system.chain()).toHuman()} [ss58: ${api.registry.chainSS58}]`)

  const keyring = new Keyring({ type: 'sr25519', ss58Format: api.registry.chainSS58 });

  const ID = options.id
  const PHRASE = options.seed;

  let account = keyring.addFromUri(PHRASE);

  console.log('EGG_ID:          ', ID);
  console.log('ACCOUNT_ADDRESS: ', account.address)

  let rmrks = [];

  emojis.forEach((emoji) => { rmrks.push(api.tx.system.remark(`RMRK::EMOTE::1.0.0::${ID}::${emoji}`)); });

  let rmrksChunked = chunkArray(rmrks, 10);

  for (chunk of rmrksChunked) {
    console.log(chunk.length);

    const tx = api.tx.utility.batch(chunk);
    await sendAndFinalize(tx, account);
  }

  //const tx = api.tx.utility.batch(chunk);

  // Sign and send the transaction using account
  //const hash = await tx.signAndSend(account);

  //console.log('Transaction sent with hash', hash.toHex());
}

function chunkArray(array, size) {
  let result = []
  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size)
    result.push(chunk)
  }
  return result
}

// Lovely function from [kanaria-hatcher index.ts](https://github.com/kianenigma/kanaria-hatchery/blob/30e98bd1f39336d1c11e877cf874c452a2aa3756/src/index.ts#L167)
async function sendAndFinalize(tx, account) {
  return new Promise(async resolve => {
    let success = false;
    let included = []
    let finalized = []
    let unsubscribe = await tx.signAndSend(account, ({ events = [], status, dispatchError }) => {
      if (status.isInBlock) {
        success = dispatchError ? false : true;
        console.log(`📀 Transaction ${tx.meta.name}(${tx.args.toString()}) included at blockHash ${status.asInBlock} [success = ${success}]`);
        included = [...events]
      } else if (status.isBroadcast) {
        console.log(`🚀 Transaction broadcasted.`);
      } else if (status.isFinalized) {
        status.is
        console.log(`💯 Transaction ${tx.meta.name}(..) Finalized at blockHash ${status.asFinalized}`);
        finalized = [...events]
        let hash = status.hash;
        unsubscribe();
        resolve({ success, hash, included, finalized })
      } else if (status.isReady) {
        // let's not be too noisy..
      } else {
        console.log(`🤷 Other status ${status}`)
      }
    })
  })
}

const emojis = [
  '1f327-fe0f',
  '1f328-fe0f',
  '1f329-fe0f',
  '1f32a-fe0f',
  '1f32b-fe0f',
  '1f32c-fe0f',
  '1f300',
  '1f308',
  '1f302',
  '2602-fe0f',
  '2614',
  '26f1-fe0f',
  '26a1',
  '2744-fe0f',
  '2603-fe0f',
  '26c4',
  '2604-fe0f',
  '1f525',
  '1f4a7',
  '1f30a',
  '1f453',
  '1f576-fe0f',
  '1f97d',
  '1f97c',
  '1f9ba',
  '1f454',
  '1f455',
  '1f456',
  '1f9e3',
  '1f9e4',
  '1f9e5',
  '1f9e6',
  '1f457',
  '1f458',
  '1f97b',
  '1fa71',
  '1fa72',
  '1fa73',
  '1f459',
  '1f45a',
  '1f45b',
  '1f45c',
  '1f45d',
  '1f6cd-fe0f',
  '1f392',
  '1f45e',
  '1f45f',
  '1f97e',
  '1f97f',
  '1f460'
];

main().catch(console.error).finally(() => process.exit());
