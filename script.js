// Elements
const versionLabel = document.getElementById('version');

// Render Version
document.addEventListener('DOMContentLoaded', () => {

    // Fetch Manifest
    fetch('manifest.json').then(response => response.json()).then(data => {
        versionLabel.innerHTML = `${data.build}-${data.version}`
    })

})