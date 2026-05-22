const {expect} = require('@playwright/test');
const{LoginPage}=require('./LoginPage');
class configuratorpage{
    constructor(page){
        this.page=page;
        this.configuratorLink=page.locator("//a[normalize-space()='3D Configurator']");
        this.hockeyassport=page.locator("//h5[normalize-space()='hockey']");
        this.chooseproduct=page.locator("//section[@class='AllMainProducts selectModel']//a[1]//figure[1]//img[1]");
        this.choosecolor=page.locator("(//img[@class='lazyImage'])[8]");
        this.customizebutton=page.locator("//a[normalize-space()='Customize']");
        this.maincolortab=page.locator("//a[@id='main-colors-tab']");
        this.coloroption=page.locator("//label[contains(@class,'svgColor1')]//img");
        this.whitecolor=page.locator("(//div[contains(@aria-label,'WHITE')])[1]");
        this.shufflebutton=page.locator(".ShuffelColors");
        this.uploadlogo=page.locator("//span[@type='button']");
        this.applylogo=page.locator("#applyLogoButton");
        this.nextbutton=page.locator("//a[normalize-space()='Next']");

     }

    }
