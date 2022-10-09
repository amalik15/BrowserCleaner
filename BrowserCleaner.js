const clearCallBack = () => {
    document.getElementById('complete').innerHTML = 'Cleaned'
}

const clear = async () => {
    try {
        await chrome.browsingData.remove(
            {
                "since": 0
            },
            {
                "appcache": true,
                "cache": true,
                "cacheStorage": true,
                "cookies": true,
                "downloads": true,
                "fileSystems": true,
                "formData": true,
                "history": true,
                "indexedDB": true,
                "localStorage": true,
                "passwords": true,
                "pluginData": true,
                "serviceWorkers": true,
                "webSQL": true
            }, clearCallBack);
        ;
    }
    catch (err) {
        document.getElementById('complete').innerHTML = 'Error';
    }
};

document.getElementById('clearButton').addEventListener('click', clear);