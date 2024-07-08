import styled from "styled-components";

const Container = styled.div`
    max-width: 78rem;
    margin: 0 auto;
    padding: 0 1.5rem;

    @media(width <= 767px) {
        padding: 0 1rem;
    }
`

export { Container }