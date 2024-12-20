'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d085dac.js');
const enums_utils = require('./enums.utils-fc2bbc27.js');

const tpInputCss = ":host{display:block}";
const TpInputStyle0 = tpInputCss;

const TpInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.didLoad = index.createEvent(this, "didLoad", 7);
        this.userInput = index.createEvent(this, "userInput", 7);
        this.label = undefined;
        this.type = enums_utils.InputType.Text;
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
        return (index.h(index.Host, { key: '1eb16bbf4a969ecf5562e6b13600ce10bae1754e' }, outlined ? (index.h("md-outlined-text-field", { onInput: this.handleInput.bind(this), label: label, type: type, placeholder: placeholder, value: startValue })) : (index.h("md-filled-text-field", { label: label, type: type, placeholder: placeholder, value: startValue }))));
    }
    get el() { return index.getElement(this); }
};
TpInput.style = TpInputStyle0;

exports.tp_input = TpInput;

//# sourceMappingURL=tp-input.cjs.entry.js.map