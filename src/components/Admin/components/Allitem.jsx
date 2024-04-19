import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabase/config";

const Allitem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let { data, error } = await supabase
          .from("kategori")
          .select(`id, nama, barang_masuk(id, nama)`);

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
    <div className="relative translate-y-72 mx-auto w-4/5 overflow-x-auto shadow-xl sm:rounded-lg max-h-screen">
      <table className="w-full text-sm text-left rtl:text-right text-white">
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
              <td className="px-6 py-4 text-black">{item.kuantitas}</td>
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
  );
};

export default Allitem;
