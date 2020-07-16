import React from 'react'
import styled from '@emotion/styled'
import { IUserProps } from '../type/user';

interface IUserBlock extends IUserProps {
    active?: boolean;
}

function User({ active, id, area = '', thumbnail, name, memo, clickUserHandler }: IUserBlock) {
    return (
        <UserBlock
            area={area}
            active={active}
            onClick={clickUserHandler?.bind(null, { id, thumbnail, name, memo, })}
        >
            <Avatar
                shape="circle"
                src={thumbnail}
                alt="캬캬캬"
            />
            <UserContent>
                <UserName>
                    <span>{name}</span>
                    <span>06.11</span>
                </UserName>
                <UserMemo>
                    {memo}
                </UserMemo>
            </UserContent>
        </UserBlock>
    )
};

const UserMemo = styled.div`
    margin-top: 8px;
`;

const Avatar = styled.img<{ shape: string; }>`
    width: 60px;
    border-radius: ${props => props.shape === 'circle' ? '100%' : 0}
`;

const UserName = styled.div`
    justify-content: space-between;
`;

const UserBlock = styled.div<Pick<IUserBlock, 'area' | 'active'>>`
    margin-top: 24ㅊpx;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: ${({ area }) => area ? 'row' : 'column'};
    background-color: ${({ active }) => active ? 'pink' : 'white'}
    
`;

const UserContent = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
`;

export default User;
