describe('Blog', () => {
    it('Get the list of all recent posts & assert the length of the each list items > 1 & assert the total count of gross', async() => {
        // open URL
        await browser.url('/blog');

        // Get the Recent Post List Elements
        const recentPostsList = await $$('#recent-posts-3 ul li');

        // Loop through the list ans assert the text length is greater than 10
        for (const item of recentPostsList){
            const text = await item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        // Assert the total length of the list is 4
        await expect (recentPostsList).toHaveLength(5);
        
    });
});