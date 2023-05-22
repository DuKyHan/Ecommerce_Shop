import { render } from '@testing-library/react';
import { DevisLogo } from '../DevisLogo';

describe('<Logo />', () => {
  it('should match snapshot', () => {
    const logo = render(<DevisLogo />);
    expect(logo.container.firstChild).toMatchSnapshot();
  });
});
