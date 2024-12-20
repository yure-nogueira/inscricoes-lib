import "@material/web/textfield/filled-text-field";
import "@material/web/textfield/outlined-text-field";
import { Host, h } from "@stencil/core";
import { InputType } from "./utils/enums.utils";
export class TpInput {
    constructor() {
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
    static get is() { return "tp-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tp-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tp-input.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputType",
                    "resolved": "InputType.Email | InputType.Number | InputType.Password | InputType.Search | InputType.Tel | InputType.Text | InputType.Textarea | InputType.Url",
                    "references": {
                        "InputType": {
                            "location": "import",
                            "path": "./utils/enums.utils",
                            "id": "src/components/tp-input/utils/enums.utils.ts::InputType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "InputType.Text"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": true
            },
            "outlined": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "outlined",
                "reflect": true
            },
            "startValue": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "start-value",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "didLoad",
                "name": "didLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ ref: HTMLTpInputElement }",
                    "resolved": "{ ref: HTMLTpInputElement; }",
                    "references": {
                        "HTMLTpInputElement": {
                            "location": "global",
                            "id": "global::HTMLTpInputElement"
                        }
                    }
                }
            }, {
                "method": "userInput",
                "name": "userInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ ref: HTMLTpInputElement; event: InputEvent }",
                    "resolved": "{ ref: HTMLTpInputElement; event: InputEvent; }",
                    "references": {
                        "HTMLTpInputElement": {
                            "location": "global",
                            "id": "global::HTMLTpInputElement"
                        },
                        "InputEvent": {
                            "location": "global",
                            "id": "global::InputEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=tp-input.js.map
