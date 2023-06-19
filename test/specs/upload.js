// For Uploading files

const path = require('path');

describe('Upload Tests', () => {
    // Upload file on Visible input field
    it('Simple Upload Test', async() => {
        // open url
        await browser.url('https://the-internet.herokuapp.com/upload'); 
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));

        // store test file path
        // Go back to main folder & access the data folder's file
        const filePath = path.join(__dirname, '../data/logotitle.png'); 

        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
        // click the submit button
        await $('#file-submit').click(); 

        // assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });
    // upload a file on a Hidden input field
    it('Upload on a hidden input field', async() => {
        // open url
        await browser.url('/cart/'); 
        // wait for 5 secs
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // store test file path
        // Go back to main folder & access the data folder's file
        const filePath = path.join(__dirname, '../data/logotitle.png'); 

        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // remove hidden input field class by using the script on browser
        await browser.execute("document.querySelector('#upfile_1').className = ''");

        // set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
        // click the submit button
        await $('#upload_1').click(); 

        // assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
        
    });
});