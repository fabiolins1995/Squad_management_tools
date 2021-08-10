/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import React from 'react';
import { FaTrash, FaPen, FaSort } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import * as actions from '../../store/modules/teams/actions';
import { Table } from './styled';
import { Title } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

/*----------------------------------------------------------------------------
Functions
----------------------------------------------------------------------------*/
export default function MyTeams() {
  const { teams } = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  async function handleDelete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete your team? You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: colors.errorColor,
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, delete team!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          actions.deleteTeamRequest({
            id,
          })
        );
        Swal.fire('Deleted!', 'Your team has been deleted.', 'success');
      }
    });
  }

  return (
    <>
      <Title>
        My teams
        <Link to="team">
          <button type="button" className="plus">
            +
          </button>
        </Link>
      </Title>
      <Table>
        <thead>
          <tr>
            <th>
              Name <FaSort size={12} />
            </th>
            <th colSpan="2">
              Description <FaSort size={12} />
            </th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key="team.id">
              <td>{team.teamName}</td>
              <td>{team.description}</td>
              <td>
                <FaTrash
                  size={12}
                  title="Delete"
                  onClick={() => handleDelete(team.id)}
                />
                <Link to={`team/${team.id}/edit`}>
                  <FaPen size={12} title="Edit" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
