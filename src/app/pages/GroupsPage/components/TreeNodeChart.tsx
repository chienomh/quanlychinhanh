import React, { useState } from 'react';
import { TreeNode } from 'react-organizational-chart';
import CardInfo from './Card';

interface Iprops {
  data: any;
  child?: any[];
}

const TreeNodeChart = (props: Iprops) => {
  const { data, child } = props;
  const [showChild, setShowChild] = useState<boolean>(false);
  const toggleShowChild = () => {
    setShowChild(!showChild);
  };

  return (
    <TreeNode
      label={
        <CardInfo
          name={data?.name}
          position={data?.position}
          desc={data?.desc}
          avatar={data?.avatar}
          onClick={toggleShowChild}
          total={data?.total}
          label={
            child?.length
              ? !showChild
                ? 'Nhấn để xem các đội nhóm thành viên'
                : 'Nhấn để ẩn các đội nhóm thành viên'
              : 'Không có đội nhóm thành viên nào'
          }
        />
      }
    >
      {showChild
        ? child?.map((item: any) => (
            <TreeNodeChart
              data={item}
              child={item?.childMember}
            ></TreeNodeChart>
          ))
        : null}
    </TreeNode>
  );
};

export default TreeNodeChart;
