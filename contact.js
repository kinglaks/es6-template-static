const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Contact", sName:"Lakshan Gunajothy"});
    }
    render(sPage) {
        return `
        ${this.requireMarked('_pages/contact.md')}
        <form action="https://shrouded-river-57828.herokuapp.com/send/" method="POST">
            <div class="form-group">
                <!-- give inputs the class form-control -->
                <label>Name: <input name="name" placeholder="name" class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Email:<input name="email" placeholder="email" type="email" class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Phone Number:<input name="phone" placeholder="telephone" type="tel"
                        class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Message:<textarea name="message" placeholder="type your message here"
                        class="form-control"></textarea></label>
            </div>
            <button type="submit">Send Message</button>

        </form>
        `;
    }
}