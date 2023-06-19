// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/
describe('Home', () => {
    it('Open Url & Assert title', async() => {
        // open URL
        await browser.url('https://practice.automationbro.com/');
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    });

    it('Open About Page & Assert URL', async() => {
        // open About Page
        await browser.url('https://practice.automationbro.com/about');
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Assert URL
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
    });

    it('Click Get Started Button & Assert URL contains get-started text', async() => {
        // open About Page
        await browser.url('https://practice.automationbro.com');
        // click get started button
        await $('#get-started').click();
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Assert URL
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click Logo & Assert URL does not contain get-started text', async() => {
        // open About Page
        await browser.url('https://practice.automationbro.com');
        // click logo
        await $('//img[@alt="Practice E-Commerce Site"]').click();
        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Assert URL
        await expect(browser).not.toHaveUrlContaining('get-started');
    });

    it('Find Heading Element & Assert the text', async() => {
        // open About Page
        // await browser.url('https://practice.automationbro.com');

        // find heading element
        const headingElement = await $('.elementor-widget-container h1');

        // get the text
        const headingText = await headingElement.getText();

        // Assert the text
        // await expect(headingText).toEqual('Think different. Make different.'); // Method 1 -> coming from Jest Library
        await expect(headingElement).toHaveText('Think different. Make different.'); // Method 2 -> wdio expect assertion

        // wait for 5 secs
        await new Promise(resolve => setTimeout(resolve, 5000));
    });
});

