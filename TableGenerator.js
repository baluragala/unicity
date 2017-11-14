class TableGenerator {
    constructor(data, title) {
        this.data = data;
        this.title = title;
    }

    getHeaders() {
        let headings = Object.keys(this.data[0]);
        let cols = headings.map(h => `<td>${h}</td>`);
        return `<tr>${cols.join('')}</tr>`
    }

    makeDataRow(row) {
        let cols = [];
        for (let v in row) {
            cols.push(`<td>${row[v]}</td>`)
        }
        return `<tr>${cols.join('')}</tr>`;
    }

    render() {
        let header = this.getHeaders();
        let body = [];
        for (let row of data) {
            body.push(this.makeDataRow(row))
        }
        let bodyMarkup = body.join('');
        let table = `<table>${header}${bodyMarkup}</table>`;
        document.body.innerHTML = table;
    }
}

let data = [
    {title: 'iphone', price: 2000, qty: 30},
    {title: 'iphone', price: 2000, qty: 30},
    {title: 'iphone', price: 2000, qty: 30}
];
let table = new TableGenerator(data, 'products');
table.render();