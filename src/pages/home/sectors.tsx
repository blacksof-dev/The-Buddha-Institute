import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PartitionCategory {
  label: string;
  percentage: number;
  color: string;
}

interface Category {
  _id: string;
  title: string;
  items: string[];
  color: string;
}

interface ApiResponse {
  heading: string;
  categories: Category[];
  partioncategory: PartitionCategory[];
}

interface ApiResponseWrapper {
  status: string;
  message: ApiResponse[];
}

const ChartGraph: React.FC = () => {
  const [chartTitle, setChartTitle] = useState<string>("");
  const [chartData, setChartData] = useState<any>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponseWrapper>(
          "http://localhost:3000/api/sector-of-operation"
        );

        const data = response.data.message[0]; // first chart object

        // ✅ Build chart data for Doughnut
        const doughnutData = {
          labels: data.partioncategory.map((p) => p.label),
          datasets: [
            {
              data: data.partioncategory.map((p) => p.percentage),
              backgroundColor: data.partioncategory.map((p) => p.color),
            },
          ],
        };

        setChartTitle(data.heading);
        setChartData(doughnutData);
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching charts:", error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) return <div>Loading chart...</div>;

  return (
    <section className="mt-6 lg:blade-top-margin-sm w-container blade-bottom-padding-lg ">
      <div className="gsap-fade-in ">

        <h3 className="text-[#07393C] text-36 font-lato-bold pb-6">
          {chartTitle}
        </h3>

        <div className="flex flex-col sm:flex-row  items-center gap-6 md:gap-10 blade-top-margin-sm  justify-center  ">

          <div className="sm:flex flex-col gap-6 hidden">
            {categories
              .filter((cat) => cat.title === "Farm-Based") 
              .map((cat) => (
                <div key={cat._id} className="flex flex-col gap-2">
                  {/* Category title */}
                  <div className="flex items-center gap-3  ">
                     <h3 className="font-lato-bold text-[#00897B]">{cat.title} </h3>
                  </div>

                  {/* Items */}
                  <ul className="list-inside ml-4 list-disc text-gray-700">
                    {cat.items.map((item, idx) => (
                       <li key={idx} className="text-black text-sm lg:text-lg font-lato-regular py-1 lg:py-3">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>


          <div className="w-[18rem] h-[18rem] md:w-[28rem] md:h-[28rem]">
            <Doughnut data={chartData} />
          </div>

        <div className="flex flex-col gap-2 sm:hidden">
            {categories
              .filter((cat) => cat.title === "Farm-Based") 
              .map((cat) => (
                <div key={cat._id} className="flex flex-col gap-2">
                  {/* Category title */}
                  <div className="flex items-center gap-3  ">
                     <h3 className="font-lato-bold text-[#00897B]">{cat.title} </h3>
                  </div>

                  {/* Items */}
                  <ul className="list-inside ml-4 list-disc text-gray-700">
                    {cat.items.map((item, idx) => (
                       <li key={idx} className="text-black text-sm lg:text-lg font-lato-regular py-1">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="flex flex-col gap-6">
            {categories.filter((cat)=>cat.title==="Non-Farm Based" || cat.title==="Climate and Sustainability").map((cat) => (
              <div key={cat._id} className="flex flex-col gap-2">

                <div className="flex items-center gap-3  ">
                  <h3 className="font-lato-bold text-[#00897B]">{cat.title} </h3>
                </div>


                <ul className="list-inside ml-4 list-disc text-gray-700">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="text-black text-sm lg:text-lg font-lato-regular py-1 md:py-3">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartGraph;
