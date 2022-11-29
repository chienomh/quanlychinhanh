import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import FormModalUpdate from '../../FormUpdate';
import Item from '../../Item';
import { Header, Wrapper, Title } from './styled';

interface IpropsItem {
  id: number;
  from: number;
  to: number;
  persen: number;
}

export default function DefaultPersonal() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [listItems, setListItems] = useState<IpropsItem[]>([
    {
      id: 1,
      from: 1000,
      to: 200000000,
      persen: 5,
    },
    {
      id: 2,
      from: 1000,
      to: 2000,
      persen: 5,
    },
  ]);

  const handlerOpenModal = () => {
    setOpenModal(true);
  };

  const handlerCloseModal = () => {
    setOpenModal(false);
  };

  const handlerUpdateListItems = val => {
    setListItems(val);
  };
  return (
    <Wrapper>
      <Header>
        <Title>Mức hoa hồng mặc định</Title>
        <MdEdit
          size={20}
          style={{ cursor: 'pointer' }}
          onClick={handlerOpenModal}
        />
      </Header>
      <div>
        {listItems.map((item, index) => (
          <Item item={item} index={index} key={item.id} disabled={true} />
        ))}
      </div>
      <FormModalUpdate
        title="Chỉnh sửa mức hoa hồng cá nhân"
        open={openModal}
        handleCancel={handlerCloseModal}
        listItems={listItems}
        updateListItem={handlerUpdateListItems}
      />
    </Wrapper>
  );
}
