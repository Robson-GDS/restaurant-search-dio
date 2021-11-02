import { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';

import { Container, Search } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo do restaurante" />
        <TextField
          outlined
          label="Pesquisar"
          // trailingIcon={<MaterialIcon role="button" icon="search" />}
        >
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
      </Search>
    </Container>
  )
};

export default Home;