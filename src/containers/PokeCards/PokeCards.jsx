import React, { useEffect } from 'react';
import { Card, Modal, Button } from 'antd';
import mainStore from '../../stores/mainStore';
import './pokeCards.css';
import { observer } from 'mobx-react-lite';

const PokeCards = observer(() => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [foundPokemon, setFoundPokemon] = React.useState({});

  const { Meta } = Card;

  const pokemonsArr = mainStore.state.pokemonsData;
  const searchData = mainStore.state.searchValue;
  const page = mainStore.state.page;

  // GET POKEMONS FROM API

  useEffect(() => {
    mainStore.fetchWithDetails();
  }, [pokemonsArr]);
  // modal settings

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //Show modal

  const onClickShowDetails = id => {
    const newfoundPokemon = pokemonsArr.filter(i => i.id === id);
    setFoundPokemon(newfoundPokemon);
    showModal();
  };
  // Find pokemon

  // const foundPokemons = () => {
  //   pokemonsArr.map(item => {
  //     return console.log(item);
  //   });
  // };
  // foundPokemons();

  return (
    <div className="container_items">
      {pokemonsArr &&
        pokemonsArr.map((item, index) => {
          return (
            <div>
              <Card
                key={`${item.id}${item.name}`}
                className="child"
                hoverable
                style={{
                  width: 240,
                  marginRight: '20px',
                  marginBottom: '10px',
                }}
                cover={<img alt="example" src={item.sprites.front_shiny} />}
              >
                <Meta title={`Name: ${item.name.toUpperCase()}`} />
                {`Type: ${item.types.map(t => `${t.type.name} ${index}`)}`}
                <Button
                  key={`${item.id}${item.name}`}
                  onClick={() => onClickShowDetails(item.id)}
                  type="primary"
                >
                  More...
                </Button>
              </Card>
            </div>
          );
        })}
      {foundPokemon.length && (
        <Modal
          title={
            foundPokemon.length ? foundPokemon[0].name.toUpperCase() : 'Title'
          }
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            {`Abilities: ${foundPokemon[0].abilities.map(
              i => `${i.ability.name}`
            )}`}
          </p>
          <p>{`Types: ${foundPokemon[0].types.map(i => `${i.type.name}`)}`}</p>
          <p>{`Height: ${foundPokemon[0].height}`}</p>
          <p>{`Weight: ${foundPokemon[0].weight}`}</p>
        </Modal>
      )}
    </div>
  );
});

export default PokeCards;
