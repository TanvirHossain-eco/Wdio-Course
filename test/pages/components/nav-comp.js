class NavComponent {
    get linksNavMenu(){
        return $$('#primary-menu li[id*=menu]');
    }

    get firstNavMenuList(){
        return $('#primary-menu li');
    }



}
// Export & Initialize the homepage class
export default new NavComponent();
// module.exports = NavComponent;
