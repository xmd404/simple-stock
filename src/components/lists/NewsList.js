import React, { useRef } from 'react';
import { List, NewsCard, Headline, Tint, Title, Thumbnail, Logo } from '../components';
import { loadVideo } from '../../utility';

const NewsList = ({ news }) => {
    // set state
    const scrollRef = useRef("myscroll");
    // render news list
    return (
        <div>
            <List
                className="list-scroll"
                ref={scrollRef}
                id="news-list"
            >
                {news[0].map((newsItem) => (
                    <a
                        key={newsItem.date}
                        newsItem={newsItem}
                        href={newsItem.news_url}
                        rel="noopener noreferrer"
                        onClick={loadVideo}
                    >
                        <NewsCard newsItem>
                                <Headline>
                                    <br/>
                                    <Logo src={`../assets/${newsItem.source_name.toLowerCase().split(' ', 2)[0]}_logo.png`} style={{ display: 'block', margin: '5px 0 0' }}/>
                                    {/* <p>
                                        <b>
                                            {`${newsItem.source_name.toLowerCase().split(' ', 2)[0]}`}
                                            ${newsItem.source_name.toLowerCase().split(' ', 2)[1]}`.split('undefined')
                                        </b>
                                    </p> */}
                                    <br/>
                                    <p>{newsItem.date.substring(0, 16)}</p>
                                    <br/>
                                    <b>
                                        <p style={{ height: '100px' }}>{newsItem.title.substring(0, 105)}</p>
                                    </b>
                                    <br/>
                                    <span style={{ marginRight: '10px', padding: '4px 8px', color: '#000', backgroundColor: '#fff', borderRadius: '5px', borderColor: 'none' }}>
                                        {`${newsItem.tickers[0]}`}
                                    </span>
                                    {/* <span style={{ padding: '4px 8px', color: '#000', backgroundColor: '#fff', borderRadius: '5px', borderColor: 'none' }}>
                                        {`${newsItem.tickers[1]}`.split('undefined')}
                                    </span> */}
                                </Headline>
                                <br/><br/>
                        </NewsCard>
                    </a>
                ))}
            </List>
        </div>
    );
};

export default NewsList;