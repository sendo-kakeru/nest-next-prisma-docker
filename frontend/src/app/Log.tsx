'use client'
import { FC } from 'react';
type Props = {
    data:any
}
const Log: FC<Props> = ({data}) => {

    console.log(data)
    return (
        <>{data.msg}</>
    );
};

export default Log