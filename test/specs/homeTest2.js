// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/
// describe('Home', () => {
//     it('Open Url & assert title', async() => {
//         // open URL
//         await browser.url('https://practice.automationbro.com/');
//         // await new Promise(resolve => setTimeout(resolve, 5000));

//         // Assert title
//         await expect(browser).toHaveTitle('Practice A-Commerce Site – Automation Bro');
//     });

//     // it('Open Url & assert title', () => {
//     //     // open URL
//     //     browser.url('https://www.facebook.com/');
//     //     // await new Promise(resolve => setTimeout(resolve, 5000));

//     //     // Assert title
//     //     expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');

//         // Different waiting code & not need use await & good use for if loading time very much slow
//         // browser.pause(1000); 
//         browser.url('/');



//     // });
// });
// const expectchai = require('chai').expect
describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them - using the wait command', async() => {
        // Different waiting code & not need use await & good use for if loading time very much slow
        // browser.pause(1000); 
        browser.url('/');
         
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
            const homeText = await $('#primary-menu li').getText(); // Home
            return homeText === "Home"; // Return True or False (True)
            // return homeText === "Shop"; // Return True or False (False)
        }, {
            timeout : 5000, // Wait for 5 secs
            timeoutMsg : 'Could not verify the home text from #primary-menu li' // Verify with Message
        });


        // Wait until the navLinks elements is displayed
        // await $('#primary-menu').waitForDisplayed();
        //  wait for 1000 ms seconds or provide a customized time
        await $('#primary-menu').waitForDisplayed({ timeout: 1000 });
        // await $('#primary-menu .menu-item.tg-header-button-wrap').waitForDisplayed({ timeout: 1000 });

        // Wait until the navLinks elements list is clickable        
        // await $('#primary-menu li').waitForClickable();
        //  wait for 1000 ms seconds or provide a customized time
        await $('#primary-menu').waitForClickable({ timeout: 1000 });

        

        // chaining $ with $$
        // It will go to the primary menu (unordered list) then find the first menu items (list order)
        // it will give the all the list items on the nodes
        // const navLinks = await $('#primary-menu').$$('li[id*=menu]'); // Method1 One element then another
        const navLinks = await $$('#primary-menu li[id*=menu]'); // Method2 return all elements at the same time

        // For each time pushing the actual link text that will be get
        for (const link of navLinks){
            actualLinks.push (await link.getText());
        }

        // matching the expected links with actual links
        await expect (expectedLinks).toEqual(actualLinks);

    });
    // From Second Course
    // For selecting the Radio buttons
    it('UI controls', async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        // await $("#signInBtn").click()
        // // wait until checkout button is displayed
        // await $(".btn-primary").waitForExist()
        // await expect(browser).toHaveUrlContaining("shop")
        // await expect(browser).toHaveTitle("ProtoCommerce")
        const radioButtons = await $$(".customradio")
        const userDropdown = radioButtons[1]
        await userDropdown.$("span").click()
        const modal = await $(".modal-body")
        await modal.waitForDisplayed()
        await $("#cancelBtn").click()
        console.log(await $$(".customradio")[0].$("span").isSelected())
        await userDropdown.$("span").click()
        await modal.waitForDisplayed()
        await $("#okayBtn").click()
        // validate pop up not shown up when you select admin
        await $$(".customradio")[0].$("span").click()
        await expect (modal).not.toBeDisabled()
        const dropdown = await $("select.form-control")
        dropdown.selectByAttribute('value', 'teach')
        await browser.pause(3000)
        dropdown.selectByVisibleText("Consultant")
        // await browser.pause(5000)

    });

    // For Selecting Dropdowns 
    it.only('Dynamic Dropdown Controls', async() => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        let items = await $$("[class='ui-menu-item'] div")
        for(var i =0;i<await items.length;i++){
            // console.log(await items[i].getText())
            if (await items[i].getText() === "India"){
                await items[i].click()
                await browser.pause(3000)
            }
        }

        
    });
    // Check Boxes selection
    it.only('Checkboxes Identification', async() => {
        const checkboxElement = await $$("input[type='checkbox']") 
        await checkboxElement[1].click() 
        await browser.pause(3000)
        console.log(await checkboxElement[1].isSelected())
        // console.log(await checkboxElement[2].isSelected())
        await browser.pause(3000)
        // This is for the tracing the bugs if bugs generates continuously
        // await browser.saveScreenshot("Screenshot.png")
    });
    // Scrolling & Mouse Hover
    it.only('Scrolling and Mouse Hover', async() => {
        // During the scrolling If Target class or id take out of view then need to select id/class above 
        await $("div.totalAmount").scrollIntoView()
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(3000)
        await $("=Top").click()
        await browser.pause(3000)
        
    });
    // Handling Alert with JS & WebdriverIO
    it.only('Alert Message with double click in Popup', async() => {
        browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html");
        // await $("button").doubleClick()
        const buttonElement = await $('button[ondblclick="myFunction()"]');
        await buttonElement.doubleClick();
        await browser.pause(3000);
        console.log(await browser.isAlertOpen())
        await expect(await browser.isAlertOpen()).to.be.true
        console.log(await browser.getAlertText())
        await expect(await browser.getAlertText()).toEqual("You double clicked me.. Thank You..")
        await browser.acceptAlert()
        await browser.pause(3000)
        
        // const isAlertOpen = browser.waitUntil.isAlert();
        // expect(buttonElement).toBeDisplayed();
        // // await browser.pause(1000);
        // const alertText = browser.getAlertText();
        // console.log("Alert Text: ", alertText);
        // expect(alertText).toEqual("You double clicked me.. Thank You..")
        // browser.pause(3000);
        // browser.acceptAlert();


        // const alertMesg = await browser.isAlertOpen()
        // console.log(alertMesg)
        // expect(alertMesg).to.be.true 
        // const alertTextMsg = await browser.getAlertText()
        // console.log("Alert Text: ", alertTextMsg)
        // await browser.pause(3000)
        // await browser.acceptAlert()
        // await browser.isAlertOpen()
        // await browser.pause(3000)
        // (await browser.isAlertOpen())
        // await browser.pause(3000)
        // expect(await browser.getAlertText()).toEqual("You double clicked me.. Thank You..")
        // await browser.pause(3000)
        // await browser.acceptAlert()

        
    });
});


