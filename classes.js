class UI {
    constructor(width, height, content) {
        this.width = width;
        this.height = height;
        this.content = content;
    }

    render() {
        document.body.innerHTML = this.content;
    }
}

const homeScreen = new UI(200, 300, `<h1>Home Screen</h1>`);
homeScreen.render();