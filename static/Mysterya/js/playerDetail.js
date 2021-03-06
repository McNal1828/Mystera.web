window.addEventListener("load", async () => {
    
    function test(x, y, z, g) {
        var options = {
            chart: {
                // height: 280,
                type: "radialBar",
            },
            labels: x,
            series: y,
            colors: ["#0cada8"],
            plotOptions: {
                radialBar: {
                    startAngle: 0,
                    endAngle: 720,
                    hollow: {
                        margin: 0,
                        size: "50%",
                        background: "#0000007c",
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            offsetY: -5,
                            show: true,
                            color: "#ffffff",
                            fontSize: "18px",
                            fontWeight: "bold",
                        },
                        value: {
                            offsetY: 3,
                            color: "#ffffff",
                            fontSize: "22px",
                            show: true,
                            fontWeight: "bold",
                        },
                    },
                },
            },
            stroke: {
                lineCap: "round",
            },
            fill: {
                type: "gradient",
                gradient: {
                    type: "diagonal1",
                    gradientToColors: g,
                    stops: [0, 100],
                },
            },
        };
        var chart = new ApexCharts(document.querySelector(z), options);
        return chart;
    }

    function test2(x, y, z) {
        var ooptions = {
            labels: x,
            series: y,
            chart: {
                type: "donut",
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "70%",
                        labels: {
                            show: true,
                            name: {
                                offsetY: -15,
                                show: true,
                                color: "#ffffff",
                                fontSize: "60px",
                                fontWeight: "bold",
                            },
                            value: {
                                offsetY: 13,
                                color: "#ffffff",
                                fontSize: "45px",
                                show: true,
                                fontWeight: "bold",
                            },
                            total: {
                                label: "??????",
                                offsetY: -15,
                                color: "#ffffff",
                                fontSize: "45px",
                                show: true,
                                fontWeight: "bold",
                            },
                        },
                    },
                },
            },
            legend: {
                show: false,
            },
            dataLabels: {
                style: {
                    fontSize: "20px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold",
                },
                formatter(val, opts) {
                    const name = opts.w.globals.labels[opts.seriesIndex];
                    return name + " " + val.toFixed(1) + "%";
                },
            },
        };
        var chart = new ApexCharts(document.querySelector(z), ooptions);
        return chart;
    }

    // for (var tt = 1; tt < 10; tt++) {
    //     console.log(tt);
    //     var temp1 = ["????????????"];
    //     var temp2 = [0];
    //     var temp3 = ["#00aeff"];
    //     for (var lpd_ in results) {
    //         if (lpd_["????????????"] == tt) {
    //             temp1 = [lpd_["?????????"]];
    //             temp2 = [parseFloat(lpd_["??????"]).toFixed(1)];
    //             if (arseFloat(lpd_["??????"]).toFixed(1) > 30) {
    //                 temp3 = ["#ae00ff"];
    //             }
    //             if (arseFloat(lpd_["??????"]).toFixed(1) < 10) {
    //                 temp3 = ["#ff8800"];
    //             }
    //         }
    //     }
    //     var pp = test(temp1, temp2, `#chart${tt}`, temp3);
    //     pp.render();
    // }
    // <c:forEach var="lpo" items="${listPaOut}">
    //     var qq1 = test2( ["????????????","????????????","??????","??????","?????????"],[${lpo.count3},${lpo.count4}, ${lpo.count5}, ${lpo.count6}, ${lpo.count7}],"#ochart");
    //     qq1.render();
    // </c:forEach>
    // <c:forEach var="lptb" items="${listPaTobase}">
    //     var qq2 = test2( ["??????","4???","??????"],[${lptb.count2}, ${lptb.count3}, ${lptb.count4}],"#obchart");
    //     qq2.render();
    // </c:forEach>
});
