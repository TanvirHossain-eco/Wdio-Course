// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/
// Import Home Page class here

import HomePage from "../pages/home-page";
// const HomePage = require('../pages/home-page');
// let homepage = new HomePage;
// console.log(HomePage, x);

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

    it('Open Url & Assert title', async() => {
        // open Home Page URL by using await & directly
        // await browser.url('/'); //Method 1

        // Open Home page URL by calling Page Object Model (POM)
        // await HomePage.open(); //Method 2
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    it('Open About Page & Assert URL', async() => {
        // open About Page
        await browser.url('https://practice.automationbro.com/about');
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Assert URL
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about');
    });

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

    it('Click Logo & Assert URL does not contain get-started text', async() => {
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
});

