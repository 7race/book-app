import { render } from '@tests-utils';
import { Button } from '@atoms/Button';

describe('btn', () => {
  it('render btn', () => {
    render(<Button>Click</Button>);
    const { container } = render(<Button>Click</Button>);
    expect(container).toBeInTheDocument();
  });
});
