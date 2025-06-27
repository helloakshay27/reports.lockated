let grid = GridStack.init({
  cellHeight: 10,
});

let d11_x = 0,
  d11_y = 0,
  d11_w = 12,
  d11_h = 52;
let d12_x = 0,
  d12_y = 52,
  d12_w = 12,
  d12_h = 50;
let d13_x = 0,
  d13_y = 102,
  d13_w = 12,
  d13_h = 50;
let d14_x = 0,
  d14_y = 152,
  d14_w = 12,
  d14_h = 52;
let d15_x = 0,
  d15_y = 204,
  d15_w = 12,
  d15_h = 53;
let d16_x = 0,
  d16_y = 257,
  d16_w = 12,
  d16_h = 52;
// let a57_x = 0,
//   a57_y = 0,
//   a57_w = 6,
//   a57_h = 15;

// Global Variable Declare for refreshWidgets and LoadData

let globalDateFirst, globalDateSecond;

let checkInventoryConsumption = document.getElementById(
  "checkInventoryConsumption"
);
let checkInventoryReport = document.getElementById("checkInventoryReport");
let checkCurrentStock = document.getElementById("checkCurrentStock");
let checkInventoryConsumptionGreen = document.getElementById("checkInventoryConsumptionGreen");
let checkInventoryConsumptionReportGreen = document.getElementById("checkInventoryConsumptionReportGreen");
let checkCurrentStockGreen = document.getElementById("checkCurrentStockGreen");

let toggleDaily = document.getElementById("toggleDaily");
let toggleCustom = document.getElementById("toggleCustom");
let toggleInventory = document.getElementById("toggleInventory");

// let showDaily = document.getElementById("showDaily");
// let showCustom = document.getElementById("showCustom");
let showInventory = document.getElementById("showInventory");

let currentDate = document.getElementById("currentDate");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");

let showSites = document.getElementById("showSites");
let firstSite = document.getElementById("firstSite");

// let showRegion= document.getElementById("showRegion");

let selectedCompanyLogo = document.getElementById("selectedCompanyLogo");

let multiRegionSelection = document.getElementById("multiRegionSelection");
let multiSiteSelection = document.getElementById("multiSiteSelection");

let resfunInventoryConsumption;
let resfunInventoryReport;
let resfunCurrentStock;
let resfunInventoryConsumptionGreen;
let resfunInventoryReportGreen;
let resfunCurrentStockGreen;
let resfunamc;

let activeInventoryConsumption = 1;
let activeInventoryReport = 1;
let activeCurrentStock = 1;
let activeInventoryConsumptionGreen = 1;
let activeInventoryConsumptionReportGreen = 1;
let activeCurrentStockGreen = 1;

toggleDaily.className = "l px-4 ";
toggleCustom.className = "l px-4";
toggleInventory.className = "l px-4 l-active";

// showDaily.style.display = "none";
// showCustom.style.display = "none";
showInventory.style.display = "block";

// getamc = ip + "inventory/get-amc/";
getInventoryConsumption = ip + "inventory/get_inventory_consumption_non_green/";
// getInventoryConsumption = ip + "inventory/get_inventory_consumption_non_green/?region_id=7&site_id=1021,28,7,11&from_date=2022-2-1&to_date=2023-2-8";
getInventoryReport =
  ip + "inventory/get_inventory_consumption_report_non_green/";
getCurrentStock =
  ip + "inventory/get_inventory_current_and_minimum_stock_non_green/";

getInventoryConsumptionGreen =
  ip + "inventory/get_inventory_consumption_green/";
getInventoryReportGreen =
  ip + "inventory/get_inventory_consumption_report_green/";
getCurrentStockGreen =
  ip + "inventory/get_inventory_current_and_minimum_stock_green/";

let d11 = {
  id: "d11",
  x: d11_x,
  y: d11_y,
  w: d11_w,
  h: d11_h,
  content: `<div style="height: 100%; width: 100%;">
                     

                      <div style="width:100%; background-color:#fff; padding: 10px;">
                      <div class="row">
                          <span id="" align="left" style="color:#5e2750;" class="fw-bold col-md-9 mt-1"><b>Inventory Consumption</b></span>
                          <div class="parent col-md-3">
                              <div class="col-sm-1 child mx-2">
                                  <a style="cursor: pointer;" onclick="downloadInventoryConsumption()" data-toggle="popover" title="Download Underlying Data"><img height="15" width="15" src="assets/img/download.png"/></a>
                              </div>
                              <div class="col-sm-1 child mx-2">
                                  <img height="15" width="15"  onclick="showInventoryConsumption()" src="assets/img/xmark-solid.svg"/>
                              </div>
                          </div>
                      </div>
                    </div> 
                      <hr class="mt-0" />
                      <center id="loaderInventoryConsumption" class="mt-4"><br><br><br>
                              <div class="mt-4 spinner-border" role="status">
                                  <span class="sr-only"></span>
                              </div>
                          </center>  
                      <center><span class="fw-bold my-4" id="inventoryConsumptionNoData"><br><br><br>No Data Available</span></center>
  
                      <div class="tbl-container overflow-scroll">
                          <table id="tblInventoryConsumptioninfo" class="table table-bordered" overflow-y:scroll" style="padding-left:20px;">    
                              <tbody id = "tablebodyInventoryConsumption">
                              <thead>
                                  <th>Date</th>
                                  <th>Product</th>
                                  <th>Unit</th>
                                  <th>Opening</th>
                                  <th>Addition</th>
                                  <th>Consumed</th>
                                  <th>Closing</th>
                                  <th>Cost Per Unit</th>
                                  <th>Consumption Cost</th>
                              </thead>
                              </tbody>  
                          </table>
                      </div>
                  </div>`,
};
// pie chart
let d12 = {
  id: "d12",
  x: d12_x,
  y: d12_y,
  w: d12_w,
  h: d12_h,
  content: `<div style="height: 100%; width: 100%;">
                   

                    <div style="width:100%; background-color:#fff; padding: 10px;">
                    <div class="row">
                        <span id="" align="left" style="color:#5e2750;" class="fw-bold col-md-9 mt-1"><b>Inventory Report</b></span>
                        <div class="parent col-md-3">
                            <div class="col-sm-1 child mx-2">
                                <a style="cursor: pointer;" onclick="downloadInventoryConsumptionReport()" data-toggle="popover" title="Download Underlying Data"><img height="15" width="15" src="assets/img/download.png"/></a>
                            </div>
                            <div class="col-sm-1 child mx-2">
                                <img height="15" width="15"  onclick="showInventoryConsumptionReport()" src="assets/img/xmark-solid.svg"/>
                            </div>
                        </div>
                    </div>
                  </div> 

                    <hr class="mt-0" />
                    </br>
                    </br>
                    <center id="loaderInventoryReport" class="mt-4"><br><br><br>
                        <div class="mt-4 spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </center>
                    <center><span class="fw-bold my-4" id="inventoryReportNoData"><br><br><br>No Data Available</span></center>
                    <center><div style="background-color:#fff; height:300px;" class="card-body">
                        <canvas id="inventory_report"></canvas>
                    </div></center>
                </div>`,
};
// bar chart  showCurrentStock(),loaderCurrentStock,CurrentStockNoData,current-Stock
let d13 = {
  id: "d13",
  x: d13_x,
  y: d13_y,
  w: d13_w,
  h: d13_h,
  content: `<div style="height: 100%; width: 100%;">
                      
                    <div style="width:100%; background-color:#fff; padding: 10px;">
                    <div class="row">
                        <span id="" align="left" style="color:#5e2750;" class="fw-bold col-md-9 mt-1"><b>Current Stock </b></span>
                        <div class="parent col-md-3">
                            <div class="col-sm-1 child mx-2">
                                <a style="cursor: pointer;" onclick="downloadCurrentStock()" data-toggle="popover" title="Download Underlying Data"><img height="15" width="15" src="assets/img/download.png"/></a>
                            </div>
                            <div class="col-sm-1 child mx-2">
                                <img height="15" width="15"  onclick="showCurrentStock()" src="assets/img/xmark-solid.svg"/>
                            </div>
                        </div>
                    </div>
                  </div> 

                     <hr class="mt-0" />
                      <center id="loaderCurrentStock" class="mt-4"><br><br><br>
                          <div class="mt-4 spinner-border" role="status">
                              <span class="sr-only"></span>
                          </div>
                      </center>
                      
                     
                     <center><div class="m-4" style="height: 300px;" style="background-color:#fff; class="card-body">
                          <canvas id="current-Stock"></canvas>
                      </div></center>
                  </div>`,
  // <center><span class="fw-bold my-4" id="CurrentStockNoData"><br><br><br>No Data Available</span></center>
};
// loaderInventoryConsumptionGreen,inventoryConsumptionGreenNoData,tblInventoryConsumptionGreeninfo,tablebodyInventoryConsumptionGreen
let d14 = {
  id: "d14",
  x: d14_x,
  y: d14_y,
  w: d14_w,
  h: d14_h,
  content: `<div style="height: 100%; width: 100%;">
                      
                      <div style="width:100%; background-color:#fff; padding: 10px;">
                      <div class="row">
                          <span id="" align="left" style="color:#5e2750;" class="fw-bold col-md-9 mt-1"><b>Inventory Consumption Green </b></span>
                          <div class="parent col-md-3">
                              <div class="col-sm-1 child mx-2">
                                  <a style="cursor: pointer;" onclick="downloadInventoryConsumptionGreen()" data-toggle="popover" title="Download Underlying Data"><img height="15" width="15" src="assets/img/download.png"/></a>
                              </div>
                              <div class="col-sm-1 child mx-2">
                                  <img height="15" width="15"  onclick="showInventoryConsumptionGreen()" src="assets/img/xmark-solid.svg"/>
                              </div>
                          </div>
                      </div>
                    </div> 
                      <hr class="mt-0" />
                      <center id="loaderInventoryConsumptionGreen" class="mt-4"><br><br><br>
                              <div class="mt-4 spinner-border" role="status">
                                  <span class="sr-only"></span>
                              </div>
                          </center>  
                      <center><span class="fw-bold my-4" id="inventoryConsumptionGreenNoData"><br><br><br>No Data Available</span></center>
  
                      <div class="tbl-container overflow-scroll">
                          <table id="tblInventoryConsumptionGreeninfo" class="table table-bordered" overflow-y:scroll">    
                              <tbody id = "tablebodyInventoryConsumptionGreen">
                              <thead>
                                  <th>Date</th>
                                  <th>Product</th>
                                  <th>Unit</th>
                                  <th>Opening</th>
                                  <th>Addition</th>
                                  <th>Consumed</th>
                                  <th>Closing</th>
                                  <th>Cost Per Unit</th>
                                  <th>Consumption Cost</th>
                              </thead>
                              </tbody>  
                          </table>
                      </div>
                  </div>`,
};
// pie chart // loaderInventoryReportGreen,inventoryReportGreenNoData,inventory_report_green
let d15 = {
  id: "d15",
  x: d15_x,
  y: d15_y,
  w: d15_w,
  h: d15_h,
  content: `<div style="height: 100%; width: 100%;">
                    
                    <div style="width:100%; background-color:#fff; padding: 10px;">
                      <div class="row">
                          <span id="" align="left" style="color:#5e2750;" class="fw-bold col-md-9 mt-1"><b>Inventory Report Green </b></span>
                          <div class="parent col-md-3">
                              <div class="col-sm-1 child mx-2">
                                  <a style="cursor: pointer;" onclick="downloadInventoryConsumptionReportGreen()" data-toggle="popover" title="Download Underlying Data"><img height="15" width="15" src="assets/img/download.png"/></a>
                              </div>
                              <div class="col-sm-1 child mx-2">
                                  <img height="15" width="15"  onclick="showInventoryConsumptionReportGreen()" src="assets/img/xmark-solid.svg"/>
                              </div>
                          </div>
                      </div>
                    </div> 
                    <hr class="mt-0" />
                    <center id="loaderInventoryReportGreen" class="mt-4"><br><br><br>
                        <div class="mt-4 spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </center>
                    <center><span class="fw-bold my-4" id="inventoryReportGreenNoData"><br><br><br>No Data Available</span></center>
                    <center><div style="background-color:#fff; class="card-body">
                        <canvas id="inventory_report_green"></canvas>
                    </div></center>
                </div>`,
};
// bar chart  // loaderCurrentStockGreen,CurrentStockGreenNoData,current-Stock-Green
let d16 = {
  id: "d16",
  x: d16_x,
  y: d16_y,
  w: d16_w,
  h: d16_h,
  content: `<div style="height: 100%; width: 100%;">
                    
                    <div style="width:100%; background-color:#fff; padding: 10px;">
                      <div class="row">
                          <span id="" align="left" style="color:#5e2750;" class="fw-bold col-md-9 mt-1"><b>Current Stock Green </b></span>
                          <div class="parent col-md-3">
                              <div class="col-sm-1 child mx-2">
                                  <a style="cursor: pointer;" onclick="downloadCurrentStockGreen()" data-toggle="popover" title="Download Underlying Data"><img height="15" width="15" src="assets/img/download.png"/></a>
                              </div>
                              <div class="col-sm-1 child mx-2">
                                  <img height="15" width="15"  onclick="showCurrentStockGreen()" src="assets/img/xmark-solid.svg"/>
                              </div>
                          </div>
                      </div>
                    </div> 
                     <hr class="mt-0" />
                      <center id="loaderCurrentStockGreen" class="mt-4"><br><br><br>
                          <div class="mt-4 spinner-border" role="status">
                              <span class="sr-only"></span>
                          </div>
                      </center>
                       <center><span class="fw-bold my-4" id="CurrentStockGreenNoData"><br><br><br>No Data Available</span></center> 
                     <center><div class="m-4" style="height: 300px;" style="background-color:#fff; class="card-body">
                          <canvas id="current-Stock-Green"></canvas>
                      </div></center>
                  </div>`,
  // <center><span class="fw-bold my-4" id="CurrentStockGreenNoData"><br><br><br>No Data Available</span></center>
};
// let a57 = {
//   id: "a57",
//   x: a57_x,
//   y: a57_y,
//   w: a57_w,
//   h: a57_h,
//   content: `<div style="height: 100%; width: 100%;" class="dashboard-movement">
//                     <div class="yellow-shade">
//                         <span style="text-align:left;padding-right:120px;"><span id="visamc" class="count">0</span><br/>
//                         <span class="text">AMC</span></span>
//                         <img style="height: 20; width: 20;" src="assets/img/checked.png"/>
//                          <a1 style="cursor: pointer;" onclick="downloadStaffIn()" data-toggle="popover"  title="Download Underlying Data" >
//                         <i class="bi bi-download"></i></a1>
//                     </div>
//                 </div>`,
// };

let items = [d11, d12, d13, d14, d15, d16];
let itemsList = ['d11', 'd12', 'd13', 'd14', 'd15', 'd16'];

grid.on("added removed change", function (e, items) {
  let str = "";
  items.forEach(function (item) {
    console.log(item.id + " ");
    str += " (x,y)=" + item.x + "," + item.y;

    if (item.id == "d11") {
      d11.x = item.x;
      d11.y = item.y;
      d11.h = item.h;
      d11.w = item.w;
    }
    if (item.id == "d12") {
      d12.x = item.x;
      d12.y = item.y;
      d12.h = item.h;
      d12.w = item.w;
    }
    if (item.id == "d13") {
      d13.x = item.x;
      d13.y = item.y;
      d13.h = item.h;
      d13.w = item.w;
    }
    if (item.id == "a57") {
      a57.x = item.x;
      a57.y = item.y;
      a57.h = item.h;
      a57.w = item.w;
    }
  });

  console.log(e.type + " " + items.length + " items:" + str);
});



function reloadPage() {
  window.location.reload();
}

function saveModifiedLayout() {
  const formData = new FormData();
  formData.append('grid_text', JSON.stringify(items));
  formData.append('token', token);
  formData.append('dashboard_name', 'fm_inventory');

  fetch('https://reports.lockated.com:8000/user-dashboard/save-dashboard/', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(JSON.stringify(items));
      console.log(token);
      alert('Please give 5 second to save Data');
      reloadPage();

    })
    .catch(error => {
      console.error('Error:', error);
    });

}




//---------------------------------------------------------------------------------
const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
const token = urlParams.get("token");
console.log("Token - " + token);
var link_project_name = urlParams.get("site_name");
const link_project_id = urlParams.get("pms_site_id");
const link_society_id = urlParams.get("society_id");
let countSiteDrop = document.getElementById("countSiteDrop");
let countSocietyDrop = document.getElementById("countSocietyDrop");
let numberofRegion = 0;
let numberofSociety = 0;

let xhr_sites = new XMLHttpRequest();
xhr_sites.open("GET", getSites + "?token=" + token, true);
xhr_sites.onload = function () {
  resSites = JSON.parse(this.responseText);
  console.log(resSites);
  updateCompanyDropdown();
};
xhr_sites.send();

let companyDropdown ;
function updateCompanyDropdown() {
  companyDropdown = document.getElementById("showCompanies");
  let companyDetails = ``;
  for (let i = 0; i < resSites.mapping.length; i += 1) {
    const companyId = resSites.mapping[i].company_id;
    const companyName = resSites.mapping[i].company_name;
    const checked = i === 0 ? "checked" : "";
    companyDetails +=
      `<li><input type="radio" name="radCompanyDrop" class="dropdown-check-list" value="${companyId}" onclick="updateRegionDropdown(${i})" ${checked}>${companyName}</li><li><hr class="dropdown-divider"></li>`;
  }
  companyDropdown.innerHTML = companyDetails;
  updateRegionDropdown(0);
}

let selectedCompany;

// Function to update the regions dropdown
function updateRegionDropdown(selectedCompanyIndex) {
  let regionDropdown = document.getElementById("showRegions");
  let regionDetails = ``;

  selectedCompany = resSites.mapping[selectedCompanyIndex];
  console.log(selectedCompany);
  selectedCompanyLogo.src = selectedCompany.logo;

  for (const [regionName, sites] of Object.entries(selectedCompany.region)) {
    const checked = regionName === Object.keys(selectedCompany.region)[0] ? "checked" : "";
    regionDetails +=
      `<li><input type="radio" name="radRegionDrop" class="dropdown-check-list" value="${regionName}" onclick="updateSiteDropdown('${regionName}', ${selectedCompanyIndex})" ${checked}>${regionName}</li><li><hr class="dropdown-divider"></li>`;
  }

  regionDropdown.innerHTML = regionDetails;
  updateSiteDropdown(Object.keys(selectedCompany.region)[0], selectedCompanyIndex);
}

let selectesSites =[]
let selectedRegion= [];
function updateSiteDropdown(selectedRegionName,selectedCompanyIndex) {
  let siteDropdown = document.getElementById("showSites");
  let siteDetails = ``;

  // const selectedCompanyIndex = document.querySelector('input[name="radCompanyDrop"]:checked').value;
  const selectedCompany = resSites.mapping[selectedCompanyIndex];
  // console.log(selectedCompanyIndex);
  // console.log(resSites.mapping);
  // console.log(resSites.mapping[selectedCompanyIndex]);
  // console.log(selectedRegionName);
  // console.log( selectedCompany);
  selectedRegion = selectedCompany.region[selectedRegionName];

  siteDetails =
  `<li><input id="selectAll" type="checkbox" onclick="getSiteSocietyIdForData(1000)"/>Select All</li>` +
  `<hr class="dropdown-divider">`;

  for (let i = 0; i < selectedRegion.length; i++) {
    const siteId = selectedRegion[i].pms_site_id;
    const societyId = selectedRegion[i].society_id;
    const value = `${siteId}|${societyId}`;
    const checked = i === 0 ? "checked" : "";

    siteDetails +=
      `<li><input type="checkbox" name="chkSiteDrop" class="dropdown-check-list" value="${value}" onclick="getSiteSocietyIdForData(${i})" ${checked}>` +
      selectedRegion[i].site_name +
      `</input></li><li><hr class="dropdown-divider"></li>`;
  }

  siteDropdown.innerHTML = siteDetails;

  if (link_project_id == null) {
    getSiteSocietyIdForData(0);
  } else {
    getDetailsIfIdExists(link_project_id, link_project_name, link_society_id);
  }



}


let savedLayout;

function getSiteSocietyIdForData(i) {

  if (i == 1000) {

    console.log("Hi");
    if (document.getElementById("selectAll").checked) {
      var eleSiteDrop = document.getElementsByName("chkSiteDrop");
      for (var i1 = 0; i1 < eleSiteDrop.length; i1++) {
        if (eleSiteDrop[i1].type == "checkbox") {
          eleSiteDrop[i1].checked = true;

        }
      }
    } else {
      var eleSiteDrop = document.getElementsByName("chkSiteDrop");
      for (var i1 = 0; i1 < eleSiteDrop.length; i1++) {
        if (eleSiteDrop[i1].type == "checkbox") {
          eleSiteDrop[i1].checked = false;
        }
      }
    }

  }

  let markedSiteDrop = "";
  let markedSocietyDrop = "";
  var markedCheckboxSites = document.querySelectorAll(
    'input[name="chkSiteDrop" ]:checked'
  );

  if (markedCheckboxSites.length < numberofRegion) {
    document.getElementById("selectAll").checked = false;
  }
  count = 0
  for (var mChecked of markedCheckboxSites) {
    if (markedSiteDrop == "") {
      var drop_ids = mChecked.value.split("|");

      markedSiteDrop = drop_ids[0];
      markedSocietyDrop = drop_ids[1];
    } else {
      var drop_ids = mChecked.value.split("|");

      markedSiteDrop = markedSiteDrop + "," + drop_ids[0];
      markedSocietyDrop = markedSocietyDrop + "," + drop_ids[1];
      console.log("Select");
      console.log(markedSiteDrop);
      console.log(markedSocietyDrop);
    }

    count = count + 1
  }

  countSiteDrop = markedSiteDrop;
  countSocietyDrop = markedSocietyDrop;
  console.log(markedSiteDrop);
  console.log(markedSocietyDrop);

  // alert(globalSiteId)
  if (markedSiteDrop.split(",").length > 1) {
    console.log("Hiiiiiiiiiiiiii hereeeeeeeeeeeeeee")

    firstSite.innerHTML = "Multiple Sites Selected"

  }
  else {

    console.log(selectedRegion);
    for (let ind = 0; ind < selectedRegion.length; ind += 1) {

      if (markedSiteDrop == selectedRegion[ind].pms_site_id) {
        console.log(selectedRegion[ind].pms_site_id);
        firstSite.innerHTML = selectedRegion[ind].site_name;
      }
      console.log(firstSite.innerHTML);
    }

  }

  var checkList = document.getElementById("list");
  checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
    if (checkList.classList.contains("visible"))
      checkList.classList.remove("visible");
    else checkList.classList.add("visible");
  };

  console.log(markedSiteDrop.split("|"));

  globalSiteId = countSiteDrop;
  console.log(globalSiteId);

  idLink = "?site_id=" + countSiteDrop + "&society_id=" + countSocietyDrop;
  console.log(idLink);
  let link_project_names = urlParams.get("site_name");
  if (selectedRegion.length == 20) {
    for (var ind = 0; ind < selectedRegion[ind].length; ind++) {
      if (markedSiteDrop == selectedRegion[ind].pms_site_id) {
        link_project_names = selectedRegion[ind].site_name
        console.log(link_project_names);
      }
    }
  }
  else {
    link_project_names = "Multiple Sites Selected"
  }

  document.getElementById("toggleDaily").href =
    "index.html?token=" +
    token;
    // +
    // "&pms_site_id=" +
    // markedSiteDrop +
    // "&site_name=" +
    // link_project_names +
    // "&society_id=" + markedSocietyDrop;
  ;
  document.getElementById("toggleCustom").href =
  "custom.html?token=" +
  token;
  // +
  // "&pms_site_id=" +
  // markedSiteDrop +
  // "&site_name=" +
  // link_project_names +
  // "&society_id=" + markedSocietyDrop;
;
  // document.getElementById("toggleInventory").href =
  //   "inventory.html?token=" + token;



// function getResult() {
//   // if (countRegion == "") {
//   console.log("Apply Button");
//   console.log(countSite);
//   console.log(countRegion);
//   // }
//   //  if(countRegion == "" && countSite == null ){
//   //    countSite;
//   //  }

  let selectedWidgetsList = []
  fetch(`https://reports.lockated.com:8000/user-dashboard/get-dashboard/?token=${token}&dashboard_name=fm_inventory`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.success === "1" && data.dashboard) {

        savedLayout = JSON.parse(data.dashboard);

        if (savedLayout && savedLayout.length > 0) {
          console.log(JSON.parse(data.dashboard));
          for (let widget in savedLayout) {
            selectedWidgetsList.push(savedLayout[widget].id);
            console.log(savedLayout[widget]);
          }
          console.log(savedLayout);
          items = [];
          // items = savedLayout;

          if (selectedWidgetsList.includes("d11")) {
            activeInventoryConsumption = 1;
            checkInventoryConsumption.style.color = "blue";

            items.push(d11);
          } else {
            activeInventoryConsumption = 0;
            checkInventoryConsumption.style.color = "black";
          }


          if (selectedWidgetsList.includes("d12")) {
            activeInventoryReport = 1;
            checkInventoryReport.style.color = "blue";

            items.push(d12);
          } else {
            activeInventoryReport = 0;
            checkInventoryReport.style.color = "black";
          }

          if (selectedWidgetsList.includes("d13")) {
            activeCurrentStock = 1;
            checkCurrentStock.style.color = "blue";

            items.push(d13);
          } else {
            activeCurrentStock = 0;
            checkCurrentStock.style.color = "black";
          }

          if (selectedWidgetsList.includes("d14")) {
            activeInventoryConsumptionGreen = 1;
            checkInventoryConsumptionGreen.style.color = "blue";

            items.push(d14);
          } else {
            activeInventoryConsumptionGreen = 0;
            checkInventoryConsumptionGreen.style.color = "black";
          }

          if (selectedWidgetsList.includes("d15")) {
            activeInventoryConsumptionReportGreen = 1;
            checkInventoryConsumptionReportGreen.style.color = "blue";

            items.push(d15);
          } else {
            activeInventoryConsumptionReportGreen = 0;
            checkInventoryConsumptionReportGreen.style.color = "black";
          }

          if (selectedWidgetsList.includes("d16")) {
            activeCurrentStockGreen = 1;
            checkCurrentStockGreen.style.color = "blue";

            items.push(d16);
          } else {
            activeCurrentStockGreen = 0;
            checkCurrentStockGreen.style.color = "black";
          }

          grid.load(items);
          loadDashboardData(startDate.value, endDate.value);

        } else {
          grid.load(items);
          loadDashboardData(startDate.value, endDate.value);
        }
      } else {

        grid.load(items);
        loadDashboardData(startDate.value, endDate.value);
      }
    })
    .catch(error => {
      console.error('Error:', error);

    });
    grid.load(items);
    loadDashboardData(startDate.value, endDate.value);

  // grid.load(items);
  // loadDashboardData(startDate.value, endDate.value);
  // console.log(globalDateFirst);
}



function getDetailsIfIdExists(pro_id, pro_name, link_society_id) {
  countSiteDrop = pro_id;
  nameSiteDrop = pro_name;
  // alert(pro_name);
  firstSite.innerHTML = pro_name;
  let globalSiteName = firstSite.innerHTML;

  globalSiteId = pro_id;
  // alert(globalSiteId);
  // alert(link_society_id);
  // globalSocietyId = soc_id;
  idLink = "?site_id=" + pro_id + "&society_id=" + link_society_id;

  document.getElementById("toggleCustom").href =
    "custom.html?token=" +
    token;
    // +
    // "&pms_site_id=" +
    // pro_id +
    // "&site_name=" +
    // globalSiteName +
    // "&society_id=" + link_society_id;
  ;

  document.getElementById("toggleDaily").href =
    "index.html?token=" +
    token;
    // +
    // "&pms_site_id=" +
    // pro_id +
    // "&site_name=" +
    // globalSiteName +
    // "&society_id=" + link_society_id;

    let selectedWidgetsList = []
    fetch(`https://reports.lockated.com:8000/user-dashboard/get-dashboard/?token=${token}&dashboard_name=fm_inventory`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.success === "1" && data.dashboard) {
  
          savedLayout = JSON.parse(data.dashboard);
  
          if (savedLayout && savedLayout.length > 0) {
            console.log(JSON.parse(data.dashboard));
            for (let widget in savedLayout) {
              selectedWidgetsList.push(savedLayout[widget].id);
              console.log(savedLayout[widget]);
            }
            console.log(savedLayout);
            items = [];
            // items = savedLayout;
  
            if (selectedWidgetsList.includes("d11")) {
              activeInventoryConsumption = 1;
              checkInventoryConsumption.style.color = "blue";
  
              items.push(d11);
            } else {
              activeInventoryConsumption = 0;
              checkInventoryConsumption.style.color = "black";
            }
  
  
            if (selectedWidgetsList.includes("d12")) {
              activeInventoryReport = 1;
              checkInventoryReport.style.color = "blue";
  
              items.push(d12);
            } else {
              activeInventoryReport = 0;
              checkInventoryReport.style.color = "black";
            }
  
            if (selectedWidgetsList.includes("d13")) {
              activeCurrentStock = 1;
              checkCurrentStock.style.color = "blue";
  
              items.push(d13);
            } else {
              activeCurrentStock = 0;
              checkCurrentStock.style.color = "black";
            }
  
            if (selectedWidgetsList.includes("d14")) {
              activeInventoryConsumptionGreen = 1;
              checkInventoryConsumptionGreen.style.color = "blue";
  
              items.push(d14);
            } else {
              activeInventoryConsumptionGreen = 0;
              checkInventoryConsumptionGreen.style.color = "black";
            }
  
            if (selectedWidgetsList.includes("d15")) {
              activeInventoryConsumptionReportGreen = 1;
              checkInventoryConsumptionReportGreen.style.color = "blue";
  
              items.push(d15);
            } else {
              activeInventoryConsumptionReportGreen = 0;
              checkInventoryConsumptionReportGreen.style.color = "black";
            }
  
            if (selectedWidgetsList.includes("d16")) {
              activeCurrentStockGreen = 1;
              checkCurrentStockGreen.style.color = "blue";
  
              items.push(d16);
            } else {
              activeCurrentStockGreen = 0;
              checkCurrentStockGreen.style.color = "black";
            }
  
            grid.load(savedLayout);
            loadDashboardData(startDate.value, endDate.value);
  
          } else {
            grid.load(items);
            loadDashboardData(startDate.value, endDate.value);
          }
        } else {
  
          grid.load(items);
          loadDashboardData(startDate.value, endDate.value);
        }
      })
      .catch(error => {
        console.error('Error:', error);
  
      });
      grid.load(items);
      loadDashboardData(startDate.value, endDate.value);
  
    // grid.load(items);
    // loadDashboardData(startDate.value, endDate.value);
    // console.log(globalDateFirst);
  }

// let xhr_sites = new XMLHttpRequest();
// xhr_sites.open("GET", getSites + "?token=" + token, true);
// xhr_sites.onload = function () {
//   resSites = JSON.parse(this.responseText);
//   console.log(resSites.sites);


//   getSiteSocietyIdForData(0);

//   let siteDetails = ``;

//   for (let i = 0; i < resSites.sites.length; i += 1) {
//     siteDetails +=
//       `<li><a class="dropdown-item d-flex align-items-center" onclick="getSiteSocietyIdForData(` +
//       i +
//       `)">` +
//       resSites.sites[i].site_name +
//       `</a></li><li><hr class="dropdown-divider"></li>`;
//   }

//   showSites.innerHTML = siteDetails;

//   selectedCompanyLogo.src = resSites.company_logo_url;
// };
// xhr_sites.send();

// let globalSiteId, globalSocietyId;
// function getSiteSocietyIdForData(i) {
//   // firstSite.innerHTML = resSites.sites[i].site_name;

//   globalSiteId = resSites.sites[i].pms_site_id;
//   globalSocietyId = resSites.sites[i].society_id;

//   idLink = "?site_id=" + globalSiteId + "&society_id=" + globalSocietyId;

//   document.getElementById("toggleDaily").href = "index.html?token=" + token;
//   document.getElementById("toggleCustom").href = "custom.html?token=" + token;
//   // document.getElementById("toggleInventory").href = "inventory.html?token=" + token ;
//   // + "&site_name=" + globalSiteId + "&snag_project_id=" + globalSocietyId;


//   let selectedWidgetsList = []
//   fetch(`https://reports.lockated.com:8000/user-dashboard/get-dashboard/?token=${token}&dashboard_name=fm_inventory`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (data.success === "1" && data.dashboard) {

//         savedLayout = JSON.parse(data.dashboard);

//         if (savedLayout && savedLayout.length > 0) {
//           console.log(JSON.parse(data.dashboard));
//           for (let widget in savedLayout) {
//             selectedWidgetsList.push(savedLayout[widget].id);
//             console.log(savedLayout[widget]);
//           }
//           console.log(savedLayout);
//           items = [];
//           // items = savedLayout;

//           if (selectedWidgetsList.includes("d11")) {
//             activeInventoryConsumption = 1;
//             checkInventoryConsumption.style.color = "blue";

//             items.push(d11);
//           } else {
//             activeInventoryConsumption = 0;
//             checkInventoryConsumption.style.color = "black";
//           }


//           if (selectedWidgetsList.includes("d12")) {
//             activeInventoryReport = 1;
//             checkInventoryReport.style.color = "blue";

//             items.push(d12);
//           } else {
//             activeInventoryReport = 0;
//             checkInventoryReport.style.color = "black";
//           }

//           if (selectedWidgetsList.includes("d13")) {
//             activeCurrentStock = 1;
//             checkCurrentStock.style.color = "blue";

//             items.push(d13);
//           } else {
//             activeCurrentStock = 0;
//             checkCurrentStock.style.color = "black";
//           }

//           if (selectedWidgetsList.includes("d14")) {
//             activeInventoryConsumptionGreen = 1;
//             checkInventoryConsumptionGreen.style.color = "blue";

//             items.push(d14);
//           } else {
//             activeInventoryConsumptionGreen = 0;
//             checkInventoryConsumptionGreen.style.color = "black";
//           }

//           if (selectedWidgetsList.includes("d15")) {
//             activeInventoryConsumptionReportGreen = 1;
//             checkInventoryConsumptionReportGreen.style.color = "blue";

//             items.push(d15);
//           } else {
//             activeInventoryConsumptionReportGreen = 0;
//             checkInventoryConsumptionReportGreen.style.color = "black";
//           }

//           if (selectedWidgetsList.includes("d16")) {
//             activeCurrentStockGreen = 1;
//             checkCurrentStockGreen.style.color = "blue";

//             items.push(d16);
//           } else {
//             activeCurrentStockGreen = 0;
//             checkCurrentStockGreen.style.color = "black";
//           }

//           grid.load(items);
//           loadDashboardData("inventory", startDate.value, endDate.value);

//         } else {
//           grid.load(items);
//           loadDashboardData("inventory", startDate.value, endDate.value);
//         }
//       } else {

//         grid.load(items);
//         loadDashboardData("inventory", startDate.value, endDate.value);
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);

//     });
//     grid.load(items);
//     loadDashboardData( "inventory", startDate.value, endDate.value);

//   // grid.load(items);
//   // loadDashboardData("inventory", todaysDate, todaysDate);
// }
// ----------------------------------------------------------------
//---------------------------------------------------------------------------------
// dropdown Region
// let countRegion = document.getElementById("countRegion");
// let countSite = document.getElementById("countSite");
// let countSiteAll = document.getElementById("countSiteAll");
// let numberofRegion = 0;
// console.log(globalSiteId)
// getregion = ip + "inventory/get-regions/?company_id=15&token=" + token + "&site_id=" + globalSiteId + "&society_id=" + globalSocietyId;

// let xhr_region = new XMLHttpRequest();
// xhr_region.open("GET", getregion, true);
// console.log("----------------check--12121212121-----------------");

// console.log(getregion);
// xhr_region.onload = function () {
//   resRegion = JSON.parse(this.responseText);
//   console.log("api test -----------");
//   console.log(resRegion.response);

//   // let regionDetails = ``;
//   let regionDetails1 = ``;

//   let arrayID = Object.keys(resRegion.response);
//   let arrayRegion = Object.values(resRegion.response);

//   regionDetails1 =
//     `<li><input id="selectAll" type="checkbox" onclick="getRegionIdForDataMultipleSelect(1000)"/>Select All</li>` +
//     `<hr class="dropdown-divider">`;

//   for (let r = 0; r < arrayRegion.length; r += 1) {
//     regionDetails1 +=
//       `<li><input type="checkbox" name="chkRegion" value="` +
//       arrayID[r] +
//       `" onclick="getRegionIdForDataMultipleSelect(` +
//       r +
//       `)" /li>` +
//       arrayRegion[r] +
//       `</li>` +
//       `<hr class="dropdown-divider">`;
//   }

//   console.log("regionDetails");
//   console.log(regionDetails1);

//   // showRegion.innerHTML = regionDetails;
//   multiRegionSelection.innerHTML = regionDetails1;
// };
// xhr_region.send();

// function getRegionIdForDataMultipleSelect(i) {
//   if (i == 1000) {
//     console.log("Hi");
//     if (document.getElementById("selectAll").checked) {
//       var eleRegion = document.getElementsByName("chkRegion");
//       for (var i1 = 0; i1 < eleRegion.length; i1++) {
//         if (eleRegion[i1].type == "checkbox") {
//           eleRegion[i1].checked = true;
//         }
//       }
//     } else {
//       var eleRegion = document.getElementsByName("chkRegion");
//       for (var i1 = 0; i1 < eleRegion.length; i1++) {
//         if (eleRegion[i1].type == "checkbox") {
//           eleRegion[i1].checked = false;
//         }
//       }
//     }
//   }

//   let markedRegion = "";

//   var markedCheckboxSites = document.querySelectorAll(
//     'input[name="chkRegion"]:checked'
//   );
//   if (markedCheckboxSites.length < numberofRegion) {
//     document.getElementById("selectAll").checked = false;
//   }
//   for (var mChecked of markedCheckboxSites) {
//     if (markedRegion == "") {
//       markedRegion = mChecked.value;
//     } else {
//       markedRegion = markedRegion + "," + mChecked.value;
//     }
//   }
//   countRegion = markedRegion;



//   console.log(markedRegion);

//   let getRegionSites = ip + "inventory/get-sites/?region_id=" + markedRegion;
//   let xhr_region_site = new XMLHttpRequest();
//   xhr_region_site.open("GET", getRegionSites, true);
//   console.log("----------------check-------------------");
//   let resRegionSite;
//   console.log(getregion);
//   xhr_region_site.onload = function () {
//     resRegionSite = JSON.parse(this.responseText);
//     console.log("api test -----------");
//     console.log(resRegionSite.response);

//     let arrayIDSite = Object.keys(resRegionSite.response);
//     let arrayRegionSite = Object.values(resRegionSite.response);

//     let regionSiteDetails1 = ``;

//     regionSiteDetails1 =
//       `<li><input id="selectSiteAll" type="checkbox" onclick="getRegionSiteForDataMultipleSelect(1000)"/>Select All</li>` +
//       `<hr class="dropdown-divider">`;

//     for (let r = 0; r < arrayRegionSite.length; r += 1) {
//       regionSiteDetails1 +=
//         `<li><input type="checkbox" name="chkRegionSite" value="` +
//         arrayIDSite[r] +
//         `" onclick="getRegionSiteForDataMultipleSelect(` +
//         r +
//         `)" />` +
//         arrayRegionSite[r] +
//         `</li>` +
//         `<hr class="dropdown-divider">`;
//     }

//     console.log("regionSiteDetails1");
//     console.log(regionSiteDetails1);

//     // showRegion.innerHTML = regionDetails;
//     multiSiteSelection.innerHTML = regionSiteDetails1;
//   };
//   xhr_region_site.send();
// }

// function getRegionSiteForDataMultipleSelect(i) {
//   if (i == 1000) {
//     console.log("Hi");
//     if (document.getElementById("selectSiteAll").checked) {
//       var eleRegionSite = document.getElementsByName("chkRegionSite");
//       for (var i1 = 0; i1 < eleRegionSite.length; i1++) {
//         if (eleRegionSite[i1].type == "checkbox") {
//           eleRegionSite[i1].checked = true;
//         }
//       }
//     } else {
//       var eleRegionSite = document.getElementsByName("chkRegionSite");
//       for (var i1 = 0; i1 < eleRegionSite.length; i1++) {
//         if (eleRegionSite[i1].type == "checkbox") {
//           eleRegionSite[i1].checked = false;
//         }
//       }
//     }
//   }

//   let markedRegionSite = "";

//   var markedCheckboxRegionSites = document.querySelectorAll(
//     'input[name="chkRegionSite"]:checked'
//   );
//   if (markedCheckboxRegionSites.length < numberofRegion) {
//     document.getElementById("selectSiteAll").checked = false;
//   }
//   for (var mCheckedSite of markedCheckboxRegionSites) {
//     if (markedRegionSite == "") {
//       markedRegionSite = mCheckedSite.value;
//     } else {
//       markedRegionSite = markedRegionSite + "," + mCheckedSite.value;
//     }
//   }
//   // grid.load(items);
//   // markedRegionSite.innerHTML=countSite;
//   countSite = markedRegionSite;
//   countSiteAll = countRegion + markedRegionSite;
//   console.log("======================================Region Sites============================================");
//   console.log(markedRegionSite);
//   countSite = markedRegionSite;
// }

// function getRegionIdForAllSelect(r) {
//   var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//   for (var checkbox of checkboxes) {
//     checkbox.checked = this.checked;
//   }
// }

// var checkList = document.getElementById("list1");
// checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
//   if (checkList.classList.contains("visible"))
//     checkList.classList.remove("visible");
//   else checkList.classList.add("visible");
// };

// var checkList1 = document.getElementById("list2");
// checkList1.getElementsByClassName("anchor")[0].onclick = function (ev) {
//   if (checkList1.classList.contains("visible"))
//     checkList1.classList.remove("visible");
//   else checkList1.classList.add("visible");
// };



// ------------------------------------------------------------------

// $(document).ready(function () {
//   var dropdown = $("#list1");
//   var dropdownMenu = $("#multiRegionSelection");

//   // Show/hide the dropdown when clicking on the anchor
//   dropdown.on("click", function (event) {
//     event.stopPropagation();
//     dropdownMenu.toggle();
//   });

//   // Hide the dropdown when clicking outside
//   $(document).on("click", function (event) {
//     if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
//       dropdownMenu.hide();
//     }
//   });

//   // Prevent the dropdown from closing when clicking on checkboxes
//   dropdownMenu.on("click", function (event) {
//     event.stopPropagation();
//   });
// });


// $(document).ready(function () {
//   var dropdown = $("#list2");
//   var dropdownMenu = $("#multiSiteSelection");

//   // Show/hide the dropdown when clicking on the anchor
//   dropdown.on("click", function (event) {
//     event.stopPropagation();
//     dropdownMenu.toggle();
//   });

//   // Hide the dropdown when clicking outside
//   $(document).on("click", function (event) {
//     if (!dropdown.is(event.target) && dropdown.has(event.target).length === 0) {
//       dropdownMenu.hide();
//     }
//   });

//   // Prevent the dropdown from closing when clicking on checkboxes
//   dropdownMenu.on("click", function (event) {
//     event.stopPropagation();
//   });
// });






//-----------------------------------------------------------------


const date = new Date();


year = date.getFullYear();
month = ("0" + (date.getMonth() + 1)).slice(-2);
day = ("0" + date.getDate()).slice(-2);

let todaysDate = `${year}-${month}-${day}`;

endDate.value = year + "-" + month + "-" + day;


let thirtyDaysAgo = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000);
console.log(thirtyDaysAgo.toISOString().slice(0, 10));
let newDate = thirtyDaysAgo.toISOString().slice(0, 10);



startDate.value = newDate;
//  callLinks("inventory");

grid.load(savedLayout);
loadDashboardData( startDate.value, endDate.value);

function showToggleInventory() {
  showDaily.style.display = "none";
  showCustom.style.display = "none";
  showInventory.style.display = "block";

  toggleDaily.className = "l px-4";
  toggleCustom.className = "l px-4";
  toggleInventory.className = "l px-4 l-active";

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let todaysDate = `${year}-${month}-${day}`;

  callLinks("inventory");
  document.getElementById("toggleInventory").href = "inventory.html?token=" + token + "&site_id=" + globalSiteId;
;
  grid.load(savedLayout);
  loadDashboardData(todaysDate, todaysDate);
}

function showToggleDaily() {
  showDaily.style.display = "block";
  showCustom.style.display = "none";

  toggleDaily.className = "l px-4 l-active";
  toggleCustom.className = "l px-4";
  toggleInventory.className = "l px-4";

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();


  let todaysDate = `${year}-${month}-${day}`;

  callLinks("daily");
  document.getElementById("toggleDaily").href = "index.html?token=" + token + "&site_id=" + globalSiteId;

  grid.load(savedLayout);
  loadDashboardData("daily", todaysDate, 0);
}

function showDateInventory() {
  if (startDate.value != "" && endDate.value != "") {
    console.log("Start Date - " + startDate.value);
    console.log("End Date - " + endDate.value);
    // callLinks("inventory");
    // globalDateFirst = startDate.value;
    // globalDateSecond = secondDate;
    grid.load(items);

    loadDashboardData(startDate.value, endDate.value);
  }
}

function showToggleCustom() {
  showDaily.style.display = "none";
  showCustom.style.display = "block";
  showInventory.style.display = "none";

  toggleDaily.className = "l px-4";
  toggleCustom.className = "l px-4 l-active";
  toggleInventory.className = "l px-4";

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let todaysDate = `${year}-${month}-${day}`;

  callLinks("custom");
  console.log(globalSiteId);
  document.getElementById("toggleCustom").href = "custom.html?token=" + token + "&site_id=" + globalSiteId;
  // grid.load(items);
  // loadDashboardData("custom", newDate, todaysDate);

  // if (savedLayout && savedLayout.length > 0) {
  //   console.log(JSON.parse(data.dashboard));
  grid.load(savedLayout);
  loadDashboardData("custom", newDate, todaysDate);

  // } else {
  //   grid.load(items);
  //   loadDashboardData("custom", newDate, todaysDate);
  // }

}
// Load all the Dashboard One Time
function loadDashboardData(firstDate, secondDate) {
  // globalType = type;
  globalDateFirst = firstDate;
  globalDateSecond = secondDate;
  // funamc();
  funInventoryConsumption();
  funInventoryReport();
  funCurrentStock();

  funInventoryConsumptionGreen();
  funInventoryReportGreen();
  funCurrentStockGreen();
}

// Refresh Widget when enebled
function showRefreshWidgets() {
  grid.load(items);

  if (activeInventoryConsumption == 1 && resfunInventoryConsumption != null) {
    let inventoryConsumptionNoData = document.getElementById(
      "inventoryConsumptionNoData"
    );
    let tablebodyInventoryConsumption = document.getElementById(
      "tablebodyInventoryConsumption"
    );
    let tblInventoryConsumptioninfo = document.getElementById(
      "tblInventoryConsumptioninfo"
    );
    let loaderInventoryConsumption = document.getElementById(
      "loaderInventoryConsumption"
    );

    tblInventoryConsumptioninfo.style.display = "none";
    loaderInventoryConsumption.style.display = "block";
    inventoryConsumptionNoData.style.display = "none";

    // resfunInventoryConsumption = JSON.parse(this.responseText);
    console.log("Leaderboard - ");
    console.log(resfunInventoryConsumption);

    let resfunInventoryConsumptionArray = resfunInventoryConsumption.response;
    allDetails = ``;
    var index = 0;

    for (let x in resfunInventoryConsumptionArray) {
      index += 1;
      allDetails +=
        `<tr>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][0] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][1] +
        `<td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][2] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][3] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][4] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][5] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][6] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][7] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][8] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][9] +
        `</td>` +
        `</tr>`;
    }
    tablebodyInventoryConsumption.innerHTML = allDetails;

    loaderInventoryConsumption.style.display = "none";
    if (resfunCommLeaderboardArray.length == 0) {
      inventoryConsumptionNoData.style.display = "block";
      tblInventoryConsumptioninfo.style.display = "none";
    } else {
      inventoryConsumptionNoData.style.display = "none";
      tblInventoryConsumptioninfo.style.display = "block";
    }
  }

  if (activeInventoryReport == 1 && resfunInventoryReport != null) {
    let loaderInventoryReport = document.getElementById(
      "loaderInventoryReport"
    );
    let inventoryReportNoData = document.getElementById(
      "inventoryReportNoData"
    );
    let inventory_report = document.getElementById("inventory-report");

    loaderInventoryReport.style.display = "block";
    inventoryReportNoData.style.display = "none";

    console.log("Inventory Report - ");
    console.log(resfunInventoryReport);

    new Chart(inventory - report, {
      type: "pie",
      data: {
        labels: ["abc", "abcd",],
        datasets: [
          {
            label: "Share",
            data: [
              resfunInventoryReport.response,
              // resfunInventoryReport.response["Engineering"],
              ,
            ],
            backgroundColor: ["#f8ea94", "#a1cd7a", "#e2445b", "#f2c06c"],
            borderWidth: 1,
            radius: "80%",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: "#ffffff",
            font: {
              size: "14",
              weight: "bold",
            },
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    loaderInventoryReport.style.display = "none";
    if (resfunInventoryReport.response == 0) {
      inventoryReportNoData.style.display = "block";
      inventory_report.style.display = "none";
    } else {
      inventoryReportNoData.style.display = "none";
      inventory_report.style.display = "block";
    }

  }

  if (activeCurrentStock == 1 && resfunCurrentStock != null) {
    let loaderCurrentStock = document.getElementById("loaderCurrentStock");
    let barChartCurrentStock = document.getElementById("current-Stock");
    let CurrentStockNoData = document.getElementById("clusterStatsNoData");

    barChartCurrentStock.style.display = "none";
    loaderCurrentStock.style.display = "block";
    CurrentStockNoData.style.display = "none";

    resfunCurrentStock = JSON.parse(this.responseText);
    console.log("Current Stock - ");
    console.log(resfunCurrentStock);

    let xLabelsArray = resfunCurrentStock.leaderboard;

    let xLabelsArrayDate = [],
      xLabelsArrayCount = [];

    for (let i = 0; i < xLabelsArray.length; i += 1) {
      console.log(xLabelsArray[i].date);
      console.log(xLabelsArray[i].count);
      xLabelsArrayDate[i] = xLabelsArray[i].site_name;
      xLabelsArrayCount[i] = xLabelsArray[i].count;
    }

    new Chart(barChartCurrentStock, {
      type: "bar",
      data: {
        labels: xLabelsArrayDate,
        datasets: [
          {
            label: "Days",
            backgroundColor: [
              "#77216F",
              "#01C875",
              "#E2445B",
              "#E95420",
              "#A1CD7A",
            ],
            data: xLabelsArrayCount,
            borderRadius: 15,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: {
              display: true,
              text: "Total steps taken",
            },
          },
        },
        plugins: {
          datalabels: {
            color: "#000000",
            anchor: "end",
            align: "end",
            offset: -6,
            font: {
              size: "10",
              weight: "bold",
            },
          },
          legend: {
            display: true,
            position: "no",
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    loaderCurrentStock.style.display = "none";
    if (xLabelsArray.length == 0) {
      CurrentStockNoData.style.display = "block";
      barChartCurrentStock.style.display = "none";
    } else {
      CurrentStockNoData.style.display = "none";
      barChartCurrentStock.style.display = "block";
    }

  }

  if (activeInventoryConsumptionGreen == 1 && resfunInventoryConsumptionGreen != null) {
    let inventoryConsumptionGreenNoData = document.getElementById(
      "inventoryConsumptionGreenNoData"
    );
    let tablebodyInventoryConsumptionGreen = document.getElementById(
      "tablebodyInventoryConsumptionGreen"
    );
    let tblInventoryConsumptionGreeninfo = document.getElementById(
      "tblInventoryConsumptionGreeninfo"
    );
    let loaderInventoryConsumptionGreen = document.getElementById(
      "loaderInventoryConsumptionGreen"
    );

    tblInventoryConsumptionGreeninfo.style.display = "none";
    loaderInventoryConsumptionGreen.style.display = "block";
    inventoryConsumptionGreenNoData.style.display = "none";

    let resfunInventoryConsumptionGreenArray =
      resfunInventoryConsumptionGreen.response;
    allDetails = ``;
    // var index = 0;

    for (let x in resfunInventoryConsumptionGreenArray) {
      // index += 1;
      allDetails +=
        `<tr>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][0] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][1] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][2] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][3] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][4] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][5] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][6] +
        `</td>`;
      // `<td>` +
      // resfunInventoryConsumptionGreenArray[x][7] +
      // `</td>` +
      // `<td>` +
      // resfunInventoryConsumptionGreenArray[x][8] +
      // `</td>` +
      if (
        resfunInventoryConsumptionGreenArray[x][7] < 0 ||
        resfunInventoryConsumptionGreenArray[x][7] == null
      ) {
        allDetails = allDetails + `<td></td>`;
      } else {
        allDetails =
          allDetails +
          `<td>` +
          resfunInventoryConsumptionGreenArray[x][7] +
          `</td>`;
      }
      if (
        resfunInventoryConsumptionGreenArray[x][8] < 0 ||
        resfunInventoryConsumptionGreenArray[x][8] == null
      ) {
        allDetails = allDetails + `<td></td>`;
      } else {
        allDetails =
          allDetails +
          `<td>` +
          resfunInventoryConsumptionGreenArray[x][8] +
          `</td>`;
      }
      +`</tr>`;
    }
    tablebodyInventoryConsumptionGreen.innerHTML = allDetails;

    loaderInventoryConsumptionGreen.style.display = "none";
    if (resfunInventoryConsumptionGreenArray.length == 0) {
      inventoryConsumptionGreenNoData.style.display = "block";
      tblInventoryConsumptionGreeninfo.style.display = "none";
    } else {
      inventoryConsumptionGreenNoData.style.display = "none";
      tblInventoryConsumptionGreeninfo.style.display = "block";
    }
  }

  if (activeInventoryConsumptionReportGreen == 1 && resfunInventoryReportGreen != null) {
    let loaderInventoryReportGreen = document.getElementById(
      "loaderInventoryReportGreen"
    );
    let inventoryReportGreenNoData = document.getElementById(
      "inventoryReportGreenNoData"
    );
    let inventory_report_green = document.getElementById(
      "inventory_report_green"
    );
    let inventoryReportGreen = document.getElementById("inventoryReportGreen");

    // inventory_report.style.display = "none";
    loaderInventoryReportGreen.style.display = "block";
    inventoryReportGreenNoData.style.display = "none";


    let sum = 0;

    let valueName = [];
    let valueY = [];


    valueName = Object.keys(resfunInventoryReportGreen.response);
    valueY = Object.values(resfunInventoryReportGreen.response);
    console.log(valueName);
    console.log(valueY);

    let inventoryReportColor = [
      "#F8EA94",
      "#A1CD7A",
      "#F2C06C",
      "#D44B52",
      "#F69380",
      "#FF933C",
      "#FFBD3C",
      "#B4FF3C",
      "#4BFF3C",
      "#F69380",
      "#3CFF93",
      "#3CDEFF",
      "#3C4BFF",
      "#BD3CFF",
      "#FF3CFC",
      "#5F8900",
      "#008913",
      "#007C89",
      "#280089",
      "#890069",
    ];



    new Chart(inventory_report_green, {
      type: "pie",
      data: {
        labels: valueName,
        datasets: [
          {
            label: "Inventory Report Green",
            data: valueY,
            backgroundColor: inventoryReportColor,
            borderWidth: 1,
            radius: "100%",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: "#ffffff",
            font: {
              size: "14",
              weight: "bold",
            },
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    for (let i = 0; i < valueY.length; i += 1) {
      if (valueY[i] == null) {
        let a = 0;
        sum += a;
      } else {
        sum += valueY[i];
      }
    }

    loaderInventoryReportGreen.style.display = "none";
    if (sum == 0) {
      inventoryReportGreenNoData.style.display = "block";
      inventory_report_green.style.display = "none";
    } else {
      inventoryReportGreenNoData.style.display = "none";
      inventory_report_green.style.display = "block";
    }
  }

  if (activeCurrentStockGreen == 1 && resfunCurrentStockGreen != null) {
    let loaderCurrentStockGreen = document.getElementById("loaderCurrentStock");
    let barChartCurrentStockGreen = document.getElementById(
      "current-Stock-Green"
    );
    let CurrentStockGreenNoData = document.getElementById(
      "clusterStatsGreenNoData"
    );

    barChartCurrentStockGreen.style.display = "none";
    loaderCurrentStockGreen.style.display = "block";

    let xLabelsArrays = [];
    xLabelsArrays = Object.keys(resfunCurrentStockGreen.response);
    // let xLabelsArray = resfunCurrentStock.leaderboard;

    let xLabelsArrayCs = [];
    let xLabelsArrayMs = [];
    // object.value
    let xLabelArrayV = [];
    xLabelArrayV = Object.values(resfunCurrentStockGreen.response);

    for (let i = 0; i < xLabelArrayV.length; i += 1) {
      console.log(xLabelsArrays[i].Current_Stock);
      console.log(xLabelsArrays[i].Minimum_Stock);
      xLabelsArrayCs[i] = xLabelArrayV[i].Current_Stock;
      xLabelsArrayMs[i] = xLabelArrayV[i].Minimum_Stock;
    }

    new Chart(barChartCurrentStockGreen, {
      type: "line",
      data: {
        labels: xLabelsArrays,
        // labels: ["", "", ""],
        datasets: [
          {
            label: "Minimum Stock",
            backgroundColor: ["#e2445b"],
            data: xLabelsArrayMs,
            tension: 0.4,
            borderColor: ["#e2445b"],
            borderWidth: 1,
            stack: "Stack 0",
          },
          {
            label: "Current Stock",
            backgroundColor: ["#01c875"],
            data: xLabelsArrayCs,
            tension: 0.4,
            borderColor: ["#01c875"],
            borderWidth: 1,
            stack: "Stack 0",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: "Total steps taken",
            },
          },
        },
        plugins: {
          datalabels: {
            color: "#000000",
            anchor: "end",
            align: "end",
            offset: -6,
            font: {
              size: "10",
              weight: "bold",
            },
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    loaderCurrentStockGreen.style.display = "none";
    if (xLabelsArrays.length == 0) {
      // CurrentStockGreenNoData.style.display = "block";
      barChartCurrentStockGreen.style.display = "none";
    } else {
      // CurrentStockGreenNoData.style.display = "none";
      barChartCurrentStockGreen.style.display = "block";
    }
  }
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Load Functions
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://43.204.20.61:8000/inventory/get-amc/?site_id=1021,28,7,11




function funamc() {
  let visamc = document.getElementById("visamc");

  let xhr_object = new XMLHttpRequest();
  xhr_object.open(
    "GET",
    getamc +
    idLink +
    //  + "?site_id=" + countSiteAll,
    // "?region_id=" +
    // "" +
    // "&site_id=" +
    // countSiteAll,
    //  +
    "&from_date=" + globalDateFirst + "&to_date=" + globalDateSecond,
    true
  );
  console.log(getamc);
  console.log(globalDateFirst);

  xhr_object.onload = function () {
    resfunamc = JSON.parse(this.responseText);

    console.log("Staff - ");
    console.log(resfunamc);
    visamc.innerHTML = resfunamc.response + "";
  };
  xhr_object.send();
}

function funInventoryConsumption() {
  // loaderInventoryConsumption,inventoryConsumptionNoData,tblInventoryConsumptioninfo,tablebodyInventoryConsumption
  let inventoryConsumptionNoData = document.getElementById(
    "inventoryConsumptionNoData"
  );
  let tablebodyInventoryConsumption = document.getElementById(
    "tablebodyInventoryConsumption"
  );
  let tblInventoryConsumptioninfo = document.getElementById(
    "tblInventoryConsumptioninfo"
  );
  let loaderInventoryConsumption = document.getElementById(
    "loaderInventoryConsumption"
  );

  // tblInventoryConsumptioninfo.style.display = "none";
  // loaderInventoryConsumption.style.display = "block";
  // inventoryConsumptionNoData.style.display = "none";
  console.log(getInventoryConsumption);
  let xhr_object = new XMLHttpRequest();
  xhr_object.open(
    "GET",
    getInventoryConsumption +
    idLink +
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    true
  );
  console.log(
    getInventoryConsumption +
    idLink +
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond
  );
  console.log("========================================");
  // console.log(globalDateFirst);
  // console.log(getInventoryConsumption);
  xhr_object.onload = function () {
    resfunInventoryConsumption = JSON.parse(this.responseText);
    console.log("InventoryConsumption - ");
    console.log(resfunInventoryConsumption);

    let resfunInventoryConsumptionArray = resfunInventoryConsumption.response;
    allDetails = ``;
    // var index = 0;

    for (let x in resfunInventoryConsumptionArray) {
      // index += 1;
      allDetails +=
        `<tr>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][0] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][1] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][2] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][3] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][4] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][5] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionArray[x][6] +
        `</td>`;

      // `<td>` +
      // resfunInventoryConsumptionArray[x][7] +
      // `</td>` +
      // `<td>` +
      // resfunInventoryConsumptionArray[x][8] +
      // `</td>`  +`</tr>`;
      // `<td>` +
      // resfunInventoryConsumptionArray[x][9] +
      // `</td>`
      if (
        resfunInventoryConsumptionArray[x][7] < 0 ||
        resfunInventoryConsumptionArray[x][7] == null
      ) {
        allDetails = allDetails + `<td></td>`;
      } else {
        allDetails =
          allDetails + `<td>` + resfunInventoryConsumptionArray[x][7] + `</td>`;
      }
      if (
        resfunInventoryConsumptionArray[x][8] < 0 ||
        resfunInventoryConsumptionArray[x][8] == null
      ) {
        allDetails = allDetails + `<td></td>`;
      } else {
        allDetails =
          allDetails + `<td>` + resfunInventoryConsumptionArray[x][8] + `</td>`;
      }
      +`</tr>`;
    }
    tablebodyInventoryConsumption.innerHTML = allDetails;

    loaderInventoryConsumption.style.display = "none";
    if (resfunInventoryConsumptionArray.length == 0) {
      inventoryConsumptionNoData.style.display = "block";
      tblInventoryConsumptioninfo.style.display = "none";
    } else {
      inventoryConsumptionNoData.style.display = "none";
      tblInventoryConsumptioninfo.style.display = "block";
    }
  };
  xhr_object.send();
}
// green
function funInventoryConsumptionGreen() {
  // loaderInventoryConsumptionGreen,inventoryConsumptionGreenNoData,tblInventoryConsumptionGreeninfo,tablebodyInventoryConsumptionGreen
  let inventoryConsumptionGreenNoData = document.getElementById(
    "inventoryConsumptionGreenNoData"
  );
  let tablebodyInventoryConsumptionGreen = document.getElementById(
    "tablebodyInventoryConsumptionGreen"
  );
  let tblInventoryConsumptionGreeninfo = document.getElementById(
    "tblInventoryConsumptionGreeninfo"
  );
  let loaderInventoryConsumptionGreen = document.getElementById(
    "loaderInventoryConsumptionGreen"
  );

  // tblInventoryConsumptionGreeninfo.style.display = "none";
  // loaderInventoryConsumptionGreen.style.display = "block";
  // inventoryConsumptionGreenNoData.style.display = "none";
  console.log(getInventoryConsumptionGreen);
  let xhr_object = new XMLHttpRequest();
  xhr_object.open(
    "GET",
    getInventoryConsumptionGreen +
    idLink +
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    true
  );
  console.log(
    getInventoryConsumptionGreen +
    idLink +
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond
  );
  console.log("========================================");

  xhr_object.onload = function () {
    resfunInventoryConsumptionGreen = JSON.parse(this.responseText);
    console.log("InventoryConsumption -green ");
    console.log(resfunInventoryConsumptionGreen);

    let resfunInventoryConsumptionGreenArray =
      resfunInventoryConsumptionGreen.response;
    allDetails = ``;
    // var index = 0;

    for (let x in resfunInventoryConsumptionGreenArray) {
      // index += 1;
      allDetails +=
        `<tr>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][0] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][1] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][2] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][3] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][4] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][5] +
        `</td>` +
        `<td>` +
        resfunInventoryConsumptionGreenArray[x][6] +
        `</td>`;
      // `<td>` +
      // resfunInventoryConsumptionGreenArray[x][7] +
      // `</td>` +
      // `<td>` +
      // resfunInventoryConsumptionGreenArray[x][8] +
      // `</td>` +
      if (
        resfunInventoryConsumptionGreenArray[x][7] < 0 ||
        resfunInventoryConsumptionGreenArray[x][7] == null
      ) {
        allDetails = allDetails + `<td></td>`;
      } else {
        allDetails =
          allDetails +
          `<td>` +
          resfunInventoryConsumptionGreenArray[x][7] +
          `</td>`;
      }
      if (
        resfunInventoryConsumptionGreenArray[x][8] < 0 ||
        resfunInventoryConsumptionGreenArray[x][8] == null
      ) {
        allDetails = allDetails + `<td></td>`;
      } else {
        allDetails =
          allDetails +
          `<td>` +
          resfunInventoryConsumptionGreenArray[x][8] +
          `</td>`;
      }
      +`</tr>`;
    }
    tablebodyInventoryConsumptionGreen.innerHTML = allDetails;

    loaderInventoryConsumptionGreen.style.display = "none";
    if (resfunInventoryConsumptionGreenArray.length == 0) {
      inventoryConsumptionGreenNoData.style.display = "block";
      tblInventoryConsumptionGreeninfo.style.display = "none";
    } else {
      inventoryConsumptionGreenNoData.style.display = "none";
      tblInventoryConsumptionGreeninfo.style.display = "block";
    }
  };
  xhr_object.send();
}

// pie
function funInventoryReport() {
  // loaderInventoryReport,inventoryReportNoData,inventory_report
  let loaderInventoryReport = document.getElementById("loaderInventoryReport");
  let inventoryReportNoData = document.getElementById("inventoryReportNoData");
  let inventory_report = document.getElementById("inventory_report");
  let inventoryReport = document.getElementById("inventoryReport");

  // inventory_report.style.display = "none";
  // loaderInventoryReport.style.display = "block";
  // inventoryReportNoData.style.display = "none";

  let xhr_object = new XMLHttpRequest();
  xhr_object.open(
    "GET",
    getInventoryReport +
    idLink+
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    true
  );

  xhr_object.onload = function () {
    resfunInventoryReport = JSON.parse(this.responseText);

    console.log("Inventory Report - ");
    console.log(resfunInventoryReport);

    let sum = 0;

    let valueN = [];
    let valueYa = [];

    // let arrayP = [];

    // for (let i = 0; i < resfunInventoryReport.response.length; i++) {
    //   valueN[i] = resfunInventoryReport.response[i].name;
    //   valueYa[i] = resfunInventoryReport.response[i].y;
    // }

    // for (let i = 0; i < valueN.length; i++) {
    //   if (valueYa[i] == null) {
    //     arrayP.push({ name: valueN[i], y: 0 });
    //   } else {
    //     arrayP.push({
    //       name: valueN[i],
    //       y: valueYa[i],
    //     });
    //   }
    // }

    valueN = Object.keys(resfunInventoryReport.response);
    valueYa = Object.values(resfunInventoryReport.response);
    console.log(valueN);
    console.log(valueYa);
    console.log("-----------------");
    let inventoryReportColors = [
      "#F8EA94",
      "#A1CD7A",
      "#F2C06C",
      "#D44B52",
      "#F69380",
      "#FF933C",
      "#FFBD3C",
      "#B4FF3C",
      "#4BFF3C",
      "#F69380",
      "#3CFF93",
      "#3CDEFF",
      "#3C4BFF",
      "#BD3CFF",
      "#FF3CFC",
      "#5F8900",
      "#008913",
      "#007C89",
      "#280089",
      "#890069",
    ];

    // let legendList = "";
    // for (let i = 0; i < valueN.length; i++) {
    //   if (valueN[i] != null) {
    //     legendList +=
    //       '<i class="bi  bi-circle-fill " style="color:' +
    //       inventoryReportColors[i] +
    //       ';"></i> ' +
    //       valueN[i] +
    //       "-" +
    //       valueYa[i];
    //     "<br/>" + "<br/>";
    //   }
    // }
    // inventoryReport.innerHTML = legendList;

    // let total = valueN + valueYa;

    // const centerTexts = {
    //   id: "centerTexts",
    //   afterDatasetsDraw(chart, args, options) {
    //     const {
    //       ctx,
    //       chartArea: { left, right, top, bottom, width, height },
    //     } = chart;
    //     ctx.save();

    //     ctx.font = "bolder 18px Arial";
    //     ctx.fillStyle = "rgba(0, 0, 0, 1)";
    //     ctx.textAlign = "center";
    //     ctx.fillText("Total: " + total, width, height);
    //   },
    // };

    new Chart(inventory_report, {
      type: "bar",
      data: {
        labels: valueN,
        datasets: [
          {
            label: "Inventory Report",
            data: valueYa,
            backgroundColor: inventoryReportColors,
            borderWidth: 1,
            radius: "100%",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: "#000000",
            anchor: "end",
            align: "end",
            offset: -6,
            font: {
              size: "10",
              weight: 'bold'
            }
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    for (let i = 0; i < valueYa.length; i += 1) {
      if (valueYa[i] == null) {
        let a = 0;
        sum += a;
      } else {
        sum += valueYa[i];
      }
    }

    loaderInventoryReport.style.display = "none";
    if (sum == 0) {
      inventoryReportNoData.style.display = "block";
      inventory_report.style.display = "none";
    } else {
      inventoryReportNoData.style.display = "none";
      inventory_report.style.display = "block";
    }
  };
  xhr_object.send();
}
// pie green
function funInventoryReportGreen() {
  // loaderInventoryReportGreen,inventoryReportGreenNoData,inventory_report_green
  let loaderInventoryReportGreen = document.getElementById(
    "loaderInventoryReportGreen"
  );
  let inventoryReportGreenNoData = document.getElementById(
    "inventoryReportGreenNoData"
  );
  let inventory_report_green = document.getElementById(
    "inventory_report_green"
  );
  let inventoryReportGreen = document.getElementById("inventoryReportGreen");

  // inventory_report.style.display = "none";
  // loaderInventoryReportGreen.style.display = "block";
  // inventoryReportGreenNoData.style.display = "none";

  let xhr_object = new XMLHttpRequest();
  xhr_object.open(
    "GET",
    getInventoryReportGreen +
    idLink +
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    true
  );

  xhr_object.onload = function () {
    resfunInventoryReportGreen = JSON.parse(this.responseText);

    console.log("Inventory Report - green");
    console.log(resfunInventoryReportGreen);

    let sum = 0;

    let valueName = [];
    let valueY = [];


    valueName = Object.keys(resfunInventoryReportGreen.response);
    valueY = Object.values(resfunInventoryReportGreen.response);
    console.log(valueName);
    console.log(valueY);

    let inventoryReportColor = [
      "#F8EA94",
      "#A1CD7A",
      "#F2C06C",
      "#D44B52",
      "#F69380",
      "#FF933C",
      "#FFBD3C",
      "#B4FF3C",
      "#4BFF3C",
      "#F69380",
      "#3CFF93",
      "#3CDEFF",
      "#3C4BFF",
      "#BD3CFF",
      "#FF3CFC",
      "#5F8900",
      "#008913",
      "#007C89",
      "#280089",
      "#890069",
    ];



    new Chart(inventory_report_green, {
      type: "pie",
      data: {
        labels: valueName,
        datasets: [
          {
            label: "Inventory Report Green",
            data: valueY,
            backgroundColor: inventoryReportColor,
            borderWidth: 1,
            radius: "100%",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: "#ffffff",
            font: {
              size: "14",
              weight: "bold",
            },
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    for (let i = 0; i < valueY.length; i += 1) {
      if (valueY[i] == null) {
        let a = 0;
        sum += a;
      } else {
        sum += valueY[i];
      }
    }

    loaderInventoryReportGreen.style.display = "none";
    if (sum == 0) {
      inventoryReportGreenNoData.style.display = "block";
      inventory_report_green.style.display = "none";
    } else {
      inventoryReportGreenNoData.style.display = "none";
      inventory_report_green.style.display = "block";
    }
  };
  xhr_object.send();
}

// bar
function funCurrentStock() {
  // loaderCurrentStock,CurrentStockNoData,current-Stock
  let loaderCurrentStock = document.getElementById("loaderCurrentStock");
  let barChartCurrentStock = document.getElementById("current-Stock");
  let CurrentStockNoData = document.getElementById("clusterStatsNoData");

  // barChartCurrentStock.style.display = "none";
  // loaderCurrentStock.style.display = "block";
  // CurrentStockNoData.style.display = "none";

  let xhr_object = new XMLHttpRequest();
  xhr_object.open(
    "GET",
    getCurrentStock +
    idLink+
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    true
  );

  xhr_object.onload = function () {
    resfunCurrentStock = JSON.parse(this.responseText);
    console.log("Cluster Stats - ");
    console.log(resfunCurrentStock);



    let xLabelsArray = [];
    xLabelsArray = Object.keys(resfunCurrentStock.response);

    let xLabelsArrayCurrent = [];
    let xLabelsArrayMini = [];

    console.log(xLabelsArray);

    let xLabelArrayValue = [];
    xLabelArrayValue = Object.values(resfunCurrentStock.response);

    for (let i = 0; i < xLabelArrayValue.length; i += 1) {
      xLabelsArrayCurrent[i] = xLabelArrayValue[i].Current_Stock;
      xLabelsArrayMini[i] = xLabelArrayValue[i].Minimum_Stock;
      console.log(xLabelsArrayCurrent[i]);
      console.log(xLabelsArrayMini[i]);
    }

    new Chart(barChartCurrentStock, {
      type: "line",
      data: {
        labels: xLabelsArray,
        // labels: ["", "", ""],
        datasets: [
          {
            label: "Minimum Stock",
            backgroundColor: ["#e2445b"],
            data: xLabelsArrayMini,
            tension: 0.4,
            borderColor: ["#e2445b"],
            borderWidth: 1,
            stack: "Stack 0",
          },
          {
            label: "Current Stock",
            backgroundColor: ["#01c875"],
            data: xLabelsArrayCurrent,
            tension: 0.4,
            borderColor: ["#01c875"],
            borderWidth: 1,
            stack: "Stack 0",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: false,
          },
          y: {
            stacked: false,
            title: {
              display: true,
              text: "Total steps taken",
            },
          },
        },
        plugins: {
          datalabels: {
            color: "#000000",
            anchor: "end",
            align: "end",
            offset: -6,
            font: {
              size: "10",
              weight: "bold",
            },
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    loaderCurrentStock.style.display = "none";
    if (xLabelsArray.length == 0) {
      // CurrentStockNoData.style.display = "block";
      barChartCurrentStock.style.display = "none";
    } else {
      // CurrentStockNoData.style.display = "none";
      barChartCurrentStock.style.display = "block";
    }
  };
  xhr_object.send();
}

// bar green
function funCurrentStockGreen() {
  // loaderCurrentStockGreen,CurrentStockGreenNoData,current-Stock-Green
  let loaderCurrentStockGreen = document.getElementById("loaderCurrentStockGreen");
  let barChartCurrentStockGreen = document.getElementById(
    "current-Stock-Green"
  );
  let CurrentStockGreenNoData = document.getElementById(
    "CurrentStockGreenNoData"
  );

  barChartCurrentStockGreen.style.display = "none";
  loaderCurrentStockGreen.style.display = "none";
  CurrentStockGreenNoData.style.display = "none";

  let xhr_object = new XMLHttpRequest();
  xhr_object.open(
    "GET",
    idLink +
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    true
  );

  xhr_object.onload = function () {
    resfunCurrentStockGreen = JSON.parse(this.responseText);
    console.log("current Stock----------------- - green ");
    console.log(resfunCurrentStockGreen);

    let xLabelsArrays = [];
    xLabelsArrays = Object.keys(resfunCurrentStockGreen.response);
    // let xLabelsArray = resfunCurrentStock.leaderboard;

    let xLabelsArrayCs = [];
    let xLabelsArrayMs = [];
    // object.value
    let xLabelArrayV = [];
    xLabelArrayV = Object.values(resfunCurrentStockGreen.response);

    for (let i = 0; i < xLabelArrayV.length; i += 1) {
      console.log(xLabelsArrays[i].Current_Stock);
      console.log(xLabelsArrays[i].Minimum_Stock);
      xLabelsArrayCs[i] = xLabelArrayV[i].Current_Stock;
      xLabelsArrayMs[i] = xLabelArrayV[i].Minimum_Stock;
    }

    new Chart(barChartCurrentStockGreen, {
      type: "line",
      data: {
        labels: xLabelsArrays,
        // labels: ["", "", ""],
        datasets: [
          {
            label: "Minimum Stock",
            backgroundColor: ["#e2445b"],
            data: xLabelsArrayMs,
            tension: 0.4,
            borderColor: ["#e2445b"],
            borderWidth: 1,
            stack: "Stack 0",
          },
          {
            label: "Current Stock",
            backgroundColor: ["#01c875"],
            data: xLabelsArrayCs,
            tension: 0.4,
            borderColor: ["#01c875"],
            borderWidth: 1,
            stack: "Stack 0",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: "Total steps taken",
            },
          },
        },
        plugins: {
          datalabels: {
            color: "#000000",
            anchor: "end",
            align: "end",
            offset: -6,
            font: {
              size: "10",
              weight: "bold",
            },
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    loaderCurrentStockGreen.style.display = "none";
    if (xLabelsArrays.length == 0) {
      CurrentStockGreenNoData.style.display = "block";
      barChartCurrentStockGreen.style.display = "none";
    } else {
      CurrentStockGreenNoData.style.display = "none";
      barChartCurrentStockGreen.style.display = "block";
    }
  };
  xhr_object.send();
}

// Show & Hide Widgets----------------------------------------------------------------------------------------------

function showInventoryConsumption() {
  if (activeInventoryConsumption == 0) {
    activeInventoryConsumption = 1;
    checkInventoryConsumption.style.color = "blue";

    items.push(d11);
    showRefreshWidgets();
  } else {
    activeInventoryConsumption = 0;
    checkInventoryConsumption.style.color = "black";

    const index = items.indexOf(d11);
    if (index > -1) {
      items.splice(index, 1);
    }
    showRefreshWidgets();
  }
}

function showInventoryConsumptionReport() {
  if (activeInventoryReport == 0) {
    activeInventoryReport = 1;
    checkInventoryReport.style.color = "blue";

    items.push(d12);
    showRefreshWidgets();
  } else {
    activeInventoryReport = 0;
    checkInventoryReport.style.color = "black";

    const index = items.indexOf(d12);
    if (index > -1) {
      items.splice(index, 1);
    }
    showRefreshWidgets();
  }
}

function showCurrentStock() {
  if (activeCurrentStock == 0) {
    activeCurrentStock = 1;
    checkCurrentStock.style.color = "blue";

    items.push(d13);
    showRefreshWidgets();
  } else {
    activeCurrentStock = 0;
    checkCurrentStock.style.color = "black";

    const index = items.indexOf(d13);
    if (index > -1) {
      items.splice(index, 1);
    }
    showRefreshWidgets();
  }
}



function showInventoryConsumptionGreen() {
  if (activeInventoryConsumptionGreen == 0) {
    activeInventoryConsumptionGreen = 1;
    checkInventoryConsumptionGreen.style.color = "blue";

    items.push(d14);
    showRefreshWidgets();
  } else {
    activeInventoryConsumptionGreen = 0;
    checkInventoryConsumptionGreen.style.color = "black";

    const index = items.indexOf(d14);
    if (index > -1) {
      items.splice(index, 1);
    }
    showRefreshWidgets();
  }
}

function showInventoryConsumptionReportGreen() {
  if (activeInventoryConsumptionReportGreen == 0) {
    activeInventoryConsumptionReportGreen = 1;
    checkInventoryConsumptionReportGreen.style.color = "blue";

    items.push(d15);
    showRefreshWidgets();
  } else {
    activeInventoryConsumptionReportGreen = 0;
    checkInventoryConsumptionReportGreen.style.color = "black";

    const index = items.indexOf(d15);
    if (index > -1) {
      items.splice(index, 1);
    }
    showRefreshWidgets();
  }
}

function showCurrentStockGreen() {
  if (activeCurrentStockGreen == 0) {
    activeCurrentStockGreen = 1;
    checkCurrentStockGreen.style.color = "blue";

    items.push(d16);
    showRefreshWidgets();
  } else {
    activeCurrentStockGreen = 0;
    checkCurrentStockGreen.style.color = "black";

    const index = items.indexOf(d16);
    if (index > -1) {
      items.splice(index, 1);
    }
    showRefreshWidgets();
  }
}

// Download Reports----------------------------------------------------------------------------------------------

function downloadInventoryConsumption() {
  window.open(
    ip +
    "inventory/get-inventory-consumption-non-green-excel-data/" +
    idLink+
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    "_blank"
  );
}

function downloadInventoryConsumptionReport() {
  window.open(
    ip +
    "inventory/get-inventory-consumption-report-non-green-excel-data/" +
    idLink+
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    "_blank"
  );
}

function downloadCurrentStock() {
  window.open(
    ip +
    "inventory/get-inventory-current-stock-non-green-excel-data/" +
    idLink+
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    "_blank"
  );
}

function downloadInventoryConsumptionGreen() {
  window.open(
    ip +
    "inventory/get-inventory-consumption-green-excel-data/" +
    idLink+
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    "_blank"
  );
}

function downloadInventoryConsumptionReportGreen() {
  window.open(
    ip +
    "inventory/get-inventory-consumption-report-green-excel-data/" +
    idLink+
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    "_blank"
  );
}

function downloadCurrentStockGreen() {
  window.open(
    ip +
    "inventory/get-inventory-current-and-minimum-stock-green-excel-data/" +
    idLink+
    "&from_date=" +
    globalDateFirst +
    "&to_date=" +
    globalDateSecond,
    "_blank"
  );
}