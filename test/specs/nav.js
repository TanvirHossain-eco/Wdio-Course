
import HomePage from "../pages/home-page";
// const HomePage = require('../pages/home-page');
// let homepage = new HomePage;

describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async() => {
        // Different waiting code & not need use await & good use for if loading time very much slow
        // browser.pause(1000); 
        // browser.url('/');
         
       // open Home Page URL by using await & directly
        // await browser.url('/'); //Method 1

        // Open Home page URL by calling Page Object Model (POM)
        await HomePage.open(); //Method 2

        // expected links list
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",

        ];
        // array variables for storing the actual links that will be get later
        const actualLinks = [];

        // chaining $ with $$
        // It will go to the primary menu (unordered list) then find the first menu items (list order)
        // it will give the all the list items on the nodes
        // const navLinks = await $('#primary-menu').$$('li[id*=menu]'); // Method1 One element then another
        // const navLinks = await $$('#primary-menu li[id*=menu]'); // Method2 return all elements at the same time

        
        const navLinks = await HomePage.NavComponent.linksNavMenu; // Method 3 by using POM

        // For each time pushing the actual link text that will be get
        for (const link of navLinks){
            actualLinks.push (await link.getText());
        }

        // matching the expected links with actual links
        await expect (expectedLinks).toEqual(actualLinks);

    });

    it.only('Get the text of all menu items & assert them - using the wait command', async() => {
        // Different waiting code & not need use await & good use for if loading time very much slow
        // browser.pause(1000); 
        // browser.url('/');
         // Open Home page URL by calling Page Object Model (POM)
        await HomePage.open(); //Method 2
         
        // web application launching with base url
        // await browser.url('/');

        // expected links list
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",

        ];
        // array variables for storing the actual links that will be get later
        const actualLinks = [];


        // Wait until command
        // wait until the home text is displayed on the navigation menu
        await browser.waitUntil(async function(){
            // const homeText = await $('#primary-menu li').getText(); // Home Method 1
            
            const homeText = await HomePage.NavComponent.firstNavMenuList.getText(); // Method 2 by using POM
            return homeText === "Home"; // Return True or False (True)
            // return homeText === "Shop"; // Return True or False (False - Shop)
        }, {
            timeout : 5000, // Wait for 5 secs
            timeoutMsg : 'Could not verify the home text from #primary-menu li' // Verify with Message
        });


        // Wait until the navLinks elements is displayed
        // await $('#primary-menu').waitForDisplayed();
        //  wait for 1000 ms seconds or provide a customized time
        // await $('#primary-menu').waitForDisplayed({ timeout: 1000 });
        // await $('#primary-menu .menu-item.tg-header-button-wrap').waitForDisplayed({ timeout: 1000 });

        // Wait until the navLinks elements list is clickable        
        // await $('#primary-menu li').waitForClickable();
        //  wait for 1000 ms seconds or provide a customized time
        // await $('#primary-menu').waitForClickable({ timeout: 1000 });

        

        // chaining $ with $$
        // It will go to the primary menu (unordered list) then find the first menu items (list order)
        // it will give the all the list items on the nodes
        // const navLinks = await $('#primary-menu').$$('li[id*=menu]'); // Method1 One element then another
        // const navLinks = await $$('#primary-menu li[id*=menu]'); // Method2 return all elements at the same time

        const navLinks = await HomePage.NavComponent.linksNavMenu; // Method 3 by using POM

        // For each time pushing the actual link text that will be get
        for (const link of navLinks){
            actualLinks.push (await link.getText());
        }

        // matching the expected links with actual links
        await expect (actualLinks).toEqual(expectedLinks);
        // await expect (expectedLinks).toEqual(actualLinks);

    });
});