const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
    e.preventDefault();

    const link = this.getAttribute('link');
    console.log(link);

    try {
        await navigator.clipboard.writeText(link);
        alert("Link Copiado: " + link);
    } catch (err) {
        console.error(err);
        alert("Falha ao copiar o link.");
    }
}


shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

