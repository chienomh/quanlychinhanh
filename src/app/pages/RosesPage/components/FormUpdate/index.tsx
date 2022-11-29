import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import Item from '../Item';
import { CustomModal } from './styled';

interface IpropsItem {
  id: number;
  from: number;
  to: number;
  persen: number;
}

interface Ipros {
  title: string;
  open: boolean;
  onOK?: Function;
  handleCancel: any;
  listItems: IpropsItem[];
  updateListItem: any;
  personal?: any;
}

export default function FormModalUpdate(props: Ipros) {
  const { title, open, handleCancel, listItems, updateListItem, personal } =
    props;

  const [listItemForm, setListItemForm] = useState<IpropsItem[]>(listItems);

  const handlerDeleteItem = val => {
    const newList = listItemForm.filter(item => item.id !== val);
    setListItemForm(newList);
  };

  const handlerAddItem = () => {
    const newItem = {
      id: listItemForm[listItemForm.length - 1].id + 1,
      from: 0,
      to: 0,
      persen: 0,
    };

    setListItemForm([...listItemForm, newItem]);
  };

  const handlerClickOk = () => {
    updateListItem(listItemForm);
    handleCancel();
  };

  useEffect(() => {
    setListItemForm(listItems);
  }, [listItems]);
  return (
    <CustomModal
      title={title}
      open={open}
      onCancel={handleCancel}
      width="1100px"
      onOk={handlerClickOk}
    >
      {personal && (
        <div
          style={{ fontSize: '16px', fontWeight: 500, marginBottom: '10px' }}
        >
          <div>Họ tên: {personal.name}</div>
          <div>Ngày sinh: {personal.dateOfBirth}</div>
          <div>Mã NV: {personal.code}</div>
        </div>
      )}

      <div style={{ border: '1px solid black', padding: '16px 0px' }}>
        {listItemForm.map((item, index) => (
          <Item
            item={item}
            index={index}
            key={item.id}
            disabled={false}
            handlerDeleteItem={handlerDeleteItem}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Button onClick={handlerAddItem}>+ Thêm</Button>
      </div>
    </CustomModal>
  );
}
