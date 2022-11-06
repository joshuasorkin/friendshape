const xmtp = require('@xmtp/xmtp-js');
const wallet = require('ethers').Wallet.createRandom();
const Client = xmtp.Client;
const upToFirstSpace = /([^\s]+)/g;

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
        console.log(process.env.TEST_WALLET);
        const client = await Client.create(wallet);
        console.log({client});
        const conversation = await client.conversations.newConversation(process.env.TEST_WALLET);
        for await (const message of await conversation.streamMessages()){
            if(message.senderAddress === client.address){
                console.log('i sent myself a message');
                continue;
            }
            console.log(`new message from ${message.senderAddress}: ${message.content}`);
        }
    }

    parse(content){
        let contentTrim = content.trim();
        if (contentTrim.length === 0){
            return {
                error:true,
                errorMessage:'no wallet hash found'
            }
        }
        let result = upToFirstSpace.exec(contentTrim);
        if (!result || result.length === 0){
            return {
                error:true,
                errorMessage:'no message found after wallet hash'
            }
        }
        else{
            let walletHash = result[0];
            let figureName = content.slice(walletHash.length).trim();
            if (figureName.length===0){
                return {
                    error:true,
                    errorMessage:'no spaces in message, cannot identify wallet hash'
                }
            }
            return {
                error:false,
                walletHash:walletHash,
                figureName:figureName
            }
        }
    }
}

module.exports = Message;