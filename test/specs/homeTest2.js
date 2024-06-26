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
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        dropdown.selectByVisibleText("Consultant")
        // await browser.pause(5000)

    });

    // For Selecting Dropdowns 
    it('Dynamic Dropdown Controls', async() => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        let items = await $$("[class='ui-menu-item'] div")
        for(var i =0;i<await items.length;i++){
            // console.log(await items[i].getText())
            if (await items[i].getText() === "India"){
                await items[i].click()
                // eslint-disable-next-line wdio/no-pause
                await browser.pause(3000)
            }
        }

        
    });
    // Check Boxes selection
    it('Checkboxes Identification', async() => {
        const checkboxElement = await $$("input[type='checkbox']") 
        await checkboxElement[1].click() 
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        console.log(await checkboxElement[1].isSelected())
        // console.log(await checkboxElement[2].isSelected())
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        // This is for the tracing the bugs if bugs generates continuously
        // await browser.saveScreenshot("Screenshot.png")
    });
    // Scrolling & Mouse Hover
    it('Scrolling and Mouse Hover', async() => {
        // During the scrolling If Target class or id take out of view then need to select id/class above 
        await $("div.totalAmount").scrollIntoView()
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await $("=Top").click()
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        
    });
    // Handling Alert with JS & WebdriverIO
    it('Alert Message with double click in Popup', async() => {
        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html");
        // await browser.url("http://omayo.blogspot.com/");
        // await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        // await $("button").doubleClick()
        // const buttonElement = await $("button[ondblclick='myFunction()']");
        // const buttonElement = await $('//button[@onclick="jsAlert()"]');
        // await buttonElement.moveTo()

        const buttonElement = await $("button");
        // const buttonElement = await $("//button[contains(text(),'Double click Here')]");
        // await buttonElement.scrollIntoView()
        // await buttonElement.doDoubleClick()
        await buttonElement.doubleClick()
        // await buttonElement.click().click()

        // setTimeout(function(){},3000);
        
        
        
        // await buttonElement.click()
        // eslint-disable-next-line wdio/no-pause
        // await browser.pause(3000)
        // wait for 3 secs
        // await new Promise(resolve => setTimeout(resolve, 3000));
        // await browser.execute(async() => await buttonElement.doubleClick());
        await browser.waitUntil(() => browser.isAlertOpen())

        const alertText = await browser.getAlertText()
        
        // eslint-disable-next-line wdio/no-pause
        // await browser.pause(3000)
        
        expect(alertText).toContain("You double clicked me.. Thank You..")
        // await expect(alertText).toContain("I am a JS Alert")

        // eslint-disable-next-line wdio/no-pause
        // await browser.pause(3000)

        await browser.acceptAlert()


        // // eslint-disable-next-line wdio/no-pause
        // await browser.pause(3000);
        // console.log(await browser.isAlertOpen())
        // await expect(await browser.isAlertOpen()).to.be.true
        // console.log(await browser.getAlertText())
        // await expect(await browser.getAlertText()).toEqual("You double clicked me.. Thank You..")
        // await browser.acceptAlert()
        // // eslint-disable-next-line wdio/no-pause
        // await browser.pause(3000)
        
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

    it('Web Tables Sort Validation Smoke', async() => {
        await browser.url ("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await $("tr th:nth-child(1)").click()
        // Retrieve list of veggie names into array A
        // Sort the array A -> Array B
        // Compare Array A & B // Fail
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        const veggiesLocators = await $$("tr td:nth-child(1)")
        const OriginalveggiesNames = await veggiesLocators.map(async veggie => await veggie.getText())
        console.log(OriginalveggiesNames)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        const veggies = OriginalveggiesNames.slice()
        // Array are pass by reference
        const sortedVeggies = veggies.sort()
        console.log(sortedVeggies)
        await expect(OriginalveggiesNames).toEqual(sortedVeggies)
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)



        
    });
    // Web Tables Filter
    it('Web Tables Filter Validation', async() => {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await $("input[type='search']").setValue("tomato")
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        const veggieLocator = await $$("tr td:nth-child(1)")
        await expect(veggieLocator).toBeElementsArrayOfSize({eq:1})
        console.log (await veggieLocator[0].getText())
        await expect(veggieLocator[0]).toHaveTextContaining("Tomato")

    });
    // End to End Functional Testing
    it.only('End to End Test', async() => {
        const products = ["iphone X", "Blackberry"]
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await $("input[name='username']").setValue("rahulshettyacademy")
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await $("#signInBtn").click()
        const link = await $("*=Checkout")
        await link.waitForExist()
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        const cards = await $$("div[class='card h-100']")
        for(let i =0; i<await cards.length; i++)
        {            
            const card = await cards[i].$("div h4 a")
            // console.log(await card.getText())
            if (products.includes(await card.getText()))
            {
                await cards[i].$(".card-footer button").click() 
                // eslint-disable-next-line wdio/no-pause
                await browser.pause(3000)          
            }
        }
        await link.click()
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        const productPrices = await $$("//tr/td[4]/strong")
        // String to Integer
        // .split will separate the currency icon & numbers - $. 130000 
        // and save before $. at [0] index and after $. at [1] index
        // .trim will clear any spaces at front & back
        const sumOfProducts = (await Promise.all (await productPrices.map(async (productPrice)=> parseInt((await productPrice.getText()).split(".")[1].trim())))).reduce((acc,price)=>acc+price,0) 
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        console.log(sumOfProducts)
        const totalValue = await $("h3 strong").getText()
        const totalIntValue = parseInt(totalValue.split(".")[1].trim())
        await expect(sumOfProducts).toEqual(totalIntValue)
        await $(".btn-success").click() // Click on Checkout Button
        await $("#country").setValue("ind") // Search for Country name - India
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await $(".lds-ellipsis").waitForExist({reverse:true}) // Wait until search result show India
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await $("=India").click() // Click Country name - India
        await $("input[type='submit']").click()
        
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(3000)
        await expect($(".alert-success")).toHaveTextContaining("Success")
        
    });

});


