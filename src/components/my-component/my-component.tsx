import { Component, Prop, EventEmitter, Event, State} from '@stencil/core';
import { CPF_LENGTH, isCPFValid, isCNPJValid } from './validation';

@Component({
  tag: 'input-cpf-cnpj',
  styleUrl: 'my-component.css',
  shadow: true
})
export class InputCpfCnpj {

  @Prop() placeholder?: string;
  @Event() isValid: EventEmitter;
  @State() valid: boolean = false;

  inputChanged(event) {
    const value: string = event.target.value.trim();
    let result;
    if (value.length <= CPF_LENGTH){
      result = isCPFValid(value);
    }else{
      result = isCNPJValid(value);
    }
    console.log('input changed: ', value, result);
    this.isValid.emit(result);
    this.valid = result;
  }

  render() {
    return (
      <input type="text" placeholder={this.placeholder} onKeyUp={(event: UIEvent) => this.inputChanged(event)}/>
    );
  }


}
