import React, {useEffect} from 'react';
import mainStore from '../../stores/mainStore';
import { observer } from 'mobx-react-lite';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

const PaginationContainer = observer(() => {
  const currentPage = mainStore.state.page;
  console.log(currentPage);

  const setPage = page => (mainStore.state.page = page);

  useEffect(() => {
    mainStore.fetchWithDetails();
  }, [currentPage]);

  return (
    <Pagination
      onChange={page => setPage(page)}
      defaultCurrent={1}
      total={954}
      style={{
        marginLeft: '20px',
      }}
    />
  );
});

export default PaginationContainer;
