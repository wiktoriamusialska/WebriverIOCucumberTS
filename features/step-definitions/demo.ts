import { Given, When} from '@wdio/cucumber-framework';
Given(/^A web page is opened$/,async function(){
    //Inputbox
    //await browser.url("https://the-internet.herokuapp.com/inputs");
    //Dropdown
    //await browser.url("https://the-internet.herokuapp.com/dropdown");
    //Checkbox
    //await browser.url("https://the-internet.herokuapp.com/checkboxes");
    //Windows
    //await browser.url("https://the-internet.herokuapp.com/windows");
    //file upload
    //
    //scroll into
    await browser.url("https://www.amazon.com.au/");
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
    /*let eleArr= await $$(`select > option`);
    let arr= [];
    for (let i=0; i<await eleArr.length;i++){
        let ele=eleArr[i];
        let val = await ele.getText();
        arr.push(val);
    }
    console.log(`>>Option Array: |${arr}|`);
    */

    //Checkbox -select one option

   /*let ele = await $('//form[@id="checkboxes"]/input[1]');
    if (!await ele.isSelected()){
        await ele.click();
    } */

    /*
    //windows -open new windows
    await $(`=Click Here`).click();
    await $(`=Elemental Selenium`).click();
    let currentWinTitle = await browser.getTitle();
    let parrentWinHandle = await browser.getWindowHandle();
    console.log (`>> currentWinTitle: ${currentWinTitle}`);

    //switch to specific window
    let winHandles = await browser.getWindowHandles();
    for (let i=0; i<winHandles.length;i++){
        console.log(`>>Win Handle: ${winHandles[i]}`);
        await browser.switchToWindow(winHandles[i]);
        currentWinTitle = await browser.getTitle();
        if (currentWinTitle === "A free, once-weekly e-mail on how to do test automation like a Pro"){
            await browser.switchToWindow(winHandles[i]);
            let headerTxtEleSel = await $(`<h1>`).getTitle();
            console.log(`>> headerTxtEleSel: ${headerTxtEleSel}`);
            break;
        }
    }

    //Switch back to parent window
    await browser.switchToWindow(parrentWinHandle);
    let parrentWinHeaderTxt = await $(`<h3>`).getTitle();
    console.log(`>>parentWinHeaderTxt: ${parrentWinHeaderTxt}`);

   */
    /*
    //frames
    await $(`#file-upload`).addValue(`${process.cwd()}/features/data/dummy.txt`);
    await $('#file-submit').click();
   */

    //scroll into view
    await $('span=Shop Big Smile Sale').scrollIntoView();
    //await browser.debug();
})