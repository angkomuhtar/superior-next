"use client";
import RadioSelect from "@/components/radio-select";
import { SoalListNum } from "@/components/soal-list-num";
import React, { useState } from "react";
import moment from "moment";
import Timer from "@/components/timer";
import { Button } from "@/components/ui/button";
const optionData = {
  id: 1,
  question:
    'Dalam sebuah diskusi tentang lingkungan, seorang ahli mengatakan, "Perubahan iklim yang ekstrem telah mengakibatkan dampak besar bagi ekosistem. Jika tidak segera ditangani, banyak spesies yang terancam punah." Kesimpulan yang paling tepat dari pernyataan di atas adalah ...',
  answers: [
    {
      id: "1",
      answer:
        '<p>2A <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>&gt;</mo></math>&nbsp;3B</p>\n',
      point: "5",
      letter: "a",
    },
    {
      id: "2",
      answer:
        '<p><img alt="" src="https://soal121.tryoutsiswa.com/Images/SoalFile/77A15A95FD65451D8A72D1515AE75CEB.png" style="height:auto; width:auto" /></p>\n',
      point: "0",
      letter: "b",
    },
    {
      id: "3",
      answer:
        "Banyak spesies mampu beradaptasi dengan baik di tengah perubahan iklim",
      point: "0",
      letter: "c",
    },
    {
      id: "4",
      answer:
        "Perubahan iklim berpotensi memicu kepunahan spesies tertentu meski tidak semua terpengaruh.",
      point: "0",
      letter: "d",
    },
  ],
  category: "figural",
  type: "TIU",
  your_answer: "A",
  number: "2",
};

const page = () => {
  const [selected, setSelected] = useState<string | number>(0);
  const today = moment("2024-12-05 09:55:00", "YYYY-MM-DD hh:mm:ss");
  let target = moment(today).add(90, "minute");

  const keys = [...Array(120).keys()];
  console.log("from page", keys);

  const timerLabels = ["jam", "menit", "detik"];
  return (
    <section className=' grid grid-cols-7 gap-4 w-full place-items-start'>
      <div className='p-4 rounded-md shadow-md border border-gray-100 col-span-5 w-full'>
        <RadioSelect
          data={optionData}
          selected={selected}
          onChange={(val) => {
            setSelected(val);
          }}
        />
      </div>
      <div className='col-span-2 w-full flex flex-col gap-4'>
        <div className='p-4 rounded-md shadow-md border border-gray-100'>
          <h3 className='font-bold text-sm capitalize text-primary-500 mb-4 text-blue-500'>
            sisa waktu
          </h3>
          <Timer targetDate={target.toISOString()} labels={timerLabels} />
        </div>
        <div className='p-4 rounded-md shadow-md border border-gray-100'>
          <h3 className='font-bold text-sm capitalize text-primary-500 mb-4 text-blue-500'>
            Daftar Soal
          </h3>
          <div
            className='grid grid-cols-6 gap-2 w-full max-h-96 overflow-y-auto scrollbar-thumb-white scrollbar-track-white border-y py-2'
            style={{ scrollbarColor: "transparent" }}>
            {keys.map((item) => (
              <SoalListNum
                key={item}
                isActive={selected == item ? true : false}
                number={item + 1}
                onClick={() => setSelected(item)}
              />
            ))}
          </div>
          <div className='flex justify-end space-x-2 py-2 pt-4'>
            <Button variant={"ghost"}>Prev</Button>
            <Button variant={"ghost"}>Skip</Button>
            <Button variant='outline'>Save & Next</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
