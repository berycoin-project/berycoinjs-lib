module.exports = {
    berycoin: {
        messagePrefix: '\x15Berycoin Signed Message:\n',
        bech32: 'bery',
        bip32: {
            public: 0x0586c22e,
            private: 0x0586dcf1
        },
        pubKeyHash: 0x19,
        scriptHash: 0x14,
        wif: 0xd8
    },
    berycoin_testnet: {
        messagePrefix: '\x15Berycoin Signed Message:\n',
        bech32: 'tbery',
        bip32: {
            public: 0x053782bf,
            private: 0x053784a4
        },
        pubKeyHash: 0x0b,
        scriptHash: 0x6a,
        wif: 0xe5
    }
}
