import "./ms-button.scss"

export class MsButton {
	buttonClass = "ms-button"
	render() {
		const button = document.createElement("button")
		button.innerHTML = "MsButton"
		button.classList.add(this.buttonClass)
		button.onclick = () => {
			alert("我被点击了！")
		}
		const body = document.querySelector("body")
		body.appendChild(button)
	}
}
