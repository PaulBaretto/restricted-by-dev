


let style = "color: green; font-size: 25px; font-weight:600; font-family:'Poppins', sans-serif; font-style: italic;";
console.log("%c Double Click the 'Restricted' text to downlaod the zip", style);



let dom_year = document.querySelector('.year');
async function getData() {
    const url = "https://time.akamai.com/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            dom_year.textContent = '2050';
        }

        const timestampText = await response.text();
        const timestamp = parseInt(timestampText);
        const date = new Date(timestamp * 1000);
        const year = date.getFullYear();
        dom_year.textContent = year + 1;
    } catch (error) {
        console.error(error.message);
        dom_year.textContent = '2050';
    }
}
getData();

document.querySelector('.downlaod_btn').addEventListener('dblclick', function() {
    const zipUrl = 'restricted-by-dev.zip';
    const filename = 'restricted-by-dev.zip';
    
    const link = document.createElement('a');
    link.href = zipUrl;  
    link.download = filename;  
    
    document.body.appendChild(link); 
    link.click();  
    document.body.removeChild(link);  
});





