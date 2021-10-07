// <div class="myClass group" id="ourId">Hello world</div>


function HtmlElement(tagName) {
    this.tagName = tagName;
    this.classList = [];
    this.id = '';
    this.content = '';

    this.addId = function (id) {
        this.id = id;
    }
    this.addClass = function (className) {
        this.classList.push(className);
    }
    this.addContent = function (content) {
        this.content = content;
    }
    this.render = function () {
        let output = `<${this.tagName} id="${this.id}" class="${this.classList.join(' ')}">${this.content}</${this.tagName}>`;
        console.log(output);
        document.querySelector('#app').innerHTML += output;
    }

    this.renderFromDOM = function () {
        const element = document.createElement(this.tagName);
        if (this.id) {
            element.id = this.id;
        }

        element.innerText = this.content;
        this.classList.forEach(className => element.classList.add(className));
        document.querySelector('#app').appendChild(element);
    }
}

class Element {
    constructor(tagName) {
        this.tagName = tagName;
        this.classList = [];
        this.id = '';
        this.content = '';
    }

    addId(id) {
        this.id = id;
    }

    addClass(className) {
        this.classList.push(className);
    }

    addContent(content) {
        this.content = content;
    }

    render() {
        let output = `<${this.tagName} ${this.id ? `id="${this.id}"` : '' } ${ this.classList.length ? `class="${this.classList.join(' ')}"` : ''}>${this.content}</${this.tagName}>`;
        console.log(output);
        document.querySelector('#app').innerHTML += output;
    }

    renderFromDOM() {
        const element = document.createElement(this.tagName);
        if (this.id) {
            element.id = this.id;
        }
        element.innerText = this.content;
        this.classList.forEach(className => element.classList.add(className));
        document.querySelector('#app').appendChild(element);
    }
}

const ele = new Element('div'); // { tagName: 'div' }
console.log(ele);
ele.addId('ourId');
console.log(ele);
ele.addClass('myClass');
console.log(ele);
ele.addClass('group');
console.log(ele);
ele.addContent('Hello world');
console.log( ele )
ele.render();
// ele.renderFromDOM();

const newEle = new Element('h1');
newEle.addContent('Hi, All');
newEle.renderFromDOM();

const para = new Element('p');
para.addId('p_1');
para.addClass('p_c_1');
para.addClass('p_c_2');
para.addClass('p_c_3');
para.addContent('The best of students are G-17');
para.render();


///

// const eleObj = {
//     tagName: 'div',
//     classList: ['firstClass', 'secondClass'],
//     id: 'myId',
//     content: 'Hello world'
// }
//
//
// const ele = document.createElement(eleObj.tagName);
// ele.id = eleObj.id;
// eleObj.classList.forEach( className => { ele.classList.add(className) } )
// ele.innerText = eleObj.content;
// document.querySelector('#app').appendChild(ele);

