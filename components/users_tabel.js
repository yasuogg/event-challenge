// components/Table.js

import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-white">
      {/* Table header */}
      <thead className="text-xs text-gray-700 uppercase bg-[#aabcd0]">
        <tr>
          <th scope="col" className="p-4">
            Checkbox
          </th>
          <th scope="col" className="px-6 py-3">
          NOM
          </th>
          <th scope="col" className="px-6 py-3">
          Prénom
          </th>
          <th scope="col" className="px-6 py-3">
          Email
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className={
              index % 2 === 0
                ? 'bg-[#0053B5] border-b  hover:bg-sky-400	 hover:text-[#0053B5] hover:duration-500	'
                : 'bg-[#0053B5] border-b  hover:bg-sky-400  hover:text-[#0053B5] hover:duration-500	'
            }
          >
            {/* Render your table cells here based on the structure of your data */}
            {/* For example: */}
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id={`checkbox-table-${index}`}
                  type="checkbox"
                  className="w-4 h-4 text-white bg-[#0053B5] border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                />
                <label htmlFor={`checkbox-table-${index}`} className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className="px-6 py-4">{item.name}</td>
            <td className="px-6 py-4">{item.position}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> {item.status}
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="#" type="button" data-modal-show="editUserModal" className="font-medium text-white hover:text-[#0053B5]  hover:underline">
                Edit user
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
