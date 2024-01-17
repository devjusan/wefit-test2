import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: var(--font-openSans);
        font-size: 10px;
    }

    html{
        height: 100%;
        min-height: 100%;
        box-sizing: border-box;
        margin:0 auto;
        padding: 0;
    }

    body{
        margin: 0;
        padding: 0;
        min-height: 100%;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;        
        color: ${({ theme }) => theme.color.primary.main};
        padding: 0;
    }

    h4, h5 {
        font-size: 1.4rem;
        font-weight: 600;
        color: ${({ theme }) => theme.color.primary.main};    
        margin: 0;        
        padding: 0;
    }
`;
