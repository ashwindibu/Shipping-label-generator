function labelPDF(){
    var form_fullname = document.querySelector('.form-fullname').value;
    var form_address = document.querySelector('.form-address').value;
    var form_landmark = document.querySelector('.form-landmark').value;
    var form_city = document.querySelector('.form-city').value;
    var form_state = document.querySelector('.form-state').value;
    var form_pincode = document.querySelector('.form-pincode').value;
    var body = document.querySelector('body'); 

    body.innerHTML = `
    <div class="pdf-container">
    <div class="pdf-container1">
        <div class="pdf-div1">
            <div class="shipto-div">
                <p class="shipto">SHIP TO</p>
            </div>
            <div class="buyerinfo">
                <p class="name">${form_fullname}</p>
                <p class="address">${form_address}</p>
                <p class="landmark">${form_landmark}</p>
                <p class="city">${form_city}</p>
                <p class="state">${form_state}</p>
                <p class="pincode">${form_pincode}</p>

            </div>

        </div>
        <div class="pdf-div2">
            <p>hello2</p>
        </div>
        <div class="pdf-div3">
            <p>hello3</p>
        </div>
    </div>
</div>
<input type="submit" value="Submit" onclick="PDFgenerator()">
    `




}

function PDFgenerator(){
    const mainpage =  document.querySelector(".pdf-container");
    html2pdf().from(mainpage).save()
    alert("PDF");
}