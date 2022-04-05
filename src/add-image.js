import image from "../assets/Programmes.png"

export function addImage() {
	const img = document.createElement("img")
	img.src = image
	img.alt = "image"
	img.width = 800
	img.height = 800
	const body = document.querySelector("body")
	body.appendChild(img)
}
