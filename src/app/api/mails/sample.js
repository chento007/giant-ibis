import { getImageUrl } from "../service/utils/api-util";

export const sampleTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E-Ticket</title>
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
    }

    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
        padding: 10px !important;
      }

      .header,
      .trip-info,
      .passenger-table {
        width: 100% !important;
      }

      .header td,
      .trip-info td {
        display: block !important;
        width: 100% !important;
        text-align: center !important;
      }

      .logo-section img {
        height: 60px !important;
      }

      .title {
        font-size: 20px !important;
      }

      .trip-info td {
        padding: 10px 0 !important;
      }

      .passenger-table th,
      .passenger-table td {
        font-size: 12px !important;
        padding: 8px !important;
      }

      .inform-detail ul li {
        font-size: 12px !important;
      }
    }
  </style>
</head>

<body style="margin:0; padding:0; background-color: #f4f4f4; font-family: Poppins, sans-serif;">
  <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff;" class="container">
    <tr>
      <td style="padding: 20px;">
        <!-- Header -->
        <table class="header" style="width: 100%;">
          <tr>
            <td style="text-align: left; font-size: 12px;">
              <div>FROM: cheachento@gmail.com</div>
              <div>Subject: E-Ticket ID #12121</div>
            </td>
            <td style="text-align: right; font-size: 12px;">
              <div>Date: 9 January 2025 3:12 AM</div>
              <div>To: cheachento@gmail.com</div>
            </td>
          </tr>
        </table>

        <!-- Logo -->
        <table class="logo-section" style="width: 100%; border-top: 1px solid #A6A6A6; border-bottom: 1px solid #A6A6A6; margin: 10px 0;">
          <tr>
            <td style="text-align: left;">
              <img src="https://giantibis.com/img/logo.png" alt="Giant Ibis Logo" style="height: 60px;">
            </td>
            <td style="text-align: right; color: #0057A8; font-weight: bold; font-size: 12px;">
              <div>Your E-TICKET</div>
              <div>ID: #121</div>
            </td>
          </tr>
        </table>

        <!-- Payment Summary -->
        <div class="title" style="color: #0057A8; font-size: 18px; font-weight: 700;">Payment Detail</div>
        <table style="width: 100%; margin-top: 10px;">
          <tr>
            <td style="font-size: 10px; font-weight: 600;">
              Amount: 1 ticket(s) <br />
              Total: 10$
            </td>
          </tr>
        </table>

        <!-- Trip Detail -->
        <div class="title" style="color: #0057A8; font-size: 18px; font-weight: 700; margin-top: 20px;">Trip Detail</div>
        <table style="width: 100%; margin-top: 10px;">
          <tr>
            <td style="font-size: 10px; font-weight: 600;">
              Universe Node 37 (Mini van 35 seats)
            </td>
            <td style="text-align: right; color: red; font-size: 10px; font-weight: 600;">
              Seat number:
            </td>
          </tr>
        </table>

        <table style="width: 100%; margin-top: 10px;">
          <tr>
            <td>
              <img width=30 height=30 src=${getImageUrl("aircon.png")} alt="">
              <img width=30 height=30 src=${getImageUrl("aircon.png")} alt="">
              <img width=30 height=30 src=${getImageUrl("aircon.png")} alt="">
              <img width=30 height=30 src=${getImageUrl("aircon.png")} alt="">
            </td>
          </tr>
        </table>

        <table class="trip-info" style="width: 100%; margin-top: 20px;">
          <tr>
            <td style="width: 30%; font-size: 10px; font-weight: 600;">
              Nov 16 2025<br>08:35 AM<br>Phnom Penh<br>
              <a href="" target="_blank">Get Direction</a>
            </td>
            <td style="text-align: center;">
              <span style="font-size: 10px; font-weight: 500;">5 hours</span><br>
              <div style="height: 1px; background-color: black;"></div>
              <span style="font-size: 10px; font-weight: 500;">5 KM</span>
            </td>
            <td style="width: 30%; font-size: 10px; font-weight: 600; text-align: right;">
              Nov 16 2025<br>08:35 AM<br>Phnom Penh
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Divider -->
    <tr>
      <td><div style="width: 100%; background-color: #A6A6A6; height: 1px;"></div></td>
    </tr>

    <!-- Full Payment Detail -->
    <tr>
      <td style="padding: 20px;">
        <div class="title" style="color: #0057A8; font-size: 18px; font-weight: 700;">Payment Detail</div>
        <table style="width: 50%; font-size: 12px;" class="passenger-table">
          <tr><td>Total Ticket Departure:</td><td>10</td></tr>
          <tr><td>Total Ticket Return:</td><td>10</td></tr>
          <tr><td>Amount Departure:</td><td>10</td></tr>
          <tr><td>Amount Return:</td><td>10</td></tr>
          <tr><td>Service Charge:</td><td>10</td></tr>
          <tr><td colspan="2"><div style="width: 120%; background-color: #A6A6A6; height: 1px;"></div></td></tr>
          <tr><td>Total:</td><td>10</td></tr>
        </table>
      </td>
    </tr>

    <!-- Divider -->
    <tr>
      <td><div style="width: 100%; background-color: #A6A6A6; height: 1px;"></div></td>
    </tr>

    <!-- Passenger Detail -->
    <tr>
      <td style="padding: 20px;">
        <div class="title" style="color: #0057A8; font-size: 18px; font-weight: 700;">Passenger Detail</div>
        <table style="width: 100%; margin-top: 15px; border: 1px solid black;" class="passenger-table">
          <tr style="background-color: #D0E8FF;">
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Pickup</th>
          </tr>
          <tr>
            <td>Chea Chento</td>
            <td>092 655 182</td>
            <td>chento@gmail.com</td>
            <td>Siem Reap Hotel</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Divider -->
    <tr>
      <td><div style="width: 100%; background-color: #A6A6A6; height: 1px;"></div></td>
    </tr>

    <!-- Please Be Informed -->
    <tr>
      <td style="padding: 20px;">
        <div class="title" style="color: #0057A8; font-size: 18px; font-weight: 700;">Please be Informed</div>
        <div class="inform-detail" style="font-size: 12px;">
          <ul style="padding-left: 20px;">
            <li>Tickets are non-refundable but exchangeable one time within a year of purchase.</li>
            <li>Online tickets can be bought anytime before departure if seats are available.</li>
            <li>Free pickup is available if tickets are purchased a day in advance.</li>
            <li>Only hotels/guesthouses listed as partners are eligible for free pickup.</li>
            <li>Please wait in your hotel lobby 1 hour before departure for pickup.</li>
            <li>Giant Ibis is not responsible for late/no-show passengers.</li>
            <li>No pickup service for night buses.</li>
            <li>Arrive 35 minutes before departure.</li>
            <li>Tickets or ID must be shown to board.</li>
            <li>Infants are free locally but $15 for international routes. Age 3+ needs a ticket.</li>
            <li>No refunds for complimentary services (Wi-Fi, snacks, etc.).</li>
            <li>Trip time varies depending on road conditions.</li>
            <li>We are not liable for loss/damage to personal items.</li>
            <li>E-tickets are accepted digitally (printing not required).</li>
            <li>Car seats available free with notice; infants need ticket if using one.</li>
            <li>Each passenger allowed 1 carry-on & 2 stored bags max 25kg.</li>
            <li>No livestock, pets, or weapons allowed.</li>
          </ul>
        </div>
      </td>
    </tr>
  </table>
</body>

</html>`;
