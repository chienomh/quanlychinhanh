import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Modal, Popconfirm, Table } from 'antd';
import { ImgProduct, WrapperAction } from './styled';
import { FormatMoney } from 'utils/formatMoney';
import ModalMoveProduct from './components/ModalMoveProduct';
import ModalEditProduct from './components/ModalEditProduct';

const { Column } = Table;

interface DataType {
  id: string;
  nameProduct: string;
  codeProduct: string;
  price: number;
  quantity: number;
  image: string;
}

const initData = {
  id: '',
  nameProduct: '',
  codeProduct: '',
  price: 0,
  quantity: 0,
  image: '',
};

const ProductsPage = () => {
  const [data, setData] = useState<DataType[]>([
    {
      id: '1',
      nameProduct: 'Nước hoa Pháp',
      codeProduct: 'P12',
      price: 100000,
      quantity: 100,
      image:
        'https://hangphap.info/wp-content/uploads/2021/11/1573706668-1570691265-chanel-coco.jpg',
    },
    {
      id: '2',
      nameProduct: 'Nước hoa Nhật',
      codeProduct: 'P13',
      price: 90000,
      quantity: 100,
      image:
        'https://sugoi.vn/wp-content/uploads/2021/03/ever-bloom-apa-de-parfum-femei-50-ml_15349_3_1502108629.jpg',
    },
  ]);

  const [isOpenChange, setIsOpenChange] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<DataType>(initData);

  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);

  const handlerDelete = id => {
    const newData = data.filter(x => x.id !== id);
    setData(newData);
  };

  const handlerOpenPopupChange = recored => {
    setSelectedProduct(recored);
    setIsOpenChange(true);
  };

  const handlerOpenPopupEdit = recored => {
    setSelectedProduct(recored);
    setIsOpenEdit(true);
  };

  return (
    <div>
      <Helmet>
        <title>Quản lý sản phẩm</title>
      </Helmet>
      <Table dataSource={data} pagination={{ pageSize: 10 }}>
        <Column
          title="Tên sản phẩm"
          dataIndex="nameProduct"
          key="nameProduct"
        />
        <Column
          title="Hình ảnh"
          dataIndex="image"
          key="image"
          render={(image: string) => (
            <>
              <ImgProduct src={image} alt="this is image " />
            </>
          )}
        />
        <Column title="Mã sản phẩm" dataIndex="codeProduct" key="codeProduct" />
        <Column
          title="Giá sản phẩm"
          dataIndex="price"
          key="price"
          render={price => <>{FormatMoney(price)} đ</>}
        />
        <Column title="Số lượng" dataIndex="quantity" key="quantity" />
        <Column
          title="Hành động"
          dataIndex="id"
          key="id"
          render={(id, recored) => (
            <WrapperAction>
              <a onClick={() => handlerOpenPopupChange(recored)}>Chuyển hàng</a>

              <a onClick={() => handlerOpenPopupEdit(recored)}>Chỉnh sửa</a>

              <Popconfirm
                title="Bạn có chắc chắn muốn xóa sản phẩm này không ?"
                onConfirm={() => handlerDelete(id)}
              >
                <a>Xóa</a>
              </Popconfirm>
            </WrapperAction>
          )}
        />
      </Table>
      <ModalMoveProduct
        isOpenChange={isOpenChange}
        products={selectedProduct}
        closeModal={() => setIsOpenChange(false)}
      />
      <ModalEditProduct
        isOpen={isOpenEdit}
        handlerCloseModal={() => {
          console.log('object');
          setIsOpenEdit(false);
        }}
        handlerOkModal={() => {}}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductsPage;
