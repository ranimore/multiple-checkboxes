import { MultipleCheckboxesModule } from './multiple-checkboxes.module';

describe('MultipleCheckboxesModule', () => {
  let multipleCheckboxesModule: MultipleCheckboxesModule;

  beforeEach(() => {
    multipleCheckboxesModule = new MultipleCheckboxesModule();
  });

  it('should create an instance', () => {
    expect(multipleCheckboxesModule).toBeTruthy();
  });
});
