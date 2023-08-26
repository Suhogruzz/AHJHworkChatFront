export default class InnerLogin {
  #element;
  constructor(element) {
    this.#element = element;
    this.ws = null;
  }

  static get markup() {
    return `
        <form name="nickname">
            <p class="title">Выберите псевдоним</p>
            <input type="text" class="input-nickname invisible" name="input-nickname" minlength="6" maxlength="30" placeholder="Enter your nickname" required>
            <div class="button">Продолжить</div>
        </form>
        `;
  }

  bindToDom() {
    this.#element.insertAdjacentHTML("afterbegin", InnerLogin.markup);
    this.form = document.forms.nickname;
    this.input = this.form.elements["input-nickname"];
    this.button = document.querySelector(".button");
    
    this.input.addEventListener("focus", this.onFocus);
  }

  formVision() {
    this.form.classList.toggle("invisible");
  }
}
