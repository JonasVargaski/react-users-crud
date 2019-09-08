import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdEdit, MdDelete } from 'react-icons/md';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import {
  getUsersRequest,
  removeUserRequest,
  saveUserRequest,
  updateUserRequest,
} from '~/store/modules/users/actions';

import ConfirmDialog from '~/components/ConfirmDialog';
import { Header, TableAction } from './styles';
import { Card } from '~/components/Card';
import InputSearch from '~/components/InputSearch';
import { Button } from '~/components/DefaultStyle';

import ChangeUserModal from './ChangeUserModal';

export default function Users() {
  const dispatch = useDispatch();

  const [showUserModal, setShowUserModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [userSelected, setUserSelected] = useState({});
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(0);

  const users = useSelector(state => state.users.users);
  const totalUsers = useSelector(state => state.users.totalItens);
  const userProfile = useSelector(state => state.profile.profile);

  useEffect(() => {
    dispatch(getUsersRequest({ page, userSearch }));
  }, [page, userSearch]); //eslint-disable-line

  useEffect(() => {
    const usersFormatted = users.map(user => ({
      ...user,
      type: user.isAdmin ? 'Administrador' : 'Usuário padrão',
      activeFormatted: user.active ? 'Sim' : 'Não',
      fullName: `${user.name} ${user.lastName}`,
    }));

    setUsersList(usersFormatted);
  }, [users]);

  function handleRemoveUserConfirm(user) {
    setUserSelected(user);
    setShowConfirmDialog(true);
  }

  function handleRemoveUser(user) {
    dispatch(removeUserRequest(user.id));
    setShowConfirmDialog(false);
    setUserSelected({});
  }

  function handleEditUser(user) {
    setUserSelected(user);
    const title = userProfile.isAdmin ? 'Editar usuário' : 'Visualizar usuário';
    setModalTitle(title);
    setShowUserModal(true);
  }

  function handleSaveUser(user) {
    setShowUserModal(false);
    if (user.id) {
      dispatch(updateUserRequest(user));
    } else {
      dispatch(saveUserRequest(user));
    }
  }

  function handleChangePage(event, newPage) {
    event.preventDefault();
    setPage(newPage);
  }

  function handleRegisterUser() {
    setModalTitle('Cadastrar usuário');
    setUserSelected({ active: true, type: 'Usuário padrão' });
    setShowUserModal(true);
  }

  return (
    <Card>
      {showConfirmDialog && (
        <ConfirmDialog
          title="Confirmar Exclusão"
          content={`Confirma a exclusão do usuário "${userSelected.name} ${userSelected.lastName}" ? Esta ação não poderá ser revertida.`}
          onCancel={() => setShowConfirmDialog(false)}
          onConfirm={() => handleRemoveUser(userSelected)}
        />
      )}
      {showUserModal && (
        <ChangeUserModal
          title={modalTitle}
          user={userSelected}
          allowModify={userProfile.isAdmin}
          onCancel={() => setShowUserModal(false)}
          onConfirm={handleSaveUser}
        />
      )}

      <Header>
        <span>Usuários</span>
        <div>
          <InputSearch handleChange={setUserSearch} />
          {userProfile.isAdmin && (
            <Button type="button" onClick={handleRegisterUser}>
              Cadastrar
            </Button>
          )}
        </div>
      </Header>

      <div>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Nome do usuário</TableCell>
              <TableCell>Tipo de usuário</TableCell>
              <TableCell>Usuário ativo</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map(user => {
              return (
                <TableRow hover key={user.id}>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.type}</TableCell>
                  <TableCell>{user.activeFormatted}</TableCell>
                  <TableCell>
                    <TableAction>
                      <button
                        title="Editar usuário"
                        type="button"
                        onClick={() => handleEditUser(user)}
                      >
                        <MdEdit size={18} color="#a2a2a2" />
                      </button>
                      {userProfile.isAdmin && (
                        <button
                          type="button"
                          title="Remover usuário"
                          onClick={() => handleRemoveUserConfirm(user)}
                        >
                          <MdDelete size={18} color="#a2a2a2" />
                        </button>
                      )}
                    </TableAction>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <TablePagination
          labelRowsPerPage=""
          rowsPerPageOptions={[]}
          component="div"
          count={Number(totalUsers)}
          rowsPerPage={10}
          page={page}
          onChangePage={handleChangePage}
        />
      </div>
    </Card>
  );
}
