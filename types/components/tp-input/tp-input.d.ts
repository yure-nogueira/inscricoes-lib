import '@material/web/textfield/filled-text-field';
import '@material/web/textfield/outlined-text-field';
import { EventEmitter } from '../../stencil-public-runtime';
import { InputType } from './utils/enums.utils';
export declare class TpInput {
    el: HTMLTpInputElement;
    label: string;
    type: InputType;
    placeholder: string;
    outlined: boolean;
    startValue: any;
    didLoad: EventEmitter<{
        ref: HTMLTpInputElement;
    }>;
    userInput: EventEmitter<{
        ref: HTMLTpInputElement;
        event: InputEvent;
    }>;
    componentDidLoad(): void;
    handleInput(event: InputEvent): void;
    render(): any;
}
