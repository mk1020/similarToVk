import "normalize.css";
import "./style.css"

document.addEventListener("mousedown", mouseDownHandler)

const mouseDownHandler = (e: MouseEvent) => {
  if (e.target instanceof Element) {
    if (e.target.className.includes("searchBlock")) {
      console.log(e.target.getElementsByClassName("searchBlock"));
    }
  }
}
