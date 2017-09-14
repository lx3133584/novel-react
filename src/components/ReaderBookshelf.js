import React from 'react';
import Book from './Book.js';
export default function ReaderBookshelf({ map }) {
    return (
        <div>
            {map.map(item => <Book
                    key={item.uid}
                    to={{
                        pathname: `/content/${item.category}/${item.ids}`,
                        search: `?id=${item.cur + +item.first_id - 1}`
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
                            value: item.cur ? `${item.cur}/${item.total} (${(item.cur/item.total).toFixed(2)}%)` : '未读',
                        },
                    ]}
                />)}
        </div>
    );
}
