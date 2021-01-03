import React from 'react';
import { List, NewsCard, Headline, Tint } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, far, faCheckSquare, faCoffee);

const Articles = ({ articles }) => {
    // render to pages
    return (
        <div>
            <div style={{ padding: '0 0 0 20px' }}>
                <h2>
                    <FontAwesomeIcon icon={["far", "newspaper"]} /> &nbsp; Breaking News
                </h2>
            </div>
            <br/>
            <List
                className="list-scroll"
            >
                {articles.map((article) => {
                    if (article.author != '') {
                        return (
                            <>
                                <a
                                    key={article.id}
                                    article={article}
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <NewsCard style={{ backgroundImage: `url(${article.image})` }}>
                                        
                                            <Headline>
                                                <br/>
                                                <b>
                                                    <p style={{ height: '100px' }}>{article.title.substring(0, 105)}</p>
                                                </b>
                                                <p>
                                                    <u>
                                                        {`${article.author.toLowerCase().split(' ', 2)[0]} ${article.author.toLowerCase().split(' ', 2)[1]}`.split('undefined')}
                                                    </u>
                                                </p>
                                            </Headline>
                                            <br/>
                                        
                                    </NewsCard>
                                </a>
                            </>
                        );
                    };
                })};
            </List>
        </div>
    );
};

export default Articles;