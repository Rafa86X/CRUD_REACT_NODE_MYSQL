import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import {Table,Thead,Tbody,Tr,Td,Th }  from './styleGrid'


const Grid = ({ users, setUsers, setOnEdit }) => {


  const handleEdit = (item) => {
    setOnEdit(item);
  };

  function confirmDelete(id) {

    if (window.confirm("Tem certeza q deseja deletar este item?")) {
      handleDelete(id);
    }
  }
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th >Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item) => (
                 
          <Tr key={item.id}>
            <Td width="30%">{item.name}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" >
              {item.phone}
            </Td>
            <Td  width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td  width="5%">
              <FaTrash onClick={() => confirmDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
