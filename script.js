function showInfo(topic) {
    const panel = document.getElementById("info-panel");

    if (topic === "country") {
        panel.innerHTML = `
            <h2>Lengyel ország</h2>
            <p>Szeretnék több időt tölteni a fővárosban, új helyeket felfedezni és programokon részt venni.</p>
        `;
    }

    if (topic === "budapest") {
        panel.innerHTML = `
            <h2>Budapest</h2>
            <p>Kirándulásokat és városnézést tervezek Budapesten.</p>
        `;
    }

    if (topic === "books") {
        panel.innerHTML = `
            <h2>Könyvek</h2>
            <p>A nyár során szeretnék több könyvet elolvasni és új sorozatokat elkezdeni.</p>
        `;
    }

    if (topic === "minecraft") {
    panel.innerHTML = `
        <h2>Minecraft</h2>
        <p>Szeretnék játszani a modpackemmel és új dolgokat építeni.</p>
    `;
}

if (topic === "friends") {
    panel.innerHTML = `
        <h2>Barátok</h2>
        <p>Több időt szeretnék tölteni a barátaimmal a nyáron.</p>
    `;
}

if (topic === "youtube") {
    panel.innerHTML = `
        <h2>YouTube</h2>
        <p>Szeretnék videókat készíteni és fejleszteni a csatornámat.</p>
    `;
}
}