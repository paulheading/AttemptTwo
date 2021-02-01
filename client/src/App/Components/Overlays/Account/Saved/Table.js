import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { RemoveSavedButton, SearchSavedButton } from "../../../Buttons";
import { limitString } from "../../../../modules/helpers";

export default function AccountTable() {
  const state = {
    savedFilms: useSelector((state) => state.savedFilms),
  };
  return (
    <Table striped className="saved-table">
      <tbody>
        {state.savedFilms.map(({ id, searchTerm }, index) => {
          return (
            <tr key={index}>
              <td>
                <div className="saved-table__term">
                  {limitString(searchTerm, 12)}
                </div>
              </td>
              <td width="78">
                <SearchSavedButton savedTitle={searchTerm} />
                <RemoveSavedButton id={id} searchTerm={searchTerm} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}