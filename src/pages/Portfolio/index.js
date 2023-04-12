import React, { useEffect, useState } from "react";
import HeadingModule from "../../component/Layout/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Chart from "react-apexcharts";
import { increaseIcon } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyList } from "../../component/Common/Currency/CurrencyList";
import { getCoinLargeChart } from "../../store/slice/chartSlice";

const Portfolio = () => {
  // date picker
  // const [dateRange, setDateRange] = useState([
  //   new Date("01 Mar 2022"),
  //   new Date(),
  // ]);
  const [totalBalance, setTotalBalance] = useState(0);
  // const [startDate, endDate] = dateRange;
  // const dispatch = useDispatch();
  // const from_date = (startDate?.getTime() / 1000).toFixed();
  // const to_date = endDate && (endDate?.getTime() / 1000).toFixed();

  // const chart = useSelector((state) => state.chart.chartLarge);
  // const bitcoinChart = chart?.filter((item, i) => item?.bitcoin);
  // const finChart = bitcoinChart[0]?.bitcoin?.prices?.map((item, i) => [
  //   item[0],
  //   +item[1].toFixed(2),
  // ]);

  // const ethereumChart = chart?.filter((item, i) => item?.ethereum);
  // const finEthChart = ethereumChart[0]?.ethereum?.prices?.map((item, i) => [
  //   item[0],
  //   +item[1].toFixed(2),
  // ]);

  // const binancecoinChart = chart?.filter((item, i) => item?.binancecoin);
  // const finBscChart = binancecoinChart[0]?.binancecoin?.prices?.map(
  //   (item, i) => [item[0], +item[1].toFixed(2)]
  // );

  // useEffect(() => {
  //   dispatch(
  //     getCoinLargeChart({
  //       coin: "bitcoin",
  //       from_date: from_date,
  //       to_date: to_date || (new Date()?.getTime() / 1000).toFixed(),
  //     })
  //   );
  //   dispatch(
  //     getCoinLargeChart({
  //       coin: "ethereum",
  //       from_date: from_date,
  //       to_date: to_date || (new Date()?.getTime() / 1000).toFixed(),
  //     })
  //   );
  //   dispatch(
  //     getCoinLargeChart({
  //       coin: "binancecoin",
  //       from_date: from_date,
  //       to_date: to_date || (new Date()?.getTime() / 1000).toFixed(),
  //     })
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch, to_date]);

  // chart
  // const options = {
  //   chart: {
  //     zoom: {
  //       enabled: true,
  //     },
  //     stacked: false,
  //     type: "area",
  //   },
  //   xaxis: {
  //     categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //     borderColor: "#999",
  //     yAxisIndex: 0,
  //     type: "datetime",
  //     min: startDate?.getTime() || new Date("01 Mar 2022").getTime(),
  //     tickAmount: 6,
  //     x: endDate?.getTime() || new Date().getTime(),
  //     label: {
  //       show: true,
  //       text: "Support",
  //       style: {
  //         colors: ["#fff"],
  //         background: "#00E396",
  //       },
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     width: 2,
  //     curve: "smooth",
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       opacityFrom: 0.7,
  //       opacityTo: 0.2,
  //       stops: [5, 100],
  //     },
  //   },
  //   colors: ["#F5A623", "#31AFD6", "#F84AC1"],
  //   legend: {
  //     position: "top",
  //     horizontalAlign: "left",
  //   },
  //   series: [
  //     {
  //       name: "BTC",
  //       type: "area",
  //       data: finChart,
  //     },
  //     {
  //       name: "ETH",
  //       type: "area",
  //       data: finEthChart,
  //     },
  //     {
  //       name: "BSC",
  //       type: "area",
  //       data: finBscChart,
  //     },
  //   ],
  // };

  return (
    <>
      <section className="zl_portfolio_page">
        <HeadingModule name={"Portfolio"} />
        <div className="zl_add_currency_content zl_protfolio_currency_content">
          <h3 className="zl_bottom_content_heading">Wallets</h3>
          <div className="zl_add_currency_row row">
            <CurrencyList
              setTotalBalance={setTotalBalance}
              updateBalance={true}
            />
          </div>
        </div>
        <div className="zl_all_page_comman_content zl_protfolio_main_chart">
          {/* <div className="zl_chart_box_heading_date">
            <div className="zl_chart_date_picker position-relative">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
                dateFormat="MMM, yyyy"
              />
            </div>
          </div> */}
          {/* <div className="zl_dashboard_chart"> */}
          {/* <Chart
              options={options}
              series={options.series}
              type="area"
              height={382}
            /> */}
          {/* </div> */}
          <div className="zl_all_page_comman_total_price">
            <p className="zl_all_page_total_price_heading">Total Balance</p>
            <h2 className="zl_all_page_total_price_text">
              ${totalBalance.toFixed(6)}
            </h2>
            {/* <span className="zl_all_page_total_price_up_text">
              {increaseIcon}
              +39.69%
            </span> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
