// Created by Dayu Wang (dwang@stchas.edu) on 2020-10-26

// Last updated by Dayu Wang (dwang@stchas.edu) on 2020-10-26


function pasteToInput() {
    document.getElementById("paste").style.backgroundColor = "blue";
    document.getElementById("paste").textContent = "Done";
    document.getElementById("input").style.backgroundColor = "darkcyan";
    document.getElementById("input").textContent = "Copy";
    document.getElementById("underscore").style.backgroundColor = "orangered";
    document.getElementById("underscore").textContent = "Copy";
    document.getElementById("view").style.backgroundColor = "orangered";
    document.getElementById("view").textContent = "Copy";
    document.getElementById("download").style.backgroundColor = "orangered";
    document.getElementById("download").textContent = "Copy";
    navigator.clipboard.readText().then(text => {
        document.getElementById("inputText").value = text;
        document.getElementById("underscoreOutput").value = text.replace(/ /g,"_");
        if (text.includes("https://drive.google.com/file/d/") && text.includes("/view?usp=sharing")) {
            const docId = text.substring(32, 65);
            document.getElementById("viewOutput").value = "https://drive.google.com/uc?export=view&id=" + docId;
            document.getElementById("downloadOutput").value = "https://drive.google.com/uc?export=download&id=" + docId;
        } else {
            document.getElementById("viewOutput").value = "";
            document.getElementById("downloadOutput").value = "";
        }
    });
}

function synchronizeInput() {
    document.getElementById("paste").style.backgroundColor = "darkcyan";
    document.getElementById("paste").textContent = "Paste";
    document.getElementById("input").style.backgroundColor = "darkcyan";
    document.getElementById("input").textContent = "Copy";
    document.getElementById("underscore").style.backgroundColor = "orangered";
    document.getElementById("underscore").textContent = "Copy";
    document.getElementById("view").style.backgroundColor = "orangered";
    document.getElementById("view").textContent = "Copy";
    document.getElementById("download").style.backgroundColor = "orangered";
    document.getElementById("download").textContent = "Copy";
    let text = document.getElementById("inputText").value;
    document.getElementById("underscoreOutput").value = text.replace(/ /g, "_");
    if (text.includes("https://drive.google.com/file/d/") && text.includes("/view?usp=sharing")) {
        const docId = text.substring(32, 65);
        document.getElementById("viewOutput").value = "https://drive.google.com/uc?export=view&id=" + docId;
        document.getElementById("downloadOutput").value = "https://drive.google.com/uc?export=download&id=" + docId;
    } else {
        document.getElementById("viewOutput").value = "";
        document.getElementById("downloadOutput").value = "";
    }
}

function copyOriginalInput() {
    navigator.clipboard.writeText(document.getElementById("inputText").value);
    document.getElementById("input").style.backgroundColor = "blue";
    document.getElementById("input").textContent = "Done";
    document.getElementById("paste").style.backgroundColor = "darkcyan";
    document.getElementById("paste").textContent = "Paste";
    document.getElementById("underscore").style.backgroundColor = "orangered";
    document.getElementById("underscore").textContent = "Copy";
    document.getElementById("view").style.backgroundColor = "orangered";
    document.getElementById("view").textContent = "Copy";
    document.getElementById("download").style.backgroundColor = "orangered";
    document.getElementById("download").textContent = "Copy";
}

function copyUnderscore() {
    navigator.clipboard.writeText(document.getElementById("underscoreOutput").value);
    document.getElementById("underscore").style.backgroundColor = "blue";
    document.getElementById("underscore").textContent = "Done";
    document.getElementById("paste").style.backgroundColor = "darkcyan";
    document.getElementById("paste").textContent = "Paste";
    document.getElementById("input").style.backgroundColor = "darkcyan";
    document.getElementById("input").textContent = "Copy";
    document.getElementById("view").style.backgroundColor = "orangered";
    document.getElementById("view").textContent = "Copy";
    document.getElementById("download").style.backgroundColor = "orangered";
    document.getElementById("download").textContent = "Copy";
}

function copyViewLink() {
    navigator.clipboard.writeText(document.getElementById("viewOutput").value);
    document.getElementById("view").style.backgroundColor = "blue";
    document.getElementById("view").textContent = "Done";
    document.getElementById("paste").style.backgroundColor = "darkcyan";
    document.getElementById("paste").textContent = "Paste";
    document.getElementById("input").style.backgroundColor = "darkcyan";
    document.getElementById("input").textContent = "Copy";
    document.getElementById("underscore").style.backgroundColor = "orangered";
    document.getElementById("underscore").textContent = "Copy";
    document.getElementById("download").style.backgroundColor = "orangered";
    document.getElementById("download").textContent = "Copy";
}

function copyDownloadLink() {
    navigator.clipboard.writeText(document.getElementById("downloadOutput").value);
    document.getElementById("download").style.backgroundColor = "blue";
    document.getElementById("download").textContent = "Done";
    document.getElementById("paste").style.backgroundColor = "darkcyan";
    document.getElementById("paste").textContent = "Paste";
    document.getElementById("input").style.backgroundColor = "darkcyan";
    document.getElementById("input").textContent = "Copy";
    document.getElementById("underscore").style.backgroundColor = "orangered";
    document.getElementById("underscore").textContent = "Copy";
    document.getElementById("view").style.backgroundColor = "orangered";
    document.getElementById("view").textContent = "Copy";
}

window.onload = function() {
    document.getElementById("paste").addEventListener("click", function() { pasteToInput(); });
    document.getElementById("inputText").addEventListener("keyup", function(e) {
        if (!e.ctrlKey && e.key.toUpperCase() !== "CONTROL" && e.key.toUpperCase() !== "SHIFT" && e.key.toUpperCase() !== "ALT") { synchronizeInput(); }
    });
    document.getElementById("input").addEventListener("click", function() { copyOriginalInput(); });
    document.getElementById("underscore").addEventListener("click", function() { copyUnderscore(); });
    document.getElementById("view").addEventListener("click", function() { copyViewLink(); });
    document.getElementById("download").addEventListener("click", function() { copyDownloadLink(); });

    document.onkeyup = function(e) {
        if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "K") { pasteToInput(); }
        if (e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toUpperCase() === "V") { pasteToInput(); }
        if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "U") { copyUnderscore(); }
        if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "L") { copyViewLink(); }
        if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "D") { copyDownloadLink(); }
        if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "Q") { copyOriginalInput(); }
        if (e.key.toUpperCase() === "TAB") {
            document.getElementById("inputText").focus();
            document.getElementById("inputText").select();
        }
    };
}