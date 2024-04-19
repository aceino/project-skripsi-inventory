import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabase/config";

const Allitem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let { data, error } = await supabase
          .from("barang_masuk")
          .select(`*, kategori(id, nama)`);

        if (error) {
          console.log(error.message);
        } else {
          console.log(data);
          setItems(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center">All item</h1>
      <div className="relative translate-y-40 mx-auto w-full lg:w-11/12	 overflow-x-auto shadow-xl max-h-screen sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-white rounded-lg">
          <thead className="text-xs text-white uppercase bg-black ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Kode Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Kuantitas
              </th>
              <th scope="col" className="px-6 py-3">
                Kategori
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Masuk
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {items.map((item, index) => (
            <tbody key={index}>
              <tr className=" bg-[#FAFAF6]">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-black whitespace-nowrap"
                >
                  {item.kode_barang}
                </th>
                <td className="px-6 py-4 text-black">{item.nama}</td>
                <td className="px-10 py-4 text-black">{item.kuantitas}</td>
                <td className="px-6 py-4 text-black">
                  {item.kategori ? item.kategori.nama_kategori : "N/A"}
                </td>

                <td className="px-6 py-4 text-black">{item.created_at}</td>
                <td className="px-6 py-4 text-black">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Allitem;
