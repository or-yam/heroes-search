import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';

describe('<CardsList />', () => {
  it('should render list of cards', () => {
    const heroesList = [
      {
        id: 1,
        name: 'A-Bomb',
        biography: {
          publisher: 'DC'
        },
        images: {
          md: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg'
        }
      }
    ];
    render(<CardsList heroes={heroesList} />);

    expect(screen.getAllByTestId('hero-card')).toHaveLength(heroesList.length);
  });

  it('should render empty message', () => {
    render(<CardsList list={[]} />);

    expect(screen.getByTestId('empty-message').textContent).toBe("Couldn't find heroes");
  });
});
