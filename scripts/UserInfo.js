import { userNameInput, userJobInput} from './index.js';

export class UserInfo {
    constructor({ nameSelector, aboutSelector}) {
        this.name = document.querySelector(nameSelector);
        this.about = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        return {
            name: this.name.textContent,
            about: this.about.textContent
        };
    }

    setUserInfo({ name, about }) {
        this.name.textContent = ;
        this.about.textContent = ;
    }

    setUserNameInfo({ name, about }) {
        this.name.textContent = ;
        this.about.textContent = a;
    }
}
