import { Component, Prop, EventEmitter, Event, State } from '@stencil/core';
import { CPF_LENGTH, isCPFValid, isCNPJValid } from './validation';

@Component({
  tag: 'input-cpf-cnpj',
  styleUrl: 'my-component.css',
  shadow: false
})
export class InputCpfCnpj {

  @Prop() placeholder?: string;
  @Prop() value?: string;
  @Prop() autocomplete?: string;
  @Prop() maxlength?: string;
  @Prop() minlength?: string;
  @Prop() pattern?: string;
  @Prop() size?: number;
  @Prop() required?: boolean;

  @Event() valid: EventEmitter;
  @Event() changed: EventEmitter;
  @Event() input: EventEmitter;

  @State() isValid: boolean = false;

  inputChanged(event) {
    const value: string = event.target.value.trim();
    let result;
    if (value.length <= CPF_LENGTH) {
      result = isCPFValid(value);
    } else {
      result = isCNPJValid(value);
    }
    this.valid.emit(result);
    this.isValid = result;
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
        onKeyUp={(event: UIEvent) => this.inputChanged(event)}
        onChange={event => this.changed.emit(event)}
        onInput={event => this.input.emit(event)} />
    );
  }
}
