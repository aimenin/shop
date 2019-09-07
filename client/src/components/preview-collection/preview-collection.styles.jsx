import styled from 'styled-components';

export const PreviewCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  
  &:hover {
    color: grey;
    cursor: pointer;
  }  
      
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;