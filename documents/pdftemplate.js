const pdfTemplate = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Report</title>
      <style>
        #customers {
          font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
  
        #customers td,
        #customers th {
          border: 1px solid #ddd;
          padding: 8px;
        }
  
        #customers tr:nth-child(even) {
          background-color: #f2f2f2;
        }
  
        #customers tr:hover {
          background-color: #ddd;
        }
  
        #customers th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #464646;
          color: white;
        }
        .text-center {
          text-align: center;
        }
        .float-right {
          float: right;
          margin-right: 20px;
        }
        .float-left {
          float: left;
          margin-left: 20px;
        }
        .content {
          width: auto;
          height: auto;
          margin: 0 auto;
  
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="row mt-3 p-3" style="background-color: rgba(0,119,190, .6)">
          <div class="content">
            <h2 class="float-left mt-2">AVENIDA</h2>
            <p class="float-right mt-2">Report date: November 7, 2019</p>
          </div>
        </div>
  
        <div class="row">
          <div class="col">
            <hr />
          </div>
          <div class="col-auto text-center">
            <h1>Report</h1>
          </div>
          <div class="col">
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="mt-3 col">
            <table id="customers">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Date</th>
                  <th>Time</th>
                  <th scope="col">Water level in meter</th>
                  <th scope="col">Water level in feet</th>
                </tr>
              </thead>
              <tbody>
             
                <tr>
                  <td>November 7, 2019</td>
                  <td>11:10:44</td>
                  <td>5</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>November 7, 2019</td>
                  <td>11:10:44</td>
                  <td>5</td>
                  <td>500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </body>
  </html>
  
    `
}

module.exports = pdfTemplate
