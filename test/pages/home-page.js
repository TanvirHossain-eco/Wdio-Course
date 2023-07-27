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
    get scrollElement2(){
        return $('.elementor-element-71f70e6')
    }
    get textHeading2(){
        return $('.elementor-element-71f70e6 h3')
    }
    get textE2Paragraph1(){
        return $('.elementor-element-cf0dc41 p:nth-of-type(1)')
    }
    get textE2Paragraph2(){
        return $('.elementor-element-cf0dc41 p:nth-of-type(2)')
    }
    get scrollElement3(){
        return $('.elementor-element-dd6929f')
    }
    get textHeading3(){
        return $('.elementor-element-dd6929f h3')
    }
    get textE3Paragraph(){
        return $('.elementor-element-dd6929f p')
    }
    get galleryImage1(){
        return $('.elementor-element-dd6929f figure:nth-of-type(1)')
    }
    get galleryImageClose(){
        return $('.dialog-close-button')
    }

    get NavComponent(){
        return NavComponent;
    }
    // get FeatureImage1(){
    //     return $('.wp-image-88');
    // }
}

// Export & Initialize the homepage class
export default new HomePage();
// module.exports = HomePage;