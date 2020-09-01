module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "linux": {
                    "publish": [{
                        "provider": "github",
                        "owner": "pavelmno4",
                        "repo": "test11"
                    }]
                },
                "win": {
                    "target": "nsis"
                },
                "nsis": {
                    "oneClick": "false",
                    "allowToChangeInstallationDirectory": "true"
                }
            }
        }
    }
}