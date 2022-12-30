import { light } from './index';
import { Container, Title, Button} from './example.stitches';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from './index';
export default function Example() {
  const {theme, changeTheme} = useTheme();

  return (
    <Container className={ theme }>
      <Title>
        {theme === light ? 'Light' : 'Dark'} Mode
      </Title>
      <Button onClick={ changeTheme }>
        {theme === light ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </Button>
    </Container>
  );
}