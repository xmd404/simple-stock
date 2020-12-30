import React, { useRef } from 'react';
import { List, NewsCard, Headline, Tint } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);

const NewsList = ({ news }) => {
    // set state
    const scrollRef = useRef("myscroll");
    // render news list
    return (
        <div>
            <b>
                <h2 style={{ textAlign: 'center' }}>
                    <FontAwesomeIcon icon={["far", "newspaper"]} /> &nbsp; Breaking News
                </h2>
            </b>
            <br/>
            <List
                className="list-scroll"
                ref={scrollRef}
            >
                {news[0].map((newsItem) => (
                    <a
                        key={newsItem.date}
                        newsItem={newsItem}
                        href={newsItem.news_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <NewsCard style={{ backgroundImage: `url(${newsItem.image_url})` }} newsItem>
                            <Tint>
                                <Headline>
                                    <br/>
                                    <p>{newsItem.date.substring(0, 16)}</p>
                                    <br/>
                                    <b>
                                        <p style={{ height: '100px' }}>{newsItem.title.substring(0, 105)}</p>
                                    </b>
                                    <br/>
                                    <p>
                                        <u>{newsItem.source_name.toLowerCase()}</u>
                                    </p>
                                </Headline>
                                <br/>
                            </Tint>
                        </NewsCard>
                    </a>
                ))}
            </List>
        </div>
    );
};

export default NewsList;