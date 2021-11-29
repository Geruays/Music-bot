module.exports = {
    app: {
        px: 'p@',
        token: 'ODkxOTMxMzM4ODcyMDg2NTM4.YVFhyg.Tj-K3hykjqGUvpstun72KeoMurc',
        playing: 'Netflex Hengker'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'Kang Disjok',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
