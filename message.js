const xmtp = require('@xmtp/xmtp-js');
const wallet = require('ethers').Wallet.createRandom();
const Client = xmtp.Client;

class Message{

    constructor(){
        this.client = this.initializeClient();
    }

    async initializeClient(){
        //return await Client.create(wallet);
    }

    async send(message,walletHash){
        const client = await Client.create(wallet);
        const conv = await client.conversations.newConversation(walletHash);
        let result = await conv.send(message);
        console.log({result});
        console.log(result.senderAddress);
    }

    async listen(){
        const conversation = await xmtp.conversations.newConversation(process.env.TEST_WALLET);
        for await (const message of await conversation.streamMessages()){
            if(message.senderAddress === xmtp.address){
                console.log('i sent myself a message');
                continue;
            }
            console.log(`new message from ${message.senderAddress}: ${message.content}`);
        }
    }
}

module.exports = Message;