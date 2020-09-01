module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "linux": {
                    "publish": [{
                        "provider": "github",
                        "owner": "pavelmno4",
                        "repo": "electron-update"
                    }]
            }
        }
    }
}