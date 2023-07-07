// New Class created
// Import Nav Components on Home-Page.js
// const NavComponent = require('./components/nav-comp');
// let navComp = new NavComponent;

import NavComponent from "./components/nav-comp";

class HomePage{
    open(){
        return browser.url('/');
    }
    get btnGetStarted(){
        return $('#get-started');
    }

    get imageLogo(){
        return $('//img[@alt="Practice E-Commerce Site"]');
    }

    get textHeading(){
        return $('.elementor-widget-container h1');
    }

    get NavComponent(){
        return NavComponent;
    }
}

// Export & Initialize the homepage class
export default new HomePage();
// module.exports = HomePage;