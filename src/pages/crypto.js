import React from 'react';
import CryptoTicketList from '../components/tickets/crypto-ticket-list';
import NewsClipList from '../components/news-clip-list/news-clip-list';

const CryptoPage = () =>
  <div>
    <NewsClipList />
    <CryptoTicketList />
  </div>

export default CryptoPage;