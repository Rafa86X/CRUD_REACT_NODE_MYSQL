import styled from "styled-components";


 const Table = styled.table`
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

const Thead = styled.thead``;
const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

const Td = styled.td`
  padding-top: 15px;
  width: ${(props) => (props.width ? props.width : "auto")};

`;

export {Table,Thead,Tbody,Tr,Td,Th}

