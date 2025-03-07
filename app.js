function generateLink() {
    const productLink = document.getElementById("productLink").value.trim();
    const affiliateCode = document.getElementById("affiliateCode").value.trim();
    const resultDiv = document.getElementById("result");
    
    if (!productLink || !affiliateCode) {
        alert("Vul beide velden in!");
        return;
    }
    
    const affiliateLink = `${productLink}?${affiliateCode}`;
    const generatedLink = document.getElementById("generatedLink");
    
    generatedLink.href = affiliateLink;
    generatedLink.textContent = affiliateLink;
    resultDiv.classList.remove("hidden");
}

function copyLink() {
    const link = document.getElementById("generatedLink").href;
    navigator.clipboard.writeText(link).then(() => {
        alert("Link gekopieerd! 📋");
    });
}