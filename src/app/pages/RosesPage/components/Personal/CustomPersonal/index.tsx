import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import FormModalUpdate from '../../FormUpdate';
import Item from '../../Item';
import { Header, Wrapper, Title, WrapperSearch } from './styled';
import { Input, Table } from 'antd';

import type { ColumnsType } from 'antd/es/table';

const { Search } = Input;

interface IpropsItem {
  id: number;
  from: number;
  to: number;
  persen: number;
}

interface DataType {
  key: React.Key;
  name: string;
  code: string;
  dateOfBirth: string;
  rose: IpropsItem[];
}

export default function CustomPersonal() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [listItems, setListItems] = useState<IpropsItem[]>([]);
  const [idItem, setIdItem] = useState<String>('');
  const [personal, setPersonal] = useState<DataType>();
  const [data, setData] = useState<DataType[]>([
    {
      key: '1',
      name: 'Nguyễn Văn A',
      code: '32',
      dateOfBirth: '01/01/2022',
      rose: [
        {
          id: 1,
          from: 30000,
          to: 600000000,
          persen: 10,
        },
        {
          id: 2,
          from: 12000,
          to: 500000,
          persen: 15,
        },
      ],
    },
    {
      key: '2',
      name: 'Nguyễn Văn B',
      code: '42',
      dateOfBirth: '01/01/2022',
      rose: [
        {
          id: 1,
          from: 100000,
          to: 800000000,
          persen: 2,
        },
        {
          id: 2,
          from: 1000,
          to: 70000000000,
          persen: 15,
        },
      ],
    },
  ]);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tên',
      dataIndex: 'name',
    },
    {
      title: 'Mã NV',
      dataIndex: 'code',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dateOfBirth',
    },
  ];

  const handlerOpenModal = () => {
    setOpenModal(true);
  };

  const handlerCloseModal = () => {
    setOpenModal(false);
  };

  const handlerUpdateListItems = val => {
    const newData = data.map(x => {
      if (x.key === idItem) {
        x.rose = val;
        return x;
      } else return x;
    });

    setData(newData);
  };

  const handlerClickRow = val => {
    setOpenModal(true);
    setIdItem(val.key);
  };

  const onSearch = (value: string) => console.log(value);
  return (
    <Wrapper>
      <Header>
        <Title>Mức hoa hồng tùy chỉnh cho từng cá nhân</Title>
        <MdEdit
          size={20}
          style={{ cursor: 'pointer' }}
          onClick={handlerOpenModal}
        />
      </Header>
      <WrapperSearch>
        <Search
          placeholder="Họ tên"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Search
          placeholder="Mã nhân viên"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </WrapperSearch>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={{ pageSize: 6 }}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setListItems(record.rose);
                setPersonal(record);
                handlerClickRow(record);
              },
            };
          }}
        />
      </div>
      <FormModalUpdate
        title="Chỉnh sửa mức hoa hồng cá nhân"
        open={openModal}
        handleCancel={handlerCloseModal}
        listItems={listItems}
        updateListItem={handlerUpdateListItems}
        personal={personal}
      />
    </Wrapper>
  );
}
