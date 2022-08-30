export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._items = data;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._items.forEach(this._renderer);
    }

    addItem(element) {
        this._container.prepend(element);
    }

}