// New Class created
class BlogPage{
    open(){
        return browser.url ('/blog');
    }

    get listRecentPosts(){
        return $$('#recent-posts-3 ul li');
    }

}
// Export & Initialize the Blog page class
export default new BlogPage();