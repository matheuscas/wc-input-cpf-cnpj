import { Component, Prop, EventEmitter, Event } from '@stencil/core';
import { CPF_LENGTH, isCPFValid, isCNPJValid } from './validation';

@Component({
  tag: 'input-cpf-cnpj',
  styleUrl: 'my-component.css',
  shadow: false
})
export class InputCpfCnpj {

  @Prop() placeholder?: string;
  @Prop({mutable: true}) value?: string;
  @Prop() autocomplete?: string;
  @Prop() maxlength?: string;
  @Prop() minlength?: string;
  @Prop() pattern?: string;
  @Prop() size?: number;
  @Prop() required?: boolean;
  @Prop() classes?: string;

  @Event() valid: EventEmitter;
  @Event() changed: EventEmitter;
  @Event() input: EventEmitter;

  inputChanged(event) {
    const value: string = event.target.value.trim();
    let cleannedValue = this.removeAnySpaces(value)
    cleannedValue = this.removePunctuation(cleannedValue)
    let result;
    if (cleannedValue.length <= CPF_LENGTH) {
      this.value = this.applyCPFMask(cleannedValue)
      result = isCPFValid(cleannedValue);
    } else {
      this.value = this.applyCNPJMask(cleannedValue)
      result = isCNPJValid(cleannedValue);
    }
    this.valid.emit(result);
  }

  removePunctuation(value){
    return value.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
  }

  removeAnySpaces(value) {
    return value.replace(/ +?/g, '');
  }

  applyCPFMask(value) {
    const firstPart = value.replace(/^(\d{3})/, '$1.');
    const secondPart = firstPart.replace(/^(\d{3}.)(\d{3})/, '$1$2.');
    const thirdPart = secondPart.replace(/^(\d{3}.)(\d{3}.)(\d{3})/, '$1$2$3-');
    return thirdPart
  }

  applyCNPJMask(value) {
    const firstPart = value.replace(/^(\d{2})/, '$1.');
    const secondPart = firstPart.replace(/^(\d{2}.)(\d{3})/, '$1$2.');
    const thirdPart = secondPart.replace(/^(\d{2}.)(\d{3}.)(\d{3})/, '$1$2$3/');
    const fourthPart = thirdPart.replace(/^(\d{2}.)(\d{3}.)(\d{3}\/)(\d{4})/, '$1$2$3$4-');
    return fourthPart
  }

  render() {
    return (
      <input type="text"
        value={this.value}
        autocomplete={this.autocomplete}
        maxlength={this.maxlength}
        minlength={this.minlength}
        pattern={this.pattern}
        placeholder={this.placeholder}
        size={this.size}
        required={this.required}
        class={this.classes}
        onKeyUp={(event: UIEvent) => this.inputChanged(event)}
        onChange={event => this.changed.emit(event)}
        onInput={event => this.input.emit(event)} />
    );
  }
}
