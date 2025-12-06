export class LoginPage {
    #username;
    #password;
    #loginBtn;
    #warningMsg;

    constructor(page) {
        this.page = page;
        this.#username = page.locator(`#input-email`);
        this.#password = page.locator(`#input-password`);
        this.#loginBtn = page.locator(`//input[@type='submit']`);
        this.#warningMsg = page.locator(`.alert.alert-danger.alert-dismissible`);
    }

    async launchApp(baseURL) {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }

    async doLogin(username, password) {
        await this.#username.fill(username);
        await this.#password.fill(password);
        await this.#loginBtn.click();
        const title = await this.page.title();
        console.log(`My Accounts page title: ${title}`);
        return title;
    }

    async invalidUserLogin(username, password) {
        await this.#username.fill(username);
        await this.#password.fill(password)
        await this.#loginBtn.click();
        const warningMsg = await this.#warningMsg.innerText();
        console.log(`Login failed warning: ${warningMsg}`);
        return warningMsg;

    }

}