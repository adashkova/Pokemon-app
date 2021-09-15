import React from 'react';
import { observer } from 'mobx-react-lite';
import mainStore from '../../stores/mainStore';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const SearchBox = observer(() => {
  const { Search } = Input;

  const inputValue = mainStore.state.searchValue;

  const onSearch = value => {
    mainStore.state.searchValue = value;
  };

  console.log(inputValue);
  return (
    <Search
      placeholder="Input search name"
      onSearch={onSearch}
      loading={false}
      enterButton
      style={{
        marginBottom: '20px',
        width: '30%',
        marginLeft: '20px',
      }}
    />
  );
});

export default SearchBox;
