describe('Contact', () => {
    it('Fill all the input fields, submit form and assert success message', async() => {
        // open URL
        await browser.url('/contact');
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Fill out the input fields
        // .setValue will clear the input field & add the text on input field
        // await $('.contact-name input').setValue('Test Name'); 
        // .addValue will add the text on input field
        await $('.contact-name input').addValue('Test Name'); 
        await $('.contact-email input').addValue('test@test.com');
        await $('.contact-phone input').addValue('+441234567890');
        await $('.contact-message textarea').addValue('This is a test message. Please ignore it. Thank you');

        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Click Submit button
        await $('button[type=submit]').click();
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Assert the success message
        const successAlert = $("[role='alert']");
        await expect(successAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');
        
    });
});