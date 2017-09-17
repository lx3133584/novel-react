import React from 'react';
import Book from './Book.js';
import { SwipeAction, WhiteSpace } from 'antd-mobile';
export default function ReaderBookshelf({ map, removeBook }) {
    return (
        <div>
            {map.map(item => <SwipeAction
                style={{ backgroundColor: 'gray' }}
                autoClose
                key={item.uid}
                right={[
                    {
                        text: '取消',
                        style: { backgroundColor: '#ddd', color: 'white', padding: '0 1em' },
                    },
                    {
                        text: '删除',
                        onPress: () => removeBook(item.uid),
                        style: { backgroundColor: '#F4333C', color: 'white', padding: '0 1em' },
                    },
                ]}
            ><Book
                    to={{
                        pathname: `/content/${item.category}/${item.ids}`,
                        search: item.cur ? `?id=${item.cur + +item.first_id - 1}` : ''
                    }}
                    pic={item.pic}
                    title={item.title}
                    detailList={[
                        {
                            key: '状态',
                            value: '已完结',
                            isShow: () => item.state === '已完成'
                        },
                        {
                            key: '连载至',
                            value: item.new_chapter_name,
                            isShow: () => item.state !== '已完成'
                        },
                        {
                            key: '更新时间',
                            value: item.update_time,
                        },
                        {
                            key: '阅读进度',
                            value: item.cur ? `${item.cur}/${item.total} (${(item.cur / item.total).toFixed(2)}%)` : '未读',
                        },
                    ]} />
            </SwipeAction>)}
           {!map.length && <div style={{textAlign: 'center'}}><WhiteSpace size='xl'/>你的书架空空如也</div>}
        </div>
    );
}
