import styled from 'styled-components'


export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #1AA8B1;
  height: 130px;
`;

export const HeaderContent  = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: inherit;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 17px;
  padding: 10px 0;
  font-family: Helvetica ,sans-serif;
  font-weight: 400;
`

export const HeaderContentAlbum = styled.div`
    position: relative;
    height: 90px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
`;

export const HeaderCard = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 180px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 0 15px 30px 0;
`;

export const HeaderCardAdd = styled.label`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  background: #fff;
  margin-top: 60px;
  margin-right: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderCardFigure = styled.div<{source: string}>`
  width: 150px;
  height: 140px;
  background-image: ${props => `url(${props.source})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeaderCardRemove = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`

export const Input = styled.input`
  display: none;
`;

export const HeaderClosedPhoto = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
`;
