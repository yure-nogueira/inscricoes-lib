import type { Components, JSX } from "../types/components";

interface TpInput extends Components.TpInput, HTMLElement {}
export const TpInput: {
    prototype: TpInput;
    new (): TpInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
