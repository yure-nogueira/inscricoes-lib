import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-d5a71da1.js';
import { I as InputType } from './enums.utils-a203c3a0.js';

const tpInputCss = ":host{display:block}";
const TpInputStyle0 = tpInputCss;

const TpInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};
TpInput.style = TpInputStyle0;

export { TpInput as tp_input };

//# sourceMappingURL=tp-input.entry.js.map