import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: var(--font-openSans);
        font-size: 10px;
    }

    html {
        height: 100%;
        min-height: 100%;
        box-sizing: border-box;
        margin:0 auto;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0 1rem;
        min-height: 100%;
        background: ${({ theme }) => theme.color.background.primary};
    }

    h3 {
        font-size: ${({ theme }) => theme.font.large};
        font-weight: 700;        
        color: ${({ theme }) => theme.color.primary.main};
        padding: 0;        
        margin: 0;        

    }

    h4, h5 {
        font-size: ${({ theme }) => theme.font.smallMedium};
        font-weight: 600;
        color: ${({ theme }) => theme.color.primary.main};    
        margin: 0;        
        padding: 0;
    }

    hr {
        border: 1px solid ${({ theme }) => theme.color.borderColor.primary};
        
        margin: 0;
        padding: 0;
    }
`;
