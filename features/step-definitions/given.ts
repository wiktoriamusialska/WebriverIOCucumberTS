import {Given} from "@cucumber/cucumber";

Given(/^Login to inventory web app$/, async function(){
await browser.url("https://www.saucedemo.com");
await browser.setTimeout({implicit:15000, pageLoad:1000});
await browser.maximizeWindow();

await $(`#user-name`).setValue("standard_user");
await $(`#password`).setValue("secret_sauce");
await $(`#login-button`).click();
})