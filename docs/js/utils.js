window.cdxClickElementById = function (id)
{
    let element = document.getElementById(id);
    let originalVisibility = element.style.visibility;
    if (originalVisibility === "hidden")
    {
        element.style.visibility = "inline";
    }
    element.click();
    if (originalVisibility === "hidden")
    {
        element.style.visibility = "hidden";
    }
};

window.cdxFileDownload = function (filename, base64Contents)
{
    let element = document.createElement('a');
    element.setAttribute('href', 'data:application/octet-stream;base64,' + base64Contents);
    element.setAttribute('download', filename);

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}