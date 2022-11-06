const xmtp = require('@xmtp/xmtp-js');
const wallet = require('ethers').Wallet.createRandom();
const Client = xmtp.Client;

class Message{

    async send(message,wallet){
        const client = await Client.create(wallet);
        const conv = await client.conversations.newConversation(wallet);
        let result = await conv.send(message);
        console.log({result});
    }

}

module.exports = Message;