import { render } from '@tests-utils';
import { Button } from './Button';

describe('button test', () => {
  it('correct styles', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
