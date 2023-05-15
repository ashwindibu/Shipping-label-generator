
function labelPDF() {
    var form_fullname = document.querySelector('.form-fullname').value;
    var form_mobilenumber = document.querySelector('.form-mobilenumber').value;
    var form_address = document.querySelector('.form-address').value;
    var form_landmark = document.querySelector('.form-landmark').value;
    var form_city = document.querySelector('.form-city').value;
    var form_state = document.querySelector('.form-state').value;
    var form_pincode = document.querySelector('.form-pincode').value;

    var form_sellerfullname = document.querySelector('.form-sellerfullname').value;
    var form_sellermobilenumber = document.querySelector('.form-sellermobilenumber').value;
    var form_selleraddress = document.querySelector('.form-selleraddress').value;
    var form_sellerlandmark = document.querySelector('.form-sellerlandmark').value;
    var form_sellercity = document.querySelector('.form-sellercity').value;
    var form_sellerstate = document.querySelector('.form-sellerstate').value;
    var form_sellerpincode = document.querySelector('.form-sellerpincode').value;

    var body = document.querySelector('body');

    body.innerHTML = `
    <input type="submit" value="Download PDF" onclick="PDFgenerator()">
    <a href="index.html"><button>Back</button></a>
    <div class="pdf-container">
        <div class="pdf-container1">
            <div class="pdf-div1">
                <div class="shipto-div">
                    <p class="shipto">SHIP TO</p>
                </div>
                <div class="buyerinfo">
                <p class="name">${form_fullname}</p>
                <p class="Phone">Ph: ${form_mobilenumber}</p>
                <p class="address">${form_address}</p>
                <p class="landmark">${form_landmark}</p>
                <p class="city">${form_city}</p>
                <p class="state">${form_state}</p>
                <p class="pincode">${form_pincode}</p>
                </div>

            </div>
            <div class="pdf-div2">
                <img class="pdf-image"  src="https://us-wbe-img2.gr-cdn.com/user/7feaad90-6ef4-46b5-8c0b-3ccaf1baa7b2/4da3ff62-e36f-490f-a5bc-8a3f774e0940-webp.webp" alt="" >
            </div>
            <div class="pdf-div3">
                <div class="from-div">
                    <p class="from">From:</p>
                </div>
                <div class="buyerinfo">
                <p class="name">${form_sellerfullname}</p>
                <p class="Phone">Ph: ${form_sellermobilenumber}</p>
                <p class="address">${form_selleraddress}</p>
                <p class="landmark">${form_sellerlandmark}</p>
                <p class="city">${form_sellercity}</p>
                <p class="state">${form_sellerstate}</p>
                <p class="pincode">${form_sellerpincode}</p>
                </div>
            </div>
        </div>
    </div>

    `

    // document.getElementsByClassName('form-fullname' ).value = form_fullname;


}

function PDFgenerator() {
    const mainpage = document.querySelector(".pdf-container1");
    var opt = {
        margin: 0.5,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, height:900 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(mainpage).set(opt).save();

    alert("PDF");
}
