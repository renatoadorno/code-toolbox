import { styled } from '../../stitches.config';

export const Container = styled('div', {
  backgroundColor: '$purple1',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Title = styled('h1', {
  color: '$purple12',
});

export const Button = styled('button', {
  backgroundColor: '$purple3',
  color: '$purple11',
  border: 'none',
  borderRadius: 10,
  margin: 15,
  padding: 5,
  size: 48,

  '&:hover': {
    backgroundColor: '$purple4',
    color: '$purple12',
  },

  '& svg': {
    size: 32,
    marginTop: '2px',
  },
});