import React from 'react';
import CryptoTicketList from '../components/lists/crypto-list';
import NewsClipList from '../components/lists/news-list';

const CryptoPage = () =>
  <div>
    <NewsClipList />
    <CryptoTicketList />
  </div>

export default CryptoPage;