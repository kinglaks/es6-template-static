const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Lakshan Gunajothy"});
    }
    render(sPage) {
        return `
        ${this.requireMarked('_pages/index.md')}
        `;
    }
}