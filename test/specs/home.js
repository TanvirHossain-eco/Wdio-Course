// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/
// Import Home Page class here

import { platform } from "os";
import HomePage from "../pages/home-page";
// Import Allure reporter
import allureReporter from '@wdio/allure-reporter';

// const HomePage = require('../pages/home-page');
// let homepage = new HomePage;
// console.log(HomePage, x);
// const assert = require ('assert');
describe('Home', () => {
    
    // Using Before & After Hooks
    before(async ()=>{
        console.log ('This could be used for Test Setup');
        // Open Home page URL by calling Page Object Model (POM) and using hooks
        await HomePage.open(); //Method 3
    })

    beforeEach(async ()=>{
        console.log ('This Runs before Each Test');
        // Open Home page URL by calling Page Object Model (POM) and using hooks
        await HomePage.open(); //Method 3
    })

    after(async ()=>{
        console.log ('This could be used for Test Cleanup');
    })

    afterEach(async ()=>{
        console.log ('This Runs after Each Test');
    })
    // Home Page Title
    it('Open Url & Assert title', async() => {
        // Set Severity or any add any kind of features of Allure reporter
        allureReporter.addSeverity("Minor");
        
        // open Home Page URL by using await & directly
        // await browser.url('/'); //Method 1

        // Open Home page URL by calling Page Object Model (POM)
        // await HomePage.open(); //Method 2
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });
    // About Page
    it('Open About Page & Assert URL', async() => {
        // open About Page
        await browser.url('https://practice.automationbro.com/about');
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Assert URL
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about');
    });
    // Home Page + Logo Verification
    it('Click Logo & Assert URL does not contain get-started text', async() => {
        // Set Severity or any add any kind of features of Allure reporter
        allureReporter.addFeature("Logo Verification");
        
        // open Home Page URL by using await & directly
        // await browser.url('https://practice.automationbro.com/'); //Method 1

        // Open Home page URL by calling Page Object Model (POM)
        // await HomePage.open(); //Method 2
        // click logo
        // await $('//img[@alt="Practice E-Commerce Site"]').click(); // Method 1

        //Click logo by using POM
        (await HomePage.imageLogo).click(); // Method 2

        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Assert URL
        await expect(browser).not.toHaveUrlContaining('get-started');
    });
    // Homepage Hero Section Header Text
    it('Find Heading Element & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const headingElement = await $('.elementor-widget-container h1'); // Method 1

        // find heading element by using POM
        const headingElement = await HomePage.textHeading; // Method 2

        // get the text
        // const headingText = await headingElement.getText();

        // Assert the text
        // await expect(headingText).toEqual('Think different. Make different.'); // Method 1 -> coming from Jest Library
        await expect(headingElement).toHaveText('Think different. Make different.'); // Method 2 -> wdio expect assertion

        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home page hero Section paragraph
    it('Find Heading Elements Paragraph & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const headingElement = await $('.elementor-widget-container h1'); // Method 1

        // find heading element by using POM
        const headingElement = await HomePage.textHeadingParagraph; // Method 2

        // get the text
        // const headingText = await headingElement.getText();

        // Assert the text
        // await expect(headingText).toEqual('Think different. Make different.'); // Method 1 -> coming from Jest Library
        await expect(headingElement).toHaveText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed proin eget eu sit nec risus. Sed ut quam integer a nisl amet.  Ed ut quam integer a nisl amet'); // Method 2 -> wdio expect assertion

        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Homepage click on get started button
    it('Click Get Started Button & Assert URL contains get-started text', async() => {
        // open Home Page URL by using await & directly
        // await browser.url('https://practice.automationbro.com/'); //Method 1

        // Open Home page URL by calling Page Object Model (POM)
        // await HomePage.open(); //Method 2
        // click get started button
        // await $('#get-started').click();//Method 1
        
        // click get started button by using POM
        await HomePage.btnGetStarted.click();
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Assert URL
        await expect(browser).toHaveUrlContaining('get-started');
    });
    // Home page Feature icon Section hover
    it('Feature Icon should trigger hover action', async() => {

        // Find the element you want to check for the hover transform property
        const elementToHover1 = await browser.$('.wp-image-88'); 

        // Get the original style attribute
        // const originalStyle = await elementToCheck.getAttribute('style');.
        // Get the original transform style
        const originalTransform = await elementToHover1.getCSSProperty('transform');

        // Apply the hover effect by moving the mouse over the element
        // await elementToCheck.moveTo();
        // Apply the translateY transform to simulate the hover effect
        await browser.execute((elementToHover1) => {
            elementToHover1.style.transform = 'translateY(-8px)';
        }, elementToHover1);

        // Wait for a short period to see the hover effect (optional)
        // await browser.pause(5000);
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Add your test/assertion code here
        // For example, you can check if the element's appearance changes after the hover action.

        // Assertion: Check if the element's transform property is updated after hover
        const hoveredTransform = await elementToHover1.getCSSProperty('transform');
        // assert.strictEqual(hoveredTransform.value, 'matrix(1, 0, 0, 1, 0, -8)');
        await expect (hoveredTransform.value).toStrictEqual('matrix(1, 0, 0, 1, 0, -8)');

        // Reset the style to the original value
        // await elementToCheck.setAttribute('style', originalStyle);
        // Reset the transform to the original value
        await browser.execute((element, originalTransform) => {
            element.style.transform = originalTransform;
        }, elementToHover1, originalTransform.value);

           
        // await new Promise(resolve => setTimeout(resolve, 10000));
    });
    // Home Page Element 2 Section Header Text
    it('Find Heading Element 2 & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // Scrolling window to target section
        const scrollElement2 = await HomePage.scrollElement2;

        // Scroll to the target element section
        await scrollElement2.scrollIntoView();

        // find heading element
        // const headingElement2 = await $('.elementor-element-71f70e6 h3'); // Method 1

        // find heading element by using POM
        const headingElement2 = await HomePage.textHeading2; // Method 2

        // get the text
        // const headingText2 = await headingElement2.getText();

        // Assert the text
        // await expect(headingText2).toEqual('Think different. Make different.'); // Method 1 -> coming from Jest Library
        await expect(headingElement2).toHaveText('Zakra Invites You To Build Your Next Site'); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home page Element 2 Section Paragraph 1 Text
    it('Find Heading Element 2 Paragraph 1 & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const textE2Paragraph1 = await $('.elementor-element-cf0dc41 p:nth-of-type(1)'); // Method 1

        // find heading element by using POM
        const textE2Paragraph1 = await HomePage.textE2Paragraph1; // Method 2

        // get the text
        // const textE2Paragraph1 = await textParagraph2.getText();

        // Assert the text
        // await expect(textE2Paragraph1).toEqual('Think different. Make different.'); // Method 1 -> coming from Jest Library
        await expect(textE2Paragraph1).toHaveText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in proin lacus, sed morbi pulvinar malesuada duis."); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home page Element 2 Section Paragraph 2 Text
    it('Find Heading Element 2 Paragraph 2 & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const textE2Paragraph1 = await $('.elementor-element-cf0dc41 p:nth-of-type(1)'); // Method 1

        // find heading element by using POM
        const textE2Paragraph2 = await HomePage.textE2Paragraph2; // Method 2

        // get the text
        // const textE2Paragraph1 = await textParagraph2.getText();

        // Assert the text
        // await expect(textE2Paragraph1).toEqual('Think different. Make different.'); // Method 1 -> coming from Jest Library
        await expect(textE2Paragraph2).toHaveText("Viverra pellentesque enim mattis cursus lorem cras est augue. Sit lectus nisl velit rutrum. In quis quis vitae vitae. Sollicitudin rhoncus sit sed odio tristique id. Nisl turpis sed fames sed egestas et. Massa, id platea elit diam scelerisque."); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home page Our Awesome Portfolio Section Header & Paragraph Text
    it('Find Heading Element 3, Paragraph & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // Scrolling window to target section
        const scrollElement3 = await HomePage.scrollElement3;

        // Scroll to the target element section
        await scrollElement3.scrollIntoView();

        // find heading element
        // const headingElement3 = await $('.elementor-element-dd6929f h3'); // Method 1

        // find heading element by using POM
        const headingElement3 = await HomePage.textHeading3; // Method 2

        // get the text
        // const headingText3 = await headingElement3.getText();

        // Assert the text
        // await expect(headingText2).toEqual('Think different. Make different.'); // Method 1 -> coming from Jest Library
        await expect(headingElement3).toHaveText("Our Awesome Portfolio"); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const textE3Paragraph = await $('.elementor-element-dd6929f p'); // Method 1

        // find heading element by using POM
        const textE3Paragraph = await HomePage.textE3Paragraph; // Method 2

        // get the text
        // const textE3Paragraph = await textE3Paragraph.getText();

        // Assert the text
        // await expect(textE3Paragraph).toEqual('Think different. Make different.'); // Method 1 -> coming from Jest Library
        await expect(textE3Paragraph).toHaveText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, sit sed accumsan, viverra sociis ullamcorper aenean fermentum."); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home page Our Awesome Portfolio Section Gallery image 
    it('On click should open the gallery image, assert it and close the Image', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find Gallery Image element
        // const galleryImage1 = await $('.elementor-element-dd6929f figure:nth-of-type(1)'); // Method 1

        // find Gallery Image element by using POM
        const galleryImage1 = await HomePage.galleryImage1; // Method 2

        // open the Gallery image on click
        await galleryImage1.click();

        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));

        // matching the elements with actual image & assert it
        const actualImage1 = await browser.checkScreen("Gallery-Image-1",{});
        expect(actualImage1).toEqual(0);

        // find Gallery Image close element by using POM
        const galleryImageClose = await HomePage.galleryImageClose;
        
        // close the Gallery image on click
        await galleryImageClose.click();

    });
    // Home Page Plan & Pricing Section Header & Paragraph Text
    it('Find Heading Element 4, Paragraph & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // Scrolling window to target section
        const scrollElement4 = await HomePage.scrollElement4;

        // Scroll to the target element section
        await scrollElement4.scrollIntoView();

        // find heading element
        // const headingElement4 = await $('.elementor-element-32d26c0 h3'); // Method 1

        // find heading element by using POM
        const headingElement4 = await HomePage.textHeading4; // Method 2

        // get the text
        // const headingText4 = await headingElement4.getText();

        // Assert the text
        // await expect(headingText2).toEqual('Plan & Pricing'); // Method 1 -> coming from Jest Library
        await expect(headingElement4).toHaveText("Plan & Pricing"); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const textE3Paragraph = await $('.elementor-element-32d26c0 p'); // Method 1

        // find heading element by using POM
        const textE4Paragraph = await HomePage.textE4Paragraph; // Method 2

        // get the text
        // const textE3Paragraph = await textE3Paragraph.getText();

        // Assert the text
        // await expect(textE3Paragraph).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit massa condimentum enim, nisl vitae. Ultricies aliquet proin egestas donec viverra turpis luctus gravid'); // Method 1 -> coming from Jest Library
        await expect(textE4Paragraph).toHaveText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit massa condimentum enim, nisl vitae. Ultricies aliquet proin egestas donec viverra turpis luctus gravid"); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home Page Meet Our Team Section Header & Paragraph Text
    it('Find Heading Element 5, Paragraph & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // Scrolling window to target section
        const scrollElement5 = await HomePage.scrollElement5;

        // Scroll to the target element section
        await scrollElement5.scrollIntoView();

        // find heading element
        // const headingElement5 = await $('.elementor-element-66e793f h3'); // Method 1

        // find heading element by using POM
        const headingElement5 = await HomePage.textHeading5; // Method 2

        // get the text
        // const headingText5 = await headingElement5.getText();

        // Assert the text
        // await expect(headingText5).toEqual('Plan & Pricing'); // Method 1 -> coming from Jest Library
        await expect(headingElement5).toHaveText("Meet Our Team"); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const textE5Paragraph = await $('.elementor-element-66e793f p'); // Method 1

        // find heading element by using POM
        const textE5Paragraph = await HomePage.textE5Paragraph; // Method 2

        // get the text
        // const textE5Paragraph = await textE5Paragraph.getText();

        // Assert the text
        // await expect(textE5Paragraph).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit massa condimentum enim, nisl vitae. Ultricies aliquet proin egestas donec viverra turpis luctus gravid'); // Method 1 -> coming from Jest Library
        await expect(textE5Paragraph).toHaveText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, sit sed accumsan, viverra sociis ullamcorper aenean fermentum."); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home Page Client Reviews Section Header & Paragraph Text
    it('Find Heading Element 6, Paragraph & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // Scrolling window to target section
        const scrollElement6 = await HomePage.scrollElement6;

        // Scroll to the target element section
        await scrollElement6.scrollIntoView();

        // find heading element
        // const headingElement6 = await $('.elementor-element-0afa3ac h3'); // Method 1

        // find heading element by using POM
        const headingElement6 = await HomePage.textHeading6; // Method 2

        // get the text
        // const headingText6 = await headingElement6.getText();

        // Assert the text
        // await expect(headingText6).toEqual('Plan & Pricing'); // Method 1 -> coming from Jest Library
        await expect(headingElement6).toHaveText("Client Reveiws"); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const textE6Paragraph = await $('.elementor-element-0afa3ac p'); // Method 1

        // find heading element by using POM
        const textE6Paragraph = await HomePage.textE6Paragraph; // Method 2

        // get the text
        // const textE6Paragraph = await textE6Paragraph.getText();

        // Assert the text
        // await expect(textE5Paragraph).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit massa condimentum enim, nisl vitae. Ultricies aliquet proin egestas donec viverra turpis luctus gravid'); // Method 1 -> coming from Jest Library
        await expect(textE6Paragraph).toHaveText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit massa condimentum enim, nisl vitae. Ultricies aliquet proin egestas donec viverra turpis luctus gravid"); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home Page Latest Posts & Articles Section Header & Paragraph Text
    it('Find Heading Element 7, Paragraph & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // Scrolling window to target section
        const scrollElement7 = await HomePage.scrollElement7;

        // Scroll to the target element section
        await scrollElement7.scrollIntoView();

        // find heading element
        // const headingElement7 = await $('.elementor-element-26a4edb h3'); // Method 1

        // find heading element by using POM
        const headingElement7 = await HomePage.textHeading7; // Method 2

        // get the text
        // const headingText7 = await headingElement7.getText();

        // Assert the text
        // await expect(headingText7).toEqual('Plan & Pricing'); // Method 1 -> coming from Jest Library
        await expect(headingElement7).toHaveText("Latest Posts & Articles"); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const textE7Paragraph = await $('.elementor-element-26a4edb p'); // Method 1

        // find heading element by using POM
        const textE7Paragraph = await HomePage.textE7Paragraph; // Method 2

        // get the text
        // const textE7Paragraph = await textE7Paragraph.getText();

        // Assert the text
        // await expect(textE7Paragraph).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit massa condimentum enim, nisl vitae. Ultricies aliquet proin egestas donec viverra turpis luctus gravid'); // Method 1 -> coming from Jest Library
        await expect(textE7Paragraph).toHaveText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, sit sed accumsan, viverra sociis ullamcorper aenean fermentum."); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });
    // Home Page Have Any Questions Section Header & Paragraph Text
    it('Find Heading Element 8, Paragraph & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // Scrolling window to target section
        const scrollElement8 = await HomePage.scrollElement8;

        // Scroll to the target element section
        await scrollElement8.scrollIntoView();

        // find heading element
        // const headingElement8 = await $('.elementor-element-26a4edb h3'); // Method 1

        // find heading element by using POM
        const headingElement8 = await HomePage.textHeading8; // Method 2

        // get the text
        // const headingText8 = await headingElement8.getText();

        // Assert the text
        // await expect(headingText7).toEqual('Plan & Pricing'); // Method 1 -> coming from Jest Library
        await expect(headingElement8).toHaveText("Have Any Questions?"); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        // const textE7Paragraph = await $('.elementor-element-26a4edb p'); // Method 1

        // find heading element by using POM
        const textE8Paragraph = await HomePage.textE8Paragraph; // Method 2

        // get the text
        // const textE7Paragraph = await textE7Paragraph.getText();

        // Assert the text
        // await expect(textE8Paragraph).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit massa condimentum enim, nisl vitae. Ultricies aliquet proin egestas donec viverra turpis luctus gravid'); // Method 1 -> coming from Jest Library
        await expect(textE8Paragraph).toHaveText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit massa condimentum enim, nisl vitae. Ultricies aliquet proin egestas donec viverra turpis luctus gravida ipsum."); // Method 2 -> wdio expect assertion

        // wait for 2 secs
        await new Promise(resolve => setTimeout(resolve, 2000));
    });






    

});

