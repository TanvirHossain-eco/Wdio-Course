// Import Contact Page class here
import ContactPage from "../pages/contact-page";

// Import Faker Library for using fake data input
import * as faker from 'faker';
describe('Contact', () => {
    it('Fill all the input fields, submit form and assert success message', async() => {
        // open URL
        // await browser.url('/contact'); // Method 1
        // open URL by using POM
        await ContactPage.open(); // Method 2
        // wait for 5 secs
        // await new Promise(resolve => setTimeout(resolve, 5000));
        // Fill out the input fields
        // .setValue will clear the input field & add the text on input field
        // await $('.contact-name input').setValue('Test Name'); 
        // .addValue will add the text on input field
        // await $('.contact-name input').addValue('Test Name'); // Method 1
        // await $('.contact-email input').addValue('test@test.com'); // Method 1
        // await $('.contact-phone input').addValue('+441234567890'); // Method 1
        // await $('.contact-message textarea').addValue('This is a test message. Please ignore it. Thank you'); // Method 1

        // Submit Form Data via POM
        // await ContactPage.submitForm ('Test Name', 'test@test.com', '+441234567890', 'This is a test message. Please ignore it. Thank you');
        // Submit Form Dynamic Faker Data via POM
        await ContactPage.submitForm (faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber(), faker.lorem.paragraphs(2));



        
        // wait for 5 secs
        // await new Promise(resolve => setTimeout(resolve, 3000));

        // Debug Method 1 Console log
        // Printing Elements out
        // console.log(await $('button[type=submt]').click());

        // Debug Method 2 browser pause
        // Browser Pause
        // browser.pause(5000);

        // Debug Method 3 browser Debug -> increase mocha timeout 60000 to 600000
        // browser debug
        // await browser.debug();

        // Click Submit button
        // await $('button[type=submit]').click(); // Method 1
        // Click Submit button by using POM
        // await ContactPage.btnSubmit.click(); // Method 2
        // wait for 5 secs
        // await new Promise(resolve => setTimeout(resolve, 5000));

        // Assert the success message
        const successAlert = ContactPage.alertSuccess;
        await expect(successAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');
        
    });
});