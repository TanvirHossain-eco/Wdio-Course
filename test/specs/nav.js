describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async() => {
        // Different waiting code & not need use await & good use for if loading time very much slow
        // browser.pause(1000); 
        // browser.url('/');
         
        // web application launching with base url
        await browser.url('/');

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
        const navLinks = await $$('#primary-menu li[id*=menu]'); // Method2 return all elements at the same time

        // For each time pushing the actual link text that will be get
        for (const link of navLinks){
            actualLinks.push (await link.getText());
        }

        // matching the expected links with actual links
        await expect (expectedLinks).toEqual(actualLinks);

    });
});