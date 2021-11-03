import Slider from 'react-slick';
import { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeigth: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            outlined
            label="Pesquisar Restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Slider {...settings}>
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
          </Slider>
        </Search>
      </Container>
      <Map />
    </Wrapper>
    
  )
};

export default Home;