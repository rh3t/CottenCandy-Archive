// Elements
const versionLabel = document.getElementById('version');

// Render Version
document.addEventListener('DOMContentLoaded', () => {

    // Fetch Manifest
    fetch('manifest.json').then(response => response.json()).then(data => {
        versionLabel.innerHTML = `<a href="https://github.com/rhet0r1cal/CottenCandy-Archive">Visit on GitHub</a> - ${data.build}-${data.version}`
    })

})