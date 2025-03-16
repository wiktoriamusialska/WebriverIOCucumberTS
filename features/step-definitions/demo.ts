import { Given, When} from '@wdio/cucumber-framework';
Given(/^A web page is opened$/,async function(){
    //Inputbox
    //await browser.url("https://the-internet.herokuapp.com/inputs");
    //Dropdown
    await browser.url("https://the-internet.herokuapp.com/dropdown");
    await browser.setTimeout({implicit:15000, pageLoad:1000});
    await browser.maximizeWindow();
})

When(/^Perform web interactions$/, async function () {
    /*
    //Inputbox
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
    */

    /*
    //Dropdown - one option
    let ddEle =await $('#dropdown');
    //await ddEle.selectByVisibleText("Option 2")
    //await ddEle.selectByAttribute("value","1");
    await ddEle.selectByIndex(2); */

    //Dropdown - list of option
    let eleArr= await $$(`select > option`);
    let arr= [];
    for (let i=0; i<await eleArr.length;i++){
        let ele=eleArr[i];
        let val = await ele.getText();
        arr.push(val);
    }
    console.log(`>>Option Array: |${arr}|`);
    //await browser.debug(); 

})