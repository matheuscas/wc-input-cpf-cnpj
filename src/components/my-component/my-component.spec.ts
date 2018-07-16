import { TestWindow } from '@stencil/core/testing';
import { InputCpfCnpj } from './my-component';

describe('input-cpf-cnpj', () => {
  it('should build', () => {
    expect(new InputCpfCnpj()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLInputCpfCnpjElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [InputCpfCnpj],
        html: '<input-cpf-cnpj></input-cpf-cnpj>'
      });
    });

    it('should work without placeholder', async () => {
      await testWindow.flush();
      expect(element.placeholder).toBeUndefined();
    });

    it('should work with placeholder', async () => {
      const placeholder = "02441251554";
      element.placeholder = placeholder;
      await testWindow.flush();
      expect(element.placeholder).toEqual(placeholder);
    });
  });
});
