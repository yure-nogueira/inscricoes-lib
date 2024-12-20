import { p as proxyCustomElement, H, c as createEvent, I as InputType, h, d as Host } from './p-c5bce2c2.js';

const tpInputCss = ":host{display:block}";
const TpInputStyle0 = tpInputCss;

const TpInput$1 = /*@__PURE__*/ proxyCustomElement(class TpInput extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.didLoad = createEvent(this, "didLoad", 7);
        this.userInput = createEvent(this, "userInput", 7);
        this.label = undefined;
        this.type = InputType.Text;
        this.placeholder = undefined;
        this.outlined = undefined;
        this.startValue = undefined;
    }
    componentDidLoad() {
        this.didLoad.emit({ ref: this.el });
    }
    handleInput(event) {
        this.userInput.emit({ ref: this.el, event });
    }
    render() {
        const { label, placeholder, type, outlined, startValue } = this;
        return (h(Host, { key: '1eb16bbf4a969ecf5562e6b13600ce10bae1754e' }, outlined ? (h("md-outlined-text-field", { onInput: this.handleInput.bind(this), label: label, type: type, placeholder: placeholder, value: startValue })) : (h("md-filled-text-field", { label: label, type: type, placeholder: placeholder, value: startValue }))));
    }
    get el() { return this; }
    static get style() { return TpInputStyle0; }
}, [1, "tp-input", {
        "label": [513],
        "type": [513],
        "placeholder": [513],
        "outlined": [516],
        "startValue": [8, "start-value"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-input"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpInput$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TpInput = TpInput$1;
const defineCustomElement = defineCustomElement$1;

export { TpInput, defineCustomElement };

//# sourceMappingURL=tp-input.js.map