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
    get textHeadingParagraph(){
        return $('.elementor-element-db85304 p');
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
    get scrollElement4(){
        return $('.elementor-element-32d26c0')
    }
    get textHeading4(){
        return $('.elementor-element-32d26c0 h3')
    }
    get textE4Paragraph(){
        return $('.elementor-element-32d26c0 p')
    }
    get scrollElement5(){
        return $('.elementor-element-66e793f')
    }
    get textHeading5(){
        return $('.elementor-element-66e793f h3')
    }
    get textE5Paragraph(){
        return $('.elementor-element-66e793f p')
    }
    get scrollElement6(){
        return $('.elementor-element-0afa3ac')
    }
    get textHeading6(){
        return $('.elementor-element-0afa3ac h3')
    }
    get textE6Paragraph(){
        return $('.elementor-element-0afa3ac p')
    }
    get scrollElement7(){
        return $('.elementor-element-26a4edb')
    }
    get textHeading7(){
        return $('.elementor-element-26a4edb h3')
    }
    get textE7Paragraph(){
        return $('.elementor-element-26a4edb p')
    }
    get scrollElement8(){
        return $('.elementor-element-9f81a2d')
    }
    get textHeading8(){
        return $('.elementor-element-9f81a2d h3')
    }
    get textE8Paragraph(){
        return $('.elementor-element-9f81a2d p')
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