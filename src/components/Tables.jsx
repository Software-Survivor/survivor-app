import React from "react";
// const headTitle = ["#", "Nombre", "Cel", "Mail", "Dirección", "Fecha", "Teléfono", "Fin"];
//   const data = {
//     subdata: [
//       {
//         id: "1",
//         name: "Armagedón",
//         cel: "11111111",
//         mail: "arma@hotmail.com",
//         direc: "11 11 11",
//         date: "1111 11 11",
//         phone: "11111111",
//         end: "end1",
//       },
//       {
//         id: "2",
//         name: "Seus",
//         cel: "2222222",
//         mail: "seus@hotmail.com",
//         direc: "22 22 22",
//         date: "2222 22 22",
//         phone: "22222222",
//         end: "end2",
//       },
//       {
//         id: "3",
//         name: "Andromeda",
//         cel: "33333333",
//         mail: "andro@hotmail.com",
//         direc: "33 33 33",
//         date: "3333 33 33",
//         phone: "333333333",
//         end: "end3",
//       },
//     ],
//   };

 
const Table = ({dataDb, subdata, headTitle}) => {
  

  const sx = "15";
  const edit = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-edit"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );

  const trash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-trash"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  );

  const view = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-eye"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  return (
    <div className="text-xs pb-1 divide-x divide-gray-500">
      <div className="bg-white rounded-lg shadow-md px-8 py-8 divide-y divide-gray-100 overflow-x-auto">
        <span className="text-lg text-gra">subtitulo</span>
        <table className="my-4 table-auto w-full text-left divide-y divide-gray-100">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-d">
            <tr>
              {headTitle.map((data) => {
                return <Th data={data} />;
              })}

              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Opciones</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {dataDb &&
              dataDb[`${subdata}`].map((u) => {
                const keysData = Object.keys(u);
                return (
                  <tr key={u._id}>
                    {keysData.map((keydata) => {
                      return <Td u={u} keydata={keydata} />;
                    })}
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex flex-row text-gray-75 -center">
                          <a href="" className="px-1 hover:text-tic-100">
                            {view}
                          </a>
                          <a href="" className="px-1 hover:text-tic-100">
                            {edit}
                          </a>
                          <a href="" className="px-1 hover:text-tic-100">
                            {trash}
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Th = ({ data }) => {
  return (
    <th className="p-2 whitespace-nowrap">
      <div className="font-semibold text-left">{data}</div>
    </th>
  );
};

const Td = ({ u, keydata }) => {
  return (
    <td className="p-2 whitespace-nowrap">
      <div className="flex items-center">
        <div className="text-gray-75">{u[`${keydata}`]}</div>
      </div>
    </td>
  );
};

export default Table;