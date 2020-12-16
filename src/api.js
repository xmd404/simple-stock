import { symbols } from "./utility";

export const getStockList = `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env
.REACT_APP_STOCK_API_KEY}&symbols=${symbols}&types=quote`;

export const testStockList = `https://sandbox.iexapis.com/beta/stock/market/batch?token=${process.env
.REACT_APP_STOCK_TEST_API_KEY}&symbols=${symbols}&types=quote`;

export const getStockChart = `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env
.REACT_APP_STOCK_API_KEY}&symbols=${window.location.href.split("/")[6]}&types=quote`;

export const testStockChart = `https://sandbox.iexapis.com/beta/stock/market/batch?token=${process.env
.REACT_APP_STOCK_TEST_API_KEY}&symbols=${window.location.href.split("/")[6]}&types=quote`;


