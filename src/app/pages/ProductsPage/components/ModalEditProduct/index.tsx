import { Button, Input, Modal } from 'antd';
import React from 'react';
import { BsUpload } from 'react-icons/bs';
import { Wrapper } from './styled';

interface DataType {
  id: string;
  nameProduct: string;
  codeProduct: string;
  price: number;
  quantity: number;
  image: string;
}

interface Iprops {
  isOpen: boolean;
  handlerCloseModal: Function;
  handlerOkModal: Function;
  product: DataType;
}

export default function ModalEditProduct(props: Iprops) {
  const { isOpen, handlerCloseModal, product } = props;

  const handlerCancel = () => {
    handlerCloseModal();
  };

  return (
    <Modal
      title="Sửa sản phẩm"
      open={isOpen}
      onCancel={handlerCancel}
      width="500px"
      onOk={() => handlerCloseModal}
    >
      <Wrapper>
        <div className="content-img">
          <img src={product?.image} alt="" />
          <Button icon={<BsUpload style={{ marginRight: '5px' }} />}>
            Chọn ảnh
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <label>Tên sản phẩm: </label>
            <Input value={product.nameProduct} />
          </div>

          <div>
            <label>Số lượng: </label>
            <Input value={product.quantity} />
          </div>

          <div>
            <label>Giá: </label>
            <Input value={product.price} />
          </div>
        </div>
      </Wrapper>
    </Modal>
  );
}
