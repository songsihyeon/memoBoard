import { createGlobalStyle } from 'styled-components';
import Gaegu from './Gaegu-Regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Gaegu';
        src: local('Gaegu'),
        url(${Gaegu}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
