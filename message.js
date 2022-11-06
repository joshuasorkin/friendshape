const xmtp = require('@xmtp/xmtp-js');
const wallet = require('ethers').Wallet.createRandom();
const Client = xmtp.Client;

class Message{

    async send(message,walletHash){
        const client = await Client.create(wallet);
        const conv = await client.conversations.newConversation(walletHash);
        let result = await conv.send(message);
        console.log({result});
    }

}

module.exports = Message;