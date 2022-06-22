window.addEventListener("load", async () => {
    var template = document.querySelector("template");
    var table = document.querySelector("table");

    var contents =[];

    var name = table.querySelector(".name");
    var g = table.querySelector(".g");
    var pa = table.querySelector(".pa");
    var ab = table.querySelector(".ab");
    var avg = table.querySelector(".avg");
    var h = table.querySelector(".h");
    var lh = table.querySelector(".lh");
    var so = table.querySelector(".so");
    var bb = table.querySelector(".bb");
    var hbp = table.querySelector(".hbp");
    var r = table.querySelector(".r");
    var rbi = table.querySelector(".rbi");
    var slg = table.querySelector(".slg");
    var obp = table.querySelector(".obp");
    var ops = table.querySelector(".ops");

    var tbodyNode = table.querySelector("tbody");
    var trs = tbodyNode.querySelectorAll('tr');

    for(var k=0;k<trs.length;k++){
        var tempObj={};
        var tds = trs[k].querySelectorAll('td');
        tempObj.name = tds[0].innerHTML;
        tempObj.g =parseInt( tds[1].innerHTML);
        tempObj.pa =parseInt( tds[2].innerHTML);
        tempObj.ab =parseInt( tds[3].innerHTML);
        tempObj.avg =parseFloat( tds[4].innerHTML);
        tempObj.h =parseInt( tds[5].innerHTML);
        tempObj.lh =parseInt( tds[6].innerHTML);
        tempObj.so =parseInt( tds[7].innerHTML);
        tempObj.bb =parseInt( tds[8].innerHTML);
        tempObj.hbp =parseInt( tds[9].innerHTML);
        tempObj.r =parseInt( tds[10].innerHTML);
        tempObj.rbi =parseInt( tds[11].innerHTML);
        tempObj.slg =parseFloat( tds[12].innerHTML);
        tempObj.obp =parseFloat( tds[13].innerHTML);
        tempObj.ops =parseFloat( tds[14].innerHTML);
        contents.push(tempObj);
    }

    var bindData = function(){
        for(var i=0;i<contents.length;i++){
            var cloneNode = template.content.cloneNode(true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].innerHTML= contents[i].name;
            tds[1].innerHTML= contents[i].g;
            tds[2].innerHTML= contents[i].pa;
            tds[3].innerHTML= contents[i].ab;
            tds[4].innerHTML= contents[i].avg.toFixed(3);
            tds[5].innerHTML= contents[i].h;
            tds[6].innerHTML= contents[i].lh;
            tds[7].innerHTML= contents[i].so;
            tds[8].innerHTML= contents[i].bb;
            tds[9].innerHTML= contents[i].hbp;
            tds[10].innerHTML= contents[i].r;
            tds[11].innerHTML= contents[i].rbi;
            tds[12].innerHTML= contents[i].slg.toFixed(3);
            tds[13].innerHTML= contents[i].obp.toFixed(3);
            tds[14].innerText= contents[i].ops.toFixed(3);
            tbodyNode.append(cloneNode);
        }
    };

    var nameSorted = false;
    var gSorted = false;
    var paSorted = false;
    var abSorted = false;
    var avgSorted = false;
    var hSorted = false;
    var lhSorted = false;
    var soSorted = false;
    var bbSorted = false;
    var hbpSorted = false;
    var rSorted = false;
    var rbiSorted = false;
    var slgSorted = false;
    var obpSorted = false;
    var opsSorted = false;

    function falseAll(){
        nameSorted = false;
        gSorted = false;
        paSorted = false;
        abSorted = false;
        avgSorted = false;
        hSorted = false;
        lhSorted = false;
        soSorted = false;
        bbSorted = false;
        hbpSorted = false;
        rSorted = false;
        rbiSorted = false;
        slgSorted = false;
        obpSorted = false;
        opsSorted = false;
        name.style.backgroundColor = '';
        g.style.backgroundColor = '';
        pa.style.backgroundColor = '';
        ab.style.backgroundColor = '';
        avg.style.backgroundColor = '';
        h.style.backgroundColor = '';
        lh.style.backgroundColor = '';
        so.style.backgroundColor = '';
        bb.style.backgroundColor = '';
        hbp.style.backgroundColor = '';
        r.style.backgroundColor = '';
        rbi.style.backgroundColor = '';
        slg.style.backgroundColor = '';
        obp.style.backgroundColor = '';
        ops.style.backgroundColor = '';

    }

    name.onclick=function(){
        tbodyNode.innerHTML="";
        if(!nameSorted){
            falseAll();
            name.style.backgroundColor = 'slategrey';
            nameSorted = true;
            contents.sort(function(a,b){
                if(a.name < b.name){
                    return -1;
                }else if(a.name > b.name){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    g.onclick=function(){
        tbodyNode.innerHTML="";
        if(!gSorted){
            falseAll();
            g.style.backgroundColor = 'slategrey';
            gSorted = true;
            contents.sort(function(a,b){
                if(a.g < b.g){
                    return -1;
                }else if(a.g > b.g){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    pa.onclick=function(){
        tbodyNode.innerHTML="";
        if(!paSorted){
            falseAll();
            pa.style.backgroundColor = 'slategrey';
            paSorted = true;
            contents.sort(function(a,b){
                if(a.pa < b.pa){
                    return -1;
                }else if(a.pa > b.pa){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    ab.onclick=function(){
        tbodyNode.innerHTML="";
        if(!abSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            abSorted = true;
            contents.sort(function(a,b){
                if(a.ab < b.ab){
                    return -1;
                }else if(a.ab > b.ab){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    avg.onclick=function(){
        tbodyNode.innerHTML="";
        if(!avgSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            avgSorted = true;
            contents.sort(function(a,b){
                if(a.avg < b.avg){
                    return -1;
                }else if(a.avg > b.avg){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    h.onclick=function(){
        tbodyNode.innerHTML="";
        if(!hSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            hSorted = true;
            contents.sort(function(a,b){
                if(a.h < b.h){
                    return -1;
                }else if(a.h > b.h){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    lh.onclick=function(){
        tbodyNode.innerHTML="";
        if(!lhSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            lhSorted = true;
            contents.sort(function(a,b){
                if(a.lh < b.lh){
                    return -1;
                }else if(a.lh > b.lh){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    so.onclick=function(){
        tbodyNode.innerHTML="";
        if(!soSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            soSorted = true;
            contents.sort(function(a,b){
                if(a.so < b.so){
                    return -1;
                }else if(a.so > b.so){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    bb.onclick=function(){
        tbodyNode.innerHTML="";
        if(!bbSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            bbSorted = true;
            contents.sort(function(a,b){
                if(a.bb < b.bb){
                    return -1;
                }else if(a.bb > b.bb){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    hbp.onclick=function(){
        tbodyNode.innerHTML="";
        if(!hbpSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            hbpSorted = true;
            contents.sort(function(a,b){
                if(a.hbp < b.hbp){
                    return -1;
                }else if(a.hbp > b.hbp){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    r.onclick=function(){
        tbodyNode.innerHTML="";
        if(!rSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            rSorted = true;
            contents.sort(function(a,b){
                if(a.r < b.r){
                    return -1;
                }else if(a.r > b.r){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    rbi.onclick=function(){
        tbodyNode.innerHTML="";
        if(!rbiSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            rbiSorted = true;
            contents.sort(function(a,b){
                if(a.rbi < b.rbi){
                    return -1;
                }else if(a.rbi > b.rbi){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    slg.onclick=function(){
        tbodyNode.innerHTML="";
        if(!slgSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            slgSorted = true;
            contents.sort(function(a,b){
                if(a.slg < b.slg){
                    return -1;
                }else if(a.slg > b.slg){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    obp.onclick=function(){
        tbodyNode.innerHTML="";
        if(!obpSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            obpSorted = true;
            contents.sort(function(a,b){
                if(a.obp < b.obp){
                    return -1;
                }else if(a.obp > b.obp){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
    ops.onclick=function(){
        tbodyNode.innerHTML="";
        if(!opsSorted){
            falseAll();
            this.style.backgroundColor = 'slategrey';
            opsSorted = true;
            contents.sort(function(a,b){
                if(a.ops < b.ops){
                    return -1;
                }else if(a.ops > b.ops){
                    return 1;
                }else{
                    return 0;
                }
            });
        }else{
            contents.reverse();
        }
        bindData();
    };
});
