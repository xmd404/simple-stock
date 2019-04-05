import React from 'react';
import CryptoTicketList from '../components/tickets/crypto-ticket-list';
import NewsClipList from '../components/briefings/news-clip-list';

const CryptoPage = () =>
  <div>
    <NewsClipList />
    <CryptoTicketList />
  </div>

export default CryptoPage;