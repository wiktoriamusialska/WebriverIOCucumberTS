import { Given, When} from '@wdio/cucumber-framework';

Given(/^A web page is opened$/,async function(){
    await browser.url("https://the-internet.herokuapp.com/inputs");
    await browser.setTimeout({implicit:15000, pageLoad:1000});
    await browser.maximizeWindow();
})

When(/^Perform web interactions$/, async function () {
    let num=12345;
    let strNum = num.toString();
    let ele = await $('[type=number]');
    //await ele.setValue(strNum);
    await ele.click();

    for (let i=0; i<strNum.length;i++){
        let charStr = strNum.charAt(i);
        await browser.pause(1000);
        await browser.keys(charStr);    
    }
    //await browser.debug();
})