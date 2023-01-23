const clearCallBack = () => {
    document.getElementById('complete').innerHTML = 'Cleaned'
}

const clear = async () => {
    console.log('clicked')
    try {
        await browser.browsingData.remove(
            {
                "since": 0
            },
            {
                "cache": true,
                "cookies": true,
                "downloads": true,
                "formData": true,
                "history": true,
                "indexedDB": true,
                "localStorage": true,
                "passwords": true,
                "pluginData": true,
                "serverBoundCertificates": true,
                "serviceWorkers": true
            }, clearCallBack);
    }
    catch (err) {
        console.log('err', err)
        document.getElementById('complete').innerHTML = 'Error';
    }
};

document.getElementById('clearButton').addEventListener('click', clear);