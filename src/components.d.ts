/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface InputCpfCnpj {
      'autocomplete': string;
      'classes': string;
      'maxlength': string;
      'minlength': string;
      'pattern': string;
      'placeholder': string;
      'required': boolean;
      'size': number;
      'value': string;
    }
  }

  interface HTMLInputCpfCnpjElement extends StencilComponents.InputCpfCnpj, HTMLStencilElement {}

  var HTMLInputCpfCnpjElement: {
    prototype: HTMLInputCpfCnpjElement;
    new (): HTMLInputCpfCnpjElement;
  };
  interface HTMLElementTagNameMap {
    'input-cpf-cnpj': HTMLInputCpfCnpjElement;
  }
  interface ElementTagNameMap {
    'input-cpf-cnpj': HTMLInputCpfCnpjElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'input-cpf-cnpj': JSXElements.InputCpfCnpjAttributes;
    }
  }
  namespace JSXElements {
    export interface InputCpfCnpjAttributes extends HTMLAttributes {
      'autocomplete'?: string;
      'classes'?: string;
      'maxlength'?: string;
      'minlength'?: string;
      'onChanged'?: (event: CustomEvent) => void;
      'onInput'?: (event: CustomEvent) => void;
      'onValid'?: (event: CustomEvent) => void;
      'pattern'?: string;
      'placeholder'?: string;
      'required'?: boolean;
      'size'?: number;
      'value'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;