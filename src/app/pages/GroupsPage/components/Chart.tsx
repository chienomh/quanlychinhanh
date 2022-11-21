import React, { useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import CardInfo from './Card';

const Chart = () => {
  const groupsData = {
    leadInfo: {
      avatar: '',
      name: 'Thàng Nguyễn',
      position: 'Trưởng nhóm',
      desc: 'WF Nguyễn',
    },
    membersInfo: [
      {
        avatar: '',
        name: 'Nguyễn Thàng',
        position: 'FrontEnd Developer',
        desc: 'FE ReactJs',
      },
      {
        avatar: '',
        name: 'Nguyễn Thàng',
        position: 'FrontEnd Developer',
        desc: 'FE ReactJs',
      },
      {
        avatar: '',
        name: 'Nguyễn Thàng',
        position: 'FrontEnd Developer',
        desc: 'FE ReactJs',
      },
    ],
  };
  return (
    <div>
      <Tree
        lineWidth={'2px'}
        lineColor={'#ccc'}
        lineBorderRadius={'10px'}
        label={
          <CardInfo
            name={groupsData.leadInfo.name}
            position={groupsData.leadInfo.position}
            desc={groupsData.leadInfo.desc}
            avatar={groupsData.leadInfo.avatar}
          />
        }
        nodePadding="10px"
        lineHeight="30px"
      >
        {groupsData.membersInfo.map((item: any) => (
          <TreeNode
            label={
              <CardInfo
                name={item?.name}
                position={item?.position}
                desc={item?.desc}
                avatar={item?.avatar}
              />
            }
          />
        ))}
      </Tree>
    </div>
  );
};

export default Chart;
